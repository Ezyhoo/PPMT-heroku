package com.example.ppmtool.repositories;

import com.example.ppmtool.domain.User;
import org.springframework.data.repository.CrudRepository;

import javax.swing.text.html.Option;

public interface UserRepository extends CrudRepository<User, Long> {
    User findByUsername(String username);
    User getById(Long id);

}
