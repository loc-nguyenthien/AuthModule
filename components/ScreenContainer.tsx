import React from "react";
import { StyleSheet, View } from "react-native";

export const ScreenContainer = ({ children, style, ...rest }) => {
  return (
    <View style={[styles.container, StyleSheet.flatten(style)]} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
