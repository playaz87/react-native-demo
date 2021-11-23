import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Header = ({imgSrc, name, social}) => {
  return (
    <View style={styles.header}>
      <View style={styles.profileWrapperView}>
        <Image
          source={{
            uri: imgSrc,
          }}
          style={styles.img}
        />
        <View style={styles.profileInfoWrapperView}>
          <Text style={styles.font16}>{name}</Text>
          <Text style={{...styles.textLink, ...styles.font16}}>{social}</Text>
        </View>
      </View>
      <View style={styles.viewIcons}>
        <Icon style={styles.icon} name="search" size={20} />
        <Icon style={styles.icon} name="bell" size={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 8,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#a1a1a1',
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
    paddingStart: 16,
  },
  font16: {
    fontSize: 16,
  },
  textLink: {
    color: 'blue',
  },
  viewIcons: {
    flexDirection: 'row',
  },
  icon: {
    paddingStart: 4,
    paddingEnd: 4,
  },
});

export default Header;
