import React from 'react';
import { Text, View, FlatList, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import EventCard from '../components/EventCard';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class PastEvents extends React.Component {
    renderCards = () => {
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
    render() {

        return (
            // <Swiper
            //     dot={<View style={{ backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
            //     activeDot={<View style={{ backgroundColor: '#5FCF80', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
            //     loop={false}
            //     paginationStyle={{ bottom: 10 }}
            // >
            //     {renderCards()}
            // </Swiper>
            // <View style={{flex: 1}}>
            //     {renderCards()}
            // </View>
            <FlatList
            ItemSeparatorComponent={() => { return <View style={{marginBottom: 100}}/>}}
            ListFooterComponent={() => {return <View style={{marginBottom: SCREEN_HEIGHT * .2}}/>}}
                data={this.props.data}
                renderItem={({ item }) => <EventCard ev={item} />}
            />
        )
    }
}

export default PastEvents;