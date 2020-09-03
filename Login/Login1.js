import React, { useState, useEffect } from 'react'
import { Div, P } from 'reactnative-ui-bootstrap'
import { TouchableOpacity, SafeAreaView, TextInput } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Image } from 'react-native'
import md5 from 'md5'
import CookieManager from '@react-native-community/cookies';


export default function Login1({ navigation }) {
    const [showpassword, setShowpassword] = useState(true);
    const [value, setValue] = useState(null);
    const [value1, setValue1] = useState(null);
    const [borderColor, setBordercolor] = useState('white')
    const [borderColor1, setBordercolor1] = useState('white')

    const [items, setItems] = useState([]);
    async function login() {
        fetch(`https://mlms-vnpt.vnedu.edu.vn/module/api/service/Security/login?email=${value}&password=` + md5(value1))
            // .then(Alert.alert("thanh cong"))
            .then((response) => response.json())
            .then((responseJson) => {

                if (responseJson.success == true) {
                    CookieManager.clearAll()
                        .then((res) => {
                            console.log('CookieManager.clearAll =>', res);
                        });
                    CookieManager.setFromResponse("https://mlms-vnpt.vnedu.edu.vn/",
                        "app_token=" + encodeURIComponent(responseJson.token))

                        .then((r) => {
                            // console.log('CookieManager.setFromResponse =>', r)
                            CookieManager.get('https://mlms-vnpt.vnedu.edu.vn')
                                .then((v) => {
                                    console.log('CookieManager.get =>', v);
                                });
                        });
                    navigation.navigate("Menu1")

                }
                else {
                    alert(responseJson.msg)
                }
                console.log(responseJson.msg)
                // Alert.alert(String(items.data[0].id))
            })


    }
    validate1 = () => {
        alert('Tên đăng nhập hoặc mật khẩu còn trống')

        if (value == '' || value == null) {
            setBordercolor('red')
        }
        else {
            setBordercolor('white')
        }
        if (value1 == '' || value1 == null) {
            setBordercolor1('red')
        }
        else {
            setBordercolor1('white')
        }

    }




    // useEffect(() => {

    //     fetch("https://mlms-vnpt.vnedu.edu.vn/module/api/service/Security/login?email=hv2@gmail.com&password=" + md5(value1))
    //         // .then(Alert.alert("thanh cong"))
    //         .then((response) => response.json())
    //         .then((responseJson) => {

    //             console.log(responseJson)
    //             // Alert.alert(String(items.data[0].id))
    //         })

    //     // .catch(Alert.alert("loi"))
    // }, [])
    return (

        < SafeAreaView >
            <Div style={{ backgroundColor: '#00FFCC', height: '100%' }}>
                <Div style={{ justifyContent: 'flex-end', padding: 16, alignItems: 'flex-start', height: '25%' }}>
                    <P style={{ color: 'black', fontWeight: '600' }} size={30}>Welcome to App !</P>
                </Div>
                <Div style={{ backgroundColor: '#FFFFFF', height: '75%', borderRadius: 20, position: 'absolute', bottom: 0, width: '100%' }}>

                    <Div style={{ backgroundColor: '#FFFFFF', margin: 16 }}>
                        <P size={18}>Tên đăng nhập</P>
                        <Div style={{ width: '100%', height: 30, flexDirection: 'row', alignItems: 'center', borderColor: borderColor, borderWidth: 1, borderRadius: 5 }}>
                            <FontAwesome name="user-o" color="black" size={20} />
                            <TextInput style={{ width: '80%', height: 30, marginLeft: 8, }} placeholder="Tên đăng nhập" onChangeText={text => setValue(text)} value={value}></TextInput>
                        </Div>

                    </Div>
                    <Div style={{ backgroundColor: '#FFFFFF', margin: 16 }}>
                        <P size={18}>Password</P>
                        <Div style={{ width: '100%', height: 30, flexDirection: 'row', alignItems: 'center', borderColor: borderColor1, borderWidth: 1, borderRadius: 5 }}>
                            <Feather name="lock" color="black" size={20} />
                            <TextInput style={{ width: '80%', height: 30, marginLeft: 8, }} placeholder="Mật khẩu" secureTextEntry={showpassword} onChangeText={text => setValue1(text)} value={value1}></TextInput>
                            <TouchableOpacity onPress={() => setShowpassword(!showpassword)}>
                                {showpassword == true ? <Ionicons name="eye-off-outline" color="black" size={20} /> : <Ionicons name="eye-outline" color="green" size={20} />}
                            </TouchableOpacity>
                        </Div>

                    </Div>
                    <Div style={{ backgroundColor: '#FFFFFF', margin: 16 }}>
                        <TouchableOpacity style={{ justifyContent: 'flex-end', width: '100%', flexDirection: 'row' }} onPress={() => { value == '' || value1 == '' || value == null || value1 == null ? validate1() : login() }}>

                            <Div style={{ backgroundColor: '#00CC99', height: 40, width: '100%', borderRadius: 16, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                <P style={{ color: '#FFFFFF' }} size={18}>Đăng nhập</P>

                            </Div>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ justifyContent: 'flex-end', width: '100%', flexDirection: 'row', marginTop: 8 }} onPress={() => navigation.goBack()}>
                            <Div style={{ backgroundColor: '#FFFFFF', height: 40, width: '100%', borderRadius: 16, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderColor: '#00CC99', borderWidth: 1 }}>
                                <P style={{ color: '#00CC99' }} size={18}>Tạo tài khoản mới</P>

                            </Div>
                        </TouchableOpacity>

                    </Div>


                </Div>
            </Div>
        </SafeAreaView >
    )
}
