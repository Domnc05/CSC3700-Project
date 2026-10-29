import useFetch from '../hooks/useFetch.js'
import CourseList from "../components/CourseList.jsx";
import ProgressSummary from "../components/ProgressSummary.jsx";
import '../assets/HomePage.css'

function HomePage(props) {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL

    const { data, isPending, error } = useFetch(`${BASE_URL}/courses`)

    const courses = Array.isArray(data) ? data : []

    return(
        <div>
            <h2 className="page-title">CS Developer Track</h2>
            {isPending && <div className='text-muted'>Loading ...</div>}
            {error && <div className='text-danger'>{String(error)}</div>}

            {courses.length > 0 && (
                <CourseList courses={courses}/>
            )}
            <ProgressSummary/>
        </div>

    )
}

export default HomePage;