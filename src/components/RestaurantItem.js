import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { elevation } from "../common/styles";
import { withNavigation } from 'react-navigation'

function RestaurantItem({restaurant, navigation}) {
  return(
    <TouchableOpacity
      onPress={() => navigation.navigate('Restaurant', {id: restaurant.id})}
    >
      <View style={[styles.elevation, styles.container]}>
        <Image style={styles.image} source={{uri: restaurant.image_url}}/>
        <View style={styles.infoContainer}>
          <Text style={styles.header}>{restaurant.name}</Text>
          <View style={styles.info}>
            <Text style={styles.rating}>
              {restaurant.rating} stars</Text>
            <Text style={styles.price}>{restaurant.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  elevation,
  container: {
    backgroundColor: 'white',
    height: 200,
    alignSelf: 'stretch',
    borderRadius: 10,
    marginHorizontal: 25,
    marginVertical: 10,
    // flexDirection: 'row',
    // alignItems: 'center',
    // backgroundColor: 'pink',
  },
  image: {
    width: '100%',
    height: '68%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginVertical: 5,
  },
  info: {
    flexDirection: 'row',
  },
  rating: {
    marginRight: 20,
  },
  price: {
    color: 'gold',
  },
})

export default withNavigation(RestaurantItem)
