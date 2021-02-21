import React, { Component } from 'react';
import Card from "../components/Card";
import peopleArray from '../starter.json';

export default class Home extends Component {

    state = {
        search: "",
        displayed: [],
        people: []
    }

    componentDidMount() {
        this.setState({
            people: peopleArray,
            displayed: peopleArray
        })
        console.log( this.state.people );
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        console.log( event.target.getAttribute( "data-id" ) );
        const stateCopy = [ ...this.state.people ];
        stateCopy.forEach( obj => {
            if ( obj.id == event.target.getAttribute( "data-id" )) {
                obj[ name ] = value;
            }
        })
        this.setState({
            people: stateCopy,
            displayed: stateCopy
        })
    }

    handleSearch = event => {
        const { name, value } = event.target;

        this.setState({ // This is asynchronous!
            [ name ] : value
        })
        const newArray = this.state.people.filter( obj => {
            const last = obj.name;
            if ( value === last ) {
                return obj;
            }
        })
        this.setState({
            displayed: newArray
        })
    }

    // updateDisplayed = () => {
    //     const newArray = this.state.people.filter( obj => {
    //         const last = obj.name;
    //         if ( this.state.search === last ) {
    //             return obj;
    //         }
    //     })
    //     this.setState({
    //         displayed: newArray
    //     })
    // }

    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <label>Search:</label>
                <input onChange={ this.handleSearch } type="text" name="search" value={ this.state.search } />
                {   // This below is really cool. Use indexOf() to dynamically populate your search lists. (or includes(), which gives straight true or false)
                    [ ...this.state.people ].filter( obj => obj.name.toLowerCase().indexOf( this.state.search ) > -1 ).map( person => {
                        return <Card 
                            key= { person.id }
                            data={ person }
                            onChange={ this.handleInputChange }
                        />
                    })
                }
            </div>
        )
    }
}