import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Login from '../Components/Login'
import Home from '../Components/Home'

const SearchStackNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Connexion'
        },
    },

    Home: {
        screen: Home
    }
})


export default createAppContainer(SearchStackNavigator)