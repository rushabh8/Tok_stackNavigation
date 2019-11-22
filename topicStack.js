import { StackNavigator } from 'react-navigation';
import Topics from '../screens/selectTopics'

const topicsStack = StackNavigator({
    Topics: {
        screen: Topics
    }
})
export default topicsStack;