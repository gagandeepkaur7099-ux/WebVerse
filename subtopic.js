const TOPICS = {
  networking: {
    category: "Computer Networking",
    items: {
      router: {
        title: "Router",
        icon: "📡",
        intro: "Learn how routers connect different networks and help data reach the correct destination.",
        definition: "A router is a networking device that connects two or more networks and forwards data packets between them. It commonly connects a home or office network to the internet.",
        example: "Your home Wi-Fi router connects your phone, laptop and smart TV to the internet.",
        steps: [
          ["Receives data", "The router receives a data packet from a connected device or another network."],
          ["Checks the destination", "It reads the destination IP address and checks where the packet needs to go."],
          ["Chooses a route", "It uses its routing table to select a suitable path."],
          ["Forwards the packet", "It sends the packet towards the next network or destination."]
        ],
        points: [
          ["IP address", "Routers use IP addresses to identify network destinations."],
          ["Routing table", "A routing table stores information about possible network paths."],
          ["Wi-Fi", "Many home routers provide wireless connectivity."],
          ["NAT", "Network Address Translation helps multiple private devices share a public IP address."]
        ],
        history: "Routers developed as computer networks grew and needed to communicate with one another.",
        timeline: [
          ["1969", "ARPANET", "Early packet-switching networks helped establish the foundation of modern networking."],
          ["1980s", "IP networking", "Internet Protocol became an important part of connecting networks."],
          ["1990s", "Home routers", "Routers gradually became common in business and home networks."],
          ["Today", "Smart connectivity", "Modern routers support Wi-Fi, security features and high-speed internet."]
        ],
        uses: [
          ["🏠", "Home internet", "Connects phones, computers and smart devices."],
          ["🏢", "Office networks", "Connects departments and local networks."],
          ["🌐", "Internet", "Moves data between different networks."]
        ],
        future: "Routers will continue to improve through faster wireless standards, better security, intelligent traffic management and support for connected devices.",
        wiki: "Router (computing)",
        search: "computer network router device"
      },
      switch: {
        title: "Network Switch",
        icon: "🔀",
        intro: "Understand how a network switch connects devices inside a local area network.",
        definition: "A network switch is a device that connects multiple devices in a Local Area Network (LAN). It forwards data to the correct device using MAC addresses.",
        example: "In a computer lab, a switch connects many desktop computers so they can communicate on the same network.",
        steps: [
          ["Receives data", "A connected computer sends a data frame to the switch."],
          ["Reads MAC address", "The switch checks the destination MAC address."],
          ["Checks its table", "It uses its MAC address table to identify the destination port."],
          ["Forwards data", "It sends the frame through the correct port."]
        ],
        points: [
          ["MAC address", "A hardware address used to identify a network interface."],
          ["LAN", "Switches are commonly used in local area networks."],
          ["Switching table", "Stores the relationship between MAC addresses and ports."],
          ["VLAN", "Virtual LANs can divide a network into logical groups."]
        ],
        history: "Network switches became popular as Ethernet networks needed more efficient communication than older shared connection methods.",
        timeline: [
          ["1970s", "Ethernet", "Ethernet technology introduced a foundation for local networking."],
          ["1980s", "Bridges", "Network bridges helped connect LAN segments."],
          ["1990s", "Ethernet switches", "Switches became widely used in offices and institutions."],
          ["Today", "Managed switches", "Modern switches support VLANs, monitoring and high-speed ports."]
        ],
        uses: [
          ["🏫", "Computer labs", "Connects computers in educational institutions."],
          ["🏢", "Offices", "Connects computers, printers and servers."],
          ["🖥️", "Data centres", "Connects servers and networking equipment."]
        ],
        future: "Switches will support faster Ethernet, more automation, improved energy efficiency and advanced network security.",
        wiki: "Network switch",
        search: "ethernet network switch"
      },
      "ip-address": {
        title: "IP Address",
        icon: "🌍",
        intro: "Discover how IP addresses identify devices and help information travel across networks.",
        definition: "An Internet Protocol (IP) address is a logical address assigned to a device or network interface. It helps identify the source and destination of data on an IP network.",
        example: "When you open a website, your device uses IP addresses to communicate with the website's server.",
        steps: [
          ["Device joins a network", "A device connects to a network."],
          ["Gets an IP address", "The address may be assigned automatically using DHCP or configured manually."],
          ["Sends a request", "The device includes addressing information when sending network packets."],
          ["Data reaches destination", "Routers use IP addresses to forward packets."]
        ],
        points: [
          ["IPv4", "A 32-bit address commonly written like 192.168.1.1."],
          ["IPv6", "A 128-bit address created to provide a much larger address space."],
          ["Public IP", "An address used to identify a network on the public internet."],
          ["Private IP", "An address used inside private networks."]
        ],
        history: "IP addressing developed as part of the Internet Protocol suite, which made communication between different networks possible.",
        timeline: [
          ["1970s", "TCP/IP development", "The protocols that support internet communication were developed."],
          ["1981", "IPv4 specification", "IPv4 was documented in an important internet standard."],
          ["1990s", "Address growth", "The growth of the internet increased demand for IP addresses."],
          ["1998", "IPv6 standard", "IPv6 was specified to provide a much larger address space."]
        ],
        uses: [
          ["🌐", "Web browsing", "Helps devices communicate with web servers."],
          ["🎮", "Online gaming", "Supports communication between players and game servers."],
          ["📱", "Mobile networks", "Allows phones and other devices to communicate."]
        ],
        future: "IPv6 adoption, improved address management and secure network communication will remain important as more devices connect to the internet.",
        wiki: "IP address",
        search: "IPv4 IPv6 IP address networking"
      },
      dns: {
        title: "DNS",
        icon: "📖",
        intro: "Learn how the Domain Name System converts website names into IP addresses.",
        definition: "DNS stands for Domain Name System. It is a naming system that helps computers find the IP address associated with a domain name.",
        example: "When you type google.com in a browser, DNS helps find the IP address needed to contact the website.",
        steps: [
          ["Enter a domain", "You type a website name into your browser."],
          ["Ask a DNS resolver", "Your device asks a DNS resolver to find the address."],
          ["Find the record", "DNS servers help locate the required DNS record."],
          ["Connect to the website", "The browser uses the returned IP address to contact the server."]
        ],
        points: [
          ["Domain name", "A readable website name such as example.com."],
          ["DNS resolver", "A service that looks up DNS information for a client."],
          ["A and AAAA records", "Records that map a domain to IPv4 and IPv6 addresses."],
          ["Caching", "Stores DNS answers temporarily to speed up future lookups."]
        ],
        history: "DNS was introduced to make internet resources easier to access without remembering numerical IP addresses.",
        timeline: [
          ["Early 1980s", "DNS introduced", "The Domain Name System was developed for internet naming."],
          ["1983", "RFC 882 and 883", "Early DNS specifications were published."],
          ["1990s", "Web growth", "DNS became essential as websites expanded."],
          ["Today", "Secure DNS", "DNS technologies continue to improve privacy, reliability and security."]
        ],
        uses: [
          ["🌐", "Website access", "Finds the IP address of a website."],
          ["✉️", "Email delivery", "Mail records help identify email servers."],
          ["🛡️", "Security", "Some DNS services help block known malicious domains."]
        ],
        future: "Encrypted DNS, stronger authentication and improved privacy will continue to shape how domain names are resolved.",
        wiki: "Domain Name System",
        search: "Domain Name System DNS server"
      },
      "tcp-ip": {
        title: "TCP/IP",
        icon: "🔗",
        intro: "Explore the main communication protocol suite used by the internet.",
        definition: "TCP/IP stands for Transmission Control Protocol and Internet Protocol. It is a set of communication protocols that allows devices to exchange data across networks.",
        example: "When you load a website, IP helps route packets while TCP can provide reliable delivery for applications that use it.",
        steps: [
          ["Application creates data", "An application prepares information to send."],
          ["Transport layer", "TCP or UDP handles transport communication."],
          ["Internet layer", "IP adds addressing information for routing."],
          ["Network access", "The data is sent through the local network medium."]
        ],
        points: [
          ["TCP", "Provides reliable, ordered delivery of data."],
          ["IP", "Handles addressing and packet routing."],
          ["UDP", "Provides connectionless transport with low overhead."],
          ["Ports", "Help identify the application or service receiving data."]
        ],
        history: "TCP/IP was developed to allow different computer networks to communicate using common protocols.",
        timeline: [
          ["1970s", "Protocol development", "TCP/IP was developed through internet research."],
          ["1983", "ARPANET transition", "ARPANET adopted TCP/IP as its main protocol suite."],
          ["1990s", "Internet expansion", "TCP/IP became central to the growing public internet."],
          ["Today", "Global standard", "TCP/IP supports communication across modern networks."]
        ],
        uses: [
          ["🌐", "Internet browsing", "Supports communication between clients and servers."],
          ["📧", "Email", "Supports network communication used by email services."],
          ["📡", "Cloud services", "Connects applications to remote systems."]
        ],
        future: "TCP/IP will remain fundamental while continuing to evolve with IPv6, modern transport protocols and stronger network security.",
        wiki: "Internet protocol suite",
        search: "TCP IP networking protocol layers"
      },
      cybersecurity: {
        title: "Cybersecurity",
        icon: "🛡️",
        intro: "Understand how digital systems, networks and information are protected from cyber threats.",
        definition: "Cybersecurity is the practice of protecting computers, networks, applications and data from unauthorized access, attacks, damage or theft.",
        example: "Using multi-factor authentication and strong passwords helps protect your online accounts.",
        steps: [
          ["Identify assets", "Find the systems, accounts and data that need protection."],
          ["Find risks", "Identify vulnerabilities and possible threats."],
          ["Apply protection", "Use updates, access controls, encryption and security tools."],
          ["Monitor and respond", "Detect suspicious activity and respond to incidents."]
        ],
        points: [
          ["Confidentiality", "Only authorized people should access protected information."],
          ["Integrity", "Information should remain accurate and unaltered without permission."],
          ["Availability", "Systems and information should be available when needed."],
          ["Authentication", "Checks that a user or system is who it claims to be."]
        ],
        history: "Cybersecurity grew as computers and networks became more connected and digital information became more valuable.",
        timeline: [
          ["1970s", "Early security research", "Computer security research developed alongside networked computing."],
          ["1980s", "Computer viruses", "Malware became a growing concern for computer users."],
          ["1990s", "Internet security", "Wider internet access increased the need for online protection."],
          ["Today", "Modern defence", "Security includes cloud protection, identity management and threat monitoring."]
        ],
        uses: [
          ["🏦", "Banking", "Protects financial accounts and transactions."],
          ["🏥", "Healthcare", "Helps protect patient and hospital information."],
          ["🏢", "Businesses", "Protects company networks, devices and data."]
        ],
        future: "AI-assisted defence, cloud security, zero-trust approaches and secure software development will be important areas of cybersecurity.",
        wiki: "Computer security",
        search: "cybersecurity computer security"
      }
    }
  },

  "web-development": {
    category: "Web Development",
    items: {
      html: {
        title: "HTML",
        icon: "🧱",
        intro: "Learn how HTML provides the structure and meaning of web pages.",
        definition: "HTML stands for HyperText Markup Language. It is the standard markup language used to structure content on web pages using elements such as headings, paragraphs, images and links.",
        example: "A heading, paragraph, image and button on a website are commonly represented using HTML elements.",
        steps: [
          ["Create a document", "Start an HTML file with the basic document structure."],
          ["Add elements", "Use tags such as h1, p, img and a."],
          ["Organize content", "Arrange elements into meaningful sections."],
          ["Open in browser", "The browser reads the HTML and displays the page."]
        ],
        points: [
          ["Elements", "HTML elements represent parts of a web page."],
          ["Attributes", "Attributes provide extra information to elements."],
          ["Semantic HTML", "Elements such as header, main and footer describe content meaning."],
          ["Forms", "Form elements collect user input."]
        ],
        history: "HTML was created to share and link documents across the early World Wide Web.",
        timeline: [
          ["1991", "Early HTML", "The first public description of HTML appeared."],
          ["1995", "HTML 2.0", "A formal HTML specification was published."],
          ["1999", "HTML 4.01", "A widely used version added important improvements."],
          ["2014", "HTML5", "HTML5 became a W3C Recommendation with modern web features."]
        ],
        uses: [
          ["📰", "Websites", "Structures text, images and page sections."],
          ["📝", "Forms", "Creates registration and contact forms."],
          ["🎬", "Media pages", "Embeds audio, video and other content."]
        ],
        future: "HTML will continue to support accessible, semantic and media-rich websites as browser capabilities evolve.",
        wiki: "HTML",
        search: "HTML markup language code"
      },
      css: {
        title: "CSS",
        icon: "🎨",
        intro: "Discover how CSS controls the design, layout and appearance of web pages.",
        definition: "CSS stands for Cascading Style Sheets. It is a stylesheet language used to control the presentation of HTML documents, including colors, fonts, spacing and layouts.",
        example: "CSS can change a plain HTML button into a rounded purple button with a hover animation.",
        steps: [
          ["Select an element", "Use a selector to target an HTML element."],
          ["Choose a property", "Select a style such as color, margin or font-size."],
          ["Set a value", "Assign a value to the selected property."],
          ["Browser applies styles", "The browser displays the page using the CSS rules."]
        ],
        points: [
          ["Selectors", "Choose which HTML elements receive styles."],
          ["Box model", "Describes content, padding, border and margin."],
          ["Flexbox", "Helps arrange items along a row or column."],
          ["Responsive design", "Uses flexible layouts and media queries for different screens."]
        ],
        history: "CSS was created to separate the presentation of web documents from their content and structure.",
        timeline: [
          ["1994", "CSS proposed", "The idea of Cascading Style Sheets was proposed."],
          ["1996", "CSS1", "The first CSS specification became a W3C Recommendation."],
          ["1998", "CSS2", "CSS2 added more layout and styling capabilities."],
          ["Today", "Modern CSS", "Flexbox, Grid, animations and responsive design are widely used."]
        ],
        uses: [
          ["💻", "Website design", "Controls colors, typography and layout."],
          ["📱", "Responsive pages", "Adapts pages to mobile, tablet and desktop."],
          ["✨", "Animations", "Adds transitions and visual effects."]
        ],
        future: "CSS continues to gain powerful layout, animation and responsive features that make modern interfaces easier to build.",
        wiki: "CSS",
        search: "CSS cascading style sheets web design"
      },
      javascript: {
        title: "JavaScript",
        icon: "⚡",
        intro: "Explore the programming language that makes websites interactive and dynamic.",
        definition: "JavaScript is a programming language widely used to add interaction and dynamic behaviour to websites. It can run in web browsers and on servers.",
        example: "A calculator that responds when you click number buttons can be built using JavaScript.",
        steps: [
          ["User performs an action", "A user clicks a button or enters information."],
          ["Event is detected", "JavaScript listens for the event."],
          ["Code runs", "A function processes the action or data."],
          ["Page updates", "The website displays the result without needing a full page reload in many cases."]
        ],
        points: [
          ["Variables", "Store values using let, const or var."],
          ["Functions", "Reusable blocks of code that perform tasks."],
          ["Events", "Respond to actions such as clicks and typing."],
          ["DOM", "The Document Object Model lets JavaScript work with page elements."]
        ],
        history: "JavaScript was created to add programming and interaction to web pages.",
        timeline: [
          ["1995", "JavaScript created", "Brendan Eich created the language at Netscape."],
          ["1997", "ECMAScript", "JavaScript was standardized as ECMAScript."],
          ["2009", "Node.js", "JavaScript gained a major server-side runtime."],
          ["Today", "Modern ecosystem", "JavaScript powers browser apps, servers and many development tools."]
        ],
        uses: [
          ["🖱️", "Interactive websites", "Handles buttons, menus and user input."],
          ["🛒", "Web applications", "Powers shopping carts and dynamic interfaces."],
          ["🖥️", "Server development", "Can run server-side code with Node.js."]
        ],
        future: "JavaScript will remain important in web applications, full-stack development, automation and cross-platform software.",
        wiki: "JavaScript",
        search: "JavaScript programming language"
      },
      react: {
        title: "React",
        icon: "⚛️",
        intro: "Understand how React helps developers build interactive user interfaces using reusable components.",
        definition: "React is a JavaScript library for building user interfaces. It encourages developers to divide an interface into reusable components.",
        example: "A shopping website can use reusable React components for product cards, navigation bars and shopping carts.",
        steps: [
          ["Create components", "Divide the interface into smaller reusable parts."],
          ["Provide data", "Pass information to components using props and state."],
          ["Update state", "Change state when the user interacts with the page."],
          ["Render interface", "React updates the displayed interface when relevant data changes."]
        ],
        points: [
          ["Components", "Reusable pieces of user interface."],
          ["JSX", "A syntax extension that lets developers describe UI using markup-like syntax."],
          ["Props", "Values passed from one component to another."],
          ["State", "Data that can change and cause a component to update."]
        ],
        history: "React was developed at Facebook to help manage complex user interfaces.",
        timeline: [
          ["2011", "Internal development", "React began as an internal project at Facebook."],
          ["2013", "Open source", "React was publicly released."],
          ["2015", "React Native", "React Native extended React ideas to mobile apps."],
          ["Today", "Modern React", "React is widely used for interactive web interfaces."]
        ],
        uses: [
          ["🛍️", "E-commerce", "Builds product lists and shopping interfaces."],
          ["📊", "Dashboards", "Creates reusable charts and interface components."],
          ["📱", "Web apps", "Supports interactive single-page applications."]
        ],
        future: "React development continues to focus on performance, server rendering, developer experience and modern application architecture.",
        wiki: "React (JavaScript library)",
        search: "React JavaScript library logo interface"
      },
      frontend: {
        title: "Frontend Development",
        icon: "🖥️",
        intro: "Learn about the part of a website that users see and interact with directly.",
        definition: "Frontend development is the process of building the visible and interactive part of a website or web application. It commonly uses HTML, CSS and JavaScript.",
        example: "The navigation bar, login form, buttons, images and product cards on a website are part of its frontend.",
        steps: [
          ["Design the interface", "Plan the layout and user experience."],
          ["Build structure", "Use HTML or a component framework to create the page."],
          ["Apply styling", "Use CSS to control appearance and responsiveness."],
          ["Add interaction", "Use JavaScript to respond to user actions."]
        ],
        points: [
          ["HTML", "Defines the structure of page content."],
          ["CSS", "Controls visual presentation and layout."],
          ["JavaScript", "Adds behaviour and interaction."],
          ["Accessibility", "Helps people with different abilities use the interface."]
        ],
        history: "Frontend development evolved from simple text documents into rich interactive experiences as browsers gained new capabilities.",
        timeline: [
          ["1990s", "Static web", "Early websites mainly displayed text and links."],
          ["2000s", "Dynamic interfaces", "JavaScript and CSS made web pages more interactive."],
          ["2010s", "Responsive design", "Mobile-first design became increasingly important."],
          ["Today", "Component-based UI", "Frameworks and design systems support complex interfaces."]
        ],
        uses: [
          ["🌐", "Websites", "Builds the visible parts of websites."],
          ["📱", "Web apps", "Creates mobile-friendly interactive interfaces."],
          ["📈", "Dashboards", "Displays data in clear visual layouts."]
        ],
        future: "Frontend work will continue to grow around accessibility, performance, design systems, AI-assisted tools and immersive web experiences.",
        wiki: "Front-end web development",
        search: "frontend web development user interface"
      },
      backend: {
        title: "Backend Development",
        icon: "⚙️",
        intro: "Discover the server-side systems that process requests, manage data and power web applications.",
        definition: "Backend development focuses on the server-side logic of an application. It commonly includes APIs, databases, authentication and business logic.",
        example: "When a user logs in, the backend checks the submitted details and communicates with the database.",
        steps: [
          ["Receive request", "The server receives a request from the frontend."],
          ["Process logic", "Backend code validates input and performs the required task."],
          ["Access database", "The application reads or updates stored information when needed."],
          ["Send response", "The server returns a response to the frontend."]
        ],
        points: [
          ["Server", "Runs application logic and responds to requests."],
          ["Database", "Stores information such as users and products."],
          ["API", "Allows different software systems to communicate."],
          ["Authentication", "Checks the identity of users."]
        ],
        history: "Backend development grew as websites moved from static documents to dynamic applications that needed databases and server-side processing.",
        timeline: [
          ["1990s", "Dynamic websites", "Server-side scripts made database-driven websites possible."],
          ["2000s", "Web frameworks", "Frameworks helped developers build server applications faster."],
          ["2010s", "Cloud and APIs", "Cloud platforms and API-based systems expanded."],
          ["Today", "Distributed systems", "Backend systems often use cloud services and microservices."]
        ],
        uses: [
          ["🔐", "Login systems", "Handles authentication and account data."],
          ["🛒", "Online stores", "Processes orders, payments and product information."],
          ["☁️", "Cloud apps", "Runs application logic and APIs."]
        ],
        future: "Backend development will continue to use cloud-native systems, secure APIs, automation, serverless services and scalable databases.",
        wiki: "Web development",
        search: "backend server database web development"
      }
    }
  },

  "modern-technology": {
    category: "Modern Technology",
    items: {
      "artificial-intelligence": {
        title: "Artificial Intelligence (AI)",
        icon: "🤖",
        intro: "Explore how machines can perform tasks that normally require human intelligence.",
        definition: "Artificial Intelligence is a field of computer science focused on creating systems that can perform tasks such as understanding language, recognizing patterns, solving problems and making predictions.",
        example: "A voice assistant that understands a spoken question and responds is an example of an AI-powered system.",
        steps: [
          ["Receive input", "An AI system receives text, images, audio or other data."],
          ["Process information", "Algorithms analyse the input using rules or learned patterns."],
          ["Generate a result", "The system produces a prediction, answer or action."],
          ["Evaluate output", "The result can be checked and improved based on feedback."]
        ],
        points: [
          ["Machine Learning", "A branch of AI where systems learn patterns from data."],
          ["Natural Language Processing", "Helps computers work with human language."],
          ["Computer Vision", "Helps computers interpret images and videos."],
          ["Reasoning", "Uses information to draw conclusions or solve problems."]
        ],
        history: "AI research began as a formal academic field in the 1950s and has developed through decades of research in computing and data.",
        timeline: [
          ["1950", "Turing Test", "Alan Turing published influential work on machine intelligence."],
          ["1956", "AI named", "The Dartmouth workshop helped establish AI as a research field."],
          ["1997", "Deep Blue", "IBM's Deep Blue defeated chess champion Garry Kasparov."],
          ["2010s", "Deep learning", "Advances in data and computing accelerated AI applications."],
          ["2020s", "Generative AI", "AI tools became widely used for text, images, coding and more."]
        ],
        uses: [
          ["🏥", "Healthcare", "Supports medical image analysis and research."],
          ["🚗", "Transportation", "Helps with driver assistance and route planning."],
          ["🎓", "Education", "Can support learning tools and personalized practice."]
        ],
        future: "AI may support scientific research, education, accessibility and automation. Responsible development, privacy, accuracy and human oversight remain important.",
        wiki: "Artificial intelligence",
        search: "artificial intelligence AI technology robot"
      },
      "machine-learning": {
        title: "Machine Learning (ML)",
        icon: "🧠",
        intro: "Understand how computers learn patterns from data and use them to make predictions.",
        definition: "Machine Learning is a branch of Artificial Intelligence in which computer systems learn patterns from data to make predictions or decisions without being explicitly programmed for every individual case.",
        example: "An email service can learn from examples of spam messages and identify suspicious emails.",
        steps: [
          ["Collect data", "Gather relevant examples for the problem."],
          ["Train a model", "An algorithm learns patterns from the training data."],
          ["Test the model", "Evaluate how well it works on data it has not seen before."],
          ["Make predictions", "Use the trained model to predict outcomes for new data."]
        ],
        points: [
          ["Supervised learning", "Learns from labelled examples."],
          ["Unsupervised learning", "Finds patterns in data without given labels."],
          ["Reinforcement learning", "Learns through actions, feedback and rewards."],
          ["Model evaluation", "Measures how well a model performs."]
        ],
        history: "Machine learning developed from early research into pattern recognition, statistics and artificial intelligence.",
        timeline: [
          ["1950s", "Early learning programs", "Researchers explored how computers could learn from experience."],
          ["1959", "Machine learning term", "Arthur Samuel helped popularize the term machine learning."],
          ["1990s", "Statistical methods", "Data-driven algorithms became increasingly important."],
          ["2010s", "Large-scale learning", "More data and computing power improved model performance."],
          ["Today", "Practical ML", "ML is used in recommendations, fraud detection and forecasting."]
        ],
        uses: [
          ["🏦", "Banking", "Can help identify unusual transactions."],
          ["🛍️", "Shopping", "Powers product recommendation systems."],
          ["📧", "Email", "Helps classify spam and unwanted messages."]
        ],
        future: "Machine learning will continue to develop in explainability, efficient training, responsible data use and applications in science and industry.",
        wiki: "Machine learning",
        search: "machine learning data science model"
      },
      "deep-learning": {
        title: "Deep Learning",
        icon: "🕸️",
        intro: "Discover how multi-layer neural networks learn complex patterns from large amounts of data.",
        definition: "Deep Learning is a subfield of Machine Learning that uses neural networks with multiple layers to learn complex patterns from data.",
        example: "A photo application that recognizes objects such as cars, animals and buildings may use deep learning.",
        steps: [
          ["Prepare data", "Collect and prepare examples for training."],
          ["Pass through layers", "Data moves through multiple neural network layers."],
          ["Learn patterns", "The network adjusts its internal weights during training."],
          ["Produce output", "The trained network predicts or classifies new input."]
        ],
        points: [
          ["Neural network", "A computing model inspired in a simplified way by connected neurons."],
          ["Layers", "Groups of processing units that transform information."],
          ["Training", "The process of adjusting model parameters using data."],
          ["GPU", "Hardware often used to accelerate deep learning calculations."]
        ],
        history: "Neural network research has existed for decades, while modern deep learning advanced with larger datasets and more powerful computing.",
        timeline: [
          ["1940s", "Early neural models", "Researchers explored mathematical models of artificial neurons."],
          ["1980s", "Backpropagation", "Backpropagation became an important neural network training method."],
          ["2012", "ImageNet breakthrough", "A deep neural network achieved a major result in image recognition."],
          ["Today", "Large neural models", "Deep learning supports language, image, audio and scientific applications."]
        ],
        uses: [
          ["🖼️", "Image recognition", "Identifies objects and patterns in images."],
          ["🎙️", "Speech systems", "Supports speech recognition and audio processing."],
          ["🧬", "Research", "Helps analyse complex scientific data."]
        ],
        future: "Deep learning research will focus on more efficient models, better reasoning, reliable outputs and applications in science and healthcare.",
        wiki: "Deep learning",
        search: "deep learning neural network layers"
      },
      robotics: {
        title: "Robotics",
        icon: "🦾",
        intro: "Learn how robots combine mechanical systems, sensors and software to perform tasks.",
        definition: "Robotics is a field of engineering and computer science concerned with designing, building, programming and operating robots.",
        example: "A factory robot arm can repeatedly move and assemble parts on a production line.",
        steps: [
          ["Sense the environment", "Sensors collect information about surroundings."],
          ["Process information", "The robot controller interprets sensor data."],
          ["Plan an action", "Software decides what movement or task is needed."],
          ["Perform movement", "Motors and actuators carry out the action."]
        ],
        points: [
          ["Sensors", "Collect information such as distance, light or temperature."],
          ["Actuators", "Create physical movement."],
          ["Controller", "Processes information and controls robot behaviour."],
          ["Programming", "Defines the instructions and behaviour of a robot."]
        ],
        history: "Robotics developed through mechanical engineering, automation and computer control.",
        timeline: [
          ["1950s", "Industrial robotics ideas", "Research and early designs advanced automated machines."],
          ["1961", "Unimate", "An industrial robot began operating in a General Motors factory."],
          ["1980s", "Factory automation", "Robots became increasingly important in manufacturing."],
          ["Today", "Smart robotics", "Robots are used in factories, hospitals, research and homes."]
        ],
        uses: [
          ["🏭", "Manufacturing", "Performs repetitive assembly and handling tasks."],
          ["🏥", "Healthcare", "Supports selected surgical and rehabilitation tasks."],
          ["🚀", "Space research", "Robotic systems explore difficult environments."]
        ],
        future: "Robotics may become more capable in healthcare, logistics, agriculture and home assistance, with safety and human control remaining essential.",
        wiki: "Robotics",
        search: "robotics industrial robot arm"
      },
      "internet-of-things": {
        title: "Internet of Things (IoT)",
        icon: "📶",
        intro: "Explore how everyday physical devices connect to the internet and exchange data.",
        definition: "The Internet of Things is a network of physical objects embedded with sensors, software and connectivity that allow them to collect and exchange data.",
        example: "A smart thermostat can measure room temperature and allow users to control heating through a mobile app.",
        steps: [
          ["Collect data", "Sensors measure information such as temperature or movement."],
          ["Connect device", "The device sends data through a network."],
          ["Process information", "A local system or cloud service analyses the data."],
          ["Take action", "The system displays information or triggers an action."]
        ],
        points: [
          ["Sensors", "Measure physical conditions."],
          ["Connectivity", "Wi-Fi, Bluetooth and other technologies connect devices."],
          ["Cloud platform", "Can store and process device data."],
          ["Security", "Devices need updates, authentication and secure communication."]
        ],
        history: "IoT grew as sensors became smaller, connectivity became cheaper and everyday devices gained computing capabilities.",
        timeline: [
          ["1980s", "Connected device experiments", "Early network-connected devices were explored."],
          ["1999", "IoT term", "The term Internet of Things was popularized by Kevin Ashton."],
          ["2010s", "Smart devices", "Connected home and industrial devices expanded."],
          ["Today", "Connected environments", "IoT is used in homes, factories, cities and agriculture."]
        ],
        uses: [
          ["🏠", "Smart homes", "Connects lights, cameras and appliances."],
          ["🌾", "Agriculture", "Monitors soil, weather and irrigation."],
          ["🏭", "Industry", "Tracks equipment and production conditions."]
        ],
        future: "IoT will develop through better connectivity, edge computing, energy-efficient sensors and stronger device security.",
        wiki: "Internet of things",
        search: "Internet of Things smart connected devices"
      },
      blockchain: {
        title: "Blockchain",
        icon: "⛓️",
        intro: "Understand how blockchain stores records in linked blocks across a distributed network.",
        definition: "Blockchain is a type of distributed ledger technology in which records are grouped into blocks that are linked using cryptography. Copies of the ledger may be maintained across multiple computers.",
        example: "A supply chain system can use a blockchain to record the movement of goods between different organizations.",
        steps: [
          ["Create a transaction", "A participant proposes a new record or transaction."],
          ["Verify information", "Network participants follow agreed rules to validate it."],
          ["Add a block", "Validated records can be grouped into a new block."],
          ["Update the ledger", "The network updates its copies according to its consensus process."]
        ],
        points: [
          ["Block", "A group of records stored together."],
          ["Hash", "A cryptographic value used to help link and verify blocks."],
          ["Distributed ledger", "A shared record maintained across multiple participants."],
          ["Consensus", "A process used by participants to agree on valid records."]
        ],
        history: "Blockchain became widely known through Bitcoin, while the underlying ideas of cryptographic records and distributed systems have a longer history.",
        timeline: [
          ["1990s", "Cryptographic research", "Researchers explored timestamped and linked digital records."],
          ["2008", "Bitcoin paper", "The Bitcoin white paper described a blockchain-based digital currency system."],
          ["2009", "Bitcoin network", "The Bitcoin network began operating."],
          ["2015", "Ethereum", "Ethereum expanded blockchain use through programmable smart contracts."],
          ["Today", "Broader experiments", "Organizations explore blockchain for records, assets and applications."]
        ],
        uses: [
          ["📦", "Supply chains", "Can record product movement and provenance."],
          ["📄", "Digital records", "Can support shared record-keeping systems."],
          ["💻", "Smart contracts", "Can automate agreed actions on supported networks."]
        ],
        future: "Blockchain research will continue around scalability, privacy, interoperability, energy use and practical real-world applications. It is not suitable for every data-storage problem.",
        wiki: "Blockchain",
        search: "blockchain distributed ledger technology"
      }
    }
  }
};

const params = new URLSearchParams(window.location.search);
const categoryKey = params.get("category");
const itemKey = params.get("item");

const categoryData = TOPICS[categoryKey];
const topic = categoryData?.items?.[itemKey];

const $ = (id) => document.getElementById(id);

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function safeURL(value) {
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

function showNotFound() {
  document.title = "Topic Not Found | WebVerse";
  document.querySelector("main").innerHTML = `
    <section class="not-found">
      <p class="eyebrow">WEBVERSE / EXPLORER</p>
      <h1>Topic not found</h1>
      <p>This topic link is invalid or the topic does not exist. Please return to the Technology Gallery and choose a topic.</p>
      <a class="primary-btn" href="explore.html?topic=modern-technology">Back to Technology Gallery</a>
    </section>`;
}

function renderTopic() {
  document.title = `${topic.title} | WebVerse`;

  $("topicCategory").textContent = categoryData.category.toUpperCase();
  $("topicTitle").textContent = topic.title;
  $("topicIntro").textContent = topic.intro;
  $("heroArt").textContent = topic.icon;
  $("overviewTitle").textContent = topic.title;
  $("topicDefinition").textContent = topic.definition;
  $("topicExample").textContent = topic.example;
  $("historyIntro").textContent = topic.history;
  $("futureText").textContent = topic.future;

  $("workingSteps").innerHTML = topic.steps.map((step, index) => `
    <article class="step-card">
      <div class="step-number">0${index + 1}</div>
      <h3>${escapeHTML(step[0])}</h3>
      <p>${escapeHTML(step[1])}</p>
    </article>`).join("");

  $("keyPoints").innerHTML = topic.points.map((point) => `
    <article class="concept-card">
      <h3>${escapeHTML(point[0])}</h3>
      <p>${escapeHTML(point[1])}</p>
    </article>`).join("");

  $("topicTimeline").innerHTML = topic.timeline.map((event) => `
    <article class="timeline-item">
      <strong>${escapeHTML(event[0])}</strong>
      <h3>${escapeHTML(event[1])}</h3>
      <p>${escapeHTML(event[2])}</p>
    </article>`).join("");

  $("topicUses").innerHTML = topic.uses.map((use) => `
    <article class="use-card">
      <div class="step-number">${escapeHTML(use[0])}</div>
      <h3>${escapeHTML(use[1])}</h3>
      <p>${escapeHTML(use[2])}</p>
    </article>`).join("");

  const wikiTitle = topic.wiki;
  $("readingTitle").textContent = wikiTitle;
  $("wikiLink").href = `https://en.wikipedia.org/wiki/${encodeURIComponent(wikiTitle.replaceAll(" ", "_"))}`;

  renderRelatedTopics();
  rememberRecentTopic();
}

function renderRelatedTopics() {
  const items = Object.entries(categoryData.items)
    .filter(([key]) => key !== itemKey)
    .slice(0, 3);

  $("relatedTopics").innerHTML = items.map(([key, item]) => `
    <a class="related-card" href="subtopic.html?category=${encodeURIComponent(categoryKey)}&item=${encodeURIComponent(key)}">
      <span>${escapeHTML(item.icon)}</span>
      <h3>${escapeHTML(item.title)}</h3>
      <p>${escapeHTML(item.intro)}</p>
    </a>`).join("");
}

function rememberRecentTopic() {
  try {
    const key = "webverse:recent-subtopics";
    const previous = JSON.parse(localStorage.getItem(key) || "[]");
    const updated = [
      {
        category: categoryKey,
        item: itemKey,
        title: topic.title,
        categoryTitle: categoryData.category,
        url: `subtopic.html?category=${encodeURIComponent(categoryKey)}&item=${encodeURIComponent(itemKey)}`
      },
      ...previous.filter((entry) => !(entry.category === categoryKey && entry.item === itemKey))
    ].slice(0, 10);

    localStorage.setItem(key, JSON.stringify(updated));
  } catch (error) {
    console.warn("Could not save recent topic:", error);
  }
}

/* WIKIMEDIA COMMONS IMAGE EXPLORER */

let imageContinue = null;
let isLoadingImages = false;
let loadedImageTitles = new Set();

function getMetadataText(metadata, key) {
  const raw = metadata?.[key]?.value || "";
  const doc = new DOMParser().parseFromString(String(raw), "text/html");
  return (doc.body.textContent || "").trim();
}

function getSavedImages() {
  try {
    const saved = JSON.parse(localStorage.getItem("webverse:favorites") || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function isImageSaved(imageURL) {
  return getSavedImages().some((entry) => {
    if (typeof entry === "string") return entry === imageURL;
    return entry?.url === imageURL || entry?.imageURL === imageURL;
  });
}

function saveImage(image) {
  try {
    const saved = getSavedImages();

    if (isImageSaved(image.url)) {
      const updated = saved.filter((entry) => {
        if (typeof entry === "string") return entry !== image.url;
        return entry?.url !== image.url && entry?.imageURL !== image.url;
      });
      localStorage.setItem("webverse:favorites", JSON.stringify(updated));
      return false;
    }

    saved.push({
      title: image.title,
      url: image.url,
      source: image.source,
      creator: image.creator,
      license: image.license,
      topic: topic.title
    });

    localStorage.setItem("webverse:favorites", JSON.stringify(saved));
    return true;
  } catch (error) {
    console.warn("Could not save image:", error);
    $("imageStatus").textContent = "Browser storage is unavailable. Image could not be saved.";
    return null;
  }
}

function createImageCard(image) {
  const card = document.createElement("article");
  card.className = "image-card";

  const img = document.createElement("img");
  img.src = image.url;
  img.alt = image.title;
  img.loading = "lazy";

  const info = document.createElement("div");
  info.className = "image-info";

  const heading = document.createElement("h3");
  heading.textContent = image.title;

  const credit = document.createElement("p");
  credit.textContent = `Creator: ${image.creator || "Not listed"} · License: ${image.license || "See source page"}`;

  const links = document.createElement("div");
  links.className = "image-links";

  const sourceLink = document.createElement("a");
  sourceLink.href = image.source;
  sourceLink.target = "_blank";
  sourceLink.rel = "noopener noreferrer";
  sourceLink.textContent = "View source ↗";

  links.appendChild(sourceLink);
  info.append(heading, credit, links);

  const saveButton = document.createElement("button");
  saveButton.type = "button";
  saveButton.className = "save-image";
  saveButton.textContent = isImageSaved(image.url) ? "♥ Saved" : "♡ Save image";

  if (isImageSaved(image.url)) saveButton.classList.add("saved");

  saveButton.addEventListener("click", () => {
    const result = saveImage(image);
    if (result === null) return;

    saveButton.textContent = result ? "♥ Saved" : "♡ Save image";
    saveButton.classList.toggle("saved", result);
  });

  info.appendChild(saveButton);
  card.append(img, info);
  $("imageGrid").appendChild(card);
}

async function loadImages() {
  if (isLoadingImages) return;

  isLoadingImages = true;
  $("loadMoreBtn").disabled = true;
  $("loadMoreBtn").textContent = "Loading...";
  $("imageStatus").textContent = "Finding images for " + topic.title + "...";

  const apiURL = new URL("https://commons.wikimedia.org/w/api.php");
  apiURL.searchParams.set("action", "query");
  apiURL.searchParams.set("format", "json");
  apiURL.searchParams.set("origin", "*");
  apiURL.searchParams.set("generator", "search");
  apiURL.searchParams.set("gsrsearch", topic.search);
  apiURL.searchParams.set("gsrnamespace", "6");
  apiURL.searchParams.set("gsrlimit", "12");
  apiURL.searchParams.set("prop", "imageinfo");
  apiURL.searchParams.set("iiprop", "url|extmetadata");
  apiURL.searchParams.set("iiurlwidth", "800");

  if (imageContinue) {
    Object.entries(imageContinue).forEach(([key, value]) => {
      apiURL.searchParams.set(key, value);
    });
  }

  try {
    const response = await fetch(apiURL);
    if (!response.ok) throw new Error("Image service response error");

    const data = await response.json();
    const pages = Object.values(data.query?.pages || {});
    let added = 0;

    for (const page of pages) {
      const info = page.imageinfo?.[0];
      const imageURL = safeURL(info?.thumburl || info?.url);
      const sourceURL = safeURL(info?.descriptionurl);

      if (!imageURL || !sourceURL || loadedImageTitles.has(page.title)) continue;

      loadedImageTitles.add(page.title);

      const metadata = info.extmetadata || {};
      createImageCard({
        title: page.title.replace(/^File:/, "").replaceAll("_", " "),
        url: imageURL,
        source: sourceURL,
        creator: getMetadataText(metadata, "Artist") || getMetadataText(metadata, "Credit") || "Not listed",
        license: getMetadataText(metadata, "LicenseShortName") || "See source page"
      });

      added++;
    }

    imageContinue = data.continue || null;

    if (added === 0 && $("imageGrid").children.length === 0) {
      $("imageStatus").textContent = "No images found for this search. Try again later.";
    } else {
      $("imageStatus").textContent = `${$("imageGrid").children.length} images loaded.`;
    }

    $("loadMoreBtn").style.display = imageContinue ? "inline-flex" : "none";
  } catch (error) {
    console.error("Wikimedia image error:", error);
    $("imageStatus").textContent = "Images could not be loaded right now. Please check your internet connection and try again.";
    $("loadMoreBtn").style.display = "inline-flex";
  } finally {
    isLoadingImages = false;
    $("loadMoreBtn").disabled = false;
    $("loadMoreBtn").textContent = "Load More Images";
  }
}

/* WIKIPEDIA SUMMARY */

async function loadWikipediaSummary() {
  const title = encodeURIComponent(topic.wiki.replaceAll(" ", "_"));
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${title}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Wikipedia summary unavailable");

    const data = await response.json();
    if (data.extract) {
      $("readingDescription").textContent = data.extract;
    }
  } catch (error) {
    $("readingDescription").textContent =
      "Open the Wikipedia reference to explore more information about " + topic.title + ".";
  }
}

if (!categoryData || !topic) {
  showNotFound();
} else {
  renderTopic();
  loadImages();
  loadWikipediaSummary();
  $("loadMoreBtn").addEventListener("click", loadImages);
}