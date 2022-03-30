import { Text, View, StyleSheet, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { elevation } from '../common/styles'
import { useState } from 'react'

export default function Search({ setTerm }) {
  const [input, setInput] = useState('')

  const handleEndEditing = () => {
    if(!input) return
    setTerm(input)
    setInput('')
  }

  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name='search' size={25}/>
      <TextInput
        style={styles.input}
        placeholder='Restraunts, food'
        value={input}
        onChangeText={(text) => setInput(text)}
        onEndEditing={handleEndEditing}
        autoCapitalize='none'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 25,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 30,
  },
  elevation,
  input: {
    fontSize: 18,
    marginLeft: 10,
    paddingTop: 3,
  },
})
