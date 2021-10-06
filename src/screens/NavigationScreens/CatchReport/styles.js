import { StyleSheet } from 'react-native';
import { fonts } from '../../../../assets';


export default StyleSheet.create({
    listView: {
        margin: 10,
        padding: 10,
    },
    viewStyle: {
        flexDirection: 'row',
        flex: 0.9,
        justifyContent: 'center'
    },
    nomatch: {
        alignSelf: 'center',
        marginTop: 20,
        fontFamily: fonts.semiBold,
    },
});
