/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

import ScreenView from '../../../components/ScreenView';

import useBooleanState from '../../../hooks/useBooleanState';
import useTextInputState from '../../../hooks/useTextInputState';
import useFlowStackNavigatorNavigate from '../../nav/useFlowStackNavigatorNavigate';

const LoginScreen = () => {
  const [username, _setUsername, handleUsernameChangeText] = useTextInputState('');
  const [password, _setPassword, handlePasswordChangeText] = useTextInputState('');
  const [showPassword, _setShowPassword, toggleShowPassword] = useBooleanState(false);
  const showPasswordText = !showPassword ? 'show' : 'hide';
  const { navigateTo } = useFlowStackNavigatorNavigate();

  return (
    <ScreenView>
      <Text>Login</Text>
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
            <Text onPress={toggleShowPassword} style={{ color: 'blue' }}>
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
      <Button title="Step 1" onPress={navigateTo.Step1} />
    </ScreenView>
  );
};

LoginScreen.ROUTE = 'Login' as const;

export default LoginScreen;
