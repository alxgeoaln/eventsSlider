exports.EVENTS_OPTIONS = {
    title: 'Events',
    headerStyle: {
        backgroundColor: '#5FCF80',
    },
    headerTitleStyle : {
        color: '#fff',
        fontSize: 20
    }
}

exports.DETAILS_OPTIONS = (navigation) => {
    
    return {
        title: navigation.state.params.event.title,
        headerStyle: {
            backgroundColor: '#5FCF80',
        },
        headerTitleStyle : {
            color: '#fff',
            fontSize: 20
        }
    }
}