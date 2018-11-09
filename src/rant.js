import React, { Component } from 'react';

export default class Rant extends Component {

    render() {

        const data = this.props.snap.data()
        return (
            <div>
                <h2 className="title">{ data.title }</h2>
                <div className="content">{ data.content }</div>
            </div>
        );
    }
}
