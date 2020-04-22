import React from "react";
import { parseDiff, Diff, Hunk } from 'react-diff-view';
import './react-diff-view.css';

import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const diff = `
diff --git a/src/actions/index.js b/src/actions/index.js
index 8982892..3030422 100644
--- a/src/actions/index.js
+++ b/src/actions/index.js
@@ -1,9 +1,4 @@
 let nextTodoId = 0;
-export const resetTodos = data => ({
-  type: "RESET_TODOS",
-  data,
-});
-
 export const addTodo = text => ({
   type: "ADD_TODO",
   id: nextTodoId++,
diff --git a/src/components/ErrorHandling.js  b/src/components/ErrorHandling.js
deleted file mode 100644
index 246c584..0000000
--- a/src/components/ErrorHandling.js
+++ /dev/null
@@ -1,17 +0,0 @@
-import React from 'react'
-
-export default class ErrorBoundary extends React.Component {
-  state = { hasError: false, error: null }
-  static getDerivedStateFromError(error) {
-    return {
-      hasError: true,
-      error
-    }
-  }
-  render() {
-    if (this.state.hasError) {
-      return this.props.fallback
-    }
-    return this.props.children
-  }
-}
\ No newline at end of file
diff --git a/src/containers/VisibleTodoList.js b/src/containers/VisibleTodoList.js
index 5db4ef2..574a08a 100644
--- a/src/containers/VisibleTodoList.js
+++ b/src/containers/VisibleTodoList.js
@@ -1,7 +1,5 @@
-import React, { useContext, Suspense } from "react";
-import useSWR from 'swr'
-
-import { toggleTodo, resetTodos } from "../actions";
+import React, { useContext } from "react";
+import { toggleTodo } from "../actions";
 import TodoList from "../components/TodoList";
 import { VisibilityFilters } from "../actions";
 import StoreContext from "../store/StoreContext";
@@ -20,19 +18,11 @@ const getVisibleTodos = (todos, filter) => {
 };

 export default function VisibleTodoList() {
-  const [{ visibilityFilter }, dispatch] = useContext(StoreContext);
-  const { todos } = useSWR('/api/data', fetcher, {
-    suspense: true,
-    onSuccess: (data, key, config) => {
-      dispatch(resetTodos(data))
-    },
-  })
+  const [{ todos, visibilityFilter }, dispatch] = useContext(StoreContext);
   return (
-    <Suspense fallback={<div>loading...</div>}>
-      <TodoList
-        todos={getVisibleTodos(todos, visibilityFilter)}
-        toggleTodo={id => dispatch(toggleTodo(id))}
-      />
-    </Suspense>
+    <TodoList
+      todos={getVisibleTodos(todos, visibilityFilter)}
+      toggleTodo={id => dispatch(toggleTodo(id))}
+    />
   );
 }
diff --git a/src/libs/fetch.js b/src/libs/fetch.js
deleted file mode 100644
index b7cf0aa..0000000
--- a/src/libs/fetch.js
+++ /dev/null
@@ -1,6 +0,0 @@
-import fetch from 'isomorphic-unfetch'
-
-export default async function (...args) {
-  const res = await fetch(...args)
-  return res.json()
-}
\ No newline at end of file
diff --git a/src/reducers/todos.js b/src/reducers/todos.js
index c595753..5b2ac03 100644
--- a/src/reducers/todos.js
+++ b/src/reducers/todos.js
@@ -1,9 +1,5 @@
 const todos = (state = [], action) => {
   switch (action.type) {
-    case "RESET_TODOS":
-      return [
-        ...action.data,
-      ];
     case "ADD_TODO":
       return [
         ...state,`;


const DiffViewer = ({ diffText }) => {
  const files = parseDiff(diffText);

  const renderFile = ({ oldRevision, newRevision, type, hunks, oldPath, newPath}) => (
    <div key={oldRevision + '-' + newRevision} >
      <div>{oldPath}</div>
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
  <div>
    <h1>TODO List</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />

    <DiffViewer diffText={diff} />
  </div>
);

export default App;
