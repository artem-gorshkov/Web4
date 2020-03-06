package ru.itmo.gorshkov.web4_2.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.itmo.gorshkov.web4_2.data.MyUser;
import ru.itmo.gorshkov.web4_2.data.UserRepository;

import java.util.Base64;

@Slf4j
@RestController
@RequestMapping("/api/registration")
public class RegistrationController {
    private final UserRepository repository;

    @Autowired
    public RegistrationController(UserRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public ResponseEntity loginUser(@RequestHeader("Authorization") String authorization) {
        authorization = authorization.substring(authorization.indexOf(' ') + 1);
        byte[] decodedBytes = Base64.getDecoder().decode(authorization);
        String decodedString = new String(decodedBytes);
        String username = decodedString.substring(0, decodedString.indexOf(':'));
        String password = decodedString.substring(decodedString.indexOf(':') + 1);
        log.info("Registration username: " + username);
        log.info("Registration password: " + password);
        MyUser user = repository.findByUsername(username);
        if (user == null) {
            MyUser newUser = new MyUser();
            newUser.setUsername(username);
            newUser.setPassword(password);
            repository.save(newUser);
            return new ResponseEntity(authorization, HttpStatus.OK);
        }
        return new ResponseEntity("NOT_OK", HttpStatus.BAD_REQUEST);
    }
}
