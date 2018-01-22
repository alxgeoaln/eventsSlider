import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import DaySlider from '../components/DaySlider';

const DATA = [
    {
        date: new Date('November 4, 2017'),
        text: 'some text for nov 4'
    },
    {
        date: new Date('November 5, 2017'),
        text: 'some text for nov 5'
    },
    {
        date: new Date('November 6, 2017'),
        text: 'some text for nov 6'
    },
    {
        date: new Date('November 7, 2017'),
        text: 'some text for nov 7'
    },
    {
        date: new Date('November 8, 2017'),
        text: 'some text for nov 8'
    },
    // {
    //     date: new Date('November 9, 2017'),
    //     text: 'some text for nov 9'
    // },
]

class AgendaScreen extends Component {
    state = {

    }

    render() {

        return (
            <View style={{marginHorizontal: 10}}>
                <DaySlider
                    data={DATA}
                />
            </View>

        )
    }
}

// #EC6B10

export default AgendaScreen;