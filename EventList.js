import React, { Component } from "react";
import { FlatList, Text, StyleSheet, SafeAreaView } from "react-native";
import GlobalStyles from './GlobalStyles';

import EventCard from './EventCard'

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F3F3F3',
    },
})

class EventList extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        const events = require('./db.json').events.map(e => ({
            ...e,
            date: new Date(e.date),
        }));
        this.setState({ events });
    }

    render() {
        return (
            <SafeAreaView style={GlobalStyles.droidSafeArea}>
                <FlatList 
                    style={styles.list}
                    data={this.state.events}
                    renderItem={({item}) => <EventCard event={item} />}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        );
    }
}

export default EventList;
