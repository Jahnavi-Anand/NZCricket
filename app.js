const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// --- Middleware ---
app.use(cors()); // Optional: remove if not needed
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// --- Set view engine ---
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// --- Serve static files ---
app.use(express.static(path.join(__dirname, 'public')));

// --- Frontend Routes ---

app.get('/auth', (req, res) => {
  res.render('auth');
});

app.get('/landing', (req, res) => {
  res.render('landing', {
    totalParticipantsToday: 156,
    sessionsToday: 12,
    totalSessions: 156,
    participationGrowth: '+8.2%'
  });
});

app.get('/analytics', (req, res) => {
  res.render('analytics');
});

app.get('/form', (req, res) => {
  res.render('form'); 
});

// --- API Routes ---

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'test@example.com' && password === 'password') {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.post('/api/auth/signup', (req, res) => {
  const { fullName, email, password } = req.body;
  if (email && password && fullName) {
    res.status(201).json({ message: 'Account created successfully! Please sign in.' });
  } else {
    res.status(400).json({ message: 'Missing required fields.' });
  }
});

app.post('/api/sessions', (req, res) => {
  console.log('Received session data:', req.body);
  res.json({ message: 'Session data recorded successfully' });
});

app.get('/api/analytics-data', (req, res) => {
  res.json({
    participationTrends: [],
    regionalPerformance: [],
    recentSessions: []
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
