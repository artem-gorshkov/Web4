package ru.itmo.gorshkov.web4.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.itmo.gorshkov.web4.data.MyUser;
import ru.itmo.gorshkov.web4.data.UserRepository;

@Slf4j
@RestController
@RequestMapping("/api/registration")
public class RegistrationController {
    private final UserRepository repository;

    @Autowired
    public RegistrationController(UserRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public ResponseEntity addUser(@RequestBody MyUser user) {
        MyUser userFromDb = repository.findByUsername(user.getUsername());
        if (userFromDb != null) {
            return new ResponseEntity("NOT_OK", HttpStatus.BAD_REQUEST);
        }
        String password = MyUser.ENCODER.encode(user.getPassword());
        user.setPassword(password);
        repository.save(user);
        log.info("Saved new user: " + user.getUsername());
        return new ResponseEntity("OK", HttpStatus.OK);
    }
}
