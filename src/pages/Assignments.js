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
