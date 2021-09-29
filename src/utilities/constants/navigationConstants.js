import { Easing, Animated } from 'react-native';

//transition configuration for router sceens
const transitionConfig = () => ({
	screenInterpolator: sceneProps => {
		const { layout, position, scene } = sceneProps;
		const { index } = scene;
		const width = layout.initWidth;

		const inputRange = [index - 1, index, index + 1];

		const translateX = position.interpolate({
			inputRange,
			outputRange: ([width, 0, 0]),
		});

		return {
			transform: [
				{ translateX }
			],
		};
	},
	transitionSpec: {
		duration: 350,
		easing: Easing.out(Easing.poly(4)),
		timing: Animated.timing,
		useNativeDriver: true,
	},
});

const screenNames = {
	Login: 'Login',
	Signin:'Signin',
	Signup: 'Signup',
	HearFrom:'HearFrom',
	AboutMe:'AboutMe',
	AskWeight:'AskWeight',
	GoalWeight:'GoalWeight',
	ForgotPassword:'ForgotPassword'
};

export {
	transitionConfig,
	screenNames,
};
