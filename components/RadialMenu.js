import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

class RadialMenu extends Component {
    state = {
        itemTopLeft: false,
        itemTopRight: false,
        itemBottomLeft: false,
        itemBottomRight: false
    };

    selectItem = () => {
        
    }

    render() {
        const { container, itemTopLeft, itemBottomLeft, itemBottomRight, itemTopRight } = styles;
        return (
            <View style={container}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <View style={itemTopLeft}></View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={itemTopRight}></View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <View style={itemBottomLeft}></View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={itemBottomRight}></View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    },
    itemTopLeft: {
        borderWidth: 1,
        borderColor: 'red',
        width: 100,
        height: 100,
        borderTopLeftRadius: 100,
        marginRight: 2.5,
        marginBottom: 2.5
    },
    itemTopRight: {
        borderWidth: 1,
        borderColor: 'red',
        width: 100,
        height: 100,
        borderTopRightRadius: 100,
        marginLeft: 2.5,
        marginBottom: 2.5
    },
    itemBottomLeft: {
        borderWidth: 1,
        borderColor: 'red',
        width: 100,
        height: 100,
        borderBottomLeftRadius: 100,
        marginRight: 2.5,
        marginTop: 2.5
    },
    itemBottomRight: {
        borderWidth: 1,
        borderColor: 'red',
        width: 100,
        height: 100,
        borderBottomRightRadius: 100,
        marginLeft: 2.5,
        marginTop: 2.5
    }
}

export default RadialMenu