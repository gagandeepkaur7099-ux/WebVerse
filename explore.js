"use strict";

/* =========================================
   WEBVERSE - EXPLORE PAGE
   Six independent topic configurations
========================================= */

const TOPICS = {
  networking: {
    title: "Computer Networking",
    category: "Technology Gallery",
    intro: "Discover how computers and devices connect, communicate and share information across the world.",
    definition: "Computer networking is the process of connecting two or more computers or devices so they can exchange data and share resources.",
    icon: "🌐",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1500&q=85",
    searchQuery: "computer networking routers servers ethernet network",
    wikiTitle: "Computer_network",
    history: "Early computer networks developed during the 1960s and 1970s. ARPANET connected research computers and helped create the foundation of today's Internet.",
    present: "Modern networks use Wi-Fi, routers, switches, fiber-optic cables, mobile networks and cloud systems to connect billions of devices.",
    future: "Future networking may include faster 6G communication, satellite Internet, smarter networks and improved security.",
    fact: "The Internet is a worldwide network of interconnected networks. It is not the same thing as the World Wide Web.",
    quote: "A network connects devices; communication connects people.",
    keys: [
      ["🖧", "Router", "A router connects different networks and forwards data between them."],
      ["🔀", "Switch", "A switch connects devices within a local network."],
      ["📡", "IP Address", "An IP address identifies a device on an IP network."],
      ["🌍", "DNS", "DNS translates domain names into IP addresses."],
      ["🔒", "Network Security", "It protects network devices and data from unauthorized access."],
      ["📶", "Wi-Fi", "Wi-Fi allows devices to connect to a network wirelessly."]
    ],
    timeline: [
      ["1969", "ARPANET begins", "A major early packet-switching network connects research computers."],
      ["1971", "Email develops", "Network email becomes an important way to communicate."],
      ["1983", "TCP/IP adoption", "TCP/IP becomes the standard protocol suite for ARPANET."],
      ["1989", "World Wide Web proposed", "Tim Berners-Lee proposes the Web at CERN."],
      ["1990s", "Internet expands", "Internet access grows for homes, schools and businesses."],
      ["2020s", "Modern connectivity", "Cloud networks, 5G and connected devices become widespread."]
    ]
  },

  "web-development": {
    title: "Web Development",
    category: "Technology Gallery",
    intro: "Explore how websites and web applications are designed, developed and made available on the Internet.",
    definition: "Web development is the process of creating and maintaining websites and web applications using programming languages, tools and technologies.",
    icon: "💻",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1500&q=85",
    searchQuery: "web development HTML CSS JavaScript programming website",
    wikiTitle: "Web_development",
    history: "The Web began in 1989 when Tim Berners-Lee proposed a system for sharing information. The first websites were simple pages made mainly with text and links.",
    present: "Today, developers use HTML, CSS, JavaScript, frameworks, databases and APIs to build interactive websites and applications.",
    future: "AI-assisted development, WebAssembly, progressive web apps and more accessible experiences are shaping the future of web development.",
    fact: "HTML provides page structure, CSS controls presentation, and JavaScript adds behaviour and interactivity.",
    quote: "A good website turns information into an easy experience.",
    keys: [
      ["🧱", "HTML", "HTML creates the structure and content of a web page."],
      ["🎨", "CSS", "CSS controls colours, layouts, spacing and visual design."],
      ["⚡", "JavaScript", "JavaScript adds interactive features and dynamic behaviour."],
      ["🖥️", "Frontend", "Frontend is the part of a website users see and interact with."],
      ["⚙️", "Backend", "Backend handles server logic, data and application operations."],
      ["🔗", "API", "An API allows different software applications to communicate."]
    ],
    timeline: [
      ["1989", "Web proposed", "Tim Berners-Lee proposes the World Wide Web."],
      ["1991", "First website", "The first website becomes publicly available."],
      ["1995", "JavaScript introduced", "JavaScript brings scripting and interaction to web pages."],
      ["1996", "CSS introduced", "CSS helps separate page styling from HTML structure."],
      ["2000s", "Web applications grow", "Dynamic websites and interactive services become popular."],
      ["2020s", "Modern development", "Cloud platforms, modern frameworks and AI tools support development."]
    ]
  },

  "modern-technology": {
    title: "Modern Technology",
    category: "Technology Gallery",
    intro: "Explore the latest technologies changing communication, education, healthcare, business and everyday life.",
    definition: "Modern technology refers to advanced tools, systems and innovations developed to solve problems and improve human activities.",
    icon: "🤖",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1500&q=85",
    searchQuery: "modern technology artificial intelligence robotics cloud computing",
    wikiTitle: "Emerging_technologies",
    history: "Technology has developed from simple mechanical tools to computers, the Internet, smartphones and intelligent machines.",
    present: "Artificial intelligence, cloud computing, robotics, Internet of Things and biotechnology are used in many industries today.",
    future: "Future technologies may improve medical research, automation, clean energy, space exploration and communication.",
    fact: "Artificial intelligence can help computers perform tasks that normally require human-like learning or decision-making.",
    quote: "Technology is most useful when it solves real human problems.",
    keys: [
      ["🤖", "Artificial Intelligence", "AI helps machines perform tasks such as prediction, recognition and language processing."],
      ["🧠", "Machine Learning", "Machine learning allows systems to learn patterns from data."],
      ["☁️", "Cloud Computing", "Cloud computing provides computing services over the Internet."],
      ["📱", "Internet of Things", "IoT connects physical devices that collect and exchange data."],
      ["🦾", "Robotics", "Robotics combines machines, sensors and software to perform tasks."],
      ["🔐", "Cybersecurity", "Cybersecurity protects systems, networks and information from digital attacks."]
    ],
    timeline: [
      ["1940s", "Early computers", "Electronic computers begin changing calculations and information processing."],
      ["1970s", "Microprocessors", "Smaller processors help make personal computing possible."],
      ["1990s", "Internet growth", "Digital communication expands around the world."],
      ["2007", "Smartphone era", "Modern smartphones transform mobile computing."],
      ["2010s", "Cloud and IoT", "Connected devices and cloud services become widely used."],
      ["2020s", "AI development", "Generative AI and advanced automation receive widespread attention."]
    ]
  },

  "web-1": {
    title: "Web 1.0",
    category: "Web Evolution",
    intro: "Discover the first stage of the Web — a mostly read-only experience built around simple static websites.",
    definition: "Web 1.0 refers to the early stage of the World Wide Web, when most websites provided information for users to read rather than interact with.",
    icon: "📄",
    heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1500&q=85",
    searchQuery: "early World Wide Web 1990s computer browser vintage",
    wikiTitle: "Web_1.0",
    history: "Web 1.0 developed during the early years of the World Wide Web in the 1990s. Websites were generally simple, static and information-focused.",
    present: "Web 1.0 is mainly studied as an important stage in Internet history. Its basic ideas still appear in simple informational websites.",
    future: "The Web continues to evolve beyond the read-only model, but Web 1.0 remains important for understanding how online publishing began.",
    fact: "Web 1.0 is commonly described as the read-only Web because users mostly consumed information instead of creating and sharing it.",
    quote: "The early Web made information accessible to people around the world.",
    keys: [
      ["📖", "Read-Only", "Users mainly read information published by website owners."],
      ["📄", "Static Pages", "Pages usually displayed fixed content."],
      ["🔗", "Hyperlinks", "Links helped users move from one document to another."],
      ["🧑‍💻", "Webmasters", "Website owners or webmasters generally controlled published content."],
      ["🖼️", "Basic Design", "Early pages often used simple layouts and limited graphics."],
      ["🌐", "Information Sharing", "The Web helped people access information online."]
    ],
    timeline: [
      ["1989", "Web proposal", "Tim Berners-Lee proposes the World Wide Web."],
      ["1990", "First browser and server", "The first browser and web server are developed."],
      ["1991", "Web goes public", "The first website becomes available to others."],
      ["1993", "Mosaic browser", "The Mosaic browser helps make the Web easier to use."],
      ["1990s", "Static websites", "Simple informational websites become more common."],
      ["Early 2000s", "Interactive Web grows", "More dynamic and participatory websites begin to expand."]
    ]
  },

  "web-2": {
    title: "Web 2.0",
    category: "Web Evolution",
    intro: "Learn about the interactive Web where users create content, share ideas and connect through online platforms.",
    definition: "Web 2.0 describes the more interactive stage of the Web, where users can create, share and collaborate through websites and applications.",
    icon: "🤝",
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1500&q=85",
    searchQuery: "Web 2.0 social media online collaboration blogging",
    wikiTitle: "Web_2.0",
    history: "The term Web 2.0 became popular in the early 2000s. Websites increasingly allowed users to publish content, comment and interact.",
    present: "Social media, video-sharing websites, blogs, online collaboration tools and interactive web applications are examples of Web 2.0.",
    future: "Web 2.0 ideas continue to influence online communities, creator platforms and collaborative digital services.",
    fact: "In Web 2.0, users are not only readers; they can also become content creators and contributors.",
    quote: "The interactive Web gives users a voice, not just a page to read.",
    keys: [
      ["💬", "User Interaction", "Users can comment, react and communicate online."],
      ["📱", "Social Media", "Platforms allow people to share content and connect."],
      ["✍️", "User-Generated Content", "Users publish posts, photos, videos and reviews."],
      ["🤝", "Collaboration", "People can work together using online tools."],
      ["☁️", "Web Applications", "Interactive services run through web browsers."],
      ["🔄", "Dynamic Content", "Pages can update based on user actions and data."]
    ],
    timeline: [
      ["Early 2000s", "Web 2.0 term grows", "The term becomes popular for interactive web services."],
      ["2003", "Social platforms expand", "Online communities and social networking services grow."],
      ["2004", "Interactive services", "Blogs and user-focused web platforms become more popular."],
      ["2005", "Video sharing grows", "Online video platforms help users publish and share media."],
      ["2010s", "Mobile social Web", "Smartphones make interactive platforms part of daily life."],
      ["2020s", "Creator economy", "Live content, communities and creator platforms continue to grow."]
    ]
  },

  "web-3": {
    title: "Web 3.0",
    category: "Web Evolution",
    intro: "Explore ideas behind a more decentralized and intelligent Web, including blockchain and user-controlled digital services.",
    definition: "Web 3.0 is a broad term for an evolving vision of the Web that often includes decentralization, blockchain and greater user control over digital identity and data.",
    icon: "⛓️",
    heroImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1500&q=85",
    searchQuery: "Web3 blockchain decentralized internet technology",
    wikiTitle: "Web3",
    history: "The idea of a Semantic Web was discussed by Tim Berners-Lee. The term Web3 later became associated with decentralized technologies and blockchain-based services.",
    present: "Web3 projects explore blockchain, decentralized applications, digital identity, smart contracts and user-controlled digital assets.",
    future: "Web3 may develop through better usability, interoperability and new approaches to digital ownership. Its adoption and impact remain evolving and debated.",
    fact: "Web3 is not one single technology. It is a broad collection of ideas and projects, and its meaning can vary by context.",
    quote: "The next Web asks how users can have more control over digital services.",
    keys: [
      ["⛓️", "Blockchain", "A distributed digital ledger that records transactions."],
      ["🔗", "Decentralization", "Services can operate across distributed networks instead of one central authority."],
      ["📜", "Smart Contracts", "Programs on a blockchain that execute rules when conditions are met."],
      ["🪪", "Digital Identity", "Tools and systems for representing identity online."],
      ["🌍", "DApps", "Decentralized applications interact with blockchain networks."],
      ["🔐", "User Ownership", "Some Web3 systems aim to give users more control over digital assets."]
    ],
    timeline: [
      ["1990s", "Semantic Web vision", "Ideas for making Web data more understandable to machines develop."],
      ["2001", "Semantic Web explained", "The Semantic Web vision receives wider discussion."],
      ["2009", "Bitcoin launches", "Bitcoin introduces a widely known blockchain-based digital currency."],
      ["2015", "Ethereum launches", "Ethereum enables programmable smart contracts."],
      ["2020s", "Web3 grows", "Decentralized applications and blockchain projects receive attention."],
      ["Today", "Ongoing development", "Web3 continues to develop, with opportunities and challenges."]
    ]
  }
};


/* =========================================
   ELEMENTS AND PAGE ROUTING
========================================= */

const $ = (selector) => document.querySelector(selector);

const params = new URLSearchParams(window.location.search);
const topicKey = params.get("topic");
const topic = topicKey ? TOPICS[topicKey] : null;

const imageGallery = $("#imageGallery");
const loadMoreBtn = $("#loadMoreBtn");
const galleryStatus = $("#galleryStatus");

let imageContinue = null;
let isLoading = false;
const shownImages = new Set();

const STORAGE_FAVOURITES = "webverse:favorites";
const STORAGE_RECENT = "webverse:recent";

function showTopicError(message) {
  const main = document.querySelector("main");

  if (main) {
    main.innerHTML = `
      <div class="topic-error">
        <h2>Topic not found</h2>
        <p>${message}</p>
        <p><a href="index.html">Return to WebVerse Home</a></p>
      </div>
    `;
  }

  document.title = "Topic Not Found | WebVerse";
}

if (!topic) {
  showTopicError("Please open a valid topic from the WebVerse Home page.");
} else {
  initializeTopic();
}


/* =========================================
   LOAD TOPIC CONTENT
========================================= */

function initializeTopic() {
  document.title = `${topic.title} | WebVerse`;

  setText("#topicCategory", topic.category);
  setText("#topicTitle", topic.title);
  setText("#topicIntro", topic.intro);
  setText("#breadcrumbTopic", topic.title);
  setText("#topicName", topic.title);
  setText("#topicDefinition", topic.definition);
  setText("#historyText", topic.history);
  setText("#presentText", topic.present);
  setText("#futureText", topic.future);
  setText("#factTitle", `${topic.icon} Did You Know?`);
  setText("#topicFact", topic.fact);
  setText("#exploreYear", new Date().getFullYear());

  const iconElement = $("#overviewIcon");
  if (iconElement) iconElement.textContent = topic.icon;

  const heroImage = $("#topicHeroImage");
  if (heroImage) {
    heroImage.src = topic.heroImage;
    heroImage.alt = `${topic.title} illustration`;
  }

  renderKeyConcepts();
  renderTopicTimeline();
  renderQuote();
  addRecentTopic();
  renderSavedImages();

  loadWikipediaSummary();
  loadImages(true);

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => loadImages(false));
  }

  const topButton = $("#exploreTop");
  if (topButton) {
    topButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

function setText(selector, value) {
  const element = $(selector);
  if (element) element.textContent = value;
}


/* =========================================
   KEY CONCEPTS
========================================= */

function renderKeyConcepts() {
  const container = $("#keyGrid");
  if (!container) return;

  container.replaceChildren();

  topic.keys.forEach(([icon, title, description]) => {
    const card = document.createElement("article");
    card.className = "key-card reveal";

    const symbol = document.createElement("div");
    symbol.className = "key-icon";
    symbol.textContent = icon;

    const heading = document.createElement("h3");
    heading.textContent = title;

    const paragraph = document.createElement("p");
    paragraph.textContent = description;

    card.append(symbol, heading, paragraph);
    container.appendChild(card);
  });
}


/* =========================================
   TOPIC TIMELINE
========================================= */

function renderTopicTimeline() {
  const container = $("#topicTimeline");
  if (!container) return;

  container.replaceChildren();

  topic.timeline.forEach(([year, title, description]) => {
    const item = document.createElement("article");
    item.className = "timeline-item reveal";

    const yearElement = document.createElement("div");
    yearElement.className = "timeline-year";
    yearElement.textContent = year;

    const content = document.createElement("div");

    const heading = document.createElement("h3");
    heading.textContent = title;

    const paragraph = document.createElement("p");
    paragraph.textContent = description;

    content.append(heading, paragraph);
    item.append(yearElement, content);
    container.appendChild(item);
  });
}


/* =========================================
   TOPIC QUOTE
========================================= */

function renderQuote() {
  const factCard = document.querySelector(".fact-card");
  if (!factCard || factCard.querySelector(".topic-quote")) return;

  const quote = document.createElement("blockquote");
  quote.className = "topic-quote";
  quote.textContent = `“${topic.quote}”`;

  factCard.appendChild(quote);
}


/* =========================================
   WIKIMEDIA COMMONS IMAGE API
========================================= */

async function loadImages(reset = false) {
  if (isLoading || !imageGallery) return;

  isLoading = true;

  if (loadMoreBtn) {
    loadMoreBtn.disabled = true;
    loadMoreBtn.textContent = "Loading...";
  }

  if (galleryStatus) {
    galleryStatus.textContent = reset
      ? "Searching topic-related images..."
      : "Loading more images...";
  }

  if (reset) {
    imageContinue = null;
    shownImages.clear();
    imageGallery.replaceChildren();
  }

  try {
    const url = new URL("https://commons.wikimedia.org/w/api.php");

    const query = {
      action: "query",
      generator: "search",
      gsrsearch: topic.searchQuery,
      gsrnamespace: "6",
      gsrlimit: "12",
      prop: "imageinfo",
      iiprop: "url|extmetadata",
      iiurlwidth: "800",
      format: "json",
      origin: "*"
    };

    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });

    if (imageContinue) {
      Object.entries(imageContinue).forEach(([key, value]) => {
        url.searchParams.set(key, value);
      });
    }

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error("Image service is temporarily unavailable.");
    }

    const data = await response.json();
    const pages = Object.values(data.query?.pages || {});

    let addedCount = 0;

    pages.forEach((page) => {
      const info = page.imageinfo?.[0];
      if (!info) return;

      const imageUrl = info.thumburl || info.url;
      if (!imageUrl || shownImages.has(imageUrl)) return;

      shownImages.add(imageUrl);
      renderImageCard(page, info, imageUrl);
      addedCount++;
    });

    imageContinue = data.continue || null;

    if (galleryStatus) {
      if (addedCount > 0) {
        galleryStatus.textContent =
          `${shownImages.size} images loaded. Images are provided by Wikimedia Commons.`;
      } else if (shownImages.size === 0) {
        galleryStatus.textContent =
          "No matching images found. Try again later.";
      } else {
        galleryStatus.textContent =
          "No additional matching images found.";
      }
    }

    if (loadMoreBtn) {
      loadMoreBtn.hidden = !imageContinue;
    }

  } catch (error) {
    console.error("Wikimedia image error:", error);

    if (galleryStatus) {
      galleryStatus.textContent =
        shownImages.size > 0
          ? "Some images could not be loaded. You can still view the images already found."
          : "Images could not be loaded right now. Please check your Internet connection and try again.";
    }

    if (loadMoreBtn) {
      loadMoreBtn.hidden = true;
    }

  } finally {
    isLoading = false;

    if (loadMoreBtn) {
      loadMoreBtn.disabled = false;
      if (imageContinue) {
        loadMoreBtn.textContent = "Load More Images";
      }
    }
  }
}


/* =========================================
   CREATE IMAGE CARDS
========================================= */

function renderImageCard(page, info, imageUrl) {
  const card = document.createElement("article");
  card.className = "gallery-card reveal";

  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = page.title || topic.title;
  image.loading = "lazy";

  const imageLink = info.descriptionurl || info.url;

  const details = document.createElement("div");
  details.className = "gallery-info";

  const title = document.createElement("h3");
  title.textContent = (page.title || "Wikimedia image")
    .replace(/^File:/, "")
    .replaceAll("_", " ");

  const metadata = info.extmetadata || {};

  const artist = cleanMetadata(metadata.Artist?.value) || "Creator not listed";
  const license = cleanMetadata(metadata.LicenseShortName?.value) || "License not listed";

  const credit = document.createElement("p");
  credit.className = "gallery-credit";
  credit.textContent = `Creator: ${artist} | License: ${license}`;

  const actions = document.createElement("div");
  actions.className = "gallery-actions";

  const saveButton = document.createElement("button");
  saveButton.type = "button";
  saveButton.textContent = isImageSaved(imageUrl) ? "♥️ Saved" : "♡ Save";

  saveButton.addEventListener("click", () => {
    const saved = toggleSavedImage({
      url: imageUrl,
      title: title.textContent,
      source: imageLink || imageUrl,
      artist,
      license
    });

    saveButton.textContent = saved ? "♥️ Saved" : "♡ Save";
    renderSavedImages();
  });

  const sourceLink = document.createElement("a");
  sourceLink.href = imageLink || imageUrl;
  sourceLink.target = "_blank";
  sourceLink.rel = "noopener noreferrer";
  sourceLink.textContent = "Source ↗️";

  actions.append(saveButton, sourceLink);
  details.append(title, credit, actions);
  card.append(image, details);

  imageGallery.appendChild(card);
}

function cleanMetadata(value) {
  if (!value) return "";

  const temporary = document.createElement("div");
  temporary.textContent = value;

  return temporary.textContent.trim().slice(0, 180);
}


/* =========================================
   SAVE / REMOVE IMAGES
========================================= */

function getSavedImages() {
  try {
    const data = JSON.parse(
      localStorage.getItem(STORAGE_FAVOURITES) || "[]"
    );

    return Array.isArray(data)
      ? data.filter((item) => item && typeof item === "object" && item.url)
      : [];
  } catch {
    return [];
  }
}

function isImageSaved(url) {
  return getSavedImages().some((item) => item.url === url);
}

function toggleSavedImage(image) {
  const saved = getSavedImages();
  const exists = saved.some((item) => item.url === image.url);

  const updated = exists
    ? saved.filter((item) => item.url !== image.url)
    : [image, ...saved].slice(0, 100);

  try {
    localStorage.setItem(STORAGE_FAVOURITES, JSON.stringify(updated));
  } catch (error) {
    console.error("Could not save image:", error);
    alert("Image could not be saved. Browser storage may be full or disabled.");
    return exists;
  }

  return !exists;
}

function renderSavedImages() {
  const container = $("#savedGallery");
  if (!container) return;

  container.replaceChildren();

  const saved = getSavedImages();

  if (saved.length === 0) {
    const message = document.createElement("p");
    message.className = "empty-message";
    message.textContent = "No saved images yet. Save an image from the gallery to see it here.";
    container.appendChild(message);
    return;
  }

  saved.forEach((item) => {
    const card = document.createElement("article");
    card.className = "gallery-card";

    const image = document.createElement("img");
    image.src = item.url;
    image.alt = item.title || "Saved image";
    image.loading = "lazy";

    const details = document.createElement("div");
    details.className = "gallery-info";

    const heading = document.createElement("h3");
    heading.textContent = item.title || "Saved image";

    const credit = document.createElement("p");
    credit.className = "gallery-credit";
    credit.textContent =
      `Creator: ${item.artist || "Not listed"} | License: ${item.license || "Not listed"}`;

    const actions = document.createElement("div");
    actions.className = "gallery-actions";

    const source = document.createElement("a");
    source.href = item.source || item.url;
    source.target = "_blank";
    source.rel = "noopener noreferrer";
    source.textContent = "Source ↗️";

    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "Remove";

    remove.addEventListener("click", () => {
      const updated = getSavedImages().filter(
        (savedItem) => savedItem.url !== item.url
      );

      try {
        localStorage.setItem(STORAGE_FAVOURITES, JSON.stringify(updated));
        renderSavedImages();
        refreshGallerySaveButtons();
      } catch (error) {
        console.error("Could not update saved images:", error);
      }
    });

    actions.append(source, remove);
    details.append(heading, credit, actions);
    card.append(image, details);

    container.appendChild(card);
  });
}

function refreshGallerySaveButtons() {
  if (!imageGallery) return;

  imageGallery.querySelectorAll(".gallery-card").forEach((card) => {
    const image = card.querySelector("img");
    const button = card.querySelector("button");

    if (image && button) {
      button.textContent = isImageSaved(image.src)
        ? "♥️ Saved"
        : "♡ Save";
    }
  });
}


/* =========================================
   RECENTLY EXPLORED TOPICS
========================================= */

function getRecentTopics() {
  try {
    const data = JSON.parse(
      localStorage.getItem(STORAGE_RECENT) || "[]"
    );

    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function addRecentTopic() {
  const recent = getRecentTopics();

  const updated = [
    { key: topicKey, title: topic.title },
    ...recent.filter((item) => item && item.key !== topicKey)
  ].slice(0, 8);

  try {
    localStorage.setItem(STORAGE_RECENT, JSON.stringify(updated));
  } catch (error) {
    console.error("Could not save recent topics:", error);
  }

  renderRecentTopics();
}

function renderRecentTopics() {
  const container = $("#recentList");
  if (!container) return;

  container.replaceChildren();

  const recent = getRecentTopics();

  if (recent.length === 0) {
    const message = document.createElement("p");
    message.className = "empty-message";
    message.textContent = "No recently explored topics.";
    container.appendChild(message);
    return;
  }

  recent.forEach((item) => {
    if (!item || !TOPICS[item.key]) return;

    const link = document.createElement("a");
    link.className = "recent-item";
    link.href = `explore.html?topic=${encodeURIComponent(item.key)}`;
    link.textContent = item.title;

    container.appendChild(link);
  });
}


/* =========================================
   WIKIPEDIA SUMMARY API
========================================= */

async function loadWikipediaSummary() {
  const summaryElement = $("#wikiSummary");
  const readMoreLink = $("#readMoreLink");

  if (!summaryElement) return;

  summaryElement.textContent = "Loading additional information...";

  const apiUrl =
    "https://en.wikipedia.org/api/rest_v1/page/summary/" +
    encodeURIComponent(topic.wikiTitle);

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Wikipedia summary unavailable.");
    }

    const data = await response.json();

    summaryElement.textContent =
      data.extract || "No additional summary is available right now.";

    if (readMoreLink && data.content_urls?.desktop?.page) {
      readMoreLink.href = data.content_urls.desktop.page;
      readMoreLink.hidden = false;
      readMoreLink.textContent = "Read more on Wikipedia ↗️";
      readMoreLink.target = "_blank";
      readMoreLink.rel = "noopener noreferrer";
    }

  } catch (error) {
    console.error("Wikipedia error:", error);

    summaryElement.textContent =
      "Additional information is temporarily unavailable. You can still explore the topic using the sections above.";

    if (readMoreLink) {
      readMoreLink.href =
        "https://en.wikipedia.org/wiki/" +
        encodeURIComponent(topic.wikiTitle);

      readMoreLink.hidden = false;
      readMoreLink.textContent = "Open Wikipedia ↗️";
      readMoreLink.target = "_blank";
      readMoreLink.rel = "noopener noreferrer";
    }
  }
}


/* =========================================
   END OF WEBVERSE EXPLORE SCRIPT
========================================= */