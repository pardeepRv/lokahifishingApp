import React, { PureComponent } from 'react';
import {
  FlatList,
  Image,
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { fonts, icons } from '../../../../../assets';
import { Button } from '../../../../components/common';
import { strings } from '../../../../localization';
import { colors } from '../../../../utilities/constants';
import { layout } from '../../../../utilities/layout';

export default class Accordian extends PureComponent {
  constructor(props) {
    console.log(props, 'props on accordian>>>>>>>>>>');


    super(props);
    this.state = {
      data: props.weateherArr,
      expanded: false,
      isLoading: false,
    };

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.emptyArr = [];
  }
  componentDidMount = () => {
    this.setState({
      data: this.props.weateherArr,
    });
  };

  sendSelectedValues = () => {
    const { getSelectedweather, navigation, getWeatherSendToApi } = this.props;

    const { data } = this.state;
    let arr = [];

    data.forEach(element => {
      if (element && element.weather_type && element.weather_type.length > 0) {
        element.weather_type.map((value, i) => {
          if (value && value.isSelected) {
            arr.push(value);
          }
        });
      }
    });

    let newArr = [];
    this.emptyArr.forEach(ev => {
      console.log(ev,'ev to be console');
      newArr.push({ ids: ev });
    });

    console.log(newArr, 'newArr to be send 111');

    console.log(arr, 'arr to be send');
    console.log(this.emptyArr, 'arr to be send 111');

    getSelectedweather(arr);
    getWeatherSendToApi(newArr);

    navigation.goBack();
  };

  _renderItem = ({ item, index }) => {
    return (
      <View style={{ flex: 1, backgroundColor: colors.white1 }}>
        <TouchableOpacity
          style={[styles.childRow]}
          onPress={() => this.onClick(index, item.id)}>
          <View
            style={{
              width: layout.size.width - 20,
              height: moderateScale(35),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={[styles.itemInActive]}>{item.value}</Text>
            {item.selected ? (
              <Image source={icons.ic_downA} style={styles.rightArrow} />
            ) : (
              <Image source={icons.ic_rightArrow} style={styles.rightArrow} />
            )}
          </View>
          {item &&
            item.selected && item.id &&
            item.weather_type &&
            item.weather_type.length
            ? item.weather_type.map((val, i) => {
              return (
                <TouchableOpacity
                  style={styles.childRow1}
                  key={i}
                  onPress={() => this.onClickInner(index, item.id, i, val.id, val.isSelected)}
                >
                  <Text style={[styles.font, styles.itemInActive]}>
                    {val.value}
                  </Text>

                  {val && val.isSelected ? (
                    <Image
                      source={icons.ic_done}
                      style={{
                        tintColor: colors.secondry,
                      }}
                    />
                  ) : (
                    <Image source={icons.ic_not_done} />
                  )}
                </TouchableOpacity>
              );
            })
            : null}
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    const { data } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={data}
          contentInset={{ bottom: 40 }}
          extraData={data}
          renderItem={this._renderItem}
          removeClippedSubviews={true}
          keyExtractor={item => item.id}
          ListFooterComponent={() => (
            <View
              style={{
                marginTop: moderateScale(10),
              }}>
              <Button
                style={{
                  backgroundColor: colors.secondry,
                  width: layout.size.width - 80,
                  alignSelf: 'center',
                }}
                label={strings.submit}
                onPress={() => this.sendSelectedValues()}
              />
            </View>
          )}
        />
      </View>
    );
  }

  onClick = (index, id) => {
    const temp = this.state.data.slice();
    temp[index].selected = !temp[index].selected;
    this.setState({ data: temp });
    console.log('temp :>> ', temp);
  };

  onClickInner = (index, id, idx, val_id, status) => {

    console.log(index, id, idx, val_id, status, 'index1', 'idx', "status");

    console.log(this.emptyArr, 'before this.emptyArr');

    if (status == false) {
      this.emptyArr.push([id]);

      this.emptyArr.forEach(elements => {
        console.log(elements, 'in loop 166');
        if (elements && elements.length <= 1) {
          return elements.push(val_id);
        }
      });
    }
    else {
      // this.emptyArr.pop();
      // this.emptyArr.splice(1, 1);
      this.emptyArr.forEach((elements, i) => {
        console.log(elements, 'in loop 176');

        if (elements[0] == id && elements[1] == val_id) {
          console.log('coming in else loop2', i);
          this.emptyArr.splice(i, 1);
        }
      });
    }

    console.log(this.emptyArr, 'after this.emptyArr');
    console.log('this.state.data.slice() :>> ', this.state.data.slice());
    const temp = this.state.data.slice();
    temp[index].weather_type[idx].isSelected =
      !temp[index].weather_type[idx].isSelected;
    // temp[index].weather_type[idx].isSelected = true;
    this.setState({ data: temp });
  };

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  };
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black1,
  },
  itemActive: {
    fontSize: 12,
    color: colors.red1,
  },
  itemInActive: {
    fontSize: 16,
    fontFamily: fonts.semiBold,
    color: colors.black1,
  },
  btnActive: {
    borderColor: colors.green2,
  },
  btnInActive: {
    borderColor: colors.grey15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
  },
  childRow: {
    paddingVertical: moderateScale(10),
    alignSelf: 'center',
  },
  childRow1: {
    flex: 1,
    padding: 15,
    paddingVertical: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  parentHr: {
    color: colors.white1,
    width: '100%',
  },
  childHr: {
    flex: 1,
  },
  colorActive: {
    borderColor: colors.green2,
  },
  colorInActive: {
    borderColor: colors.grey1,
  },
  rightArrow: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    tintColor: colors.black1,
  },
});
