import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import strings from '../constants/strings';

import Arrow from '../assets/icons/arrow.svg';
import {moderateScale} from '../helpers/ResponsiveUi';
import colors from '../assets/themes/colors';

// This component is for custom footer
const Footer = ({label, instruction, onPress}) => {
  return (
    <View style={styles.wrapper}>
      {instruction && <Text style={styles.instruction}>{instruction}</Text>}
      {label && (
        <TouchableOpacity style={styles.loginWrapper} onPress={onPress}>
          <Text style={styles.login}>{label}</Text>
          <Arrow />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(20),
  },
  loginWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(15),
  },
  login: {
    textTransform: 'uppercase',
    letterSpacing: moderateScale(2),
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: colors.blue,
    marginRight: moderateScale(15),
  },
  instruction: {
    fontSize: moderateScale(14),
  },
});
