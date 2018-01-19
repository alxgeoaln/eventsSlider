import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const DATA = [
    {
        title: 'First Item',
        details: 'This is the first item detail'
    },
    {
        title: 'Second Item',
        details: 'This is the second item detail'
    }
]

class AgendaScreen extends Component {
    state = {
        anchor: false,
        lineHeight: 0
    }

    renderItems = () => {
        console.log(this.state.circlePadding)
        return DATA.map((item, index) => {
            const { circle, line } = styles;
            return (
                <View key={index} style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column', }}>

                        <View style={[circle]} />
                        <View style={[line, { alignSelf: 'center', height: this.state.lineHeight }]} />
                    </View>
                    <View >
                        <Text
                            style={{
                                // flex: 1,
                                color: '#2a2f43',
                                fontWeight: 'bold',
                                alignSelf: 'flex-start',
                                fontSize: 25,
                                paddingLeft: 2,
                                marginTop: -10,
                                paddingVertical: 10
                                
                            }}
                            onLayout={(event) => { this.setState({ lineHeight: event.nativeEvent.layout.height }); console.log(event.nativeEvent.layout.height) }}
                            >{item.title}</Text>
                    </View>
                </View>

            )
        })
    }

    render() {
        console.log('REEENDDDEERR')
        return (
            <View style={{ margin: 10 }}>
                {this.renderItems()}
            </View>
            // }
        )
    }
}

const styles = {
    circle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        borderWidth: 2,

    },
    line: {
        width: 3,
        height: 200,
        backgroundColor: '#000',
        // right: -3.5,
        // position: 'absolute'


    }
}


export default AgendaScreen;