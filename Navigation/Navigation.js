import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Login from '../Components/Login'
import Home from '../Components/Home'

const SearchStackNavigator = createStackNavigator({
    
    Login: {
        screen: Login,
    },

    Home: {
        screen: Home,
    }
},
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
})


export default createAppContainer(SearchStackNavigator)