import React, {useEffect, useState} from 'react';
import {Button} from 'react-native-elements';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const Home = () => {
  const [direction, setDirection] = useState('Clockwise');
  const [interval, setTimeInterVal] = useState(5000);
  const [currentInterval, setCurrentInterval] = useState(0);
  const [isAEnable, SetAEnable] = useState(true);
  const [isBEnable, SetBEnable] = useState(false);
  const [isCEnable, SetCEnable] = useState(false);
  const [isDEnable, SetDEnable] = useState(false);
  const navigation = useNavigation()
  let timer
  const enableSignal = () => {
    if (direction === 'Clockwise') {
      if (isAEnable) {
        SetAEnable(false);
        SetBEnable(true);
        SetCEnable(false);
        SetDEnable(false);
      } else if (isBEnable) {
        SetAEnable(false);
        SetBEnable(false);
        SetCEnable(true);
        SetDEnable(false);
      } else if (isCEnable) {
        SetAEnable(false);
        SetCEnable(false);
        SetDEnable(true);
        SetBEnable(false);
      } else {
        SetBEnable(false);
        SetCEnable(false);
        SetDEnable(false);
        SetAEnable(true);
      }
    }else if(direction === 'Anticlockwise'){
        if (isAEnable) {
            SetAEnable(false);
            SetBEnable(false);
            SetCEnable(false);
            SetDEnable(true);
          } else if (isBEnable) {
            SetAEnable(true);
            SetBEnable(false);
            SetCEnable(false);
            SetDEnable(false);
          } else if (isCEnable) {
            SetAEnable(false);
            SetCEnable(false);
            SetDEnable(false);
            SetBEnable(true);
          } else {
            SetBEnable(false);
            SetCEnable(true);
            SetDEnable(false);
            SetAEnable(false);
          }
    }else if (direction == 'UpToDown'){
        if (isAEnable) {
            SetAEnable(false);
            SetBEnable(false);
            SetCEnable(true);
            SetDEnable(false);
          } else if (isBEnable) {
            SetAEnable(true);
            SetBEnable(false);
            SetCEnable(false);
            SetDEnable(false);
          } else if (isCEnable) {
            SetAEnable(true);
            SetCEnable(false);
            SetDEnable(false);
            SetBEnable(false);
          } else {
            SetBEnable(false);
            SetCEnable(false);
            SetDEnable(false);
            SetAEnable(true);
          }
    }else if (direction == 'LeftToRight'){
        if (isAEnable) {
            SetAEnable(false);
            SetBEnable(false);
            SetCEnable(false);
            SetDEnable(true);
          } else if (isBEnable) {
            SetAEnable(false);
            SetBEnable(false);
            SetCEnable(false);
            SetDEnable(true);
          } else if (isCEnable) {
            SetAEnable(false);
            SetCEnable(false);
            SetDEnable(true);
            SetBEnable(false);
          } else {
            SetBEnable(true);
            SetCEnable(false);
            SetDEnable(false);
            SetAEnable(false);
          }
    }
  };

  const setParam = () => {
    navigation.setParams({goToSetting:redirectToSetting})
  }
  

  const updateSignal = (direction,interval) => {
      clearTimeout(timer)
      setDirection(direction)
      setTimeInterVal(interval)
      setCurrentInterval(currentInterval + 1);
  }

  useEffect(() => {
      setParam()
     timer = setTimeout(() => {
      setCurrentInterval(currentInterval + 1);
      enableSignal();
    }, interval);
    return () => {
      clearTimeout(timer);
    };
  }, [currentInterval]);


  const redirectToSetting = () => {
        navigation.navigate('Setting',{updateSignal:updateSignal,direction:direction,interval:interval})
  }
  const onPresAMB = (value) => {
        clearTimeout(timer)
        setCurrentInterval(currentInterval + 1);
        if(value === 'A'){
            SetAEnable(true)
            SetBEnable(false)
            SetCEnable(false)
            SetDEnable(false)
        }else if  (value === 'B') {
            SetAEnable(false);
            SetBEnable(true);
            SetCEnable(false);
            SetDEnable(false);
          } else if (value === 'C') {
            SetAEnable(false);
            SetBEnable(false);
            SetCEnable(true);
            SetDEnable(false);
          } else if (value === 'D') {
            SetAEnable(false);
            SetCEnable(false);
            SetDEnable(true);
            SetBEnable(false);
          }
  }
  return (
    <View style={style.containerStyle}>
      <View style={style.aViewStyle}>
        <Button
          title="AMB"
          type="outline"
          onPress={() => onPresAMB('A')}
          buttonStyle={style.aSignalAMBStyle}
          titleStyle={style.buttonTitleStyle}
        />
        <Button
          title="A"
          type="outline"
          buttonStyle={
            isAEnable
              ? [style.signalButtonStyle, {backgroundColor: '#008000'}]
              : [style.signalButtonStyle]
          }
          titleStyle={style.buttonTitleStyle}
        />
        <Text style={style.aSignalTimeStyle}>{interval/1000}</Text>
      </View>

      <View style={style.horizontalView}>
        <View style={style.dViewStyle}>
          <Button
            title="AMB"
            type="outline"
            onPress={() => onPresAMB('D')}
            buttonStyle={style.dAMBButtonStyle}
            titleStyle={style.buttonTitleStyle}
          />
          <Button
            title="D"
            type="outline"
            buttonStyle={
              isDEnable
                ? [style.dSignalButtonStyle, {backgroundColor: '#008000'}]
                : style.dSignalButtonStyle
            }
            titleStyle={style.buttonTitleStyle}
          />
          <Text style={style.dTimeStyle}>{interval/1000}</Text>
        </View>

        <View style={style.bViewStyle}>
          <Text style={style.bTimeStyle}>{interval/1000}</Text>
          <Button
            title="B"
            type="outline"
            buttonStyle={
              isBEnable
                ? [style.bButtonStyle, {backgroundColor: '#008000'}]
                : style.bButtonStyle
            }
            titleStyle={style.buttonTitleStyle}
          />
          <Button
            title="AMB"
            type="outline"
            onPress={() => onPresAMB('B')}
            buttonStyle={style.bAMBButtonStyle}
            titleStyle={style.buttonTitleStyle}
          />
        </View>
      </View>
      <View style={style.cViewStyle}>
        <Text style={style.cTextStyle}>{interval/1000}</Text>
        <Button
          title="C"
          type="outline"
          buttonStyle={
            isCEnable
              ? [style.cButtonStyle, {backgroundColor: '#008000'}]
              : style.cButtonStyle
          }
          titleStyle={style.buttonTitleStyle}
        />
        <Button
          title="AMB"
          type="outline"
          onPress={() => onPresAMB('C')}
          buttonStyle={style.CAMBButtonStyle}
          titleStyle={style.buttonTitleStyle}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  signalButtonStyle: {
    borderColor: '#000000',
    borderWidth: 2,
    width: 50,
    marginTop: 20,
  },
  aSignalTimeStyle: {color: '#000000', marginTop: 20},
  aSignalAMBStyle: {borderColor: '#000000', borderWidth: 2},
  buttonTitleStyle: {color: '#000000'},
  aViewStyle: {flexDirection: 'column', alignItems: 'center', margin: 20},
  horizontalView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  dViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    marginStart: 10,
  },
  dSignalButtonStyle: {
    borderColor: '#000000',
    borderWidth: 2,
    width: 50,
    marginStart: 20,
  },
  dAMBButtonStyle: {borderColor: '#000000', borderWidth: 2},
  dTimeStyle: {color: '#000000', marginStart: 20},
  bViewStyle: {flexDirection: 'row', alignItems: 'center', marginVertical: 30},
  bTimeStyle: {color: '#000000', marginEnd: 20},
  bButtonStyle: {
    borderColor: '#000000',
    borderWidth: 2,
    width: 50,
    marginEnd: 20,
  },
  bAMBButtonStyle: {borderColor: '#000000', borderWidth: 2, marginEnd: 10},
  cViewStyle: {flexDirection: 'column', alignItems: 'center', margin: 20},
  cTextStyle: {color: '#000000'},
  cButtonStyle: {
    borderColor: '#000000',
    borderWidth: 2,
    width: 50,
    marginTop: 20,
  },
  CAMBButtonStyle: {borderColor: '#000000', borderWidth: 2, marginTop: 20},
  containerStyle: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
