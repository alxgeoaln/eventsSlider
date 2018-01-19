import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import UpcomingEvents from '../components/UpcomingEvents';
import PastEvents from '../components/PastEvents';
import { EVENTS_OPTIONS } from '../navigation/StackNavigation';

const DATA = [
    {
        title: 'UP 1',
        up: true,
        details: '',
        moreDetails: 'upppp 1'
    },
    {
        title: 'UP 2',
        up: true,
        details: '',
        moreDetails: 'upppp 2'
    },
    {
        title: 'UP 3',
        up: true,
        details: '',
        moreDetails: 'upppp 3'
    },
    {
        title: 'Past 1',
        up: false,
        details: '',
        moreDetails: 'passsttt 1'
    },
    {
        title: 'Past 2',
        up: false,
        details: '',
        moreDetails: 'passsttt 2'
    }
];

class Events extends React.Component {
    static navigationOptions = EVENTS_OPTIONS;

    render() {
        return (
            <View style={styles.container}>
                <ScrollView >
                    <View style={styles.childContainer}>
                        <Text style={{ marginTop: 20 }}>UpcomingEvents</Text>
                        <UpcomingEvents
                            navigation={this.props.navigation}
                            data={DATA}
                        />
                    </View>
                    <View style={styles.childContainer}>
                        <Text style={{ marginTop: 20 }}>UpcomingEvents</Text>
                        <UpcomingEvents
                            navigation={this.props.navigation}
                            data={DATA}
                        />
                    </View>
                    <View style ={{alignSelf: 'center'}}>
                        <Text style={{marginTop: 20}}>Past Events</Text>
                        <PastEvents
                            data={DATA}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#637A91',
    },
    childContainer: {
        height: 450
    }
};

export default Events;