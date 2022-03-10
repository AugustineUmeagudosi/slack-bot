import botRoutes from './botRouter';
import welcomeRoutes from './welcome';

const baseUrl = '/api/v1';
const routes = app => {
  app.use(`${baseUrl}`, welcomeRoutes);
  app.use(`${baseUrl}/bot`, botRoutes);
};

export default routes;
