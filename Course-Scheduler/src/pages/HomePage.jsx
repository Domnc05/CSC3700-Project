import useFetch from '../hooks/useFetch.js'
import CourseList from "../components/CourseList.jsx";
import ProgressSummary from "../components/ProgressSummary.jsx";
import '../assets/HomePage.css'
import {useEffect, useState} from "react";

function HomePage(props) {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL

    const { data, isPending, error } = useFetch(`${BASE_URL}/api/courses`)

    const courses = Array.isArray(data) ? data : []

    const { data: savedCompletions } = useFetch(`${BASE_URL}/api/completions`)
    const [completed, setCompleted] = useState([])

    useEffect(() => {
        if (Array.isArray(savedCompletions)) {
            setCompleted(savedCompletions.map(course => course.course_id));
        }
    }, [savedCompletions]);

    async function saveCompleted() {
        try {
            const response = await fetch(`${BASE_URL}/api/completions`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    completed.map(id => ({
                        user_id: 1,
                        course_id: Number(id)
                    }))
                )
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || "Failed to save completions");
            }
        } catch (error) {
            error.message;
        }
    }

    return(
        <div>
            <h2 className="page-title">CS Developer Track</h2>
            {isPending && <div className='text-muted'>Loading ...</div>}
            {error && <div className='text-danger'>{String(error)}</div>}
            {courses.length > 0 && (
                <>
                <ProgressSummary courses={courses} completed={completed}/>
                <CourseList saveCompleted={saveCompleted} courses={courses}
                            completed={completed} setCompleted={setCompleted}/>
                </>
            )}
        </div>

    )
}

export default HomePage;