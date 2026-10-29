import useFetch from "../hooks/useFetch.js";
import '../assets/CourseCard.css'

function CourseCard({course}) {

    return(
        <div className="card course-card">
                <div className="card-header course-card-top">
                    <span className="course-code">{course.number}</span>
                </div>
                <div className="course-card-content">
                    <div className="card-title course-title">{course.title}</div>
                    <div className="card-subtitle course-credits">{course.credits} credits</div>
                    <div className="card-body course-description">{course.description}</div>
                    <div className="card-body course-prerequisites">Prerequisites: {course.prerequisites}</div>
                </div>
                <div className="card-footer course-card-footer">Completed</div>
        </div>
    )
}

export default CourseCard;