import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Home} from '../screen/home/Home';
import Setting from '../screen/setting/Setting';
import { Button, Image, StyleSheet } from 'react-native';

const Stack = createStackNavigator()

export const MainStack = () => {
    return(
        <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={Home} 
        options = {{
          headerRight: () =>(
            <Image source={require('../assets/image/ic_settings.png')} style={style.setting}/>
          )
          }}/>
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    )
}

const style = StyleSheet.create({
  setting:{width:25,height:25,marginEnd:20}
})