import db from './database';

export function initDb(): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS sermons (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      speaker TEXT NOT NULL,
      description TEXT,
      youtube_url TEXT,
      thumbnail_url TEXT,
      sermon_series TEXT,
      date_published TEXT NOT NULL,
      duration_minutes INTEGER,
      is_featured INTEGER DEFAULT 0,
      is_published INTEGER DEFAULT 1,
      view_count INTEGER DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      event_date TEXT NOT NULL,
      event_time TEXT,
      end_time TEXT,
      description TEXT,
      location TEXT,
      image_url TEXT,
      is_featured INTEGER DEFAULT 0,
      is_published INTEGER DEFAULT 1,
      registration_url TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS ministries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      icon_name TEXT,
      image_url TEXT,
      contact_email TEXT,
      display_order INTEGER DEFAULT 0,
      is_active INTEGER DEFAULT 1,
      created_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS prayer_requests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT,
      phone TEXT,
      request_text TEXT NOT NULL,
      is_confidential INTEGER DEFAULT 0,
      is_salvation INTEGER DEFAULT 0,
      is_praise INTEGER DEFAULT 0,
      status TEXT DEFAULT 'new',
      submitted_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS contact_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      message TEXT NOT NULL,
      is_read INTEGER DEFAULT 0,
      submitted_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS plan_visit_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      visitor_count INTEGER DEFAULT 1,
      has_children INTEGER DEFAULT 0,
      children_ages TEXT,
      questions TEXT,
      preferred_contact TEXT DEFAULT 'email',
      submitted_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS blog_posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      content TEXT,
      excerpt TEXT,
      author TEXT,
      featured_image_url TEXT,
      category TEXT,
      tags TEXT,
      is_published INTEGER DEFAULT 0,
      published_at TEXT,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS testimonies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      testimony_text TEXT NOT NULL,
      category TEXT DEFAULT 'salvation',
      is_featured INTEGER DEFAULT 0,
      is_approved INTEGER DEFAULT 0,
      submitted_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS newsletter_subscribers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      name TEXT,
      is_active INTEGER DEFAULT 1,
      subscribed_at TEXT DEFAULT (datetime('now'))
    );
  `);

  // Seed only if tables are empty
  const ministryCount = (db.prepare('SELECT COUNT(*) as c FROM ministries').get() as any).c;
  if (ministryCount === 0) {
    const insertMinistry = db.prepare(
      'INSERT INTO ministries (name, description, icon_name, display_order) VALUES (?, ?, ?, ?)'
    );
    const seedMinistries = db.transaction(() => {
      insertMinistry.run('Prayer Ministry', 'Interceding for our church, community and nation.', 'hands-praying', 1);
      insertMinistry.run('Kids Ministry', 'Fun, safe and age-appropriate programs for children.', 'baby', 2);
      insertMinistry.run('Youth & Young Adults', 'Building the next generation in faith.', 'users', 3);
      insertMinistry.run("Men's Ministry", "Iron sharpening iron — growing together as men of God.", 'user', 4);
      insertMinistry.run("Women's Ministry", 'Encouraging and equipping women in faith and life.', 'heart', 5);
      insertMinistry.run('Home Groups', 'Connecting in smaller groups throughout the week.', 'home', 6);
      insertMinistry.run('Worship Team', 'Leading the church in Spirit-filled worship.', 'music', 7);
      insertMinistry.run('Outreach Ministry', 'Sharing the love of Jesus in our local community.', 'globe', 8);
    });
    seedMinistries();
  }

  const sermonCount = (db.prepare('SELECT COUNT(*) as c FROM sermons').get() as any).c;
  if (sermonCount === 0) {
    const insertSermon = db.prepare(
      'INSERT INTO sermons (title, speaker, description, youtube_url, date_published, is_featured, is_published) VALUES (?, ?, ?, ?, ?, ?, ?)'
    );
    const seedSermons = db.transaction(() => {
      insertSermon.run('Walking by Faith', "Pastor Marco D'Angelo", 'A powerful message on trusting God in every season of life.', 'https://www.youtube.com/watch?v=placeholder', '2025-05-25', 1, 1);
      insertSermon.run('The Deep Waters of Grace', "Pastor Marco D'Angelo", "Discovering the depths of God's grace and mercy in our lives.", 'https://www.youtube.com/watch?v=placeholder2', '2025-05-18', 0, 1);
      insertSermon.run('Rooted and Built Up', "Pastor Marco D'Angelo", 'How to establish deep roots in Christ through the Word and prayer.', 'https://www.youtube.com/watch?v=placeholder3', '2025-05-11', 0, 1);
    });
    seedSermons();
  }

  const eventCount = (db.prepare('SELECT COUNT(*) as c FROM events').get() as any).c;
  if (eventCount === 0) {
    const insertEvent = db.prepare(
      'INSERT INTO events (title, event_date, event_time, end_time, description, location, is_featured, is_published) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    );
    const seedEvents = db.transaction(() => {
      insertEvent.run('Sunday Service', '2025-05-25', '10:00am', '11:30am', 'Everyone is welcome to join us for worship and Bible teaching.', '121 Orchard Road, Doreen VIC 3754', 1, 1);
      insertEvent.run('Prayer Night', '2025-05-30', '7:30pm', '9:00pm', 'An evening of intercession and worship together.', '121 Orchard Road, Doreen VIC 3754', 1, 1);
      insertEvent.run('Pentecost Sunday', '2025-06-08', '10:00am', '12:00pm', 'Special celebration service for Pentecost Sunday.', '121 Orchard Road, Doreen VIC 3754', 1, 1);
      insertEvent.run('Bible Study', '2025-06-11', '7:00pm', '8:30pm', 'Mid-week Bible study for deeper learning and discussion.', '121 Orchard Road, Doreen VIC 3754', 0, 1);
    });
    seedEvents();
  }

  console.log('Database initialised at', db.name);
}
