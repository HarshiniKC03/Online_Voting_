const express = require('express');
const router = express.Router();
const Election = require('../models/Election');
const User = require('../models/User');

// Generate election code
function generateCode() {
  return Math.random().toString(36).substr(2, 6).toUpperCase();
}

// POST /api/elections/create
router.post('/create', async (req, res) => {
  try {
    const { adminPhone, title, startTime, deadline, candidates } = req.body;
    const code = generateCode();

    const election = new Election({
      adminPhone,
      title,
      startTime,
      deadline,
      code,
      candidates
    });

    await election.save();
    res.json({ success: true, code });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create election.' });
  }
});

// GET /api/elections/:code
router.get('/:code', async (req, res) => {
  try {
    const election = await Election.findOne({ code: req.params.code });
    if (!election) return res.status(404).json({ message: 'Election not found' });
    res.json(election);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching election' });
  }
});

// POST /api/elections/vote
router.post('/vote', async (req, res) => {
  try {
    const { phoneNumber, electionCode, candidateName } = req.body;
    const election = await Election.findOne({ code: electionCode });
    if (!election) return res.status(404).json({ message: 'Election not found' });

    const now = new Date();
    if (now < new Date(election.startTime)) return res.status(403).json({ message: 'Voting not started yet' });
    if (now > new Date(election.deadline)) return res.status(403).json({ message: 'Voting has ended' });

    if (phoneNumber === election.adminPhone) {
      return res.status(403).json({ message: 'Admin cannot vote' });
    }

    let user = await User.findOne({ phoneNumber, electionCode });
    if (user && user.hasVoted) {
      return res.status(403).json({ message: 'You have already voted' });
    }

    if (!user) {
      user = new User({ phoneNumber, electionCode, hasVoted: true });
    } else {
      user.hasVoted = true;
    }

    const candidate = election.candidates.find(c => c.name === candidateName);
    if (!candidate) return res.status(404).json({ message: 'Candidate not found' });

    candidate.votes += 1;

    await election.save();
    await user.save();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Voting failed' });
  }
});

// POST /api/elections/results
router.post('/results', async (req, res) => {
  try {
    const { phoneNumber, electionCode } = req.body;
    const election = await Election.findOne({ code: electionCode });
    if (!election) return res.status(404).json({ message: 'Election not found' });

    const now = new Date();
    const isAdmin = phoneNumber === election.adminPhone;

    if (!isAdmin && now < new Date(election.deadline)) {
      return res.status(403).json({ message: 'Results available after deadline' });
    }

    res.json(election.candidates);
  } catch (err) {
    console.error('Error fetching results:', err);
    res.status(500).json({ message: 'Error fetching results' });
  }
});

// POST /api/elections/check-vote
router.post('/check-vote', async (req, res) => {
  try {
    const { phoneNumber, electionCode } = req.body;
    const user = await User.findOne({ phoneNumber, electionCode });
    res.json({ alreadyVoted: !!(user && user.hasVoted) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Vote check failed' });
  }
});

module.exports = router;

