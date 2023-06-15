import mongoose from "mongoose";
import { studentModel } from "./models/students.js";
import { courseModel } from "./models/courses.js";

const environment = async () => {
  await mongoose.connect(
    "mongodb+srv://diegojofre:coder@cluster0.92ntnpd.mongodb.net/?retryWrites=true&w=majority"
  );

  let student = await studentModel
    .findById("648b67ac3f3632fa90929c3c")
    .populate("courses.course");
  console.log(student);
  console.log(JSON.stringify(student, null, "\t"))
  /*student.courses.push({ course: "648b674ce24dea139583487e" });
  let result = await studentModel.updateOne(
    { _id: "648b67ac3f3632fa90929c3c" },
    student
  );*/

  /*studentModel.create({
    first_name: "Pepe",
    last_name: "Perez",
    email: "pepe@mail",
    gender: "M",
  });

  courseModel.create({
      title: "backend",
      description: "curso intensivo de backend con Node",
      difficulty: 5,
      topics: ["js", "express", "hbs"],
      professor: "Diego"
  })*/
};

environment();
