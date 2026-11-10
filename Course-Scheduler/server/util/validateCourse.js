
function validateCourse(body) {
    const { title, number, credits } = body

    if (!title) {
        return 'Course Title is required'
    }
    if (!number) {
        return 'Section Number is required'
    }
    if (!credits || isNaN(credits)){
        return 'Course Credits is required'
    }
    return null   // null means valid
}

module.exports = validateCourse
