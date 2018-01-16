import React from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import EventCard from '../components/EventCard';

class PastEvents extends React.Component {
    render() {
        const renderCards = () => {
            return this.props.data
                .filter(ev => ev.up === false)
                .map((ev, i) => {
                    return (
                        <EventCard
                            cardTitle="Past Events"
                            ev={ev}
                            key={i}
                            navigation={this.props.navigation}
                        />
                    )
                })
        };
        return (
            <Swiper
                dot={<View style={{ backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
                activeDot={<View style={{ backgroundColor: '#5FCF80', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
                loop={false}
                paginationStyle={{ bottom: 10 }}
            >
                {renderCards()}
            </Swiper>
        )
    }
}

export default PastEvents;