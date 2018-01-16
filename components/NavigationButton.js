import React from 'react';
import { View, Text } from 'react-navigation';
import { Button } from 'react-native-elements';

class NavigationButton extends React.Component {
    goToDetails = (event) => {
        this.props.navigation.navigate('details', { event })
    }
    render() {
        return (
            <Button
                icon={{ name: 'code' }}
                backgroundColor='#5FCF80'
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='VIEW NOW'
                onPress={()=> this.goToDetails(this.props.event)}
            />
        )
    }
}


export default NavigationButton;