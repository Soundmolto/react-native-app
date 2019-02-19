import { StyleSheet, StatusBar } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

const commonDarkBG = '#111111';

export const PaperTheme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: '#1a1a1a',
		accent: '#c67dcb',
		background: commonDarkBG,
		surface: commonDarkBG,
	},
	dark: true
};

export const theme = {
	...PaperTheme,
	statusBarHeight: StatusBar.currentHeight,
	backgroundColor: commonDarkBG
};