import "./Assignments.css";
import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const assignment = useSelector((state: RootState) =>
    state.assignments.assignments.find(
      (assignment) => assignment.course === cid && assignment._id === id
    )
  );

  const dateObjectToHtmlDateString = (date: Date | null) => {
    if (!date) return "";
    return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? "0" : ""}${
      date.getMonth() + 1
    }-${date.getDate() < 10 ? "0" : ""}${date.getDate()}`;
  };

  const [assignmentDetails, setAssignmentDetails] = useState({
    title: assignment ? assignment.title : "",
    description: assignment ? assignment.description : "",
    points: assignment ? assignment.points : 100,
    due: assignment ? dateObjectToHtmlDateString(new Date(assignment.due)) : "",
    available: assignment
      ? dateObjectToHtmlDateString(new Date(assignment.available))
      : "",
    until: assignment
      ? dateObjectToHtmlDateString(new Date(assignment.until))
      : "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setAssignmentDetails({ ...assignmentDetails, [id]: value });
  };

  const handleSave = () => {
    const formatDate = (dateString: string) => {
      return dateString ? new Date(dateString).toISOString() : null;
    };

    const dueDate = formatDate(assignmentDetails.due);
    const availableDate = formatDate(assignmentDetails.available);
    const untilDate = formatDate(assignmentDetails.until);

    if (assignment) {
      dispatch(
        updateAssignment({
          ...assignment,
          ...assignmentDetails,
          due: dueDate,
          available: availableDate,
          until: untilDate,
        })
      );
    } else {
      dispatch(
        addAssignment({
          ...assignmentDetails,
          course: cid,
          due: dueDate,
          available: availableDate,
          until: untilDate,
        })
      );
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Assignment Name
        </label>
        <input
          id="title"
          value={assignmentDetails.title}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          id="description"
          className="form-control"
          rows={5}
          value={assignmentDetails.description}
          onChange={handleInputChange}
        />
      </div>

      <div className="row mb-3 text-end">
        <div className="col-md-4">
          <label htmlFor="points" className="form-label">
            Points
          </label>
        </div>
        <div className="col-md-4 flex-grow-1">
          <input
            id="points"
            type="number"
            value={assignmentDetails.points}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-4 text-end">
          <label htmlFor="due" className="form-label">
            Due
          </label>
        </div>
        <div className="col-md-4 flex-grow-1">
          <input
            type="date"
            id="due"
            value={assignmentDetails.due}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-4 text-end">
          <label htmlFor="available" className="form-label">
            Available from
          </label>
        </div>
        <div className="col-md-4">
          <input
            type="date"
            id="available"
            value={assignmentDetails.available}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-4 text-end">
          <label htmlFor="until" className="form-label">
            Until
          </label>
        </div>
        <div className="col-md-4 flex-grow-1">
          <input
            type="date"
            id="until"
            value={assignmentDetails.until}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
      </div>

      <div id="wd-editor-controls" className="text-nowrap">
        <button
          id="wd-editor-btn"
          className="btn btn-sm btn-danger me-1 float-end"
          onClick={handleSave}
        >
          Save
        </button>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
          <button
            id="wd-group"
            className="btn btn-sm btn-secondary float-end wd-margin-right"
            type="button"
          >
            Cancel
          </button>
        </Link>
      </div>
    </div>
  );
}
