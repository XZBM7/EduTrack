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

    {
      "id": 5,
      "title": "Big Data & NoSQL Quiz",
      "description": "Test your understanding of MapReduce, Apache Spark, Flink, Hadoop, and MongoDB with real-world scenarios and code-based questions.",
      "questions": [
        {
          "question": "Which processing model does MapReduce primarily support?",
          "options": ["Real-time", "Batch", "Near real-time", "Hybrid"],
          "correctAnswer": 1
        },
        {
          "question": "Apache Flink is best described as:",
          "options": [
            "A tool for batch-only processing",
            "A database engine",
            "A stream-first engine with native real-time support",
            "A distributed file system"
          ],
          "correctAnswer": 2
        },
        {
          "question": "Why is Spark better than MapReduce for iterative processing?",
          "options": [
            "It uses disk-based caching",
            "It recompiles code each iteration",
            "It uses in-memory RDDs",
            "It supports only real-time data"
          ],
          "correctAnswer": 2
        },
        {
          "question": "Which tool supports SQL-like queries for fast, interactive analysis?",
          "options": ["MapReduce", "Flink", "Spark", "Both Spark and Flink"],
          "correctAnswer": 3
        },
        {
          "question": "Which of the following is NOT a component of the Hadoop ecosystem?",
          "options": ["YARN", "HDFS", "Spark", "MapReduce"],
          "correctAnswer": 2
        },
        {
          "question": "What is the role of YARN in Hadoop?",
          "options": [
            "Distributed file system",
            "Job and resource manager",
            "Streaming engine",
            "Query optimizer"
          ],
          "correctAnswer": 1
        },
        {
          "question": "Which is a main advantage of stream processing over batch?",
          "options": [
            "Lower cost",
            "Lower latency",
            "More storage",
            "Higher memory usage"
          ],
          "correctAnswer": 1
        },
        {
          "question": "Which framework is best for fraud detection in online transactions?",
          "options": ["MapReduce", "Spark", "Flink", "Solr"],
          "correctAnswer": 2
        },
        {
          "question": "What does the `Map` phase in MapReduce do?",
          "options": [
            "Aggregates intermediate data",
            "Writes results to HDFS",
            "Processes input into key-value pairs",
            "Deletes duplicated data"
          ],
          "correctAnswer": 2
        },
        {
          "question": "Which Hadoop class is responsible for defining how input files are split?",
          "options": ["InputFormat", "RecordReader", "InputSplitter", "Mapper"],
          "correctAnswer": 2
        },
        {
          "question": "What is a combiner used for in MapReduce?",
          "options": [
            "Splits the data",
            "Improves memory usage",
            "Performs local aggregation before shuffle",
            "Deletes intermediate keys"
          ],
          "correctAnswer": 2
        },
        {
          "question": "Which NoSQL database is best for storing flexible, nested data?",
          "options": ["MongoDB", "Cassandra", "Redis", "PostgreSQL"],
          "correctAnswer": 0
        },
        {
          "question": "Which NoSQL model is best for managing social relationships?",
          "options": ["Document", "Key-value", "Column", "Graph"],
          "correctAnswer": 3
        },
        {
          "question": "In MongoDB, what does `$push` do?",
          "options": [
            "Updates multiple fields",
            "Inserts a document",
            "Adds an element to an array",
            "Increments a number"
          ],
          "correctAnswer": 2
        },
        {
          "question": "Which MongoDB method creates a compound index?",
          "options": [
            "collection.create_index(['name'])",
            "collection.create_index([('name', 1), ('age', -1)])",
            "collection.index('name', 'age')",
            "create_compound(['name', 'age'])"
          ],
          "correctAnswer": 1
        },
        {
          "question": "Which PyMongo method is used to insert multiple documents?",
          "options": [
            "insert_bulk",
            "insert_all",
            "insert_many",
            "bulk_write"
          ],
          "correctAnswer": 2
        },
        {
          "question": "Which MongoDB operator increases a numeric field's value?",
          "options": ["$inc", "$add", "$push", "$upsert"],
          "correctAnswer": 0
        },
        {
          "question": "What is the primary advantage of map-side joins?",
          "options": [
            "Flexibility",
            "No need for sorting",
            "Avoids shuffle step",
            "Supports different schemas"
          ],
          "correctAnswer": 2
        },
        {
          "question": "What does `collection.find_one()` return?",
          "options": [
            "A list of documents",
            "The last matching document",
            "The first matching document",
            "Document count"
          ],
          "correctAnswer": 2
        },
        {
          "question": "Which of the following is a column-family NoSQL database?",
          "options": ["MongoDB", "Neo4j", "Redis", "Cassandra"],
          "correctAnswer": 3
        },
        {
          "question": "Which data model stores data as key-value pairs with no schema?",
          "options": ["Relational", "Document", "Key-Value", "Graph"],
          "correctAnswer": 2
        },
        {
          "question": "Which search engine is used with Hadoop for indexing HDFS content?",
          "options": ["Lucene", "Spark SQL", "Solr", "Kafka"],
          "correctAnswer": 2
        },
        {
          "question": "Which MongoDB command creates an index on 'name' field?",
          "options": [
            "collection.create_index('name')",
            "index('name')",
            "collection.index_on('name')",
            "make_index('name')"
          ],
          "correctAnswer": 0
        },
        {
          "question": "Why does Hadoop prefer moving compute to data?",
          "options": [
            "Reduce disk usage",
            "Improve memory",
            "Save energy",
            "Reduce network traffic"
          ],
          "correctAnswer": 3
        },
        {
          "question": "Which of the following frameworks supports native streaming?",
          "options": ["MapReduce", "Spark", "Flink", "HBase"],
          "correctAnswer": 2
        },
        {
          "question": "Which MongoDB data type is used for strings?",
          "options": ["Text", "Str", "StringWritable", "Text"],
          "correctAnswer": 3
        },
        {
          "question": "Which operator filters documents where an array contains all specified elements?",
          "options": ["$in", "$or", "$all", "$size"],
          "correctAnswer": 2
        },
        {
          "question": "Which operator is used to apply logic across multiple fields?",
          "options": ["$set", "$and", "$group", "$project"],
          "correctAnswer": 1
        },
        {
          "question": "What is the default HDFS block size in Hadoop?",
          "options": ["64 MB", "128 MB", "256 MB", "512 MB"],
          "correctAnswer": 1
        },
        {
          "question": "What does the `Shuffle` phase do in MapReduce?",
          "options": [
            "Sorts and transfers data between mappers",
            "Distributes code",
            "Splits files",
            "Joins keys"
          ],
          "correctAnswer": 0
        },
        {
          "question": "What is `Distributed Cache` used for in MapReduce?",
          "options": [
            "Storing logs",
            "Caching map outputs",
            "Sharing static files across nodes",
            "Saving reducer results"
          ],
          "correctAnswer": 2
        },
        {
          "question": "Which of these is a disadvantage of Hadoop?",
          "options": [
            "Works on commodity hardware",
            "Real-time processing",
            "Batch processing efficiency",
            "Scalable architecture"
          ],
          "correctAnswer": 1
        },
        {
          "question": "What makes Spark more interactive than MapReduce?",
          "options": [
            "No need for code",
            "Caching intermediate results in memory",
            "Support for real-time queries",
            "It’s a database"
          ],
          "correctAnswer": 1
        },
        {
          "question": "Which Python module is commonly used for working with MongoDB?",
          "options": ["bson", "pymongo", "mongokit", "mongodriver"],
          "correctAnswer": 1
        },
        {
          "question": "What is the correct way to create a MongoDB connection?",
          "options": [
            "Mongo.connect('localhost')",
            "MongoClient('localhost')",
            "MongoDB('127.0.0.1')",
            "MongoConnect('uri')"
          ],
          "correctAnswer": 1
        }
      ]
    },


    {
      "id": 6,
      "title": "Clean Code & SOLID Quiz",
      "description": "Test your understanding of Clean Code principles, EAV models, and SOLID design with real-world Java code examples.",
      "questions": [
        {
          "question": "What does the 'S' in SOLID stand for?",
          "options": ["Software Design", "Single Responsibility", "Simple Implementation", "Structured Inheritance"],
          "correctAnswer": 1
        },
        {
          "question": "Which principle suggests that a class should have only one reason to change?",
          "options": ["OCP", "LSP", "SRP", "ISP"],
          "correctAnswer": 2
        },
        {
          "question": "What is the main problem with the following class?\n```java\npublic class Report {\n  public void generate() {}\n  public void saveToFile(String path) {}\n}```",
          "options": ["Too many parameters", "Violates SRP", "Lacks encapsulation", "Violates DIP"],
          "correctAnswer": 1
        },
        {
          "question": "In Clean Code, what kind of names should be used for functions?",
          "options": ["Nouns", "Slang", "Verbs", "Numbers"],
          "correctAnswer": 2
        },
        {
          "question": "Which of the following names is most intention-revealing?",
          "options": ["int x", "int temp", "int userAge", "int a1"],
          "correctAnswer": 2
        },
        {
          "question": "What is the issue in this code?\n```java\nint O = 0, l = 1;\nif (O == l) {...}```",
          "options": ["It won't compile", "It uses disinformative names", "It violates SRP", "It uses a magic number"],
          "correctAnswer": 1
        },
        {
          "question": "In Clean Code, what is preferred over return codes when handling errors?",
          "options": ["Global variables", "null", "Exceptions", "if-else only"],
          "correctAnswer": 2
        },
        {
          "question": "Which function design principle is being violated?\n```java\npublic void processUser(String name, int age, String email, boolean active, double salary)```",
          "options": ["Too many classes", "Too many arguments", "No return value", "Bad indentation"],
          "correctAnswer": 1
        },
        {
          "question": "Why should magic numbers be avoided?",
          "options": ["They increase compile time", "They are unreadable", "They break encapsulation", "They violate polymorphism"],
          "correctAnswer": 1
        },
        {
          "question": "Which principle promotes extending a class’s behavior without modifying it?",
          "options": ["SRP", "OCP", "LSP", "ISP"],
          "correctAnswer": 1
        },
        {
          "question": "What is the flaw in this class?\n```java\npublic class Bird {\n  public void fly() {...}\n}\npublic class Ostrich extends Bird {\n  public void fly() {\n    throw new UnsupportedOperationException();\n  }\n}```",
          "options": ["Violates SRP", "Violates OCP", "Violates LSP", "Violates DIP"],
          "correctAnswer": 2
        },
        {
          "question": "What does EAV stand for?",
          "options": ["Entity-Attribute-View", "Element-Attachment-Value", "Entity-Attribute-Value", "Enhanced-Attribute-Variable"],
          "correctAnswer": 2
        },
        {
          "question": "Which use case is best for the EAV model?",
          "options": ["Banking transactions", "Sparse and dynamic attributes", "Static product catalogs", "Gaming leaderboards"],
          "correctAnswer": 1
        },
        {
          "question": "How should we refactor a method doing both reading and writing a file?",
          "options": ["Combine into a loop", "Use global variables", "Split into smaller functions", "Use static fields"],
          "correctAnswer": 2
        },
        {
          "question": "Why is the method below considered bad design?\n```java\npublic static void process() {\n  read(); write(); print(); log(); clean(); backup(); archive(); notify();\n}```",
          "options": ["Too long and does many things", "Syntax error", "Violates DIP", "Needs more loops"],
          "correctAnswer": 0
        },
        {
          "question": "Which of these follows the Dependency Inversion Principle?",
          "options": [
            "Class A uses new Class B directly",
            "Class A depends on interface and Class B implements it",
            "Class A holds static reference to Class B",
            "Class A uses Class B via global variable"
          ],
          "correctAnswer": 1
        },
        {
          "question": "Why is using flag parameters discouraged in Clean Code?",
          "options": ["They break encapsulation", "They make logic harder to follow", "They increase runtime", "They are deprecated"],
          "correctAnswer": 1
        },
        {
          "question": "Which naming example violates 'Avoid Noise Words'?",
          "options": ["String name", "String customerName", "String nameOfCustomerString", "String fullName"],
          "correctAnswer": 2
        },
        {
          "question": "What’s the advantage of try-with-resources?",
          "options": ["Improves performance", "Reduces memory", "Ensures resources are closed", "Avoids object creation"],
          "correctAnswer": 2
        },
        {
          "question": "Identify the anti-pattern in the following:\n```java\ntry {\n  process();\n} catch (Exception e) {}\n```",
          "options": ["Logging error", "Rethrowing exception", "Swallowing exception", "Catching specific type"],
          "correctAnswer": 2
        },
        {
          "question": "Which of these violates Interface Segregation Principle?",
          "options": [
            "Separate Printer and Scanner interfaces",
            "Single Machine interface with print, scan, fax",
            "Only print() in Printer interface",
            "SimplePrinter implements only print"
          ],
          "correctAnswer": 1
        },
        {
          "question": "Which class naming follows Clean Code recommendations?",
          "options": ["DataManagerUtil", "UserHandler", "UserRecord", "ProcessDataClass"],
          "correctAnswer": 2
        },
        {
          "question": "What’s the best way to refactor this?\n```java\nswitch(type) {\n case 'A': return 10;\n case 'B': return 20;\n}```",
          "options": ["Use if-else", "Use enums", "Use polymorphism", "Use static methods"],
          "correctAnswer": 2
        },
        {
          "question": "Why is Hungarian Notation discouraged?",
          "options": ["Longer names", "Less type safety", "Confuses dynamic types", "Leaks type info into names"],
          "correctAnswer": 3
        },
        {
          "question": "Pick the better method name:",
          "options": ["killAllZombies()", "removeAllProcesses()", "zap()", "boomBoomGone()"],
          "correctAnswer": 1
        },
        {
          "question": "Which code is better for searching classes?\nBad:\n```for (int i = 0; i < 7; i++) {...}```\nGood:\n```for (int i = 0; i < MAX_CLASSES; i++) {...}```",
          "options": ["Bad", "Good", "Both are same", "Depends on context"],
          "correctAnswer": 1
        },
        {
          "question": "What is wrong with using type information in variable names like `int iAge`?",
          "options": ["Breaks SRP", "Hard to test", "Uses disinformation", "Adds noise"],
          "correctAnswer": 3
        },
        {
          "question": "What is a problem with this method signature?\n```java\npublic void fetchUserData(int id, String name, int age, String city, boolean active)```",
          "options": ["Uses primitives", "Too many arguments", "Return type missing", "Wrong order of arguments"],
          "correctAnswer": 1
        },
        {
          "question": "How to make this code more abstract?\n```java\nSystem.out.println(22);\nif (i == 30) {...}```",
          "options": ["Move to constants", "Use polymorphism", "Extract into named method", "Change variable type"],
          "correctAnswer": 2
        },
        {
          "question": "Which of the following is **not** a disadvantage of EAV?",
          "options": ["Hard to index", "Dynamic schema", "Weak type enforcement", "Complex querying"],
          "correctAnswer": 1
        },
        {
          "question": "What Clean Code principle is violated in the following?\n```java\nint a = 10;\nint b = 20;\nint c = a + b;\nSystem.out.println(c);```",
          "options": ["No abstraction", "Unclear naming", "Too many arguments", "Violates SRP"],
          "correctAnswer": 1
        },
        {
          "question": "What's wrong with the following function?\n```java\npublic void process() {\n read();\n write();\n backup();\n log();\n clean();\n}```",
          "options": ["Too many arguments", "Bad naming", "Function does too much", "Uses return code"],
          "correctAnswer": 2
        },
        {
          "question": "Which Clean Code principle is violated?\n```java\npublic class DataManager {\n public void manage() {\n   if (type.equals(\"A\")) {\n     processA();\n   } else if (type.equals(\"B\")) {\n     processB();\n   }\n }\n}```",
          "options": ["Use of magic strings", "No abstraction", "Should use polymorphism", "Too many classes"],
          "correctAnswer": 2
        },
        {
          "question": "Which SOLID principle is **violated** here?\n```java\npublic class FileManager {\n public void saveToDisk(String data) {}\n public void printReport() {}\n}```",
          "options": ["OCP", "LSP", "SRP", "ISP"],
          "correctAnswer": 2
        },
        {
          "question": "Which SOLID principle is applied here?\n```java\npublic interface Printer {\n  void print();\n}\npublic class SimplePrinter implements Printer {\n  public void print() {\n    System.out.println(\"Printing...\");\n  }\n}```",
          "options": ["SRP", "LSP", "ISP", "DIP"],
          "correctAnswer": 2
        },
        {
          "question": "Which SOLID principle is violated in this code?\n```java\npublic class Ostrich extends Bird {\n public void fly() {\n   throw new UnsupportedOperationException();\n }\n}```",
          "options": ["SRP", "OCP", "LSP", "ISP"],
          "correctAnswer": 2
        },
        {
          "question": "What Clean Code issue exists in the method below?\n```java\npublic void process(String name, int age, String city, String country, boolean active) { ... }```",
          "options": ["Too many parameters", "Wrong return type", "No exceptions", "Missing documentation"],
          "correctAnswer": 0
        },
        {
          "question": "Which Clean Code practice is demonstrated?\n```java\nfinal int MAX_USERS = 100;\nfor (int i = 0; i < MAX_USERS; i++) {...}```",
          "options": ["Avoids long methods", "Avoids magic numbers", "Uses polymorphism", "Handles exceptions"],
          "correctAnswer": 1
        },
        {
          "question": "What’s the issue in this class?\n```java\npublic class ApiHandler {\n private String u;\n private String p;\n}```",
          "options": ["Violates SRP", "Violates OCP", "Bad naming (not intention-revealing)", "Too many responsibilities"],
          "correctAnswer": 2
        },
        {
          "question": "Which SOLID principle is applied in the following?\n```java\npublic class EmailService {\n private final NotificationSender sender;\n public EmailService(NotificationSender sender) {\n   this.sender = sender;\n }\n}```",
          "options": ["SRP", "OCP", "ISP", "DIP"],
          "correctAnswer": 3
        }
      ]
    },

    {
      "id": 7,
      "title": "Microservices Quiz",
      "description": "Test your understanding of monolithic vs microservices architecture, SOA, and key design principles.",
      "questions": [
        {
          "question": "What best describes a Monolithic Architecture?",
          "options": ["A set of independent services", "An architecture that scales each module individually", "A tightly integrated application deployed as one unit", "A distributed system"],
          "correctAnswer": 2
        },
        {
          "question": "Which of the following is NOT an advantage of monolithic architecture?",
          "options": ["Simple to develop and test", "Easy to scale individual modules", "Centralized management", "High performance due to internal calls"],
          "correctAnswer": 1
        },
        {
          "question": "What is a major risk of using Monolithic Architecture?",
          "options": ["Service isolation", "Centralized deployment", "Data decentralization", "Independent scaling"],
          "correctAnswer": 1
        },
        {
          "question": "What happens when a small change is made in a monolithic system?",
          "options": ["Only the changed service is redeployed", "The whole application must be redeployed", "A new server is added", "CI/CD is triggered automatically"],
          "correctAnswer": 1
        },
        {
          "question": "What defines a Microservices Architecture?",
          "options": ["One large codebase", "A centralized database", "Small, independent services communicating via APIs", "Services running on one server"],
          "correctAnswer": 2
        },
        {
          "question": "Which of the following is NOT true about microservices?",
          "options": ["Each service is tightly coupled", "Each service can be deployed independently", "Services can use different programming languages", "Each service has its own data store"],
          "correctAnswer": 0
        },
        {
          "question": "What does Microservices Architecture promote?",
          "options": ["Single language usage", "Team autonomy", "Strong centralized orchestration", "Shared database"],
          "correctAnswer": 1
        },
        {
          "question": "One key benefit of microservices is:",
          "options": ["Better testing complexity", "Shared deployment pipeline", "Failure isolation", "Easier data integration"],
          "correctAnswer": 2
        },
        {
          "question": "Which component is NOT needed in microservices?",
          "options": ["Service discovery", "API Gateway", "Enterprise Service Bus (ESB)", "Monitoring tools"],
          "correctAnswer": 2
        },
        {
          "question": "Microservices allow:",
          "options": ["Centralized data storage", "Language uniformity", "Different tech stacks per service", "Single deployment unit"],
          "correctAnswer": 2
        },
        {
          "question": "Why are microservices good for scaling?",
          "options": ["Whole system scales at once", "Each service can scale independently", "Scaling requires no load balancer", "Code duplication is minimized"],
          "correctAnswer": 1
        },
        {
          "question": "What helps ensure high availability in microservices?",
          "options": ["Central database", "Orchestration via ESB", "Service isolation", "SOAP-based communication"],
          "correctAnswer": 2
        },
        {
          "question": "What enables faster deployments in microservices?",
          "options": ["Central deployment strategy", "Independent deployable units", "Complex integration", "Shared service testing"],
          "correctAnswer": 1
        },
        {
          "question": "How do microservices avoid vendor lock-in?",
          "options": ["Proprietary APIs", "Closed source tools", "Use of open standards", "Single language enforcement"],
          "correctAnswer": 2
        },
        {
          "question": "Which platform improves resilience in microservices?",
          "options": ["DockerHub", "Kubernetes", "Apache Spark", "MySQL"],
          "correctAnswer": 1
        },
        {
          "question": "A key challenge of microservices is:",
          "options": ["Small codebase", "Operational simplicity", "System complexity", "Lack of testing"],
          "correctAnswer": 2
        },
        {
          "question": "What type of testing is harder in microservices?",
          "options": ["Unit testing", "End-to-end testing", "Static testing", "Load testing"],
          "correctAnswer": 1
        },
        {
          "question": "What causes latency in microservices?",
          "options": ["Shared memory usage", "Internal function calls", "Network communication", "Local caching"],
          "correctAnswer": 2
        },
        {
          "question": "What complicates data consistency in microservices?",
          "options": ["SOAP usage", "Use of a single DB", "Distributed data stores", "One team managing all services"],
          "correctAnswer": 2
        },
        {
          "question": "API versioning is important in microservices because:",
          "options": ["It reduces performance", "Services can evolve independently", "All services use one version", "It allows central coordination"],
          "correctAnswer": 1
        },
        {
          "question": "What is a core component in SOA but NOT in microservices?",
          "options": ["Service Discovery", "API Gateway", "Enterprise Service Bus (ESB)", "Independent database"],
          "correctAnswer": 2
        },
        {
          "question": "SOA commonly uses which protocol?",
          "options": ["REST", "gRPC", "SOAP", "WebSockets"],
          "correctAnswer": 2
        },
        {
          "question": "In microservices, services:",
          "options": ["Are centrally orchestrated", "Rely on ESB", "Are tightly coupled", "Communicate directly via APIs"],
          "correctAnswer": 3
        },
        {
          "question": "SOA services are usually:",
          "options": ["Fine-grained", "Coarse to fine-grained", "Stateless only", "Event-based only"],
          "correctAnswer": 1
        },
        {
          "question": "What does 'modeled around business domains' mean?",
          "options": ["Services follow technical layers", "Services reflect company departments", "Services reuse existing code", "Services must be reused across systems"],
          "correctAnswer": 1
        },
        {
          "question": "Decentralization in microservices refers to:",
          "options": ["One shared database", "Managing data per service", "Centralized deployment", "Code duplication"],
          "correctAnswer": 1
        },
        {
          "question": "What should each service hide behind APIs?",
          "options": ["Business logic", "Implementation details", "Team members", "Configuration files"],
          "correctAnswer": 1
        },
        {
          "question": "What helps microservices be 'highly observable'?",
          "options": ["Fewer services", "Integrated logs and metrics", "One centralized dashboard", "Simplified user interface"],
          "correctAnswer": 1
        },
        {
          "question": "What database pattern is most aligned with microservices?",
          "options": ["Shared DB per service", "One DB for all services", "Database per Service", "NoSQL only"],
          "correctAnswer": 2
        },
        {
          "question": "What communication pattern is often used in microservices?",
          "options": ["SMTP", "RESTful APIs", "SSH", "FTP"],
          "correctAnswer": 1
        }
      ]
    } ,

    {
  "id": 8,
  "title": " Microservices pattern - 1  Quiz",
  "description": "Test your understanding of communication patterns, message formats, protocols, and broker-based messaging in microservices.",
  "questions": [
    {
      "question": "What is the main characteristic of the Request/Response communication pattern?",
      "options": ["Asynchronous", "One-to-Many", "Synchronous", "Fire-and-forget"],
      "correctAnswer": 2
    },
    {
      "question": "Which protocol is commonly used with REST APIs?",
      "options": ["SMTP", "HTTP", "FTP", "WebSocket"],
      "correctAnswer": 1
    },
    {
      "question": "Which of these technologies is designed for internal high-performance communication?",
      "options": ["SOAP", "gRPC", "REST", "JSON-RPC"],
      "correctAnswer": 1
    },
    {
      "question": "Which format is NOT human-readable?",
      "options": ["JSON", "XML", "Protocol Buffers", "YAML"],
      "correctAnswer": 2
    },
    {
      "question": "In a publish/subscribe model, how many services receive a message?",
      "options": ["One", "Two", "All subscribers", "None"],
      "correctAnswer": 2
    },
    {
      "question": "Which communication type is considered fire-and-forget?",
      "options": ["Request/Response", "One-way Notification", "Async Request/Response", "Publish/Subscribe"],
      "correctAnswer": 1
    },
    {
      "question": "Which header allows a reply to be matched with a request in asynchronous messaging?",
      "options": ["Message ID", "Timestamp", "Correlation ID", "Sender"],
      "correctAnswer": 2
    },
    {
      "question": "Which pattern uses a message broker?",
      "options": ["Brokerless", "REST", "SOAP", "Broker-based"],
      "correctAnswer": 3
    },
    {
      "question": "What is one advantage of using a message broker?",
      "options": ["Increases coupling", "Requires direct connections", "Enables loose coupling", "Decreases availability"],
      "correctAnswer": 2
    },
    {
      "question": "Which is NOT an advantage of REST?",
      "options": ["Stateless", "Simple", "Tight coupling", "Works over HTTP"],
      "correctAnswer": 2
    },
    {
      "question": "What is the main characteristic of the Request/Response communication pattern?",
      "options": ["Asynchronous", "One-to-Many", "Synchronous", "Fire-and-forget"],
      "correctAnswer": 2
    },
    {
      "question": "Which protocol is commonly used with REST APIs?",
      "options": ["SMTP", "HTTP", "FTP", "WebSocket"],
      "correctAnswer": 1
    },
    {
      "question": "Which of these technologies is designed for internal high-performance communication?",
      "options": ["SOAP", "gRPC", "REST", "JSON-RPC"],
      "correctAnswer": 1
    },
    {
      "question": "Which format is NOT human-readable?",
      "options": ["JSON", "XML", "Protocol Buffers", "YAML"],
      "correctAnswer": 2
    },
    {
      "question": "In a publish/subscribe model, how many services receive a message?",
      "options": ["One", "Two", "All subscribers", "None"],
      "correctAnswer": 2
    },
    {
      "question": "Which communication type is considered fire-and-forget?",
      "options": ["Request/Response", "One-way Notification", "Async Request/Response", "Publish/Subscribe"],
      "correctAnswer": 1
    },
    {
      "question": "Which header allows a reply to be matched with a request in asynchronous messaging?",
      "options": ["Message ID", "Timestamp", "Correlation ID", "Sender"],
      "correctAnswer": 2
    },
    {
      "question": "Which pattern uses a message broker?",
      "options": ["Brokerless", "REST", "SOAP", "Broker-based"],
      "correctAnswer": 3
    },
    {
      "question": "What is one advantage of using a message broker?",
      "options": ["Increases coupling", "Requires direct connections", "Enables loose coupling", "Decreases availability"],
      "correctAnswer": 2
    },
    {
      "question": "Which is NOT an advantage of REST?",
      "options": ["Stateless", "Simple", "Tight coupling", "Works over HTTP"],
      "correctAnswer": 2
    }
  ]
} ,

{
  "id": 9,
  "title": " Microservices pattern - 2  Quiz",
  "description": "Evaluate your understanding of CQRS, Event Sourcing, Sagas, API Gateway, and distributed tracing.",
  "questions": [
    {
      "question": "What does CQRS stand for?",
      "options": ["Common Query Reporting Strategy", "Command Query Responsibility Segregation", "Centralized Query and Response System", "Coordinated Query Rule Setup"],
      "correctAnswer": 1
    },
    {
      "question": "Which model in CQRS handles write operations?",
      "options": ["Command Model", "Query Model", "API Model", "Event Model"],
      "correctAnswer": 0
    },
    {
      "question": "What is a key benefit of CQRS?",
      "options": ["Simpler architecture", "Shared database", "Separation of concerns", "Synchronous messaging"],
      "correctAnswer": 2
    },
    {
      "question": "Event Sourcing stores data as:",
      "options": ["Snapshots", "SQL Rows", "Sequence of Events", "NoSQL documents"],
      "correctAnswer": 2
    },
    {
      "question": "Which is a challenge of Event Sourcing?",
      "options": ["Lack of traceability", "No audit logs", "Replay performance", "No write model"],
      "correctAnswer": 2
    },
    {
      "question": "What does an orchestrator do in a Saga?",
      "options": ["Processes events", "Executes compensations", "Coordinates the saga steps", "Monitors logs"],
      "correctAnswer": 2
    },
    {
      "question": "Which type of saga has no central controller?",
      "options": ["Orchestration", "Manual", "Choreography", "Synchronous"],
      "correctAnswer": 2
    },
    {
      "question": "A key tool for distributed tracing is:",
      "options": ["Postman", "Grafana", "Jaeger", "Prometheus"],
      "correctAnswer": 2
    },
    {
      "question": "What is the main idea behind the API Gateway pattern?",
      "options": ["Direct client access to services", "Shared database", "Single entry point for client", "Log collection"],
      "correctAnswer": 2
    },
    {
      "question": "Which is NOT a benefit of API Gateway?",
      "options": ["Authentication", "Centralized logging", "Protocol translation", "Full database access"],
      "correctAnswer": 3
    },
    {
      "question": "What does CQRS stand for?",
      "options": ["Common Query Reporting Strategy", "Command Query Responsibility Segregation", "Centralized Query and Response System", "Coordinated Query Rule Setup"],
      "correctAnswer": 1
    },
    {
      "question": "Which model in CQRS handles write operations?",
      "options": ["Command Model", "Query Model", "API Model", "Event Model"],
      "correctAnswer": 0
    },
    {
      "question": "What is a key benefit of CQRS?",
      "options": ["Simpler architecture", "Shared database", "Separation of concerns", "Synchronous messaging"],
      "correctAnswer": 2
    },
    {
      "question": "Event Sourcing stores data as:",
      "options": ["Snapshots", "SQL Rows", "Sequence of Events", "NoSQL documents"],
      "correctAnswer": 2
    },
    {
      "question": "Which is a challenge of Event Sourcing?",
      "options": ["Lack of traceability", "No audit logs", "Replay performance", "No write model"],
      "correctAnswer": 2
    },
    {
      "question": "What does an orchestrator do in a Saga?",
      "options": ["Processes events", "Executes compensations", "Coordinates the saga steps", "Monitors logs"],
      "correctAnswer": 2
    },
    {
      "question": "Which type of saga has no central controller?",
      "options": ["Orchestration", "Manual", "Choreography", "Synchronous"],
      "correctAnswer": 2
    },
    {
      "question": "A key tool for distributed tracing is:",
      "options": ["Postman", "Grafana", "Jaeger", "Prometheus"],
      "correctAnswer": 2
    },
    {
      "question": "What is the main idea behind the API Gateway pattern?",
      "options": ["Direct client access to services", "Shared database", "Single entry point for client", "Log collection"],
      "correctAnswer": 2
    },
    {
      "question": "Which is NOT a benefit of API Gateway?",
      "options": ["Authentication", "Centralized logging", "Protocol translation", "Full database access"],
      "correctAnswer": 3
    }
  ]
},

{
  "id": 10,
  "title": "Modeling and OCL Quiz",
  "description": "Assess your knowledge of descriptive, predictive, and prescriptive modeling, UML, Model-Driven Engineering (MDE), and Object Constraint Language (OCL).",
  "questions": [
    {
      "question": "Which technique is commonly used in descriptive models?",
      "options": ["Regression", "Clustering", "Optimization", "Reinforcement Learning"],
      "correctAnswer": 1
    },
    {
      "question": "Which model type is used to suggest the best course of action?",
      "options": ["Descriptive", "Predictive", "Prescriptive", "Analytical"],
      "correctAnswer": 2
    },
    {
      "question": "Which of the following is a feature of Model-Driven Engineering (MDE)?",
      "options": ["Focus on low-level coding", "Manual implementation", "Automated code generation", "Platform dependency"],
      "correctAnswer": 2
    },
    {
      "question": "In MDE, what is the purpose of model transformation?",
      "options": ["To change code style", "To convert code to models", "To convert one model into another", "To rename classes"],
      "correctAnswer": 2
    },
    {
      "question": "Which of the following is NOT a benefit of MDE?",
      "options": ["Platform independence", "Reduced productivity", "Higher abstraction", "Automation"],
      "correctAnswer": 1
    },
    {
      "question": "What is UML primarily used for?",
      "options": ["Writing code", "Modeling object-oriented systems", "Creating databases", "User interface design"],
      "correctAnswer": 1
    },
    {
      "question": "What kind of diagram is used to represent the interaction between actors and the system over time?",
      "options": ["Class Diagram", "Sequence Diagram", "Package Diagram", "Activity Diagram"],
      "correctAnswer": 1
    },
    {
      "question": "Which of these is a characteristic of modeling languages?",
      "options": ["Not standardized", "Domain-specific", "Based on code syntax", "Only textual"],
      "correctAnswer": 1
    },
    {
      "question": "Which of the following is used for modeling dynamic systems in MATLAB?",
      "options": ["BPMN", "Archimate", "Simulink", "ERD"],
      "correctAnswer": 2
    },
    {
      "question": "Which diagram is best for modeling workflows and business processes?",
      "options": ["Sequence Diagram", "Activity Diagram", "Use Case Diagram", "Package Diagram"],
      "correctAnswer": 1
    },
    {
      "question": "What does a use case diagram represent?",
      "options": ["Data structures", "Functional behavior of a system", "Class hierarchy", "System algorithms"],
      "correctAnswer": 1
    },
    {
      "question": "What element in a use case diagram defines the system scope?",
      "options": ["Actor", "Use Case", "Relationship", "System Boundary"],
      "correctAnswer": 3
    },
    {
      "question": "Which element in a class diagram represents inheritance?",
      "options": ["Multiplicity", "Association", "Generalization", "Activation Bar"],
      "correctAnswer": 2
    },
    {
      "question": "Which OCL keyword refers to the current instance of a class?",
      "options": ["this", "current", "self", "context"],
      "correctAnswer": 2
    },
    {
      "question": "Which of the following is an OCL constraint type?",
      "options": ["Iteration", "Condition", "Invariant", "Loop"],
      "correctAnswer": 2
    },
    {
      "question": "What type of data is 'Set(T)' in OCL?",
      "options": ["Ordered with duplicates", "Ordered without duplicates", "Unordered without duplicates", "None"],
      "correctAnswer": 2
    },
    {
      "question": "Which operation is used in OCL to check if a collection contains an element?",
      "options": ["contains()", "has()", "includes()", "within()"],
      "correctAnswer": 2
    },
    {
      "question": "What does 'context Person inv: self.age > 0' ensure?",
      "options": ["Age must be zero", "Age must be negative", "Age is greater than zero", "Age is undefined"],
      "correctAnswer": 2
    },
    {
      "question": "Which OCL operation filters elements based on a condition?",
      "options": ["collect", "reject", "select", "iterate"],
      "correctAnswer": 2
    },
    {
      "question": "What is the purpose of '->forAll' in OCL?",
      "options": ["Applies condition to one item", "Checks for a single element", "Applies condition to all elements", "None"],
      "correctAnswer": 2
    },
    {
      "question": "Which language is formally used to define rules in UML models?",
      "options": ["Java", "SQL", "OCL", "HTML"],
      "correctAnswer": 2
    },
    {
      "question": "Which diagram shows package dependencies?",
      "options": ["Class Diagram", "Use Case Diagram", "Package Diagram", "Activity Diagram"],
      "correctAnswer": 2
    },
    {
      "question": "What is the purpose of a System Sequence Diagram (SSD)?",
      "options": ["Define database schema", "Show system and actor interactions", "Describe hardware layout", "Optimize code"],
      "correctAnswer": 1
    },
    {
      "question": "In UML, what does multiplicity specify?",
      "options": ["Method parameters", "Number of possible instances", "Return type", "Attribute type"],
      "correctAnswer": 1
    },
    {
      "question": "What type of UML diagram models static structure?",
      "options": ["Use Case Diagram", "Sequence Diagram", "Class Diagram", "Activity Diagram"],
      "correctAnswer": 2
    },
    {
      "question": "What is 'oclIsUndefined()' used for?",
      "options": ["To define a value", "To perform calculations", "To check if a value is undefined", "To concatenate strings"],
      "correctAnswer": 2
    },
    {
      "question": "Which type of OCL collection allows duplicates and has no order?",
      "options": ["Set", "Sequence", "Bag", "OrderedSet"],
      "correctAnswer": 2
    },
    {
      "question": "What kind of model is used to predict future outcomes?",
      "options": ["Descriptive", "Predictive", "Prescriptive", "Analytical"],
      "correctAnswer": 1
    },
    {
      "question": "Which OCL operation counts how many times an object appears in a collection?",
      "options": ["count()", "numberOf()", "appears()", "includes()"],
      "correctAnswer": 0
    },
    {
      "question": "Which modeling language is best suited for enterprise architecture?",
      "options": ["BPMN", "Archimate", "UML", "Simulink"],
      "correctAnswer": 1
    },
    {
      "question": "Which of the following is true about OCL?",
      "options": ["Procedural", "Graphical", "Declarative", "Event-driven"],
      "correctAnswer": 2
    },
    {
      "question": "What does '->notEmpty()' check in OCL?",
      "options": ["If collection is empty", "If object exists", "If collection has elements", "If condition is false"],
      "correctAnswer": 2
    },
    {
      "question": "Which operation is used to apply transformation in MDE?",
      "options": ["Simulation", "Translation", "Model Transformation", "Conversion"],
      "correctAnswer": 2
    },
    {
      "question": "Which of these is an example of prescriptive model use?",
      "options": ["Grouping customers", "Forecasting sales", "Optimizing delivery routes", "Summarizing reports"],
      "correctAnswer": 2
    },
    {
      "question": "What type of constraint is 'context CustomerCard inv: validFrom.isBefore(goodThru)'?",
      "options": ["Attribute invariant", "Association invariant", "Precondition", "Postcondition"],
      "correctAnswer": 0
    },
    {
      "question": "Which diagram shows a high-level structure of grouped elements?",
      "options": ["Class Diagram", "Package Diagram", "Activity Diagram", "Sequence Diagram"],
      "correctAnswer": 1
    },
    {
      "question": "Which of the following represents a general operation defined in OclAny?",
      "options": ["oclSum()", "oclJoin()", "oclIsTypeOf()", "oclSelect()"],
      "correctAnswer": 2
    },
    {
      "question": "What is the role of 'PrintedName = owner.title.concat(...)' in OCL?",
      "options": ["Loop control", "String concatenation", "Data mapping", "Multiplicity rule"],
      "correctAnswer": 1
    },
    {
      "question": "Which collection type in OCL is ordered and allows duplicates?",
      "options": ["Set", "Sequence", "Bag", "OrderedSet"],
      "correctAnswer": 1
    },
    {
      "question": "In OCL, which operation is used to transform a collection?",
      "options": ["collect", "reject", "select", "iterate"],
      "correctAnswer": 0
    },
    {
      "question": "What is the purpose of UML?",
      "options": ["Writing low-level code", "Building GUI", "Modeling system structure and behavior", "Testing performance"],
      "correctAnswer": 2
    },
    {
      "question": "Which modeling language is used to create entity-relationship diagrams?",
      "options": ["UML", "ERD", "Simulink", "OCL"],
      "correctAnswer": 1
    },
    {
      "question": "Which OCL operation checks if at least one element satisfies a condition?",
      "options": ["exists", "forAll", "iterate", "reject"],
      "correctAnswer": 0
    },
    {
      "question": "Which technique is used in predictive models?",
      "options": ["Regression", "Optimization", "Clustering", "Simulation"],
      "correctAnswer": 0
    },
    {
      "question": "Which tool is used for model-to-text transformations?",
      "options": ["JetBrains MPS", "Papyrus", "Acceleo", "Simulink"],
      "correctAnswer": 2
    },
    {
      "question": "What is the root type in OCL type hierarchy?",
      "options": ["Object", "OclAny", "Data", "OclRoot"],
      "correctAnswer": 1
    },
    {
      "question": "What does '->reject()' do in OCL?",
      "options": ["Filters by true condition", "Removes matching elements", "Duplicates elements", "Orders elements"],
      "correctAnswer": 1
    },
    {
      "question": "Which diagram shows system behavior in response to external events?",
      "options": ["SSD", "Class Diagram", "ER Diagram", "Activity Diagram"],
      "correctAnswer": 0
    }
  ]
},

{
  "id": 11,
  "title": "OOP and AOP Concepts Quiz",
  "description": "Test your understanding of Object-Oriented Programming (OOP), Aspect-Oriented Programming (AOP), and software concerns.",
  "questions": [
    {
      "question": "Which of the following is NOT a core concept of Object-Oriented Programming (OOP)?",
      "options": ["Encapsulation", "Abstraction", "Weaving", "Inheritance"],
      "correctAnswer": 2
    },
    {
      "question": "What does 'Encapsulation' mean in OOP?",
      "options": ["Modeling only relevant classes", "Hiding internal details and exposing only what's necessary", "Allowing behavior based on the caller object", "Sharing methods between classes"],
      "correctAnswer": 1
    },
    {
      "question": "Polymorphism in OOP allows:",
      "options": ["Code duplication", "Methods to behave differently based on object", "Eliminating all classes", "Compiling at runtime"],
      "correctAnswer": 1
    },
    {
      "question": "What is the output of the Java example where Dog extends Animal and makeSound is called?",
      "options": ["Woof", "Meow", "Bark!", "Some generic sound..."],
      "correctAnswer": 2
    },
    {
      "question": "In the Python example with Dog and Cat classes, what OOP concept is being demonstrated?",
      "options": ["Inheritance only", "Abstraction", "Polymorphism", "Encapsulation"],
      "correctAnswer": 2
    },
    {
      "question": "What are 'concerns' in software engineering?",
      "options": ["Bugs in the system", "Performance issues only", "Priorities and requirements from stakeholders", "Programming errors"],
      "correctAnswer": 2
    },
    {
      "question": "Which of the following is an example of a core concern?",
      "options": ["Logging", "Security", "Payment processing", "Performance monitoring"],
      "correctAnswer": 2
    },
    {
      "question": "Which is NOT a type of concern listed in the chapter?",
      "options": ["Policy Concern", "Quality of Service Concern", "Compatibility Concern", "Organizational Concern"],
      "correctAnswer": 2
    },
    {
      "question": "What does 'Separation of Concerns' promote?",
      "options": ["Coupling", "System-wide logging", "Dividing system features with minimal overlap", "Writing all code in one place"],
      "correctAnswer": 2
    },
    {
      "question": "What is the main goal of Aspect-Oriented Programming (AOP)?",
      "options": ["Increase code length", "Model entities", "Separate cross-cutting concerns", "Write procedural code"],
      "correctAnswer": 2
    },
    {
      "question": "Which of the following defines a 'Join Point' in AOP?",
      "options": ["The advice code", "Where aspects are configured", "A point in the program where an aspect is applied", "A return value"],
      "correctAnswer": 2
    },
    {
      "question": "What is 'Advice' in AOP?",
      "options": ["The target method", "The object being created", "Code that executes at a join point", "A configuration file"],
      "correctAnswer": 2
    },
    {
      "question": "Which AOP concept determines where and when advice is applied?",
      "options": ["Aspect", "Weaving", "Pointcut", "Join Point"],
      "correctAnswer": 2
    },
    {
      "question": "What is 'Weaving' in AOP?",
      "options": ["Creating new classes", "Applying aspects to target objects", "Polymorphic binding", "Changing variable names"],
      "correctAnswer": 1
    },
    {
      "question": "Which advice runs before the target method is invoked?",
      "options": ["AfterReturning", "Around", "Before", "AfterThrowing"],
      "correctAnswer": 2
    },
    {
      "question": "Which advice is used for cleanup tasks regardless of method outcome?",
      "options": ["After", "Before", "AfterReturning", "Around"],
      "correctAnswer": 0
    },
    {
      "question": "Which advice is only executed if the method throws an exception?",
      "options": ["Before", "AfterReturning", "AfterThrowing", "Around"],
      "correctAnswer": 2
    },
    {
      "question": "Which advice type allows modifying inputs and outputs of methods?",
      "options": ["Before", "After", "Around", "AfterReturning"],
      "correctAnswer": 2
    },
    {
      "question": "What is the main benefit of using AOP?",
      "options": ["Reduces memory", "Duplicates logic", "Improves separation of concerns", "Makes testing harder"],
      "correctAnswer": 2
    },
    {
      "question": "How does AOP affect code reuse?",
      "options": ["Reduces it", "Makes it harder", "Enhances it by applying aspects to multiple points", "Forces manual repetition"],
      "correctAnswer": 2
    },
    {
      "question": "When should you use AOP?",
      "options": ["When starting new programming language", "When building UI", "When dealing with repetitive logic like logging and security", "For sorting algorithms"],
      "correctAnswer": 2
    },
    {
      "question": "OOP is most useful when:",
      "options": ["Handling cross-cutting concerns", "Modeling real-world systems and entities", "Avoiding object creation", "Weaving aspects"],
      "correctAnswer": 1
    },
    {
      "question": "Which is a modular unit in AOP?",
      "options": ["Class", "Object", "Aspect", "Method"],
      "correctAnswer": 2
    },
    {
      "question": "What programming languages support OOP?",
      "options": ["Only Java", "Only C", "Java, C++, Python", "JavaScript only"],
      "correctAnswer": 2
    },
    {
      "question": "Which AOP tool is commonly used in Java?",
      "options": ["Flask", "React", "Spring AOP", "Angular"],
      "correctAnswer": 2
    },
    {
      "question": "Which OOP concept helps hide internal object data?",
      "options": ["Abstraction", "Inheritance", "Encapsulation", "Polymorphism"],
      "correctAnswer": 2
    },
    {
      "question": "How does AOP promote loose coupling?",
      "options": ["By using inheritance", "By duplicating code", "By separating cross-cutting concerns", "By removing classes"],
      "correctAnswer": 2
    },
    {
      "question": "Which paradigm is better for logging without modifying business logic?",
      "options": ["OOP", "AOP", "Procedural", "Functional"],
      "correctAnswer": 1
    },
    {
      "question": "Which of the following is a non-functional concern?",
      "options": ["Transaction processing", "Security", "Inventory management", "Order placement"],
      "correctAnswer": 1
    },
    {
      "question": "What happens in 'After Returning' advice?",
      "options": ["Always runs after the method", "Runs if an exception is thrown", "Runs after a method returns successfully", "Prevents method execution"],
      "correctAnswer": 2
    }
  ]
},

{
  "id": 12,
  "title": "Software Testing and JUnit Quiz",
  "description": "Evaluate your knowledge of software testing principles, types, and JUnit practices.",
  "questions": [
    {
      "question": "What is the primary purpose of software testing?",
      "options": ["To write documentation", "To create user interfaces", "To verify the software meets requirements", "To add new features"],
      "correctAnswer": 2
    },
    {
      "question": "Which of the following is NOT a benefit of software testing?",
      "options": ["Detect bugs early", "Increase hardware usage", "Improve security", "Save cost in the long term"],
      "correctAnswer": 1
    },
    {
      "question": "Why can't testing guarantee 100% bug-free software?",
      "options": ["Developers are careless", "Not enough testers", "Complex scenarios may be hard to test", "Testing is not needed"],
      "correctAnswer": 2
    },
    {
      "question": "Which testing type is best for exploratory and ad-hoc testing?",
      "options": ["Automated Testing", "Manual Testing", "System Testing", "Performance Testing"],
      "correctAnswer": 1
    },
    {
      "question": "Which testing method focuses on inputs and outputs without knowing internal code?",
      "options": ["White Box Testing", "Gray Box Testing", "Black Box Testing", "Unit Testing"],
      "correctAnswer": 2
    },
    {
      "question": "Which level of testing verifies individual components?",
      "options": ["System Testing", "Unit Testing", "Integration Testing", "Acceptance Testing"],
      "correctAnswer": 1
    },
    {
      "question": "Which testing type is done by clients or end-users?",
      "options": ["Unit Testing", "Integration Testing", "Acceptance Testing", "Smoke Testing"],
      "correctAnswer": 2
    },
    {
      "question": "Which JUnit annotation is used to test for exceptions?",
      "options": ["@Before", "@After", "@Test(expected = ...)", "@Timeout"],
      "correctAnswer": 2
    },
    {
      "question": "What is the purpose of @Before in JUnit?",
      "options": ["Runs after each test", "Runs before each test", "Initializes the test report", "Logs errors"],
      "correctAnswer": 1
    },
    {
      "question": "Which JUnit method fails if two values are not equal?",
      "options": ["assertSame", "assertTrue", "assertEquals", "fail"],
      "correctAnswer": 2
    },
    {
      "question": "Which of the following is a functional testing example?",
      "options": ["Response time testing", "Login functionality", "Memory usage check", "Compatibility testing"],
      "correctAnswer": 1
    },
    {
      "question": "Which of these is a non-functional testing type?",
      "options": ["Unit Testing", "Security Testing", "Smoke Testing", "Regression Testing"],
      "correctAnswer": 1
    },
    {
      "question": "Which tool is used for API testing?",
      "options": ["JUnit", "TestNG", "Postman", "Selenium"],
      "correctAnswer": 2
    },
    {
      "question": "What type of testing involves running tests while the software is running?",
      "options": ["Static Testing", "Code Review", "Dynamic Testing", "Documentation Testing"],
      "correctAnswer": 2
    },
    {
      "question": "Which testing type is best for testing old features after an update?",
      "options": ["Load Testing", "Smoke Testing", "Regression Testing", "Gray Box Testing"],
      "correctAnswer": 2
    },
    {
      "question": "In the bug life cycle, what comes after a bug is fixed?",
      "options": ["Closed", "Assigned", "Retested", "New"],
      "correctAnswer": 2
    },
    {
      "question": "Which of these is NOT a QA documentation type?",
      "options": ["Bug Reports", "Traceability Matrix", "Database Schema", "Test Summary Report"],
      "correctAnswer": 2
    },
    {
      "question": "Which test case would check how a system reacts to empty inputs?",
      "options": ["Valid Login", "Load Test", "Empty Fields Test", "Security Test"],
      "correctAnswer": 2
    },
    {
      "question": "In TDD, what is written first?",
      "options": ["UI code", "Working feature", "Test", "Deployment script"],
      "correctAnswer": 2
    },
    {
      "question": "Which testing method is most suitable for performance and load testing?",
      "options": ["Manual Testing", "Ad-hoc Testing", "Automated Testing", "Usability Testing"],
      "correctAnswer": 2
    },
    {
      "question": "Which JUnit assertion checks if a value is null?",
      "options": ["assertEquals", "assertSame", "assertNull", "assertNotSame"],
      "correctAnswer": 2
    },
    {
      "question": "When should manual testing be preferred?",
      "options": ["For repetitive regression tests", "When UI is rapidly changing", "For large-scale performance", "In CI/CD pipelines"],
      "correctAnswer": 1
    },
    {
      "question": "Which of the following is a disadvantage of manual testing?",
      "options": ["Suitable for usability", "Flexible with changes", "Time-consuming for large tests", "Does not require tools"],
      "correctAnswer": 2
    },
    {
      "question": "Which type of testing checks if the major functions of a system work?",
      "options": ["Regression Testing", "Smoke Testing", "Unit Testing", "Gray Box Testing"],
      "correctAnswer": 1
    },
    {
      "question": "In Agile, QA contributes to:",
      "options": ["DevOps infrastructure", "Scrum ceremonies and user story acceptance", "Only code reviews", "Only deployment"],
      "correctAnswer": 1
    },
    {
      "question": "What is the purpose of shift-left testing?",
      "options": ["Postponing tests", "Performing tests earlier in the cycle", "Moving code left", "Documenting bugs only"],
      "correctAnswer": 1
    },
    {
      "question": "Which test verifies that updates don't break existing features?",
      "options": ["Performance Test", "Smoke Test", "Regression Test", "Functional Test"],
      "correctAnswer": 2
    },
    {
      "question": "Who typically performs acceptance testing?",
      "options": ["Developer", "QA Analyst", "Client or End User", "Scrum Master"],
      "correctAnswer": 2
    },
    {
      "question": "Which JUnit annotation runs once before all test methods?",
      "options": ["@Before", "@BeforeClass", "@Test", "@Init"],
      "correctAnswer": 1
    },
    {
      "question": "Which type of testing checks internal paths and logic of code?",
      "options": ["Black Box", "Gray Box", "White Box", "UI Testing"],
      "correctAnswer": 2
    }
  ]
}








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
