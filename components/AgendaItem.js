import React, { Component } from 'react';
import { View, Text } from 'react-native';


class AgendaItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lineHeight: 0
        }
    }

    getViewHeight = async (height) => {
    }

    render() {
        const { applyBorder } = styles;
        return (
            <View>
                <View style={styles.container}>
                    <View style={[{ marginTop: 10 }]}>
                        <View style={styles.circle} />
                        <View style={[styles.line, {}]} />
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.agendaItemTitle}>Simple text for showing things</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        flexDirection: 'row',
    },
    titleContainer: {
        height: 50,
        paddingLeft: 10
    },
    agendaItemTitle: {
        fontSize: 20
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        borderWidth: 2
    },
    line: {
        width: 1,
        borderWidth: 2,
        alignSelf: 'center',
        flex: 1,
        marginTop: -2.1

    },
    applyBorder: (color) => {
        return {
            borderWidth: 1,
            borderColor: color
        }
    }
}

export default AgendaItem;