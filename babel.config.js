module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				alias: {
					'@root': './',
					'@components': './src/components',
					'@assets': './src/assets',
					'@constants': './src/constants',
					'@interfaces': './src/interfaces',
					'@navigation': './src/navigation',
					'@screens': './src/screens'
				}
			}
		],
		'react-native-reanimated/plugin'
	]
};
