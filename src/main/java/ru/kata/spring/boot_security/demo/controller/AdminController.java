package ru.kata.spring.boot_security.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.model.Role;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.UserService;

import java.security.Principal;

@Controller
@RequestMapping("/admin")
public class AdminController {

    private final UserService userService;

    @Autowired
    public AdminController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("")
    public String findAll(Model model, Principal principal) {
        User user = userService.findByUsername(principal.getName());
        model.addAttribute("admin", user);
        model.addAttribute("users", userService.findAll());
        for (Role el : user.getRoles()) {
            if (el.getName().equals("ROLE_ADMIN")) {
                model.addAttribute("role", "ADMIN");
                break;
            }
            if (el.getName().equals("ROLE_USER")) {
                model.addAttribute("role", "USER");
                break;
            }
        }
        return "admin";
    }

    @PostMapping("/user-save")
    public String saveUser(User user) {
        userService.saveUser(user);
        return "redirect:/admin";
    }

    @GetMapping("/user-delete/{id}")
    public String deleteUser(@PathVariable("id") long id) {
        userService.deleteById(id);
        return "redirect:/admin";
    }
}
