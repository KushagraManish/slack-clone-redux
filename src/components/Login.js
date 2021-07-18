import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import { auth, provider } from '../firebase';

function Login() {

    const signIn = e => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src = "https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-650-80.jpg.webp" />
                <h1>
                    Sign In to Kushagra's Slack
                </h1>
                <p>kushagra.slack.com</p>
                <Button onClick = {signIn}>Sign in with Google</Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`;

const LoginInnerContainer = styled.div`
    
    padding:100px;
    text-align:center;
    background-color: white;
    border-radius:10px;
    box-shadow: 10px 18px 5px 0px rgba(0,0,0,0.38);
-webkit-box-shadow: 10px 18px 5px 0px rgba(0,0,0,0.38);
-moz-box-shadow: 10px 18px 5px 0px rgba(0,0,0,0.38);

    
    >img{
        object-fit:contain;
        height:100px;
        margin-bottom : 40px ;
    }

    >button{
        margin-top:50px;
        text-transform: inherit!important;
        background-color:blue!important;
        color:white;
        &:hover{
            background-color: darkblue!important;
        }
    }




`;
