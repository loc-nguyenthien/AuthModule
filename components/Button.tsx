import React, {PropsWithChildren} from 'react'
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import {colors} from '../theme'
import {metrics, fontSizes} from '../theme/metrics'
import type {TextStyle, StyleProp, ViewStyle, TouchableOpacityProps} from 'react-native'

interface ButtonProps extends PropsWithChildren, TouchableOpacityProps {
  containerStyle?: StyleProp<ViewStyle>
  baseStyle?: StyleProp<ViewStyle>
  title?: string
  titleStyle?: StyleProp<TextStyle>
}

export const Button: React.FC<ButtonProps> = ({
  baseStyle,
  children,
  title,
  titleStyle,
  style,
  onPress,
  disabled,
  activeOpacity,
  containerStyle,
  ...rest
}) => (
  <TouchableOpacity
    style={StyleSheet.flatten([styles.container, !!disabled && styles.containerDisabled, containerStyle])}
    onPress={onPress}
    disabled={disabled}
    activeOpacity={activeOpacity}
    {...rest}>
    {children ? (
      children
    ) : (
      <View style={StyleSheet.flatten([baseStyle, styles.content, style])}>
        <Text style={StyleSheet.flatten([styles.buttonText, titleStyle])}>{title}</Text>
      </View>
    )}
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: metrics.gigantic,
    opacity: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  containerDisabled: {
    opacity: 0.5,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: fontSizes.medium,
    color: colors.contrastText,
    marginHorizontal: metrics.small,
    textAlign: 'center',
  },
})
