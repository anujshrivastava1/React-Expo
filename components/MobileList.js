import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import mobiles from '../data/mobiles.json';

const MobileList = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={mobiles}
        renderItem={({ item }) => {
          return (
            <View style={styles.mobileContainer}>
              <Text style={styles.brand}>{item.brand}</Text>
              {item.model.map((mobile, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    navigation.navigate('MobileDetail', { mobile });
                  }}
                >
                  <View style={styles.mobileItem}>
                    <Image style={styles.mobileImage} source={{ uri: mobile.image }} />
                    <Text style={styles.mobileName}>{mobile.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  laptopContainer: {
    padding:30
  },
  brand: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  laptopItem: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  laptopImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  laptopName: {
    fontSize: 16,
  },
});

export default MobileList;