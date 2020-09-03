import React, { Component } from 'react';
import { Div, P, Input, Gradient } from 'reactnative-ui-bootstrap'
import { SafeAreaView, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
export default class SearchBarExample extends Component {
    render() {
        return (
            <Gradient width={'100%'} firstColor='0f3bc7' secondColor='246dd4'>
                <Div className="col-12" style={{ backgroundColor: '#1D5FCF', paddingTop: 32, padding: 16 }}>

                    <Div className='col-12' style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 22, justifyContent: "center", alignItems: 'center' }} >
                        <Icon name="search1" color="#005ED3" size={24} />
                        <TextInput placeholder='Tìm kiếm'
                            style={{ backgroundColor: '#FFFFFF', paddingLeft: 10, borderRadius: 22, width: '80%', padding: 10 }}
                        ></TextInput>


                    </Div>


                </Div>
            </Gradient>
        );
    }
}