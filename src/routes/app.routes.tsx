import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { ShoppingList } from "@screens/ShoppingList";
import { Finance } from "@screens/Finance";
import { MedicationReminder } from "@screens/MedicationReminder";


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home} />
      <Screen name="shoppingList" component={ShoppingList} />
      <Screen name="medicationReminder" component={MedicationReminder} />
      <Screen name="finance" component={Finance} />
    </Navigator>
  );
}
