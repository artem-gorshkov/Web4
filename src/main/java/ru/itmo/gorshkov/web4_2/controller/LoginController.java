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
@RequestMapping("/api/login")
public class LoginController {
    private final UserRepository repository;

    @Autowired
    public LoginController(UserRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public ResponseEntity loginUser(@RequestHeader("Authorization") String authorization) {
        authorization = authorization.substring(authorization.indexOf(' ') + 1);
        byte[] decodedBytes = Base64.getDecoder().decode(authorization);
        String decodedString = new String(decodedBytes);
        String username = decodedString.substring(0, decodedString.indexOf(':'));
        String password = decodedString.substring(decodedString.indexOf(':') + 1);
        log.info("Login username: " + username);
        log.info("Login password: " + password);
        MyUser user = repository.findByUsername(username);
        if (user != null && user.getPassword().equals(MyUser.ENCODER.encode(password))) {
            return new ResponseEntity(authorization, HttpStatus.OK);
        }
        return new ResponseEntity("NOT_OK", HttpStatus.BAD_REQUEST);
    }
}
