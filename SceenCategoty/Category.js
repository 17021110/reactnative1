import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { Div, P, Input } from 'reactnative-ui-bootstrap'


import Icon from 'react-native-vector-icons/Ionicons'
import styles from '../components/Styles';
import Flatslist2 from '../ OutstandingScience/Flatslist2'
import Headernoitification from '../Sceennoitification/Headernoitification'




var data5 = [
    {
        id: '31',
        name: 'ios-person-outline',
        title: 'Thông tin tài khoản',
        link: require('../img/nen.png'),

    },
    {
        id: '32',
        name: 'ios-document-text-outline',
        title: 'tài liệu',
        link: require('../img/nen.png'),

    },
    {
        id: '33',
        name: 'desktop-outline',
        title: 'giới thiệu',
        link: require('../img/nen.png'),

    },
    {
        id: '34',
        name: 'md-reader-outline',
        title: 'Liên hệ',
        link: require('../img/nen.png'),

    },
    {
        id: '35',
        name: 'headset',
        title: 'hỗ trợ',
        link: require('../img/nen.png'),

    },
    {
        id: '36',
        name: 'copy-outline',
        title: 'hỏi đáp',
        link: require('../img/nen.png'),

    },

]

export default function Category({ navigation }) {


    const renderCategory = ({ item }) => {

        return (
            <Div className='col' style={styles.category} shadowHeight={true} shadow={true}>
                <ImageBackground source={item.link} className='col-2' style={styles.imgCategory}>
                    <Icon name={item.name} color="#FFFFFF" size={24} />
                </ImageBackground>
                <Div style={styles.DivCategory}>
                    <P size={14} style={{ lineHeight: 22, fontWeight: '600' }}>{item.title}</P>
                    <Icon name="chevron-forward" color="#AAAAAA" size={20} />
                </Div>
            </Div>
        )
    }
    return (
        <Div style={{ backgroundColor: '#e5effb', height: '100%' }}>
            <Headernoitification icon11='Danh muc' gb={() => navigation.goBack()}></Headernoitification>
            {Flatslist2(data5, renderCategory, false, false)}
        </Div>
    )

}

