import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const initialListings = [
  {
    id: 1,
    title: "Used treadmill like new",
    price: 240,
    image: require("../assets/treadmill.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1050,
    image: require("../assets/couch.jpg"),
  },
  {
    id: 3,
    title: "Red jacket for sale",
    price: 90,
    image: require("../assets/jacket.jpg"),
  },
];
function ListingsScreen() {
  const [listings, setListings] = useState(initialListings);
  const [refreshing, setRefreshing] = useState(false);

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setListings([
            {
              id: 2,
              title: "Couch in great condition",
              price: 1050,
              image: require("../assets/couch.jpg"),
            },
            {
              id: 3,
              title: "Red jacket for sale",
              price: 90,
              image: require("../assets/jacket.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightGray,
    flex: 1,
  },
});

export default ListingsScreen;
