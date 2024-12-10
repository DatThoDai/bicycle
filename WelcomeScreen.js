import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContent}>
        <Text  style={styles.welcomeTitle}>A premium online store for {"\n"} sporter and their stylish choice</Text>
        <View  style={styles.imageSection}>
            <Image source={require('./images/bifour.png')}  style={styles.welcomeImage}/>
        </View>
        <Text style={styles.brandName}>POWER BIKE{"\n"}Shop</Text>
        <TouchableOpacity
          style={styles.getStartButton}
          onPress={() => navigation.navigate('Products')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeContent: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    padding:10,
  },
  welcomeTitle: {
    flex:1,
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 30,
  },
  imageSection: {
    flex: 3,
    backgroundColor: "#E941411A",
    borderRadius:25,
  },
  welcomeImage: {
    margin: 20,
    resizeMode: 'contain',
  },
  getStartButton: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop:40,
  },
  brandName: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:20,
  },
  buttonText: {
    backgroundColor: "#E94141",
    width: "80%",
    textAlign: "center",
    paddingVertical: 15,
    borderRadius: 20,
    color: "white",
    fontSize: 18,
  },
});

export default WelcomeScreen