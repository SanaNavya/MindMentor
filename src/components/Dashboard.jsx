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
    
    {/* Updated leaderboard layout */}
    <div className="leaderboard-container">
      <div className="leaderboard-row">
        {/* Bronze */}
        <div className="leaderboard-rank" onClick={() => handleLeaderboardItemClick(1)}>
          <img src="bronze-icon-url" alt="Bronze" className="rank-icon" />
          <p>Bronze</p>
        </div>
        {/* Silver */}
        <div className="leaderboard-rank" onClick={() => handleLeaderboardItemClick(2)}>
          <img src="silver-icon-url" alt="Silver" className="rank-icon" />
          <p>Silver</p>
        </div>
        {/* Ruby */}
        <div className="leaderboard-rank" onClick={() => handleLeaderboardItemClick(3)}>
          <img src="ruby-icon-url" alt="Ruby" className="rank-icon" />
          <p>Ruby</p>
        </div>
        {/* Gold */}
        <div className="leaderboard-rank" onClick={() => handleLeaderboardItemClick(4)}>
          <img src="gold-icon-url" alt="Gold" className="rank-icon" />
          <p>Gold</p>
        </div>
        {/* Diamond */}
        <div className="leaderboard-rank" onClick={() => handleLeaderboardItemClick(5)}>
          <img src="diamond-icon-url" alt="Diamond" className="rank-icon" />
          <p>Diamond</p>
        </div>
        {/* Sapphire */}
        <div className="leaderboard-rank" onClick={() => handleLeaderboardItemClick(6)}>
          <img src="sapphire-icon-url" alt="Sapphire" className="rank-icon" />
          <p>Sapphire</p>
        </div>
        {/* Platinum */}
        <div className="leaderboard-rank" onClick={() => handleLeaderboardItemClick(7)}>
          <img src="platinum-icon-url" alt="Platinum" className="rank-icon" />
          <p>Platinum</p>
        </div>
      </div>
    </div>

    {/* Celebration fireworks when a rank is clicked */}
    {celebrate !== null && (
      <div className="fireworks-container">
        <div className="fireworks"></div>
      </div>
    )}
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
