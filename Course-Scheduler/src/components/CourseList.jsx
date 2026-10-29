import CourseCard from "./CourseCard.jsx";
import {Col, Container, Row} from "react-bootstrap";


function CourseList({courses, completed, setCompleted}) {
    return (
        <Container className="py-4">
            <Row className="g-4" xs={1} md={3}>
            {courses.map((course) => (
                <Col key={course.id}>
                    <CourseCard course={course} courses={courses}
                    completed={completed} setCompleted={setCompleted} />
                </Col>
            ))}
            </Row>
        </Container>
    )
}

export default CourseList;