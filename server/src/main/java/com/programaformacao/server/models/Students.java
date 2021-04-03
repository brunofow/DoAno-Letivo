package com.programaformacao.server.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Students {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String avatar;
	
	@NotNull
	@Size(min = 2, max = 50)
	private String name;


	private String description;

	private Integer enrollment;

	@ManyToOne
	@JoinColumn(name = "kit_id")
	private SchoolKit kit;

	@ManyToOne
	@JoinColumn(name = "school_id")
	private School school;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "parent_id")
	private Parent parent;
	
	@Column(columnDefinition = "boolean default false")
	private boolean donated;
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "students_donation", joinColumns = @JoinColumn(
			name = "students_id"), inverseJoinColumns = @JoinColumn(name = "donation_id") )
	private List<Donation> donation = new ArrayList<>();
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAvatar() {
		return avatar;
	}

	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getEnrollment() {
		return enrollment;
	}

	public void setEnrollment(Integer enrollment) {
		this.enrollment = enrollment;
	}

	public SchoolKit getKit() {
		return kit;
	}

	public void setKit(SchoolKit kit) {
		this.kit = kit;
	}

	public School getSchool() {
		return school;
	}

	public void setSchool(School school) {
		this.school = school;
	}

	public Parent getParent() {
		return parent;
	}

	public void setParent(Parent parent) {
		this.parent = parent;
	}

	public Boolean getDonated() {
		return donated;
	}

	public void setDonated(Boolean donated) {
		this.donated = donated;
	}

	public List<Donation> getDonation() {
		return donation;
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
		Students other = (Students) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	

}
