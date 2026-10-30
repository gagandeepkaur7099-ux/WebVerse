"use strict";

/* WEBVERSE MINI TECHNOLOGY EXPLORER */

const subtopicData = {
  networking: {
    heading: "Explore Computer Networking",
    description: "Explore the important technologies behind computer communication.",
    items: [
      ["router", "Router", "🖧", "Connects different networks."],
      ["switch", "Network Switch", "🔀", "Connects devices in a local network."],
      ["ip-address", "IP Address", "📡", "Identifies devices on a network."],
      ["dns", "DNS", "🌍", "Translates domain names into IP addresses."],
      ["tcp-ip", "TCP/IP", "🔗", "Protocols that support Internet communication."],
      ["cybersecurity", "Cybersecurity", "🔐", "Protects networks and digital information."]
    ]
  },

  "web-development": {
    heading: "Explore Web Development",
    description: "Learn the technologies used to build modern websites and applications.",
    items: [
      ["html", "HTML", "🧱", "Creates the structure of web pages."],
      ["css", "CSS", "🎨", "Controls website design and layout."],
      ["javascript", "JavaScript", "⚡", "Makes websites interactive."],
      ["react", "React", "⚛️", "A JavaScript library for building user interfaces."],
      ["frontend", "Frontend", "🖥️", "The visual part users interact with."],
      ["backend", "Backend", "⚙️", "Handles server logic and data."]
    ]
  },

  "modern-technology": {
    heading: "Explore Modern Technology",
    description: "Discover the technologies shaping the future of our world.",
    items: [
      ["artificial-intelligence", "Artificial Intelligence", "🤖", "Machines performing intelligent tasks."],
      ["machine-learning", "Machine Learning", "🧠", "Systems learning patterns from data."],
      ["deep-learning", "Deep Learning", "🧬", "Neural-network-based machine learning."],
      ["robotics", "Robotics", "🦾", "Design and use of programmable machines."],
      ["internet-of-things", "Internet of Things", "📱", "Physical devices connected to the Internet."],
      ["blockchain", "Blockchain", "⛓️", "A distributed way to record information."]
    ]
  }
};

function createSubtopicExplorer() {
  const keyGrid = document.querySelector("#keyGrid");

  if (!keyGrid) return;

  const currentCategory = new URLSearchParams(location.search).get("topic");
  const category = subtopicData[currentCategory];

  // Only show these cards on the three Technology Gallery pages.
  if (!category) return;

  const oldSection = document.querySelector("#subtopicExplorer");
  if (oldSection) oldSection.remove();

  const section = document.createElement("section");
  section.id = "subtopicExplorer";
  section.className = "content-section";

  const heading = document.createElement("div");
  heading.className = "section-heading";

  const label = document.createElement("span");
  label.textContent = "MINI TECHNOLOGY EXPLORER";

  const title = document.createElement("h2");
  title.textContent = category.heading;

  const description = document.createElement("p");
  description.textContent = category.description;

  heading.append(label, title, description);

  const grid = document.createElement("div");
  grid.className = "subtopic-grid";

  category.items.forEach(([id, name, icon, detail]) => {
    const card = document.createElement("a");
    card.className = "subtopic-card";
    card.href =
      `subtopic.html?category=${encodeURIComponent(currentCategory)}&item=${encodeURIComponent(id)}`;

    const symbol = document.createElement("div");
    symbol.className = "subtopic-icon";
    symbol.textContent = icon;

    const cardTitle = document.createElement("h3");
    cardTitle.textContent = name;

    const text = document.createElement("p");
    text.textContent = detail;

    const explore = document.createElement("span");
    explore.className = "subtopic-explore";
    explore.textContent = "Explore topic →";

    card.append(symbol, cardTitle, text, explore);
    grid.appendChild(card);
  });

  section.append(heading, grid);

  // Place the new explorer before the existing Key Concepts section.
  const keySection = keyGrid.closest(".content-section");

  if (keySection && keySection.parentNode) {
    keySection.parentNode.insertBefore(section, keySection);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", createSubtopicExplorer);
} else {
  createSubtopicExplorer();
}