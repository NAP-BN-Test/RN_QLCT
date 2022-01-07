import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

function Loading() {
  return (
    <View>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={{textAlign: 'center', marginTop: 10}}>Vui lòng chờ...</Text>
    </View>
  );
}

export default Loading;
