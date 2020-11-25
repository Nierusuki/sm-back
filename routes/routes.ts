import { Application } from "express";
import { AssignmentController } from "../controllers/assignmentController";
import { enrollmentController } from "../controllers/enrollmentController";
import { StudentController } from "../controllers/studentController";
import { SubjectController } from "../controllers/subjectController";

export function getRoutes(app:Application) { 
    app.get("/", (req, res) => {
        res.send("Bem-vindo ao back-end do sistema de gerenciamento de estudantes!")
    })

    app.get('/students', (req, res) => { 
        StudentController.getStudents().then(success => { 
            res.json(success);
        }, err => { 
            res.status(500).send("Internal Server Error: " + err);
        })
    })

    
    app.get('/students/enrollments', (req, res) => { 
        enrollmentController.getEnrollments().then(success => { 
            res.json(success);
        }, err => { 
            res.status(500).send("Internal Server Error: " + err);
        })
    })

    app.get('/students/get/:id', (req, res) => { 
        StudentController.getStudentById(req.params.id).then(success => { 
            res.json(success);
        }, err => { 
            res.status(500).send("Internal Server Error: " + err);
        });
    })


    app.get('/subjects/get/:id', (req, res) => { 
        SubjectController.getSubjectById(req.params.id).then(success =>{ 
            res.json(success);
        }, err => { 
            res.status(500).send("Internal Server Error:" + err);
        })
    })

    app.get('/subjects/assignments/get/:id', (req, res) => { 
        AssignmentController.getAssignmentsFromSubject(req.params.id).then(success => { 
            res.json(success);
        }, err => { 
            res.status(500).send("Internal Server Error: " + err);
        })
    })

    app.post('/students/insert', (req, res) => { 
        StudentController.createStudent(req.body).then(success => { 
            res.json(success);
        }, err => { 
            res.status(500).send("Internal Server Error: " + err);
        })
    })

    app.post('/students/enroll', (req, res) => { 
        enrollmentController.enrollStudent(req.body).then(success => { 
            res.json(success);
        }, err => { 
            res.status(500).send("Internal Server Error: " + err);
        })
    })

    app.post('/subjects/insert', (req, res) => { 
        SubjectController.addSubject(req.body).then(success => {
            res.json(success);
        }, err => { 
            res.status(500).send("Internal Server Error: " + err);
        });
    })

    app.post('/subjects/assignments/insert', (req, res) => { 
        AssignmentController.insertAssignment(req.body).then(success => { 
            res.json(success);
        }, err => { 
            res.status(500).send("Internal Server Error " + err);
        })
    })
}