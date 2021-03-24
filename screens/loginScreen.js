import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, ToastAndroid, KeyboardAvoidingView, Alert, KeyboardAvoidingViewComponent } from "react-native";

export default class loginScreen extends React.Component {
    constructor(){
        super();
        this.state={
            emailId:'',
            password:''
        }
    }


    
    render(){
        return(
          <KeyboardAvoidingView style = {{alignItems:'center',marginTop:20}}>
          <View>
            <Image
              source={require("../assets/booklogo.jpg")}
              style={{width:200, height: 200}}/>
            <Text style={{textAlign: 'center', fontSize: 30}}>Wily</Text>
          </View>
          <View>
          <TextInput
            style={styles.loginBox}
            placeholder="abc@example.com"
            keyboardType ='email-address'
            
          />
  
          <TextInput
            style={styles.loginBox}
            secureTextEntry = {true}
            placeholder="enter Password"
            
          />
          </View>
          <View>
            <TouchableOpacity style={{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7}}
        >
              <Text style={{textAlign:'center'}}>Login</Text>
            </TouchableOpacity>
  
          </View>
        </KeyboardAvoidingView>
  
        )
    }
  }
  
  
  const styles = StyleSheet.create({
    loginBox:
    {
      width: 300,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    margin:10,
    paddingLeft:10
    }
  })