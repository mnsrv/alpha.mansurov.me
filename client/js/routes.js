import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import NoteListContainer from './components/notes/NoteListContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute />
    <Route path="notes" component={NoteListContainer}>
      <Route path=":slug" />
    </Route>
  </Route>
);
