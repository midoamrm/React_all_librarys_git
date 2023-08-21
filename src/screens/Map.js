/* eslint-disable react/react-in-jsx-scope */
import {useRef, useState} from 'react';
import {StyleSheet, Text, View, PermissionsAndroid} from 'react-native';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import * as FileSystem from 'expo-file-system';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
//import { shareAsync } from 'expo-sharing';

// npx expo install react-native-maps
// npx expo install expo-sharing
// npx expo install expo-file-system
let locationsOfInterest = [
  {
    title: 'First',
    location: {
      latitude: 30.033333,
      longitude: 31.233334,
    },
    description: 'My First Marker',
  },
  {
    title: 'Second',
    location: {
      latitude: 31.205753,
      longitude: 29.924526,
    },
    description: 'My Second Marker',
  },
];

const mapJson = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#181818',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1b1b1b',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2c2c2c',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8a8a8a',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#373737',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3c3c3c',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#ffeb3b',
      },
      {
        weight: 3,
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4e4e4e',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#1f0038',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3d3d3d',
      },
    ],
  },
];
async function requestGeolocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Ridesharer Geolocation Permission',
        message:
          'Ridesharer needs access to your current location so you can share or search for a ride',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the geolocation');
    } else {
      console.log('Geolocation permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}

//await requestGeolocationPermission();
export default function Mappp() {
  const [count, setCount] = useState(0);
  const [draggableMarkerCoord, setDraggableMarkerCoord] = useState({
    longitude: 31.333332,
    latitude: 29.8499966,
  });
  const mapRef = useRef();

  console.log(PermissionsAndroid.RESULTS.GRANTED);
  const onRegionChange = region => {
    console.log(region);
  };

  const showLocationsOfInterest = () => {
    return locationsOfInterest.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        />
      );
    });
  };

  const takeSnapshotAndShare = async () => {
    const snapshot = await mapRef.current.takeSnapshot({
      width: 300,
      height: 300,
      result: 'base64',
    });
    const uri = FileSystem.documentDirectory + 'snapshot.png';
    await FileSystem.writeAsStringAsync(uri, snapshot, {
      encoding: FileSystem.EncodingType.Base64,
    });
    // await shareAsync(uri);
  };

  return (
    <View style={styles.container}>

      <MapView
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        style={styles.map}
        onRegionChange={onRegionChange}
        initialRegion={{
          latitude: 30.033333,
          latitudeDelta: 27.499085419977938,
          longitude: 31.233334,
          longitudeDelta: 15.952148000000022,
        }}
        //  customMapStyle={mapJson}
      >
        {showLocationsOfInterest()}
        <Marker
          draggable
          pinColor="#0000ff"
          coordinate={draggableMarkerCoord}
          onDragEnd={e => setDraggableMarkerCoord(e.nativeEvent.coordinate)}
        />
        <Marker
          pinColor="#00ff00"
          coordinate={{latitude: 30.45499818, longitude: 32.3499986}}
        />

      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  mapOverlay: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 5,
    padding: 16,
    left: '25%',
    width: '50%',
    textAlign: 'center',
  },
});
