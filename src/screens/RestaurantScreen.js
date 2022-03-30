import { View, Text, ActivityIndicator, FlatList, Image, Dimensions, SafeAreaView, StyleSheet } from 'react-native'
import { useEffect } from 'react'
import useRestaurant from '../hooks/useRestaurant'

  const dimensions = Dimensions.get('window')
  const imageWidth = dimensions.width
  const imageHeight = Math.round((dimensions.width * 9)/16)

export default function RestaurantScreen({navigation}) {
  const [{data, loading, error}, searchRestaurant] = useRestaurant()
  const id = navigation.getParam('id')
  useEffect(() => {
    searchRestaurant(id)
  }, [])

  if(loading) return <ActivityIndicator size='large' marginVertical={30} />
  if(error) return <Text>{error}</Text>

  return (
    <SafeAreaView style={styles.container}>
      {data && (
      <FlatList
        ListHeaderComponent={
          <>
            <Text style={styles.title}>{data.name}</Text>
            {data.price && <Text>Price: {data.price}</Text>}
            <Text>TEL: {data.display_phone}</Text>
            <Text>Address: {data.location.address1}, {data.location.zip_code}</Text>
            <Text>Genre: {data.categories[0].title}</Text>
            {/* <Text>{data.url}</Text> */}
          </>
        }
        data={data.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => (
        <View style={styles.imageContainer}>
          <Image
            source={{uri: item}}
            style={styles.image}
            // style={{height: imageHeight, width: imageWidth }}
          />
        </View>
        )}
      />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  imageContainer: {
    flex: 1,
    marginVertical: 10,
    width: '100%',
    // backgroundColor: 'pink',
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    height: imageHeight,
    width: imageWidth,
  }
})
