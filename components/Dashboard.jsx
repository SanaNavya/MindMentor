import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Bot from "./Bot"; // Import the Bot component

export default function Dashboard() {
  const [selectedSection, setSelectedSection] = useState("home");
  const [isBotVisible, setIsBotVisible] = useState(false); // Initially set to false
  const [isBotIconVisible, setIsBotIconVisible] = useState(true); // Bot icon is always visible
  const [isHeartLiked, setIsHeartLiked] = useState(false); // Heart is not liked initially
  const [likeCount, setLikeCount] = useState(0); // Initial like count is 0
  const [faqs, setFaqs] = useState([
    { question: "How do I reset my password?", answer: "Go to your profile settings and click on 'Reset Password'.", open: false },
    { question: "Where can I see my progress?", answer: "You can view your progress in the 'Progress' section.", open: false },
    { question: "How do I contact support?", answer: "You can contact support via the 'Help' section or chat with our bot.", open: false },
    { question: "Can I retake a course?", answer: "Yes, you can retake any course from the 'Courses' section.", open: false },
  ]);

  useEffect(() => {
    const liked = localStorage.getItem("isHeartLiked");
    const storedLikeCount = localStorage.getItem("likeCount");

    if (liked === "true") {
      setIsHeartLiked(true);
    }
    if (storedLikeCount) {
      setLikeCount(parseInt(storedLikeCount, 10));
    }
  }, []);

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

  const handleHeartClick = () => {
    if (!isHeartLiked) {
      setIsHeartLiked(true);
      setLikeCount((prevCount) => {
        const newCount = prevCount + 1;
        localStorage.setItem("likeCount", newCount);
        return newCount;
      });
      localStorage.setItem("isHeartLiked", true);
    }
  };

  const toggleFaq = (index) => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false; // Close all other FAQ answers when one is clicked
      }
      return faq;
    }));
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="sidebar-title">Study Dashboard</h2>
        <nav className="nav-menu">
          <a href="#" className="nav-link" onClick={() => handleNavClick("home")}>
            Home
          </a>
          <a href="#" className="nav-link" onClick={() => handleNavClick("courses")}>
            Courses
          </a>
          <a href="#" className="nav-link" onClick={() => handleNavClick("progress")}>
            Progress
          </a>
          <a href="#" className="nav-link" onClick={() => handleNavClick("profile")}>
            Profile
          </a>
          <a href="#" className="nav-link" onClick={() => handleNavClick("help")}>
            Help
          </a>
          <a href="#" className="nav-link" onClick={() => handleNavClick("logout")}>
            Logout
          </a>
        </nav>
      </aside>

      <main className="main-content">
        <header className="header">
          <h1>Welcome back, [User Name]</h1>
          <p>Let's continue learning!</p>
        </header>

        {selectedSection === "home" && (
          <section className="home-section">
            <h2>Home</h2>
            <p>Welcome to your dashboard. Use the menu to navigate through your study materials.</p>
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

        {selectedSection === "profile" && (
          <section className="profile-section">
            <h2>Your Profile</h2>
            <p>Manage your profile information here.</p>
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
            <p>How can we assist you? Click the image below to chat with our assistant.</p>
          </section>
        )}

        {/* Bot image container visible on all sections */}
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

      <div className="heart-container" onClick={handleHeartClick}>
        <span className={`heart ${isHeartLiked ? "liked" : ""}`}>&#10084;</span>
        <span className="like-count">{likeCount}</span>
      </div>

      {isBotVisible && <Bot onClose={handleBotClose} />}
    </div>
  );
}
