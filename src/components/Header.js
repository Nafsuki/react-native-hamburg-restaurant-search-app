import { Text, View, StyleSheet } from 'react-native'

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.lightHeader}>Was möchtest du</Text>
      <Text style={styles.boldHeader}>jetzt essen?</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 25,
  },
  lightHeader: {
    fontSize: 35,
  },
  boldHeader: {
    fontSize: 40,
    fontWeight: 'bold',
  },
})
