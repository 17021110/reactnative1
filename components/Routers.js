import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Menu from './Menu';
import App from '../SceenDiscover/App';
import Detailsnoitification from '../Sceennoitification/Detailsnoitification';
import Noitification from '../Sceennoitification/ Noitification';
import Headernoitification from '../Sceennoitification/Headernoitification';
import Filter from '../SceenFilter/Filter';
import Category from '../SceenCategoty/Category';
import OutstandingScience from '../ OutstandingScience/ OutstandingScience';
import Courses from '../courses/Courses';

import Home from '../Home/Home';
import Contest from '../Contest/Contest';
import SeachScreens from '../Home/SeachScreens';
import DetailContest from '../Contest/DetailContest';
import Login from '../Login/Login';
import Login1 from '../Login/Login1';
import SplashScreen from 'react-native-splash-screen'
import Menu1 from './Menu1';
import Blog from '../Home/Blog';


const Stack = createStackNavigator();
export default function Routers() {
    useEffect(
        () => {
            SplashScreen.hide()
        }
    )
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: false }} name="Login1" component={Login1} />

                {/* <Stack.Screen options={{ headerShown: false }} name="Menu" component={Menu} /> */}
                <Stack.Screen options={{ headerShown: false }} name="Menu1" component={Menu1} />
                <Stack.Screen options={{ headerShown: false }} name="App" component={App}></Stack.Screen>
                <Stack.Screen options={{ headerShown: false }} name="Category" component={Category} />
                <Stack.Screen options={{ headerShown: false }} name="Noitification" component={Noitification} />
                <Stack.Screen options={{ headerShown: false }} name="Detailsnoitification" component={Detailsnoitification} />
                <Stack.Screen options={{ headerShown: false }} name="Filter" component={Filter} />
                <Stack.Screen options={{ headerShown: false }} name="Headernoitification" component={Headernoitification} />
                <Stack.Screen options={{ headerShown: false }} name="OutstandingScience" component={OutstandingScience} />
                <Stack.Screen options={{ headerShown: false }} name="Courses" component={Courses} />
                <Stack.Screen options={{ headerShown: false }} name="Contest" component={Contest} />
                <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
                <Stack.Screen options={{ headerShown: false }} name="SeachScreens" component={SeachScreens} />
                <Stack.Screen options={{ headerShown: false }} name="DetailContest" component={DetailContest} />
                <Stack.Screen options={{ headerShown: false }} name="Blog" component={Blog} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

