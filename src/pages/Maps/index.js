import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import RBSheet from 'react-native-raw-bottom-sheet';
import {currencyFormatter, formatDate} from '../../utils';

export default function Maps() {
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState([]);
  const [date, setDate] = useState([]);
  const refRBSheet = useRef();
  const mapView = useRef();

  useEffect(() => {
    getAllData();
    getAnimateMaps();
  }, []);

  const initialRegion = {
    latitude: -6.175392,
    longitude: 106.827153,
    latitudeDelta: 15,
    longitudeDelta: 15,
  };

  const getAnimateMaps = () => {
    setTimeout(() => {
      mapView.current.animateToRegion(
        {
          latitude: -6.175392,
          longitude: 106.827153,
          latitudeDelta: 0.9,
          longitudeDelta: 0.9,
        },
        1500,
      );
    }, 300);
  };

  const openBottomSheet = (item) => () => {
    setDetail(item);
    setTimeout(() => {
      refRBSheet.current.open();
    }, 10);
  };

  const getMarker = async () => {
    try {
      const response = await fetch(
        'https://data.covid19.go.id/public/api/prov.json',
      );
      const result = await response.json();
      const parsingData = result.list_data;
      console.log(`Ini Data Result full : ${parsingData}`);
      setData(parsingData);
    } catch (error) {
      // handle error
    }
  };

  const getUpdateDate = async () => {
    try {
      const response = await fetch(
        'https://data.covid19.go.id/public/api/prov.json',
      );
      const result = await response.json();
      console.log(`ini data datenya : ${result.last_date}`);
      setDate(result);
    } catch (error) {
      //hanlde error
    }
  };

  const getAllData = (async) => {
    return Promise.all([getMarker(), getUpdateDate()]);
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapView}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        maxZoomLevel={5}
        region={initialRegion}>
        {data.map((item, index) => {
          // var parseData = JSON.parse(item.penambahan);
          // console.log(parseData);
          return (
            <>
              <Marker
                key={index}
                onPress={openBottomSheet(item)}
                coordinate={{
                  latitude: item.lokasi.lat,
                  longitude: item.lokasi.lon,
                }}>
                <Image
                  source={require('../../assets/ilustration/marker.png')}
                  style={styles.markerIcon}
                />
              </Marker>
            </>
          );
        })}
      </MapView>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        height={250}
        openDuration={10}
        closeOnPressMask={true}
        customStyles={{
          container: {
            backgroundColor: 'rgba(17, 22, 31, 0.6)',
          },
          draggableIcon: {
            backgroundColor: 'grey',
          },
        }}>
        <View style={styles.countryDetail}>
          <Text style={styles.countryName}>Provinsi : {detail.key}</Text>
          <Text style={[styles.countryInfo, styles.confirmed]}>
            Positif: {currencyFormatter(detail.jumlah_kasus)}
          </Text>
          <Text style={[styles.countryInfo, styles.deaths]}>
            Meninggal: {currencyFormatter(detail.jumlah_meninggal)}
          </Text>
          <Text style={[styles.countryInfo, styles.recovered]}>
            Sembuh: {currencyFormatter(detail.jumlah_sembuh)}
          </Text>
          <Text style={[styles.countryInfo, styles.existing]}>
            Penambahan Hari ini : {currencyFormatter(detail.penambahan.positif)}
          </Text>
          <Text style={styles.lastUpdate}>
            Terakhir Update: {formatDate(date.last_date)}
          </Text>
        </View>
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  countryName: {
    color: '#bdc3c7',
    fontSize: 18,
    paddingBottom: 10,
    fontFamily: 'GoogleSans-Bold',
    textTransform: 'capitalize',
  },
  countryInfo: {
    fontWeight: '700',
    paddingBottom: 10,
  },
  lastUpdate: {
    color: '#A8A8A8',
    fontFamily: 'GoogleSans-Regular',
  },
  countryDetail: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
  confirmed: {
    color: 'gold',
    fontFamily: 'GoogleSans-Medium',
  },
  deaths: {
    color: 'red',
    fontFamily: 'GoogleSans-Medium',
  },
  recovered: {
    color: 'lightgreen',
    fontFamily: 'GoogleSans-Medium',
  },
  existing: {
    color: 'orange',
    fontFamily: 'GoogleSans-Medium',
  },
  markerIcon: {
    height: 20,
    width: 20,
  },

  header: {
    backgroundColor: '#ffffff',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -1},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  Callout: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 20,
    width: '100%',
  },
  name: {
    fontSize: 15,
  },
  desc: {},
});
