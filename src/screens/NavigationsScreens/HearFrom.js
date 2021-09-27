import React, { PureComponent } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';

import {
    moderateScale,
    verticalScale
} from 'react-native-size-matters';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { colors, screenNames } from '../../utilities/constants';
import { fonts, icons } from '../../../assets';
import { layout } from '../../utilities/layout';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';

class HearFrom extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [
                { text: 'In social media', isSelected: false },
                { text: 'From a person I follow', isSelected: false },
                { text: 'From my friend', isSelected: false },
                { text: 'offline advertising', isSelected: false },
                { text: 'From other fitness club', isSelected: false },
                { text: 'Other', isSelected: false },
            ]
        };
    }
    componentDidMount() {

    }

    toggleView(item, index) {
        const { dataSource } = this.state;
        const array = dataSource.map((item) => {
            const newItem = Object.assign({}, item);
            // newItem.isSelected = false;
            return newItem;
        });
        array[index].isSelected = !array[index].isSelected;
        this.setState(() => {
            return {
                dataSource: array
            }
        });
    }
    renderSeparator = () => (
        <View
            style={{
                backgroundColor: colors.grey2,
                height: 0.5,
            }}
        />
    );

    renderItemView = ({ item, index, }) => {
        return (
            <TouchableOpacity
                style={{
                    margin: moderateScale(10),
                    padding: 5,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
                onPress={this.toggleView.bind(this, item, index)}
            >
                <Text
                    style={{
                        fontFamily: fonts.regular,
                        fontSize: RFValue(14)
                    }}
                >
                    {item.text}
                </Text>

                {
                    item && item.isSelected ?
                        <Image source={
                            icons.ic_done
                        }
                            style={{
                                tintColor: colors.primary
                            }}
                        />
                        :
                        <Image source={
                            icons.ic_not_done
                        } />
                }
            </TouchableOpacity>
        )

    }

    render() {
        const { dataSource } = this.state;
        const { navigation } = this.props;

        return (
            <SafeAreaView
                style={{
                    flex: 1
                }}
            >
                <View style={{
                    flex: 1
                }}>

                    <FlatList
                        extraData={dataSource}
                        data={dataSource}
                        contentInset={{
                            top: moderateScale(30)
                        }}
                        ItemSeparatorComponent={this.renderSeparator}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this.renderItemView.bind(this)}
                        ListHeaderComponent={() => {
                            return (
                                <Text style={{
                                    fontFamily: fonts.bold,
                                    fontSize: RFValue(22),
                                    marginTop: moderateScale(30),
                                    maxWidth: layout.size.width / 2,
                                    alignSelf: 'center'
                                }}>
                                    Where did you hear about us?
                        </Text>
                            )
                        }}

                        ListFooterComponent={() => {
                            return (
                                <TouchableOpacity
                                    onPress={() => navigation.navigate(screenNames.Login)}
                                    style={styles.nextDoneBtn}>
                                    <Text
                                        style={{
                                            fontFamily: fonts.semiBold,
                                            color: colors.white1
                                        }}
                                    >
                                        Complete
                                       </Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white1,
    },
    subContainer: {
        paddingHorizontal: moderateScale(15),
        marginLeft: 15
    },
    subContentContainer: {
        paddingBottom: moderateScale(40),
    },
    nextDoneBtn: {
        height: 44,
        width: layout.size.width - 50,
        backgroundColor: colors.primary,
        borderRadius: moderateScale(5),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: moderateScale(40)
    },

});
export default HearFrom;