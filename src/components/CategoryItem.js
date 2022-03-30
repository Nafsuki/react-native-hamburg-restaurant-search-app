import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { elevation } from '../common/styles'

export default function CategoryItem({ name, imageUrl, index, categories, active, handlePress }) {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
        styles.container,
        styles.elevation,
        index === 0 ? {marginLeft: 25} : {marginLeft: 15},
        index === (categories.length - 1) && {marginRight: 25},
        active ? {backgroundColor: 'rgb(241, 186, 87)'} : {backgroundColor: 'white'},
        ]}>
        <View style={styles.imageContainer}>
          <Image
            source={imageUrl}
            style={styles.image}
          />
        </View>
        <Text style={styles.header}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 95,
    borderRadius: 15,
    marginVertical: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  elevation,
  image: {
    width: 38,
    height: 38,
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 3,
  },
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
  }
})
