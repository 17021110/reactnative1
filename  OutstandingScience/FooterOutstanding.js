import React, { Component } from 'react'
import { Div, Button } from 'reactnative-ui-bootstrap'

export default class FooterOutstanding extends Component {
    render() {
        return (

            <Div className='col' style={{ alignItems: 'center', justifyContent: 'center', height: 68, backgroundColor: '#ffffff' }}>
                <Button
                    onPress={() => alert('hello')}
                    title="Đăng kí học"
                    type='PRIMARY'
                    color="#FFFFFF"
                    textStyle={{ fontSize: 20, lineHeight: 22, fontWeight: '600', color: '#FFFFFF' }}
                    style={{ borderRadius: 4, width: '80%', height: 40 }} >dang ki hoc</Button>
            </Div>
        )
    }
}
