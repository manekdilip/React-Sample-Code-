import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../assets/themes/colors';
import {moderateScale} from '../helpers/ResponsiveUi';

// This is a simple seprator component
const Or = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>Or</Text>
      <View style={styles.line} />
    </View>
  );
};

export default Or;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: moderateScale(35),
  },
  line: {
    height: 1,
    width: moderateScale(70),
    backgroundColor: colors.grey,
  },
  text: {
    color: colors.grey,
    fontSize: moderateScale(14),
    marginHorizontal: moderateScale(10),
  },
});
