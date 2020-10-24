import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import RadioForm from 'react-native-simple-radio-button';

export default Setting = () => {
    const route = useRoute()
    const navigation  = useNavigation()
    const [direction,setDirection] = useState('Clockwise')
    const [interval,setInterval] = useState(5000)
  let radioDirection = [
    {label: 'Clockwise', value: 0},
    {label: 'Anticlockwise', value: 1},
    {label: 'Left To Right', value: 2},
    {label: 'Up to Bottom', value: 2},
  ];

  let radioInterval = [
    {label: '5 Sec', value: 0},
    {label: '10 Sec', value: 1},
    {label: '20 sec', value: 2},
    {label: '30 sec', value: 2},
  ];

  return (
    <View>
      <View style={{padding: 20}}>
        <Text style={{fontSize: 20, paddingVertical: 20}}>
          Select Direction
        </Text>
        <RadioForm
          radio_props={radioDirection}
          initial={
              0
          }
          formHorizontal={false}
          labelHorizontal={true}
          buttonColor={'#2196f3'}
          animation={true}
          onPress={(value) => {
            switch(value) {
              case 0 : {
                setDirection('Clockwise')
                break;
              }
              case 1:{
                setDirection('Anticlockwise')
                break;
              } 
              case 2:{
                setDirection('LeftToRight')
                break;
              } 
              case 3: {
                setDirection('UpToDown')
                break;
              }
            }
        }}
        />
      </View>

      <View style={{padding: 20}}>
        <Text style={{fontSize: 20, paddingVertical: 20}}>Select Interval</Text>
        <RadioForm
          radio_props={radioInterval}
          initial={0}
          formHorizontal={false}
          labelHorizontal={true}
          buttonColor={'#2196f3'}
          animation={true}
          onPress={(value) => {
              switch(value) {
                case 0 : {
                    setInterval(5000)
                    break;
                }
                case 1: {
                    setInterval(10000)
                    break;
                }
                case 2:{
                    setInterval(20000)
                    break;
                } 
                case 3:{
                    setInterval(30000)
                    break;
                }
              }
          }}
        />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title={'Update Signal'}
          type="outline"
          onPress={() => {
            route?.params?.updateSignal(direction,interval)
            navigation.goBack()
              }}
          buttonStyle={{width: 200, height: 50}}
          style={{alignSelf: 'center'}}
        />
      </View>
    </View>
  );
};
