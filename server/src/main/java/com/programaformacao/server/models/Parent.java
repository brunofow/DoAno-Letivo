package com.programaformacao.server.models;


import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Entity
public class Parent {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotNull
  @Size(min = 2, max = 50)
  private String name;

  @NotNull
  private String email;

  @NotNull
  private String password;

  @NotNull
  private String rg;

  @NotNull
  private String emittingOrgan;

  @OneToMany(fetch = FetchType.EAGER, mappedBy = "parent")
  @Fetch(FetchMode.SUBSELECT)
  private List<Students> students = new ArrayList<>();

  public String getRg() {
    return rg;
  }

  public void setRg(String rg) {
    this.rg = rg;
  }

  public String getEmittingOrgan() {
    return emittingOrgan;
  }

  public void setEmittingOrgan(String emittingOrgan) {
    this.emittingOrgan = emittingOrgan;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Long getId() {
    return id;
  }

  public List<Students> getStudents() {
    return students;
  }

  public void setStudents(List<Students> students) {
    this.students = students;
  }

@Override
public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + ((id == null) ? 0 : id.hashCode());
	return result;
}

@Override
public boolean equals(Object obj) {
	if (this == obj)
		return true;
	if (obj == null)
		return false;
	if (getClass() != obj.getClass())
		return false;
	Parent other = (Parent) obj;
	if (id == null) {
		if (other.id != null)
			return false;
	} else if (!id.equals(other.id))
		return false;
	return true;
}
  

}