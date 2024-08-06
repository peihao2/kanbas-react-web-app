import { Navigate, Route, Routes } from "react-router";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import TOC from "./TOC";
import Lab4 from "./Lab4";
import store from "./store";
import { Provider } from "react-redux";
import Lab5 from "./Lab5";

export default function Labs() {
  return (
    <Provider store={store}>
      <div>
        <h1>Welcome to Web Dev</h1>
        <h2>Peihao Li SEC 01</h2>
        <h1>Labs</h1>
        <TOC />
        <Routes>
          <Route path="/" element={<Navigate to="Lab1" />} />

          <Route path="/Lab1" element={<Lab1 />} />
          <Route path="/Lab2" element={<Lab2 />} />
          <Route path="/Lab3/*" element={<Lab3 />} />
          <Route path="/Lab4/*" element={<Lab4 />} />
          <Route path="/Lab5/*" element={<Lab5 />} />
        </Routes>
        <a href="https://github.com/peihao2/kanbas-react-web-app">GitHub</a>
      </div>
    </Provider>
  );
}
export {};
