//use effect module from react is imported here 
import { useEffect } from 'react'
//this Module is imported for the routing in the  Application
import {BrowserRouter as Router, Route} from 'react-router-dom'
//this Module is imported for the rounding of pages in the Application
import PageRender from './customRouter/PageRender'
//Private Router module is imported here
import PrivateRouter from './customRouter/PrivateRouter'
//Home Module is imported here, This page controls the home page or Application page or main page 
import Home from './pages/home'
//Login Module is imported here, Complete login module renders in application and control the authentication rules in the application.
import Login from './pages/login'
//register Module is imported here, Complete registeration module renders in application and control the authentication rules in the application.
import Register from './pages/register'

import Alert from './components/alert/Alert'
//Header module controls the properties and working of the Header like Header picture and logo etc
import Header from './components/header/Header'
//Status module is impoted here. this component controls the status....
import StatusModal from './components/StatusModal'

//                      REDUX  
//                 ===============
import { useSelector, useDispatch } from 'react-redux'
// this module refreshToken is imported here and I try to cover Autherization in redux
import { refreshToken } from './redux/actions/authAction'
//getPosts module is imported here and controls actions of the post.... 
import { getPosts } from './redux/actions/postAction'
//  ++++   { This module is special added by Sir Hamayion Safdar Gill in my TASk }  it try to cover it.
import { getSuggestions } from './redux/actions/suggestionsAction'
//This input/output module, single threaded non blocking IO model works in NodeJS,I have added @types/socket.io-client module using npm  ===>>>  npm install --save @types/socket.io-client
import io from 'socket.io-client'
//This { GLOBALTYPES } module is used for the globalization in the application...
import { GLOBALTYPES } from './redux/actions/globalTypes'
// connection of the nodes in application, communicate through this module...
import SocketClient from './SocketClient'
//This  module is used to push notifications through server side
import { getNotifies } from './redux/actions/notifyAction'
// CallModal module is imported here in this application. Javascript function that controls models
import CallModal from './components/message/CallModal'
// PEER module is imported here. It helps components(us) to send and receive the audio and video streams of the other clients.
import Peer from 'peerjs'

//Main function of the app is started here/
function App() {
  const { auth, status, modal, call } = useSelector(state => state)
  const dispatch = useDispatch()
//React functionality use Effect is used here 
  useEffect(() => {
    dispatch(refreshToken())

    const socket = io()
    dispatch({type: GLOBALTYPES.SOCKET, payload: socket})
    return () => socket.close()
  },[dispatch])

  useEffect(() => {
    if(auth.token) {
      dispatch(getPosts(auth.token))
      dispatch(getSuggestions(auth.token))
      dispatch(getNotifies(auth.token))
    }
  }, [dispatch, auth.token])

  
  useEffect(() => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
    else if (Notification.permission === "granted") {}
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {}
      });
    }
  },[])

 
  useEffect(() => {
    const newPeer = new Peer(undefined, {
      path: '/', secure: true
    })
    
    dispatch({ type: GLOBALTYPES.PEER, payload: newPeer })
  },[dispatch])

//retun function returns from this point
  return (  
    <Router>          
      <Alert />     

      <input type="checkbox" id="theme" />
      <div className={`App ${(status || modal) && 'mode'}`}>
        <div className="main">
          {auth.token && <Header />} 
          {status && <StatusModal />}
          {auth.token && <SocketClient />}
          {call && <CallModal />}
          
          <Route exact path="/" component={auth.token ? Home : Login} />
          <Route exact path="/register" component={Register} />

          <PrivateRouter exact path="/:page" component={PageRender} />
          <PrivateRouter exact path="/:page/:id" component={PageRender} />
          
        </div>
      </div>
    </Router>
  );
}

export default App;
