import en from './en.json'

type ILocalize = (text: string, custom?: any) => string

const getItemFromJSON = (position: string) => {
  const listKey = position.split('.')
  return listKey.reduce((text, nextKey, index) => {
    if (index === 0) {
      if (!en[nextKey]) {
        return text
      }
      return en[nextKey]
    }
    if (typeof text === 'string') {
      return text
    }
    if (typeof text === 'object') {
      if (!text[nextKey]) {
        return text
      }
      return text[nextKey]
    }
    return text
  }, '')
}

export function localize(text: string, i18n?: ILocalize, custom?: any) {
  return i18n ? i18n(text, custom) : getItemFromJSON(text)
}
