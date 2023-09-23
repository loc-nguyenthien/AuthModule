import React, {useCallback, useState} from 'react'
import {Image, ScrollView, StyleSheet, View} from 'react-native'
import type {ImageSourcePropType, ImageStyle, StyleProp, ViewStyle} from 'react-native'
import {defaultLocalize, metrics} from '../index'
import {Button, ScreenContainer, TextInputView} from '../components'

interface LoginScreenProps {
  localize?: any
  loginAction?: ({username, password}: {username: string; password: string}) => void
  scrollStyle: StyleProp<ViewStyle>
  logo?: ImageSourcePropType
  logoStyle?: StyleProp<ImageStyle>
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  localize,
  loginAction,
  scrollStyle,
  logo,
  logoStyle,
}) => {
  const [username, setUsername] = useState('name@gmail.com')
  const [password, setPassword] = useState('12345678x@X')

  const handleUserLogin = useCallback(() => {
    loginAction?.({username, password})
  }, [loginAction, password, username])

  return (
    <ScreenContainer style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={StyleSheet.flatten([styles.scrollContent, scrollStyle])}>
        <Image
          source={logo ?? require('../assets/images/sts.png')}
          style={StyleSheet.flatten([styles.logo, logoStyle])}
        />
        <View style={styles.textInputContainer}>
          <TextInputView
            placeholder={defaultLocalize('login.username', localize)}
            onChangeText={setUsername}
            value={username}
            autoFocus
          />
          <TextInputView
            placeholder={defaultLocalize('login.password', localize)}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
            autoFocus
          />
        </View>
      </ScrollView>
      <Button
        containerStyle={styles.loginButton}
        title={defaultLocalize('login.loginButton', localize)}
        onPress={handleUserLogin}
      />
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    aspectRatio: 1,
  },
  textInputContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  textInput: {
    marginVertical: metrics.xs,
    paddingTop: metrics.large,
  },
  loginButton: {
    alignSelf: 'center',
    width: metrics.textInputWidth,
    marginTop: metrics.small,
    marginBottom: 20,
  },
  forgotPassword: {
    marginVertical: metrics.medium,
  },
})
