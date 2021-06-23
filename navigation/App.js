import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import Home from "./components/Home";
import Settings from "./components/Settings";
import Details from "./components/Details";

export default createAppContainer(
  createStackNavigator({ Home, Settings, Details }, { initialRouteName: "Home" })
);