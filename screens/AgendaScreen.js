import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import DaySlider from '../components/DaySlider';

const DATA = [
    
]

class AgendaScreen extends Component {
    state = {
       
    }

    render() {
        
        return (
            <View style={{ margin: 10 }}>
                <DaySlider/>
            </View>
            
        )
    }
}



export default AgendaScreen;