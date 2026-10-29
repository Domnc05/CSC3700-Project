import CourseCard from "./CourseCard.jsx";
import {Col, Container, Row} from "react-bootstrap";


function CourseList({courses}) {
    return (
        <Container className="py-4">
            <Row className="g-4" xs={1} md={3}>
            {courses.map((course) => (
                <Col key={course.id}>
                    <CourseCard course={course}/>
                </Col>
            ))}
            </Row>
        </Container>
    )
}

export default CourseList;