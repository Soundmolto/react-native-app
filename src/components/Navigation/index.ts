import { createStackNavigator } from 'react-navigation';
import Home from '../../routes/Home';

export const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions:{
      headerMode: 'none',
      header:null
    },
  }
});
