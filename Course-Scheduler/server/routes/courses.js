const express = require('express')
const router = express.Router()
const pool = require('../util/database')
const validateCourse = require('../util/validateCourse')
const {getCoursesWithPrereqs} = require("../util/courseData");


router.get('/courses', async (req, res) => {
    try{
        const courses = await getCoursesWithPrereqs(pool)
        res.json(courses)
    }catch(err){
        res.status(500).send({error: err.message})
    }
})

router.get('/courses/:id', async (req, res) => {
    try{
        const courses = await getCoursesWithPrereqs(pool, req.params.id)
        if (courses == null) return res.status(404).json({ error: 'Course not found' })
        res.json(courses)
    } catch(err){
        res.status(500).send({error: err.message})
    }
})

router.post('/courses', async (req, res) => {
    const error = validateCourse(req.body)
    if(error) return res.status(400).send({error})

    const {title, number, description, credits, prerequisites} = req.body
    try{
        const [result] = await pool.query(
            'INSERT INTO courses (title, number, description, credits) VALUES (?, ?, ?, ?)',
            [title, number, description || "", credits]
        )
        const courseId = result.insertId

        for (const prereq of prerequisites) {
            await pool.query(
                'INSERT INTO prerequisites (course_id , prereq_id) VALUES (?, ?)',
                [courseId, prereq]
            )
        }
        const course = await getCoursesWithPrereqs(pool, courseId);
        res.status(201).json(course)
    }catch(err){
        res.status(500).send({error: err.message})
    }
})

router.put('/courses/:id', async (req, res) => {
    const error = validateCourse(req.body)
    if (error) return res.status(400).json({ error })

    const {title, number, description, credits, prerequisites} = req.body
    const id = parseInt(req.params.id)
    try {
        const [result] = await pool.query(
            'UPDATE courses SET title=?, number=?, description=?, credits=? WHERE id=?',
            [title, number, description, credits, id]
        )
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Course not found' })
        await pool.query(
            'DELETE FROM prerequisites WHERE course_id = ?',
            [id]
        );
        for (const prereq of prerequisites) {
            await pool.query(
                'INSERT INTO prerequisites (course_id, prereq_id) VALUES (?, ?)',
                [id, prereq]
            );
        }
        const course = await getCoursesWithPrereqs(pool, id);
        res.status(200).json(course)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.delete('/courses/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const [rows] = await pool.query(
            'SELECT * FROM courses WHERE id = ?', [id]
        )
        if (rows.length === 0) return res.status(404).json({ error: 'Course not found' })
        await pool.query('DELETE FROM courses WHERE id = ?', [id])
        res.status(200).json(rows[0])
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router