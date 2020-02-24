import { Navigation } from "react-native-navigation";
import { registerScreens, registerScreenVisibilityListener } from "./screens";

registerScreens();
registerScreenVisibilityListener();

export default class App {
  constructor() {
    this.initializeNavigation();
  }

  initializeNavigation() {
    Navigation.events().registerAppLaunchedListener(() => {
      this.startApp();
    });
  }

  startApp() {
    Navigation.setRoot({
      root: {
        component: {
          name: "screen.Landing"
        }
      }
    });
  }
}
