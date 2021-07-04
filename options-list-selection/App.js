import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Select from "./Select";

export default function SelectingOptions() {
  const [sizes, setSizes] = useState([
    { label: "All sizes", value: 'All sizes' },
    { label: "S", value: "S" },
    { label: "M", value: "M" },
    { label: "L", value: "L" },
    { label: "XL", value: "XL" }
  ]);
  const [garments, setGarments] = useState([
    { label: "", value: null, sizes: ["S", "M", "L", "XL"] },
    { label: "Socks", value: 1, sizes: ["S", "L"] },
    { label: "Shirt", value: 2, sizes: ["M", "XL"] },
    { label: "Pants", value: 3, sizes: ["S", "L"] },
    { label: "Hat", value: 4, sizes: ["M", "XL"] }
  ]);
  const [availableGarments, setAvailableGarments] = useState(garments);
  const [selectedSize, setSelectedSize] = useState('All sizes');
  const [selectedGarment, setSelectedGarment] = useState(null);
  const [selection, setSelection] = useState("");

  return (
    <View style={styles.container}>
      <Select
        label="Size"
        items={sizes}
        selectedValue={selectedSize}
        onValueChange={size => {
          setSelectedSize(size);
          setSelectedGarment(null);
          setAvailableGarments(garments.filter(i => size === 'All sizes' || i.sizes.includes(size)));
        }}
      />

      <Select
        label="Garment"
        items={availableGarments}
        selectedValue={selectedGarment}
        onValueChange={garment => {
          setSelectedGarment(garment);
          setSelection(
            `${selectedSize} ${garments.find(i => i.value === garment).label}`
          );
        }}
      />
      <Text style={styles.selection}>{selection}</Text>
    </View>
  )
}


