/**
drop table report;
drop table careinfo;
drop table carelist;
drop table review;
drop table good;
drop table favorite_hospital;
drop table animal;
drop table veterinarian;
drop table hospital;
*/
-- drop table careList;
﻿CREATE TABLE `user` (
	`u_id`	VARCHAR(50)	NOT NULL,
	`u_pw`	VARCHAR(100)	NOT NULL,
	`u_code`	Integer	NOT NULL,
	`u_manager`	boolean	NOT NULL	DEFAULT false,
	`u_nickname`	VARCHAR(30)	NOT NULL,
	`h_code`	Integer	NULL,
	`u_deleted`	boolean	NULL	DEFAULT false,
	`u_sms`	boolean	NULL	DEFAULT false,
	`u_license`	VARCHAR(1000)	NULL
);

CREATE TABLE `hospital` (
	`h_code`	Integer	PRIMARY KEY	AUTO_INCREMENT,
	`h_name`	VARCHAR(50)	NOT NULL,
	`h_location`	VARCHAR(50)	NOT NULL,
	`h_city`	VARCHAR(50)	NULL,
	`h_gu`	VARCHAR(10)	NULL,
	`h_dong`	VARCHAR(20)	NULL,
	`h_address`	VARCHAR(100)	NULL,
	`h_station`	VARCHAR(20)	NULL,
	`h_tel`	VARCHAR(20)	NULL,
	`h_holidaytreatment`	VARCHAR(20)	NULL,
	`h_roundtheclock`	boolean	NULL	DEFAULT false,
	`h_tag`	VARCHAR(100)	NULL,
	`h_certification`	boolean	NULL,
	`h_open`	boolean	NULL,
	`h_monday`	VARCHAR(60)	NULL,
	`h_tuesday`	VARCHAR(60)	NULL,
	`h_wednesday`	VARCHAR(60)	NULL,
	`h_thursday`	VARCHAR(60)	NULL,
	`h_friday`	VARCHAR(60)	NULL,
	`h_saturday`	VARCHAR(60)	NULL,
	`h_sunday`	VARCHAR(60)	NULL,
	`h_deleted`	boolean	NULL	DEFAULT False,
	`h_website`	VARCHAR(200)	NULL,
	`h_photocode`	VARCHAR(100)	NULL,
	`h_starrating`	double	NULL
);

CREATE TABLE `review` (
	`r_code`	Integer	PRIMARY KEY	AUTO_INCREMENT,
	`u_id`	VARCHAR(50)	NOT NULL,
	`r_nickname`	VARCHAR(20)	NOT NULL,
	`r_photo1`	VARCHAR(500)	NULL,
	`r_photo2`	VARCHAR(500)	NULL,
	`r_photo3`	VARCHAR(500)	NULL,
	`r_content`	VARCHAR(1000)	NULL,
	`r_receipt`	Boolean	NOT NULL	DEFAULT False,
	`r_treatmentdate`	Date	NOT NULL,
	`r_date`	Date	NOT NULL,
	`r_overtreatment`	Integer	NOT NULL,
	`r_kindness`	Integer	NOT NULL,
	`r_result`	Integer	NOT NULL,
	`r_professionality`	Integer	NOT NULL,
	`r_clean`	Integer	NOT NULL,
	`r_revisit`	Integer	NOT NULL,
	`r_purpose`	VARCHAR(100)	NOT NULL,
	`r_report`	Integer	NOT NULL	DEFAULT 0,
	`r_deleted`	boolean	NOT NULL	DEFAULT False,
	`h_code`	Integer	NOT NULL
);

CREATE TABLE `carelist` (
	`c_code`	Integer	PRIMARY KEY	AUTO_INCREMENT,
	`c_name`	VARCHAR(50)	NOT NULL,
	`c_category`	VARCHAR(50)	NOT NULL
);

CREATE TABLE `careinfo` (
	`ci_code`	integer	PRIMARY KEY	AUTO_INCREMENT,
	`h_code`	Integer	NOT NULL,
	`a_code`	Integer	NULL,
	`ci_price`	Integer	NOT NULL,
	`c_code`	Integer	NOT NULL,
	`r_code`	Integer	NOT NULL
);

CREATE TABLE `veterinarian` (
	`v_code`	VARCHAR(255)	PRIMARY KEY	AUTO_INCREMENT,
	`v_profile`	VARCHAR(500)	NULL,
	`v_career`	VARCHAR(500)	NULL,
	`v_special`	VARCHAR(500)	NULL,
	`h_code`	Integer	NOT NULL,
	`v_deleted`	boolean	NULL,
	`v_name`	VARCHAR(20)	NOT NULL
);

CREATE TABLE `animal` (
	`a_code`	Integer	PRIMARY KEY	AUTO_INCREMENT,
	`a_type`	VARCHAR(30)	NOT NULL,
	`a_species`	VARCHAR(30)	NOT NULL,
	`a_kg`	Double	NOT NULL,
	`a_deleted`	Boolean	NULL	DEFAULT False,
	`u_id`	VARCHAR(50)	NOT NULL,
	`a_year`	Integer	NOT NULL
);

CREATE TABLE `report` (
	`re_code`	Integer	PRIMARY KEY	AUTO_INCREMENT,
	`re_category`	VARCHAR(30)	NOT NULL,
	`re_deleted`	Boolean	NULL	DEFAULT False,
	`u_id`	VARCHAR(50)	NOT NULL,
	`r_code`	Integer	NOT NULL
);

CREATE TABLE `favorite_hospital` (
	`f_code`	Integer	PRIMARY KEY	AUTO_INCREMENT,
	`u_id`	VARCHAR(50)	NOT NULL,
	`h_code`	Integer	NOT NULL
);

CREATE TABLE `hospital_picture` (
	`p_code`	Integer	PRIMARY KEY	AUTO_INCREMENT,
	`h_image`	VARCHAR(100)	NULL,
	`h_photocode`	VARCHAR(100)	NULL
);

CREATE TABLE `good` (
	`g_code`	Integer	PRIMARY KEY	AUTO_INCREMENT,
	`r_code`	Integer	NOT NULL,
	`u_id`	VARCHAR(50)	NOT NULL
);




-- Foreign Key

ALTER TABLE `review` ADD CONSTRAINT `FK_User_TO_Review_1` FOREIGN KEY (
	`u_id`
)
REFERENCES `user` (
	`u_id`
);

ALTER TABLE `review` ADD CONSTRAINT `FK_Hospital_TO_Review_1` FOREIGN KEY (
	`h_code`
)
REFERENCES `hospital` (
	`h_code`
);

ALTER TABLE `careinfo` ADD CONSTRAINT `FK_CareList_TO_Careinfo_1` FOREIGN KEY (
	`c_code`
)
REFERENCES `carelist` (
	`c_code`
);

ALTER TABLE `careinfo` ADD CONSTRAINT `FK_Review_TO_Careinfo_1` FOREIGN KEY (
	`r_code`
)
REFERENCES `review` (
	`r_code`
);

ALTER TABLE `veterinarian` ADD CONSTRAINT `FK_Hospital_TO_Veterinarian_1` FOREIGN KEY (
	`h_code`
)
REFERENCES `hospital` (
	`h_code`
);

ALTER TABLE `animal` ADD CONSTRAINT `FK_User_TO_Animal_1` FOREIGN KEY (
	`u_id`
)
REFERENCES `user` (
	`u_id`
);

ALTER TABLE `report` ADD CONSTRAINT `FK_User_TO_Report_1` FOREIGN KEY (
	`u_id`
)
REFERENCES `user` (
	`u_id`
);

ALTER TABLE `report` ADD CONSTRAINT `FK_Review_TO_Report_1` FOREIGN KEY (
	`r_code`
)
REFERENCES `review` (
	`r_code`
);

ALTER TABLE `favorite_hospital` ADD CONSTRAINT `FK_User_TO_FavoriteHospital_1` FOREIGN KEY (
	`u_id`
)
REFERENCES `user` (
	`u_id`
);

ALTER TABLE `favorite_hospital` ADD CONSTRAINT `FK_Hospital_TO_FavoriteHospital_1` FOREIGN KEY (
	`h_code`
)
REFERENCES `hospital` (
	`h_code`
);

ALTER TABLE `good` ADD CONSTRAINT `FK_Review_TO_Good_1` FOREIGN KEY (
	`r_code`
)
REFERENCES `review` (
	`r_code`
);

ALTER TABLE `good` ADD CONSTRAINT `FK_User_TO_Good_1` FOREIGN KEY (
	`u_id`
)
REFERENCES `user` (
	`u_id`
);