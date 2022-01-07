import React from 'react';
import { Text, View } from 'react-native';
import { ScreenHeight } from '../../../redux/hooks';

function Home() {
    return (
        <View style={{flex: 1, height: ScreenHeight, backgroundColor: '#ffff'}}>
            <Text>Home</Text>
        </View>
    );
}

export default Home;