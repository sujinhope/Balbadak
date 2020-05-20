package com.a305.balbadack.model.dto;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import org.apache.catalina.User;

import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.AccessLevel;
import lombok.Getter;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Getter
@Setter
@ToString
@JsonIdentityInfo(generator=ObjectIdGenerators.IntSequenceGenerator.class)
@Table(name = "veterinarian")
public class Veterinarian {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(nullable = false, unique = true)
  private int v_code;

  @Column(length = 500)
  private String v_profile;
  
  @Column(length = 500)
  private String v_career;

  @Column(length = 500)
  private String v_special;

  @Column(length = 20)
  private String v_name;

  // 외래키 설정
  @OneToOne(mappedBy="user")
  private User user;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "h_code", referencedColumnName = "h_code", insertable = false, updatable = false, foreignKey = @ForeignKey(name = "fk_h_code"))
  private Hospital Hospital;

	@Column(columnDefinition = "boolean default false")
	private boolean v_deleted;
}