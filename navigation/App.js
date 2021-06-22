import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./components/Home";
import Settings from "./components/Settings";

export default createAppContainer(
  createStackNavigator({ Home, Settings }, { initialRouteName: "Home" })
);