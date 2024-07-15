import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <input id="wd-search-assignment" placeholder="Search for Assignments" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
            <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button>
            </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                        A1 - ENV + HTML
                        <LessonControlButtons />
                    </a>
                    <br />
                    <span className="wd-multiple-modules">Multiple Modules</span> | <span className="wd-bold-text">Not available until</span> May 6 at 12:00am |
                    <br />
                    <span className="wd-bold-text">Due</span> May 13 at 11:59pm | 100 pts
                </li>
                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/124">
                        A2 - CSS + BOOTSTRAP
                        <LessonControlButtons />
                    </a>
                    <br />
                    <span className="wd-multiple-modules">Multiple Modules</span> | <span className="wd-bold-text">Not available until</span> May 13 at 12:00am |
                    <br />
                    <span className="wd-bold-text">Due</span> May 20 at 11:59pm | 100 pts
                </li>
                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/125">
                        A3 - JAVASCRIPT + REACT
                        <LessonControlButtons />
                    </a>
                    <br />
                    <span className="wd-multiple-modules">Multiple Modules</span> | <span className="wd-bold-text">Not available until</span> May 20 at 12:00am |
                    <br />
                    <span className="wd-bold-text">Due</span> May 27 at 11:59pm | 100 pts
                </li>
            </ul>
        </div>
    );
}
