Promise.all([
  // loadRemoteEntry('http://localhost:5000/remoteEntry.js', 'ngMfNotification'),
])
  .catch((err) => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));
