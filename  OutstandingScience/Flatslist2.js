import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, Image } from 'react-native'
import { Div, P, Input } from 'reactnative-ui-bootstrap'





import styles from '../components/Styles';




export default function Flatslist2(data, renderItems, showsHorizontalScrollIndicator, horizontal) {


    return (
        <FlatList
            showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
            data={data}
            renderItem={renderItems}
            keyExtractor={item => item.id}
            horizontal={horizontal}
        />
    )

}
