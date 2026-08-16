-- ==========================================
-- GYM MANAGEMENT SYSTEM DATABASE
-- ==========================================

DROP DATABASE IF EXISTS gym_management;

CREATE DATABASE gym_management;

USE gym_management;

-- ==========================================
-- MEMBERS
-- ==========================================

CREATE TABLE members(

id INT PRIMARY KEY AUTO_INCREMENT,

name VARCHAR(100) NOT NULL,

email VARCHAR(100) UNIQUE NOT NULL,

phone VARCHAR(15),

password VARCHAR(255) NOT NULL,

plan VARCHAR(50),

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

-- ==========================================
-- TRAINERS
-- ==========================================

CREATE TABLE trainers(

id INT PRIMARY KEY AUTO_INCREMENT,

name VARCHAR(100) NOT NULL,

specialization VARCHAR(100),

experience INT,

phone VARCHAR(15),

email VARCHAR(100),

salary DECIMAL(10,2),

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

-- ==========================================
-- CLASSES
-- ==========================================

CREATE TABLE classes(

id INT PRIMARY KEY AUTO_INCREMENT,

class_name VARCHAR(100) NOT NULL,

trainer_id INT,

duration VARCHAR(50),

schedule VARCHAR(100),

fees DECIMAL(10,2),

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

FOREIGN KEY(trainer_id)

REFERENCES trainers(id)

ON DELETE SET NULL

);

-- ==========================================
-- CONTACTS
-- ==========================================

CREATE TABLE contacts(

id INT PRIMARY KEY AUTO_INCREMENT,

name VARCHAR(100),

email VARCHAR(100),

phone VARCHAR(15),

subject VARCHAR(150),

message TEXT,

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

-- ==========================================
-- PAYMENTS
-- ==========================================

CREATE TABLE payments(

id INT PRIMARY KEY AUTO_INCREMENT,

member_id INT,

amount DECIMAL(10,2),

payment_method VARCHAR(50),

payment_status VARCHAR(30),

payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

FOREIGN KEY(member_id)

REFERENCES members(id)

ON DELETE CASCADE

);

-- ==========================================
-- ATTENDANCE
-- ==========================================

CREATE TABLE attendance(

id INT PRIMARY KEY AUTO_INCREMENT,

member_id INT,

attendance_date DATE,

status ENUM('Present','Absent') DEFAULT 'Present',

FOREIGN KEY(member_id)

REFERENCES members(id)

ON DELETE CASCADE

);

-- ==========================================
-- ADMINS
-- ==========================================

CREATE TABLE admins(

id INT PRIMARY KEY AUTO_INCREMENT,

username VARCHAR(50) UNIQUE,

password VARCHAR(255),

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);