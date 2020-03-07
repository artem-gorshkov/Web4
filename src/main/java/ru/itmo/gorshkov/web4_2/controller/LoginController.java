package ru.itmo.gorshkov.web4_2.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.itmo.gorshkov.web4_2.data.MyUser;
import ru.itmo.gorshkov.web4_2.data.UserRepository;

import java.util.UUID;

@Slf4j
@RestController
@RequestMapping("/api/login")
public class LoginController {
    private final UserRepository repository;

    @Autowired
    public LoginController(UserRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public ResponseEntity loginUser(@RequestBody MyUser user) {
        MyUser userFromDb = repository.findByUsername(user.getUsername());
        String rawPassword = user.getPassword();
        String password = userFromDb.getPassword();
        if (userFromDb != null
                && user.getUsername().equals(userFromDb.getUsername())
                && MyUser.ENCODER.matches(rawPassword, password)) {
            String token = UUID.randomUUID().toString();
            userFromDb.setToken(token);
            repository.save(userFromDb);
            log.info("Login new user: " + userFromDb.getUsername());
            return new ResponseEntity(token, HttpStatus.OK);
        }
        return new ResponseEntity("NOT_OK", HttpStatus.BAD_REQUEST);
    }
}
