import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale} from '../helpers/ResponsiveUi';
import colors from '../assets/themes/colors';

// This component is customizable button for any button
const Button = ({title, Icon, bgColor, textColor, disable, onPress, style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      style={[
        styles.container,
        {
          backgroundColor: disable ? colors.grey : bgColor,
          justifyContent: Icon ? 'space-between' : 'center',
        },
        style,
      ]}>
      {Icon && <Icon />}
      <Text style={[styles.title, {color: textColor}]}>{title}</Text>
      <View />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: moderateScale(50),
    paddingHorizontal: moderateScale(15),
    alignItems: 'center',
    borderRadius: moderateScale(10),
  },
  title: {
    fontSize: moderateScale(17),
    fontWeight: '500',
  },
});
