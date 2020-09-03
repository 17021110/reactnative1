import React, { useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu from './Menu';
import Noitification from '../Sceennoitification/ Noitification';
import SplashScreen from 'react-native-splash-screen'
import Login from '../Login/Login';
import Login1 from '../Login/Login1';
import SeachScreens from '../Home/SeachScreens';
const Drawer = createDrawerNavigator();

function Menu1() {
    return (
        <Drawer.Navigator>

            <Drawer.Screen name="Trang chủ" component={Menu} />
            <Drawer.Screen name="Tìm kiếm" component={SeachScreens} />
            <Drawer.Screen name="Thông báo" component={Noitification} />
            {/* <Drawer.Screen name="Đăng xuất" /> */}


        </Drawer.Navigator>
    );
}
export default Menu1;

