import React, { useState } from 'react';
import '../styles/Assignments.css';
import { FaClipboardList } from 'react-icons/fa';

const Assignments = () => {
  const [activeTest, setActiveTest] = useState(null);
  const [attempts, setAttempts] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const assignments = [
  ];

  const startTest = (testId) => {
    setActiveTest(testId);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setUserAnswers([]);
    setAttempts(prev => ({
      ...prev,
      [testId]: (prev[testId] || 0) + 1
    }));
  };

  const closeTest = () => {
    setActiveTest(null);
  };

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  const nextQuestion = () => {
    const currentTest = assignments.find(a => a.id === activeTest);
    const isCorrect = selectedOption === currentTest.questions[currentQuestion].correctAnswer;

    setUserAnswers([...userAnswers, {
      questionIndex: currentQuestion,
      selectedOption,
      isCorrect
    }]);

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < currentTest.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const prevAnswer = userAnswers.find(a => a.questionIndex === currentQuestion - 1);
      setSelectedOption(prevAnswer ? prevAnswer.selectedOption : null);
    }
  };

  const restartTest = () => {
    startTest(activeTest);
  };

  const getCurrentTest = () => {
    return assignments.find(a => a.id === activeTest);
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

  return (
    <div className="assignments-app">
      <h1> Assignments</h1>

      {assignments.length > 0 ? (
        <div className="assignments-cards-container">
          {assignments.map(assignment => (
            <div key={assignment.id} className="assignment-card">
              <h2>{assignment.title}</h2>
              <p>{assignment.description}</p>
              <button
                className="assignment-test-btn"
                onClick={() => startTest(assignment.id)}
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

      {activeTest && (
        <div className="assignment-test-modal">
          <div className="assignment-test-content">
            <span className="assignment-close-btn" onClick={closeTest}>&times;</span>

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
                    onClick={nextQuestion}
                    disabled={selectedOption === null}
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