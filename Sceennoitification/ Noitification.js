import React, { Component, useState } from 'react'
import { View, Text, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Div, P, Input } from 'reactnative-ui-bootstrap'
import Headernoitification from './Headernoitification';
import Flatslist2 from '../ OutstandingScience/Flatslist2';

var data4 = [
    {
        id: '21',
        status: true,
        title: 'Năng lực chung nhân viên Năng lực chung nhân hay chung tay bao ve dat nuoc khoi coivid',
        title11: 'Thông báo hệ thống',
        time: '3h21'
    },
    {
        id: '22',
        status: true,
        title: 'Năng lực chung về lãnh đạo Năng lực chung về lãnh đạo Năng lực chung về lãnh đạo Năng lực chung về lãnh đạo',
        title11: 'Thông báo hệ thống',
        time: '3h21'
    },
    {
        id: '23',
        status: false,
        title: 'Năng lực chung về xử lý ',
        title11: 'Thông báo hệ thống',
        time: '3h21'
    },
    {
        id: '24',
        status: true,
        title: 'Năng lực chung về xử lý',
        title11: 'Thông báo hệ thống',
        time: '3h21'
    },
    {
        id: '25',
        status: true,
        title: 'helo',
        title11: 'Thông báo hệ thống',
        time: '3h21'
    },
    {
        id: '26',
        status: true,
        title: 'helo',
        title11: 'Thông báo hệ thống',
        time: '3h21'
    },
    {
        id: '27',
        status: true,
        title: 'helo',
        title11: 'Thông báo hệ thống',
        time: '3h21'
    },
    {
        id: '28',
        status: true,
        title: 'helo',
        title11: 'Thông báo hệ thống',
        time: '3h21'
    },

]
export default function Noitification({ navigation }) {


    // let count = 0;
    const RenderNoitice = ({ item }) => {

        // if (item.status = true) {
        //     count = count + 1;
        // }
        // console.log(count);
        const [star, setStar] = useState(item.status)
        let color = star == true ? "#e5effb" : "#FFFFFF"
        return (
            <TouchableOpacity onPress={() => { setStar(false); navigation.navigate('Detailsnoitification', { title: item.title }) }}>
                <Div className='col-12' style={{ backgroundColor: color, paddingLeft: 16, padding: 16, }}>
                    <Div style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <P size={16} bold={true}>{item.title11}</P>
                        <P color='#81888F'>{item.time}</P>
                    </Div>
                    <P style={{ paddingTop: 8 }} size={14} numberOfLines={1} ellipsizeMode='tail'>{item.title}</P>

                </Div>

            </ TouchableOpacity >
        )
    }
    return (
        <Div className='col-12'>
            <Headernoitification icon11='Thong bao chung' gb={() => navigation.goBack()}></Headernoitification>
            <FlatList
                showsHorizontalScrollIndicator={true}
                data={data4}
                renderItem={({ item }) => <RenderNoitice item={item} navigation={navigation} />}
                keyExtractor={item => item.id}
                horizontal={false}
            />
        </Div>
    )
}



