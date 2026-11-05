
function validateCourse(body) {
    const { title, number, id, description, credits } = body

    if (!title) {
        return 'Course Title is required'
    }
    if (!number || isNaN(parseInt(number))) {
        return 'Section Number is required'
    }
    if (!id || isNaN(id)){
        return 'Course ID is required'
    }
    if (!description){
        return 'Course Description is required'
    }
    if (!credits || isNaN(credits)){
        return 'Course Credits is required'
    }
    return null   // null means valid
}

module.exports = validateCourse
