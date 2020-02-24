import { Navigation } from "react-native-navigation";
import LandingScreen from "./LandingScreen";

export const registerScreens = () => {
  Navigation.registerComponent(`screen.Landing`, () => LandingScreen);
};

export const registerScreenVisibilityListener = () => {
  Navigation.events().registerComponentDidAppearListener(
    ({ componentName }) => {
      console.log(`<-------- Screen ${componentName} has been loaded ------>`);
    }
  );
};
