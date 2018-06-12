import React from 'react';
import ListEvents from 'components/ListEvents';

const state = {
    quakes:[]
}

export default class QuakeList extends React.Component {
    constructor(){
        super();
        this.state = {
            quakes:[]
        }
    }
    componentDidMount(){
        this.setState({quakes:quakes})
    }
    render(){
        return (
            <ul>
                <ListEvents events={this.state.quakes} />
            </ul>
        );
    }
};