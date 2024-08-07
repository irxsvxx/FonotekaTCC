//configura as rotas
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet} from 'react-native';


import Profile from './pages/Profile/index.js';
import Atividades from './pages/atividades/index.js';
import Config from './pages/Config/index.js';

import {Ionicons} from '@expo/vector-icons'

//instanciar ela
const Tab = createBottomTabNavigator();

//screen = paginas
function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel:false, //aparecer o nome embaixo do icone
                tabBarStyle:{
                    position: 'absolute',
                    backgroundColor: '#0097CC',
                    borderTopWidth: 0,
                    elevation:0,
                    height:60,
                }
            }}>
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarActiveBackgroundColor:'#FF7714',
                    tabBarIcon: () =>{
                        return <Ionicons name="person" size={45} color="white" />
                    }
                }}//<Ionicons name="book-outline" size={24} color="black" />
                
            />
            <Tab.Screen
                name="Atividades"
                component={Atividades}
                options={{
                    headerShown: false,
                    tabBarActiveBackgroundColor:'#FF7714',
                    tabBarIcon: () =>{
                        return <Ionicons name="book-outline" size={45} color="white" />
                    }
                }}
            />
            <Tab.Screen
                name="Config"
                component={Config}
                options={{
                    headerShown: false,
                    tabBarActiveBackgroundColor:'#FF7714',
                    tabBarIcon: () =>{
                        return <Ionicons name="settings-outline" size={45} color="white" />
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default Routes;

