import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });

class MapComponent extends Component {
    render() {
      return <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={{
                    latitude: 55.9533,
                    longitude: -3.1883,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.18,
                    }}
                >
                </MapView>
                </View>
    }
  }
  
export default MapComponent;