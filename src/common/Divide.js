import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
} from 'react-native';

export default class Divide extends Component {

    static orientations = {
        horizontal: 'horizontal',
        vertical: 'vertical'
    }

    static propTypes = {
        orientation: PropTypes.oneOfType(['horizontal', 'vertical']),
        width: PropTypes.number,
        color: PropTypes.string,
    }

    static defaultProps = {
        orientation: 'horizontal',
        width: StyleSheet.hairlineWidth,
        color: '#EFEFF4',
    }

    render() {
        var props = Object.assign({},this.props);
        props.style = props.style?props.style:{};

        if (props.orientation && props.orientation === 'horizontal') {
            props.style =  Object.assign(props.style, {height: props.width});
        } else {
            props.style =  Object.assign(props.style, {width: props.width});
        }
        props.style =  Object.assign(props.style, {backgroundColor: props.color});

        return (
            <View style={props.style}/>
        );
    }
}
