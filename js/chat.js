/*=============== CHAT WIDGET LOGIC ===============*/

// Initial suggestion chips
const SUGGESTIONS = [
    'Skills',
    'Projects',
    'Resume',
    'Contact',
    'Education',
    'Experience',
    'GitHub',
    'LinkedIn',
    'Coding Profiles'
];

// Predefined replies data helper
const getTimeBasedGreeting = () => {
    const hr = new Date().getHours();
    if (hr < 12) return "Good morning";
    if (hr < 17) return "Good afternoon";
    return "Good evening";
};

const getBotResponse = (message) => {
    const cleanMsg = message.toLowerCase().trim();
    
    // Skills
    if (cleanMsg.includes('skill') || cleanMsg.includes('tech stack') || cleanMsg.includes('technologies') || cleanMsg.includes('languages') || cleanMsg.includes('frameworks') || cleanMsg.includes('tool')) {
        return {
            text: "Here are Shaurya's technical skills:<br><ul><li>• <b>Languages:</b> JavaScript, Java, HTML, CSS</li><li>• <b>Frameworks/Libraries:</b> React, Node.js, Express, MongoDB (MERN Stack)</li><li>• <b>Tools:</b> Git, GitHub, VS Code</li></ul>",
            action: { type: 'scroll', target: 'about' }
        };
    }
    
    // Projects
    if (cleanMsg.includes('project') || cleanMsg.includes('work') || cleanMsg.includes('portfolio') || cleanMsg.includes('featured')) {
        return {
            text: "Shaurya has built some amazing projects, including:<br><br>1. <b>Video Streaming Platform</b>: Real-time video playback and user auth.<br>2. <b>ChatBot Application</b>: AI chatbot with NLP.<br>3. <b>Personal Portfolio</b>: Responsive showcase website.<br>4. <b>Trading Platform</b>: Real-time stock trading and data visualization.<br><br>Click below to view them!",
            action: { type: 'scroll', target: 'projects' },
            buttons: [
                { text: "View Projects Section", action: "scroll", target: "projects" }
            ]
        };
    }
    
    // Resume / CV
    if (cleanMsg.includes('resume') || cleanMsg.includes('cv')) {
        return {
            text: "You can view Shaurya's education and experience details in the Resume section, or download the CV below:",
            action: { type: 'scroll', target: 'resume' },
            buttons: [
                { text: "View Resume Section", action: "scroll", target: "resume" },
                { text: "Download CV", action: "link", url: "#", download: true }
            ]
        };
    }
    
    // Contact / Email
    if (cleanMsg.includes('contact') || cleanMsg.includes('email') || cleanMsg.includes('reach you') || cleanMsg.includes('phone') || cleanMsg.includes('message') || cleanMsg.includes('address')) {
        return {
            text: "You can reach Shaurya through:<br>📧 <b>Email:</b> shauryapratapsinghs1210@gmail.com<br>📞 <b>Phone:</b> +91 9555774546<br>📍 <b>Location:</b> Lucknow, India<br><br>You can also fill out the contact form directly on the page.",
            action: { type: 'scroll', target: 'contact' },
            buttons: [
                { text: "Go to Contact Form", action: "scroll", target: "contact" }
            ]
        };
    }
    
    // Education
    if (cleanMsg.includes('education') || cleanMsg.includes('college') || cleanMsg.includes('university') || cleanMsg.includes('degree') || cleanMsg.includes('school') || cleanMsg.includes('hsc') || cleanMsg.includes('study')) {
        return {
            text: "Here is Shaurya's educational background:<br><br>🎓 <b>B.Tech in Computer Science and Engineering</b><br>Quantum University (2023 - 2027)<br>Focusing on AI and Web Development.<br><br>🏫 <b>Higher Secondary Certificate (HSC)</b><br>Rani Laxmi Bai Memorial School (2021 - 2022)<br>Science Stream.",
            action: { type: 'scroll', target: 'resume' }
        };
    }
    
    // Experience
    if (cleanMsg.includes('experience') || cleanMsg.includes('internship') || cleanMsg.includes('work experience') || cleanMsg.includes('job') || cleanMsg.includes('role')) {
        return {
            text: "Here is Shaurya's professional experience:<br><br>💼 <b>Web Developer</b> @ NebulaTech (2025 - Present)<br>Building scalable and efficient web applications using modern technologies.<br><br>🎨 <b>Web Designer</b> @ Framer (2026 - Present)<br>Developing visually stunning and user-friendly web interfaces.",
            action: { type: 'scroll', target: 'resume' }
        };
    }
    
    // GitHub
    if (cleanMsg.includes('github') || cleanMsg.includes('git link') || cleanMsg.includes('code repositories')) {
        return {
            text: "Visit Shaurya's GitHub profile to check out repositories and contributions:",
            buttons: [
                { text: "Open GitHub Profile", action: "link", url: "https://github.com/shauryapratap1210" }
            ]
        };
    }
    
    // LinkedIn
    if (cleanMsg.includes('linkedin') || cleanMsg.includes('professional network')) {
        return {
            text: "Connect with Shaurya on LinkedIn:",
            buttons: [
                { text: "Open LinkedIn Profile", action: "link", url: "https://www.linkedin.com/in/shaurya-pratap-singh-a35a84363/" }
            ]
        };
    }
    
    // Coding Profiles
    if (cleanMsg.includes('coding profile') || cleanMsg.includes('leetcode') || cleanMsg.includes('geeksforgeeks') || cleanMsg.includes('gfg') || cleanMsg.includes('competitive programming') || cleanMsg.includes('solved') || cleanMsg.includes('rating') || cleanMsg.includes('score')) {
        let leetSolved = 40;
        let leetRating = 500;
        let gfgScore = 166;
        let gfgSolved = 79;
        
        // Dynamic fetch fallback checks
        if (typeof codingProfiles !== 'undefined') {
            const lc = codingProfiles.find(p => p.platform === 'LeetCode');
            const gfg = codingProfiles.find(p => p.platform === 'GeeksforGeeks');
            if (lc) {
                const s1 = lc.stats.find(s => s.label === 'Problems Solved');
                const s2 = lc.stats.find(s => s.label === 'Contest Rating');
                if (s1) leetSolved = s1.value;
                if (s2) leetRating = s2.value;
            }
            if (gfg) {
                const s1 = gfg.stats.find(s => s.label === 'Coding Score');
                const s2 = gfg.stats.find(s => s.label === 'Problems Solved');
                if (s1) gfgScore = s1.value;
                if (s2) gfgSolved = s2.value;
            }
        }
        
        return {
            text: `Here are Shaurya's coding profile stats:<br><br>🚀 <b>LeetCode:</b><br>• Problems Solved: ${leetSolved}+<br>• Contest Rating: ${leetRating}<br><br>⭐ <b>GeeksforGeeks:</b><br>• Coding Score: ${gfgScore}<br>• Problems Solved: ${gfgSolved}+`,
            action: { type: 'scroll', target: 'profiles' },
            buttons: [
                { text: "View LeetCode Profile", action: "link", url: "https://leetcode.com/u/shauryapratapsingh1210/" },
                { text: "View GeeksforGeeks Profile", action: "link", url: "https://www.geeksforgeeks.org/user/shauryapratapsingh1210/" }
            ]
        };
    }
    
    // Greetings
    if (cleanMsg.includes('hi') || cleanMsg.includes('hello') || cleanMsg.includes('hey') || cleanMsg.includes('greet') || cleanMsg.includes('morning') || cleanMsg.includes('afternoon') || cleanMsg.includes('evening') || cleanMsg.includes('how are you')) {
        const greeting = getTimeBasedGreeting();
        return {
            text: `${greeting}! 👋 I'm Shaurya's Portfolio Assistant. How can I help you today?`
        };
    }
    
    // Default reply
    return {
        text: "I'm not sure I understand that. Try asking about skills, projects, resume, education, experience, coding profiles, or contact details!"
    };
};

// UI Handling class
class PortfolioChat {
    constructor() {
        this.widget = document.getElementById('chat-widget');
        this.toggleBtn = document.getElementById('chat-toggle-btn');
        this.closeBtn = document.getElementById('chat-close-btn');
        this.clearBtn = document.getElementById('chat-clear-btn');
        this.window = document.getElementById('chat-window');
        this.messagesContainer = document.getElementById('chat-messages');
        this.input = document.getElementById('chat-input');
        this.sendBtn = document.getElementById('chat-send-btn');
        this.typingIndicator = document.getElementById('chat-typing');
        this.suggestionsContainer = document.getElementById('chat-suggestions');
        this.badge = document.getElementById('chat-badge');
        
        this.isOpen = false;
        this.messages = [];
        
        this.init();
    }
    
    init() {
        // Load messages from localStorage
        const stored = localStorage.getItem('portfolio_chat_messages');
        if (stored) {
            this.messages = JSON.parse(stored);
            this.renderMessages();
            // Clear badge if history exists (implies chat was opened before)
            if (this.badge) this.badge.style.display = 'none';
        } else {
            // Setup welcome greeting
            const greeting = getTimeBasedGreeting();
            this.addBotMessage(`${greeting}! 👋 I'm Shaurya's Portfolio Assistant. Ask me about skills, projects, resume, education, experience, coding profiles, or contact information.`);
        }
        
        // Render chips
        this.renderSuggestions();
        
        // Event listeners
        this.toggleBtn.addEventListener('click', () => this.toggleChat());
        this.closeBtn.addEventListener('click', () => this.closeChat());
        this.clearBtn.addEventListener('click', () => this.clearChat());
        
        this.sendBtn.addEventListener('click', () => this.handleSend());
        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') this.handleSend();
        });
        
        // Floating notification banner trigger after delay if not open
        setTimeout(() => {
            if (!this.isOpen && this.badge && !localStorage.getItem('portfolio_chat_messages')) {
                this.badge.style.display = 'block';
            }
        }, 5000);
    }
    
    toggleChat() {
        if (this.isOpen) {
            this.closeChat();
        } else {
            this.openChat();
        }
    }
    
    openChat() {
        this.isOpen = true;
        this.window.classList.add('active');
        if (this.badge) this.badge.style.display = 'none';
        this.input.focus();
        this.scrollToBottom();
    }
    
    closeChat() {
        this.isOpen = false;
        this.window.classList.remove('active');
    }
    
    clearChat() {
        if (confirm("Are you sure you want to clear your chat history?")) {
            this.messages = [];
            localStorage.removeItem('portfolio_chat_messages');
            this.messagesContainer.innerHTML = '';
            const greeting = getTimeBasedGreeting();
            this.addBotMessage(`${greeting}! 👋 I'm Shaurya's Portfolio Assistant. Ask me about skills, projects, resume, education, experience, coding profiles, or contact information.`);
        }
    }
    
    scrollToBottom() {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
    
    addMessage(sender, text, data = {}) {
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const message = { sender, text, time, data };
        this.messages.push(message);
        this.saveMessages();
        this.renderMessageHTML(message);
        this.scrollToBottom();
    }
    
    addBotMessage(text, data = {}) {
        this.addMessage('bot', text, data);
    }
    
    addUserMessage(text) {
        this.addMessage('user', text);
    }
    
    saveMessages() {
        localStorage.setItem('portfolio_chat_messages', JSON.stringify(this.messages));
    }
    
    renderMessages() {
        this.messagesContainer.innerHTML = '';
        this.messages.forEach(msg => this.renderMessageHTML(msg));
        this.scrollToBottom();
    }
    
    renderMessageHTML(msg) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message message--${msg.sender}`;
        
        let bubbleContent = `<div class="message__bubble">${msg.text}`;
        
        // Render custom buttons inside bot message bubbles
        if (msg.sender === 'bot' && msg.data && msg.data.buttons) {
            bubbleContent += `<div class="chat__response-actions">`;
            msg.data.buttons.forEach(btn => {
                if (btn.action === 'scroll') {
                    bubbleContent += `<button class="chat__response-btn chat__response-btn--ghost" data-target="${btn.target}">${btn.text}</button>`;
                } else if (btn.action === 'link') {
                    bubbleContent += `<a href="${btn.url}" target="_blank" class="chat__response-btn" ${btn.download ? 'download' : ''}>${btn.text} <i class="ri-arrow-right-up-line"></i></a>`;
                }
            });
            bubbleContent += `</div>`;
        }
        
        bubbleContent += `</div>`;
        bubbleContent += `<span class="message__time">${msg.time}</span>`;
        
        messageDiv.innerHTML = bubbleContent;
        this.messagesContainer.appendChild(messageDiv);
        
        // Hook scroll action buttons inside bubbles
        const scrollBtns = messageDiv.querySelectorAll('button[data-target]');
        scrollBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.scrollToSection(btn.getAttribute('data-target'));
                this.closeChat();
            });
        });
    }
    
    renderSuggestions() {
        this.suggestionsContainer.innerHTML = '';
        SUGGESTIONS.forEach(s => {
            const chip = document.createElement('button');
            chip.className = 'chat__chip';
            chip.innerText = s;
            chip.addEventListener('click', () => {
                this.handleQuery(s);
            });
            this.suggestionsContainer.appendChild(chip);
        });
    }
    
    scrollToSection(id) {
        const el = document.getElementById(id);
        if (el) {
            // Use standard custom offset mapping since headers are sticky
            const headerOffset = 80;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }
    
    handleSend() {
        const text = this.input.value.trim();
        if (!text) return;
        
        this.input.value = '';
        this.handleQuery(text);
    }
    
    handleQuery(text) {
        this.addUserMessage(text);
        
        // Show typing indicator
        this.typingIndicator.classList.add('active');
        this.scrollToBottom();
        
        // Bot delay
        setTimeout(() => {
            this.typingIndicator.classList.remove('active');
            const response = getBotResponse(text);
            this.addBotMessage(response.text, { buttons: response.buttons });
            
            // Execute dynamic page action triggers
            if (response.action && response.action.type === 'scroll') {
                this.scrollToSection(response.action.target);
                // On mobile, close chat automatically on action for better usability
                if (window.innerWidth <= 450) {
                    this.closeChat();
                }
            }
        }, 1000);
    }
}

// Instantiate on startup
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioChat = new PortfolioChat();
});
