package com.example.todo.services;

import com.example.todo.entities.Task;
import com.example.todo.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private TaskRepository repository;

    public Task addTask(Task t){
        Task task = repository.save(t);
        return task;
    }

    public List<Task> findAll(){
        return repository.findAll();
    }


}
