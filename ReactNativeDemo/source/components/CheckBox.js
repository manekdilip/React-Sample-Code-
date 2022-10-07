import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../assets/themes/colors';
import {moderateScale} from '../helpers/ResponsiveUi';

// This component is used for custom checkbox
const CheckBox = ({checked, onCheck}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onCheck}
        style={[styles.unchecked, checked && styles.checked]}>
        {checked && <View style={styles.box} />}
      </TouchableOpacity>
      <Text style={styles.title}>
        I've read and agree to the{' '}
        <Text style={styles.titleHighlight}>terms</Text> of
        <Text style={styles.titleHighlight}> privacy policy.</Text>
      </Text>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.grey,
    fontSize: moderateScale(13),
    marginLeft: moderateScale(10),
  },
  titleHighlight: {
    color: colors.blue,
    fontSize: moderateScale(13),
  },
  unchecked: {
    width: moderateScale(20),
    height: moderateScale(20),
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    borderColor: colors.orange,
  },
  box: {
    width: moderateScale(10),
    height: moderateScale(10),
    backgroundColor: colors.orange,
    borderRadius: 2,
  },
});
