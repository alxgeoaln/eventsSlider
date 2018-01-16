import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import NavigationButton from '../components/NavigationButton';

const SCREEN_WIDTH = Dimensions.get('window').width;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.4;
const slideHeightNonActive = viewportHeight * 0.4;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

class EventCard extends React.Component {

    render() {
        const { ev, index, currentCard } = this.props;
        if(currentCard === index) {
            return (
                <View>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={styles.slideInnerContainer}
                    >
                    
                        <View>
                            <Image
                                source={{ uri: 'https://scontent-vie1-1.xx.fbcdn.net/v/t35.0-12/26827859_1820835134615540_360981581_o.png?oh=1c0de758b6fb2335811b8a8db23a6c1e&oe=5A5FFCC2' }}
                                style={styles.image}
                            />
                        </View>
                        <View style={[styles.textContainer]}>
    
                            <Text
                                style={[styles.subtitle]}
                                numberOfLines={2}
                            >
                                {ev.title}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {/* #endregion */}
                </View>
            )
        } else {
            return (
                <View>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={{
                            width: itemWidth,
                            height: slideHeightNonActive,
                            paddingBottom: 18 }}
                    >
                    
                        <View>
                            <Image
                                source={{ uri: 'https://scontent-vie1-1.xx.fbcdn.net/v/t35.0-12/26827859_1820835134615540_360981581_o.png?oh=1c0de758b6fb2335811b8a8db23a6c1e&oe=5A5FFCC2' }}
                                style={[styles.image,{ opacity: 0, backgroundColor: '#000'}]}
                            />
                        </View>
                    
                    </TouchableOpacity>
                    {/* #endregion */}
                </View>
            )
        }
    }
}


const styles = {
    image: { height: 300 },
    slideInnerContainer: {
        
        width: itemWidth,
        height: slideHeight,
        paddingBottom: 18 // needed for shadow
    },
    textContainer: {
        justifyContent: 'center',
        paddingTop: 20 ,
        paddingBottom: 20,
        paddingHorizontal: 16,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        // backgroundColor: colors.background1
    },
    scrollview: {
        flex: 1,
        paddingTop: 50
    },
    scrollviewContentContainer: {
        paddingBottom: 50
    },
    exampleContainer: {
        marginBottom: 30
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: '#000',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        marginTop: 15
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    }
}
export default EventCard;