import React from 'react';
import { Text, FlatList, View } from 'react-native';
import styles from '../styles';

export default function History({ history }) {
    return (
        <View style={styles.container}>
            <Text>History</Text>
            <FlatList
                style={styles.list}
                data={history}
                keyExtractor={item => item.key}
                renderItem={({ item }) => <Text>{item.data}</Text>}
            />
        </View>
    );
}