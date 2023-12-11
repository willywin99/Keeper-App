import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <App/>, 
  document.getElementById('root')
);

// CHALLENGE
// 1. Implement the add note functionality.
// -. Create a constant that keeps track of the title and content
// -. Pass the new note back to the App.
// -. Add new note to an Array.
// -. Take array and render separate Note components for each item.

// 2. Implement the delete note functionality.
// -. Callback from the Note component to trigger a delete function.
// -. Use the filter function out the item that needs deletion.
// -. Pass a id over the Note component, pass it back to the App when deleting.
