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

🏗️ Tech Stack

Frontend:
HTML
CSS
JavaScript

Backend:
Node.js
Express.js

Database:
MongoDB Atlas
Mongoose

📂 Project Structure
Secure-Online-Voting-System
│
├── public
│   ├── home.html
│   ├── create-election.html
│   ├── add-candidates.html
│   ├── vote.html
│   ├── results.html
│   ├── styles.css
│   ├── script.js
│   └── images/
│
├── routes
│   ├── electionRoutes.js
│   ├── voteRoutes.js
│   └── resultRoutes.js
│
├── models
│   ├── Election.js
│   ├── Candidate.js
│   └── Voter.js
│
├── server.js
├── package.json
├── README.md
│
└── .env (not pushed to GitHub)

🔐 Environment Variables
Create a .env file in the root directory:
MONGO_URI=your_mongodb_connection_string
PORT=3000
⚠️ Make sure .env is added to .gitignore.

🛠️ Installation & Setup

1️⃣ Clone the repository
git clone https://github.com/YOUR_USERNAME/voting-app.git
cd voting-app

2️⃣ Install dependencies
npm install

3️⃣ Create .env file

4️⃣ Run the server
node server.js

Server will run on:
http://localhost:3000

🧠 How It Works
Admin creates an election.
System generates a unique election code.
Admin adds candidates with symbols.

Voters enter:
Phone Number
Election Code
Each voter can vote only once.

Results:
Admin can view anytime.
Public can view after deadline.

🛡️ Security Features
Environment variable protection
No hardcoded credentials
Unique election codes
Vote duplication prevention
Admin access restriction
Countdown-based deadline enforcement

📌 Future Enhancements
Face biometric authentication
Cancelable biometric templates
Blockchain-based vote verification
Secure TEE-based counting
OTP verification

👨‍💻 Author
Harshini K C
Full Stack Developer
Secure Systems Enthusiast

