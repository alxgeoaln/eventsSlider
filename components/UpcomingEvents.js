import React from 'react';
import { Text, View, ScrollView, Dimensions, NativeMethodsMixin, SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';
import EventCard from '../components/EventCard';
import Carousel, { Pagination } from 'react-native-snap-carousel';


const SCREEEN_WIDTH = Dimensions.get('window').width;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.4;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const SLIDER_1_FIRST_ITEM = 0;

class UpcomingEvents extends React.Component {
    state = {
        sliderActiveSlide: SLIDER_1_FIRST_ITEM,
        slider1Ref: null,
        currentCard: 0
    }


    _renderItem = ({ item, index }) => {
        const { sliderActiveSlide } = this.state;
        return (
            <EventCard
                index={index}
                ev={item}
                currentCard={sliderActiveSlide}
                inactiveOpacity={0.5}
                inactiveColor='#000'
            />
        );
    }

    renderCard() {
        this.props.data
            .filter(ev => ev.up === true)
            .map((ev, i) => {
                this._renderItem(ev, i)
            });
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <Carousel
                    ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
                    data={this.props.data}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    firstItem={SLIDER_1_FIRST_ITEM}
                    inactiveSlideScale={0.85}
                    inactiveSlideOpacity={0.7}
                    // slideStyle={{ backgroundColor: '#000' }}
                    onSnapToItem={(index) => this.setState({ sliderActiveSlide: index })}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                // containerCustomStyle={{ marginTop: 15 }}

                />
                <Pagination
                    dotsLength={this.props.data.length}
                    activeDotIndex={this.state.sliderActiveSlide}
                    containerStyle={styles.paginationContainer}
                    dotColor={'rgba(255, 255, 255, 0.92)'}
                    dotStyle={styles.paginationDot}
                    inactiveDotColor={'#000'}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    carouselRef={this.state.slider1Ref}
                    tappableDots={!!this.state.slider1Ref}
                />
            </View>
        )
    }
}

const styles = {
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    },
    sliderContentContainer: {
        paddingVertical: 15 // for custom animation
    }
}



export default UpcomingEvents;