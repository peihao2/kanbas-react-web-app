import { Route, Routes } from "react-router";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";

export default function Kanbas() {
    return (
      <div id="wd-kanbas">
        <h1>Kanbas</h1>
        <table border={1} width="100%">
          <tr>
            <td valign="top">
              <KanbasNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route path="/Courses/1234/Home" element={<Courses />} />
                <Route path="/Dashboard" element={<Dashboard />} />
            </Routes>
                    </td>
                </tr>
            </table>
        </div>
    );
}
