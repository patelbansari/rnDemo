import React from 'react';
import {Button} from 'react-native-elements';
import {View, Text, StyleSheet} from 'react-native';

export const Home = () => {
  return (
    <View style={style.containerStyle}>
      <View style={style.aViewStyle}>
        <Button
          title="AMB"
          type="outline"
          buttonStyle={style.aSignalAMBStyle}
          titleStyle={style.buttonTitleStyle}
        />
        <Button
          title="A"
          type="outline"
          buttonStyle={style.signalButtonStyle}
          titleStyle={style.buttonTitleStyle}
        />
        <Text style={style.aSignalTimeStyle}>10 </Text>
      </View>

      <View style={style.horizontalView}>
        <View style={style.dViewStyle}>
          <Button
            title="AMB"
            type="outline"
            buttonStyle={style.dAMBButtonStyle}
            titleStyle={style.buttonTitleStyle}
          />
          <Button
            title="D"
            type="outline"
            buttonStyle={style.dSignalButtonStyle}
            titleStyle={style.buttonTitleStyle}
          />
          <Text style={style.dTimeStyle}>10 </Text>
        </View>

        <View style={style.bViewStyle}>
          <Text style={style.bTimeStyle}>10 </Text>
          <Button
            title="B"
            type="outline"
            buttonStyle={style.bButtonStyle}
            titleStyle={style.buttonTitleStyle}
          />
          <Button
            title="AMB"
            type="outline"
            buttonStyle={style.bAMBButtonStyle}
            titleStyle={style.buttonTitleStyle}
          />
        </View>
      </View>
      <View style={style.cViewStyle}>
        <Text style={style.cTextStyle}>10 </Text>
        <Button
          title="C"
          type="outline"
          buttonStyle={style.cButtonStyle}
          titleStyle={style.buttonTitleStyle}
        />
        <Button
          title="AMB"
          type="outline"
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
