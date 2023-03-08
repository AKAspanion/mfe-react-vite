const { withNativeFederation, shareAll } = require('@softarc/native-federation/build');

module.exports = withNativeFederation({
  name: 'remote-react',
  exposes: {
    './react-app': './src/App.tsx',
  },
  shared: shareAll(),
  skip: ['react-dom/server', 'react-dom/server.node'],
});
