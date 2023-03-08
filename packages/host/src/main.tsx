import { initFederation } from '@softarc/native-federation';

(async () => {
  await initFederation({
    'remote-react': 'http://localhost:4174/remoteEntry.json',
  });

  await import('./bootstrap');
})();
