import React from 'react';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "../screens/Home";

const AppNavigator = createDrawerNavigator(
  {
    Home: Home
  },
  {
    initialRouteName: 'Home'
  }
);


export default createAppContainer(AppNavigator);