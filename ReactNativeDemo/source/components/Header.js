import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale} from '../helpers/ResponsiveUi';
import colors from '../assets/themes/colors';

// This component is for Heading purpose
const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(30),
    marginBottom: moderateScale(15),
  },
  title: {
    fontSize: moderateScale(30),
    color: colors.navyBlue,
    fontWeight: '600',
  },
});
