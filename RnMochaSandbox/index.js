/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import './add.test';
import './error.test';
import './mult.test';

AppRegistry.registerComponent(appName, () => App);
