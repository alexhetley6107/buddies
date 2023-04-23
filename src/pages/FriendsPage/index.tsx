import { MainLayout } from 'shared/ui';
import { Header, SideMenu } from 'widgets';

export const FriendsPage = () => {
  return (
    <MainLayout header={<Header />} navbar={<SideMenu />}>
      <div>FriendsPage</div>
    </MainLayout>
  );
};
