package ru.itmo.gorshkov.web4_2.data;


import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.*;

@Entity
public class MyUser {

    @Id
    @GeneratedValue
    private Long id;
    @Column(unique = true)
    @Size(min = 6, message = "Не меньше 6 знаков")
    private String username;
    @Size(min = 6, message = "Не меньше 6 знаков")
    private String password;
    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn
    private List<Point> points;

    public MyUser() {
    }

    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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
}