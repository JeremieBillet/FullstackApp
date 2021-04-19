package com.hninstitut.fullstack_devops_project.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.hninstitut.fullstack_devops_project.backend.entity.User;


public interface UserRepository extends JpaRepository<User, Long> {

	
	/*---------- methode supplémentaire ---------------*/
	public Long countByUserTypeId(Long userTypeId);
	

}
