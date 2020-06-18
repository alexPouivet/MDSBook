import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Login from '../Components/Login'
import Home from '../Components/Home'
import BarCodeScanner from '../Components/BarCodeScanner'

const SearchStackNavigator = createStackNavigator({
    Login: {
        screen: Login
    },

    BarCodeScanner: {
        screen: BarCodeScanner
    },

    Home: {
        screen: Home
    }
})


export default createAppContainer(SearchStackNavigator)