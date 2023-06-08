

import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./styles.css";
import Counter from "./01/Counter";
import UserList from "./02/UserList";
import SearchUserList from "./03/SearchUserList";
import ThemeSwitch from "./05/ThemeSwitch";
import Timer from "./04/Timer";
import ReduxCounter from "./06/ReduxCounter";
import UseCounter from "./07/UseCounter";
import UseAsyncSample from "./08/UseAsyncSample";
import UseScroll from "./09/UseScroll";
import ArticleView from "./10/ArticleView";


const routes: [string, string, () => JSX.Element][] = [
  ["01 Counter (useState, useRef)","01 Counter", Counter],
  ["02 UserList (useState, fetch api)", "02 UserList",UserList],
  ["03 SearchUserList (useEffect, useMemo, memo)", "03 SearchUserList", SearchUserList],
  ["04 Timer (useCallback)", "04 Timer", Timer],
  ["05 ThemeSwitch (useContext, createContext)", "05 ThemeSwitch",ThemeSwitch],
  ["06 ReduxCounter (useReducer)","06 ReduxCounter", ReduxCounter],
  ["07 UseCounter (Customize hook)","07 UseCounter", UseCounter],
  ["08 UseAsyncSample (Customize hook)","08 UseAsyncSample", UseAsyncSample],
  ["09 UseScroll (Customize hook)","09 UseScroll", UseScroll],
  ["10 ArticleView (axios)","10 ArticleView", ArticleView],
];

export default function App() {
  return (

    <div className="app">
      <ul className="sider">
        {routes.map(([label,path], idx) => (
          <li key={idx}>
            <Link to={`/${(path as string).replace(" ", "/")}`}>{label}</Link>
          </li>
        ))}
      </ul>
      <div id="pageContainer" className="page-container">
      <Routes>
        {routes.map(([label, path, Component, additionalRoute = ""]) => (
          <Route
            key={label}
            path={`/${path.replace(" ", "/")}${additionalRoute}`}
            element={<Component />}
          />


        ))}
      </Routes>
      </div>

    </div>

  );
}
