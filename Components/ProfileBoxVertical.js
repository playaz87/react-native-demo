import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const ProfileBoxVertical = ({name, imgSrc, social}) => {
  return (
    <TouchableOpacity>
      <View style={styles.wrapper}>
        <Image
          source={{
            uri: imgSrc,
          }}
          style={styles.img}
        />
        <Text style={styles.font14}>{name}</Text>
        <Text style={{...styles.textLink, ...styles.font14}}>{social}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    padding: 4,
    marginStart: 4,
    marginEnd: 4,
  },
  font14: {
    fontSize: 14,
  },
  textLink: {
    color: 'blue',
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  },
});

export default ProfileBoxVertical;
