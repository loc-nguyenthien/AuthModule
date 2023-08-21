import React from 'react'
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import {colors} from '../theme'
import {metrics, fontSizes} from '../theme/metrics'

export const Button = ({
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
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, !!disabled && styles.containerDisabled, StyleSheet.flatten(containerStyle)]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={activeOpacity}>
      {children ? (
        children
      ) : (
        <View style={[baseStyle, styles.content, style]} {...rest}>
          <Text style={[styles.buttonText, titleStyle]}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: metrics.gigantic,
    opacity: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
