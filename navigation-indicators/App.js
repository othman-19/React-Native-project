import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";

export default createAppContainer(
  createStackNavigator(
    {
      First: {
        screen: props => (
          <First
            promise={new Promise(resolve => setTimeout(resolve, 5000))}
            {...props}
          />
        )
      },
      Second: {
        screen: props => (
          <Second
            promise={new Promise(resolve => setTimeout(resolve, 5000))}
            {...props}
          />
        )
      },
      Third: {
        screen: props => (
          <Third
            promise={new Promise(resolve => setTimeout(resolve, 5000))}
            {...props}
          />
        )
      },
    },
    { initialRouteName: "First" }
  )
);


