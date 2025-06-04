import React, { useState, useEffect } from 'react';
import '../styles/Assignments.css';
import { FaClipboardList, FaClock } from 'react-icons/fa';

const Assignments = () => {
  const [activeTest, setActiveTest] = useState(null);
  const [attempts, setAttempts] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(null);
  const [timerActive, setTimerActive] = useState(false);
  const [testMode, setTestMode] = useState(null); // 'timed' or 'untimed'
  const [selectedMinutes, setSelectedMinutes] = useState(10);

  const assignments = [
    {
      id: 1,
      title: "Intro to Software Quiz",
      description: "A basic quiz covering software concepts.",
      questions: [
        {
          question: "What does 'software' refer to?",
          options: [
            "The physical parts of a computer",
            "The people who use computers",
            "The programs and operating systems used by a computer",
            "The electricity powering a computer"
          ],
          correctAnswer: 2
        },
        // ... rest of the questions
      ]
    }
  ];

  useEffect(() => {
    const storedAttempts = localStorage.getItem('assignmentAttempts');
    if (storedAttempts) {
      setAttempts(JSON.parse(storedAttempts));
    }
  }, []);

  useEffect(() => {
    let timer;
    if (timerActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      submitTest();
    }
    return () => clearInterval(timer);
  }, [timeLeft, timerActive]);

  const updateAttemptsStorage = (newAttempts) => {
    localStorage.setItem('assignmentAttempts', JSON.stringify(newAttempts));
  };

  const startTest = (testId, mode) => {
    setTestMode(mode);
    
    if (mode === 'timed') {
      setTimeLeft(selectedMinutes * 60);
      setTimerActive(true);
    }

    const updatedAttempts = {
      ...attempts,
      [testId]: (attempts[testId] || 0) + 1
    };
    setAttempts(updatedAttempts);
    updateAttemptsStorage(updatedAttempts);

    setActiveTest(testId);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setUserAnswers([]);
  };

  const closeTest = () => {
    setActiveTest(null);
    setTimerActive(false);
    setTimeLeft(null);
    setTestMode(null);
  };

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  const nextQuestion = () => {
    saveAnswer();
    
    const currentTest = getCurrentTest();
    if (currentQuestion < currentTest.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const prevAnswer = userAnswers.find(a => a.questionIndex === currentQuestion - 1);
      setSelectedOption(prevAnswer ? prevAnswer.selectedOption : null);
    }
  };

  const saveAnswer = () => {
    const currentTest = getCurrentTest();
    const isCorrect = selectedOption === currentTest.questions[currentQuestion].correctAnswer;

    const updatedAnswers = [...userAnswers];
    const existingIndex = updatedAnswers.findIndex(a => a.questionIndex === currentQuestion);
    const newAnswer = {
      questionIndex: currentQuestion,
      selectedOption,
      isCorrect
    };
    if (existingIndex !== -1) {
      updatedAnswers[existingIndex] = newAnswer;
    } else {
      updatedAnswers.push(newAnswer);
    }
    setUserAnswers(updatedAnswers);
  };

  const submitTest = () => {
    saveAnswer();
    setTimerActive(false);
    
    const currentTest = getCurrentTest();
    // Mark unanswered questions as incorrect
    const allAnswers = [...userAnswers];
    for (let i = 0; i < currentTest.questions.length; i++) {
      if (!allAnswers.some(a => a.questionIndex === i)) {
        allAnswers.push({
          questionIndex: i,
          selectedOption: null,
          isCorrect: false
        });
      }
    }
    
    const finalScore = allAnswers.filter(a => a.isCorrect).length;
    setScore(finalScore);
    setShowResult(true);
  };

  const restartTest = () => {
    startTest(activeTest, testMode);
  };

  const getCurrentTest = () => {
    return assignments.find(a => a.id === activeTest);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const renderQuestionWithAnswers = (questionIndex) => {
    const currentTest = getCurrentTest();
    const question = currentTest.questions[questionIndex];
    const userAnswer = userAnswers.find(a => a.questionIndex === questionIndex);

    return (
      <div className="assignment-question">
        <h3>{question.question}</h3>
        <div className="assignment-options">
          {question.options.map((option, index) => {
            let optionClass = "assignment-option";

            if (userAnswer) {
              if (index === question.correctAnswer) {
                optionClass += " assignment-correct";
              } else if (index === userAnswer.selectedOption && !userAnswer.isCorrect) {
                optionClass += " assignment-incorrect";
              }
            }

            return (
              <div
                key={index}
                className={optionClass}
              >
                {option}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderTestModeSelection = (assignment) => (
    <div className="assignment-test-mode-modal">
      <div className="assignment-test-mode-content">
        <span className="assignment-close-btn" onClick={() => setActiveTest(null)}>&times;</span>
        <h2>Choose Test Mode for {assignment.title}</h2>
        
        <div className="test-mode-options">
          <div 
            className={`test-mode-card ${testMode === 'untimed' ? 'selected' : ''}`}
            onClick={() => startTest(assignment.id, 'untimed')}
          >
            <h3>Untimed Test</h3>
            <p>Take the test without time pressure</p>
            <button className="test-mode-btn">Start Untimed</button>
          </div>
          
          <div 
            className={`test-mode-card ${testMode === 'timed' ? 'selected' : ''}`}
            onClick={() => startTest(assignment.id, 'timed')}
          >
            <h3>Timed Test</h3>
            <div className="time-selection">
              <label>Test Duration:</label>
              <select 
                value={selectedMinutes} 
                onChange={(e) => setSelectedMinutes(parseInt(e.target.value))}
                onClick={(e) => e.stopPropagation()}
              >
                <option value="5">5 minutes</option>
                <option value="10">10 minutes</option>
                <option value="15">15 minutes</option>
                <option value="20">20 minutes</option>
                <option value="30">30 minutes</option>
              </select>
            </div>
            <button className="test-mode-btn">Start Timed</button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="assignments-app">
      <h1>Assignments</h1>

      {assignments.length > 0 ? (
        <div className="assignments-cards-container">
          {assignments.map(assignment => (
            <div key={assignment.id} className="assignment-card">
              <h2>{assignment.title}</h2>
              <p>{assignment.description}</p>
              <p className="assignment-attempts-text">
                Attempts: {attempts[assignment.id] || 0}
              </p>
              <button
                className="assignment-test-btn"
                onClick={() => setActiveTest(assignment.id)}
              >
                Take Test
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="assignment-no-assignments">
          <FaClipboardList className="assignment-empty-icon" />
          <p>No assignments available at the moment</p>
          <p className="assignment-empty-subtext">Check back later for new assignments</p>
        </div>
      )}

      {activeTest && !testMode && renderTestModeSelection(assignments.find(a => a.id === activeTest))}

      {activeTest && testMode && (
        <div className="assignment-test-modal">
          <div className="assignment-test-content">
            <span className="assignment-close-btn" onClick={closeTest}>&times;</span>

            {testMode === 'timed' && (
              <div className="assignment-timer">
                <FaClock /> Time Remaining: {formatTime(timeLeft)}
              </div>
            )}

            {!showResult ? (
              <>
                <div className="assignment-progress">
                  Question {currentQuestion + 1} of {getCurrentTest().questions.length}
                </div>

                <div className="assignment-question active">
                  <h3>{getCurrentTest().questions[currentQuestion].question}</h3>
                  <div className="assignment-options">
                    {getCurrentTest().questions[currentQuestion].options.map((option, index) => (
                      <div
                        key={index}
                        className={`assignment-option ${selectedOption === index ? 'assignment-selected' : ''}`}
                        onClick={() => handleOptionSelect(index)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="assignment-navigation">
                  <button
                    className="assignment-nav-btn"
                    onClick={prevQuestion}
                    disabled={currentQuestion === 0}
                  >
                    Previous
                  </button>

                  <button
                    className={`assignment-nav-btn ${currentQuestion === getCurrentTest().questions.length - 1 ? 'assignment-submit-btn' : ''}`}
                    onClick={currentQuestion === getCurrentTest().questions.length - 1 ? submitTest : nextQuestion}
                    disabled={selectedOption === null && currentQuestion !== getCurrentTest().questions.length - 1}
                  >
                    {currentQuestion === getCurrentTest().questions.length - 1 ? 'Submit' : 'Next'}
                  </button>
                </div>
              </>
            ) : (
              <div className="assignment-result">
                <h2>Test Results</h2>
                <div className="assignment-score">
                  You scored {score} out of {getCurrentTest().questions.length}
                </div>
                <div className="assignment-attempts">
                  Number of attempts: {attempts[activeTest] || 1}
                </div>
                {testMode === 'timed' && (
                  <div className="assignment-time-used">
                    Time used: {formatTime(selectedMinutes * 60 - timeLeft)}
                  </div>
                )}

                <div className="assignment-questions-review">
                  <h3>Review your answers:</h3>
                  {getCurrentTest().questions.map((_, index) => (
                    <div key={index}>
                      {renderQuestionWithAnswers(index)}
                    </div>
                  ))}
                </div>

                <button className="assignment-restart-btn" onClick={restartTest}>
                  Retake Test
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Assignments;