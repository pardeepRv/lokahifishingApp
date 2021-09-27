import { Platform } from 'react-native';
import ic_active_activity from './icons/active-activity.png';
import ic_active_explore from './icons/active-explore.png';
import ic_active_female from './icons/active-female.png';
import ic_active_history from './icons/active-history-icon.png';
import ic_active_male from './icons/active-male.png';
import ic_active_meals from './icons/active-meals.png';
import ic_active_progress from './icons/active-progress.png';
import ic_active_refer from './icons/active-refer.png';
import ic_active_healthy from './icons/eating-healthy-graphics.png';
import ic_active_fitness from './icons/fitness-graphics.png';
import ic_active_money from './icons/money-graphics.png';
import ic_not_done from './icons/ic_not_done.png';
import ic_done from './icons/ic_done.png';
import ic_email from './icons/Message-icon.png';
import ic_lock from './icons/lock-icon.png';
import ic_male from './icons/inactive-male.png';
import ic_female from './icons/inactive-female.png';
import ic_signup_bg from './icons/signup_bg.png';
import ic_signin_bg from './icons/signin_bg.png';




const icons = {
    ic_male,
    ic_female,
    ic_lock,
    ic_email,
    ic_active_activity,
    ic_active_explore,
    ic_active_female,
    ic_active_history,
    ic_active_male,
    ic_active_meals,
    ic_active_progress,
    ic_active_refer,
    ic_active_healthy,
    ic_active_fitness,
    ic_active_money,
    ic_done,
    ic_not_done,
    ic_signup_bg,
    ic_signin_bg
};
// const fonts = Platform.select({
//     ios: {
//         regular: 'CircularStd-Book',
//         semiBold: 'CircularStd-Medium',
//         bold: 'CircularStd-Bold',
//         extraBold: 'CircularStd-Black',
//     },
//     android: {
//         regular: 'circular-book',
//         semiBold: 'circular-medium',
//         bold: 'circular-bold',
//         extraBold: 'circular-black',
//     }
// });

const fonts = Platform.select({
    ios: {
        regular: 'Montserrat-Regular',
        semiBold: 'Montserrat-SemiBold',
        bold: 'Montserrat-Bold',
        extraBold: 'Montserrat-Bold',
    },
    android: {
        regular: 'Montserrat-Regular',
        semiBold: 'Montserrat-SemiBold',
        bold: 'Montserrat-Bold',
        extraBold: 'Montserrat-Bold',
    }
});


export {
    fonts,
    icons
};
