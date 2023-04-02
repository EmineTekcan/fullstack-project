package com.eminetekcan.fullstackbackend.service.impl;

import com.eminetekcan.fullstackbackend.exception.UserNotFoundException;
import com.eminetekcan.fullstackbackend.model.User;
import com.eminetekcan.fullstackbackend.repository.UserRepository;
import com.eminetekcan.fullstackbackend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getOneUserById(Long id) {
        return userRepository.findById(id).orElseThrow(()->new UserNotFoundException(id));
    }

    @Override
    public User updateUser(Long id, User user) {
        User findedUser=userRepository.findById(id).orElseThrow(()->new UserNotFoundException(id));
        findedUser.setEmail(user.getEmail());
        findedUser.setName(user.getName());
        findedUser.setUsername(user.getUsername());
        return userRepository.save(findedUser);
    }

    @Override
    public void deleteUser(Long id) {
        User user=userRepository.findById(id).orElseThrow(()->new UserNotFoundException(id));
        if (user !=null){
            userRepository.delete(user);
        }
    }
}
