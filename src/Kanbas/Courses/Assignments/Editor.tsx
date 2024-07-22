import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { assignments } from '../../Database';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import * as db from "../../Database";

interface Assignment {
    _id: string;
    title: string;
    description: string;
    course: string;
    points: number;
    dueDate: string;
    availableFrom: string;
    availableUntil: string;
}



export default function AssignmentEditor() {
    // const { cid, aid } = useParams<{ cid: string; aid: string }>();
    // const [assignment, setAssignment] = useState<Assignment | null>(null);

    // useEffect(() => {
    //     console.log("Fetching assignment with ID:", aid);
    //     const fetchedAssignment = assignments.find(a => a._id === aid);
    //     console.log("Fetched assignment:", fetchedAssignment);
    //     if (fetchedAssignment) {
    //         setAssignment(fetchedAssignment as Assignment);
    //     } else {
    //         console.log("Assignment not found");
    //         setAssignment(null);
    //     }
    // }, [aid]);

    // if (!assignment) {
    //     return <div>Loading...</div>;
    // }


    const params = useParams();
    const id = params.id;
    const course = params.cid;
    const assignments = db.assignments;
    let assignment = assignments.find((a) => a._id === id);

    return (

            <div id="wd-assignments-editor" className="container mt-4">
                <label htmlFor="wd-name">Assignment Name</label>
                <input id="wd-name" className="form-control" value={assignment?.title} readOnly /><br /><br />
                <label htmlFor="wd-description">Description</label>
                <textarea id="wd-description" className="form-control" readOnly>
                    {assignment?.description}
                </textarea>
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="wd-points" className="form-label">Points</label>
                            <input id="wd-points" type="number" className="form-control" value={assignment?.points} readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="wd-assignment-group" className="form-label">Assignment Group</label>
                            <select id="wd-assignment-group" className="form-control">
                                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                                {/* Add other options as needed */}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="wd-display-grade" className="form-label">Display Grade as</label>
                            <select id="wd-display-grade" className="form-control">
                                <option value="Percentage">Percentage</option>
                                {/* Add other options as needed */}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                            <select id="wd-submission-type" className="form-control">
                                <option value="Text Entry">Online</option>
                                <option value="Text Entry">Text Entry</option>
                                <option value="Website URL">Website URL</option>
                                <option value="Media Recording">Media Recording</option>
                                <option value="Student Annotation">Student Annotation</option>
                                <option value="File Uploads">File Uploads</option>
                            </select>
                            <br />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="text-entry" />
                                <label className="form-check-label" htmlFor="text-entry">Text Entry</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="website-url" />
                                <label className="form-check-label" htmlFor="website-url">Website URL</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="media-recordings" />
                                <label className="form-check-label" htmlFor="media-recordings">Media Recordings</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="student-annotation" />
                                <label className="form-check-label" htmlFor="student-annotation">Student Annotation</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="file-uploads" />
                                <label className="form-check-label" htmlFor="file-uploads">File Uploads</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
                            <input id="wd-assign-to" className="form-control" value="Everyone" readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="wd-due" className="form-label">Due</label>
                            <input id="wd-due" type="date" className="form-control" value={assignment?.dueDate} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="wd-available-from" className="form-label">Available from</label>
                            <input id="wd-available-from" type="date" className="form-control" value={assignment?.availableFrom} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="wd-available-until" className="form-label">Until</label>
                            <input id="wd-available-until" type="date" className="form-control" value={assignment?.availableUntil} />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    {/* <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary">Cancel</Link>
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger">Save</Link> */}
                </div>
            </div>
    );
}
