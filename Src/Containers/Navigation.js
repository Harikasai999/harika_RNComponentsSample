import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Index from './Index.js'
import Auth from './Auth/Auth'
import Others from './Others/Others'
import Login from './Login.js'
import Message from './Messaging/Message'
import Chat from './Messaging/Chat'
import ChatList from './Messaging/ChatList'
import Articles from './Articles/Articles'
import Swiper from './Others/SwiperPage'
import Chart from './Others/ChartPage'
/***************************
 * Documentation: https://github.com/aksonov/react-native-router-flux
 ***************************/

class Navigation extends Component {
  render() {
    return (
      <Router>
        <Scene>
          <Scene key="Index" component={Index} hideNavBar={true} initial />
          <Scene key="auth" component={Auth} hideNavBar={true} />
          <Scene key="others" component={Others} hideNavBar={true} />
          <Scene key="login" component={Login} hideNavBar={true} />
          <Scene key="message" component={Message} hideNavBar={true} />
          <Scene key="chat" component={Chat} hideNavBar={true} />
          <Scene key="chatList" component={ChatList} hideNavBar={true} />
          <Scene key="articles" component={Articles} hideNavBar={true} />
          <Scene key="swiper" component={Swiper} hideNavBar={true} />
          <Scene key="chart" component={Chart} hideNavBar={true} />
        </Scene>
      </Router>
    )
  }
}

export default Navigation
