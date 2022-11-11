import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CharacterScreen } from "../screens/CharacterScreen";
import { Home } from "../screens/Home";
import { NewCharacter } from "../screens/NewCharacter";
import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home" component={ Home }/>
            <Screen name="signIn" component={ SignIn }/>
            <Screen name="charScreen" component={ CharacterScreen }/>
            <Screen name="newChar" component={ NewCharacter }/>
        </Navigator>
    )
}