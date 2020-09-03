import React, { Component, useState, useEffect } from 'react'
import { View, Text, FlatList, ScrollView, Image, Alert } from 'react-native'
import { Div, P, Input } from 'reactnative-ui-bootstrap'
import SearchBarExample from './SearchBarExample';
import Headcarditems from './Headcarditems';

import Flatslist1 from './Flatslist1';


import styles from '../components/Styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    link: require('../img/1.png'),
    title: 'Năng lực chung nhân viên'
  },
  {
    id: '2',
    link: require('../img/1.png'),
    title: 'Năng lực chung về lãnh đạo'
  },
  {
    id: '3',
    link: require('../img/a.jpg'),
    title: 'Năng lực chung về xử lý '
  },
  {
    id: '4',
    link: require('../img/a.jpg'),
    title: 'Năng lực chung về xử lý'
  },
  {
    id: '5',
    link: require('../img/a.jpg'),
    title: 'helo'
  },
];
const data1 = [
  {
    id: '11',
    link: require('../img/6.png'),
    title: 'Năng lực chung nhân viên'
  },
  {
    id: '12',
    link: require('../img/6.png'),
    title: 'Năng lực chung về lãnh đạo'
  },
  {
    id: '13',
    link: require('../img/6.png'),
    title: 'Năng lực chung về xử lý '
  },
  {
    id: '14',
    link: require('../img/6.png'),
    title: 'Năng lực chung về xử lý'
  },



];
const data = [
  {
    id: '6',
    link: require('../img/5.png'),
    title: 'Năng lực chung nhân viên'
  },
  {
    id: '7',
    link: require('../img/5.png'),
    title: 'Năng lực chung về lãnh đạo'
  },
  {
    id: '8',
    link: require('../img/5.png'),
    title: 'Năng lực chung về xử lý '
  },
  {
    id: '9',
    link: require('../img/5.png'),
    title: 'Năng lực chung về xử lý'
  },
  {
    id: '10',
    link: require('../img/5.png'),
    title: 'helo'
  },


];
const data2 = [
  {
    id: '16',
    link: require('../img/7.png'),
    title: 'Năng lực chung nhân viên'
  },
  {
    id: '17',
    link: require('../img/7.png'),
    title: 'Năng lực chung về lãnh đạo'
  },
  {
    id: '18',
    link: require('../img/7.png'),
    title: 'Năng lực chung về xử lý '
  },



];
export default function App() {

  const renderItems = ({ item }) => {

    return (
      <Div >
        <Div style={styles.DivCard}>
          <Image style={styles.Imgcard} source={item.link} />
          <P style={styles.Pflastlist} size={14} >{item.title}</P>
        </Div>
      </Div >
    )
  }
  return (

    // <ListIconExample />

    <Div style={{ backgroundColor: '#f1f4fc' }}>

      <SearchBarExample />
      <ScrollView showsVerticalScrollIndicator={false}>
        {Flatslist1(DATA, renderItems, '#4eb8c3', 'Năng lực chung', 'school-outline')}
        {Flatslist1(data1, renderItems, '#4daa5c', 'Năng lực chuyên môn', 'ios-book-outline')}
        {Flatslist1(data, renderItems, '#f2993e', 'Năng lực bổ trợ', 'clipboard-outline')}
        {Flatslist1(data2, renderItems, '#38a2f7', 'TCT VNPT Vinaphone', 'ios-radio-outline')}

        <Div style={{ flexDirection: 'row', marginTop: 16 }}>
          <Headcarditems color="#065fd0" text='Sản phẩm dịch vụ của VNPT ' icon='ios-document-outline' />

        </Div>
        <Div style={{ flexDirection: 'row', marginTop: 16 }}>
          <Headcarditems color="#9b51e0" text='Nội dụng ' icon='ios-grid-outline' />

        </Div>
        <Div>

        </Div>

      </ScrollView>

    </Div>
  )
}


