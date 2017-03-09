import React from 'react';
import ReactDOM from 'react-dom';
import ConfigureStore from "./stores/configure_store";
import * as actions from "./actions"
import Stream from "./components/stream";

const tracks = [
  {
    title: "track 1"
  },
  {
    title: "track 2"
  }
];

const store = ConfigureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
  <Stream />,
  document.getElementById('root')
);
