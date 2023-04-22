import { MainLayout } from 'shared/ui';
import { Header, Navigation } from 'widgets';

export const PostsPage = () => {
  return (
    <MainLayout header={<Header />} navbar={<Navigation />}>
      <div>PostsPage</div>
    </MainLayout>
  );
};
