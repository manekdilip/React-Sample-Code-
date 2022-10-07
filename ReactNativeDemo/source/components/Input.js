import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import colors from '../assets/themes/colors';
import {moderateScale} from '../helpers/ResponsiveUi';

import Eyes from '../assets/icons/hide.svg';

// This compoent is used for cumtum input from user.
const Input = ({placeholder, password = false, error = '', ...rest}) => {
  // Local State for component
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setFocused] = useState(false);

  return (
    <>
      <View style={[styles.inputWrapper, isFocused && styles.focused]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={colors.grey}
          secureTextEntry={password ? !showPassword : false}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...rest}
        />
        {password && (
          <TouchableOpacity
            style={styles.eyeWrapper}
            onPress={() => setShowPassword(prev => !prev)}>
            <Text>{showPassword ? 'hide' : 'show'}</Text>
          </TouchableOpacity>
        )}
      </View>
      {error !== '' && (
        <View style={styles.errorWrapper}>
          <Text style={styles.error}>{error}</Text>
        </View>
      )}
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.greyAccent,
    borderRadius: moderateScale(5),
    overflow: 'hidden',
    marginTop: moderateScale(15),
    borderWidth: moderateScale(1),
    borderColor: colors.greyAccent,
  },
  focused: {
    borderWidth: moderateScale(1),
    backgroundColor: colors.textActiveBg,
    borderColor: colors.blue,
  },
  input: {
    flex: 8.5,
    padding: moderateScale(15),
    fontSize: moderateScale(14),
    color: colors.navyBlue,
    fontWeight: '600',
  },
  eyeWrapper: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorWrapper: {
    marginTop: moderateScale(5),
    marginHorizontal: moderateScale(15),
  },
  error: {
    fontSize: moderateScale(14),
    color: 'red',
  },
});
