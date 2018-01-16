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
        return (
            <EventCard
                index={index}
                key={index}
                ev={item}
                currentCard={this.state.currentCard}
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
            <Carousel
                ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
                data={this.props.data}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                hasParallaxImages={true}
                slideStyle={{ backgroundColor: 'black' }}
                firstItem={SLIDER_1_FIRST_ITEM}
                inactiveSlideScale={0.94}
                inactiveSlideOpacity={0.7}
                inactiveSlideShift={4}
                onSnapToItem={(index) => this.setState({ currentCard: index })}
            />
        )
    }
}



export default UpcomingEvents;