import { useRoutes } from 'hookrouter';
import { HomePage } from '../pages/Home';
import { ProfilePage } from '../pages/Profile';

const routes = {
    '/': () => <HomePage />,
    '/profile': () => <ProfilePage />,
};
	
export const RouterPage = () => {
    const routeResult = useRoutes(routes);
    
    return routeResult || <img src="https://http.cat/404" />;
}