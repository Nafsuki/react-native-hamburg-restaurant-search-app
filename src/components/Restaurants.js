import { StyleSheet, Text, View, ActivityIndicator, FlatList, SafeAreaView} from 'react-native'
import useRestaurants from '../hooks/useRestaurants'
import { useEffect } from 'react'
import RestaurantItem from './RestaurantItem'

export default function Restaurants({term}) {
  const [{data, loading, error}, searchRestaurants] = useRestaurants()

  useEffect(() => {
    searchRestaurants(term)
  },[term])

  if(loading) return <ActivityIndicator size='large' marginVertical={30} />
  if(error) return (
    <View style={styles.container}>
      <Text style={styles.header}>{error}</Text>
    </View>
  )

  return(
    <SafeAreaView style={styles.container}>

      <FlatList
      ListHeaderComponent={
        <Text style={styles.header}>Top Restaurants</Text>
      }
        data={data}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({item}) => (
          <RestaurantItem restaurant={item} />
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 25,
    flex: 1,
    marginVertical: 20,
    // backgroundColor: 'pink'
  },
  header: {
    marginHorizontal: 25,
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 1,
  },
})
