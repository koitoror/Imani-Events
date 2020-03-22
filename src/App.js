import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.css';
// import  HeaderExampleImage  from './components/Header'
// import  FormExampleFieldControlId  from './components/Login'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import {Provider} from 'react-redux';
import routes from './routes';
// import store from './store';

const switchRoutes = (
  <Switch>
    {routes
      .map((prop, key) => (
        <Route
          exact
          path={prop.path}
          component={prop.component}
          key={key}
        />
      ))}
  </Switch>
);


// function App() {
//   return (
//     <div className="App">
//       <HeaderExampleImage />
//       <FormExampleFieldControlId />
//       <div> Hello </div>  
//     </div>
//   );
// }

const App = () => (
  // <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        {switchRoutes}
      </div>
    </Router>
  // </Provider>
);

export default App;
