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
  const [testMode, setTestMode] = useState(null); 
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
      {
        question: "Which of the following is an example of system software?",
        options: [
          "Microsoft Word",
          "Windows 10",
          "Google Chrome",
          "Adobe Photoshop"
        ],
        correctAnswer: 1
      },
      {
        question: "Which programming language is commonly used for web development?",
        options: [
          "HTML",
          "Python",
          "C++",
          "Java"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the purpose of an operating system?",
        options: [
          "To design hardware",
          "To connect to the internet",
          "To manage hardware and software resources",
          "To create websites"
        ],
        correctAnswer: 2
      },
      {
        question: "What is a bug in software?",
        options: [
          "A computer virus",
          "An unwanted feature",
          "An error in the code",
          "A user manual"
        ],
        correctAnswer: 2
      },
      {
        question: "Which of the following is open-source software?",
        options: [
          "Microsoft Office",
          "Adobe Photoshop",
          "Linux",
          "Google Docs"
        ],
        correctAnswer: 2
      },
      {
        question: "What is the main role of a software developer?",
        options: [
          "To repair computer hardware",
          "To write and maintain code",
          "To design websites only",
          "To sell computer parts"
        ],
        correctAnswer: 1
      },
      {
        question: "Which one of these is a programming language?",
        options: [
          "Google",
          "Excel",
          "Python",
          "Facebook"
        ],
        correctAnswer: 2
      },
      {
        question: "What do you call a visual interface where you can click icons and use windows?",
        options: [
          "Command line",
          "Text editor",
          "Graphical User Interface (GUI)",
          "Processor"
        ],
        correctAnswer: 2
      },
      {
        question: "Which tool is commonly used to write and edit code?",
        options: [
          "Paint",
          "WordPad",
          "Visual Studio Code",
          "Chrome"
        ],
        correctAnswer: 2
      }
    ]
    
  },
  {
  id: 2,
  title: "SOLID Principles Quiz",
  description: "Test your understanding of the SOLID principles in object-oriented design, with both theoretical and code-based questions.",
  questions: [
    {
      question: "What does the 'S' in SOLID stand for?",
      options: [
        "Software Scalability",
        "Systematic Security",
        "Single Responsibility",
        "Structured Reusability"
      ],
      correctAnswer: 2
    },
    {
      question: "Which of the following best describes the Single Responsibility Principle (SRP)?",
      options: [
        "A class should have one and only one reason to change",
        "A class should handle all logic related to a module",
        "Multiple classes can handle the same responsibility",
        "A method must not call another method"
      ],
      correctAnswer: 0
    },
    {
      question: "According to the Open/Closed Principle, a software entity should be:",
      options: [
        "Open for modification, closed for testing",
        "Closed for extension, open for bug fixes",
        "Open for extension, closed for modification",
        "Open for inheritance, closed for composition"
      ],
      correctAnswer: 2
    },
    {
      question: "Which principle focuses on the ability to replace subclasses without affecting program correctness?",
      options: [
        "Dependency Inversion Principle",
        "Interface Segregation Principle",
        "Liskov Substitution Principle",
        "Open/Closed Principle"
      ],
      correctAnswer: 2
    },
    {
      question: "What is the core idea behind the Interface Segregation Principle?",
      options: [
        "Clients should depend on large, generic interfaces",
        "Interfaces should contain as many methods as possible",
        "Clients should not be forced to depend on methods they do not use",
        "All interfaces should inherit from one base class"
      ],
      correctAnswer: 2
    },
    {
      question: "In the context of SOLID, what does the Dependency Inversion Principle advocate?",
      options: [
        "High-level modules should depend on low-level modules",
        "Low-level modules should contain business logic",
        "Both high- and low-level modules should depend on abstractions",
        "Depend only on concrete classes"
      ],
      correctAnswer: 2
    },
    {
      question: "Which of the following violates the Liskov Substitution Principle?",
      options: [
        "A subclass overrides a method with the same expected behavior",
        "A subclass throws an exception when a method from the base class is called",
        "A subclass extends a base class and adds more methods",
        "A subclass inherits from a base class and uses polymorphism"
      ],
      correctAnswer: 1
    },


    {
      question: "Which principle is violated in the following code?\n\nclass Printer {\n  void printDocument() {...}\n  void scanDocument() {...}\n  void faxDocument() {...}\n}",
      options: [
        "Single Responsibility Principle",
        "Open/Closed Principle",
        "Liskov Substitution Principle",
        "Dependency Inversion Principle"
      ],
      correctAnswer: 0
    },
    {
      question: "What principle is being respected in this design?\n\ninterface Bird {\n  void fly();\n}\n\nclass Eagle implements Bird {\n  public void fly() {...}\n}",
      options: [
        "Liskov Substitution Principle",
        "Open/Closed Principle",
        "Interface Segregation Principle",
        "Single Responsibility Principle"
      ],
      correctAnswer: 2
    },
    {
      question: "Which principle is applied in this code?\n\nclass EmailSender {\n  void send(String message) {...}\n}\n\nclass NotificationService {\n  private EmailSender sender;\n\n  NotificationService(EmailSender sender) {\n    this.sender = sender;\n  }\n\n  void notifyUser() {\n    sender.send(\"Hello!\");\n  }\n}",
      options: [
        "Single Responsibility Principle",
        "Liskov Substitution Principle",
        "Dependency Inversion Principle",
        "Interface Segregation Principle"
      ],
      correctAnswer: 2
    }
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
      const nextAnswer = userAnswers.find(a => a.questionIndex === currentQuestion + 1);
      setSelectedOption(nextAnswer ? nextAnswer.selectedOption : null);
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
    const currentTest = getCurrentTest();

    let allAnswers = [...userAnswers];
    const isCorrect = selectedOption === currentTest.questions[currentQuestion].correctAnswer;

    const existingIndex = allAnswers.findIndex(a => a.questionIndex === currentQuestion);
    const lastAnswer = {
      questionIndex: currentQuestion,
      selectedOption,
      isCorrect
    };

    if (existingIndex !== -1) {
      allAnswers[existingIndex] = lastAnswer;
    } else {
      allAnswers.push(lastAnswer);
    }

    for (let i = 0; i < currentTest.questions.length; i++) {
      if (!allAnswers.some(a => a.questionIndex === i)) {
        allAnswers.push({
          questionIndex: i,
          selectedOption: null,
          isCorrect: false
        });
      }
    }

    setUserAnswers(allAnswers);
    const finalScore = allAnswers.filter(a => a.isCorrect).length;
    setScore(finalScore);
    setShowResult(true);
    setTimerActive(false);
  };

  const restartTest = () => {
    startTest(activeTest, testMode);
  };

  const getCurrentTest = () => assignments.find(a => a.id === activeTest);

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
              <div key={index} className={optionClass}>
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
