export const invertMapKeysAndValue = (stringMap) => {
  const newStringMap = {}

  for (let key in stringMap) {
    const val = stringMap[key]
    newStringMap[val] = key
  }

  return newStringMap
}