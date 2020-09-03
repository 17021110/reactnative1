import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import { Div, P, Input } from 'reactnative-ui-bootstrap'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from '../components/Styles'


export default class Headernoitification extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        let icon11 = this.props.icon11;
        let icon = this.props.icon;
        return (
            <Div className="col-12" style={styles.Headder}>
                <TouchableOpacity onPress={this.props.gb} style={{ flexDirection: 'row', marginRight: 32 }}>
                    <Div className='col-12' style={styles.Header} >
                        <Icon name="chevron-back" color="black" size={30} />
                        <P size={20} style={{ fontWeight: '600' }}>{icon11}</P>

                    </Div>
                    <TouchableOpacity onPress={this.props.gb1}>
                        <Icon name={icon} color="black" size={30} />
                    </TouchableOpacity>
                </TouchableOpacity>
            </Div>
        )
    }
}
