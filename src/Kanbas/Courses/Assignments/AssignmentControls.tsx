import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function AssignmentControls() {
  const navigate = useNavigate();

  return (
    <div id="wd-assignment-controls" className="mb-5 text-nowrap">
      <button
        id="wd-assignment-btn"
        className="btn btn-lg btn-danger me-1 float-end"
        onClick={() => navigate("newAssignment")}
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>

      <button
        id="wd-group"
        className="btn btn-lg btn-secondary float-end wd-margin-right"
        type="button"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
    </div>
  );
}
