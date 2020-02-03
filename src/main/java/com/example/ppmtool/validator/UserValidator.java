package com.example.ppmtool.validator;

import com.example.ppmtool.domain.User;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;


@Component
public class UserValidator implements Validator {

    @Override
    public boolean supports(Class<?> aClass) {
        return User.class.equals(aClass);
    }

    @Override
    public void validate(Object o, Errors errors) {
        User user = (User) o;

        if(user.getPassword().length() < 6){
            errors.rejectValue("password", "Length", "password cannot be shorter than 6 characters");
        }
        if(!user.getPassword().equals(user.getConfirmPassword())){
            errors.rejectValue("password", "Match", "password must match");
        }
/*        if(user.getConfirmPassword().length() < 6){
            errors.rejectValue("confirmPassword", "Length", "password cannot be shorter than 6 characters");
        }*/
    }
}
