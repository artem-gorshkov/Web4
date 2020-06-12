package ru.itmo.gorshkov.web4.controller;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.itmo.gorshkov.web4.data.MyUser;
import ru.itmo.gorshkov.web4.data.UserRepository;

@Slf4j
@RestController
@RequestMapping("/api/logout")
public class LogoutController {
    private final UserRepository repository;

    @Autowired
    public LogoutController(UserRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public ResponseEntity logoutUser(@RequestHeader("X-USER-ID") String username) {
        MyUser user = repository.findByUsername(username);
        user.setToken(null);
        log.info("Logout user: " + user.getUsername());
        return new ResponseEntity("OK", HttpStatus.OK);
    }
}
