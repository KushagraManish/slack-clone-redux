import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/Login';
import Spinner  from 'react-spinkit';

function App() {

  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
            <img src = "https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-650-80.jpg.webp" />
          <Spinner name="ball-spin-fade-loader"
            color="purple"
            fadeIn = "none"
          />


        </AppLoadingContents>
      </AppLoading>
    )
  }
  return (
    <Router>
      
      {!user ? (<Login/>): (
        <>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Header />
      <AppBody>
        <Sidebar />
        <Switch>
            
          <Route path="/" exact>
            <Chat />
          </Route>
        </Switch>
      </AppBody>
    </>
  )
}

    </Router>
  );
}

export default App;



const AppLoading = styled.div`


  
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom:100px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center

 

  


`;
const AppBody = styled.div`

  display:flex;
  height: 100vh;
`;