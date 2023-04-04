import { initFederation, loadRemoteModule } from '@softarc/native-federation';
import React from 'react';
const ReactApp = React.lazy(async () => {
  try {
    await initFederation({
      'remote-react': 'http://localhost:4174/remoteEntry.json',
    });
    return await loadRemoteModule('remote-react', './react-app');
  } catch (error) {
    return import('../components/HostError');
  }
});

const ReactRemote = () => {
  return (
    <React.Suspense fallback="loading...">
      <ReactApp />
    </React.Suspense>
  );
};

export default ReactRemote;
