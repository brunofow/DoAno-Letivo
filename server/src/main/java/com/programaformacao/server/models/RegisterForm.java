package com.programaformacao.server.models;

public class RegisterForm {

  private String name;

  private String email;

  private String password;

  private String accountType;

  private String rg;

  private String emittingOrgan;

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
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

  public String getAccountType() {
    return accountType;
  }

  public void setAccountType(String accountType) {
    this.accountType = accountType;
  }

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
}
