import { createBottomTabNavigator } from "react-navigation-tabs";
import Accelerometer from "../screens/sensors/Accelerometer";
import Gyroscope from "../screens/sensors/Gyroscope";
import Location from "../screens/sensors/Location";

const SensorNavigator = {
  Accelerometer: Accelerometer,
  Gyroscope: Gyroscope,
  Location: Location
};

export default createBottomTabNavigator(SensorNavigator);