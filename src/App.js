import React from 'react';
import { Container } from '@chakra-ui/react';
import { Switch , Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ExperiencePage from './pages/experience/experience.component';
import ProjectsPage from './pages/projects/projects.component';
import EducationPage from './pages/education/education.component';

function App() {
  return (
    <Container maxW="container.xl" pt={4}>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/education" component={EducationPage} />
        <Route path="/experience" component={ExperiencePage} />
        <Route path="/projects" component={ProjectsPage} />
        </Switch>
    </Container>
  );
}

export default App;
