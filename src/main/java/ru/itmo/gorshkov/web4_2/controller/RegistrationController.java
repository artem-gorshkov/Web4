package ru.itmo.gorshkov.web4_2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ru.itmo.gorshkov.web4_2.data.MyUser;
import ru.itmo.gorshkov.web4_2.data.UserRepository;

@Controller
@RequestMapping("/registration")
public class RegistrationController {
    private final UserRepository repository;

    @Autowired
    public RegistrationController(UserRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public String getPoints() {
        return "redirect:/";
    }

    @PostMapping
    public String addUser(@RequestBody MyUser user) {
        MyUser userFromDb = repository.findByUsername(user.getUsername());
        if (userFromDb != null) {
            return "/";
        }
        user.setPassword(user.getPassword());
        repository.save(user);
        return "redirect:/";
    }
}
