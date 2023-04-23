import { MainLayout } from 'shared/ui';
import { Header, SideMenu } from 'widgets';

export const PostsPage = () => {
  return (
    <MainLayout header={<Header />} navbar={<SideMenu />}>
      <div>PostsPage</div>
    </MainLayout>
  );
};
