import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import App from '../SceenDiscover/App';
import Category from '../SceenCategoty/Category';
import Noitification from '../Sceennoitification/ Noitification';
import Filter from '../SceenFilter/Filter';
import OutstandingScience from '../ OutstandingScience/ OutstandingScience';
import Courses from '../courses/Courses';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Contest from '../Contest/Contest';
import Home from '../Home/Home';
import Login from '../Login/Login';
const Tab = createMaterialTopTabNavigator();
export default function Menu() {
    return (
        <Tab.Navigator
            tabBarPosition='bottom'
            tabBarOptions={{
                activeTintColor: '#fff',
                inactiveTintColor: 'black',
                showIcon: true,
                style: { height: 50, backgroundColor: "#FFFFFF", fontSize: 10 }
            }}>
            <Tab.Screen name='Home' component={Home} options={{
                tabBarLabel: '',
                tabBarBadge: 10,
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home-variant" size={20} color='#A8B3BF' />
                ),
            }} />
            <Tab.Screen name='App' component={App}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="star" size={20} color="#A8B3BF" />
                    ),
                }} />
            <Tab.Screen name='Contest' component={Contest} options={{
                tabBarLabel: '',
                tabBarIcon: ({ color }) => (
                    <Ionicons name="md-calendar-outline" size={20} color="#A8B3BF" />
                ),
            }} />
            <Tab.Screen name='Courses' component={Courses} options={{
                tabBarLabel: '',
                tabBarIcon: ({ color }) => (
                    <Ionicons name="folder-open-sharp" size={20} color="#A8B3BF" />
                ),
            }} />

            <Tab.Screen name='Category' component={Category} options={{
                tabBarLabel: '',
                tabBarIcon: ({ color }) => (
                    <Ionicons name="md-grid" size={20} color="#A8B3BF" />
                ),
            }} />

        </Tab.Navigator>
    )
}
