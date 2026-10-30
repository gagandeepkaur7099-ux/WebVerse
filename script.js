/* ==================================
   WEBVERSE - MAIN JAVASCRIPT
================================== */


// 1. INTERNET HISTORY TIMELINE

const historyData = [

    {
        year: 1970,
        title: "Early Network Development",
        description: "Researchers continued developing computer networking ideas that helped prepare the foundation for the modern internet."
    },

    {
        year: 1971,
        title: "First Network Email",
        description: "Ray Tomlinson developed network email and introduced the use of the @ symbol in email addresses."
    },

    {
        year: 1972,
        title: "ARPANET Demonstration",
        description: "ARPANET was publicly demonstrated, showing how computers could communicate over a network."
    },

    {
        year: 1973,
        title: "International Connections",
        description: "ARPANET began connecting with computers outside the United States, helping networking become international."
    },

    {
        year: 1974,
        title: "TCP Development",
        description: "Vint Cerf and Bob Kahn published important ideas for Transmission Control Protocol, helping shape internet communication."
    },

    {
        year: 1975,
        title: "Network Growth",
        description: "ARPANET expanded its connected computers and continued development of network communication."
    },

    {
        year: 1976,
        title: "Ethernet Research",
        description: "Ethernet technology was developed at Xerox PARC, becoming important for connecting devices in local networks."
    },

    {
        year: 1977,
        title: "Internet Demonstration",
        description: "A major demonstration showed communication across different packet-switched networks."
    },

    {
        year: 1978,
        title: "TCP and IP Separation",
        description: "The TCP design evolved toward separate communication and internet addressing functions."
    },

    {
        year: 1979,
        title: "Usenet Created",
        description: "Usenet introduced a distributed discussion system where users could exchange messages in newsgroups."
    },

    {
        year: 1980,
        title: "Networking Expansion",
        description: "Computer networking research and communication systems continued to expand."
    },

    {
        year: 1981,
        title: "IP Standard Published",
        description: "The Internet Protocol specification was published, defining how data packets could be addressed and delivered."
    },

    {
        year: 1982,
        title: "TCP/IP Standardization",
        description: "TCP/IP continued to develop as the common communication standard for connected networks."
    },

    {
        year: 1983,
        title: "Internet TCP/IP Transition",
        description: "ARPANET officially switched to TCP/IP, an important milestone in the development of the modern internet."
    },

    {
        year: 1984,
        title: "Domain Name System",
        description: "The Domain Name System helped people use readable domain names instead of remembering numerical IP addresses."
    },

    {
        year: 1985,
        title: "Domain Names Grow",
        description: "The first .com domain name was registered, beginning an important part of the commercial internet."
    },

    {
        year: 1986,
        title: "NSFNET Expansion",
        description: "NSFNET helped connect universities and research institutions, supporting wider internet growth."
    },

    {
        year: 1987,
        title: "Internet Growth",
        description: "The number of connected hosts and networks continued to increase."
    },

    {
        year: 1988,
        title: "Internet Security Awareness",
        description: "The Morris Worm highlighted the importance of computer and network security."
    },

    {
        year: 1989,
        title: "World Wide Web Proposed",
        description: "Tim Berners-Lee proposed the World Wide Web at CERN, introducing a new way to share linked information."
    },

    {
        year: 1990,
        title: "First Web Server",
        description: "Tim Berners-Lee developed the first web server, web browser and early web technologies."
    },

    {
        year: 1991,
        title: "First Website Goes Live",
        description: "The first website became publicly available, explaining the World Wide Web project."
    },

    {
        year: 1992,
        title: "Internet Becomes More Popular",
        description: "Internet access and online information services continued growing among universities and institutions."
    },

    {
        year: 1993,
        title: "Mosaic Browser",
        description: "The Mosaic web browser made browsing graphical websites easier for more people."
    },

    {
        year: 1994,
        title: "Netscape and Web Growth",
        description: "Netscape Navigator helped popularize web browsing, while online commercial services began expanding."
    },

    {
        year: 1995,
        title: "Commercial Internet Era",
        description: "The internet became increasingly commercial, with online shopping, web businesses and new services."
    },

    {
        year: 1996,
        title: "Search and Web Development",
        description: "Search engines and web technologies developed further, helping users find online information."
    },

    {
        year: 1997,
        title: "Wi-Fi Standard Introduced",
        description: "The IEEE 802.11 wireless networking standard was introduced, helping develop Wi-Fi technology."
    },

    {
        year: 1998,
        title: "Google Founded",
        description: "Google was founded and later became one of the world's most widely used search engines."
    },

    {
        year: 1999,
        title: "Wireless and Broadband Growth",
        description: "Wi-Fi technology and faster internet connections continued developing."
    },

    {
        year: 2000,
        title: "Internet Expansion",
        description: "Websites, online services and internet businesses expanded rapidly around the world."
    },

    {
        year: 2001,
        title: "Wikipedia Launched",
        description: "Wikipedia was launched as a collaborative online encyclopedia."
    },

    {
        year: 2002,
        title: "Social Web Development",
        description: "Online communities and social networking services continued growing."
    },

    {
        year: 2003,
        title: "Modern Social Platforms",
        description: "New social networking platforms helped users communicate and share online content."
    },

    {
        year: 2004,
        title: "Web 2.0 Popularity",
        description: "Web 2.0 became a popular term for interactive websites, social platforms and user-generated content."
    },

    {
        year: 2005,
        title: "YouTube Launched",
        description: "YouTube was launched, changing how people shared and watched videos online."
    },

    {
        year: 2006,
        title: "Cloud Computing Growth",
        description: "Cloud computing services began growing, allowing users and organizations to access computing resources online."
    },

    {
        year: 2007,
        title: "Smartphone Revolution",
        description: "The introduction of the iPhone helped transform mobile browsing and digital experiences."
    },

    {
        year: 2008,
        title: "Android Platform",
        description: "The first commercial Android smartphone was released, expanding mobile internet access."
    },

    {
        year: 2009,
        title: "Blockchain Begins",
        description: "Bitcoin introduced blockchain as a decentralized digital transaction system."
    },

    {
        year: 2010,
        title: "Mobile Web Growth",
        description: "Smartphones and mobile applications became increasingly important ways to access the internet."
    },

    {
        year: 2011,
        title: "Cloud and Mobile Services",
        description: "Cloud-based services and mobile applications continued to change how people used technology."
    },

    {
        year: 2012,
        title: "Big Data and Cloud",
        description: "Big data technologies and cloud platforms became increasingly important for digital businesses."
    },

    {
        year: 2013,
        title: "Internet of Things Growth",
        description: "Connected devices and smart technology became more widely discussed and developed."
    },

    {
        year: 2014,
        title: "HTML5 Adoption",
        description: "HTML5 became a major standard for modern web content, supporting multimedia and interactive applications."
    },

    {
        year: 2015,
        title: "Progressive Web Apps",
        description: "Progressive Web Apps gained attention for combining website accessibility with app-like experiences."
    },

    {
        year: 2016,
        title: "Artificial Intelligence Growth",
        description: "AI technologies became increasingly common in digital services, automation and online platforms."
    },

    {
        year: 2017,
        title: "Cloud and AI Development",
        description: "Cloud computing, machine learning and connected technologies continued expanding."
    },

    {
        year: 2018,
        title: "Modern Web Security",
        description: "HTTPS adoption and stronger web security practices became increasingly important."
    },

    {
        year: 2019,
        title: "5G Network Launches",
        description: "Early commercial 5G networks began launching, promising faster mobile communication."
    },

    {
        year: 2020,
        title: "Digital Transformation",
        description: "Remote work, online education, video communication and digital services grew rapidly."
    },

    {
        year: 2021,
        title: "Web3 Interest",
        description: "Interest in blockchain-based applications, decentralized platforms and Web3 concepts increased."
    },

    {
        year: 2022,
        title: "Generative AI Growth",
        description: "Generative AI tools became widely accessible, changing how people create and interact with digital content."
    },

    {
        year: 2023,
        title: "AI-Powered Digital Experiences",
        description: "AI assistants and generative tools became more integrated into education, software and online services."
    },

    {
        year: 2024,
        title: "AI and Web Innovation",
        description: "Multimodal AI, advanced web applications and new digital experiences continued developing."
    },

    {
        year: 2025,
        title: "Connected Digital Ecosystems",
        description: "AI-powered applications, cloud platforms, connected devices and digital services continued evolving."
    },

    {
        year: 2026,
        title: "The Web Continues to Evolve",
        description: "The digital world continues to develop through AI, advanced connectivity, cybersecurity and emerging web technologies."
    }

];


// 2. DISPLAY TIMELINE

const timeline = document.getElementById("timeline");
const historySearch = document.getElementById("historySearch");
const historyCount = document.getElementById("historyCount");
const historyEmpty = document.getElementById("historyEmpty");


function displayTimeline(data) {

    if (!timeline) return;

    timeline.innerHTML = "";

    data.forEach((event, index) => {

        const item = document.createElement("article");

        item.className = "timeline-item reveal";

        item.innerHTML = `
            <div class="timeline-year">
                ${event.year}
            </div>

            <div class="timeline-content">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
            </div>
        `;

        timeline.appendChild(item);

    });

    if (historyCount) {
        historyCount.textContent =
            `${data.length} historical milestones shown`;
    }

    if (historyEmpty) {
        historyEmpty.hidden = data.length !== 0;
    }

    observeRevealElements();
}


// 3. HISTORY SEARCH

if (historySearch) {

    historySearch.addEventListener("input", function () {

        const searchText = this.value.toLowerCase().trim();

        const filteredData = historyData.filter(event => {

            return (
                String(event.year).includes(searchText) ||
                event.title.toLowerCase().includes(searchText) ||
                event.description.toLowerCase().includes(searchText)
            );

        });

        displayTimeline(filteredData);

    });

}


// 4. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");

            menuToggle.textContent = "☰";

        });

    });

}


// 5. BACK TO TOP BUTTON

const backToTop = document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener("scroll", () => {

        backToTop.classList.toggle(
            "show",
            window.scrollY > 450
        );

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// 6. SCROLL REVEAL ANIMATION

function observeRevealElements() {

    const elements = document.querySelectorAll(".reveal:not(.visible)");

    if (!("IntersectionObserver" in window)) {

        elements.forEach(element => {
            element.classList.add("visible");
        });

        return;
    }

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    currentObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    elements.forEach(element => {
        observer.observe(element);
    });

}


// 7. ADD REVEAL TO PAGE SECTIONS

document.querySelectorAll(
    ".intro-content, .section-heading, .evolution-card, .technology-card, .fact-box, .about-grid"
).forEach(element => {

    element.classList.add("reveal");

});


// 8. CURRENT YEAR

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// 9. START WEBVERSE

displayTimeline(historyData);

observeRevealElements();

console.log("WebVerse Home Page loaded successfully!");
console.log("Internet history timeline:", historyData.length, "events");