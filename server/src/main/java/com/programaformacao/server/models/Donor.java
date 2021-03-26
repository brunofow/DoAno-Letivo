package com.programaformacao.server.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;

@Entity
public class Donor{

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  @NotNull
  private String name;
  @NotNull
  private String CPF;
  @NotNull
  private String password;
  @NotNull
  private String email;
  @OneToMany(mappedBy = "donor")
  private List<Donation> donations = new ArrayList<>();

  public Donor(){
  }
  public Donor(Long id, String name, String CPF, String password, String email) {
    super();
    this.id = id;
    this.name = name;
    this.CPF = CPF;
    this.password = password;
    this.email = email;
  }
  public Long getId() {
    return id;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }

  public String getCPF() {
    return CPF;
  }
  public void setCPF(String cPF) {
    CPF = cPF;
  }
  public String getPassword() {
    return password;
  }
  public void setPassword(String password) {
    this.password = password;
  }
  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
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
    Donor other = (Donor) obj;
    if (id == null) {
      if (other.id != null)
        return false;
    } else if (!id.equals(other.id))
      return false;
    return true;
  }
}