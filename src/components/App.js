import React from "react";
import SplitPane from 'react-split-pane';
import { parseDiff, Diff, Hunk } from 'react-diff-view';
import './react-diff-view.css';
import './react-split.css';

import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import diff from "./data.js";

const DiffViewer = ({ diffText }) => {
  const files = parseDiff(diffText);

  const renderFile = ({ oldRevision, newRevision, type, hunks, oldPath, newPath }) => (
    <div key={oldRevision + '-' + newRevision} >
      <div>{oldPath} == {newPath}</div>
      <Diff viewType="split" diffType={type} hunks={hunks}>
        {hunks => hunks.map(hunk => <Hunk key={hunk.content} hunk={hunk} />)}
      </Diff>
    </div>
  );

  return (
    <div>
      {files.map(renderFile)}
    </div>
  );
};

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
      defaultSize={parseInt(localStorage.getItem('react-split-pos2') || 350, 10)}
      onChange={size => localStorage.setItem('react-split-pos2', size)}
        paneStyle={{
        overflowY: 'auto',
      }}
    >
      <div>task list</div>
      <DiffViewer diffText={diff} />
    </SplitPane>
  </SplitPane>
);

export default App;
