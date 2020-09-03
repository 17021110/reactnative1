import React from 'react'
import SearchBarExample from '../SceenDiscover/SearchBarExample'
import { Div, P } from 'reactnative-ui-bootstrap'
import Flatslist2 from '../ OutstandingScience/Flatslist2'
import styles from '../components/Styles'

import Icon from 'react-native-vector-icons/Ionicons'
import { Image, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
var data66 = [
    {
        id: '411',
        link1: require('../img/Vector3.png'),
        title: 'Năng lực chung',
        name: 'chevron-forward'


    },
    {
        id: '421',
        link1: require('../img/Vector2.png'),
        title: 'Năng lực chuyên môn',
        name: 'chevron-forward'


    },
    {
        id: '431',
        link1: require('../img/Vector.png'),
        title: 'Năng lực bổ trợ',
        name: 'chevron-forward'

    },
    {
        id: '441',
        link1: require('../img/Vector4.png'),
        title: 'TCT VNPT Vinaphone',
        name: 'chevron-forward'

    },
    {
        id: '451',
        link1: require('../img/Vector1.png'),
        title: 'Sản phẩm dịch vụ của VNPT',

    },
    {
        id: '461',
        link1: require('../img/window.png'),
        title: 'Các nội dung khác',

    },


];
var historyList = [
    {
        id: '1',
        tittle: 'Công nghệ thông tin'
    },
    {
        id: '2',
        tittle: 'Kế toán - Tài chính'
    },
    {
        id: '3',
        tittle: 'Kỹ thuật viên 4.0'
    },
    {
        id: '4',
        tittle: 'Kỹ năng bán hàng, chăm sóc khách hàng'
    }
]
export default function SeachScreens({ navigation }) {

    const renderHistoryItem = ({ item }) => {
        return (
            <P style={styles.historyItem}>{item.tittle}</P>
        )
    }
    const renderFilter1 = ({ item }) => {

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
        <Div >

            <SearchBarExample></SearchBarExample>
            <Div style={{ backgroundColor: '#FFFFFF', height: '100%' }}>
                <Div>
                    <Div style={styles.tittleWrap}>
                        <P style={styles.tittleText}>Lịch sử tìm kiếm</P>
                        <TouchableOpacity onPress={() => navigation.goBack()}>

                            <Icon style={{ lineHeight: 24 }} name="md-trash-outline" color="grey" size={16} />
                        </TouchableOpacity>
                    </Div>
                    <Div style={styles.historyItemsWrap}>
                        <FlatList
                            data={historyList}
                            renderItem={renderHistoryItem}
                            keyExtractor={item => item.id}
                            numColumns={2}
                        ></FlatList>
                    </Div>
                </Div>
                <Div style={styles.tittleWrap}>
                    <P style={styles.tittleText}>Danh muc</P>
                </Div>

                {Flatslist2(data66, renderFilter1, false, false)}
            </Div>
        </Div>
    )
}
