/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {  StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Headerbar } from '../Header';
import { PaperTheme, theme } from '../../Stylesheet';
import { createAppContainer } from 'react-navigation';
import { AppNavigator } from '../Navigation';

type Props = {};

const Navigator = createAppContainer(AppNavigator)

export default class App extends Component<Props> {

	render() {
		return (
			<PaperProvider theme={PaperTheme}>
				<Headerbar />

				<Navigator />
			</PaperProvider>
		);
	}
}