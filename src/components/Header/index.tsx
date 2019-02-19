import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Appbar } from 'react-native-paper';
import Sidebar from '../Sidebar';

export class Headerbar extends Component {
	_goBack = () => console.log('Went back');

	_onSearch = () => console.log('Searching');

	_onMore = () => console.log('Shown more');

	render () {
		return (
			<>
				<StatusBar translucent={true} backgroundColor={`rgba(0,0,0,0)`} />
				<Appbar.Header statusBarHeight={StatusBar.currentHeight}>
					<Appbar.BackAction onPress={this._goBack} />
					<Appbar.Content title="Soundmolto" subtitle="Yeah" />
					<Appbar.Action icon="search" onPress={this._onSearch} />
					<Appbar.Action icon="more-vert" onPress={this._onMore} />
				</Appbar.Header>
				<Sidebar />
			</>
		);
	}
}
