import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" className="form-control" value="A1 - ENV + HTML" /><br /><br />
            <label htmlFor="wd-description">Description</label>
            <textarea id="wd-description" className="form-control">
                The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.
                The landing page should include the following:
                - Your full name and section
                - Links to each of the lab assignments
                - Link to the Kanbas application
                - Links to all relevant source code repositories
                The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br />
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="wd-points" className="form-label">Points</label>
                        <input id="wd-points" type="number" className="form-control" value={100} />
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
                        <input id="wd-assign-to" className="form-control" value="Everyone" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="wd-due" className="form-label">Due</label>
                        <input id="wd-due" type="date" className="form-control" value="2024-05-13" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="wd-available-from" className="form-label">Available from</label>
                        <input id="wd-available-from" type="date" className="form-control" value="2024-05-06" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="wd-available-until" className="form-label">Until</label>
                        <input id="wd-available-until" type="date" className="form-control" value="2024-05-20" />
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <button className="btn btn-secondary">Cancel</button>
                <button className="btn btn-danger">Save</button>
            </div>
        </div>
    );
}