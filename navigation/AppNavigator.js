
import React from 'react';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "../screens/Home";
import SearchNavigator from "./SearchNavigator";
import NewCompany from "../screens/NewCompany";

const AppNavigator = createDrawerNavigator(
  {
    Home: Home,
    Search: SearchNavigator,
    NewCompany: NewCompany
  },
  {
    initialRouteName: 'Home'
  }
);


export default createAppContainer(AppNavigator);