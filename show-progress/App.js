import React, { useState, useEffect } from "react";
import { View } from "react-native";
import styles from "./styles";
import ProgressBar from "./components/ProgressBar";

export default function MeasuringProgress() {
  const [progress, setProgress] = useState(0);

  function updateProgress() {
    setProgress(currentProgress => {
      if (currentProgress < 0.99) {
        setTimeout(updateProgress, 300);
      }
      return currentProgress + 0.01;
    });
  }

  useEffect(() => {
    updateProgress();
  }, []);

  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} />
    </View>
  );
}
