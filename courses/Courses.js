import React, { Component, useState, useEffect } from 'react'
import { View, Text, FlatList, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { Div, P, Input } from 'reactnative-ui-bootstrap'



import styles from '../components/Styles';
import Flatslist2 from '../ OutstandingScience/Flatslist2'
import Headernoitification from '../Sceennoitification/Headernoitification'
import Foundation from 'react-native-vector-icons/Foundation'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'





export default function Courses({ navigation }) {


    const renderItem55 = ({ item }) => {

        return (
            <TouchableOpacity onPress={() => navigation.navigate('OutstandingScience', { id: item.id })} style={{ marginLeft: 6 }}>
                <Div style={styles.card1}>
                    <Div style={styles.cardHeader}>
                        <Image style={styles.cardImage1} source={{ uri: 'http://' + item.image_url }}></Image>
                        <P style={styles.cardTitle} numberOfLines={2} ellipsizeMode='tail' >{item.name}</P>
                    </Div>

                    <Div style={styles.box1}>
                        <Image style={{ width: 16 }} source={require('../img/path.png')} />

                        {item.price_vnd == 0
                            ? <Div style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Foundation name='dollar' color='#FFFFFF' size={24}></Foundation>
                                <P style={{ color: '#FFFFFF', fontWeight: '600' }}>29.99</P>
                            </Div>
                            : <P style={{ color: '#FFFFFF', fontWeight: '600' }} size={16}>Mien phi</P>
                        }
                    </Div>
                    <Div style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Div style={{ justifyContent: 'space-between' }}>
                            <Div style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Feather name='tv' size={18} color='#75818F'></Feather>
                                <P style={{ padding: 4 }}>211 bai giang</P>
                            </Div>
                            <Div style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name='today-sharp' size={18} color='#75818F'></Ionicons>
                                <P style={{ padding: 4 }} >{item.start_date.substring(0, 10)}</P>
                            </Div>
                        </Div>
                        <Div style={{ justifyContent: 'space-between' }}>
                            <Div style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialCommunityIcons name='clock' size={18} color='#75818F'></MaterialCommunityIcons>
                                <P style={{ padding: 4 }}>Thoi gian 60 phut</P>
                            </Div>
                            <Div style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <FontAwesome5 name='flag-checkered' size={18} color='#75818F'></FontAwesome5>
                                <P style={{ padding: 4 }} >{item.end_date.substring(0, 10)}</P>
                            </Div>
                        </Div>
                    </Div>

                </Div>
            </TouchableOpacity >
        )
    }




    const [error, setError] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    const [items, setItems] = useState([]);
    const [params, setParams] = useState({ limit: 5, start: 0 })
    pagination = () => {
        var newlimit = params['limit'];
        var newStart = params['start'] + 5;
        setParams({
            limit: newlimit,
            start: newStart,
        });
    }
    resfesh = () => {
        var newlimit1 = 5;
        var newStart1 = 0;
        setParams({
            limit: newlimit1,
            start: newStart1,
        });
    }

    useEffect(() => {
        fetch(`http://lms-vnpt-sandbox.vnpt.edu.vn/module/api/service/Course/listCourse?limit=${params['limit']}&start=${params['start']}`)
            // .then(Alert.alert("thanh cong"))
            .then((response) => response.json())
            .then((responseJson) => {

                setItems(items.concat(responseJson.data.courses.data));
                // Alert.alert(String(items.data[0].id))
            })

        // .catch(Alert.alert("loi"))
    }, [params])
    return (
        <Div style={{ backgroundColor: '#e5effb', height: '100%' }}>
            <Headernoitification icon11='IT & Sofware' gb={() => navigation.goBack()}></Headernoitification>

            <FlatList
                showsHorizontalScrollIndicator={false}
                data={items}
                renderItem={renderItem55}
                keyExtractor={item => item.id}
                horizontal={false}
                refreshing={refreshing}
                onRefresh={resfesh}
                onEndReached={pagination}
                onEndReachedThreshold={0}
            />

        </Div>
    )

}

