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





export default function Contest({ navigation }) {


    const renderItem555 = ({ item }) => {

        return (
            <TouchableOpacity onPress={() => navigation.navigate('DetailContest', { id: item.id })} style={{ marginLeft: 6 }}>
                <Div style={styles.card1}>
                    <Div style={styles.cardHeader}>
                        <Image style={styles.cardImage1} source={{ uri: 'http://lms-vnpt-sandbox.vnpt.edu.vn' + item.image_id }}></Image>
                        <P style={styles.cardTitle} numberOfLines={2} ellipsizeMode='tail' >{item.name}</P>
                    </Div>


                    <Div style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Div style={{ justifyContent: 'space-between' }}>
                            <Div style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Feather name='tv' size={18} color='#75818F'></Feather>
                                <P style={{ padding: 4 }}>50 cau hoi</P>
                            </Div>
                            <Div style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name='today-sharp' size={18} color='#75818F'></Ionicons>
                                <P style={{ padding: 4 }} >{item.open_time}</P>
                            </Div>
                        </Div>
                        <Div style={{ justifyContent: 'space-between' }}>
                            <Div style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialCommunityIcons name='clock' size={18} color='#75818F'></MaterialCommunityIcons>
                                <P style={{ padding: 4 }}>120 phut</P>
                            </Div>
                            <Div style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <FontAwesome5 name='flag-checkered' size={18} color='#75818F'></FontAwesome5>
                                <P style={{ padding: 4 }} >{item.close_time}</P>
                            </Div>
                        </Div>
                        {item.do_condition == 1
                            ?
                            <ImageBackground style={{ height: 56, width: 56, alignItems: 'center', paddingTop: 16, paddingLeft: 4 }} source={require('../img/1111.png')}>
                                <P size={14}>Sap thi </P>

                            </ImageBackground>
                            : <ImageBackground style={{ height: 56, width: 56, alignItems: 'center', padding: 1, paddingTop: 4 }} source={require('../img/2222.png')}>
                                <P size={14}>Da </P>
                                <P size={14}>ket thuc</P>
                            </ImageBackground>}


                    </Div>

                </Div>
            </TouchableOpacity >
        )
    }




    const [error, setError] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    const [items, setItems] = useState([]);
    const [params, setParams] = useState({ limit: 10, start: 0 })
    pagination1 = () => {
        var newlimit3 = params['limit'] + 10;
        var newStart3 = params['start'];
        setParams({
            limit: newlimit3,
            start: newStart3,


        });




    }
    resfesh1 = () => {
        var newlimit2 = 10;
        var newStart2 = 0;
        setParams({
            limit: newlimit2,
            start: newStart2,


        });




    }

    useEffect(() => {
        fetch(`http://lms-vnpt-sandbox.vnpt.edu.vn/module/api/service/Cuocthi/listCuocthi?limit=${params['limit']}&start=${params['start']}`)
            // .then(Alert.alert("thanh cong"))
            .then((response) => response.json())
            .then((responseJson) => {

                setItems(responseJson.data);
                // Alert.alert(String(items.data[0].id))
            })

        // .catch(Alert.alert("loi"))
    }, [params])
    return (
        <Div style={{ backgroundColor: '#e5effb', height: '100%' }}>
            <Headernoitification icon11='Cuoc thi' icon='search' gb={() => navigation.goBack()} gb1={() => navigation.navigate('Filter')}></Headernoitification>

            <FlatList
                showsHorizontalScrollIndicator={false}
                data={items.data}
                renderItem={renderItem555}
                keyExtractor={item => item.id}
                horizontal={false}
                refreshing={refreshing}
                onRefresh={resfesh1}
                onEndReached={pagination1}
                onEndReachedThreshold={0}
            />
        </Div>
    )

}

