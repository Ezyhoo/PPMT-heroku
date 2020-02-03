package com.example.ppmtool.services;

import com.example.ppmtool.domain.User;
import com.example.ppmtool.exceptions.UsernameAlreadyExistException;
import com.example.ppmtool.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User saveUser(User newUser) {

        try{
            newUser.setPassword(bCryptPasswordEncoder.encode((newUser.getPassword())));

            //Username has to be unique
            newUser.setUsername(newUser.getUsername());
            // Make sure that password and confirmPassword match
            newUser.setConfirmPassword("");
            // We do not persist or show the confirmPassword
            return userRepository.save(newUser);

        }catch(Exception e){
            throw new UsernameAlreadyExistException("Username '" + newUser.getUsername() + "' already exists");
        }
    }
}
