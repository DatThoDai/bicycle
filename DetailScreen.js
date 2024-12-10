import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addBikes } from './redux/BikeSlice';

const DetailScreen = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const { products } = route.params;
    const calculatePrice = products.price - (products.price * 15 / 100);

    // const addToCart = async () => {
    //     try {
    //       const response = await fetch('https://67126da56c5f5ced66237d06.mockapi.io/tasks', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //           id: products.id,
    //           name: products.name,
    //           price: products.price,
    //           image: products.image,
    //         }),
    //       });
    //       if (response.ok) {
    //           alert(`Đã thêm ${products.name} vào giỏ hàng`);
    //           navigation.navigate('Products');
    //       } else {
    //         throw new Error('Không thể thêm vào giỏ hàng');
    //       }
    //     } catch (error) {
    //       console.error('Lỗi khi thêm vào giỏ hàng:', error);
    //       alert('Không thể thêm vào giỏ hàng. Vui lòng thử lại.');
    //     }
    //   };
    const handleAddToCart = () => {
        dispatch(addBikes(products));
    };

    return (
        <View style={styles.container}>
            <View style={styles.detailImageSection}>
                <Image source={products.image} style={styles.productImage} />
            </View>
            <View style={styles.detailContent}>
                <Text style={styles.productName}>{products.name}</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.discount}>15% OFF | {calculatePrice}</Text>
                    <Text style={styles.originPrice}>{products.price}$</Text>
                </View>
                <Text style={styles.des}>Description</Text>
                <Text style={styles.textdes}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
            </View>
            <View style={styles.addContainer}>
                <Image source={require('./images/heart.png')} style={styles.hearIco} />
                <TouchableOpacity 
                    style={styles.addButton} 
                    onPress={() => {
                        handleAddToCart();
                        navigation.navigate('Products');
                    }}
                >
                    <Text style={styles.addButtonText}>Add to cart</Text>
                </TouchableOpacity>
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
    detailImageSection: {
        backgroundColor: "#E941411A",
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    productName: {
        fontSize: 25,
        fontWeight: "bold",
    },
    discount: {
        color: "#00000096",
        marginRight: 40,
        fontSize: 18,
    },
    originPrice: {
        textDecorationLine: "line-through",
        fontSize: 18,
    },
    des: {
        fontSize: 18,
        marginVertical: 15,
    },
    textdes: {
        fontSize: 18,
        color: "#00000096",
    },
    addContainer: {
        marginTop: 40,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    addButton: {
        backgroundColor: "#E94141",
        paddingHorizontal: 100,
        paddingVertical: 15,
        borderRadius: 20,
    },
    addButtonText: {
        color: 'white',
        fontSize: 20,
    },
    hearIco: {
        marginTop: 10,
        width: 35,
        height: 35,
        marginLeft: 10,
    },
    productImage: {
        width: 250,
        height: 250,
        resizeMode: "contain",
    },
});

export default DetailScreen;