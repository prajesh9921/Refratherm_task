import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { Text } from "react-native-paper";


const Info = ({ navigation ,route }) => {

    const { data } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <Image resizeMode='cover' style={{ width: "100%", height: 400, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} source={{ uri: data.image }} />
            <View style={{padding: 10}}>
                <Text variant='displaySmall'>{data.dish}</Text>
                <Text variant='titleLarge' style={{ marginTop: 5 }}>Rating: {data.foodRating}</Text>
                <Text style={{ marginVertical: 10 }}>{data.description}</Text>
                <Text variant='headlineSmall' style={{ fontWeight: 'bold', marginBottom: 10 }}>{data.restaurant.name}</Text>
                <Text variant='titleMedium'>Rating: {data.restaurant.rating}</Text>
                <Text variant='titleMedium'>Address: {data.restaurant.address}</Text>
                <Text variant='titleMedium'>Opening Time: {data.restaurant.opening}</Text>
                <Text variant='titleMedium'>Closing Time: {data.restaurant.closing}</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => navigation.pop()}>
                <Image 
                    source={require('../assets/arrow_left.png')} 
                    resizeMode='contain' 
                    style={{position: 'absolute', width: 40, height: 40, top: 20, left: 10}}
                />
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e6e6',
    },
});

export default Info;
