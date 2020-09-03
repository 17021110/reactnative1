import React, { Component, useState } from 'react'
import { Div, P } from 'reactnative-ui-bootstrap'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from '../components/Styles'
import { TouchableOpacity } from 'react-native'
import Flatslist2 from './Flatslist2'
import { FlatList } from 'react-native-gesture-handler'


export default function Outstanding3() {

    const RenderItem12 = ({ item }) => {
        const [isShow, setIsShow] = useState(false);
        return (
            <Div>
                <TouchableOpacity onPress={() => { setIsShow(!isShow) }}>
                    <Div className='col' style={styles.Outstandding1}>

                        <Div style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <P size={14} style={styles.Outstanding111}>{item.text}</P>
                            <P size={14} style={styles.Outstanding11}>Tong quan ve khoa hoc</P>

                        </Div>
                        <Icon name={isShow == true ? "chevron-down-outline" : "chevron-forward"} size={20} color="#75818F" />

                    </Div>
                </TouchableOpacity>
                {
                    isShow && <Div style={{ marginLeft: 16 }}>
                        <P style={[{ fontWeight: 'normal', fontSize: 14, lineHeight: 22 }, { marginTop: 4, marginBottom: 4 }]}>1. Giới thiệu tổng quát</P>
                        <P style={[{ fontWeight: 'normal', fontSize: 14, lineHeight: 22 }, { marginTop: 4, marginBottom: 4 }]}>2. Bố cục các bước</P>
                        <P style={[{ fontStyle: 'normal', fontWeight: 'normal', fontSize: 14, lineHeight: 22 }, { marginTop: 4, marginBottom: 4 }]}>3. Học thế nào áp dụng hiệu quả</P>
                        <Div style={[{ flexDirection: 'row' }, { marginTop: 4, marginBottom: 4 }, { alignItems: 'center' }]}>
                            <Icon name="time-outline" color="#75818F" size={16} />
                            <P style={{ marginLeft: 8, color: '#595959' }}>3 giờ để hoàn thành</P>
                        </Div>
                        <Div style={[{ flexDirection: 'row' }, { marginTop: 4, marginBottom: 4 }, { alignItems: 'center' }]}>
                            <Icon name="reader-outline" color="#75818F" size={16} />
                            <P style={{ marginLeft: 8, color: '#595959' }}>5 video, 4 bài đọc, 2 bài kiểm tra</P>
                        </Div>
                    </Div>

                }
            </Div>
        )
    }
    const data12 = [
        {
            id: '1231',
            title: 'Xây dựng năng lực QTRR và nâng cao văn hóa QTRR qua các hoạt động trao đổi và đào tạo.',
            text: 'Tuan 1'
        },
        {
            id: '2341',
            title: 'Thay đổi nhận thức của tất cả CBCNV trong Tập đoàn đóng vai trò quan trọng trong bối cảnh thị trường Viễn thông ngày càng cạnh tranh khốc liệt',
            text: 'Tuan 2'
        },
        {
            id: '3451',
            title: 'Xây dựng năng lực QTRR và nâng cao văn hóa QTRR qua các hoạt động trao đổi và đào tạo. ',
            text: 'Tuan 3'
        },

    ];



    return (
        <Div style={styles.DivOutstanding}>
            <Div className='col' style={styles.Outstandding1}>
                <P size={16} style={styles.Outstanding11}>Khoa hoc</P>
                <Icon name="chevron-forward" color="#75818F" size={20} />
            </Div>
            <FlatList
                data={data12}
                renderItem={({ item }) => <RenderItem12 item={item}></RenderItem12>}
                keyExtractor={item => item.id}
            />
        </Div>
    )

}
