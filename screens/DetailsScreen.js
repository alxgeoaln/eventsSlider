import React from 'react';
import { View, Text } from 'react-native';
import { DETAILS_OPTIONS } from '../navigation/StackNavigation';

class DetailsScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.event.title,
            headerStyle: {
                backgroundColor: '#5FCF80',
            },
            headerTitleStyle : {
                color: '#fff',
                fontSize: 20
            },
            headerTintColor: '#fff'
        }
    }

    // static navigationOptions = DETAILS_OPTIONS(this.props);
    render() {
        const {navigation} = this.props;
        return (
            <View>
                <Text>{navigation.state.params.event.title}</Text>
                <Text>Details</Text>
                <Text>Details</Text>
                <Text>Details</Text>
                <Text>Details</Text>
            </View>
        )
    }
}

export default DetailsScreen;