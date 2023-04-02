package com.eminetekcan.fullstackbackend.service;

import com.eminetekcan.fullstackbackend.model.User;

import java.util.List;

public interface UserService {

    public User saveUser(User user);
    public List<User> getAllUsers();
    public User getOneUserById(Long id);
    public User updateUser(Long id, User user);
    public void deleteUser(Long id);
}
