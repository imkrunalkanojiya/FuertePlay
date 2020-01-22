import React, { Component } from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,Dimensions,Image } from 'react-native';

//External Dependencis
import Icon from 'react-native-vector-icons/Entypo'
import {DrawerNavigator,DrawerItems} from 'react-navigation'

// Import JS Class
import TabScreenMain from './TabScreenMain'

 export default class App extends React.Component{
  render(){
    return(
      <AppDrawer/>
    )
  }
}

const CustomeDrawerComponent = (props)=>(
  <SafeAreaView style={{flex:1}}>
    <View style={{height:160, backgroundColor:'white',alignItems:"center",justifyContent:"center",marginVertical:15}}>
    <Image source={require('./assets/icon.png')} style={{height:120,width:120,borderRadius:60}} />
    </View>
      <ScrollView>
        <DrawerItems {...props}/>
      </ScrollView>
  </SafeAreaView>
)

const AppDrawer = DrawerNavigator({
  Home:{
    screen:TabScreenMain,
    navigationOptions:{
      drawerIcon : ({tintColor}) => (
        <Icon name="home" size={24}/>
    )
    }

  }
},{
  contentComponent:CustomeDrawerComponent
}
)

