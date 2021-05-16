import { useRoutes, HookRouter } from 'hookrouter';
import { ArticleDetail } from '../pages/ArticleDetail';
import { HomePage } from '../pages/Home';
import { ProfilePage } from '../pages/Profile';

const routes = {
    '/': () => <HomePage />,
    '/article/:id': ({ id }: HookRouter.QueryParams) => <ArticleDetail id={id} />,
    '/profile': () => <ProfilePage />,
};
	
export const RouterPage = () => {
    const routeResult = useRoutes(routes);
    
    return routeResult || <img src="https://http.cat/404" />;
}