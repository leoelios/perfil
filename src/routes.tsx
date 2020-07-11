import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/mainPage/mainPage';
import ProjectsPage from './pages/projectsPage';

// Global Pages of application

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/projetos">
          <ProjectsPage />
        </Route>
      </Switch>
    );
  }
}

export default Routes;
