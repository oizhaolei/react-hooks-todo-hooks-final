import React from "react";
import SplitPane from 'react-split-pane';
import '../react-diff-view.css';
import '../react-split.css';

import Footer from "./Footer";
import DiffViewer from "../containers/DiffViewer";

import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
  <SplitPane
    split="vertical"
    minSize={250}
    defaultSize={parseInt(localStorage.getItem('react-split-pos1') || 250, 10)}
    onChange={size => localStorage.setItem('react-split-pos1', size)}
    paneStyle={{
      overflowY: 'auto',
    }}
  >
    <div>
      <h1>TODO List</h1>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
    <SplitPane
      split="vertical"
      minSize={250}
      primary="second"
      defaultSize={parseInt(localStorage.getItem('react-split-pos2') || 0, 10) || '75%'}
      onChange={size => localStorage.setItem('react-split-pos2', size)}
      paneStyle={{
        overflowY: 'auto',
      }}
    >
      <div>task list</div>
      <DiffViewer />
    </SplitPane>
  </SplitPane>
);

export default App;
