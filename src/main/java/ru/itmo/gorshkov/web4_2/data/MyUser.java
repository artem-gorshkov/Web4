package ru.itmo.gorshkov.web4_2.data;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.*;

@Entity
public class MyUser implements UserDetails {

    @Id
    @GeneratedValue
    private Long id;
    @Column(unique = true)
    @Size(min=6, message = "Не меньше 6 знаков")
    private String username;
    @Size(min=6, message = "Не меньше 6 знаков")
    private String password;
    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn
    private List<Point> points;
    private static final Set<GrantedAuthority> roles = new HashSet<>();
    public static final BCryptPasswordEncoder ENCODER = new BCryptPasswordEncoder();

    {
        roles.add(() -> "ROLE_USER");
//        points = new ArrayList<>();
    }

    public MyUser() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles;
    }

    @Override
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = ENCODER.encode(password);
    }

    public List<Point> getPoints() {
        return points;
    }

    public void setPoints(List<Point> points) {
        this.points = points;
    }

    public void addPoint(Point point) {
        points.add(point);
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
