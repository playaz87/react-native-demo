import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const BottomMenu = () => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Icon name="home" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
});

export default BottomMenu;
