var modal = document.getElementById("quizModal");
var quizContent = document.getElementById("quizContent");

const quizzes = {
  ueb: {
    questions: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "Hyperlinks and Text Markup Language",
          "Home Tool Markup Language",
        ],
        answer: "Hyper Text Markup Language",
      },
      {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["a", "link", "href"],
        answer: "a",
      },
      {
        question: "Which attribute is used to define inline styles in HTML?",
        options: ["style", "class", "font"],
        answer: "style",
      },
      {
        question: "What does the HTML 'canvas' element do?",
        options: [
          "Displays an image",
          "Creates graphics and visual images dynamically",
          "Defines a section in a document",
        ],
        answer: "Creates graphics and visual images dynamically",
      },
      {
        question: "What is the purpose of the HTML 'meta' tag?",
        options: [
          "Defines metadata about an HTML document",
          "Creates a table in HTML",
          "Includes an image on a webpage",
        ],
        answer: "Defines metadata about an HTML document",
      },
      {
        question: "What does CSS stand for?",
        options: [
          "Cascading Style Sheets",
          "Creative Style Sheets",
          "Computer Style Sheets",
        ],
        answer: "Cascading Style Sheets",
      },
      {
        question:
          "How can you include an external CSS file in an HTML document?",
        options: ["style", "link", "css"],
        answer: "link",
      },
      {
        question: "Which property is used to change the text color in CSS?",
        options: ["text-color", "color", "text-style"],
        answer: "color",
      },
      {
        question: "What does the 'z-index' property in CSS control?",
        options: ["Text size", "Element's stacking order", "Element's width"],
        answer: "Element's stacking order",
      },
      {
        question: "What does the CSS 'display: inline-block' do?",
        options: [
          "Makes an element a block-level element",
          "Makes an element inline and maintains its block layout",
          "Makes an element hidden",
        ],
        answer: "Makes an element inline and maintains its block layout",
      },
      {
        question: "What is the purpose of JavaScript in web development?",
        options: [
          "To style web pages",
          "To add interactivity and behavior to web pages",
          "To create database structures",
        ],
        answer: "To add interactivity and behavior to web pages",
      },
      {
        question:
          "Which function is used to print something in the console in JavaScript?",
        options: ["console.print()", "print()", "console.log()"],
        answer: "console.log()",
      },
      {
        question: "What does the 'querySelector()' method in JavaScript do?",
        options: [
          "Selects the first element that matches a specified CSS selector",
          "Selects all elements that match a specified CSS selector",
          "Selects the last element that matches a specified CSS selector",
        ],
        answer:
          "Selects the first element that matches a specified CSS selector",
      },
      {
        question: "What is the purpose of 'localStorage' in JavaScript?",
        options: [
          "To store data temporarily for a session",
          "To permanently store data on the server",
          "To manipulate HTML elements",
        ],
        answer: "To store data temporarily for a session",
      },
      {
        question: "Which operator is used for strict equality in JavaScript?",
        options: ["==", "===", "=", "!"],
        answer: "===",
      },
    ],
  },
  elektronik: {
    questions: [
      {
        question: "What is the main function of a transistor?",
        options: [
          "To disconnect voltage flow",
          "To create electrical current",
          "To control the flow of voltage or current",
        ],
        answer: "To control the flow of voltage or current",
      },
      {
        question: "How many basic types of transistors are there?",
        options: ["One", "Two", "Three"],
        answer: "Three",
      },
      {
        question: "What types of transistors exist based on its polarization?",
        options: ["NPN and PNP", "NN and PP", "NP and PN"],
        answer: "NPN and PNP",
      },
      {
        question: "How do NPN and PNP bipolar transistors function?",
        options: [
          "They don’t have polarized parts",
          "They have two interconnected diodes",
          "They have a semiconductor zone",
        ],
        answer: "They have two interconnected diodes",
      },
      {
        question:
          "How are the base, collector, and emitter involved in a bipolar transistor?",
        options: [
          "Base receives electrons, emitter releases them, and collector gathers them",
          "Emitter receives electrons, collector releases them, and base controls them",
          "Collector receives electrons, base releases them, and emitter gathers them",
        ],
        answer:
          "Emitter receives electrons, collector releases them, and base controls them",
      },
      {
        question:
          "What is the main purpose of the base resistance in a bipolar transistor?",
        options: [
          "To reduce collector current",
          "To increase emitter current",
          "To reduce base current",
        ],
        answer: "To reduce base current",
      },
      {
        question:
          "What is the characteristic of transistors in High Integration Transistor Logic (HTL)?",
        options: [
          "They are small-sized transistors",
          "They are handheld transistors",
          "They are close to optical elements",
        ],
        answer: "They are small-sized transistors",
      },
      {
        question:
          "What is one of the applications of transistors in today's technology?",
        options: [
          "Electricity production",
          "Construction of buildings",
          "Usage in electronic devices like computers and smartphones",
        ],
        answer: "Usage in electronic devices like computers and smartphones",
      },
      {
        question: "How does temperature affect a transistor's performance?",
        options: [
          "No effect",
          "Increases performance",
          "Decreases performance",
        ],
        answer: "Decreases performance",
      },
      {
        question:
          "Which one has the greatest impact on the usage potential in a transistor?",
        options: ["Collector", "Base", "Emitter"],
        answer: "Base",
      },
      {
        question: "How can a transistor be accelerated?",
        options: [
          "By increasing temperature",
          "By increasing voltage at the base",
          "By using performance enhancement techniques",
        ],
        answer: "By increasing voltage at the base",
      },
      {
        question: "What is the transistor effect?",
        options: [
          "A phenomenon related to transistor's thermal characteristics",
          "An impact on transistor performance at high frequencies",
          "A phenomenon related to increased transistor performance",
        ],
        answer: "An impact on transistor performance at high frequencies",
      },
      {
        question: "How do higher frequencies affect transistor performance?",
        options: ["Increase performance", "Decrease performance", "No effect"],
        answer: "Decrease performance",
      },
      {
        question:
          "What is the main difference between bipolar transistors and FET transistors?",
        options: [
          "Materials used in construction",
          "Number of electrodes",
          "Their usage in different fields of electronic applications",
        ],
        answer: "Materials used in construction",
      },
      {
        question:
          "What is the function of the collector in a bipolar transistor?",
        options: [
          "To emit electrons",
          "To control the flow of electrons",
          "To gather electrons",
        ],
        answer: "To gather electrons",
      },
      {
        question: "Who invented the first transistor?",
        options: [
          "William Shockley, John Bardeen, and Walter Brattain",
          "Nikola Tesla",
          "Thomas Edison",
        ],
        answer: "William Shockley, John Bardeen, and Walter Brattain",
      },
    ],
  },
  matematik: {
    questions: [
   
      {
        question: "What is the result of 7 choose 3 (C(7,3))?",
        options: ["35", "21", "42"],
        answer: "35",
      },
      {
        question: "In combinatorics, what does n! (n factorial) represent?",
        options: [
          "The product of all positive integers up to n",
          "The sum of all positive integers up to n",
          "The quotient of all positive integers up to n",
        ],
        answer: "The product of all positive integers up to n",
      },
      {
        question:
          "How many ways can you arrange the letters in the word 'MATHEMATICS'?",
        options: ["11!", "11P11", "11C11"],
        answer: "11!",
      },
      {
        question:
          "In a deck of playing cards, how many ways can you choose 5 cards (a poker hand)?",
        options: ["52C5", "52P5", "5!"],
        answer: "52C5",
      },
      {
        question:
          "What is the value of 8P3 (permutations of 8 things taken 3 at a time)?",
        options: ["336", "56", "672"],
        answer: "336",
      },
      {
        question: "How many subsets does a set with 4 elements have?",
        options: ["16", "8", "4"],
        answer: "16",
      },
      {
        question: "What is the sum of the first 10 positive integers?",
        options: ["55", "45", "50"],
        answer: "55",
      },
      {
        question: "How many bit strings of length 5 contain exactly two 1s?",
        options: ["10", "5", "20"],
        answer: "10",
      },
      {
        question:
          "What is the probability of rolling an even number on a six-sided die?",
        options: ["1/2", "1/3", "1/6"],
        answer: "1/2",
      },
      {
        question:
          "How many ways can you choose 2 items from a set of 8 distinct items?",
        options: ["8C2", "16", "56"],
        answer: "8C2",
      },
      {
        question: "What is the sum of the first 20 positive integers?",
        options: ["210", "220", "230"],
        answer: "210",
      },
      {
        question:
          "If A = {1, 2, 3} and B = {3, 4, 5}, what is the intersection of A and B?",
        options: ["{3}", "{1, 2, 3, 4, 5}", "{}"],
        answer: "{3}",
      },
      {
        question: "How many permutations of the word 'COMBINATION' are there?",
        options: ["11!", "11P11", "11C11"],
        answer: "11!",
      },
      {
        question:
          "What is the probability of flipping a fair coin and getting heads?",
        options: ["1/2", "1/3", "1/4"],
        answer: "1/2",
      },
      {
        question:
          "In how many ways can you arrange the letters in the word 'SUCCESS'?",
        options: ["5040", "40320", "2520"],
        answer: "5040",
      },
    ],
  },
  arkitektur: {
    questions: [
      {
        question: "What does MIPS stand for in computer architecture?",
        options: [
          "Microprocessor Instruction Processing System",
          "Multiple Instruction Processing System",
          "Microprocessor without Interlocked Pipeline Stages",
        ],
        answer: "Microprocessor without Interlocked Pipeline Stages",
      },
      {
        question:
          "In MIPS assembly language, what does the instruction 'add $t0, $t1, $t2' do?",
        options: [
          "Adds the contents of $t1 and $t2 and stores the result in $t0",
          "Subtracts the contents of $t1 from $t2 and stores the result in $t0",
          "Multiplies the contents of $t1 and $t2 and stores the result in $t0",
        ],
        answer: "Adds the contents of $t1 and $t2 and stores the result in $t0",
      },
      {
        question:
          "What is the purpose of the 'jal' instruction in MIPS assembly?",
        options: [
          "Jump and Link - Used for function calls",
          "Jump Always - Used for unconditional jumps",
          "Jump If Equal - Used for conditional jumps",
        ],
        answer: "Jump and Link - Used for function calls",
      },
      {
        question:
          "In computer architecture, what is the purpose of the CPU cache?",
        options: [
          "Stores temporary data for quick access by the CPU",
          "Stores program instructions permanently",
          "Manages the execution of system tasks",
        ],
        answer: "Stores temporary data for quick access by the CPU",
      },
      {
        question:
          "What is the role of the ALU (Arithmetic Logic Unit) in a CPU?",
        options: [
          "Performs arithmetic and logical operations on data",
          "Stores program instructions",
          "Manages input and output operations",
        ],
        answer: "Performs arithmetic and logical operations on data",
      },
      {
        question: "What is the primary function of the Control Unit in a CPU?",
        options: [
          "Manages the execution of program instructions",
          "Performs arithmetic operations",
          "Stores temporary data for quick access",
        ],
        answer: "Manages the execution of program instructions",
      },
      {
        question: "In computer architecture, what does 'RAM' stand for?",
        options: [
          "Random Access Memory",
          "Read-Only Memory",
          "Run Arithmetic Machine",
        ],
        answer: "Random Access Memory",
      },
      {
        question:
          "What is the purpose of the 'beq' instruction in MIPS assembly language?",
        options: [
          "Branch if Equal - Used for conditional jumps",
          "Branch Always - Used for unconditional jumps",
          "Branch and Link - Used for function calls",
        ],
        answer: "Branch if Equal - Used for conditional jumps",
      },
      {
        question:
          "What is the concept of 'Pipelining' in computer architecture?",
        options: [
          "Dividing the execution of instructions into stages to improve throughput",
          "Connecting multiple CPUs for parallel processing",
          "Storing frequently used instructions in cache memory",
        ],
        answer:
          "Dividing the execution of instructions into stages to improve throughput",
      },
      {
        question: "In MIPS, which register is used as the program counter?",
        options: ["$ra", "$pc", "$sp"],
        answer: "$pc",
      },
      {
        question:
          "What is the purpose of the 'lw' instruction in MIPS assembly?",
        options: [
          "Load Word - Loads a 32-bit word from memory into a register",
          "Load Byte - Loads a byte from memory into a register",
          "Link Word - Used for linking functions",
        ],
        answer: "Load Word - Loads a 32-bit word from memory into a register",
      },
      {
        question:
          "What is the significance of the 'fetch-decode-execute' cycle in CPU operations?",
        options: [
          "It represents the steps involved in executing an instruction",
          "It manages input and output operations",
          "It controls the flow of electricity in the CPU",
        ],
        answer: "It represents the steps involved in executing an instruction",
      },
      {
        question:
          "What is the purpose of the 'jr' instruction in MIPS assembly language?",
        options: [
          "Jump Register - Jumps to the address in a register",
          "Jump Relative - Jumps to a relative memory address",
          "Jump and Return - Used for function return",
        ],
        answer: "Jump Register - Jumps to the address in a register",
      },
      {
        question:
          "In computer architecture, what is the purpose of the 'I/O' (Input/Output) subsystem?",
        options: [
          "Manages communication between the CPU and external devices",
          "Performs arithmetic operations",
          "Stores program instructions",
        ],
        answer: "Manages communication between the CPU and external devices",
      },
      {
        question:
          "What is the purpose of the 'ori' instruction in MIPS assembly language?",
        options: [
          "Bitwise OR immediate - Performs a bitwise OR operation with a constant",
          "Bitwise AND immediate - Performs a bitwise AND operation with a constant",
          "Branch if Equal - Used for conditional jumps",
        ],
        answer:
          "Bitwise OR immediate - Performs a bitwise OR operation with a constant",
      },
    ],
  },
  oop: {
    questions: [
      {
        question:
          "What is the primary goal of Object-Oriented Programming (OOP)?",
        options: [
          "Code reusability and modularity",
          "Efficient memory management",
          "Linear code execution",
        ],
        answer: "Code reusability and modularity",
      },
      {
        question: "What is an 'object' in OOP?",
        options: [
          "An instance of a class",
          "A built-in data type",
          "A function in a program",
        ],
        answer: "An instance of a class",
      },
      {
        question: "What is 'encapsulation' in OOP?",
        options: [
          "Binding data and methods that operate on the data into a single unit",
          "Hiding the implementation details of a class",
          "Inheriting properties from a superclass",
        ],
        answer:
          "Binding data and methods that operate on the data into a single unit",
      },
      {
        question: "In OOP, what is 'inheritance'?",
        options: [
          "A mechanism to create a new class that is a modified version of an existing class",
          "A way to create multiple instances of a class",
          "A method of data hiding",
        ],
        answer:
          "A mechanism to create a new class that is a modified version of an existing class",
      },
      {
        question: "What is 'polymorphism' in OOP?",
        options: [
          "The ability of a class to have multiple methods with the same name",
          "A technique to create private methods in a class",
          "The process of creating objects",
        ],
        answer:
          "The ability of a class to have multiple methods with the same name",
      },
      {
        question: "What is a 'class' in OOP?",
        options: [
          "A blueprint for creating objects",
          "A set of predefined methods",
          "A reserved keyword in programming",
        ],
        answer: "A blueprint for creating objects",
      },
      {
        question: "What is the purpose of the 'constructor' in a class?",
        options: [
          "To initialize the object's state",
          "To destroy the object",
          "To define the class methods",
        ],
        answer: "To initialize the object's state",
      },
      {
        question: "What is 'method overloading' in OOP?",
        options: [
          "Defining multiple methods in a class with the same name but different parameters",
          "Hiding the implementation details of a class",
          "Creating multiple instances of a class",
        ],
        answer:
          "Defining multiple methods in a class with the same name but different parameters",
      },
      {
        question: "What is 'abstraction' in OOP?",
        options: [
          "Hiding the implementation details and showing only the necessary features of an object",
          "Creating abstract classes without implementation",
          "Implementing complex algorithms in a class",
        ],
        answer:
          "Hiding the implementation details and showing only the necessary features of an object",
      },
      {
        question:
          "What is the difference between 'composition' and 'inheritance' in OOP?",
        options: [
          "Composition involves creating objects of other classes within a class, while inheritance creates a new class based on an existing class",
          "Composition is a form of polymorphism, while inheritance is encapsulation",
          "Composition is a type of constructor in OOP",
        ],
        answer:
          "Composition involves creating objects of other classes within a class, while inheritance creates a new class based on an existing class",
      },
      {
        question: "What is a 'static method' in a class?",
        options: [
          "A method that belongs to the class rather than an instance of the class",
          "A method that cannot be accessed from outside the class",
          "A method that is called automatically when an object is created",
        ],
        answer:
          "A method that belongs to the class rather than an instance of the class",
      },
      {
        question: "What is the 'super' keyword used for in OOP?",
        options: [
          "To call a method from the superclass",
          "To declare a variable with superclass properties",
          "To create an instance of a subclass",
        ],
        answer: "To call a method from the superclass",
      },
      {
        question: "What is 'dynamic binding' in OOP?",
        options: [
          "The process of linking a method call to the method body at runtime",
          "The process of creating dynamic classes in a program",
          "A form of method overloading",
        ],
        answer:
          "The process of linking a method call to the method body at runtime",
      },
      {
        question: "What is a 'virtual method' in OOP?",
        options: [
          "A method that can be overridden in a subclass",
          "A method that cannot be accessed from outside the class",
          "A method that is automatically called when an object is created",
        ],
        answer: "A method that can be overridden in a subclass",
      },
      {
        question: "What is 'interface' in OOP?",
        options: [
          "A contract that specifies a set of methods that a class must implement",
          "A reserved keyword in programming",
          "A class that cannot be instantiated",
        ],
        answer:
          "A contract that specifies a set of methods that a class must implement",
      },
    ],
  },
  qarqe: {
    questions: [
      {
        question: "What is a 'bit' in digital circuits?",
        options: [
          "The smallest unit of digital data, representing 0 or 1",
          "A circuit that performs addition",
          "A component that stores electrical charge",
        ],
        answer: "The smallest unit of digital data, representing 0 or 1",
      },
      {
        question: "What is the function of an 'AND gate' in digital circuits?",
        options: [
          "Outputs true (1) only if both inputs are true (1)",
          "Outputs true (1) if at least one input is true (1)",
          "Outputs the inverse of the input",
        ],
        answer: "Outputs true (1) only if both inputs are true (1)",
      },
      {
        question: "In digital circuits, what is a 'flip-flop'?",
        options: [
          "A bistable multivibrator used for storing binary information",
          "A circuit that performs addition",
          "A component that amplifies signals",
        ],
        answer: "A bistable multivibrator used for storing binary information",
      },
      {
        question: "What is the purpose of a 'decoder' in digital circuits?",
        options: [
          "Converts binary information into a specific output",
          "Performs arithmetic operations",
          "Stores temporary data",
        ],
        answer: "Converts binary information into a specific output",
      },
      {
        question: "In digital circuits, what does 'CMOS' stand for?",
        options: [
          "Complementary Metal-Oxide-Semiconductor",
          "Centralized Memory Organization System",
          "Complex Multiplexer Output System",
        ],
        answer: "Complementary Metal-Oxide-Semiconductor",
      },
      {
        question: "What is the function of an 'OR gate' in digital circuits?",
        options: [
          "Outputs true (1) if at least one input is true (1)",
          "Outputs true (1) only if both inputs are true (1)",
          "Outputs the inverse of the input",
        ],
        answer: "Outputs true (1) if at least one input is true (1)",
      },
      {
        question: "What is the role of a 'multiplexer' in digital circuits?",
        options: [
          "Combines multiple inputs into a single output",
          "Performs mathematical calculations",
          "Stores binary information",
        ],
        answer: "Combines multiple inputs into a single output",
      },
      {
        question: "What is the purpose of a 'counter' in digital circuits?",
        options: [
          "Produces a sequence of binary numbers",
          "Counts the total number of circuits in a system",
          "Performs logical operations",
        ],
        answer: "Produces a sequence of binary numbers",
      },
      {
        question: "What does 'VHDL' stand for in digital design?",
        options: [
          "VHS Design Language",
          "Very High-Speed Design Language",
          "VHSIC Hardware Description Language",
        ],
        answer: "VHSIC Hardware Description Language",
      },
      {
        question:
          "What is the function of a 'gated D latch' in digital circuits?",
        options: [
          "Stores a single bit of data",
          "Converts analog signals to digital signals",
          "Performs addition and subtraction",
        ],
        answer: "Stores a single bit of data",
      },
      {
        question: "In digital circuits, what is a 'shift register' used for?",
        options: [
          "Shifts binary data bits through a series of flip-flops",
          "Stores constant values",
          "Generates clock signals",
        ],
        answer: "Shifts binary data bits through a series of flip-flops",
      },
      {
        question:
          "What is the significance of 'Karnaugh maps' in digital circuit design?",
        options: [
          "A graphical method for simplifying Boolean expressions",
          "A tool for measuring circuit resistance",
          "A representation of sequential circuits",
        ],
        answer: "A graphical method for simplifying Boolean expressions",
      },
      {
        question: "What is 'combinational logic' in digital circuits?",
        options: [
          "A type of logic circuit where the output depends only on the current input",
          "A circuit that performs mathematical calculations",
          "A circuit with feedback loops",
        ],
        answer:
          "A type of logic circuit where the output depends only on the current input",
      },
      {
        question: "What is the purpose of a 'full adder' in digital circuits?",
        options: [
          "Adds three binary digits and produces a sum and carry-out",
          "Performs logical operations on two bits",
          "Converts analog signals to digital signals",
        ],
        answer: "Adds three binary digits and produces a sum and carry-out",
      },
      {
        question: "What is the function of a 'comparator' in digital circuits?",
        options: [
          "Compares two binary numbers and produces an output based on their relationship",
          "Amplifies electrical signals",
          "Counts the number of clock cycles",
        ],
        answer:
          "Compares two binary numbers and produces an output based on their relationship",
      },
      {
        question: "In digital circuits, what is a 'JK flip-flop'?",
        options: [
          "A type of flip-flop with J and K inputs",
          "A circuit that performs addition",
          "A component that amplifies signals",
        ],
        answer: "A type of flip-flop with J and K inputs",
      },
    ],
  },
  qarqeElektrike: {
    questions: [
      {
        question: "What is Ohm's Law?",
        options: ["V = IR", "P = IV", "I = VR"],
        answer: "V = IR",
      },
      {
        question: "What is the unit of electrical resistance?",
        options: ["Ohm (Ω)", "Volt (V)", "Ampere (A)"],
        answer: "Ohm (Ω)",
      },
      {
        question:
          "In a parallel circuit, how does the total resistance change as more resistors are added?",
        options: ["Decreases", "Increases", "Remains the same"],
        answer: "Decreases",
      },
      {
        question:
          "What is the purpose of a capacitor in an electrical circuit?",
        options: [
          "Stores and releases electrical energy",
          "Provides resistance to the flow of current",
          "Amplifies electrical signals",
        ],
        answer: "Stores and releases electrical energy",
      },
      {
        question:
          "What is the relationship between power (P), voltage (V), and current (I) in an electrical circuit?",
        options: ["P = IV", "P = I/V", "P = I + V"],
        answer: "P = IV",
      },
      {
        question: "What is the role of a diode in an electrical circuit?",
        options: [
          "Allows current to flow in one direction only",
          "Controls the amount of current in a circuit",
          "Stores electrical charge",
        ],
        answer: "Allows current to flow in one direction only",
      },
      {
        question:
          "What is the function of an inductor in an electrical circuit?",
        options: [
          "Stores energy in a magnetic field",
          "Controls voltage in a circuit",
          "Converts electrical energy to mechanical energy",
        ],
        answer: "Stores energy in a magnetic field",
      },
      {
        question:
          "What is the difference between AC (Alternating Current) and DC (Direct Current)?",
        options: [
          "DC flows in one direction, while AC changes direction periodically",
          "AC has higher voltage than DC",
          "DC is used only in residential wiring",
        ],
        answer:
          "DC flows in one direction, while AC changes direction periodically",
      },
      {
        question:
          "What is the purpose of a transformer in an electrical circuit?",
        options: [
          "Changes voltage levels in an AC circuit",
          "Converts DC to AC",
          "Controls the flow of current",
        ],
        answer: "Changes voltage levels in an AC circuit",
      },
      {
        question:
          "What is the effect of increasing the resistance in a circuit?",
        options: [
          "Decreases the current flow",
          "Increases the voltage",
          "Has no effect on current",
        ],
        answer: "Decreases the current flow",
      },
      {
        question:
          "What is the function of a resistor in an electrical circuit?",
        options: [
          "Limits the flow of current",
          "Amplifies electrical signals",
          "Stores electrical charge",
        ],
        answer: "Limits the flow of current",
      },
      {
        question: "What is Kirchhoff's Voltage Law?",
        options: [
          "The sum of voltages in any closed loop is equal to the sum of the voltage drops",
          "The sum of currents entering a junction is equal to the sum of currents leaving the junction",
          "The total power in a circuit is constant",
        ],
        answer:
          "The sum of voltages in any closed loop is equal to the sum of the voltage drops",
      },
      {
        question: "What is Kirchhoff's Current Law?",
        options: [
          "The sum of currents entering a junction is equal to the sum of currents leaving the junction",
          "The sum of voltages in any closed loop is equal to the sum of the voltage drops",
          "The total power in a circuit is constant",
        ],
        answer:
          "The sum of currents entering a junction is equal to the sum of currents leaving the junction",
      },
      {
        question: "What is the purpose of a fuse in an electrical circuit?",
        options: [
          "Protects the circuit by melting and breaking the connection in case of overcurrent",
          "Increases the current flow in the circuit",
          "Regulates the voltage in the circuit",
        ],
        answer:
          "Protects the circuit by melting and breaking the connection in case of overcurrent",
      },
      {
        question: "What is the concept of electrical ground?",
        options: [
          "A reference point with zero voltage",
          "A source of high voltage",
          "A type of resistor",
        ],
        answer: "A reference point with zero voltage",
      },
    ],
  },
  fizike: {
    questions: [
      {
        question: "What is Newton's First Law of Motion?",
        options: [
          "An object at rest stays at rest, and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an external force",
          "Force equals mass times acceleration",
          "For every action, there is an equal and opposite reaction",
        ],
        answer:
          "An object at rest stays at rest, and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an external force",
      },
      {
        question: "What is the SI unit of force?",
        options: ["Newton (N)", "Joule (J)", "Watt (W)"],
        answer: "Newton (N)",
      },
      {
        question: "What is the formula for kinetic energy?",
        options: ["KE = 0.5 * m * v^2", "KE = m * g", "KE = m / v"],
        answer: "KE = 0.5 * m * v^2",
      },
      {
        question: "What is the law of conservation of energy?",
        options: [
          "Energy cannot be created or destroyed, only transformed from one form to another",
          "The total energy of an isolated system is constant",
          "The rate of change of momentum of an object is directly proportional to the net force acting upon it",
        ],
        answer:
          "Energy cannot be created or destroyed, only transformed from one form to another",
      },
      {
        question: "What is Hooke's Law?",
        options: [
          "The force needed to extend or compress a spring by some distance is proportional to that distance",
          "The pressure in a fluid is inversely proportional to the fluid's velocity",
          "The resistance of a conductor is directly proportional to the current passing through it",
        ],
        answer:
          "The force needed to extend or compress a spring by some distance is proportional to that distance",
      },
      {
        question:
          "What is the formula for gravitational force between two masses?",
        options: ["F = G * (m1 * m2) / r^2", "F = m * a", "F = P / A"],
        answer: "F = G * (m1 * m2) / r^2",
      },
      {
        question: "What is the principle of conservation of momentum?",
        options: [
          "The total momentum of a closed system is constant",
          "The total force acting on an object is equal to the object's mass times acceleration",
          "The pressure in a fluid is directly proportional to the fluid's velocity",
        ],
        answer: "The total momentum of a closed system is constant",
      },
      {
        question:
          "What is the relationship between frequency (f) and wavelength (λ) in a wave?",
        options: ["Speed of light = f * λ", "f = λ / T", "f = 1 / T"],
        answer: "Speed of light = f * λ",
      },
      {
        question: "What is the law of reflection?",
        options: [
          "The angle of incidence is equal to the angle of reflection",
          "The speed of light is constant in a vacuum",
          "The refractive index is inversely proportional to the wavelength of light",
        ],
        answer: "The angle of incidence is equal to the angle of reflection",
      },
      {
        question: "What is the unit of electric charge?",
        options: ["Coulomb (C)", "Ampere (A)", "Volt (V)"],
        answer: "Coulomb (C)",
      },
      {
        question: "What is Ohm's Law for electrical circuits?",
        options: ["V = IR", "P = IV", "F = ma"],
        answer: "V = IR",
      },
      {
        question: "What is the formula for density?",
        options: [
          "Density = mass/volume",
          "Density = force/area",
          "Density = pressure/height",
        ],
        answer: "Density = mass/volume",
      },
      {
        question:
          "What is the relationship between voltage (V), current (I), and resistance (R) in an electrical circuit?",
        options: ["V = IR", "P = IV", "I = V/R"],
        answer: "V = IR",
      },
      {
        question: "What is the first law of thermodynamics?",
        options: [
          "Energy cannot be created or destroyed, only transferred or converted from one form to another",
          "The total entropy of an isolated system can never decrease over time",
          "For every action, there is an equal and opposite reaction",
        ],
        answer:
          "Energy cannot be created or destroyed, only transferred or converted from one form to another",
      },
      {
        question: "What is the formula for acceleration?",
        options: ["a = (v - u) / t", "a = F / m", "a = s / t"],
        answer: "a = (v - u) / t",
      },
      {
        question:
          "What is the relationship between pressure (P), force (F), and area (A) in a fluid?",
        options: ["P = F/A", "P = F * A", "P = F + A"],
        answer: "P = F/A",
      },
    ],
  },
};

var userAnswers = [];

function loadQuizContent(selectedQuizId) {
  quizId = selectedQuizId; 
  var currentQuestion = 0;

  function showQuestion(index) {
    var totalQuestions = quizzes[quizId].questions.length;
    var question = quizzes[quizId].questions[index];
    var questionHTML =
      "<div class='modal-header'>Question " +
      (index + 1) +
      " of " +
      totalQuestions +
      "</div>";
    questionHTML +=
      "<div class='quiz-question'>" + question.question + "</div>";
  
    questionHTML += "<div class='quiz-options'>";
    question.options.forEach(function (option, i) {
      questionHTML += `
              <label>
                  <input type="radio" name="answer" value="${option}" ${
        userAnswers[index] === option ? "checked" : ""
      }>
                  ${option}
              </label>`;
    });
    questionHTML += "</div>";
  
  
    if (index > 0) {
      questionHTML +=
        "<button class='back-button' onclick='backToPreviousQuestion(" +
        index +
        ")'>Back</button>";
    }
  
    
    if (index < quizzes[quizId].questions.length - 1) {
      questionHTML +=
        "<button class='next-button' onclick='nextQuestion()'>Next</button>";
    }
  
    
    if (index === quizzes[quizId].questions.length - 1) {
      questionHTML +=
        "<button class='submit-button' onclick='submitQuiz()'>Submit</button>";
    }
  
    quizContent.innerHTML = questionHTML;
  }
  

  window.backToPreviousQuestion = function (currentIndex) {
    if (currentIndex > 0) {
      currentQuestion = currentIndex - 1;
      showQuestion(currentQuestion);
    }
  };

  window.nextQuestion = function () {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    userAnswers[currentQuestion] = selectedOption ? selectedOption.value : "";

    if (currentQuestion < quizzes[quizId].questions.length - 1) {
      currentQuestion++;
      showQuestion(currentQuestion);
    } else {
      quizContent.innerHTML = "<h2>End of the quiz!</h2>";
      checkAnswers();
    }
  };

  window.submitQuiz = function () {
    var unansweredQuestions = userAnswers.some((answer) => answer === "");
    if (unansweredQuestions) {
      alert("Please answer all questions before submitting.");
    } else {
      quizContent.innerHTML = "<h2>End of the quiz!</h2>";
      checkAnswers();
    }
  };

  showQuestion(currentQuestion);
}

function checkAnswers() {
  var correctAnswers = quizzes[quizId].questions.map((q) => q.answer);
  var score = userAnswers.reduce((total, answer, index) => {
    return total + (answer === correctAnswers[index] ? 1 : 0);
  }, 0);

  quizContent.innerHTML +=
    "<p>Your score: " + score + "/" + correctAnswers.length + "</p>";
}

document.querySelectorAll(".card-button").forEach(function (button) {
  button.onclick = function () {
    quizId = this.getAttribute("data-quiz");
    loadQuizContent(quizId);
    modal.style.display = "block";
  };
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
