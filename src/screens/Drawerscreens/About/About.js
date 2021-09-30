import React from 'react';
import { SafeAreaView, StyleSheet, Text, ImageBackground, Dimensions, ScrollView, View , Image} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { icons } from '../../../../assets';
import { colors } from '../../../utilities/constants';
import { layout } from '../../../utilities/layout';
import styles from './styles';

const About = () => {
	const FishingTools = [
		'Live Catch Report: What kind of fish are being caught, where they are being caught, what they were caught on, when and how they were caught',
		'Educational How To Videos on boating and fishing demonstrated by experts produced professionally in a simple, common-sense style',
		'News Feed on Current Issues with push notification for action needed by members',
		'Events and Meetings: Fishing and boating related community events',
		'Fishing Tournaments: Name, date and contact person',
		'Photo Gallery of recent catches and some historical shots just for fun',
		'Vessel assistance push notification safety feature: Red Alert-Mayday; Yellow Alert-Dead on the water',
	];

	const FishingToolsMapped = FishingTools.map(tool => {
		return (
			<View style={styles.listItem}>
				<Image  source={icons.signin_bg_ic}  color={colors.primary} style={{ left:10,height:moderateScale(30) , width:moderateScale(30)}} />
				<Text style={styles.text}>{tool} </Text>
			</View>
		);
	});

	return (
		<ImageBackground source={icons.ic_signin_bg} style={styles.image}>
			<SafeAreaView style={styles.content}>
				<ScrollView>
					<Text style={[styles.text, styles.textItem, styles.title]}>Lokahi Fishing - About Us</Text>
					<Text style={[styles.text, styles.textItem]}>
						Lokahi Fishing is a communication tool to assist fishermen in having more fun sharing knowledge and information to catch more fish
						with less effort! Fishermen can unite in greater numbers by being more informed of the news and issues affecting our fisheries and
						taking effective action guided by our team of expert consultants to maintain and grow healthy fishing stocks for our generation and
						future generations of our children! Remember, Sustainability means "Eat and benefit from well managed fisheries Forever!".
					</Text>
					<Text style={[styles.text, styles.textItem, styles.toolsTitle]}>Lokahi Fishing Tools:</Text>
					<Text style={[styles.text, styles.textItem]}>Data feeds for weather, wind sun, moon, tide, sea surface temperature and currents</Text>
					<View style={styles.list}>{FishingToolsMapped}</View>
				</ScrollView>
			</SafeAreaView>
		</ImageBackground>
	);
};

export default About;


