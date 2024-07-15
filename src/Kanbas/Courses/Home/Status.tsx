import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle, FaHome, FaChartBar } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { AiOutlineNotification, AiOutlineBell } from "react-icons/ai";
import { MdAnnouncement } from "react-icons/md";

export default function CourseStatus() {
    return (
        <div id="wd-course-status" style={{ width: "300px" }}>
            <h2>Course Status</h2>
            <div className="d-flex mb-2">
                <div className="w-50 pe-1">
                    <button className="btn btn-lg btn-secondary w-100 text-nowrap">
                        <MdDoNotDisturbAlt className="me-2 fs-5" />
                        Unpublish
                    </button>
                </div>
                <div className="w-50">
                    <button className="btn btn-lg btn-success w-100">
                        <FaCheckCircle className="me-2 fs-5" />
                        Publish
                    </button>
                </div>
            </div>
            <button className="btn btn-lg btn-secondary w-100 mb-2 text-start">
                <BiImport className="me-2 fs-5" />
                Import Existing Content
            </button>
            <button className="btn btn-lg btn-secondary w-100 mb-2 text-start">
                <LiaFileImportSolid className="me-2 fs-5" />
                Import from Commons
            </button>
            <button className="btn btn-lg btn-secondary w-100 mb-2 text-start">
                <FaHome className="me-2 fs-5" />
                Choose Home Page
            </button>
            <button className="btn btn-lg btn-secondary w-100 mb-2 text-start">
                <FaChartBar className="me-2 fs-5" />
                View Course Screen
            </button>
            <button className="btn btn-lg btn-secondary w-100 mb-2 text-start">
                <MdAnnouncement className="me-2 fs-5" />
                New Announcement
            </button>
            <button className="btn btn-lg btn-secondary w-100 mb-2 text-start">
                <FaChartBar className="me-2 fs-5" />
                New Analytics
            </button>
            <button className="btn btn-lg btn-secondary w-100 mb-2 text-start">
                <AiOutlineBell className="me-2 fs-5" />
                View Course Notifications
            </button>
        </div>
    );
}
