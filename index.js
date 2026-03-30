const express = require('express')

const app = express()
const port = 5000

let students = [
    {
        "id": 1,
        "name": "Gavin",
        "age": 19,
        "isStudent": true
    },
    {
        "id": 2,
        "name": "Boris",
        "age": 19,
        "isStudent": false
    }
]

app.use(express.json())

app.get('/students', (req, res) => {
    res.status(200).json(students)
})

app.get('/students/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const student = students.find(s => s.id === id)
    if (!student) {
        res.status(404).json({ message: 'Student not found' })
    } else {
        res.status(200).json(student)
    }
})

app.post('/students', (req, res) => {
    const { name, age, isStudent } = req.body
    const newStudent = {
        id: students.length ? students[students.length - 1].id + 1 : 1,
        name,
        age,
        isStudent
    }
    students.push(newStudent)
    res.status(201).json(newStudent)
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})