import { Routing } from 'pages';
import { withProviders } from './providers';
import 'shared/config/i18n';

const App = () => {
  return <Routing />;
};

export default withProviders(App);
