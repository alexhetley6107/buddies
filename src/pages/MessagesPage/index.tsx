import { MainLayout } from 'shared/ui';
import { Header, SideMenu } from 'widgets';

export const MessagesPage = () => {
  return (
    <MainLayout header={<Header />} navbar={<SideMenu />}>
      <div>MessagesPage</div>
    </MainLayout>
  );
};
