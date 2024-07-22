import React from 'react';
import { useParams } from 'react-router-dom';
import { users, enrollments, assignments, grades } from '../../Database';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFilter, FaFileImport, FaFileExport, FaCog } from 'react-icons/fa';

export default function Grades() {
    const { cid } = useParams<{ cid: string }>();

    const enrolledStudents = enrollments.filter(enrollment => enrollment.course === cid)
        .map(enrollment => users.find(user => user._id === enrollment.user));

    const courseAssignments = assignments.filter(assignment => assignment.course === cid);

    const courseGrades = grades.filter(grade => courseAssignments.some(assignment => assignment._id === grade.assignment));

    return (
        <div className="container mt-4">
            <div className="row mb-3 align-items-center">
                <div className="col-md-3">
                    <label className="form-label font-weight-bold">Student Names</label>
                    <div className="input-group">
                        <span className="input-group-text"><FaFilter /></span>
                        <input type="text" className="form-control" placeholder="Search Students" />
                    </div>
                </div>
                <div className="col-md-3">
                    <label className="form-label font-weight-bold">Assignment Names</label>
                    <div className="input-group">
                        <span className="input-group-text"><FaFilter /></span>
                        <input type="text" className="form-control" placeholder="Search Assignments" />
                    </div>
                </div>
                <div className="col-md-2 d-flex align-items-end">
                    <button className="btn btn-outline-secondary w-100 mb-3 mb-md-0">
                        <FaFilter className="me-2" />
                        Apply Filters
                    </button>
                </div>
                <div className="col-md-4 d-flex justify-content-between justify-content-md-end align-items-center mt-4 mt-md-0">
                    <button className="btn btn-outline-secondary me-2 mb-3 mb-md-0">
                        <FaFileImport className="me-2" />
                        Import
                    </button>
                    <div className="btn-group me-2 mb-3 mb-md-0">
                        <button className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
                            <FaFileExport className="me-2" />
                            Export
                        </button>
                    </div>
                    <button className="btn btn-outline-secondary">
                        <FaCog />
                    </button>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            {courseAssignments.map((assignment, index) => (
                                <th key={index}>{assignment.title}<br />Out of {assignment.points}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {enrolledStudents.map((student, index) => (
                            <tr key={index}>
                                <td>{student?.firstName} {student?.lastName}</td>
                                {courseAssignments.map((assignment, idx) => {
                                    const grade = courseGrades.find(g => g.student === student?._id && g.assignment === assignment._id);
                                    return (
                                        <td key={idx}>{grade ? grade.grade : '-'}</td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
