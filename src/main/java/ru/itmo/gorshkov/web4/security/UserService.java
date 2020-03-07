package ru.itmo.gorshkov.web4.security;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ru.itmo.gorshkov.web4.data.MyUser;
import ru.itmo.gorshkov.web4.data.UserRepository;

@Slf4j
@Service
public class UserService implements UserDetailsService {

    private final UserRepository repository;

    @Autowired
    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        MyUser user = repository.findByUsername(username);
        if (user == null) {
//            throw new UsernameNotFoundException("User not found");
            log.info("User " + username + " not found");
        }

        return user;
    }
}
