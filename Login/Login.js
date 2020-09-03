import React from 'react'
import { Div, P } from 'reactnative-ui-bootstrap'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Image } from 'react-native'

export default function Login({ navigation }) {
    return (
        <Div style={{ backgroundColor: '#00FFCC', height: '100%' }}>
            <Div style={{ alignItems: 'center', justifyContent: 'center', height: '50%' }}>
                <Div style={{ width: 200, height: 200, backgroundColor: '#FFFFFF', borderRadius: 100, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                    <Div style={{ width: 190, height: 190, backgroundColor: '#FFFFFF', borderRadius: 95, borderColor: 'black', borderWidth: 3 }}>
                        <Image style={{ height: 182, width: 182, borderRadius: 91, margin: 1, }} source={require('../img/hinhnen.jpg')}></Image>
                    </Div>
                </Div>
            </Div>
            <Div style={{ backgroundColor: '#FFFFFF', height: '40%', borderRadius: 20, position: 'absolute', bottom: 0, width: '100%' }}>
                <P size={30} style={{ padding: 8, fontWeight: 'bold', marginTop: 24 }}>Welcome to App !</P>
                <P style={{ padding: 8 }}>Sign in to acount</P>
                <TouchableOpacity style={{ justifyContent: 'flex-end', width: '40%', position: 'absolute', bottom: 50, right: 36, flexDirection: 'row' }} onPress={() => navigation.navigate('Login1')}>
                    <Div style={{ backgroundColor: '#00CC99', height: 40, width: '100%', borderRadius: 16, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <P style={{ color: '#FFFFFF' }} size={18}>Get started</P>
                        <Icon name="ios-chevron-forward" color="#FFFFFF" size={20} />
                    </Div>
                </TouchableOpacity>
            </Div>
        </Div>
    )
}
