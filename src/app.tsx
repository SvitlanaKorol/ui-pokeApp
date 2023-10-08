import { createRoot } from 'react-dom/client';
import './styles/reset.scss';
import './styles/index.scss';
import { store } from './redux/configureStore';
import { Provider } from 'react-redux';
import AppRouter from './routes/appRouter';

const root = document.getElementById('root');

if (root) {
  const rootElement = createRoot(root);
  rootElement.render(
    <Provider store={store}>
      <AppRouter />
    </Provider>,
  );
}
