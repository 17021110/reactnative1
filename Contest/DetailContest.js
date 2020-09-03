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




export default function DetailContest({ navigation, route }) {

    const renderItem7 = ({ item }) => {

        return (
            <Div style={{ flexDirection: 'row', marginLeft: 16, margin: 8 }}>
                <Icon name="checkbox-outline" color="green" size={20} />
                <P size={14} style={styles.Poutstanding1}>{item.title}</P>
            </Div>
        )
    }
    const renderItem9 = ({ item }) => {

        return (
            <Div style={{ flexDirection: 'row', paddingTop: 8, marginLeft: 16 }}>
                <Div>
                    <Image source={require('../img/im.png')} style={{ height: 32, width: 32, borderRadius: 16 }}></Image>
                </Div>
                <Div style={{ width: '80%', marginLeft: 16 }}>
                    <Div style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <P size={14} bold={true}>{item.name}</P>
                        <Div style={{ flexDirection: 'row' }}>
                            <P size={14}>{item.time}</P>
                            <P style={{ paddingLeft: 4 }} size={14}>{item.date}</P>
                        </Div>
                    </Div>
                    <Div style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <P size={16} style={{ color: 'blue', lineHeight: 24 }}>4/5</P>
                        <Div style={{ flexDirection: 'row' }}>
                            <Icon name="md-star" color="#005ED3" size={10} />
                            <Icon name="md-star" color="#005ED3" size={10} />
                            <Icon name="md-star" color="#005ED3" size={10} />
                            <Icon name="md-star" color="#005ED3" size={10} />
                            <Icon name="md-star" color="#75818F" size={10} />
                        </Div>
                    </Div>
                    <Div style={{ borderBottomWidth: 0.5, borderColor: '#CDD7EF', paddingBottom: 12, }}>
                        <P numberOfLines={2} ellipsizeMode='tail'>
                            {item.title}
                        </P>
                    </Div>
                </Div>


            </Div>
        )
    }
    const renderItem8 = ({ item }) => {
        let star = item.width / 100;
        return (
            <Div style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', }}>

                <P size={12}>{item.star}</P>
                <Icon name="md-star" color="#005ED3" size={10} />

                <Progress.Bar progress={star} width={180} />
                <Div style={{ width: 35, justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <P size={12}>{item.width} %</P>
                </Div>
            </Div>
        )
    }
    const renderItem88 = ({ item }) => {

        return (
            <Div style={{ flexDirection: 'row', paddingTop: 8, marginLeft: 16, paddingBottom: 8 }}>
                <Div>
                    <Image source={require('../img/im2.png')} style={{ height: 64, width: 64, borderRadius: 32 }}></Image>
                </Div>



                <Div style={{ justifyContent: 'space-between', marginLeft: 16 }}>
                    <Div style={{ justifyContent: 'space-around', height: 36 }}>
                        <P size={14} style={{ color: '#000C24', fontWeight: '600', lineHeight: 22 }}>{item.full_name}</P>
                        <P size={12} style={{ lineHeight: 20, color: '#75818F', }}>giang vien,dien gia</P>
                    </Div>
                    <P size={14} style={{ lineHeight: 22 }}>dai hoc kinh te quoc dan</P>
                </Div>
            </Div>
        )
    }

    const renderItem5 = ({ item }) => {

        return (
            <TouchableOpacity onPress={() => { alert("Chuyển đến khóa học " + item.id) }} style={{ marginLeft: 6 }}>
                <Div style={styles.card}>
                    <Div style={styles.cardHeader}>
                        <Image style={styles.cardImage} source={{ uri: 'http://lms-vnpt-sandbox.vnpt.edu.vn' + item.iamge_url }}></Image>

                        <P style={styles.cardTitle1} numberOfLines={2} ellipsizeMode='tail' >{item.name}</P>
                    </Div>
                    <Div style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Div style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <P>10 chuong muc</P>
                            <P>{item.average_rating}</P>
                        </Div>
                        <Div style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <P style={{ width: 80, overflow: 'hidden', height: 20 }}>{item.start_date}</P>
                            <P style={{ width: 80, overflow: 'hidden', height: 20 }}>{item.end_date}</P>

                        </Div>
                    </Div>

                </Div>
            </TouchableOpacity >
        )
    }


    const [items, setItems] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [countStudent, setCountStudent] = useState([]);
    const [metadata, setMetadata] = useState([]);
    const [relatedCourses, setrelatedCoursesWidth] = useState([]);


    useEffect(() => {

        let link = "http://lms-vnpt-sandbox.vnpt.edu.vn/module/api/service/Cuocthi/listCuocthi";
        // let id = route.params.id;
        console.log(route.params.id)
        if (route.params.id) {
            link = link + route.params.id;
        }
        console.log(link)

        fetch(link)

            .then((response) => response.json())
            .then((responseJson) => {

                setItems(responseJson.data.course);
                setTeachers(responseJson.data.courseTeachers);
                setCountStudent(responseJson.data.countStudent);
                setMetadata(responseJson.data.metadata);
                setrelatedCoursesWidth(responseJson.data.relatedCoursesWidthNhomChucDanh);
                // setItems1(responseJson.data.course);
                // Alert.alert(String(items.data[0].id))
            })

        // .catch(Alert.alert("loi"))
    }, [])
    const [state, setState] = useState(false);
    return (

        <SafeAreaView style={{ backgroundColor: '#f1f4fc', height: '100%' }}>
            <Div style={{ width: '100%' }} >
                <HeadderOutstandding gb={() => navigation.goBack()}></HeadderOutstandding>
            </Div>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Div style={styles.DivOutstanding}>
                    <Div className='col' style={styles.Outstandding1}>
                        <P size={16} style={styles.Outstanding11}>Thông tin</P>
                    </Div>

                    <Div>
                        <P style={{ padding: 8, paddingLeft: 16, lineHeight: 22 }} size={14} numberOfLines={state == false ? 1 : null} ellipsizeMode='tail'>{items.content}</P>
                    </Div>
                    <TouchableOpacity onPress={() => setState(state => !state)}>
                        <Div className='col-12'  >
                            <P size={12} style={{ fontWeight: '600', color: 'blue', paddingLeft: 16, padding: 8 }}>{state ? "Ẩn bớt" : "Xem thêm"}</P>
                        </Div>
                    </TouchableOpacity>

                    <Div className='col' style={styles.Outstanding12}>

                        <Div style={{ flexDirection: 'row', marginLeft: 16, alignItems: 'center' }}>
                            <Icon name='ios-flag' color="#75818F" size={20} ></Icon>
                            <P size={14} style={styles.Poutstanding}>bat dau hoc</P>
                            <P size={14} bold={true} style={styles.Poutstanding}>{items.start_date}</P>

                        </Div>
                        <Div style={{ flexDirection: 'row', marginLeft: 16, alignItems: 'center' }}>
                            <Icon name='ios-flag' color="#75818F" size={20} ></Icon>
                            <P size={14} style={styles.Poutstanding}>Ket thuc hoc:</P>
                            <P size={14} bold={true} style={styles.Poutstanding}>{items.end_date}</P>
                        </Div>
                        <Div style={{ flexDirection: 'row', marginLeft: 16, alignItems: 'center' }}>
                            <Icon name='ios-list-outline' color="#75818F" size={20} ></Icon>
                            <P size={14} style={styles.Poutstanding}>Bai hoc:</P>
                            <P size={14} bold={true} style={styles.Poutstanding}>{items.so_chu_de} Bai</P>
                        </Div>
                        <Div style={{ flexDirection: 'row', marginLeft: 16, alignItems: 'center' }}>
                            <Icon name='ios-person' color="#75818F" size={20} ></Icon>
                            <P size={14} style={styles.Poutstanding}>Giang vien:</P>
                            <P size={14} bold={true} style={styles.Poutstanding}>Lương Quang Cường</P>
                        </Div>
                        <Div style={{ flexDirection: 'row', marginLeft: 16, alignItems: 'center' }}>
                            <Icon name='md-people' color="#75818F" size={20} ></Icon>
                            <P size={14} style={styles.Poutstanding}>So hoc vien da hoc:</P>
                            <P size={14} bold={true} style={styles.Poutstanding}>{countStudent}</P>
                        </Div>

                    </Div>
                </Div >
                <Div style={styles.DivOutstanding}>
                    <Div className='col' style={styles.Outstandding1}>
                        <P size={16} style={styles.Outstanding11}>Ket qua dat duoc</P>
                        {/* <Icon name={icon} color="#75818F" size={20} /> */}
                    </Div>
                    {Flatslist2(DATA7, renderItem7, false, false)}
                </Div>
                <Outstanding3></Outstanding3>
                <Div style={styles.DivOutstanding}>
                    <Div className='col' style={styles.Outstandding1}>
                        <P size={16} style={styles.Outstanding11}>khoa hoc</P>
                        {/* <Icon name={icon} color="#75818F" size={20} /> */}
                    </Div>
                    <Div className='col' style={styles.K}>
                        <Div className='col-3' styles={{ justifyContent: 'center' }} >
                            <Image source={require('../img/Icon.png')} styles={{ height: 72, width: 72 }}></Image>
                            <Div style={{ flexDirection: 'row', paddingLeft: 8, marginLeft: 4, alignItems: 'center' }}>
                                <Icon name="md-star" color="#005ED3" size={10} />
                                <Icon name="md-star" color="#005ED3" size={10} />
                                <Icon name="md-star" color="#005ED3" size={10} />
                                <Icon name="md-star" color="#005ED3" size={10} />
                                <Icon name="md-star" color="#75818F" size={10} />
                            </Div>
                        </Div>

                        {Flatslist2(data8, renderItem8, false, false)}

                    </Div>
                    {Flatslist2(data9, renderItem9, false, false)}
                </Div >
                <Div style={styles.DivOutstanding}>
                    <Div className='col' style={styles.Outstandding1}>
                        <P size={16} style={styles.Outstanding11}>giang vien</P>
                        {/* <Icon name={icon} color="#75818F" size={20} /> */}
                    </Div>
                    {Flatslist2(teachers, renderItem88, false, false)}
                </Div>
                <Div className='col' >
                    <Div className='col' style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 16 }}>
                        <P size={16} style={styles.Outstanding11}>Khoa hoc lien qua</P>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <P style={styles.Outstanding111} >xem tat ca</P>
                        </TouchableOpacity>
                    </Div>
                    {Flatslist2(relatedCourses, renderItem5, false, true)}

                </Div>
                <FooterOutstanding></FooterOutstanding>
            </ScrollView>
        </SafeAreaView>
    )

}
