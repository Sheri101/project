import { useState } from "react";
import axios from 'axios';
import { Alert } from 'react-native';




export default function PostHook() {
const [signIn, setsignIn] = useState(false)
const [signUp, setSignUp] = useState(false)

//console.log('posthook')

const signin = async(email,password)=>{
const signInParams = {
    email: email,
    password: password
};

axios.post('https://dev.iqrakitab.net/api/login', signInParams, {
    headers: {
        Accept: 'application/json',
    },
})
    .then((response) => {
        console.log('Sign in successful:', response.data);
        setsignIn(true)
        Alert.alert('Sign In Successful');
        // Redirect to next screen or perform any action after successful signin
    })
    .catch((error) => {
        console.error('Sign in failed:', error.response.data.message);
        setsignIn(false)
        Alert.alert('Sign In Failed', error.response.data.message);
    });
}


const signup = async(firstName,lastName,email,password)=>{
    const signUpParams = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: password,
        signUpType: 'EMAIL'
    };

    axios.post('https://dev.iqrakitab.net/api/signup', signUpParams, {
        headers: {
            Accept: 'application/json',
        },
    })
        .then((response) => {
            console.log('Sign up successful:', response.data);
            setSignUp(true)
            Alert.alert('Sign Up Successful');
            // Redirect to next screen or perform any action after successful signup
        })
        .catch((error) => {
            console.error('Sign up failed:', error.response.data.message);
            setSignUp(false)
            Alert.alert('Sign Up Failed', error.response.data.message);
        });
        
        
    

}
console.log('post hook home return')
    return { signin,signup }
}