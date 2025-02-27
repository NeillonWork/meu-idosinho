import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { ShoppingList } from "@screens/ShoppingList";
import { Finance } from "@screens/Finance";
import { MedicationReminder } from "@screens/MedicationReminder";
import { NewShoppingList } from "@screens/NewShoppingList";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="shoppingList" component={ShoppingList} />
      <Screen name="medicationReminder" component={MedicationReminder} />
      <Screen name="finance" component={Finance} />
      <Screen name="newshoppingList" component={NewShoppingList} />
    </Navigator>
  );
}
