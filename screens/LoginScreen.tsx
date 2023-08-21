import React, { useCallback, useState } from "react";
import { ScrollView, StyleSheet, View, TextInput } from "react-native";
import { defaultLocalize, metrics } from "../index";
import { Button, ScreenContainer, TextInputView } from "../components";

export const LoginScreen = ({ localize, loginAction }) => {
  const [username, setUsername] = useState("name@gmail.com");
  const [password, setPassword] = useState("12345678x@X");

  const handleUserLogin = useCallback(() => {
    loginAction?.({ username, password });
  }, [password, username]);

  return (
    <ScreenContainer style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.textInputContainer}>
          <TextInputView
            placeholder={defaultLocalize("login.username", localize)}
            onChangeText={setUsername}
            value={username}
            autoFocus
          />
          <TextInputView
            placeholder={defaultLocalize("login.password", localize)}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
            autoFocus
          />
        </View>
        <Button
          containerStyle={styles.loginButton}
          title={defaultLocalize("login.loginButton", localize)}
          onPress={handleUserLogin}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputContainer: {
    alignItems: "center",
  },
  textInput: {
    marginVertical: metrics.xs,
    paddingTop: metrics.large,
  },
  loginButton: {
    alignSelf: "center",
    width: metrics.textInputWidth,
    marginTop: metrics.small,
  },
  forgotPassword: {
    marginVertical: metrics.medium,
  },
});
