import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles";

export default function Home({ navigation, screenProps: { stock } }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
      <Button
        title={`First Item (${stock.first})`}
        onPress={() => navigation.navigate(
          "Details",
          { 
            id: "first",
            title:"First Item",
            content: "First Item Content",
            stock: stock.first
          }
        )}
      />
      <Button
        title={`Second Item (${stock.second})`}
        onPress={() => navigation.navigate(
          "Details",
          {
            id: "second",
            title:"Second Item",
            content: "Second Item Content",
            stock: stock.second
          }
        )}
      />
      <Button
        title={`Third Item (${stock.third})`}
        onPress={() => navigation.navigate(
          "Details",
          {
            id: "third",
            title:"Third Item",
            content: "Third Item Content",
            stock: stock.third
          }
        )}
      />
    </View>
  );
}

Home.navigationOptions = {
  title: "Home"
};

