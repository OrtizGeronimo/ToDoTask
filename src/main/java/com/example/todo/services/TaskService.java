package com.example.todo.services;

import com.example.todo.entities.Task;
import com.example.todo.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    @Autowired
    private TaskRepository repository;

    public Task addTask(Task t) {
        Task task = repository.save(t);
        return task;
    }

    public List<Task> findAll() {
        return repository.findAll();
    }

    public Task findById(long id) {
        Optional<Task> t = repository.findById(id);
        return t.get();
    }

    public Task updateOne(Task task, long id) {
        Optional<Task> opt = repository.findById(id);
        Task t = opt.get();
        t = repository.save(task);
        return t;
    }


}
