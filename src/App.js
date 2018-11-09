import { connect } from 'react-redux'
import React, { Component } from 'react';
import logo from './logo.svg';
import Rant from './rant';
import './App.css';
import firebase from 'firebase';
import { newAction, ACTION_NEW_RANT } from './reducer';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCZthzb3ooRsYw-NBMs2WiBTqrhRTquc8A",
    authDomain: "rantlr-2acc4.firebaseapp.com",
    databaseURL: "https://rantlr-2acc4.firebaseio.com",
    projectId: "rantlr-2acc4",
    storageBucket: "rantlr-2acc4.appspot.com",
    messagingSenderId: "227188726184"
};
const fb = firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({timestampsInSnapshots: true});



class App extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount = () => {

        db.collection("rants")
            .onSnapshot((snap) => {
                this.props.dispatch(newAction(ACTION_NEW_RANT, snap.docs))
            });

    };

    render() {
        return (
            <div className="App">
            <h1>Halla</h1>
            {this.props.rants.map(rant =>
                <Rant
                    snap={rant}
                    key={rant.id}
                />
            )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        rants: (state || {rants: []}).rants || []
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch: (action) => dispatch(action)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
