import { MainLayout } from 'shared/ui';
import { Header, SideMenu } from 'widgets';

export const FullPostPage = () => {
  return (
    <MainLayout header={<Header />} navbar={<SideMenu />}>
      <div>FullPostPage</div>
    </MainLayout>
  );
};
