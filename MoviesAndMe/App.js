import React,  { Component }   from 'react';
import Search from './Components/Search'
import API_K from './config'

import {StyleSheet, Text, View } from 'react-native';


console.log(API_K)
const API_KEY =`${process.env.REACT_APP_API_KEY_YT}`
console.log("API", API_KEY)

export default class App extends React.Component {
  render() 
  {

    return (
      <Search/>
        )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});