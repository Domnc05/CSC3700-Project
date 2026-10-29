import useFetch from "../hooks/useFetch.js";
import '../assets/CourseCard.css'

function CourseCard({course, courses, completed, setCompleted}) {
    const isCompleted = completed.includes(course.id);
    const prereqs = course.prerequisites.map((prereq, index) => (
        <span key={prereq}>
        {courses[prereq]?.number}
            {index < course.prerequisites.length - 1 && ', '}
      </span>
    ))

    function toggleCompleted() {
        setCompleted((previous) =>
            isCompleted
                ? previous.filter((id) => id !== course.id)
                : [...previous, course.id]
        );
    }

    return(
        <div className="card course-card">
                <div className="card-header course-card-top">
                    <span className="course-code">{course.number}</span>
                </div>
                <div className="course-card-content">
                    <div className="card-title course-title">{course.title}</div>
                    <div className="card-subtitle course-credits">{course.credits} credits</div>
                    <div className="card-body course-description">{course.description}</div>
                    <div className="card-body course-prerequisites">
                        Prerequisites:
                        {prereqs.length === 0 ? 'None' : prereqs}
                    </div>
                </div>
                <div className="card-footer course-card-footer">
                    <label>
                        <input
                            type="checkbox"
                            checked={isCompleted}
                            onChange={toggleCompleted}
                        />
                        <span>Completed</span>
                    </label>
                </div>
        </div>
    )
}

export default CourseCard;