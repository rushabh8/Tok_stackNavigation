import { StackNavigator } from 'react-navigation';
import Notifications from '../screens/notifications'

const notificationStack = StackNavigator({
    Notifications: {
        screen: Notifications
    }
})
export default notificationStack;
