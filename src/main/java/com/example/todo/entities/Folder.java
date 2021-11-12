package com.example.todo.entities;

import lombok.Data;

import java.util.List;

@Data
public class Folder {

    public long id;

    public String name;
    public List<Task> tasks;
}
