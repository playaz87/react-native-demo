import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const CompanyBanner = ({logoSrc, stats}) => {
  return (
    <View style={styles.viewWrapper}>
      <Image
        style={styles.imageLogo}
        source={{
          uri: logoSrc,
        }}
      />
      <View style={styles.statsWrapper}>
        <View style={styles.statsBox}>
          <Text style={{fontWeight: 'bold'}}>{stats.today}</Text>
          <Text>투데이</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={{fontWeight: 'bold'}}>{stats.notices}</Text>
          <Text>게시물</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={{fontWeight: 'bold'}}>{stats.subscribers}</Text>
          <Text>구독</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={{fontWeight: 'bold'}}>{stats.members}</Text>
          <Text>멤버</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignContent: 'space-between',
    paddingEnd: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#a1a1a1',
  },
  imageLogo: {
    height: 80,
    width: 100,
  },
  statsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statsBox: {
    alignItems: 'center',
    padding: 6,
  },
});
export default CompanyBanner;
