import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './reducers/index';
import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/layout';
import 'dayjs/locale/en'; // 组件库国际化
import dayjs from 'dayjs';
const Resume = React.lazy(() => import('./views/resume'));
const Home = React.lazy(() => import('./views/home'));

dayjs.locale('zh-cn');
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Suspense fallback={<div>loading</div>}>
            <Layout>
              <Switch>
                <Redirect exact from="/" to="/resume"></Redirect>
                <Route path="/resume" component={Resume}></Route>
                <Route path="/home" component={Home}></Route>
              </Switch>
            </Layout>
          </Suspense>
        </div>
      </BrowserRouter>
    </Provider>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
