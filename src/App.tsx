

import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./styles.css";
import Counter from "./01/Counter";
import UserList from "./02/UserList";
import SearchUserList from "./03/SearchUserList";
import ThemeSwitch from "./05/ThemeSwitch";
import Timer from "./04/Timer";
import ReduxCounter from "./06/ReduxCounter";


const routes: [string, () => JSX.Element][] = [
  ["01 Counter", Counter],
  ["02 UserList", UserList],
  ["03 SearchUserList", SearchUserList],
  ["04 Timer", Timer],
  ["05 ThemeSwitch", ThemeSwitch],
  ["06 ReduxCounter", ReduxCounter],
];

export default function App() {
  return (

    <div className="app">
      <ul className="sider">
        {routes.map(([label], idx) => (
          <li key={idx}>
            <Link to={`/${(label as string).replace(" ", "/")}`}>{label}</Link>
          </li>
        ))}
      </ul>
      <div id="pageContainer" className="page-container">
      <Routes>
        {routes.map(([label, Component, additionalRoute = ""]) => (
          <Route
            key={label}
            path={`/${label.replace(" ", "/")}${additionalRoute}`}
            element={<Component />}
          />


        ))}
      </Routes>
      </div>

    </div>

  );
}
