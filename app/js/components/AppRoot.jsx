import React from 'react';
import { Provider } from 'react-redux';

import BookmarkForm from './BookmarkForm.jsx';
import BookmarkList from './BookmarkList.jsx';
import store from '../store';


const BookmarkApp = () => (
  <div>
    <BookmarkForm />
    <BookmarkList />
  </div>
);

export default (
  <Provider store={store}>
    <BookmarkApp />
  </Provider>
)
