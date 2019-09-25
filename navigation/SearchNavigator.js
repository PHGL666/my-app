import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "../screens/Search";
import CompanyScreen from "../screens/Company";

const SearchNavigator = {
  Search: SearchScreen,
  Company: CompanyScreen
};

export default createStackNavigator(SearchNavigator);