import React, {PropsWithChildren} from 'react'
import {StyleSheet, View} from 'react-native'
import type {StyleProp, ViewStyle} from 'react-native'

interface ScreenContainerProps extends PropsWithChildren {
  style: StyleProp<ViewStyle>
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({children, style, ...rest}) => (
  <View style={[styles.container, StyleSheet.flatten(style)]} {...rest}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
