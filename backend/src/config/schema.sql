-- ============================================
-- DEEP WATERS CHURCH — DATABASE SCHEMA
-- ============================================

CREATE DATABASE IF NOT EXISTS deep_waters_church CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE deep_waters_church;

-- Sermons
CREATE TABLE sermons (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  speaker VARCHAR(150) NOT NULL,
  description TEXT,
  youtube_url VARCHAR(500),
  thumbnail_url VARCHAR(500),
  sermon_series VARCHAR(200),
  date_published DATE NOT NULL,
  duration_minutes INT,
  is_featured TINYINT(1) DEFAULT 0,
  is_published TINYINT(1) DEFAULT 1,
  view_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Events
CREATE TABLE events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  event_date DATE NOT NULL,
  event_time VARCHAR(50),
  end_time VARCHAR(50),
  description TEXT,
  location VARCHAR(300),
  image_url VARCHAR(500),
  is_featured TINYINT(1) DEFAULT 0,
  is_published TINYINT(1) DEFAULT 1,
  registration_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Ministries
CREATE TABLE ministries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  description TEXT,
  icon_name VARCHAR(100),
  image_url VARCHAR(500),
  contact_email VARCHAR(200),
  display_order INT DEFAULT 0,
  is_active TINYINT(1) DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Prayer Requests
CREATE TABLE prayer_requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  email VARCHAR(200),
  phone VARCHAR(30),
  request_text TEXT NOT NULL,
  is_confidential TINYINT(1) DEFAULT 0,
  is_salvation TINYINT(1) DEFAULT 0,
  is_praise TINYINT(1) DEFAULT 0,
  status ENUM('new','prayed','archived') DEFAULT 'new',
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact Submissions
CREATE TABLE contact_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  email VARCHAR(200) NOT NULL,
  phone VARCHAR(30),
  message TEXT NOT NULL,
  is_read TINYINT(1) DEFAULT 0,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Plan Visit Submissions
CREATE TABLE plan_visit_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  email VARCHAR(200) NOT NULL,
  phone VARCHAR(30),
  visitor_count INT DEFAULT 1,
  has_children TINYINT(1) DEFAULT 0,
  children_ages VARCHAR(100),
  questions TEXT,
  preferred_contact ENUM('email','phone') DEFAULT 'email',
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Blog Posts
CREATE TABLE blog_posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  content LONGTEXT,
  excerpt TEXT,
  author VARCHAR(150),
  featured_image_url VARCHAR(500),
  category VARCHAR(100),
  tags VARCHAR(500),
  is_published TINYINT(1) DEFAULT 0,
  published_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Testimonies
CREATE TABLE testimonies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  testimony_text TEXT NOT NULL,
  category ENUM('salvation','healing','baptism','transformation','community') DEFAULT 'salvation',
  is_featured TINYINT(1) DEFAULT 0,
  is_approved TINYINT(1) DEFAULT 0,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Newsletter Subscribers
CREATE TABLE newsletter_subscribers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(200) NOT NULL UNIQUE,
  name VARCHAR(150),
  is_active TINYINT(1) DEFAULT 1,
  subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed data — Ministries
INSERT INTO ministries (name, description, icon_name, display_order) VALUES
('Prayer Ministry', 'Interceding for our church, community and nation.', 'hands-praying', 1),
('Kids Ministry', 'Fun, safe and age-appropriate programs for children.', 'baby', 2),
('Youth & Young Adults', 'Building the next generation in faith.', 'users', 3),
('Men''s Ministry', 'Iron sharpening iron — growing together as men of God.', 'user', 4),
('Women''s Ministry', 'Encouraging and equipping women in faith and life.', 'heart', 5),
('Home Groups', 'Connecting in smaller groups throughout the week.', 'home', 6),
('Worship Team', 'Leading the church in Spirit-filled worship.', 'music', 7),
('Outreach Ministry', 'Sharing the love of Jesus in our local community.', 'globe', 8);

-- Seed data — Sermons
INSERT INTO sermons (title, speaker, description, youtube_url, date_published, is_featured, is_published) VALUES
('Walking by Faith', 'Pastor Marco D''Angelo', 'A powerful message on trusting God in every season of life.', 'https://www.youtube.com/watch?v=placeholder', '2025-05-25', 1, 1),
('The Deep Waters of Grace', 'Pastor Marco D''Angelo', 'Discovering the depths of God''s grace and mercy in our lives.', 'https://www.youtube.com/watch?v=placeholder2', '2025-05-18', 0, 1),
('Rooted and Built Up', 'Pastor Marco D''Angelo', 'How to establish deep roots in Christ through the Word and prayer.', 'https://www.youtube.com/watch?v=placeholder3', '2025-05-11', 0, 1);

-- Seed data — Events
INSERT INTO events (title, event_date, event_time, end_time, description, location, is_featured, is_published) VALUES
('Sunday Service', '2025-05-25', '10:00am', '11:30am', 'Everyone is welcome to join us for worship and Bible teaching.', '121 Orchard Road, Doreen VIC 3754', 1, 1),
('Prayer Night', '2025-05-30', '7:30pm', '9:00pm', 'An evening of intercession and worship together.', '121 Orchard Road, Doreen VIC 3754', 1, 1),
('Pentecost Sunday', '2025-06-08', '10:00am', '12:00pm', 'Special celebration service for Pentecost Sunday.', '121 Orchard Road, Doreen VIC 3754', 1, 1),
('Bible Study', '2025-06-11', '7:00pm', '8:30pm', 'Mid-week Bible study for deeper learning and discussion.', '121 Orchard Road, Doreen VIC 3754', 0, 1);
