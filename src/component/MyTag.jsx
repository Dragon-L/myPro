import React from 'react';
import {connect} from 'react-redux';

const MyTag = props => (
    <p>Hello, {props.name}, this is the main page!</p>
);

export default connect(state => {
    return {
        name: state.name
    };
})(MyTag);




