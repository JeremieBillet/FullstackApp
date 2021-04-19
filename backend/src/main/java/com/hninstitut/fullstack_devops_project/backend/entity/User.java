package com.hninstitut.fullstack_devops_project.backend.entity;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name="user")
public class User implements Serializable {

	/*--------------- attributs -------------------*/
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Long id;
	
	@Column(name="last_name")
	private String lastName;
	
	@Column(name="first_name")
	private String firstName;
	
	
	@ManyToOne
	@JoinColumn(name="user_type_id", referencedColumnName = "id")
	private UserType userType;
	
	/*--------------- Constructors -------------------*/
	public User() {
	}

	public User(String lastName, String firstName, UserType userType) {
		this.lastName = lastName;
		this.firstName = firstName;
		this.userType = userType;
	}

	/*--------------- Getters/setters -------------------*/
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public UserType getUserType() {
		return userType;
	}

	public void setUserType(UserType userType) {
		this.userType = userType;
	}
	
	
	
}
