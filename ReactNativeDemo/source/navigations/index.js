import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DASHBOARD, LOGIN, REGISTER} from '../constants/screenName';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../screens/Register';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import {getUsers} from '../redux/actions/getUsers';
import {useDispatch, useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

// Auth screens are present in this navigator
const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={REGISTER} component={Register} />
      <Stack.Screen name={LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

// Home screens are present in this navigator
const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={DASHBOARD} component={Dashboard} />
    </Stack.Navigator>
  );
};

// Main navigator
const NavContainer = () => {
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const loginReducersData = useSelector(state => state.loginReducers);

  useEffect(() => {
    // Getting data from local storage
    getUsers()(dispatch);

    // Checking is user is logged in
    if (loginReducersData?.data === true) {
      setIsAuthenticated(true);
    }
    // Checking is user is logged out
    if (loginReducersData?.data === false) {
      setIsAuthenticated(false);
    }
  }, [loginReducersData]);

  return (
    <NavigationContainer>
      {isAuthenticated ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default NavContainer;
