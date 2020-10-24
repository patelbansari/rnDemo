import React from 'react';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {Home} from '../screen/home/Home';
import Setting from '../screen/setting/Setting';
import {Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation,route}) => ({
          title: 'Signal App',
          headerRight: () => (
            <TouchableOpacity onPress={() => {
              route?.params?.goToSetting()}}>
              <Image
                source={require('../assets/image/ic_settings.png')}
                style={style.setting}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
};

const style = StyleSheet.create({
  setting: {width: 25, height: 25, marginEnd: 20},
});
