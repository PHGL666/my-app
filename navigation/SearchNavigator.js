import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "../screens/Search";
import CompanyScreen from "../screens/Company";
import EditCompany from "../screens/EditCompany";

const SearchNavigator = {
  Search: SearchScreen,
  Company: CompanyScreen,
  EditCompany: EditCompany
};

export default createStackNavigator(SearchNavigator);