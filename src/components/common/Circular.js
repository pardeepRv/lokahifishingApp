import React, { useContext, useEffect, useState } from 'react'
import CircularPicker from 'react-native-circular-picker'
import { Text } from 'react-native'
import { fonts } from '../../../assets';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../utilities/constants';


const Circular = () => {
    const [price, setPrice] = useState(0);
    const handleChange = (v) => setPrice((v * 0.24).toFixed(0));


	return (
		<CircularPicker
			size={270}
			strokeWidth={40}
			steps={[4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100]}
			gradients={{
				0: ['rgb(0, 122, 255)', 'rgb(10, 132, 255)'],
			}}
			onChange={handleChange}
		>
			<Text style={{ textAlign: 'center', fontSize: moderateScale(24), fontFamily:fonts.bold, color:colors.primary}}>{price} hr(s)</Text>
		</CircularPicker>
	)
}
export default Circular
