import React, { useState, useEffect } from "react";
import { Text, View} from "react-native";
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import styles from "./styles";

const API_KEY = "";
const URL = `https://maps.google.com/maps/api/geocode/json?sensor=false&callback=myMap`;
//"https://maps.googleapis.com/maps/api/js?key="

export default function WhereAmI() {
  const [address, setAddress] = useState("loading...");
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();

  useEffect(() => {
    function setPosition({ coords: { latitude, longitude } }) {
      setLongitude(longitude);
      setLatitude(latitude);
      fetch(`${URL}`)
        .then(
          (resp) => {
            return resp.json()
          },
          (e) => console.error(e)
        )
        .then(
          ({ results }) => {
            results[0]={formatted_address:"here"}
            setAddress(results[0].formatted_address)
          },
          (e) => console.error(e)
        );
    }
    Location.installWebGeolocationPolyfill() 
    navigator.geolocation.getCurrentPosition(setPosition);

    let watcher = navigator.geolocation.watchPosition(
      setPosition,
      (err) => console.error(err),
      {maximumAge:60000, timeout:5000, enableHighAccuracy:true}
    );

    return () => {
      navigator.geolocation.clearWatch(watcher);
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Address: {address}</Text>
      <Text style={styles.label}>Latitude: {latitude}</Text>
      <Text style={styles.label}>Longitude: {longitude}</Text>
    </View>
  );
}
