import React, { useState } from 'react'
import { Header, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Alert } from 'react-native'

export default OptionList = () => {

  const data = [
    {
      id: 1,
      name: 'Black Coffee',
      image: 'https://images.pexels.com/photos/4264049/pexels-photo-4264049.jpeg?width=500',
      price: 124.711,
    },
    {
      id: 2,
      name: 'Cappuccino Coffee',
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?width=500',
      price: 234.722,
    },
    {
      id: 3,
      name: 'Americano Coffee',
      image: 'https://images.pexels.com/photos/8340102/pexels-photo-8340102.jpeg?width=500',
      price: 324.723,
    },
    {
      id: 4,
      name: 'Espresso Coffee',
      image: 'https://images.pexels.com/photos/2299028/pexels-photo-2299028.jpeg?',
      price: 154.573,
    },
    {
      id: 5,
      name: 'Doppio Coffee',
      image: 'https://images.pexels.com/photos/16392282/pexels-photo-16392282.jpeg?',
      price: 124.678,
    },
    {
        id: 6,
        name: 'Latte Coffee',
        image: 'https://images.pexels.com/photos/3879495/pexels-photo-3879495.jpeg?',
        price: 124.678,
      },
  ]

  const [options, setOptions] = useState(data)

  const clickEventListener = item => {
    Alert.alert('Message', 'Item clicked. ' + item.name)
  }

  return (
    <View style={styles.container}>
          <View style= {{alignItems : 'center'}}>
            <Text>AAAAA</Text>
            <Text>cofaa</Text>
          </View>

      <FlatList
        style={styles.contentList}
        columnWrapperStyle={styles.listContainer}
        data={options}
        keyExtractor={item => {
          return item.id
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.card} onPress={() => clickEventListener(item)}>
              <Image style={styles.image} source={{ uri: item.image }} />
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.count}>P {item.price}</Text>
                <TouchableOpacity
                  style={styles.followButton}
                  onPress={() => clickEventListener(item)}>
                  <Text style={styles.followButtonText}>Explore now</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#ebf0f7',
  },
  contentList: {
    marginBottom: 22,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#3399ff',
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 30,
  },

  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: '#3399ff',
    fontWeight: 'bold',
  },
  count: {
    fontSize: 14,
    flex: 1,
  
    color: '#6666ff',
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#dcdcdc',
  },
  followButtonText: {
    color: '#dcdcdc',
    fontSize: 12,
  },
})
