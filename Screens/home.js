import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, FlatList, Image, TouchableWithoutFeedback} from 'react-native';
import { Text, Searchbar, Avatar, Button, Card } from 'react-native-paper';
import data from '../data';

const profile = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";

const HomeScreen = ({navigation}) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchData, setSearchData] = useState(data);

    const onChangeSearch = (query) => {
        const array = data.filter(item => item.dish.includes(query));
        setSearchData(array);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <Text variant="headlineMedium" style={{ fontWeight: 'bold' }}>Menu</Text>
                <Avatar.Image size={50} source={{ uri: profile }} />
            </View>

            <Searchbar
                placeholder="Search"
                onChange={val => setSearchQuery(val)}
                onChangeText={onChangeSearch}
                value={searchQuery}
            />

            <FlatList
                style={{marginTop: 20}}
                data={searchData}
                keyExtractor={item => item.dish}
                numColumns={2}
                renderItem={({ item }) => {
                    return (
                        <TouchableWithoutFeedback onPress={() => navigation.navigate("Info", {data: item})}>
                            <View style={{paddingBottom: 10, flex: 1, marginHorizontal: 5, backgroundColor: "#e6e6e6", marginBottom: 10, borderRadius: 20}}>
                                <Image resizeMode='cover' style={{width: "100%", height: 150, borderRadius: 20}} source={{uri: item.image}}/>
                                <Text variant='titleMedium' style={{marginLeft: 5, marginBottom: 5}} >{item.dish}</Text>
                                <Text numberOfLines={5} ellipsizeMode='tail' style={{marginLeft: 5}}>{item.description}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                }}
            />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 20,
        marginBottom: 15,
        backgroundColor: 'white',
    },
});


export default HomeScreen;
