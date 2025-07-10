import livereload from 'livereload';
import connectLivereload from 'connect-livereload';
import path from 'path';

export function setupLiveReload(app) {
  if (process.env.NODE_ENV !== 'production') {
    const liveReloadServer = livereload.createServer();
    liveReloadServer.watch(path.join(process.cwd(), 'views'));

    liveReloadServer.server.once('connection', () => {
      setTimeout(() => {
        liveReloadServer.refresh('/');
      }, 100);
    });

    app.use(connectLivereload());
  }
}
