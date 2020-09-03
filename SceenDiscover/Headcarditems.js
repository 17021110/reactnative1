import React, { Component } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { Div, P, Input } from 'reactnative-ui-bootstrap'

import Icon from 'react-native-vector-icons/Ionicons'
import styles from '../components/Styles';


export default class Headcarditems extends Component {
    render() {
        let color = this.props.color;
        let text = this.props.text;
        let icon = this.props.icon;
        return (

            <ImageBackground source={require('../img/4.png')} style={{ borderRadius: 5, width: 132, height: 132, backgroundColor: color, marginLeft: 16, paddingLeft: 8, padding: 10 }}>
                <Icon name={icon} color='white' size={40}  ></Icon>
                <P style={{ paddingTop: 8, lineHeight: 28 }} size={18} color='white' bold={true} h3={true}>{text}</P>
            </ImageBackground>

        )
    }
}