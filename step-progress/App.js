import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";

const routes = [First, Second, Third, Fourth];

export default createAppContainer(
  createStackNavigator(
    routes.reduce(
      (result, route) => ({
        ...result,
        [route.name]: route
      }),
      {}
    ),
    {
      initialRouteName: "First",
      initialRouteParams: {
        progress: route =>
          (routes.map(r => r.name).indexOf(route) + 1) / routes.length
      }
    }
  )
);