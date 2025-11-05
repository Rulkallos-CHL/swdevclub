const viewContainer = document.getElementById('view-container');
const navLinks = document.querySelectorAll('.nav-link');

// Utility function to generate content list items (Project Cards)
function generateListItem(title, description, imageUrl) {
    // Apply responsive classes directly in the template
    return `
        <div class="flex flex-col lg:flex-row items-start content-card mb-6 p-6">
            <!-- Image remains w-full on mobile, fixed size on large screens -->
            <img 
                src="${imageUrl}" 
                onerror="this.onerror=null;this.src='https://placehold.co/600x400/3d3d3d/ffffff?text=Image+Missing'" 
                alt="${title}" 
                class="rounded-lg object-cover w-full lg:w-64 h-40 lg:h-48 mb-4 lg:mb-0 lg:mr-6 border border-violet-500/30 cursor-pointer transition duration-300 hover:scale-[1.02]"
                onclick="showImageModal('${imageUrl}', '${title}')"
            >
            <div>
                <!-- Responsive Title: text-2xl on mobile, text-3xl on sm/desktop -->
                <h3 class="text-2xl sm:text-3xl font-semibold text-violet-400 mb-2">${title}</h3>
                <!-- Responsive Description: text-base on mobile, text-lg on sm/desktop -->
                <p class="text-base sm:text-lg text-gray-300">${description}</p>
            </div>
        </div>
    `;
}

// Utility function to generate update list items
function generateUpdateItem(title, description, date, type) {
    let typeColor = type === 'Policy' ? 'bg-red-500' : type === 'Event' ? 'bg-green-500' : 'bg-yellow-500';
    return `
        <div class="content-card mb-6 p-6">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <!-- Responsive Title: text-2xl on mobile, text-3xl on sm/desktop -->
                <h3 class="text-2xl sm:text-3xl font-semibold text-white mb-2 sm:mb-0">${title}</h3>
                <!-- Responsive Date: text-sm on mobile, text-base on sm/desktop -->
                <span class="text-sm sm:text-base text-gray-500 whitespace-nowrap">${date}</span>
            </div>
            <div class="flex items-start space-x-4">
                <!-- Responsive Type Tag: text-sm on mobile, text-lg on sm/desktop -->
                <span class="text-sm sm:text-lg font-medium ${typeColor} text-white px-3 py-1 rounded-full whitespace-nowrap">${type}</span>
                <!-- Responsive Description: text-base on mobile, text-lg on sm/desktop -->
                <p class="text-base sm:text-lg text-gray-300">${description}</p>
            </div>
        </div>
    `;
}
 
// Utility function to generate tool cards for the Portal
function generateToolCard(title, description, url, iconPath, iconDesc) {
    return `
        <a href="${url}" target="_blank" class="block content-card hover:bg-gray-800 transition duration-200">
            <div class="flex items-center space-x-4 mb-3">
                <div class="p-3 sm:p-4 bg-violet-500/20 text-violet-400 rounded-full border border-violet-500/30 shadow-lg shadow-violet-900/50">
                    <!-- Responsive Icon Size -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 sm:w-8 sm:h-8">
                        <title>${iconDesc}</title>
                        <path d="${iconPath}"></path>
                    </svg>
                </div>
                <!-- Responsive Title: text-2xl on mobile, text-3xl on sm/desktop -->
                <h3 class="text-2xl sm:text-3xl font-semibold text-white">${title}</h3>
            </div>
            <!-- Responsive Description: text-base on mobile, text-lg on sm/desktop -->
            <p class="text-base sm:text-lg text-gray-300">${description}</p>
            <!-- Responsive Link Text -->
            <span class="mt-2 inline-block text-violet-400 hover:text-violet-300 text-base sm:text-lg font-medium">Launch Tool &rarr;</span>
        </a>
    `;
}


// Updated views data
const views = {
    main: {
        title: "Welcome to the Software Development Club!",
        content: `
            <div class="content-card mb-8">
                <!-- Responsive H2 -->
                <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-4">Our Club </h2>
                <hr class="hidden" style="height:30px">
                <!-- Responsive Paragraph -->
                <p class="text-base sm:text-lg text-gray-300 leading-relaxed">
                    The SPYC Software Development Club (SwDev) is the premier community for students passionate about coding, design, and building real-world applications. We focus on hands-on experience, collaborative projects, and mentorship, preparing members for successful careers in tech. Join us to transform ideas into digital reality!
                </p>
            </div>
            
            <div class="content-card mb-8">
                <!-- Responsive H2 -->
                <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-4">Publish Your Website! </h2>
                <hr class="hidden" style="height:30px">
                <!-- Responsive Paragraph -->
                <p class="text-base sm:text-lg text-gray-300 leading-relaxed">
                    If you want to host or test your own website via school server (AeroDrive), feel free to contact us by PYCNet. Please add reciever as pyc21030 (5D Chung Ho Long). You could also use Github, Netlify or Vercel as well. Free tools are always online!
                </p>
            </div>

            <div class="content-card mb-8">
                <!-- Responsive H2 -->
                <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-4">One-file Web App Competition (13 Feb 2026)</h2>
                <hr class="hidden" style="height:30px">
                <!-- Responsive image -->
                <center>
                    <img src="https://rulkallos-chl.github.io/img/1filewebapp_comp_poster.png" style="width:50%;height:50%;">
                </center>
                <!-- Responsive Paragraph -->
                <p class="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Join our one-file web app competition! We seek for some compassionate learners, to solve some ovwelooked problems and daily chores for the school and society!
                </p>
            </div>

            <div class="mt-8">
                <!-- Responsive H1 -->
                <h1 class="text-3xl sm:text-4xl font-extrabold text-white mb-6">Projects and Achievements</h1>
                ${generateListItem('AI Hackathon 2025 Silver Award', 'Our school team won silver award in the competition.', 'https://rulkallos-chl.github.io/img/hackathon25.png')}
                ${generateListItem('CUHKCTF 2025 Awards', 'Our school teams won 6th and 9th place in the competition', 'https://rulkallos-chl.github.io/img/cuhkctf25ranking.png')}
                ${generateListItem('updating . . .', 'updating . . .', 'https://placehold.co/600x400/3d3d3d/ffffff?text=updating+.+.+.')}
            </div>
        `
    },
    updates: {
        title: "Updates & Policy Changes",
        content: `
            <div class="mt-8">
                <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-6">Upcoming Events & News</h2>
                ${generateUpdateItem('Upcoming: AI-Coding One-file Web App #1', 'This is the first day of our three-day course, focusing on teaching attendees how to make their own tomato clock app with the help of AI, from scratch! 5D Hugo Fung and 5D Carson Leung will be the hosts.', '28 Nov 2025', 'Event')}
                ${generateUpdateItem('Upcoming: AI-Coding One-file Web App #2', 'This is the second day of our three-day course, focusing on letting attendees to brainstorm whatever they want, into their web app! 5D Isaac Chung will be the host.', '5 Dec 2025', 'Event')}
                ${generateUpdateItem('Upcoming: AI-Coding One-file Web App #3', 'This is the last day of our three-day course, focusing on instruct attendees to make their own "Homework Checklist" web app. Mr. Ken Leung will be the host.', '10 Dec 2025', 'Event')}
                ${generateUpdateItem('Upcoming: One-file Web App Competition', 'Send us your creation before the deadline! Get a prize, win an honour!', '13 Feb 2026, 'Event')}
            </div>
        `
    },
    portal: {
        title: "In-House Developer Tools Portal",
        content: `
            <!-- The grid layout is mobile-friendly (1 column) and scales to 2 columns on medium screens and up -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <!-- 1. Countdown Timer (Icon: Clock) -->
                ${generateToolCard('Countdown Timer', 'A versatile timer tool to track deadlines, events, or focus sessions with precision.', 'https://aero.pyc.edu.hk/~itp/countdown/', 'M12 2v4M17.65 6.35l-2.12 2.12M22 12h-4M17.65 17.65l-2.12-2.12M12 22v-4M6.35 17.65l2.12-2.12M2 12h4M6.35 6.35l2.12 2.12M12 12A10 10 0 1 0 12 2A10 10 0 0 0 12 12ZM12 7V12H15', 'Clock Timer Icon')}
                
                <!-- 2. Cue Card Generator (Icon: Book/Cards) -->
                ${generateToolCard('Cue Card Generator', 'Quickly create and customize digital cue cards for studying, presentations, or quick reference.', 'https://aero.pyc.edu.hk/~itp/cue_card_maker/', 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM12 7h10v12a3 3 0 0 1-3 3h-7', 'Cue Card Icon')}
                
                <!-- 3. QR Code Generator (Icon: Qr Code) -->
                ${generateToolCard('QR Code Generator', 'Instantly convert any URL or text into a scannable QR code for easy sharing and distribution.', 'https://www5.pyc.edu.hk/pycnet/it_in_education/qr_code_gen.php', 'M3 3h8v8H3zM15 3h6v6h-6zM3 15h8v6H3zM15 15h6v6h-6zM8 8h1M19 5h1M5 19h1M17 17h1M17 19h1M19 19h1M15 5h1M19 7h1M5 5h1M5 7h1M7 5h1', 'QR Code Icon')}
                
                <!-- 4. Seating Plan Arranger (Icon: Layout Grid) -->
                ${generateToolCard('Seating Plan Arranger', 'Tool for generating and visualizing optimal seating arrangements for classrooms or events.', 'https://aero.pyc.edu.hk/~itp/seating_plan/', 'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z', 'Seating Plan Icon')}
                
                <!-- 5. Crowdscontrol (testing) (Icon: Users) -->
                ${generateToolCard('Crowdscontrol (testing)', 'Internal testing platform for managing and simulating crowd dynamics and flow control.', 'https://aero.pyc.edu.hk/~itp/crowdscontrol/', 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 7A4 4 0 0 1 9 15M17 7A4 4 0 0 1 17 15', 'Crowd Control Icon')}
            </div>
        `
    }
};

// --- Image Modal Logic ---
const imageModal = document.getElementById('image-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalContent = document.getElementById('modal-content');
const modalImage = document.getElementById('modal-image');
const modalClose = document.getElementById('modal-close');

// Function to show the modal with the specified image
function showImageModal(imageUrl, title) {
    modalImage.src = imageUrl;
    modalImage.alt = title + " - Zoomed View";
    
    // 1. Make the modal visible (flex display, opacity 0, scale 95)
    imageModal.classList.add('flex');
    imageModal.classList.remove('hidden');
    
    // 2. Schedule the transition (needs a small delay for CSS to register the display change)
    setTimeout(() => {
        imageModal.classList.remove('opacity-0');
        modalContent.classList.remove('scale-95');
    }, 10); // Small delay to trigger CSS transition
}

// Function to hide the modal
function hideImageModal() {
    // 1. Start the transition back (opacity 0, scale 95)
    imageModal.classList.add('opacity-0');
    modalContent.classList.add('scale-95');

    // 2. Hide the modal completely after the transition finishes (300ms defined in CSS)
    setTimeout(() => {
        imageModal.classList.remove('flex');
        imageModal.classList.add('hidden');
        modalImage.src = ''; // Clear image source
    }, 300);
}

// Attach close listeners to backdrop, close button, and the image itself (cursor is zoom-out)
modalBackdrop.addEventListener('click', hideImageModal);
modalClose.addEventListener('click', hideImageModal);
modalImage.addEventListener('click', hideImageModal);

// Escape key listener for closure
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !imageModal.classList.contains('hidden')) {
        hideImageModal();
    }
});


// Core routing logic
function updateView(hash) {
    const path = hash.substring(1) || 'main'; // Default to 'main'
    const view = views[path];

    // 1. Update Navigation Links
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.id === 'nav-' + path) {
            link.classList.add('active');
        }
    });

    // 2. Render Content
    if (view) {
        viewContainer.innerHTML = `
            <div class="mb-8">
                <!-- RESPONSIVE MAIN TITLE: text-4xl on mobile, text-6xl on small screens and up -->
                <h1 class="text-4xl sm:text-6xl font-extrabold text-violet-400 mb-2">${view.title}</h1>
                <hr class="border-t-2 border-gray-700 w-full sm:w-1/4 mb-6" />
            </div>
            ${view.content}
        `;
    } else {
        viewContainer.innerHTML = `
            <div class="content-card text-center">
                <h1 class="text-4xl font-extrabold text-red-500 mb-4">404 - Page Not Found</h1>
                <p class="text-lg text-gray-400">The path you requested does not exist. Please navigate using the header links.</p>
            </div>
        `;
    }
}

// Listen for hash changes (e.g., user clicks a link or uses back/forward)
window.addEventListener('hashchange', () => {
    updateView(window.location.hash);
});

// Initial load
window.addEventListener('load', () => {
    let initialHash = window.location.hash || '#main';
    if (initialHash === '') {
        // If no hash is present, set it to main to ensure links work on first load
        window.location.hash = '#main';
    }
    updateView(initialHash);
});

