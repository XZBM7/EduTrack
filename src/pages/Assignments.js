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
    title: "Intro Quiz",
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
},

{
  "id": 4,
  "title": "Intro to Software Quiz & Big data",
  "description": "A basic quiz covering software, development methodologies, DevOps, and Big Data concepts.",
  "questions": [
    {
      "question": "What does 'software' refer to?",
      "options": [
        "The physical parts of a computer",
        "The people who use computers",
        "The programs and operating systems used by a computer",
        "The electricity powering a computer"
      ],
      "correctAnswer": 2
    },
    {
      "question": "Which of the following is considered system software?",
      "options": [
        "Adobe Photoshop",
        "Google Chrome",
        "Windows OS",
        "Zoom"
      ],
      "correctAnswer": 2
    },
    {
      "question": "What is middleware in software systems?",
      "options": [
        "A game development platform",
        "A tool for writing code",
        "Software that connects system software with application software",
        "Hardware configuration tool"
      ],
      "correctAnswer": 2
    },
    {
      "question": "Which of the following is an example of application software?",
      "options": [
        "Device drivers",
        "Antivirus software",
        "Microsoft Word",
        "BIOS"
      ],
      "correctAnswer": 2
    },
    {
      "question": "Which of these is a phase in the Software Development Life Cycle (SDLC)?",
      "options": [
        "Marketing",
        "Requirement Gathering",
        "Hiring Developers",
        "Packaging"
      ],
      "correctAnswer": 1
    },
    {
      "question": "Which methodology follows a strict linear process?",
      "options": [
        "Agile",
        "DevOps",
        "Scrum",
        "Waterfall"
      ],
      "correctAnswer": 3
    },
    {
      "question": "In Agile, what is valued most?",
      "options": [
        "Following strict documentation",
        "Long-term planning",
        "Individuals and interactions",
        "Strict timelines"
      ],
      "correctAnswer": 2
    },
    {
      "question": "Who facilitates the Scrum process and removes blockers?",
      "options": [
        "Project Manager",
        "Scrum Master",
        "Team Lead",
        "Product Owner"
      ],
      "correctAnswer": 1
    },
    {
      "question": "What is a Sprint in Scrum?",
      "options": [
        "A one-time deployment",
        "A team-building exercise",
        "A fixed-length iteration to build product features",
        "The final stage of deployment"
      ],
      "correctAnswer": 2
    },
    {
      "question": "Which artifact in Scrum is used to track remaining work?",
      "options": [
        "Sprint Retrospective",
        "Product Backlog",
        "Burndown Chart",
        "Stand-Up Chart"
      ],
      "correctAnswer": 2
    },
    {
      "question": "Which of the following best describes DevOps?",
      "options": [
        "A programming language",
        "A design framework",
        "A culture combining development and operations",
        "A testing tool"
      ],
      "correctAnswer": 2
    },
    {
      "question": "What is the main goal of DevOps?",
      "options": [
        "Create beautiful UIs",
        "Build documentation",
        "Automate and speed up software delivery",
        "Replace developers with AI"
      ],
      "correctAnswer": 2
    },
    {
      "question": "Which of the following is a CI/CD tool?",
      "options": [
        "Photoshop",
        "Jenkins",
        "MongoDB",
        "Postman"
      ],
      "correctAnswer": 1
    },
    {
      "question": "Which tool is used for container orchestration?",
      "options": [
        "Docker",
        "Git",
        "Kubernetes",
        "Jira"
      ],
      "correctAnswer": 2
    },
    {
      "question": "What does Big Data refer to?",
      "options": [
        "A large computer",
        "A data structure",
        "Extremely large and complex datasets",
        "Database backup tools"
      ],
      "correctAnswer": 2
    },
    {
      "question": "Which of these is NOT one of the 5 V's of Big Data?",
      "options": [
        "Volume",
        "Variety",
        "Visualization",
        "Veracity"
      ],
      "correctAnswer": 2
    },
    {
      "question": "Which framework is commonly used for distributed Big Data processing?",
      "options": [
        "React.js",
        "Apache Hadoop",
        "PostgreSQL",
        "Figma"
      ],
      "correctAnswer": 1
    },
    {
      "question": "What is Apache Kafka used for?",
      "options": [
        "Web hosting",
        "Video rendering",
        "Real-time data streaming",
        "Version control"
      ],
      "correctAnswer": 2
    },
    {
      "question": "Which cloud platform offers BigQuery for Big Data analytics?",
      "options": [
        "AWS",
        "Google Cloud",
        "Azure",
        "DigitalOcean"
      ],
      "correctAnswer": 1
    },
    {
      "question": "Which language is commonly used for AI and Big Data processing?",
      "options": [
        "HTML",
        "CSS",
        "Python",
        "Bash"
      ],
      "correctAnswer": 2
    },
    {
      "question": "Which of these tools is used to manage infrastructure as code?",
      "options": [
        "Terraform",
        "MySQL",
        "Nginx",
        "Power BI"
      ],
      "correctAnswer": 0
    },
    {
      "question": "In Scrum, who owns the Product Backlog?",
      "options": [
        "Scrum Master",
        "Product Owner",
        "Development Team",
        "Stakeholders"
      ],
      "correctAnswer": 1
    },
    {
      "question": "Which of the following is an IDE used for Python development?",
      "options": [
        "Eclipse",
        "Xcode",
        "PyCharm",
        "Figma"
      ],
      "correctAnswer": 2
    },
    {
      "question": "What is the purpose of a Sprint Review?",
      "options": [
        "Code review session",
        "Daily sync meeting",
        "To demonstrate work done and get feedback",
        "Bug fixing session"
      ],
      "correctAnswer": 2
    },
    {
      "question": "Which of the following is a real-world example of Big Data usage?",
      "options": [
        "Installing Microsoft Word",
        "Using Excel to make a table",
        "Google Maps using traffic data to suggest routes",
        "Creating a PowerPoint presentation"
      ],
      "correctAnswer": 2
    }
  ]
},

  // {
  //   id: 3,
  //   title: "Physics Quiz - 10 week ",
  //   description: "Test your understanding of electromagnetic induction concepts including EMF, power, and magnetic fields.",
  //   questions: [
  //     {
  //       question: "عملية توليد التيار الكهربائي الحثي في دائرة كهربية مغلقة يسمى...",
  //       options: [
  //         "الحث الذاتي",
  //         "الحث المتبادل",
  //         "الحث المغناطيسي",
  //         "الحث الكهرومغناطيسي"
  //       ],
  //       correctAnswer: 3
  //     },
  //     {
  //       question: "إذا كان متوسط القدرة المستهلكة في مصباح كهربي 60 W فما القيمة العظمى للقدرة بوحدة W؟",
  //       options: [
  //         "30",
  //         "60",
  //         "90",
  //         "120"
  //       ],
  //       correctAnswer: 3
  //     },
  //     {
  //       question: "القوة الدافعة الكهربائية الحثية المتولدة في سلك طوله 1m بسرعة 4 m/s عموديًا على مجال مغناطيسي شدته 0.5 T",
  //       options: [
  //         "2",
  //         "5.5",
  //         "6",
  //         "8"
  //       ],
  //       correctAnswer: 0
  //     },
  //     {
  //       question: "لتحديد اتجاه التيار الحثي نستخدم قاعدة اليد اليمنى",
  //       options: [
  //         "✓",
  //         "x"
  //       ],
  //       correctAnswer: 0
  //     },
  //     {
  //       question: "تقاس القوة الدافعة الكهربية بوحدة النيوتن",
  //       options: [
  //         "✓",
  //         "x"
  //       ],
  //       correctAnswer: 1
  //     },
  //     {
  //       question: "١. يحول الطاقة الميكانيكية إلى طاقة كهربائية:",
  //       options: [
  //         "الجلفانومتر",
  //         "الفولتمتر",
  //         "المحول الكهربائي",
  //         "المولد الكهربائي"
  //       ],
  //       correctAnswer: 3
  //     },
  //     {
  //       question: "٢. القوة الدافعة الكهربائية المتولدة في المولد الكهربائي تعتمد على:",
  //       options: [
  //         "طول السلك",
  //         "عدد اللفات",
  //         "شدة المجال المغناطيسي",
  //         "جميع ما سبق"
  //       ],
  //       correctAnswer: 3
  //     },
  //     {
  //       question: "٣. في المولد الكهربائي أكبر قيمة في التيار الناتج عندما تكون الحلقة:",
  //       options: [
  //         "أفقية",
  //         "رأسية",
  //         "تصنع زاوية 45°",
  //         "تصنع زاوية 30°"
  //       ],
  //       correctAnswer: 0
  //     },
  //     {
  //       question: "٤. في المولد الكهربائي أصغر قيمة في التيار الناتج عندما تكون الحلقة:",
  //       options: [
  //         "أفقية",
  //         "رأسية",
  //         "تصنع زاوية 45°",
  //         "تصنع زاوية 30°"
  //       ],
  //       correctAnswer: 1
  //     },
  //     {
  //       question: "٥. اتجاه التيار الناتج من المولد الكهربائي يتغير كلما دارت الحلقة زاوية مقدارها:",
  //       options: [
  //         "30°",
  //         "45°",
  //         "90°",
  //         "180°"
  //       ],
  //       correctAnswer: 3
  //     },
  //     {
  //       question: "علل: حلقات سلك المولد تلف حول قلب من حديد",
  //       options: [
  //         "لزيادة شدة المجال المغناطيسي",
  //         "لإضعاف التيار الكهربائي",
  //         "لتحسين العزل الكهربائي",
  //         "لتقليل المقاومة"
  //       ],
  //       correctAnswer: 0
  //     },
  //     {
  //       question: "يستخدم لرفع أو خفض الجهد الكهربائي المتناوب:",
  //       options: [
  //         "المولد الكهربائي",
  //         "المحرك الكهربائي",
  //         "المحول الكهربائي"
  //       ],
  //       correctAnswer: 2
  //     },
  //     {
  //       question: "ملفا المحول معزولان كهربائيًا وملفوفان حول قلب:",
  //       options: [
  //         "بلاستيكي",
  //         "خشبي",
  //         "حديدي"
  //       ],
  //       correctAnswer: 2
  //     },
  //     {
  //       question: "القوة الدافعة الكهربائية EMF المتولدة في الملف الثانوي للمحول تسمى:",
  //       options: [
  //         "الجهد الثانوي",
  //         "الجهد الابتدائي",
  //         "القدرة الثانوية",
  //         "التيار الثانوي"
  //       ],
  //       correctAnswer: 0
  //     },
  //     {
  //       question: "الجهد الثانوي للمحول يتناسب طرديًا مع:",
  //       options: [
  //         "الجهد الابتدائي",
  //         "عدد لفات الملف الابتدائي",
  //         "القدرة الثانوية",
  //         "التيار الثانوي"
  //       ],
  //       correctAnswer: 0
  //     },
  //     {
  //       question: "في المحول الرافع يكون التيار الثانوي أقل من التيار الابتدائي.",
  //       options: [
  //         "✓",
  //         "X"
  //       ],
  //       correctAnswer: 0
  //     },
  //     {
  //       question: "في المحول الخافض يكون التيار الابتدائي أقل من التيار الثانوي.",
  //       options: [
  //         "✓",
  //         "X"
  //       ],
  //       correctAnswer: 1
  //     },
  //     {
  //       question: "علل: تستخدم المحولات لعزل دائرة عن أخرى:",
  //       options: [
  //         "لأن بسلك اللف الابتدائي لا يتصل بسلك اللف الثانوي",
  //         "لزيادة المقاومة",
  //         "لمنع فقدان الطاقة",
  //         "لزيادة المجال المغناطيسي"
  //       ],
  //       correctAnswer: 0
  //     },
  //     {
  //       question: "١) القدرة الكلية المنبعثة من جسم ساخن....... بازياد درجة الحرارة.",
  //       options: [
  //         "تقل",
  //         "لا تتغير",
  //         "تزداد"
  //       ],
  //       correctAnswer: 2
  //     },
  //     {
  //       question: "٢) الأجسام الأسخن تشع قدرة ....... قدرة الأجسام الأبرد.",
  //       options: [
  //         "أكبر من",
  //         "تساوي",
  //         "أقل من"
  //       ],
  //       correctAnswer: 0
  //     },
  //     {
  //       question: "٣) قدرة الموجات الكهرومغناطيسية تتناسب طرديًا مع:",
  //       options: [
  //         "T C",
  //         "T O",
  //         "T' O",
  //         "T' C"
  //       ],
  //       correctAnswer: 3
  //     },
  //     {
  //       question: "١) تردد العتبة يتغير بتغير نوع الفلز.",
  //       options: [
  //         "✓",
  //         "X"
  //       ],
  //       correctAnswer: 0
  //     },
  //     {
  //       question: "٢) حسب نظرية الموجات الكهرومغناطيسية، المجال الكهربائي يحرر الإلكترونات من السطح.",
  //       options: [
  //         "✓",
  //         "X"
  //       ],
  //       correctAnswer: 1
  //     },
  //     {
  //       question: "١) أسلط كومبتون أشعة X ذات طول موجي معلوم على هدف من:",
  //       options: [
  //         "الذهب",
  //         "الفضة",
  //         "الجرافيت"
  //       ],
  //       correctAnswer: 2
  //     },
  //     {
  //       question: "٢) أشعة X المشتتة في تجارب كومبتون أصبح طولها الموجي ..... الطول الموجي للإشعاع الساقط.",
  //       options: [
  //         "أكبر من",
  //         "يساوي",
  //         "أصغر من"
  //       ],
  //       correctAnswer: 0
  //     },
  //     {
  //       question: "٣) طاقة الفوتون تتناسب عكسيًا مع:",
  //       options: [
  //         "سرعته",
  //         "تردده",
  //         "طوله الموجي"
  //       ],
  //       correctAnswer: 2
  //     },
  //     {
  //       question: "١) طاقة ذرة الهيدروجين قيمتها:",
  //       options: [
  //         "أحيانًا موجبة",
  //         "أحيانًا سالبة",
  //         "دائمًا موجبة",
  //         "دائمًا سالبة"
  //       ],
  //       correctAnswer: 3
  //     },
  //     {
  //       question: "٢) طاقة ذرة الهيدروجين تعتمد على:",
  //       options: [
  //         "n",
  //         "1/n²",
  //         "1/n",
  //         "n²"
  //       ],
  //       correctAnswer: 1
  //     },
  //     {
  //       question: "٣) انتقال إلكترون ذرة هيدروجين من مستوى حالة الإثارة إلى المستوى الثالث يعطي:",
  //       options: [
  //         "سلسلة باشن",
  //         "سلسلة بالمر",
  //         "سلسلة ليمان"
  //       ],
  //       correctAnswer: 0
  //     },
  //     {
  //       question: "٤) تعرف مجموعة الخطوط الملونة التي تكون طيف ذرة الهيدروجين بسلسلة:",
  //       options: [
  //         "باشن",
  //         "ليمان",
  //         "بالمر"
  //       ],
  //       correctAnswer: 1
  //     },
  //     {
  //       question: "٥) الضوء المترابط هو:",
  //       options: [
  //         "ضوء من مصدرين أو أكثر يولد مجموعة ذات مقدمات منتظمة أو موجات متطابقة عند القمم والقيعان.",
  //         "ضوء بمقدمات موجية غير متزامنة تضيء الأجسام بضوء أبيض منتظم.",
  //         "ضوء ناتج عن تفكك ذري في الموجات الكهرومغناطيسية.",
  //         "ضوء مرئي لا يمكن تمييز طيفه بسهولة."
  //       ],
  //       correctAnswer: 0
  //     },
  //     {
  //       question: "١) القوى النووية القوية هي قوى:",
  //       options: [
  //         "تجاذب",
  //         "تنافر",
  //         "تجاذب وتنافر"
  //       ],
  //       correctAnswer: 2
  //     },
  //     {
  //       question: "٢) حزم الطاقة ذات مستويات الطاقة الدنيا في الذرة تسمى:",
  //       options: [
  //         "حزم التوصيل",
  //         "حزم التكافؤ",
  //         "فجوة الطاقة"
  //       ],
  //       correctAnswer: 1
  //     },
  //     {
  //       question: "٣) الجهاز المستخدم لدراسة طيف الإشعاع الذري هو:",
  //       options: [
  //         "مطياف الكتلة",
  //         "المطياف",
  //         "المجهر الماسح"
  //       ],
  //       correctAnswer: 1
  //     },
  //     {
  //       question: "النموذج الذري يتفق مع قوانين الكهرومغناطيسية.",
  //       options: [
  //         "✓",
  //         "X"
  //       ],
  //       correctAnswer: 1
  //     },
  //     {
  //       question: "في المحول الرافع يكون التيار الثانوي أقل من التيار الابتدائي.",
  //       options: [
  //         "✓",
  //         "X"
  //       ],
  //       correctAnswer: 0
  //     },
  //     {
  //       question: "يوصل الملف الابتدائي للمحول بمصدر جهد ثابت.",
  //       options: [
  //         "✓",
  //         "X"
  //       ],
  //       correctAnswer: 0
  //     },
  //     {
  //       question: "الجرمانيوم حساس جدًا للحرارة في معظم التطبيقات الإلكترونية.",
  //       options: [
  //         "✓",
  //         "X"
  //       ],
  //       correctAnswer: 0
  //     },
  //     {
  //       question: "١) مجموع عدد البروتونات والنيترونات في النواة يسمى:",
  //       options: [
  //         "التكافؤ",
  //         "العدد الذري",
  //         "العدد الكتلي"
  //       ],
  //       correctAnswer: 2
  //     },
  //     {
  //       question: "٢) النشاطية الإشعاعية تتناسب طردياً مع:",
  //       options: [
  //         "طاقة الربط النووية",
  //         "العدد الذري",
  //         "عمر النصف"
  //       ],
  //       correctAnswer: 0
  //     },
  //     {
  //       question: "٣) انتقال إلكترونات ذرة الهيدروجين من حالة الإثارة إلى المستوى الثالث يعطي سلسلة:",
  //       options: [
  //         "ليمان",
  //         "بالمر",
  //         "رزر فورد"
  //       ],
  //       correctAnswer: 1
  //     },
  //     {
  //       question: "٤) موصلية المواد ... عندما تقل فجوة الطاقة بين حزم التوصيل وحزم التكافؤ:",
  //       options: [
  //         "تزداد",
  //         "لا تتغير",
  //         "تنقص"
  //       ],
  //       correctAnswer: 0
  //     },
  //     {
  //       question: "١) ذرات نفس العنصر لها كتل مختلفة ولها الخصائص الكيميائية نفسها تُسمى:",
  //       options: [
  //         "أيونات",
  //         "متعددات الأشكال (تطور النظير)",
  //         "نظائر"
  //       ],
  //       correctAnswer: 2
  //     },
  //     {
  //       question: "٢) من الصعب قياس زخم جسيم وتحديد موقعه بدقة في الوقت نفسه، هذا يُعرف بمبدأ:",
  //       options: [
  //         "مبدأ الشك لهايزنبرج",
  //         "مبدأ التراكب",
  //         "مبدأ الإنعكاس"
  //       ],
  //       correctAnswer: 0
  //     },
  //     {
  //       question: "٣) يستخدم لرفع أو خفض الجهد الكهربي المتناوب:",
  //       options: [
  //         "المحول الكهربائي",
  //         "المحرك الكهربائي",
  //         "المولد الكهربائي"
  //       ],
  //       correctAnswer: 0
  //     },
  //     {
  //       question: "٤) عملية اضمحلال تنبعث فيها جسيم ألفا من النواة تسمى:",
  //       options: [
  //         "انبعاث بيتا",
  //         "انبعاث ألفا",
  //         "انشطار نووي"
  //       ],
  //       correctAnswer: 1
  //     },
  //     {
  //       question: "القدرة المرافقة للتيار المتناوب ثابتة.",
  //       options: [
  //         "✓",
  //         "X"
  //       ],
  //       correctAnswer: 1
  //     },
  //     {
  //       question: "تردد العتبة يتغير بتغير نوع الفلز.",
  //       options: [
  //         "✓",
  //         "X"
  //       ],
  //       correctAnswer: 0
  //     },
  //     {
  //       question: "طيف الأجسام المتوهجة يغطي مدى واسع من الأطوال الموجية.",
  //       options: [
  //         "✓",
  //         "X"
  //       ],
  //       correctAnswer: 0
  //     },
  //     {
  //       question: "يستخدم الدايود في تحويل الجهد المستمر إلى الجهد المتناوب.",
  //       options: [
  //         "✓",
  //         "X"
  //       ],
  //       correctAnswer: 1
  //     },
  //     {
  //       question: "النموذج النووي يتفق مع قوانين الكهرومغناطيسية.",
  //       options: [
  //         "✓",
  //         "X"
  //       ],
  //       correctAnswer: 1
  //     }
  //   ]
  // }

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
