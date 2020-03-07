package ru.itmo.gorshkov.web4.data;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<MyUser, Long> {

    MyUser save(MyUser user);

    MyUser findByUsername(String username);
}
