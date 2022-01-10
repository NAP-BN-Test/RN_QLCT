import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  currency,
  getParsedDateTime,
  ScreenHeight,
  useAppDispatch,
} from '../../../redux/hooks';
import colors from '../../../assets/css/color';
import RNSRadioGroup from '../../../component/radiogroup/radiogroupCpn';
import fonts from '../../../assets/font/fonts';
import {
  getSpendingByDay,
  getSpendingByMonth,
  getSpendingByWeek,
  postSpendingByID,
} from '../../../features/spending';
import {useSelector} from 'react-redux';
import {spendingStore} from '../../../features';
import {spendingType} from '../../../types/spendingType';
import Loading from '../../../component/loading/loading';
import stylesGlobal from '../../../assets/css/cssGlobal';
function Home() {
  const dispatch = useAppDispatch();
  const [indexSelect, setIndexSelect] = useState(0);

  const SpendingBD = useSelector(spendingStore);
  console.log('SpendingBD', SpendingBD);

  useEffect(() => {
    switch (indexSelect) {
      case 0:
        dispatch(getSpendingByDay());
        break;

      case 1:
        dispatch(getSpendingByWeek());
        break;

      case 2:
        dispatch(getSpendingByMonth());
        break;

      case 3:
        // dispatch(getSpendingByDay());
        break;

      default:
        break;
    }
  }, [indexSelect]);

  const renderRow = ({item}: any) => (
    <TouchableOpacity
      activeOpacity={0.6}
      key={item.id}
      style={styles.itemContainer}
      onPress={() => {
        // dispatch(postSpendingByID(item.id));
      }}>
      <View style={styles.itemSubContainer}>
        {/* <Image source={{uri: item.image}} style={styles.itemImage} /> */}
        <View style={styles.itemContent}>
          <Text style={[styles.itemBrand, {fontSize: 16}]}>{item.namect}</Text>
          <View>
            {/* <Text style={styles.itemTitle}>Ghi chú:</Text> */}
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              Ghi chú: Không có ghi chú
            </Text>
          </View>
          <View style={styles.itemMetaContainer}>
            {item.id && (
              <View style={[styles.badge, {backgroundColor: colors.green}]}>
                <Text
                  style={{fontSize: 10, color: colors.white}}
                  //   styleName="bright"
                >
                  {getParsedDateTime(item.timect)}
                </Text>
              </View>
            )}
            <Text style={styles.itemPrice}>
              {/* {currency(SpendingBD.totalmoney)}  */}
              {item.moneyct.toLocaleString('vi-VN')}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.itemHr} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={require('../../../assets/img/background.png')}
        style={styles.bgImage}
        resizeMode="cover"> */}
      <View style={{height: 50}}>
        <RNSRadioGroup
          underline
          //   style={styles.demoItem}
          items={['Hôm nay', 'Tuần', 'Tháng', 'Khoảng ngày']}
          selectedIndex={indexSelect}
          onChange={(index: any) => setIndexSelect(index)}
        />
      </View>


      {/* Render danh sách */}

      {SpendingBD.loading ? (
        // Loading
        <View style={[stylesGlobal.flex_center, {height: '80%'}]}>
          <Loading />
        </View>
      ) : (
        <View style={styles.ScrollView_container}>
          <FlatList
            keyExtractor={(item, idx) => item.id.toString()}
            style={{backgroundColor: colors.white, paddingHorizontal: 15}}
            data={SpendingBD.listspending}
            renderItem={renderRow}
          />
        </View>
      )}

      {/* </ImageBackground> */}
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

  bgImage: {
    flex: 1,
    width: '100%',
    height: '113%',
    // marginHorizontal: -20,
  },

  container: {
    // display: 'flex',
    // flexDirection: 'column',
    flex: 1,
    // backgroundColor: colors.bluish,
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
