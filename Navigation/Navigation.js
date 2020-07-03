import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import LoginScreen from '../Components/LoginScreen'
import Home from '../Components/Home'
import ItemBook from '../Components/ItemBook'

const SearchStackNavigator = createStackNavigator({
    
    Login: {
        screen: LoginScreen,
    },

    Home: {
        screen: Home,
    },
},
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
})


export default createAppContainer(SearchStackNavigator)