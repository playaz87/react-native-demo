import React, {useState} from 'react';
import Header from './Components/Header';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import CompanyBanner from './Components/CompanyBanner';
import BirthdayBanner from './Components/BirthdayBanner';
import RecentPhotos from './Components/RecentPhotos';
import BottomMenu from './Components/BottomMenu';
import CompanyCulture from './Components/CompanyCulture';

const App = () => {
  const [appState, setAppState] = useState({...defaultState});
  return (
    <SafeAreaView style={styles.appHeader}>
      <Header {...appState.user} />
      <CompanyBanner {...appState.company} />
      <BirthdayBanner birthdays={appState.birthdays} />
      <RecentPhotos props={photos} />
      <CompanyCulture />
      <View style={styles.footer}>
        <BottomMenu />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appHeader: {
    justifyContent: 'space-between',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    height: 200,
  },
});

const defaultState = {
  user: {
    name: 'Alex',
    social: '@Alex',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/61.jpg',
  },
  company: {
    logoSrc:
      'https://images.freecreatives.com/wp-content/uploads/2015/04/logo007.png',
    stats: {
      today: Math.round(Math.random() * 1000),
      notices: Math.round(Math.random() * 100),
      subscribers: Math.round(Math.random() * 1000),
      members: Math.round(Math.random() * 100),
    },
  },
  birthdays: [
    {
      name: 'Alex',
      social: '@Alex',
      imgSrc: 'https://randomuser.me/api/portraits/med/men/61.jpg',
    },
    {
      name: 'James',
      social: '@James',
      imgSrc: `https://randomuser.me/api/portraits/med/men/${Math.round(
        Math.random() * 100,
      )}.jpg`,
    },
    {
      name: 'Kate',
      social: '@Kate',
      imgSrc: `https://randomuser.me/api/portraits/med/women/${Math.round(
        Math.random() * 100,
      )}.jpg`,
    },
  ],
};

const photos = [
  'https://source.unsplash.com/random',
  'https://source.unsplash.com/random',
  'https://source.unsplash.com/random',
  'https://source.unsplash.com/random',
  'https://source.unsplash.com/random',
  'https://source.unsplash.com/random',
];

export default App;
