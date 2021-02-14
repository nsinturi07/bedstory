import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity} from 'react-native'

export default class WriteScreen extends React.Component {
    render(){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput style={styles.inputBox} placeholder="Story Title"/>
            <TextInput style={styles.inputBox} placeholder="Author"/>
            <TextInput style={styles.inputBox} placeholder="Write Story"/>
                <Text>Write a story</Text>
            <TouchableOpacity
            style = {styles.submitButton}
            
            <Text>Submit</Text>
          </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center'
  },
  
  inputBox:{
    width: 300,
    height: 30,
    borderWidth: 1.5,

    fontSize: 20
  },
  inputView:{
    flexDirection: 'row',
    margin: 10
  },
  
  textArea: {
    height: 150,
    justifyContent: "flex-start",
    width : 300,
    borderWidth: 1.5,
  },
  submitButton:{
    backgroundColor: '#FBC02D',
    width: 100,
    height:30,
    alignSelf: 'center',
    marginTop: 100

  },
  submitButtonText:{

    textAlign: 'center',
    fontSize: 15,
    fontWeight:"bold",
    color: 'white'
  }
});
