/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { PaperTheme, theme } from '../../Stylesheet';

// Local stylesheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: theme.backgroundColor,
		color: PaperTheme.dark ? '#ffffff' : '#000000'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 0,
		color: PaperTheme.dark ? '#ffffff' : '#000000',
	},
	instructions: {
		textAlign: 'center',
		color: PaperTheme.dark ? '#ffffff' : '#000000',
		marginBottom: 5,
	}
});

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

export default class Home extends Component<{}> {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>This be the homepage</Text>
				<Text style={styles.instructions}>{instructions}</Text>
			</View>
		);
	}
}