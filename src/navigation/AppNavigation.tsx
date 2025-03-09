import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuScreen from "../screens/MenuScreen";
import GameScreen from "../screens/GameScreen";

const RootStack = createNativeStackNavigator({
  initialRouteName: "Menu",
  screens: {
    Menu: {
      screen: MenuScreen,
      options: { headerShown: false },
    },
    Game: {
      screen: GameScreen,
      options: { headerShown: false },
    },
  },
});

const AppNavigation = createStaticNavigation(RootStack);

export { AppNavigation };
