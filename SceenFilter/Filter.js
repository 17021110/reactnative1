import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { Div, P, Input } from 'reactnative-ui-bootstrap'


import Icon from 'react-native-vector-icons/Ionicons'
import styles from '../components/Styles';
import Flatslist2 from '../ OutstandingScience/Flatslist2'
import Headernoitification from '../Sceennoitification/Headernoitification';



var data6 = [
    {
        id: '41',
        link1: require('../img/Vector3.png'),
        title: 'Năng lực chung',
        name: 'chevron-forward'


    },
    {
        id: '42',
        link1: require('../img/Vector2.png'),
        title: 'Năng lực chuyên môn',
        name: 'chevron-forward'


    },
    {
        id: '43',
        link1: require('../img/Vector.png'),
        title: 'Năng lực bổ trợ',
        name: 'chevron-forward'

    },
    {
        id: '44',
        link1: require('../img/Vector4.png'),
        title: 'TCT VNPT Vinaphone',
        name: 'chevron-forward'

    },
    {
        id: '45',
        link1: require('../img/Vector1.png'),
        title: 'Sản phẩm dịch vụ của VNPT',

    },
    {
        id: '46',
        link1: require('../img/window.png'),
        title: 'Các nội dung khác',

    },


]

export default function Filter({ navigation }) {


    const renderFilter = ({ item }) => {

        return (
            <Div className='col' style={styles.Filter} shadowHeight={true} shadow={true}>
                <Image style={{ width: 24, height: 24 }} source={item.link1} resizeMode='stretch' />
                <Div style={styles.DivFilter}>
                    <P size={16}>{item.title}</P>
                    <Icon name={item.name} color="#AAAAAA" size={20} />
                </Div>
            </Div>
        )
    }
    return (
        <Div style={{ backgroundColor: '#FFFFFF', height: '100%' }}>
            <Headernoitification icon11='Loc' gb={() => navigation.goBack()} />

            {Flatslist2(data6, renderFilter, false, false)}
        </Div>
    )

}