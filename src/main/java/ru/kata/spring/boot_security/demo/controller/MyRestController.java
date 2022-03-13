package ru.kata.spring.boot_security.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.UserService;

import java.security.Principal;
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
    public List<User> showAllUsers() {
        return userService.findAll();
    }

    @GetMapping("/user")
    public User getUserByUsername (Principal principal) {
        User user = userService.findByUsername(principal.getName());
        return user;
    }

//    @GetMapping("/users/{id}")
//    public User getUserById(@PathVariable long id) {
//        User user = userService.findById(id);
//        return user;
//    }

    @PostMapping("/addUser")
    //@ResponseStatus(HttpStatus.CREATED)
    public User addNewUser(User user) {
        return userService.saveUser(user);
    }

    @PutMapping("/userEdit")
    public User updateUser(User user) {
        userService.saveUser(user);
        return user;
    }

    @DeleteMapping("/user/{id}")
    public String deleteUser(@PathVariable long id) {
        userService.deleteById(id);
        return "Пользователь с id = " + id + " удален.";
    }
}
