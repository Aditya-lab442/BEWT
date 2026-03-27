import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

type Student = {
  id: number,
  name: string,
  age: number
};

@Injectable()
export class StudentService {

  private students: Student[] = [
    { id: 1, name: "Aditya", age: 19 },
    { id: 2, name: "keyur", age: 19 },
    { id: 3, name: "Parth", age: 21 }
  ]
  private stuid = 4
  create(createStudentDto: CreateStudentDto) {
    this.students.push({ id: this.stuid++, ...createStudentDto })
    return this.students;
  }

  findAll() {
    return this.students;
  }

  findOne(id: number) {
    return this.students.find(s => s.id === id);
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    const ind = this.students.findIndex(s => s.id === id)
    this.students[ind] = { ...this.students[ind], ...updateStudentDto };
    return this.students[ind];
  }

  remove(id: number) {
    const ind = this.students.findIndex(s => s.id === id)
    return this.students.splice(ind,1)[0];
  }
}
