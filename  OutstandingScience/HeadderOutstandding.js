import React, { Component } from 'react'
import { Div, P } from 'reactnative-ui-bootstrap'

import Icon from 'react-native-vector-icons/Ionicons'
import { ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class HeadderOutstandding extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <ImageBackground source={require('../img/nen1.png')} style={{ width: '100%', height: 168, }} >
                <Div classsName='col' style={{ padding: 12, paddingLeft: 16, flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                    <TouchableOpacity onPress={this.props.gb}>
                        <Icon name="chevron-back" color="#ffffff" size={24} />
                    </TouchableOpacity>
                    <P size={20} style={{ fontWeight: '600', lineHeight: 28, color: '#ffffff' }}>Văn hoá cúi chào trong giao tiếp với khách hàng của VNPT</P>
                    <Div classsName='col-9' style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Div style={{ height: 24, width: 24, backgroundColor: '#ffffff', borderRadius: 2 }}>
                            <Icon name="ios-school-outline" color="#18B8C2" size={22} />
                        </Div>
                        <P size={14} style={{ color: '#ffffff', marginLeft: 8 }} >Năng lực bổ trợ</P>
                    </Div>
                </Div>
            </ImageBackground>
        )
    }
}
