import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
    getAll(): string {
        return 'Hello Aditya!';
    }
}
