package com.hninstitut.fullstack_devops_project.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hninstitut.fullstack_devops_project.backend.entity.UserType;

public interface UserTypeRepository extends JpaRepository<UserType, Long> {

}
