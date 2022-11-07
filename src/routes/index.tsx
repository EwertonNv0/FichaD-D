import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';

export function Routs() {
    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    )
}