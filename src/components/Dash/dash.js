import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, ViewPropTypes } from 'react-native'
import MeasureMeHOC from 'react-native-measureme'
import { getDashStyle, isStyleRow } from './util'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../config/color';

const Dash = (props) => {
	const isRow = isStyleRow(props.style)
	const length = isRow ? props.width : props.height
	const n = Math.ceil(length / (props.dashGap + props.dashLength))
	const calculatedDashStyles = getDashStyle(props)
	let dash = []
	for (let i = 0; i < n; i++) {
		dash.push(
			<View
				key={ i }
				style={ [
					calculatedDashStyles,
					props.dashStyle,
				] }
			/>
		)
	}
	return (
		<View
			onLayout={ props.onLayout }
			style={ [ props.style, isRow ? styles.dashRow : styles.dashColumn ] }
		>
			{ dash }
		</View>
	)
}

const styles = StyleSheet.create({
	dashRow: {
		flexDirection: 'row',
	},
	dashColumn: {
		flexDirection: 'column',
	},
})

Dash.propTypes = {
	style: ViewPropTypes.style,
	dashGap: PropTypes.number.isRequired,
	dashLength: PropTypes.number.isRequired,
	dashThickness: PropTypes.number.isRequired,
	dashColor: PropTypes.string,
	dashStyle: ViewPropTypes.style,
}

Dash.defaultProps = {
	dashGap: wp('2%'),
	dashLength: wp('2.5%'),
	dashThickness: 1,
	dashColor:colors.SemiLightGrey,
}

module.exports = MeasureMeHOC(Dash)