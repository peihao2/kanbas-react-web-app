import { Navigate, Route, Routes } from "react-router";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import "./styles.css";
import { useState, useEffect } from "react";
// import * as db from "./Database";
import store from "./store";
import { Provider } from "react-redux";
import * as client from "./Courses/client";
import Account from "./Account";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });
  const addNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    setCourses(courses.filter((c) => c._id !== courseId));
  };
  const updateCourse = async () => {
    await client.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  const fetchCourses = async () => {
    const courses = await client.fetchAllCourses();
    setCourses(courses);
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <Provider store={store}>
      <div id="wd-kanbas" className="h-100">
        <div className="d-flex h-100">
          <div className="bg-black d-none d-md-block h-100">
            <KanbasNavigation />
          </div>
          <div className="flex-fill p-4">
            <Routes>
              <Route path="/Account/*" element={<Account />} />

              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account/*" element={<Account />} />
              <Route
                path="Dashboard"
                element={
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                  />
                }
              />
              <Route
                path="Courses/:cid/*"
                element={<Courses courses={courses} />}
              />
              <Route path="Calendar" element={<h1>Calendar</h1>} />
              <Route path="Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </Provider>
  );
}
