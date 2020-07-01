import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Login from '../Components/Login'
import Home from '../Components/Home'
import ItemBook from '../Components/ItemBook'

const SearchStackNavigator = createStackNavigator({
    
    Login: {
        screen: Login,
    },

    Home: {
        screen: Home,
    },

    ItemBook: {
        screen: ItemBook,
    }
},
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
})


export default createAppContainer(SearchStackNavigator)