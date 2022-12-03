
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { Index } from '../Screens/Index';
import UserLevelScreen from '../Screens/UserLevelScreen';
import { UserRankScreen } from '../Screens/UserRankScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            title: 'Valorant Tracker',
            cardStyle: { backgroundColor: 'red' },
            presentation: 'transparentModal',
            headerStyle: { backgroundColor: '#FD4556' },
            headerBackTitle: 'Volver',
            headerBackTitleStyle:{color: 'black'},
            headerTintColor: 'black'
        }}>
            <Stack.Screen name="Index" component={Index} />
            <Stack.Screen name="UserLevelScreen" component={UserLevelScreen} />
            <Stack.Screen name="UserRankScreen" component={UserRankScreen} />
        </Stack.Navigator>
    );
}
const style = StyleSheet.create({
    fondoArriba: {
        backgroundColor: 'red'
    }
})