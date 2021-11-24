import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const CompanyCulture = () => {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const [data, setData] = useState([...testData]);
  const renderItem = ({item}) => {
    return (
      <View>
        <Card containerStyle={styles.cardContainer}>
          <Card.Image source={{uri: item.imgSrc}} style={styles.cardImage} />
          <Text style={{marginTop: 6}}>{item.text}</Text>
          <View style={styles.iconView}>
            <View style={styles.statsContainer}>
              <Icon name="heart-o" />
              <Text style={styles.statsText}>{item.hearts}</Text>
            </View>
            <View style={styles.statsContainer}>
              <Icon name="commenting-o" />
              <Text style={styles.statsText}>{item.comments}</Text>
            </View>
            <View style={styles.statsContainer}>
              <Icon name="eye" />
              <Text style={styles.statsText}>{item.views}</Text>
            </View>
          </View>
        </Card>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <FlatList
        data={testData}
        keyExtractor={item => item.id}
        horizontal
        style={{width: SCREEN_WIDTH + 5, height: '100%'}}
        renderItem={item => renderItem(item)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    // flexDirection: 'row',
    // flex: 1,
  },
  cardContainer: {
    width: 200,
    // maxWidth: '50%',
    // minHeight: 'min-content',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  cardImage: {
    width: '100%',
    height: 80,
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    padding: 6,
  },
  statsText: {
    paddingLeft: 4,
  },
});

const testData = [
  {
    imgSrc: 'https://source.unsplash.com/random',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    id: 1,
    views: 10,
    comments: 15,
    hearts: 20,
  },
  {
    imgSrc: 'https://source.unsplash.com/random',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    id: 2,
    views: 44,
    comments: 32,
    hearts: 34,
  },
  {
    imgSrc: 'https://source.unsplash.com/random',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    id: 3,
    views: 1212,
    comments: 233,
    hearts: 112,
  },
];
export default CompanyCulture;
