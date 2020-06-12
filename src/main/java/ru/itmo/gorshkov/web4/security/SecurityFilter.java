package ru.itmo.gorshkov.web4.security;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import ru.itmo.gorshkov.web4.data.MyUser;
import ru.itmo.gorshkov.web4.data.UserRepository;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@Component
public class SecurityFilter extends OncePerRequestFilter {

    @Autowired
    private final UserRepository repository;

    public SecurityFilter(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws ServletException, IOException {
        String requestTokenHeader = request.getHeader("Authorization");
        String username = request.getHeader("X-USER-ID");
        MyUser myUser = repository.findByUsername(username);
        try {
            if (requestTokenHeader != null && username != null && SecurityContextHolder.getContext().getAuthentication() == null
                    && myUser.getToken() != null && requestTokenHeader.equals(myUser.getToken())) {
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(myUser, null, myUser.getAuthorities());
                usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }
        } catch (Throwable ignored) {}
        chain.doFilter(request, response);
    }

}
