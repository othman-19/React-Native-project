import React, {useEffect} from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import styles from "./styles";
import * as Location from 'expo-location';

export default function App() {
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.mapView} showsUserLocation followUserLocation />
    </View>
  )

}
    
