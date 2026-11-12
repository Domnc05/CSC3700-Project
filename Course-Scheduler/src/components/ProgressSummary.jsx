import "../assets/ProgressSummary.css"
import {ProgressBar} from "react-bootstrap";

function ProgressSummary({courses, completed}){
    const available = courses.filter(course =>
        !completed.map(String).includes(String(course.id)) &&
        course.prerequisites.every(prereq =>
            completed.map(String).includes(String(prereq))
        )
    );
    const locked = courses.filter(course =>
        !completed.map(String).includes(String(course.id)) &&
        course.prerequisites.some(prereq =>
            !completed.map(String).includes(String(prereq))
        )
    );

    const complete = completed.length;
    const availCount = available.length;
    const lockedCount = locked.length;
    const now = complete * 10;

    return(
        <div className={'card progress-card'}>
            <div className={'card-body'}>
                {complete} of {courses.length} Courses Completed   {availCount} available   {lockedCount} locked
                <ProgressBar min={0} max={100} now={now} label={`${now}%`}>

                </ProgressBar>
            </div>
        </div>
    )
}

export default ProgressSummary;