import { StudentService } from './student.service';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    findAll(): string;
    findById(id: String): {
        message: string;
    };
    insert(body: any): {
        message: string;
        data: any;
    };
    update(id: String, body: any): {
        message: string;
        data: any;
    };
    delete(id: String): {
        message: string;
    };
}
