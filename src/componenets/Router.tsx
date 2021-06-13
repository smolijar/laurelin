import { ArticleDetail } from '../pages/ArticleDetail';
import { HomePage } from '../pages/Home';
import { ProfilePage } from '../pages/Profile';
import { PostUpdate } from '../pages/PostUpdate';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export const RouterPage = () => <Switch>
    <Route path="/article/:id/update">
        <PostUpdate />,
    </Route>
    <Route path="/article/:id">
        <ArticleDetail />
    </Route>
    
    <Route path="/article-new">
        <PostUpdate />
    </Route>
    <Route path="/profile">
        <ProfilePage />
    </Route>
    <Route exact path="/">
        <HomePage />
    </Route>
    <Route path="*">
        <img src="https://http.cat/404" />
    </Route>
</Switch>