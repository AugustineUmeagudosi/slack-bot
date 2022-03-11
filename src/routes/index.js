import botRoutes from './botRouter';
import welcomeRoutes from './welcome';

const baseUrl = '/api/v1';
const routes = app => {
  app.use('/bot', botRoutes);
  app.use(`${baseUrl}`, welcomeRoutes);
};

export default routes;
