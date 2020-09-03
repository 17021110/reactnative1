import React, { Component, useState, useEffect } from 'react'
import { Div, P } from 'reactnative-ui-bootstrap'
import HeadderOutstandding from '../ OutstandingScience/HeadderOutstandding'
import { SafeAreaView, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import FooterOutstanding from '../ OutstandingScience/FooterOutstanding'

import Outstanding3 from '../ OutstandingScience/Outstanding3'
import Icon from 'react-native-vector-icons/Ionicons'
import Flatslist2 from '../ OutstandingScience/Flatslist2'

import styles from '../components/Styles'
import * as Progress from 'react-native-progress';
import Headernoitification from '../Sceennoitification/Headernoitification'

const DATA7 = [
    {
        id: '123',
        title: 'Xây dựng năng lực QTRR và nâng cao văn hóa QTRR qua các hoạt động trao đổi và đào tạo.'
    },
    {
        id: '234',
        title: 'Thay đổi nhận thức của tất cả CBCNV trong Tập đoàn đóng vai trò quan trọng trong bối cảnh thị trường Viễn thông ngày càng cạnh tranh khốc liệt'
    },
    {
        id: '345',
        title: 'Xây dựng năng lực QTRR và nâng cao văn hóa QTRR qua các hoạt động trao đổi và đào tạo. '
    },

];
const data8 = [
    {
        id: '151',
        star: '5',
        width: 10,
    },
    {
        id: '152',
        star: '4',
        width: 100
    },
    {
        id: '153',
        star: '3',
        width: 0
    },
    {
        id: '154',
        star: '2',
        width: 0
    },
    {
        id: '155',
        star: '1',
        width: 0
    },
];

const data9 = [
    {
        id: '161',
        name: 'Pham Tuan Anh',
        time: '22:16',
        date: '22/08/2020',
        title: ' Bai giang rat hay ,giang vien day de hieu khoa doc cung cap day du do dung hoc tap,....'
    },
    {
        id: '162',
        name: 'Pham Tuan Anh',
        time: '22:16',
        date: '22/08/2020',
        title: ' Bai giang rat hay ,giang vien day de hieu khoa doc cung cap day du do dung hoc tap,....'
    },

];
const Featuredcourses = [
    {
        id: '100',
        img: require("../img/im4.png"),
        title: 'Kiến thức tổng quan về quản trị rủi ro cho doanh nghiệp',
        amount: '10 chương mục',
        rate: '4.0',
        today: '15/05/2020',
        finish: '15/05/2019'
    },
    {
        id: '101',
        img: require("../img/im4.png"),
        title: 'Kiến thức tổng quan về quản trị rủi ro cho doanh nghiệp',
        amount: '10 chương mục',
        rate: '4.0',
        today: '15/05/2020',
        finish: '15/05/2019'
    }
]




export default function Blog({ navigation, route }) {
    console.log(route.params.item);


    const item = route.params.item;

    // const [items, setItems] = useState({route.params.item});



    const [state, setState] = useState(false);
    return (

        <SafeAreaView style={{ backgroundColor: '#f1f4fc', height: '100%' }}>
            <Headernoitification icon11='Tin tức' gb={() => navigation.goBack()} gb1={() => navigation.navigate('Filter')}></Headernoitification>
            <ScrollView>
                <Div style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 16, marginTop: 12 }}>
                    <P style={{ color: '#595959' }}>Nghệ an</P>
                    <P style={{ color: '#595959' }}>{item.update_date}</P>
                </Div>
                <Div style={{ marginLeft: 16 }}>
                    <P style={{ fontWeight: '600' }}>{item.title}</P>
                </Div>
                <Div style={{ width: '100%', padding: 8 }}>
                    <Image style={styles.cardImage11} source={{ uri: item.image_url }}></Image>
                </Div>
                <Div style={{ marginLeft: 16, marginRight: 12 }}>
                    <P>{item.content}</P>
                    <P >Nguyễn Chí Hiếu, sinh viên xuất sắc nước Anh năm 2004 và top 100 sinh viên xuất sắc thế giới năm 2006 thẳng thắn chỉ ra quan niệm chưa đúng của phụ huynh về việc học tiếng Anh</P>
                    <P style={{ fontWeight: '600', marginTop: 8 }}>Nguyễn Chí Hiếu, sinh viên xuất sắc nước Anh năm 2004 và top 100 sinh viên xuất sắc thế giới năm 2006 thẳng thắn chỉ ra quan niệm chưa đúng của phụ huynh về việc học tiếng Anh</P>
                </Div>
                <Div style={{ width: '100%', padding: 8 }}>
                    <Image style={styles.cardImage11} source={require('../img/blog.png')}></Image>
                    <P style={{ margin: 4 }}> Nguyễn Chí Hiếu chia sẻ tại buổi tọa đàm. Từ lâu, các phụ huynh Việt Nam quan niệm, tiếng Anh là chìa khóa mở ra thành công. Nhưng có tế có phải như vậy. Trong tọa đàm "Học tiếng Anh như thế nào, tại sao?" do Học viện Phát triển tư duy và kỹ năng IEG tổ chức, Nguyễn Chí Hiếu, sinh viên xuất sắc nước Anh năm 2004 và top 100 sinh viên xuất sắc thế giới năm 2006 thẳng thắn chỉ ra quan niệm chưa đúng của phụ huynh về việc học tiếng Anh.</P>
                </Div>
            </ScrollView>
        </SafeAreaView>

    )

}
