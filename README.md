🗳️ Secure Online Voting System
A scalable and secure full-stack web application designed to conduct digital elections with controlled access, one-vote-per-user validation, and real-time election monitoring.
This system ensures transparency, security, and structured election management through role-based access and time-based restrictions.

🎯 Project Objective
The goal of this project is to build a secure digital voting platform where:
Administrators can create and manage elections.
Voters can cast votes using authentication.
Voting is restricted to one vote per user.
Results are controlled based on election deadlines.

🚀 Core Features (Detailed)
🔹 Election Management
Create elections with title, start time, and end time.
Automatically generate a unique election code.
Restrict admin from voting.

🔹 Candidate Management
Add candidates with symbols.
Store candidates in MongoDB.
Dynamic candidate display during voting.

🔹 Secure Voting Mechanism
Phone number authentication.
One vote per voter enforcement.
Prevent duplicate submissions.
Election time validation (before start / after end).

🔹 Real-Time Monitoring
Countdown timer to election deadline.
Automatic voting disable after deadline.
Admin can monitor vote counts live.

🔹 Result Management
Admin can view results anytime.
Public can view results only after deadline.
Vote count displayed per candidate
