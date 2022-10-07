import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import strings from '../../constants/strings';
import {moderateScale} from '../../helpers/ResponsiveUi';
import Input from '../../components/Input';
import {emailValidationCheck} from '../../helpers/validation';
import Footer from '../../components/Footer';
import {REGISTER} from '../../constants/screenName';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Button';
import Facebook from '../../assets/icons/facebook.svg';
import Google from '../../assets/icons/google.svg';
import colors from '../../assets/themes/colors';
import Or from '../../components/Or';
import {loginAction} from '../../redux/actions/login';
const Login = ({navigation}) => {
  // Local states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [userList, setUserList] = useState([]);

  // dispatcher for redux
  const dipatch = useDispatch();

  // getting users data from redux
  const getUsersDataReducer = useSelector(state => state.getUsersDataReducer);

  useEffect(() => {
    // Setting user data to local state
    if (getUsersDataReducer?.data) {
      setUserList(getUsersDataReducer?.data);
    }
  }, [getUsersDataReducer]);

  // Login handler
  const loginHandler = () => {
    if (email === '') {
      setEmailError('Please enter your Email');
    } else if (!emailValidationCheck(email)) {
      setEmailError('Please enter valid Email');
    } else if (password === '') {
      setPasswordError('Please enter Password');
    } else {
      const isUserAlreadyAvailable = userList?.find(
        user => user?.email?.toLocaleLowerCase() === email?.toLocaleLowerCase(),
      );
      if (isUserAlreadyAvailable) {
        if (isUserAlreadyAvailable?.password === password) {
          loginAction(true)(dipatch);
        } else {
          alert('Username/Password is incorrect');
        }
      } else {
        alert('User Not Found, Please Register.');
      }
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.wrapper}>
        <ScrollView style={styles.container}>
          <Header title={strings.login} />
          <Input
            placeholder="Enter Email Address"
            value={email}
            onChangeText={value => {
              setEmail(value);
              setEmailError('');
            }}
            error={emailError}
          />
          <Input
            placeholder="Password"
            password
            value={password}
            onChangeText={value => {
              setPassword(value);
              setPasswordError('');
            }}
            error={passwordError}
          />
          <Or />
          <View style={styles.socialButtons}>
            <Button
              Icon={Google}
              bgColor={colors.greyAccent}
              title={strings.google}
              textColor={colors.navyBlue}
              style={{width: '48%'}}
            />
            <Button
              Icon={Facebook}
              bgColor={colors.greyAccent}
              title={strings.facebook}
              textColor={colors.navyBlue}
              style={{width: '48%'}}
            />
          </View>
          <Button
            disable={email == '' || password == ''}
            bgColor={colors.orange}
            title={strings.register}
            textColor={colors.white}
            onPress={loginHandler}
          />
        </ScrollView>
        <Footer
          label={strings.register}
          instruction="Don’t have an account?"
          onPress={() => navigation.navigate(REGISTER)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    paddingHorizontal: moderateScale(20),
  },
  wrapper: {
    flex: 1,
  },
  socialButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: moderateScale(20),
  },
});
