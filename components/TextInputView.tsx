import React, {useState} from 'react'
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import type {StyleProp, TextInputProps, TouchableOpacityProps, ViewStyle, TextStyle} from 'react-native'
import {colors, getColorOpacity} from '../theme'
import {fontSizes, metrics} from '../theme/metrics'

interface TextInputViewProps extends TextInputProps {
  title?: string
  titleStyle?: StyleProp<TextStyle>
  isRequire?: boolean
  inputStyle?: StyleProp<ViewStyle>
  messageError?: string
  textInputStyle?: StyleProp<TextStyle>
  onPress?: TouchableOpacityProps['onPress']
}

export const TextInputView: React.FC<TextInputViewProps> = ({
  value,
  onChangeText,
  title,
  onSubmitEditing,
  style,
  titleStyle,
  isRequire,
  editable = true,
  textAlignVertical = 'top',
  inputStyle,
  messageError,
  textInputStyle,
  onPress,
  onBlur,
  onFocus,
  secureTextEntry,
  autoCapitalize = 'sentences',
  keyboardType = 'default',
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const [isFocus, setFocus] = useState(false)
  const borderStyle = messageError ? styles.borderError : isFocus ? styles.borderFocus : null

  return (
    <TouchableOpacity
      style={StyleSheet.flatten([styles.container, style])}
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={1}>
      {!!title && (
        <Text style={StyleSheet.flatten([styles.textStyle, titleStyle])}>
          {title}
          {isRequire && <Text style={{color: colors.redErrorText}}> *</Text>}
        </Text>
      )}
      <View
        style={StyleSheet.flatten([styles.textInputContainer, borderStyle, inputStyle])}
        pointerEvents={editable ? 'auto' : 'none'}>
        <TextInput
          value={value ? value.toString() : ''}
          style={StyleSheet.flatten([styles.textInput, textInputStyle])}
          onChangeText={text => {
            onChangeText?.(text)
          }}
          placeholderTextColor={colors.lightBlack}
          underlineColorAndroid="transparent"
          secureTextEntry={secureTextEntry && !showPassword}
          onSubmitEditing={e => {
            onSubmitEditing?.(e)
            setFocus(false)
          }}
          onBlur={e => {
            setFocus(false)
            onBlur?.(e)
          }}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          textAlignVertical={textAlignVertical}
          onFocus={e => {
            setFocus(true)
            onFocus?.(e)
          }}
          {...rest}
        />
      </View>
      {!!messageError && <Text style={styles.textError}>{messageError}</Text>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  textInputContainer: {
    height: metrics.ginormous,
    minHeight: metrics.huge,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: getColorOpacity(colors.textInputBorder, 0.32),
    borderWidth: metrics.borderWidth,
    width: metrics.textInputWidth,
    backgroundColor: colors.white,
    borderRadius: metrics.xxs,
  },
  borderError: {
    borderColor: colors.redErrorText,
  },
  borderFocus: {
    borderColor: colors.primary,
  },
  textInput: {
    flex: 1,
    color: colors.primaryText,
    textAlignVertical: 'center',
    fontSize: fontSizes.body1,
    marginVertical: metrics.small,
    paddingHorizontal: metrics.smaller,
    height: metrics.ginormous,
    minHeight: metrics.huge,
  },
  textStyle: {
    fontSize: fontSizes.span,
    color: colors.greyText,
  },
  rightIcon: {marginRight: metrics.small},
  textError: {
    fontSize: fontSizes.small,
    color: colors.redErrorText,
    marginTop: metrics.xxs,
    marginLeft: metrics.s,
  },
})
