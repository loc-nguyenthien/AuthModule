import React, { useCallback, useState } from "react";
import { ScrollView, StyleSheet, View, TextInput } from "react-native";
import { AuthMetrics, defaultLocalize } from "../index";
import { Button, ScreenContainer } from "../components";

export const LoginScreen = ({ localize, loginAction }) => {
  const [username, setUsername] = useState("name@gmail.com");
  const [password, setPassword] = useState("12345678x@X");

  const handleUserLogin = useCallback(() => {
    loginAction?.({ username, password });
  }, [password, username]);

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <ScreenContainer style={styles.container}>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder={defaultLocalize("login.username", localize)}
            onChangeText={setUsername}
            value={username}
            autoFocus
          />
          <TextInput
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
      </ScreenContainer>
    </ScrollView>
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
    marginVertical: AuthMetrics.metrics.xs,
    paddingTop: AuthMetrics.metrics.large,
  },
  loginButton: {
    alignSelf: "center",
    width: AuthMetrics.metrics.textInputWidth,
    marginTop: AuthMetrics.metrics.small,
  },
  forgotPassword: {
    marginVertical: AuthMetrics.metrics.medium,
  },
});
