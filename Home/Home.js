import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/Feather'


import Flatslist2 from '../ OutstandingScience/Flatslist2'
import { FlatList } from 'react-native-gesture-handler'


const Featuredcourses = [
    {
        id: '1',
        img: require("../img/im4.png"),
        title: 'Kiến thức tổng quan về quản trị rủi ro cho doanh nghiệp',
        amount: '10 chương mục',
        rate: '4.0',
        today: '15/05/2020',
        finish: '15/05/2019'
    },
    {
        id: '22',
        img: require("../img/im4.png"),
        title: 'Kiến thức tổng quan về quản trị rủi ro cho doanh nghiệp',
        amount: '10 chương mục',
        rate: '4.0',
        today: '15/05/2020',
        finish: '15/05/2019'
    }
]

const newCourses = [
    {
        id: '1',
        img: require("../img/im4.png"),
        title: 'Kiến thức tổng quan về quản trị rủi ro cho doanh nghiệp',
        amount: '10 chương mục',
        rate: '4.0',
        today: '15/05/2020',
        finish: '15/05/2019'
    },
    {
        id: '22',
        img: require("../img/im4.png"),
        title: 'Kiến thức tổng quan về quản trị rủi ro cho doanh nghiệp',
        amount: '10 chương mục',
        rate: '4.0',
        today: '15/05/2020',
        finish: '15/05/2019'
    }
]

const FeaturedContests = [
    {
        id: '1',
        img: require("../img/im4.png"),
        title: 'Kiến thức tổng quan về quản trị rủi ro cho doanh nghiệp',
        amount: '50 câu hỏi',
        oclock: '120 phút',
        today: '15/05/2020',
        finish: '15/05/2019'
    },
    {
        id: '2',
        img: require("../img/im4.png"),
        title: 'Kiến thức tổng quan về quản trị rủi ro cho doanh nghiệp',
        amount: '50 câu hỏi',
        oclock: '120 phút',
        today: '15/05/2020',
        finish: '15/05/2019'
    }
]

const news_blog = [
    {
        id: '1',
        img: require("../img/im4.png"),
        title: 'Kiến thức tổng quan về quản trị rủi ro cho doanh nghiệp',
        time: '21:12: 21/12/2012'
    },
    {
        id: '2',
        img: require("../img/im4.png"),
        title: 'Kiến thức tổng quan về quản trị rủi ro cho doanh nghiệp',
        time: '21:12: 21/12/2012'
    }
]



const categoryItem = (source, text) => {
    return (
        <TouchableOpacity onPress={() => { alert("Chuyển hướng đến " + text) }}>
            <View style={styles.categoryItem}>
                {/* <Image source={source} style={styles.stylcategoryItemIcon}></Image> */}
                <Ionicons name={source} size={18} color='#75818F'></Ionicons>
                <Text style={styles.stylcategoryItemText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const renderCategory = () => {
    return (
        <View style={styles.category}>
            <View style={styles.categoryWrap}>
                {categoryItem('school-outline', "Năng lực chung")}
                {categoryItem('ios-book-outline', "Năng lực chuyên môn")}
                {categoryItem('clipboard-outline', "Năng lực bổ trợ")}
            </View>
            <View style={styles.categoryWrap}>
                {categoryItem('ios-document-outline', "TCT VNPT Vinaphone")}
                {categoryItem('ios-grid-outline', "Sản phẩm dịch vụ VNPT")}
                {categoryItem('logo-apple', "Các nội dung khác")}
            </View>
        </View>
    )
}

const cardProp = (name, color, prop) => {
    return (
        <View style={styles.cardProp}>
            <Icon name={name} color={color} size={16} />
            <Text>{prop}</Text>
        </View>
    )
}

const RenderCourse = ({ item, navigation }) => {
    return (
        <TouchableOpacity onPress={() => { navigation.navigate("OutstandingScience", { id: item.id }) }}>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Image style={styles.cardImage} source={{ uri: "http://" + item.image_url }}></Image>
                    <Text style={styles.cardTitle} numberOfLines={2} ellipsizeMode='tail' >{item.name}</Text>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                    <View style={styles.flexRow}>
                        {cardProp("book", "black", item.amount)}
                        {cardProp("star", "#F9AD3D", item.average_rating)}
                    </View>
                    <View style={styles.flexRow}>
                        {cardProp("calendar", "black", item.start_date.substring(0, 10))}
                        {cardProp("flag", "black", item.end_date.substring(0, 10))}

                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const RenderContest = ({ item, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('DetailContest', { id: item.id })}>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Image style={styles.cardImage} source={{ uri: "http://lms-vnpt-sandbox.vnpt.edu.vn" + item.image_id }}></Image>
                    <Text style={styles.cardTitle} numberOfLines={2} ellipsizeMode='tail' >{item.name}</Text>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                    <View style={styles.flexRow}>
                        {cardProp("book", "black", item.amount)}
                        {cardProp("clock", "black", item.oclock)}
                    </View>
                    <View style={styles.flexRow}>
                        {cardProp("calendar", "black", item.open_time)}
                        {cardProp("flag", "black", item.close_time)}
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}



const renderNameCategory = (title) => {
    return (
        <View style={{ padding: 8, width: '100%' }}>
            <View style={styles.flexRow}>
                <Text style={styles.leftTitle}>{title}</Text>
                <TouchableOpacity onPress={() => { alert("Chuyển trang đến " + title) }}><Text style={styles.rightTitle}>Xem tất cả</Text></TouchableOpacity>
            </View>
        </View>
    )
}
const RenderNews = ({ item, navigation }) => {
    return (
        <TouchableOpacity onPress={() => { navigation.navigate("Blog", { item: item }) }}>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Image style={styles.cardImage} source={{ uri: item.image_url }}></Image>
                    <Text style={styles.cardTitle} numberOfLines={2} ellipsizeMode='tail' >{item.title}</Text>
                </View>
                <Text style={{ margin: 4 }}>{item.create_date}</Text>
            </View>
        </TouchableOpacity>
    )
}




export default function Home({ navigation }) {

    const renderHeader = () => {
        return (
            <ImageBackground source={require('../img/26.png')} style={{ width: '100%', height: 240 }}>
                <View style={styles.header}>
                    <View style={styles.flexRow}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../img/25.png')} style={styles.avatar} ></Image>
                            <Text style={styles.welcome} numberOfLines={1} ellipsizeMode='tail'>Hi,{userInfo.full_name}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('SeachScreens')}
                            >
                                <Ionicons name="md-search-sharp" color="white" size={24} style={styles.headerIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Noitification')}>
                                <Ionicons name="notifications" color="white" size={24} style={styles.headerIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.flexRow}>
                        <View style={{ alignContent: 'flex-end', justifyContent: "flex-end", marginBottom: 24 }}>
                            <Text style={styles.headerSlogan}>Hành trang kiến thức</Text>
                            <Text style={styles.headerSlogan}>Nâng tầm tương lai</Text>
                        </View>
                        <View>
                            <Image source={require('../img/Group1.png')} style={{ height: 150, width: 160 }}></Image>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
    }
    const [coursesList, setCoursesList] = useState([])
    const [contestsList, setContestsList] = useState([])
    const [newsList, setNewsList] = useState([])
    const [userInfo, setUserInfo] = useState({})
    async function getCoursesList() {
        fetch("http://lms-vnpt-sandbox.vnpt.edu.vn/module/api/service/Course/listCourse")
            .then((respone) => respone.json())
            .then((responeJson) => {
                setCoursesList(responeJson.data.courses.data)
            })
            .catch((error) => {
                alert(error)
            })
    }
    async function getContestsList() {
        fetch("http://lms-vnpt-sandbox.vnpt.edu.vn/module/api/service/Cuocthi/listCuocthi")
            .then((respone) => respone.json())
            .then((responeJson) => {
                setContestsList(responeJson.data.data)
            })
            .catch((error) => {
                alert(error)
            })
    }
    async function getNewsList() {
        fetch("http://lms-vnpt-sandbox.vnpt.edu.vn/module/api/service/News/index")
            .then((respone) => respone.json())
            .then((responeJson) => {
                setNewsList(responeJson.data.data)
            })
            .catch((error) => {
                alert(error)
            })
    }
    async function getUserInfo() {
        fetch("https://mlms-vnpt.vnedu.edu.vn/module/api/service/Users/getUserInfo")
            .then((respone) => respone.json())
            .then((responeJson) => {
                setUserInfo(responeJson.data)
            })
            .catch((error) => {
                alert(error)
            })
    }
    useEffect(() => {
        getCoursesList();
        getContestsList();
        getNewsList();
        getUserInfo();
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                {renderHeader()}

                {renderCategory()}

                <View style={{ backgroundColor: '#E5E5E5' }}>

                    {renderNameCategory("Khóa học nổi bật")}

                    <View style={styles.dropbox}>
                        <Text style={styles.dropboxText}>Năng lực chung</Text>
                        <MaterialIcons name="keyboard-arrow-down" color="black" size={16} />
                    </View>

                    <FlatList
                        data={coursesList}
                        renderItem={({ item }) => <RenderCourse item={item} navigation={navigation} />}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />

                    {renderNameCategory("Khóa học mới")}

                    <FlatList
                        data={coursesList}
                        renderItem={({ item }) => <RenderCourse item={item} navigation={navigation} />}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />

                    {renderNameCategory("Cuộc thi nổi bật")}

                    <FlatList
                        data={contestsList}
                        renderItem={({ item }) => <RenderContest item={item} navigation={navigation} />}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />

                    {renderNameCategory("Tin tức & blog")}

                    <FlatList
                        data={newsList}
                        renderItem={({ item }) => <RenderNews item={item} navigation={navigation} />}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />


                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        padding: 16
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    avatar: {
        width: 32,
        height: 32
    },
    welcome: {
        color: 'white',
        marginLeft: 8,
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '600',
        maxWidth: '70%'
    },
    headerIcon: {
        height: 32,
        width: 32,
        backgroundColor: '#4076DC',
        padding: 4,
        borderRadius: 4,
        marginLeft: 8
    },
    headerSlogan: {

        color: 'white',
        fontSize: 20,
        fontWeight: '600'
    },
    category: {
        height: 128,
        padding: 8,
        backgroundColor: '#A8B3BF',
    },
    categoryWrap: {
        flexDirection: 'row'
    },
    categoryItem: {
        margin: 8,
        height: 40,
        backgroundColor: '#ffffff',
        borderRadius: 30,
        padding: 8,
        flexDirection: 'row'
    },
    categoryItemIcon: {
        width: 24,
        height: 24
    },
    stylcategoryItemText: {


        fontSize: 14,
        lineHeight: 22
    },
    card: {
        width: 248,
        backgroundColor: 'white',
        margin: 8,
        padding: 4,
        borderRadius: 4,
    },
    cardHeader: {
        borderBottomWidth: 0.5,
        borderColor: '#CDD7E7',
        paddingBottom: 8,
        marginBottom: 4,
    },
    cardImage: {
        height: 110,
        width: 240,
        borderRadius: 4
    },
    cardTitle: {


        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 22,
        height: 26
    },
    cardProp: {
        margin: 4,
        height: 22,
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftTitle: {
        margin: 8,
        height: 24,


        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24
    },
    rightTitle: {
        margin: 8,
        height: 24,
        color: 'blue',

        fontSize: 14,
        lineHeight: 22
    },
    dropbox: {
        marginLeft: 8,
        marginRight: 8,
        backgroundColor: 'white',
        borderRadius: 4,
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 4,
        paddingTop: 4,
        paddingLeft: 8,
        paddingRight: 8,
        alignItems: 'center'
    },
    dropboxText: {


        fontSize: 14,
        lineHeight: 22
    }
});