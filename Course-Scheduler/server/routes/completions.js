const express = require('express')
const router = express.Router()
const pool = require('../util/database')
const {replaceCompletions, getCoursesWithPrereqs} = require("../util/courseData");

//M3: replaced by the logged-in user's id
const USER_ID = 1

const isValidCompletionSet = (courses, completed) => {
    return completed.every(id => {
        const course = courses.find(c => c.id === id)
        return course && course.prerequisites.every(p => completed.includes(p))
    })
}

router.get('/completions', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM completions')
        res.json(rows)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.put('/completions', async (req, res) => {
    try{
        const courseIds = req.body.map(course => course.course_id);
        const courses = await getCoursesWithPrereqs(pool);
        if (!isValidCompletionSet(courses, courseIds)) {
            return res.status(400).json({
                error: 'Missing course prerequisites'
            });
        }
        await replaceCompletions(pool, USER_ID, courseIds)
        res.status(200).json(courseIds)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})
module.exports = router