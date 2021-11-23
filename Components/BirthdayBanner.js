import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ProfileBoxVertical from './ProfileBoxVertical';

const BirthdayBanner = (appState) => {
  console.log(appState);
  return (
    <View style={styles.birthdayWrapper}>
      <Text style={styles.textHeader}>Birthdays</Text>
      <View style={styles.profileBoxesWrapper}>
        {appState.birthdays.map(person => {
          return <ProfileBoxVertical {...person} key={Math.random()} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    padding: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
  birthdayWrapper: {
    // flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#a1a1a1',
    padding: 8,
  },
  profileBoxesWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export default BirthdayBanner;
