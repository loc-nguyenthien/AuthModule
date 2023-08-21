import React, {useState} from 'react'
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {colors, getColorOpacity} from '../theme'
import {fontSizes, metrics} from '../theme/metrics'

export const TextInputView = ({
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
    <TouchableOpacity style={style} onPress={onPress} disabled={!onPress} activeOpacity={1}>
      {!!title && (
        <Text style={[styles.textStyle, titleStyle]}>
          {title}
          {isRequire && <Text style={{color: colors.redErrorText}}> *</Text>}
        </Text>
      )}
      <View
        style={[styles.textInputContainer, borderStyle, inputStyle]}
        pointerEvents={editable ? 'auto' : 'none'}>
        <TextInput
          value={value ? value.toString() : ''}
          style={[styles.textInput, textInputStyle]}
          onChangeText={text => {
            onChangeText && onChangeText(text)
          }}
          placeholderTextColor={colors.lightBlack}
          underlineColorAndroid="transparent"
          secureTextEntry={secureTextEntry && !showPassword}
          onSubmitEditing={() => {
            if (onSubmitEditing) {
              onSubmitEditing?.()
            }
            setFocus(false)
          }}
          onBlur={() => {
            setFocus(false)
            onBlur?.()
          }}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          textAlignVertical={textAlignVertical}
          onFocus={() => {
            setFocus(true)
            onFocus?.()
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
    flex: 1,
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
