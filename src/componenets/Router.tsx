import { useRoutes, HookRouter } from 'hookrouter';
import { ArticleDetail } from '../pages/ArticleDetail';
import { HomePage } from '../pages/Home';
import { ProfilePage } from '../pages/Profile';
import { PostUpdate } from '../pages/PostUpdate';

const routes = {
    '/': () => <HomePage />,
    '/article/:id': ({ id }: HookRouter.QueryParams) => <ArticleDetail id={id} />,
    '/article/:id/update': ({ id }: HookRouter.QueryParams) => <PostUpdate id={id} />,
    '/article-new': () => <PostUpdate />,
    '/profile': () => <ProfilePage />,
};
	
export const RouterPage = () => {
    const routeResult = useRoutes(routes);
    
    return routeResult || <img src="https://http.cat/404" />;
}