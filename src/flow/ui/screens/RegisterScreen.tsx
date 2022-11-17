import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import ScreenView from '../../../components/ScreenView';

import useTextInputState from '../../../hooks/useTextInputState';
import useToggleElementState from '../../../hooks/useToggleElementState';
import createFlowStackNavigateTo from '../../nav/createFlowStackNavigateTo';

const RegisterScreen = (props: NavigationInjectedProps) => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [username, _setUsername, handleUsernameChangeText] = useTextInputState('');
  const [password, _setPassword, handlePasswordChangeText] = useTextInputState('');
  const [showPassword, _setShowPassword, toggleShowPassword] = useToggleElementState(false);
  /* eslint-enable @typescript-eslint/no-unused-vars */
  const showPasswordText = !showPassword ? 'show' : 'hide';
  const navigation = props.navigation;
  const navigateTo = createFlowStackNavigateTo(navigation);

  return (
    <ScreenView>
      <Text>Register</Text>
      <View>
        <View>
          <Text>Username</Text>
          <TextInput
            placeholder="username@domain.tld"
            value={username}
            onChangeText={handleUsernameChangeText}
            autoFocus={true}
          />
        </View>
        <View>
          <Text>
            Password{' '}
            <Text onPress={toggleShowPassword} style={styles.passwordVisibilityToggle}>
              {showPasswordText}
            </Text>
          </Text>
          <TextInput
            placeholder="min 8 chars, incl. 1 num, 1 sym"
            value={password}
            onChangeText={handlePasswordChangeText}
            secureTextEntry={showPassword}
          />
        </View>
      </View>
      <Button title="Step 1" onPress={() => navigateTo.Step1()} />
    </ScreenView>
  );
};

RegisterScreen.ROUTE = 'Register' as const;

const styles = StyleSheet.create({
  passwordVisibilityToggle: {
    color: 'blue',
  },
});

export default RegisterScreen;
