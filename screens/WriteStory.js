import React from 'react'
import { View,Text } from 'react-native'

export default class WriteScreen extends React.Component {
    render(){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Write a story</Text>
            </View>
        )
    }
}
