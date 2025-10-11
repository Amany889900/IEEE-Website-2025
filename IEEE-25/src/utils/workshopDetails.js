 import digital from "./../assets/images/digital2.png"
import analog from "./../assets/images/analog.png"
import embedded from "./../assets/images/embedded.png"
import testing from "./../assets/images/testing.png"
import dev from "./../assets/images/dev3.png"
 
import {
  LightBulbIcon,
  CubeTransparentIcon,
  AcademicCapIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  RocketLaunchIcon,
  BoltIcon
} from "@heroicons/react/24/solid";
 const workshopsData = [
  {
    id: 'analog-electronics',
    name: 'ANALOG ELECTRONICS',
    Cardimg:analog,
    tagline: '— The Gateway to the Fabric of Electronic Signals',
    introText: 'Prepare for a jolt of genius and become an Analog Aficionado!',
    description: 'This workshop is your key to mastering the foundational blocks of countless electronic systems. We move beyond theory to hands-on design, modeling, and analysis of real-world circuits.',
    img: 'https://placehold.co/400x300/00396B/ffffff?text=Analog',
    curriculum: [
        { title: "Delve into the Fundamentals", description: "Start with an essential Introduction to Electronics and the nature of analog signals.", Icon: LightBulbIcon },
        { title: "Master BJT Physics & Circuit Models", description: "Uncover the secrets of Bipolar Junction Transistors, their physical principles, and how to model them in circuits.", Icon: CubeTransparentIcon },
        { title: "Conquer Electronic Circuit Analysis", description: "Develop the rigorous skills needed to analyze and understand circuit behavior.", Icon: AcademicCapIcon },
        { title: "Unlock OpAmps and Their Applications", description: "Explore the versatile world of Operational Amplifiers for signal processing and conditioning.", Icon: SparklesIcon },
        { title: "Design and Understand Filters", description: "Shape your signals! Learn the theory and practice of designing and analyzing filters.", Icon: WrenchScrewdriverIcon },
        { title: "Bridge the Worlds: Analog vs Digital", description: "Clearly understand the key differences between Analog and Digital Design, and when to use each approach.", Icon: RocketLaunchIcon },
    ]
  },
  {
    id: 'embedded-systems',
    name: 'EMBEDDED SYSTEMS',
    Cardimg:embedded,
    tagline: '— The Core of Hardware and Software Interaction',
    introText: 'Ready to command the hardware and forge powerful embedded solutions? This card is your blueprint to becoming an Embedded Systems Guru!',
    description: 'This card powers up your journey into the core of hardware and software interaction! Dive deep into C programming, ARM Cortex-M architecture, and essential peripheral control, turning theory into functional hardware solutions.',
    img: 'https://placehold.co/400x300/1e40af/ffffff?text=Embedded',
    curriculum: [
        { title: "C Programming Mastery", description: "Focus on memory models, the volatile keyword, bit-fields, and leveraging structs for hardware access.", Icon: AcademicCapIcon },
        { title: "The Compilation Journey", description: "Explore preprocessing, compiling, linking, linker scripts, and understanding startup code.", Icon: RocketLaunchIcon },
        { title: "ARM Cortex-M Architecture", description: "Get acquainted with its overview, register set, exception model, and privilege levels.", Icon: CubeTransparentIcon },
        { title: "RCC (Reset and Clock Control)", description: "Master clock trees, peripheral enabling, and system clock configuration.", Icon: BoltIcon },
        { title: "GPIO Wizardry & Debouncing", description: "Command hardware gateways: pin modes, registers, I/O handling, and tackle switch debouncing.", Icon: WrenchScrewdriverIcon },
        { title: "NVIC (Nested Vectored Interrupt Controller)", description: "Manage priorities, enable/disable interrupts, and map Interrupt Service Routines (ISRs).", Icon: SparklesIcon },
        { title: "Communication Protocols Deep Dive", description: "Get to grips with UART, SPI, and I2C basics, and learn to structure register-level drivers.", Icon: LightBulbIcon },
    ]
  },
  {
    id: 'digital-design',
    name: 'DIGITAL DOMAIN',
    Cardimg:digital,
    tagline: '— A Triple Threat: Design, Optimization, and Verification',
    introText: 'One "Digital" card, three incredible journeys to becoming a sought-after tech powerhouse! Choose your path!',
    description: 'This is a Digital Domain containing THREE powerful specialization paths: The Architect (FPGA & RTL), The Optimizer (ASIC Backend), and The Guardian (Verification). Get charged with 8 BITS of potential!',
    img: 'https://placehold.co/400x300/b91c1c/ffffff?text=Digital',
    curriculum: [
        { title: "The Architect (FPGA & RTL)", description: "Master FPGAs, wield Verilog HDL (RTL concepts with Quartus & Vivado), and conquer Timing & Power Synthesis.", Icon: CubeTransparentIcon },
        { title: "The Optimizer (ASIC Backend)", description: "Dive deep into RTL Optimization, TCL Scripting, Static Timing Analysis (STA), and master Place and Route (PnR).", Icon: WrenchScrewdriverIcon },
        { title: "The Guardian (Verification)", description: "Forge robust Verification plans, become fluent in SystemVerilog, and deploy powerful UVM.", Icon: AcademicCapIcon },
    ]
  },
  {
    id: 'software-testing',
    name: 'SOFTWARE TESTING',
    Cardimg:testing,
    tagline: '— Your Ultimate Defense Against Pesky Bugs and Glitches',
    introText: 'Ready to ensure your software is legendary? This card is your key to becoming a Software Testing Sensei!',
    description: 'Master the ISTQB Foundational Level Syllabus (v4.0.1) across 6 powerful chapters, from Fundamentals of Testing to Test Tools, preparing you for the CTFL certification.',
    img: 'https://placehold.co/400x300/4f46e5/ffffff?text=Testing',
    curriculum: [
        { title: "ISTQB Syllabus Mastery", description: "Master the Foundational Level Syllabus across 6 chapters, preparing for the CTFL certification.", Icon: AcademicCapIcon },
        { title: "Craft Legendary Test Plans", description: "Learn to build comprehensive strategies to guide your entire testing process.", Icon: LightBulbIcon },
        { title: "Design Epic Test Scenarios and Cases", description: "Go beyond basic checks to create powerful, efficient test coverage.", Icon: CubeTransparentIcon },
        { title: "Execute Flawless Test Execution", description: "Master execution techniques to ensure reliable, repeatable results.", Icon: RocketLaunchIcon },
        { title: "Master Defect Management", description: "Learn the art of reporting, tracking, and resolving bugs (Bug Reports, begone!).", Icon: WrenchScrewdriverIcon },
        { title: "Comprehensive Test Documentation", description: "Document your victories with clear, concise reporting.", Icon: SparklesIcon },
    ]
  },
  {
    id: 'software-development',
    name: 'PRACTICAL SOFTWARE DEV',
    Cardimg:dev,
    tagline: '— Full Diploma for Becoming a Tech Titan',
    introText: 'Ready to evolve from a "Code Dabbler" to a "Full System Architect"? This monster of a card packs 160+ hours of pure, unadulterated, hands-on power!',
    description: 'This is a SPECIAL Edition skill card focused on Qt & Linux, covering everything from Linux Administration and Modern C++ to Yocto Project, Embedded Android, Docker & Kubernetes.',
    img: 'https://placehold.co/400x300/4d7c0f/ffffff?text=Software',
    curriculum: [
        { title: "Linux Administration", description: "Become the sensei of the command line, scripting, boot, and networking.", Icon: LightBulbIcon },
        { title: "Raspberry Pi Interfacing", description: "Make GPIOs, UARTs, and sensors do your bidding, and conjure Flask web apps!", Icon: WrenchScrewdriverIcon },
        { title: "Modern C++ (11/14/17)", description: "Unleash the power of smart pointers, STL, templates, and expert tooling!", Icon: CubeTransparentIcon },
        { title: "Yocto Project", description: "Craft bespoke Embedded Linux images like a master blacksmith!", Icon: RocketLaunchIcon },
        { title: "Qt 6 (Core | GUI | Design Patterns)", description: "Build UIs so slick they'll need their own sunglasses, from signals & slots to pro-grade designs!", Icon: SparklesIcon },
        { title: "Docker & Kubernetes", description: "Containerize your creations, scale them to the moon, and automate like a boss!", Icon: BoltIcon },
    ]
  },
];


 export  default  workshopsData ;