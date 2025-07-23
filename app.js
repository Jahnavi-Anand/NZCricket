// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Keep if you still need CORS for external API calls, otherwise remove
const path = require('path'); // For path manipulation
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Consider if truly necessary for a combined app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // For parsing form data

// Configure EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// Serve static files (CSS, JS, images for the frontend)
app.use(express.static(path.join(__dirname, 'public')));

// --- Frontend Routes (EJS Pages) ---

// --- Authentication Route ---
app.get('/auth', (req, res) => {
    res.render('auth'); // Renders the auth.ejs template
  });
  
  // --- API Routes for Authentication (as discussed before) ---
  app.post('/api/auth/login', (req, res) => {
      // In a real app:
      // 1. Validate email/password
      // 2. Query database for user
      // 3. Compare hashed password
      // 4. If valid, create a session or JWT
      // 5. Respond with success/failure
      const { email, password } = req.body;
      if (email === 'test@example.com' && password === 'password') {
          res.json({ message: 'Login successful' });
      } else {
          res.status(401).json({ message: 'Invalid credentials' });
      }
  });
  
  app.post('/api/auth/signup', (req, res) => {
      // In a real app:
      // 1. Validate input (fullName, email, password)
      // 2. Hash password
      // 3. Save new user to database
      // 4. Respond with success/failure
      const { fullName, email, password } = req.body;
      console.log(`Attempting to sign up: ${fullName}, ${email}, ${password}`);
      if (email && password && fullName) {
          res.status(201).json({ message: 'Account created successfully! Please sign in.' });
      } else {
          res.status(400).json({ message: 'Missing required fields.' });
      }
  });

// Landing Page (Activator Welcome Dashboard)
app.get('/', (req, res) => {
  // You'd typically fetch dynamic data here and pass it to the EJS template
  res.render('landing', {
      totalParticipants: 156, // Example static data
      sessionsToday: 12,
      totalSessions: 156,
      participationGrowth: '+8.2%'
  });
});

// Session Data Entry Form
app.get('/session-data-entry', (req, res) => {
  res.render('session-data-entry');
});

// Analytics Dashboard
app.get('/analytics', (req, res) => {
    res.render('analytics');
});

// --- Backend API Routes (for form submissions, data fetching etc.) ---
// Example: User authentication (login/signup submission)
app.post('/api/auth/login', (req, res) => {
    // Handle login logic, validate credentials, send JWT or session
    res.json({ message: 'Login successful' });
});

app.post('/api/auth/signup', (req, res) => {
    // Handle signup logic, save user to DB
    res.json({ message: 'Signup successful' });
});

// Example: Session data submission
app.post('/api/sessions', (req, res) => {
    // Save session data to database
    console.log('Received session data:', req.body);
    res.json({ message: 'Session data recorded successfully' });
});

// Example: Fetching analytics data for dashboard
app.get('/api/analytics-data', (req, res) => {
    // Fetch data from database and return as JSON
    res.json({
        participationTrends: [/* data */],
        regionalPerformance: [/* data */],
        recentSessions: [/* data */]
    });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});