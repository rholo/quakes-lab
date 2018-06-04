import React from 'react';
import ListEvents from 'components/ListEvents';

export default class QuakeList extends React.Component {
    render(){
        return (
            <ul>
                <ListEvents />
            </ul>
        );
    }
};