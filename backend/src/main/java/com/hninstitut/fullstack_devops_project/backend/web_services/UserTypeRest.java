package com.hninstitut.fullstack_devops_project.backend.web_services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.hninstitut.fullstack_devops_project.backend.entity.UserType;
import com.hninstitut.fullstack_devops_project.backend.repository.UserRepository;
import com.hninstitut.fullstack_devops_project.backend.repository.UserTypeRepository;

@CrossOrigin(value="*")
@RestController
@RequestMapping(value="userTypes")
public class UserTypeRest {
	
	/*--------- Injection UserTypeRepository ------------- */
	@Autowired
	private UserTypeRepository typeRepository;

	public void setTypeRepository(UserTypeRepository typeRepository) {
		this.typeRepository = typeRepository;
	}
	
	/*--------- Injection UserRepository ------------- */
	@Autowired
	private UserRepository userRepository;
	
	public void setUserRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	/*--------- méthode à exposer ------------- */
	/**
	 * expose la liste des userType
	 * @return
	 */
	@GetMapping()
	public List<UserType> getAllUserType(){
		return typeRepository.findAll();
	}
	
	/**
	 * expose un userType
	 * @param id
	 * @return
	 */
	@GetMapping(value = "/{id}")
	public UserType getUserTypeById(@PathVariable("id") Long id) {
		 UserType type = null;
		 Optional<UserType> optType = typeRepository.findById(id);
		 
		 if (optType.isPresent()) type = optType.get();
		
		return 	type;
	}
	
	/**
	 * ajoute un userType à la bdd
	 * @param type
	 * @return
	 */
	@PostMapping()
	public ResponseEntity<UserType> saveUserType(@RequestBody UserType type){
		UserType typeAdded = typeRepository.save(type);
		return new ResponseEntity<UserType>(typeAdded, HttpStatus.OK);
	}

	/**
	 * update un userType
	 * @param type
	 * @param id
	 * @return
	 */
	@PutMapping(value="/{id}")
	public ResponseEntity<UserType> updateUserType(@RequestBody UserType type, @PathVariable("id") Long id){
		UserType typeToUpdate = typeRepository.getOne(id);
		
		typeToUpdate.setName(type.getName());
		
		UserType typeUpdated = typeRepository.save(typeToUpdate);
		return new ResponseEntity<UserType>(typeUpdated, HttpStatus.OK);
	}
	
	/**
	 * supprime un userType
	 * @param id
	 * @return
	 */
	@DeleteMapping(value="/{id}")
	public ResponseEntity<String> deleteUserType(@PathVariable("id") Long id){	
		
		//verifie que usertype n'est lié à aucun user		 
		if (userRepository.countByUserTypeId(id) == 0) {
			typeRepository.deleteById(id);
			return new ResponseEntity<>("UserType deleted", HttpStatus.OK);
		}else {
			return new ResponseEntity<>("This UserType is associated with some Users. Cannot be remove.", HttpStatus.UNAUTHORIZED);
		}
		
		
	}
	

}
