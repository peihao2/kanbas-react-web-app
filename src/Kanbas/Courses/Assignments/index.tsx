import { useParams } from "react-router";
import { VscNotebook } from "react-icons/vsc";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { assignments } from "../../Database";
import { Link } from "react-router-dom";

export default function Assignments() {
    const { cid } = useParams();
    console.log("Current Course ID:", cid);

    const courseAssignments = assignments.filter((assignment) => assignment.course === cid);
    console.log("Filtered Assignments:", courseAssignments); // Debugging filtered assignments

    return (
        <div id="wd-assignments">
            <input id="wd-search-assignment" placeholder="Search for Assignments" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
            <h3 id="wd-assignments-title">
                ASSIGNMENTS <span className="wd-percentage">40% of Total</span> <button>+</button>
            </h3>
            <ul id="wd-assignment-list">
                {courseAssignments.map((assignment) => (
                    <li key={assignment._id} className="wd-assignment-list-item">
                        <div className="wd-assignment-header">
                            <VscNotebook className="wd-assignment-icon" />
                            <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                className="custom-link">
                                <h4 className="fw-bold">{assignment._id}: {assignment.title}</h4>
                            </Link>
                            {/* <a
                                className="wd-assignment-link"
                                href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                            >
                                {assignment.title}
                            </a> */}
                            <div className="wd-control-buttons">
                                <LessonControlButtons />
                            </div>
                        </div>
                        <div className="wd-assignment-details">
                            <span className="wd-multiple-modules">Multiple Modules</span> |{" "}
                            <span className="wd-bold-text">Not available until</span> May 6 at 12:00am | <br />
                            <span className="wd-bold-text">Due</span> May 13 at 11:59pm | 100 pts
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
