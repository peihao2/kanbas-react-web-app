import { useLocation } from "react-router";
export default function TOC() {
  const location = useLocation();
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a id="wd-a" href="#/Labs" className="nav-link">
          Labs
          <br />
        </a>
      </li>
      <li className="nav-item">
        <a
          id="wd-a1"
          href="#/Labs/Lab1"
          className={`nav-link ${
            location.pathname.includes("Lab1") ? "active" : ""
          }`}
        >
          Lab 1
        </a>
      </li>
      <li className="nav-item">
        <a
          id="wd-a2"
          href="#/Labs/Lab2"
          className={`nav-link ${
            location.pathname.includes("Lab2") ? "active" : ""
          }`}
        >
          Lab 2
        </a>
      </li>
      <li className="nav-item">
        <a
          id="wd-a3"
          href="#/Labs/Lab3"
          className={`nav-link ${
            location.pathname.includes("Lab3") ? "active" : ""
          }`}
        >
          Lab 3
        </a>
      </li>

      <li className="nav-item">
        <a
          id="wd-a4"
          href="#/Labs/Lab4"
          className={`nav-link ${
            location.pathname.includes("Lab4") ? "active" : ""
          }`}
        >
          Lab 4
        </a>
      </li>

      <li className="nav-item">
        <a
          id="wd-a5"
          href="#/Labs/Lab5"
          className={`nav-link ${
            location.pathname.includes("Lab5") ? "active" : ""
          }`}
        >
          Lab 5
        </a>
      </li>

      <li className="nav-item">
        <a id="wd-a3" href="#/Kanbas" className="nav-link">
          Kanbas
        </a>
      </li>
      <li className="nav-item">
        <a
          id="wd-a3"
          target="_blank"
          href="https://github.com/peihao2/kanbas-react-web-app"
          className="nav-link"
        >
          GitHub
        </a>
      </li>
    </ul>
  );
}
