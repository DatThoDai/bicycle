import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBike } from './redux/BikeSlice';

const ProductsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const data_api = useSelector(state => state.bikes.data);
  const [data, setData] = useState([]);
  const [dataInitial, setDataInitial] = useState([]);

  useEffect(() => {
    dispatch(fetchBike());
  }, []);

  useEffect(() => {
    setData(data_api);
    setDataInitial(data_api);
  }, [data_api]);

  const filterRoadbike = () => {
    setData(dataInitial.filter(item => item.type === 'Roadbike'));
  }

  const filterMountain = () => {
    setData(dataInitial.filter(item => item.type === 'Mountain'));
  }

  const filterAll = () => {
    setData(dataInitial);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>The world's Best Bike</Text>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButtonActive} onPress={filterAll}>
          <Text style={styles.filterTextActive}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={filterRoadbike}>
          <Text style={styles.filterText}>RoadBike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={filterMountain}>
          <Text style={styles.filterText}>Mountain</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 8, width: "100%" }}>
        <FlatList 
          data={data}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.productCard}
              onPress={() => navigation.navigate('Details', { products: item })}
            >
              <Image source={require('./images/heart.png')} style={styles.heartIco} />
              <Image source={{uri : item.image}} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>
                <Text style={{ color: '#F7BA83' }}>$</Text>{item.price}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  pageTitle: {
    fontSize: 20,
    color: "#E94141",
    marginTop: 30,
    fontWeight: "bold",
    flex: 1,
  },
  filterContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  filterText: {
    textAlign: "center",
  },
  filterButtonActive: {
    borderWidth: 1,
    borderRadius: 5,
    height: 30,
    paddingHorizontal: 40,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#E94141",
  },
  filterButton: {
    borderWidth: 1,
    borderRadius: 5,
    height: 30,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#E94141",
  },
  filterTextActive: {
    color: "#E94141",
  },
  filterText: {
    color: "#BEB6B6",
  },
  productCard: {
    backgroundColor: '#F7BA8326',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    position: "relative",
    flex: 1,
  },
  productImage: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },
  heartIco: {
    position: "absolute",
    top: 5,
    left: 10,
  },
  productName: {
    textAlign: "center",

  },
  productPrice: {
    textAlign: "center",
  },
});

export default ProductsScreen