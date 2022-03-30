import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import Search from '../components/Search';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Restaurants from '../components/Restaurants';

export default function HomeScreen() {
  const [term, setTerm] = useState('Burger')
  const commonCategories = [
    {
      name: 'Cafe',
      imageUrl: require('../assets/images/cafe.png'),
    },
    {
      name: 'Sweets',
      imageUrl: require('../assets/images/cake.png'),
    },
    {
      name: 'Sushi',
      imageUrl: require('../assets/images/sushi.png'),
    },
    {
      name: 'Chinese',
      imageUrl: require('../assets/images/chinese.png'),
    },
    {
      name: 'Bubble Tea',
      imageUrl: require('../assets/images/BubbleTea.png'),
    },
    {
      name: 'Bar',
      imageUrl: require('../assets/images/bar.png'),
    },
    {
      name: 'Steak',
      imageUrl: require('../assets/images/steak.png'),
    },
    {
      name: 'Burger',
      imageUrl: require('../assets/images/burger.png'),
    },
    {
      name: 'Pizza',
      imageUrl: require('../assets/images/pizza.png'),
    },
  ]

  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm} />
      <Categories categories={commonCategories} setTerm={setTerm} term={term} />
      <Restaurants term={term}/>
      <StatusBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(253, 253, 253)',
    flex: 1,
  }
})
