import { Controller, Post, Body, Get, Param, Patch, ParseIntPipe, Delete} from '@nestjs/common';
import { TaskingService } from './tasking.service';
import { CreateTaskDto } from './DTO/createTask.dto';
import { UpdateTaskDto } from './DTO/updateTask.dto';


  @Controller('task')
  export class TaskingController {
    constructor(private readonly taskingService: TaskingService) {}

  @Post()
  createTask(@Body()createTaskDto:CreateTaskDto){
    return this.taskingService.createTask(createTaskDto)
  }

  @Patch(':id')
  updateTask(@Param('id',ParseIntPipe)id:number,@Body()updateTaskDto:UpdateTaskDto){
    return this.taskingService.updateTask(id,updateTaskDto)
  }

  @Get()
  getAllTask(){
    return this.taskingService.getAllTask()
  }

  @Get(':id')
  getTaskById(@Param('id',ParseIntPipe)id:number){
    return this.taskingService.getTaskById(id)
  }  

  @Delete(':id')
  deleteTaskById(@Param('id',ParseIntPipe)id:number){
    return this.taskingService.deleteTaskById(id)
  }

  
}

