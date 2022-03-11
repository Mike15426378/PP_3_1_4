package ru.kata.spring.boot_security.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class MyRestController {

    private UserService userService;

    @Autowired
    public MyRestController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> showAllUsers() {
        return new ResponseEntity<>(userService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable long id) {
        User user = userService.findById(id);
        return user;
    }

    @PostMapping("/users")
    public User addNewUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @PutMapping("/users")
    public User updateUser(@RequestBody User user) {
        userService.saveUser(user);
        return user;
    }

    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable long id) {
        userService.deleteById(id);
        return "Пользователь с id = " + id + " удален.";
    }
}
