package com.example.todo.controllers;

import com.example.todo.entities.Task;
import com.example.todo.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class TaskController {

    @Autowired
    private TaskService service;

    @PostMapping("/addTask")
    public String addTask(Model model, @ModelAttribute Task task){
        try {
            Task t = service.addTask(task);
            if(t != null){
                List<Task> taskList = service.findAll();
                model.addAttribute("taskList", taskList);
            }
            return "index";
        } catch (Exception e){
            System.out.println("Error " + e.getMessage());
            return "error";
        }
    }



}
