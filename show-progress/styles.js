import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: 'wrap',
    backgroundColor: "ghostwhite",
    alignItems: "center",
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: StatusBar.currentHeight }
    })
  },
  box: {
    margin: 10,
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: 'center',
    alignSelf: "stretch",
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "darkslategray"
  },
  boxText: {
    color: "darkslategray",
    fontWeight: "bold"
  }
});