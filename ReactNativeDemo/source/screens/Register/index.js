import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import strings from '../../constants/strings';
import {moderateScale} from '../../helpers/ResponsiveUi';
import CheckBox from '../../components/CheckBox';
import Or from '../../components/Or';
import Button from '../../components/Button';
import colors from '../../assets/themes/colors';
import Facebook from '../../assets/icons/facebook.svg';
import Google from '../../assets/icons/google.svg';
import {emailValidationCheck} from '../../helpers/validation';
import Input from '../../components/Input';
import Footer from '../../components/Footer';
import {LOGIN} from '../../constants/screenName';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearSaveUserResponse,
  saveUsersData,
} from '../../redux/actions/saveUsersData';
import {getUsers} from '../../redux/actions/getUsers';

const Register = ({navigation}) => {
  // Local states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [termsAndCondition, setTermsAndCondition] = useState(false);
  const [userList, setUserList] = useState([]);

  // dispatcher for redux
  const dispatch = useDispatch();

  // Getting data from redux
  const getUsersDataReducer = useSelector(state => state.getUsersDataReducer);
  const saveUsersDataReducer = useSelector(state => state.saveUsersDataReducer);

  // Button disable state
  const buttonDisable =
    fullName == '' ||
    email == '' ||
    password == '' ||
    confirmPassword == '' ||
    !termsAndCondition;

  useEffect(() => {
    // Setting user data in local state
    if (getUsersDataReducer?.data) {
      setUserList(getUsersDataReducer?.data);
    }
  }, [getUsersDataReducer]);

  useEffect(() => {
    // Checking data is user saved to local storage
    if (saveUsersDataReducer?.data) {
      if (saveUsersDataReducer?.data?.status === 200) {
        clearSaveUserResponse()(dispatch);
        getUsers()(dispatch);
        // navigating to login screen
        navigation.navigate(LOGIN);
      }
    }

    return () => {
      setFullName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setTermsAndCondition(false);
    };
  }, [saveUsersDataReducer]);

  // Registration form handler
  const registrationHandler = () => {
    if (fullName === '') {
      setFullNameError('Please enter your Full Name');
    } else if (fullName?.length <= 2) {
      setFullNameError('Full Name must be 3 character long.');
    } else if (email === '') {
      setEmailError('Please enter your Email');
    } else if (!emailValidationCheck(email)) {
      setEmailError('Please enter valid Email');
    } else if (password === '') {
      setPasswordError('Please enter Password');
    } else if (confirmPassword !== password) {
      setConfirmPasswordError(`Password doesn't match`);
    } else if (termsAndCondition === false) {
      alert('Please accept terms and conditions.');
    } else {
      const formData = {
        name: fullName,
        email,
        password,
      };

      // checking if user is already in database
      const isUserAlreadyAvailable = userList?.find(
        user => user?.email === email,
      );

      if (isUserAlreadyAvailable) {
        alert('User already registered, Please login');
      } else {
        if (getUsersDataReducer?.data?.length > 0) {
          const newUserList = [...getUsersDataReducer?.data, formData];
          saveUsersData(JSON.stringify(newUserList))(dispatch);
        } else {
          saveUsersData(JSON.stringify([formData]))(dispatch);
        }
      }
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.wrapper}>
        <ScrollView style={styles.container}>
          <Header title={strings.register} />
          <View style={styles.form}>
            <Input
              placeholder="Full Name"
              value={fullName}
              onChangeText={value => {
                setFullName(value);
                setFullNameError('');
              }}
              error={fullNameError}
            />
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
            <Input
              placeholder="Confirm Password"
              password
              value={confirmPassword}
              onChangeText={value => {
                setConfirmPassword(value);
                setConfirmPasswordError('');
              }}
              error={confirmPasswordError}
            />
          </View>
          <CheckBox
            checked={termsAndCondition}
            onCheck={val => setTermsAndCondition(val)}
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
            disable={buttonDisable}
            bgColor={colors.orange}
            title={strings.register}
            textColor={colors.white}
            onPress={registrationHandler}
          />
        </ScrollView>
        <Footer
          label={strings.login}
          instruction="Already have an account?"
          onPress={() => navigation.navigate(LOGIN)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    paddingHorizontal: moderateScale(20),
  },
  form: {
    marginBottom: moderateScale(15),
  },
  socialButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: moderateScale(20),
  },
  wrapper: {
    flex: 1,
  },
});
