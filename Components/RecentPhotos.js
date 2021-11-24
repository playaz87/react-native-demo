import React, {useState} from 'react';
import {Text, StyleSheet, View, Image, Modal, Pressable} from 'react-native';
const RecentPhotos = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const photos = props.props;
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textHeader}>Recent Photos</Text>
      <View style={styles.imageWrapper}>
        {photos.map((src, i) => {
          return (
            <View style={{padding: 8}} key={Math.random()}>
              <Pressable
                onPress={() => {
                  setActiveIndex(i);
                  setModalVisible(!modalVisible);
                }}>
                <Image source={{uri: src}} style={styles.img} />
              </Pressable>
            </View>
          );
        })}
      </View>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <View>
            <Image
              style={styles.modalImg}
              source={{uri: photos[activeIndex]}}
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 2,
    borderBottomColor: '#a1a1a1',
    padding: 8,
  },
  textHeader: {
    padding: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  img: {
    width: 100,
    height: 80,
  },
  modalImg: {
    width: '100%',
    height: '100%',
  },
});
export default RecentPhotos;
