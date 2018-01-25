import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class DaySlider extends Component {
    state = {
        buttonIndex: null
    }

    changeDate = async (index) => {
        await this.setState({ buttonIndex: index });
        const { buttonIndex } = this.state;
        styles.activeDate(index, buttonIndex);
    }

    renderData() {
        return this.props.data.map((item, index) => {
            const dateItemString = item.date.toDateString();
            const formated = dateItemString.split(' ');
            const { dateContainer, activeDate, activateDateText, textStyle } = styles;
            return (
                <TouchableOpacity onPress={() => this.changeDate(index)}>
                    <View style={[styles.dateContainer(this.props.data.length), styles.activeDate(index, this.state.buttonIndex)]}>
                        <Text style={[textStyle, activateDateText(index, this.state.buttonIndex)]}>{formated[2]}</Text>
                        <Text style={[textStyle, activateDateText(index, this.state.buttonIndex)]}>{formated[1]}</Text>
                    </View>
                </TouchableOpacity>
            )
        });
    }

    render() {
        const enableScoll = () => {
            if (this.props.data.length <= 3) {
                return false;
            } else {
                return true;
            }
        }
        return (
            <ScrollView
                contentContainerStyle={styles.flexSrollview(this.props.data.length)}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={enableScoll()}
                horizontal>
                <View style={styles.container}>
                    {this.renderData()}
                </View>
            </ScrollView>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    textStyle: {
        fontSize: 25
    },
    activeDate: (itemIndex, stateIndex) => {
        if (itemIndex === stateIndex) {
            return {
                backgroundColor: '#EC6B10',
                borderColor: '#EC6B10'
            }
        }
    },
    activateDateText: (itemIndex, stateIndex) => {
        if (itemIndex === stateIndex) {
            return {
                color: '#fff'
            }
        }
    },
    dateContainer: (length) => {
        if (length <= 3) {
            return {
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#ccc',
                flex: 1,
                height: 75,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 3
                },
                shadowOpacity: 0.5,


            }
        } else {
            return {
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#ccc',
                width: SCREEN_WIDTH / 4,
                height: 75,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.2,
                marginBottom: 10,
                elevation: 2,
                position: 'relative',
            }
        }
    },
    flexSrollview: (length) => {
        if (length <= 3) {
            return { flex: 1 }
        } else { return null }
    }
}

export default DaySlider;