App.accessRule('http://*');
App.accessRule('https://*');
App.accessRule('*');
App.accessRule('https://*.googleapis.com/*');
App.accessRule('https://*.google.com/*');
App.accessRule('https://*.gstatic.com/*');
App.accessRule('https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js', {
  'minimum-tls-version': 'TLSv1.0',
  'requires-forward-secrecy': false,
});
App.accessRule('https://maps.googleapis.com');

App.info({
  id: 'com.smarttree.recreacion.desarrollo',
  name: 'Casper recreación',
  version: '0.1.1',
  description: 'Todo un mundo de diversión',
  author: 'Smarttree',
  email: 'desarrollo@smarttree.co',
  website: 'http://smarttree.co'
});
// Set up resources such as icons and launch screens.
App.icons({
  'android_mdpi': 'recursos/android_mdpi.icon.png',
  'android_hdpi': 'recursos/android_hdpi.icon.png',
  'android_xhdpi': 'recursos/android_xhdpi.icon.png',
  'android_xxhdpi': 'recursos/android_xxhdpi.icon.png',
  'android_xxxhdpi': 'recursos/android_xxxhdpi.icon.png'
});
App.launchScreens({
  'android_mdpi_portrait': 'recursos/android_mdpi_portrait.splash.png',
  'android_mdpi_landscape': 'recursos/android_mdpi_landscape.splash.png',
  'android_hdpi_portrait': 'recursos/android_hdpi_portrait.splash.png',
  'android_hdpi_landscape': 'recursos/android_hdpi_landscape.splash.png',
  'android_xhdpi_portrait': 'recursos/android_xhdpi_portrait.splash.png',
  'android_xhdpi_landscape': 'recursos/android_xhdpi_landscape.splash.png',
  'android_xxhdpi_portrait': 'recursos/android_xxhdpi_portrait.splash.png',
  'android_xxhdpi_landscape': 'recursos/android_xxhdpi_landscape.splash.png',
});
// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0x573081ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');
// Pass preferences for a particular PhoneGap/Cordova plugin
App.configurePlugin('com.phonegap.plugins.facebookconnect', {
  APP_ID: '1318056228245794',
  API_KEY: '992a9a64063afe9c81095eda3ab012a5',
  APP_NAME: 'casper-recreacion'
});

App.appendToConfig(`
  <universal-links>
    <host name="https://casper-recreacion.herokuapp.com/  " />
  </universal-links>
`);
