import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles";

export default function News({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>News Screen</Text>
      <Button
        title="News"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}