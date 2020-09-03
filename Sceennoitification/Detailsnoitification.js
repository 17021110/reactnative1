import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, Image } from 'react-native'
import { Div, P, Input } from 'reactnative-ui-bootstrap'
import Headernoitification from './Headernoitification';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../components/Styles';


export default function Detailsnoitification({ navigation, route }) {



    return (
        <Div className='col-12' >
            <Headernoitification icon11='Thong bao chung' gb={() => navigation.goBack()} />
            <P style={styles.Pflastlist} size={14}>{route.params.title}</P>


        </Div>
    )

}
