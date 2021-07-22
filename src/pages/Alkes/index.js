import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Image, Linking, StyleSheet, Text, View} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import {ILBgOxygen} from '../../assets';
import {Gap, Input, Link} from '../../component';
import {colors, fonts} from '../../utils';

export default function Alkes() {
  const [filterData, setFilterData] = useState([]);
  const [dataAlkse, setDataAlkes] = useState([]);
  const [search, setsearch] = useState('');

  useEffect(() => {
    getAllData();
  }, []);

  const getAlkes = async () => {
    try {
      const options = {
        method: 'GET',
        url:
          'https://airtable.com/v0.3/view/viwwYsPJjaVAhOOVC/readSharedViewData',
        params: {
          stringifiedObjectParams: '{"shouldUseNestedResponseFormat":true}',
          requestId: 'reqTWl6jXRR6NAUY3',
          accessPolicy:
            '{"allowedActions":[{"modelClassName":"view","modelIdSelector":"viwwYsPJjaVAhOOVC","action":"readSharedViewData"},{"modelClassName":"view","modelIdSelector":"viwwYsPJjaVAhOOVC","action":"getMetadataForPrinting"},{"modelClassName":"row","modelIdSelector":"rows *[displayedInView=viwwYsPJjaVAhOOVC]","action":"createBoxDocumentSession"},{"modelClassName":"row","modelIdSelector":"rows *[displayedInView=viwwYsPJjaVAhOOVC]","action":"createDocumentPreviewSession"},{"modelClassName":"view","modelIdSelector":"viwwYsPJjaVAhOOVC","action":"downloadCsv"},{"modelClassName":"view","modelIdSelector":"viwwYsPJjaVAhOOVC","action":"downloadICal"},{"modelClassName":"row","modelIdSelector":"rows *[displayedInView=viwwYsPJjaVAhOOVC]","action":"downloadAttachment"}],"shareId":"shrhtAdFBmMwuEIiw","applicationId":"appxkHt7qtyh7IIPp","sessionId":"sesStGVRFowUl74pP","generationNumber":0,"signature":"7baa6da7220f9944a034b58639eb1ebb9751fd37966a9002ae7761f802050e1e"}',
        },
        headers: {
          cookie:
            'brw=brwXW1ya253iaTrvQ; __Host-airtable-session=eyJzZXNzaW9uSWQiOiJzZXNLTzUzN04xU2IwTkpyVSIsImNzcmZTZWNyZXQiOiJMMGp0SkpwS2xIYTVhSzN1bmF1OXQ5SFIiLCJyZWRpcmVjdFRvQWZ0ZXJMb2dpbiI6Ii92MC4zL3ZpZXcvdml3d1lzUEpqYVZBaE9PVkMvcmVhZFNoYXJlZFZpZXdEYXRhIiwiYWNxdWlzaXRpb24iOiJbe1wicGxhdGZvcm1cIjpcInBob25lXCIsXCJvcmlnaW5cIjpcImxvZ2luXCIsXCJ0b3VjaFRpbWVcIjpcIjIwMjEtMDctMTlUMTg6NTU6NDAuOTA3WlwifV0ifQ%3D%3D; __Host-airtable-session.sig=gv1ZlvwMn28t7uFTCOgW2zUOP5_vPXLvaFwRzxJwfuY; AWSELB=F5E9CFCB0C87D62DB5D03914FDC2A2D2D45FBECE92E41FD16876642C9D3ADA1D9D322729E391AC3560650744EDFEAB3519A6F71FB9E99F96B11C6B9D0AF6AC0084EF2088CD; AWSELBCORS=F5E9CFCB0C87D62DB5D03914FDC2A2D2D45FBECE92E41FD16876642C9D3ADA1D9D322729E391AC3560650744EDFEAB3519A6F71FB9E99F96B11C6B9D0AF6AC0084EF2088CD',
          Connection: 'keep-alive',
          'sec-ch-ua':
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
          'x-airtable-application-id': 'appxkHt7qtyh7IIPp',
          'ot-tracer-sampled': 'true',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36',
          'x-airtable-inter-service-client': 'webClient',
          'ot-tracer-traceid': '645730bb6d63083c',
          'x-early-prefetch': 'true',
          'x-time-zone': 'Asia/Jakarta',
          'x-user-locale': 'id-ID',
          'X-Requested-With': 'XMLHttpRequest',
          'x-airtable-page-load-id': 'pgltykdeuaTzubpx1',
          'ot-tracer-spanid': '22bee4c174980422',
          Accept: '*/*',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Dest': 'empty',
          'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
          Cookie:
            'brw=brwEVRXOl40kvqXyQ; mv=eyJzdGFydFRpbWUiOiIyMDIxLTA3LTE5VDE4OjMzOjIyLjU0M1oiLCJyZWZlcnJlciI6Imh0dHBzOi8vb2tzaWdlbi5jYXJyZC5jby8iLCJsb2NhdGlvbiI6Imh0dHBzOi8vYWlydGFibGUuY29tL2VtYmVkL3NoclZoeGsqKioqKioqKioqP2JhY2tncm91bmRDb2xvcj0qIiwiaW50ZXJuYWxUcmFjZUlkIjoidHJjeTJGS2lhUXZUNlMyU3YifQ==; __Host-airtable-session=eyJzZXNzaW9uSWQiOiJzZXNTdEdWUkZvd1VsNzRwUCIsImNzcmZTZWNyZXQiOiJIUGNhRVlWcnNpa3N4bzQyQkpSaE5zVXQiLCJhY3F1aXNpdGlvbiI6Ilt7XCJ1dG1fc291cmNlXCI6XCJhaXJ0YWJsZV9lbWJlZGRlZF92aWV3XCIsXCJwbGF0Zm9ybVwiOlwiZGVza3RvcFwiLFwib3JpZ2luXCI6XCJzaWdudXBcIixcInRvdWNoVGltZVwiOlwiMjAyMS0wNy0xOVQxODozMzozNS45NThaXCJ9XSJ9; __Host-airtable-session.sig=spjYsbQCzHYYSwRK3QkPyfyrPjKVBB3_ur7FJ35bQHE; AWSELBCORS=F5E9CFCB0C87D62DB5D03914FDC2A2D2D45FBECE92B48CE1BB3BE2DF64F2AF8FC299B7DB140BC1262B9940A7DF1D234855648842F37B765FC6B057ECA6F80D69D1367672C0',
        },
      };

      axios
        .request(options)
        .then(function (response) {
          const data = response.data;
          setDataAlkes(data.data.table.rows);
          setFilterData(data.data.table.rows);
        })
        .catch(function (error) {
          console.error(error);
        });
    } catch (error) {
      console.error(`Handle error : ${error}`);
    }
  };

  // console.log(`Data Alkes : ${dataAlkse.createdTime}`);

  const getAllData = (async) => {
    return Promise.all[getAlkes()];
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Image source={ILBgOxygen} style={styles.picture} />
        <View>
          <Text style={styles.title}>
            {item.cellValuesByColumnId.fld1RLFw5fI5tl4ex}
          </Text>
          <Text style={styles.address}>
            Alamat : {item.cellValuesByColumnId.fldov6i5LIKpxIR9O}
          </Text>
          <Text style={styles.update}>
            Kontak : {item.cellValuesByColumnId.fldFn9LVNxZ1or4J6}
          </Text>
          <Text style={styles.update}>Diperbarui : {item.createdTime}</Text>
          <Link
            title="Detail Website"
            size={16}
            onPress={() => {
              Linking.openURL(item.cellValuesByColumnId.fldJbQIqjR5XHc51s);
            }}
          />
        </View>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{height: 0.5, width: '100%', backgroundColor: '#c8c8c8'}}></View>
    );
  };

  const searchFilter = (text) => {
    if (text) {
      const newData = dataAlkse.filter((item) => {
        const itemData = item.cellValuesByColumnId.fld7GbzwadFYpIDKf
          ? item.cellValuesByColumnId.fld7GbzwadFYpIDKf.toUpperCase()
          : ''.toUpperCase();

        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setsearch(text);
    } else {
      setFilterData(dataAlkse);
      setsearch(text);
    }
  };

  return (
    <View style={styles.bg}>
      <Input
        placeholder="Search here"
        value={search}
        onChangeText={(text) => searchFilter(text)}
      />
      <Gap height={20} />
      <FlatList
        data={filterData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ItemSeparatorView}
      />
    </View>
  );
}

const width_title = '60%';
const styles = StyleSheet.create({
  bg: {
    backgroundColor: colors.white,
    padding: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: colors.white,
  },
  txtsize: {
    fontSize: 20,
  },
  title: {
    fontSize: 16,
    width: width_title,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  textInput: {
    height: 60,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: 'white',
  },
  hotline: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 2,
  },
  page: {
    backgroundColor: colors.cadangan,
    flex: 1,
  },
  picture: {
    width: 100,
    height: 80,
    borderRadius: 11,
    marginRight: 16,
  },
  address: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    width: 200,
    marginTop: 2,
  },
  update: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 2,
  },
});
