import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScreenHeight} from '../../../redux/hooks';
import colors from '../../../assets/css/color';
import RNSRadioGroup from '../../../component/radiogroup/radiogroupCpn';
import fonts from '../../../assets/font/fonts';
function Home() {
  const [indexSelect, setIndexSelect] = useState(0);

  const renderRow = ({item}: any) => (
    <TouchableOpacity
      activeOpacity={0.6}
      key={Math.floor(Math.random() * 11000)}
      style={styles.itemContainer}
      onPress={() => {}}>
      <View style={styles.itemSubContainer}>
        {/* <Image source={{uri: item.image}} style={styles.itemImage} /> */}
        <View style={styles.itemContent}>
          <Text style={styles.itemBrand}>Item</Text>
          <View>
            <Text style={styles.itemTitle}>Tiêu đề Item</Text>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Chi tiết
            </Text>
          </View>
          <View style={styles.itemMetaContainer}>
            {item.id && (
              <View
                style={[
                  styles.badge,
                  item.badge === 'NEW' && {backgroundColor: colors.green},
                ]}>
                <Text
                  style={{fontSize: 10, color: colors.white}}
                  //   styleName="bright"
                >
                  Mới
                </Text>
              </View>
            )}
            <Text style={styles.itemPrice}>9,000,000</Text>
          </View>
        </View>
      </View>
      <View style={styles.itemHr} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={{height: 50}}>
        <RNSRadioGroup
          underline
          //   style={styles.demoItem}
          items={['One', 'Two', 'Three', 'Four']}
          selectedIndex={indexSelect}
          onChange={(index: any) => setIndexSelect(index)}
        />
      </View>

      <ScrollView
        style={styles.ScrollView_container}
        contentContainerStyle={{paddingBottom: 20}}>
        <FlatList
          keyExtractor={(item, idx) => idx.toString()}
          style={{backgroundColor: colors.white, paddingHorizontal: 15}}
          data={[{id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}]}
          renderItem={renderRow}
        />
      </ScrollView>
    </View>
  );
}

export default Home;
const styles = StyleSheet.create({
  ScrollView_container: {
    flex: 1,
    backgroundColor: colors.bluish,
    paddingHorizontal: 15,
    // paddingTop: 20,
  },

  container: {
    // display: 'flex',
    // flexDirection: 'column',
    flex: 1,
    backgroundColor: colors.bluish,
  },

  demoItem: {
    marginVertical: 15,
  },

  itemContainer: {
    backgroundColor: 'white',
  },
  itemSubContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  itemImage: {
    height: 100,
    width: 100,
  },
  itemContent: {
    flex: 1,
    // paddingLeft: 15,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  itemBrand: {
    fontSize: 14,
    color: '#617ae1',
    paddingBottom: 5,
    // fontWeight: '600',
    fontFamily: fonts.primaryRegular,
  },
  itemTitle: {
    fontSize: 16,
    color: '#5F5F5F',
    textTransform: 'uppercase',
    fontFamily: fonts.primaryBold,
  },
  itemSubtitle: {
    fontSize: 12,
    color: '#a4a4a4',
    fontFamily: fonts.primaryRegular,
  },
  itemMetaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  itemPrice: {
    fontSize: 15,
    color: '#5f5f5f',
    textAlign: 'right',
    fontFamily: fonts.primaryRegular,
  },
  itemHr: {
    flex: 1,
    height: 1,
    backgroundColor: '#e3e3e3',
    marginRight: -15,
  },
  badge: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
