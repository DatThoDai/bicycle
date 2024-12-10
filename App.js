import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen'
import ProductsScreen from './ProductsScreen';
import DetailScreen from './DetailScreen';

import { Provider } from 'react-redux';
import { store } from './redux/Store';

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='Welcome' component={WelcomeScreen} />
                    <Stack.Screen name='Products' component={ProductsScreen} />
                    <Stack.Screen name='Details' component={DetailScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}