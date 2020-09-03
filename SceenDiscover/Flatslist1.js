import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, Image } from 'react-native'
import { Div, P, Input } from 'reactnative-ui-bootstrap'

import Headcarditems from './Headcarditems';



import styles from '../components/Styles';
import Flatslist2 from '../ OutstandingScience/Flatslist2';




export default function Flatslist1(data, renderItems, name, text, icon) {


    return (
        <Div style={{ flexDirection: 'row', marginTop: 16 }}>
            <Headcarditems color={name} text={text} icon={icon} />
            {Flatslist2(data, renderItems, false, true)}
        </Div>
    )

}
