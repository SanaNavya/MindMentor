import React, { useState, useEffect } from "react";
import "./Dashboard.css";

import Bot from "./Bot"; // Import the Bot component

export default function Dashboard() {
  const [selectedSection, setSelectedSection] = useState("home");
  const [isBotVisible, setIsBotVisible] = useState(false);
  const [isBotIconVisible, setIsBotIconVisible] = useState(true);
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [faqs, setFaqs] = useState([
    { question: "How do I reset my password?", answer: "Go to your profile settings and click on 'Reset Password'.", open: false },
    { question: "Where can I see my progress?", answer: "You can view your progress in the 'Progress' section.", open: false },
    { question: "How do I contact support?", answer: "You can contact support via the 'Help' section or chat with our bot.", open: false },
    { question: "Can I retake a course?", answer: "Yes, you can retake any course from the 'Courses' section.", open: false },
  ]);

  const [celebrate, setCelebrate] = useState(null); // Manage celebration state

  useEffect(() => {}, []);

  const handleNavClick = (section) => {
    setSelectedSection(section);
    setIsBotIconVisible(true);
  };

  const handleImageClick = () => {
    setIsBotVisible(!isBotVisible);
  };

  const handleBotClose = () => {
    setIsBotVisible(false);
  };

  const toggleFaq = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  const handleLeaderboardItemClick = (index) => {
    setCelebrate(index);
    setTimeout(() => setCelebrate(null), 1500); // Reset celebration after animation
  };

  return (
    <div className="dashboard-container">
      <header className="header">
        <div className="left-header">
          <img
            src="https://via.placeholder.com/100x50.png?text=Logo"
            alt="Logo"
            className="logo"
          />
        </div>
        <div className="nav-menu">
          <a href="#" className="nav-link" onClick={() => handleNavClick("home")}>Home</a>
          <a href="#" className="nav-link" onClick={() => handleNavClick("courses")}>Courses</a>
          <a href="#" className="nav-link" onClick={() => handleNavClick("LeaderBoard")}>LeaderBoard</a>
          <a href="#" className="nav-link" onClick={() => handleNavClick("help")}>Help</a>
        </div>
        <div className="right-header">
          <div
            className="profile-image-container"
            onMouseEnter={() => setIsProfileVisible(true)}
            onMouseLeave={() => setIsProfileVisible(false)}
          >
            <img
              src="https://i.pinimg.com/564x/6d/5f/c6/6d5fc60bae3dc6139eefa31af206596f.jpg"
              alt="Profile"
              className="profile-image"
            />
            {isProfileVisible && (
              <div className="profile-dropdown">
                <p><strong>User Name</strong></p>
                <p>Email: user@example.com</p>
                <p><a href="#">Profile Settings</a></p>
                <p><a href="#">Logout</a></p>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="main-content">
        {selectedSection === "home" && (
          <section className="home-section">
            <h2>Home</h2>
            <p>Hello Username! Welcome to your dashboard. Let's start learning today!</p>
          </section>
        )}

        {selectedSection === "courses" && (
          <section className="courses-section">
            <h2>Available Courses</h2>
            <div className="courses-grid">
              <div className="course-card">
                <h3>GATE</h3>
                <p>Description: A comprehensive course to prepare for GATE.</p>
                <button className="continue-button">Explore GATE</button>
              </div>
              <div className="course-card">
                <h3>Aptitude</h3>
                <p>Description: Enhance your aptitude skills with this course.</p>
                <button className="continue-button">Explore Aptitude</button>
              </div>
            </div>
          </section>
        )}

        {selectedSection === "progress" && (
          <section className="progress-section">
            <h2>Your Progress</h2>
            <p>Track your course completion and hours studied here.</p>
          </section>
        )}

        {selectedSection === "help" && (
          <section className="help-section">
            <div className="faq-section">
              <h3>Frequently Asked Questions</h3>
              <ul>
                {faqs.map((faq, index) => (
                  <li key={index} className="faq-item">
                    <button className="faq-question" onClick={() => toggleFaq(index)}>
                      {faq.question}
                    </button>
                    {faq.open && <p className="faq-answer">{faq.answer}</p>}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {selectedSection === "LeaderBoard" && (
          <section className="leaderboard-section">
            <h2>Leaderboard</h2>
            <img
              src="https://via.placeholder.com/1200x200?text=Leaderboard+Banner" // Add your leaderboard image URL here
              alt="Leaderboard Banner"
              className="leaderboard-banner"
            />
            <div className="leaderboard-container">
              {[ 
                { rank: 1, name: "Alice", score: 1500 },
                { rank: 2, name: "Bob", score: 1400 },
                { rank: 3, name: "Charlie", score: 1300 },
                { rank: 4, name: "David", score: 1200 },
                { rank: 5, name: "Eve", score: 1100 }
              ].map((leader, index) => (
                <div
                  key={leader.rank}
                  className={`leaderboard-item ${leader.rank === 1 ? "top-place" : leader.rank === 2 ? "second-place" : leader.rank === 3 ? "third-place" : "remaining-places"}`}
                  onClick={() => handleLeaderboardItemClick(leader.rank)}
                >
                  <div className="place">{leader.rank}.</div>
                  <div className="leader-info">
                    <img
                      src={`https://via.placeholder.com/50?text=${leader.name.charAt(0)}`}
                      alt={leader.name}
                      className="leader-avatar"
                    />
                    <div className="leader-details">
                      <h3>{leader.name}</h3>
                      <p>Score: {leader.score}</p>
                    </div>
                  </div>
                </div>
              ))}
              {celebrate !== null && (
                <div className="fireworks-container">
                  <div className="fireworks"></div>
                </div>
              )}
            </div>
          </section>
        )}

        <div className="bot-image-container">
          {isBotIconVisible && (
            <>
              <div className="message">HI I am Joy</div>
              <img
                src="https://i.pinimg.com/originals/0c/67/5a/0c675a8e1061478d2b7b21b330093444.gif"
                alt="Help Bot Trigger"
                onClick={handleImageClick}
                className="help-image"
              />
            </>
          )}
        </div>
      </main>

      {isBotVisible && <Bot onClose={handleBotClose} />}
    </div>
  );
}
