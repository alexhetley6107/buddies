import compose from 'compose-function';
import { withTheme } from './with-theme';
import { withRouter } from './with-router';
import { withStore } from './with-redux';

export const withProviders = compose(withRouter, withTheme, withStore);
