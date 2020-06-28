import React, {Component} from 'react'
import {AsyncStorage, FlatList} from 'react-native'
import { createAppContainer} from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer';
import {Spinner} from 'native-base'
import Home2 from '../containers/home2'
import API from '../../../utils/api'
import HomeLayout from '../components/homeLayout'

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      username : '',
      perm : 0,
      data : '',
      loading : true
    }
  }

  async componentDidMount(){
    let userLogin = await AsyncStorage.getItem('userLogin')
    userLogin = JSON.parse(userLogin)
    this.setState({ username : userLogin.user, perm : userLogin.perm })

    let movies = await API.getData()
    this.setState({ data : movies.data.movies, loading : false })

  }

  render(){

    return(
      <FlatList
        data={this.state.data}
        keyExtractor={(x, i) => i.toString()}
        ListFooterComponent={() => this.state.loading ? <Spinner /> : null }
        renderItem={({ item }) => 
            <HomeLayout datos={item} />
        }
      />
    )

  }

}

const drawer = createDrawerNavigator({
  Home,
  Home2
},{
  drawerPosition : 'right',
  drawerBackgroundColor : '#00d2b3',
  drawerWidth : 150,
  contentOptions : {
    activeTintColor : 'white',
    inactiveTintColor : 'gray',
  }
})

export default createAppContainer(drawer)