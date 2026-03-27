import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}
    @Get()
    findAll() {
        return this.studentService.getAll()
    }

    @Get(':id')
    findById(@Param('id') id: String) {

        return ({message: `Student of id ${id}`}) 
    }

    @Post()
    insert(@Body() body:any){
        return{
            message:'date inserted',
            data:body
        }
    }

    @Put(':id')
    update(@Param('id') id:String,@Body() body:any){
        return{
            message:'date Updated',
            data:body
        }
    }

    @Delete(':id')
    delete(@Param('id') id:String){
        return{
            message:'User Deleted'
        }
    }

}
