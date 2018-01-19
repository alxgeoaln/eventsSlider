import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, Animated, PanResponder, Easing } from 'react-native';
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
    constructor(props) {
        super(props);

        this.animateFadeIn = new Animated.Value(0);
        this.animateFadeOut = new Animated.Value(1);
    }


    animate() {
        this.animateFadeIn.setValue(0);
        this.animateFadeOut.setValue(1);
        Animated.timing(
            this.animateFadeIn,
            {
                toValue: 1,
                duration: 500,
                easing: Easing.linear
            }
        ).start();
    }

    animateOut() {
        this.animateFadeOut.setValue(1);
        Animated.timing(
            this.animateFadeOut,
            {
                toValue: 0,
                duration: 500,
                easing: Easing.linear
            }
        ).start();
    }

    inactiveImageStyle = () => {
        const { index, currentCard } = this.props;

        this.animate();
        this.animateOut();

        const opacity = this.animateFadeIn.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 1]
        })

        const opacityOut = this.animateFadeOut.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 1]
        });

        if (currentCard !== index) {
            return styles.inactiveImageStyle(0)
        }
        else {
            return styles.inactiveImageStyle(opacity);
        }
    }

    render() {

        const { ev, index, currentCard, inactiveOpacity, inactiveColor, color } = this.props;

        return (
            <View style={styles.slideInnerContainer}>
                {/* <TouchableOpacity
                    activeOpacity={1}
                    
                > */}

                    <View>
                        <Animated.Image
                            source={{ uri: 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg' }}
                            style={[styles.image, this.inactiveImageStyle()]}

                        />
                    </View>
                    <Animated.View
                        style={[styles.textContainer, this.inactiveImageStyle()]}

                    >
                        <Text
                            style={[styles.subtitle]}
                            numberOfLines={2}
                        >
                            {ev.title}
                        </Text>
                    </Animated.View>
                {/* </TouchableOpacity> */}
                {/* #endregion */}
            </View>
        )
    }
}



const styles = {
    image: { height: 300 },

    inactiveImageStyle: (animOpacity) => {
        return {
            opacity: animOpacity,
        }
    },
    slideInnerContainer: {

        width: itemWidth,
        height: slideHeight,
        paddingBottom: 18 // needed for shadow
    },
    textContainer: {
        justifyContent: 'center',
        paddingTop: 20,
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