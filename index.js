import { Navigation } from "react-native-navigation";
import LandingScreen from "./app/Screens";

Navigation.registerComponent(`LandingScreen`, () => LandingScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "LandingScreen"
      }
    }
  });
});
