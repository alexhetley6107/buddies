import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';
import { NotFoundPage } from './NotFoundPage';
import { MyPage } from './MyPage';
import { MessagesPage } from './MessagesPage';
import { PostsPage } from './PostsPage';
import { FullPostPage } from './FullPostPage';
import { FriendsPage } from './FriendsPage';
import { Header, Navigation } from 'widgets';

const commonRoutes = [
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/*', element: <NotFoundPage /> },
];

const privateRoutes = [
  { path: '/', element: <MyPage /> },
  { path: '/friends', element: <FriendsPage /> },
  { path: '/messages', element: <MessagesPage /> },
  { path: '/posts', element: <PostsPage /> },
  { path: '/full-post', element: <FullPostPage /> },
];

export const Routing = () => {
  return (
    <Routes>
      {commonRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}

      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
