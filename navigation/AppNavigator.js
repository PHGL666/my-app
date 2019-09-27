import React from 'react';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "../screens/Home";
import SearchNavigator from "./SearchNavigator";
import NewCompany from "../screens/NewCompany";
import SensorNavigator from "./SensorNavigator";

const AppNavigator = createDrawerNavigator(
  {
    Home: Home,
    Search: SearchNavigator,
    NewCompany: NewCompany,
    Sensors: SensorNavigator
  },
  {
    initialRouteName: 'Sensors'
  }
);


export default createAppContainer(AppNavigator);