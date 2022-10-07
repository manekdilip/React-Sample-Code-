import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {moderateScale} from '../../helpers/ResponsiveUi';
import colors from '../../assets/themes/colors';
import Button from '../../components/Button';
import strings from '../../constants/strings';
import {useDispatch} from 'react-redux';
import {loginAction} from '../../redux/actions/login';

const Dashboard = () => {
  // dispatcher for redux
  const dispatch = useDispatch();

  // Logout handler
  const logoutHandler = () => {
    loginAction(false)(dispatch);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
        <Button
          bgColor={colors.blue}
          title={strings.getStartedNow}
          textColor={colors.white}
          style={styles.button}
        />
        <Button
          bgColor={colors.blue}
          title={strings.logout}
          textColor={colors.white}
          style={styles.logoutButton}
          onPress={logoutHandler}
        />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.orange,
  },
  container: {
    paddingHorizontal: moderateScale(20),
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    height: moderateScale(150),
    width: moderateScale(150),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  button: {
    marginTop: moderateScale(100),
  },
  logoutButton: {
    marginTop: moderateScale(20),
  },
});
