import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.profileWrapperView}>
        <Image
          source={{
            uri: 'https://randomuser.me/api/portraits/med/men/75.jpg',
          }}
          style={styles.img}
        />
        <View style={styles.profileInfoWrapperView}>
          <Text style={styles.font16}>Alex</Text>
          <Text style={{...styles.textLink, ...styles.font16}}>@Alex</Text>
        </View>
      </View>
      <View style={styles.viewIcons}>
        <Icon name="search" size={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 8,
    backgroundColor: '#c63535',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    height: 45,
    width: 45,
    borderRadius: 45 / 2,
    alignSelf: 'flex-start',
  },
  profileWrapperView: {
    paddingStart: 8,
    flexDirection: 'row',
  },
  profileInfoWrapperView: {
    paddingStart: 16
  },
  font16: {
    fontSize: 16,
  },
  textLink: {
    color: 'blue',
  },
  viewIcons: {
    alignSelf: 'flex-end',
  },
});

export default Header;
