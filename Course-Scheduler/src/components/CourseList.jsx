import CourseCard from "./CourseCard.jsx";
import {Button, ButtonGroup, Col, Container, Row} from "react-bootstrap";
import {useState} from "react";

function CourseList({courses, completed, setCompleted}) {
    const completedCourses = courses.filter(course =>
        completed.includes(course.id))
    const remainingCourses = courses.filter(course =>
        !completed.includes(course.id))
    const [currentDisplay, setCurrentDisplay] = useState(courses);

    return (
        <>
            <div className={"d-flex justify-content-left ms-5"}>
            <ButtonGroup>
                <Button onClick={e=> setCurrentDisplay(courses)}>All Courses</Button>
                <Button onClick={e=> setCurrentDisplay(completedCourses)}>Completed Only</Button>
                <Button onClick={e=> setCurrentDisplay(remainingCourses)}>Remaining</Button>
            </ButtonGroup>
            </div>
            <Container className="py-4">
                <Row className="g-4" xs={1} md={3}>
                {currentDisplay.map((course) => (
                    <Col key={course.id}>
                        <CourseCard course={course} courses={courses}
                        completed={completed} setCompleted={setCompleted} />
                    </Col>
                ))}
                </Row>
            </Container>
        </>
    )
}

export default CourseList;