// Networld Tours & Travels - Interactive JavaScript

console.log('Loading Networld Tours application...');

// Package data from JSON
const packageData = {
    family: [
        {
            name: "4N/5D Family Explorer",
            duration: "4 Nights 5 Days",
            itinerary: "2N Port Blair + 1N Havelock + 1N Neil Island",
            highlights: ["Cellular Jail Visit", "Radhanagar Beach", "Glass Bottom Boat", "Family-friendly Activities"],
            price_range: "₹25,000 - ₹35,000",
            best_for: "First-time visitors with children"
        },
        {
            name: "5N/6D Family Adventure",
            duration: "5 Nights 6 Days",
            itinerary: "2N Port Blair + 2N Havelock + 1N Neil Island",
            highlights: ["Ross Island Tour", "Elephant Beach", "Snorkeling", "Light & Sound Show"],
            price_range: "₹35,000 - ₹45,000",
            best_for: "Families seeking comprehensive experience"
        },
        {
            name: "6N/7D Complete Family Circuit",
            duration: "6 Nights 7 Days",
            itinerary: "3N Port Blair + 2N Havelock + 1N Neil Island",
            highlights: ["Chidiya Tapu Sunset", "Mud Volcano", "Bharatpur Beach", "Cultural Experiences"],
            price_range: "₹45,000 - ₹55,000",
            best_for: "Extended family vacations"
        }
    ],
    honeymoon: [
        {
            name: "4N/5D Romantic Escape",
            duration: "4 Nights 5 Days",
            itinerary: "2N Port Blair + 1N Havelock + 1N Neil Island",
            highlights: ["Private Beach Dinner", "Sunset at Natural Bridge", "Couple Spa", "Romantic Photography"],
            price_range: "₹30,000 - ₹40,000",
            best_for: "Intimate honeymoon getaway"
        },
        {
            name: "5N/6D Love Island Tour",
            duration: "5 Nights 6 Days",
            itinerary: "2N Port Blair + 2N Havelock + 1N Neil Island",
            highlights: ["Candlelight Dinner", "Private Island Picnic", "Couple Activities", "Luxury Accommodation"],
            price_range: "₹40,000 - ₹50,000",
            best_for: "Romantic luxury experience"
        },
        {
            name: "6N/7D Honeymoon Paradise",
            duration: "6 Nights 7 Days",
            itinerary: "3N Port Blair + 2N Havelock + 1N Neil Island",
            highlights: ["Premium Suite Stay", "Private Yacht Tour", "Couple Scuba Diving", "Professional Photoshoot"],
            price_range: "₹50,000 - ₹60,000",
            best_for: "Ultimate romantic celebration"
        }
    ],
    adventure: [
        {
            name: "5N/6D Thrill Seeker",
            duration: "5 Nights 6 Days",
            itinerary: "2N Port Blair + 2N Havelock + 1N Neil Island",
            highlights: ["Scuba Diving Certification", "Sea Walking", "Jet Skiing", "Parasailing"],
            price_range: "₹40,000 - ₹50,000",
            best_for: "Water sports enthusiasts"
        },
        {
            name: "6N/7D Adventure Circuit",
            duration: "6 Nights 7 Days",
            itinerary: "2N Port Blair + 3N Havelock + 1N Neil Island",
            highlights: ["Deep Sea Diving", "Trekking Expeditions", "Kayaking", "Night Fishing"],
            price_range: "₹50,000 - ₹60,000",
            best_for: "Adventure seekers"
        },
        {
            name: "7N/8D Ultimate Adventure",
            duration: "7 Nights 8 Days",
            itinerary: "3N Port Blair + 3N Havelock + 1N Neil Island",
            highlights: ["Multi-dive Packages", "Island Camping", "Rock Climbing", "Underwater Photography"],
            price_range: "₹60,000 - ₹70,000",
            best_for: "Extreme adventure lovers"
        }
    ],
    luxury: [
        {
            name: "4N/5D Premium Comfort",
            duration: "4 Nights 5 Days",
            itinerary: "2N Port Blair + 1N Havelock + 1N Neil Island",
            highlights: ["5-Star Accommodation", "Private Transfers", "Premium Dining", "VIP Services"],
            price_range: "₹60,000 - ₹80,000",
            best_for: "Luxury travelers"
        },
        {
            name: "5N/6D Luxury Island Experience",
            duration: "5 Nights 6 Days",
            itinerary: "2N Port Blair + 2N Havelock + 1N Neil Island",
            highlights: ["Beach Resort Stay", "Private Butler Service", "Helicopter Transfers", "Fine Dining"],
            price_range: "₹80,000 - ₹1,00,000",
            best_for: "Premium luxury seekers"
        },
        {
            name: "6N/7D Royal Andaman",
            duration: "6 Nights 7 Days",
            itinerary: "3N Port Blair + 2N Havelock + 1N Neil Island",
            highlights: ["Presidential Suites", "Private Yacht Charter", "Exclusive Island Access", "Michelin-style Dining"],
            price_range: "₹1,00,000 - ₹1,25,000",
            best_for: "Ultra-luxury experience"
        }
    ]
};

// State management
let currentTestimonial = 0;
let currentBookingStep = 1;
let selectedPackage = null;

// Package viewing functionality
function viewPackages(category) {
    console.log('viewPackages called with category:', category);
    
    try {
        const packages = packageData[category];
        if (!packages) {
            console.error('No packages found for category:', category);
            alert('Package information not available');
            return;
        }
        
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');
        
        if (!modalTitle || !modalBody) {
            console.error('Modal elements not found');
            alert('Unable to display package details');
            return;
        }

        const categoryTitles = {
            family: 'Family Tour Packages',
            honeymoon: 'Honeymoon Packages',
            adventure: 'Adventure Packages',
            luxury: 'Luxury Packages'
        };

        modalTitle.textContent = categoryTitles[category];
        
        let packagesHtml = '<div class="packages-list">';
        
        packages.forEach((pkg, index) => {
            packagesHtml += `
                <div class="package-detail-card">
                    <div class="package-detail-header">
                        <h3>${pkg.name}</h3>
                        <div class="package-duration">${pkg.duration}</div>
                    </div>
                    <div class="package-detail-content">
                        <div class="package-itinerary">
                            <h4><i class="fas fa-route"></i> Itinerary</h4>
                            <p>${pkg.itinerary}</p>
                        </div>
                        <div class="package-highlights-detail">
                            <h4><i class="fas fa-star"></i> Highlights</h4>
                            <ul>
                                ${pkg.highlights.map(highlight => `<li><i class="fas fa-check"></i>${highlight}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="package-best-for">
                            <h4><i class="fas fa-users"></i> Best For</h4>
                            <p>${pkg.best_for}</p>
                        </div>
                        <div class="package-detail-footer">
                            <div class="package-price-large">${pkg.price_range}</div>
                            <div class="package-actions">
                                <button class="btn btn--outline btn--sm" onclick="customizePackage('${category}', ${index})">
                                    <i class="fas fa-edit"></i> Customize
                                </button>
                                <button class="btn btn--primary" onclick="bookPackage('${category}', ${index})">
                                    <i class="fas fa-calendar-check"></i> Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        
        packagesHtml += '</div>';
        modalBody.innerHTML = packagesHtml;
        
        showModal('package-modal');
        
        console.log('Package modal displayed successfully');
        
    } catch (error) {
        console.error('Error in viewPackages:', error);
        alert('An error occurred while loading package details');
    }
}

// Modal management
function showModal(modalId) {
    console.log('showModal called:', modalId);
    try {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            console.log('Modal shown successfully:', modalId);
        } else {
            console.error('Modal not found:', modalId);
        }
    } catch (error) {
        console.error('Error showing modal:', error);
    }
}

function closeModal(modalId) {
    console.log('closeModal called:', modalId);
    try {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
            console.log('Modal closed successfully:', modalId);
        }
    } catch (error) {
        console.error('Error closing modal:', error);
    }
}

function showSuccessModal(message) {
    console.log('showSuccessModal called:', message);
    try {
        const successMessage = document.getElementById('success-message');
        if (successMessage) {
            successMessage.textContent = message;
        }
        showModal('success-modal');
    } catch (error) {
        console.error('Error showing success modal:', error);
    }
}

// Customize package functionality
function customizePackage(category, index) {
    console.log('customizePackage called:', category, index);
    try {
        const pkg = packageData[category][index];
        selectedPackage = { category, index, ...pkg };
        closeModal('package-modal');
        showBookingModal();
    } catch (error) {
        console.error('Error in customizePackage:', error);
        alert('Unable to customize package');
    }
}

// Book package functionality
function bookPackage(category, index) {
    console.log('bookPackage called:', category, index);
    try {
        const pkg = packageData[category][index];
        selectedPackage = { category, index, ...pkg };
        closeModal('package-modal');
        showBookingModal();
    } catch (error) {
        console.error('Error in bookPackage:', error);
        alert('Unable to proceed with booking');
    }
}

// Booking modal management
function showBookingModal() {
    console.log('showBookingModal called');
    try {
        currentBookingStep = 1;
        updateBookingProgress();
        populatePackageSelection();
        showModal('booking-modal');
    } catch (error) {
        console.error('Error in showBookingModal:', error);
        alert('Unable to open booking form');
    }
}

function populatePackageSelection() {
    const packageSelection = document.getElementById('package-selection');
    if (!packageSelection) {
        console.error('Package selection element not found');
        return;
    }
    
    if (selectedPackage) {
        packageSelection.innerHTML = `
            <div class="package-option selected" data-category="${selectedPackage.category}" data-index="${selectedPackage.index}">
                <h4>${selectedPackage.name}</h4>
                <p>${selectedPackage.duration} | ${selectedPackage.itinerary}</p>
                <div class="price">${selectedPackage.price_range}</div>
            </div>
            <div style="margin-top: var(--space-16);">
                <button type="button" class="btn btn--outline btn--sm" onclick="showAllPackages()">
                    <i class="fas fa-list"></i> View All Packages
                </button>
            </div>
        `;
    } else {
        showAllPackagesInBooking();
    }
}

function showAllPackages() {
    console.log('showAllPackages called');
    showAllPackagesInBooking();
}

function showAllPackagesInBooking() {
    const packageSelection = document.getElementById('package-selection');
    if (!packageSelection) return;
    
    let html = '<div class="package-categories">';
    
    Object.keys(packageData).forEach(category => {
        const categoryTitles = {
            family: 'Family Tours',
            honeymoon: 'Honeymoon',
            adventure: 'Adventure',
            luxury: 'Luxury'
        };
        
        html += `<h4>${categoryTitles[category]}</h4>`;
        
        packageData[category].forEach((pkg, index) => {
            html += `
                <div class="package-option" data-category="${category}" data-index="${index}" onclick="selectPackage('${category}', ${index})">
                    <h4>${pkg.name}</h4>
                    <p>${pkg.duration} | ${pkg.itinerary}</p>
                    <div class="price">${pkg.price_range}</div>
                </div>
            `;
        });
    });
    
    html += '</div>';
    packageSelection.innerHTML = html;
}

function selectPackage(category, index) {
    console.log('selectPackage called:', category, index);
    
    // Remove previous selection
    document.querySelectorAll('.package-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selection to clicked option
    const clickedOption = event.target.closest('.package-option');
    if (clickedOption) {
        clickedOption.classList.add('selected');
    }
    
    selectedPackage = { category, index, ...packageData[category][index] };
}

// Booking step management
function nextBookingStep() {
    console.log('nextBookingStep called. Current step:', currentBookingStep);
    
    if (currentBookingStep === 1) {
        if (!selectedPackage) {
            alert('Please select a package first.');
            return;
        }
    } else if (currentBookingStep === 2) {
        if (!validateBookingForm()) {
            return;
        }
    }
    
    currentBookingStep++;
    if (currentBookingStep === 3) {
        generateBookingSummary();
    }
    updateBookingProgress();
    updateBookingButtons();
}

function previousBookingStep() {
    console.log('previousBookingStep called. Current step:', currentBookingStep);
    if (currentBookingStep > 1) {
        currentBookingStep--;
        updateBookingProgress();
        updateBookingButtons();
    }
}

function updateBookingProgress() {
    // Update progress indicators
    document.querySelectorAll('.progress-step').forEach((step, index) => {
        if (index + 1 <= currentBookingStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
    
    // Show/hide appropriate steps
    document.querySelectorAll('.booking-step').forEach((step, index) => {
        if (index + 1 === currentBookingStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

function updateBookingButtons() {
    const prevBtn = document.getElementById('prev-step');
    const nextBtn = document.getElementById('next-step');
    const submitBtn = document.getElementById('submit-booking');
    
    if (prevBtn) prevBtn.style.display = currentBookingStep > 1 ? 'block' : 'none';
    if (nextBtn) nextBtn.style.display = currentBookingStep < 3 ? 'block' : 'none';
    if (submitBtn) submitBtn.style.display = currentBookingStep === 3 ? 'block' : 'none';
}

function validateBookingForm() {
    const requiredFields = ['full_name', 'email', 'phone', 'travelers', 'travel_date'];
    let isValid = true;
    
    requiredFields.forEach(field => {
        const input = document.querySelector(`[name="${field}"]`);
        if (!input || !input.value.trim()) {
            if (input) input.focus();
            alert(`Please fill in ${field.replace('_', ' ')}`);
            isValid = false;
            return;
        }
    });
    
    return isValid;
}

function generateBookingSummary() {
    console.log('generateBookingSummary called');
    
    const bookingSummary = document.getElementById('booking-summary');
    if (!bookingSummary) return;
    
    const formData = new FormData(document.getElementById('booking-form'));
    
    const summaryHtml = `
        <div class="booking-summary-content">
            <div class="summary-section">
                <h4>Selected Package</h4>
                <div class="package-summary">
                    <h5>${selectedPackage.name}</h5>
                    <p>${selectedPackage.duration}</p>
                    <p>${selectedPackage.itinerary}</p>
                    <div class="price-summary">${selectedPackage.price_range}</div>
                </div>
            </div>
            <div class="summary-section">
                <h4>Traveler Details</h4>
                <p><strong>Name:</strong> ${formData.get('full_name')}</p>
                <p><strong>Email:</strong> ${formData.get('email')}</p>
                <p><strong>Phone:</strong> ${formData.get('phone')}</p>
                <p><strong>Number of Travelers:</strong> ${formData.get('travelers')}</p>
                <p><strong>Travel Date:</strong> ${formData.get('travel_date')}</p>
            </div>
            ${formData.get('special_requirements') ? `
                <div class="summary-section">
                    <h4>Special Requirements</h4>
                    <p>${formData.get('special_requirements')}</p>
                </div>
            ` : ''}
            <div class="summary-note">
                <p><i class="fas fa-info-circle"></i> This is a booking inquiry. Our team will contact you within 24 hours to confirm availability and finalize your booking.</p>
            </div>
        </div>
    `;
    
    bookingSummary.innerHTML = summaryHtml;
}

function handleBookingSubmission(formData) {
    console.log('handleBookingSubmission called');
    
    const submitBtn = document.getElementById('submit-booking');
    if (!submitBtn) return;
    
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<div class="spinner"></div>Submitting...';
    submitBtn.disabled = true;

    setTimeout(() => {
        const bookingData = {
            package: selectedPackage,
            traveler: {
                full_name: formData.get('full_name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                travelers: formData.get('travelers'),
                travel_date: formData.get('travel_date'),
                special_requirements: formData.get('special_requirements')
            }
        };

        console.log('Booking Submission Data:', bookingData);
        
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        closeModal('booking-modal');
        showSuccessModal('Booking inquiry submitted successfully! Our team will contact you within 24 hours to confirm your booking and provide payment details.');
        
        selectedPackage = null;
        currentBookingStep = 1;
    }, 2500);
}

// Testimonials carousel
function nextTestimonial() {
    console.log('nextTestimonial called');
    const testimonials = document.querySelectorAll('.testimonial-card');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function previousTestimonial() {
    console.log('previousTestimonial called');
    const testimonials = document.querySelectorAll('.testimonial-card');
    currentTestimonial = currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1;
    showTestimonial(currentTestimonial);
}

function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial-card');
    testimonials.forEach((testimonial, i) => {
        if (i === index) {
            testimonial.style.display = 'block';
        } else {
            testimonial.style.display = 'none';
        }
    });
}

// Destination details
function showDestinationDetails(destination) {
    console.log('showDestinationDetails called:', destination);
    
    const destinationInfo = {
        'port-blair': {
            title: 'Port Blair - Historical Capital',
            description: 'Discover the rich history and cultural heritage of Andaman Islands',
            attractions: ['Cellular Jail National Memorial', 'Corbyn Cove Beach', 'Anthropological Museum', 'Mini Zoo', 'Chatham Saw Mill', 'Fisheries Museum'],
            activities: ['Historical Tours', 'City Sightseeing', 'Beach Activities', 'Shopping', 'Cultural Experiences', 'Light & Sound Show']
        },
        'havelock': {
            title: 'Havelock Island - Beach Paradise',
            description: 'Experience pristine beaches and world-class water sports',
            attractions: ['Radhanagar Beach (Asia Best Beach)', 'Elephant Beach', 'Kalapathar Beach', 'Vijay Nagar Beach'],
            activities: ['Scuba Diving', 'Snorkeling', 'Sea Walking', 'Jet Skiing', 'Banana Boat Rides', 'Beach Relaxation']
        },
        'neil': {
            title: 'Neil Island - Natural Beauty',
            description: 'Enjoy serene landscapes and peaceful atmosphere',
            attractions: ['Natural Bridge (Howrah Bridge)', 'Bharatpur Beach', 'Laxmanpur Beach', 'Coral Garden'],
            activities: ['Sunset Viewing', 'Beach Walking', 'Cycling', 'Photography', 'Bird Watching', 'Swimming']
        }
    };
    
    const info = destinationInfo[destination];
    if (!info) {
        alert('Destination information not available');
        return;
    }
    
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = info.title;
    
    const destinationHtml = `
        <div class="destination-details">
            <p class="destination-description">${info.description}</p>
            
            <div class="destination-section">
                <h4><i class="fas fa-map-marked-alt"></i> Key Attractions</h4>
                <ul class="destination-list">
                    ${info.attractions.map(attraction => `<li><i class="fas fa-check"></i>${attraction}</li>`).join('')}
                </ul>
            </div>
            
            <div class="destination-section">
                <h4><i class="fas fa-swimming-pool"></i> Popular Activities</h4>
                <ul class="destination-list">
                    ${info.activities.map(activity => `<li><i class="fas fa-check"></i>${activity}</li>`).join('')}
                </ul>
            </div>
            
            <div class="destination-cta">
                <button class="btn btn--primary" onclick="closeModal('package-modal'); showBookingModal();">
                    <i class="fas fa-calendar-plus"></i> Plan Your Visit
                </button>
                <a href="tel:+919933897474" class="btn btn--outline">
                    <i class="fas fa-phone"></i> Call for Details
                </a>
            </div>
        </div>
    `;
    
    modalBody.innerHTML = destinationHtml;
    showModal('package-modal');
}

// Quick inquiry handler
function handleQuickInquiry(formData) {
    console.log('handleQuickInquiry called');
    
    const submitBtn = document.querySelector('#quick-inquiry-form button[type="submit"]');
    if (!submitBtn) return;
    
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<div class="spinner"></div>Processing...';
    submitBtn.disabled = true;

    setTimeout(() => {
        const inquiryData = {
            package_type: formData.get('package_type'),
            name: formData.get('name'),
            phone: formData.get('phone'),
            travel_date: formData.get('travel_date')
        };

        console.log('Quick Inquiry Data:', inquiryData);
        
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        showSuccessModal('Thank you for your inquiry! We will contact you within 2 hours with a personalized quote.');
        
        const form = document.getElementById('quick-inquiry-form');
        const heroFormContainer = document.getElementById('hero-form');
        if (form) form.reset();
        if (heroFormContainer) heroFormContainer.style.display = 'none';
    }, 1500);
}

// Contact form handler
function handleContactForm(formData) {
    console.log('handleContactForm called');
    
    const submitBtn = document.querySelector('#contact-form button[type="submit"]');
    if (!submitBtn) return;
    
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<div class="spinner"></div>Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
        const contactData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            inquiry_type: formData.get('inquiry_type'),
            message: formData.get('message')
        };

        console.log('Contact Form Data:', contactData);
        
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        showSuccessModal('Thank you for your message! We will respond within 24 hours.');
        
        const form = document.getElementById('contact-form');
        if (form) form.reset();
    }, 2000);
}

// Initialize application
function initializeApp() {
    console.log('Initializing Networld Tours application...');
    
    try {
        initializePackageButtons();
        initializeNavigation();
        initializeForms();
        initializeModals();
        initializeScrollEffects();
        initializeTestimonials();
        setMinDate();
        
        console.log('Application initialized successfully');
    } catch (error) {
        console.error('Error initializing application:', error);
    }
}

// Initialize package buttons with proper event listeners
function initializePackageButtons() {
    console.log('Initializing package buttons...');
    
    // Wait for DOM to be fully rendered, then attach event listeners
    setTimeout(() => {
        const packageCards = document.querySelectorAll('.package-card');
        console.log('Found package cards:', packageCards.length);
        
        packageCards.forEach((card, index) => {
            const category = card.getAttribute('data-category');
            const viewButton = card.querySelector('button');
            
            console.log(`Processing card ${index}: category=${category}, button found=${!!viewButton}`);
            
            if (viewButton && category) {
                // Remove any existing listeners
                const newButton = viewButton.cloneNode(true);
                viewButton.parentNode.replaceChild(newButton, viewButton);
                
                // Add new event listener
                newButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log(`Package button clicked for category: ${category}`);
                    viewPackages(category);
                });
                
                console.log(`Event listener attached to ${category} package button`);
            }
        });
        
        console.log('Package buttons initialization completed');
    }, 100);
}

// Navigation functionality
function initializeNavigation() {
    console.log('Initializing navigation...');
    
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            console.log('Navigation link clicked:', targetId);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else if (targetId === '#book-now') {
                console.log('Book now button clicked');
                showBookingModal();
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = 'var(--shadow-md)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        }
    });
}

// Form initialization
function initializeForms() {
    console.log('Initializing forms...');
    
    // Quick inquiry button and form
    setTimeout(() => {
        const quickInquiryBtn = document.getElementById('quick-inquiry-btn');
        const heroForm = document.getElementById('hero-form');
        const quickInquiryForm = document.getElementById('quick-inquiry-form');

        if (quickInquiryBtn && heroForm) {
            // Remove existing listeners and add new one
            const newBtn = quickInquiryBtn.cloneNode(true);
            quickInquiryBtn.parentNode.replaceChild(newBtn, quickInquiryBtn);
            
            newBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Quick inquiry button clicked');
                const isVisible = heroForm.style.display === 'block';
                heroForm.style.display = isVisible ? 'none' : 'block';
            });
        }

        if (quickInquiryForm) {
            quickInquiryForm.addEventListener('submit', function(e) {
                e.preventDefault();
                console.log('Quick inquiry form submitted');
                handleQuickInquiry(new FormData(this));
            });
        }

        // Contact form
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                console.log('Contact form submitted');
                handleContactForm(new FormData(this));
            });
        }

        // Booking form
        const bookingForm = document.getElementById('booking-form');
        if (bookingForm) {
            bookingForm.addEventListener('submit', function(e) {
                e.preventDefault();
                console.log('Booking form submitted');
                handleBookingSubmission(new FormData(this));
            });
        }
    }, 100);
}

// Modal initialization
function initializeModals() {
    console.log('Initializing modals...');
    
    // Close modal when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-overlay')) {
            const modal = e.target.closest('.modal');
            if (modal) {
                closeModal(modal.id);
            }
        }
    });

    // Close modal with escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal:not(.hidden)');
            if (activeModal) {
                closeModal(activeModal.id);
            }
        }
    });
}

// Scroll effects
function initializeScrollEffects() {
    const backToTop = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    });
    
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Testimonials
function initializeTestimonials() {
    showTestimonial(currentTestimonial);
    
    setInterval(() => {
        nextTestimonial();
    }, 5000);
}

// Set minimum date
function setMinDate() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        input.min = tomorrow.toISOString().split('T')[0];
    });
}

// Expose functions to global scope
window.viewPackages = viewPackages;
window.customizePackage = customizePackage;
window.bookPackage = bookPackage;
window.nextBookingStep = nextBookingStep;
window.previousBookingStep = previousBookingStep;
window.selectPackage = selectPackage;
window.showAllPackages = showAllPackages;
window.nextTestimonial = nextTestimonial;
window.previousTestimonial = previousTestimonial;
window.showDestinationDetails = showDestinationDetails;
window.showModal = showModal;
window.closeModal = closeModal;
window.showSuccessModal = showSuccessModal;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp);

// Also initialize after a small delay to ensure all elements are rendered
setTimeout(initializeApp, 500);

console.log('Networld Tours application script loaded');

// Additional styles for enhanced functionality
const additionalStyles = `
.spinner {
    width: 16px;
    height: 16px;
    border: 2px solid var(--color-border);
    border-top: 2px solid var(--color-primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    display: inline-block;
    margin-right: 8px;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.packages-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-20);
}

.package-detail-card {
    border: 1px solid var(--color-border);
    border-radius: var(--radius-base);
    overflow: hidden;
    background: var(--color-surface);
}

.package-detail-header {
    padding: var(--space-20);
    background: var(--color-bg-1);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.package-detail-header h3 {
    margin: 0;
    color: var(--color-text);
}

.package-duration {
    background: var(--color-primary);
    color: var(--color-btn-primary-text);
    padding: var(--space-4) var(--space-12);
    border-radius: var(--radius-full);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
}

.package-detail-content {
    padding: var(--space-20);
}

.package-itinerary,
.package-highlights-detail,
.package-best-for {
    margin-bottom: var(--space-20);
}

.package-detail-content h4 {
    display: flex;
    align-items: center;
    gap: var(--space-8);
    margin-bottom: var(--space-12);
    color: var(--color-text);
    font-size: var(--font-size-base);
}

.package-detail-content h4 i {
    color: var(--color-primary);
}

.package-highlights-detail ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-8);
}

.package-highlights-detail li {
    display: flex;
    align-items: center;
    gap: var(--space-8);
    font-size: var(--font-size-sm);
}

.package-highlights-detail i {
    color: var(--color-success);
}

.package-detail-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: var(--space-16);
    border-top: 1px solid var(--color-border);
}

.package-price-large {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
    color: var(--color-primary);
}

.package-actions {
    display: flex;
    gap: var(--space-12);
}

.booking-summary-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-24);
}

.summary-section {
    padding: var(--space-16);
    background: var(--color-bg-2);
    border-radius: var(--radius-base);
}

.summary-section h4 {
    margin: 0 0 var(--space-12);
    color: var(--color-text);
}

.package-summary {
    background: var(--color-surface);
    padding: var(--space-16);
    border-radius: var(--radius-base);
}

.package-summary h5 {
    margin: 0 0 var(--space-8);
    color: var(--color-text);
}

.price-summary {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    color: var(--color-primary);
    margin-top: var(--space-12);
}

.summary-note {
    background: var(--color-bg-5);
    padding: var(--space-16);
    border-radius: var(--radius-base);
    border-left: 4px solid var(--color-primary);
}

.summary-note i {
    color: var(--color-primary);
    margin-right: var(--space-8);
}

.destination-details {
    padding: var(--space-16);
}

.destination-description {
    font-size: var(--font-size-lg);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-24);
}

.destination-section {
    margin-bottom: var(--space-24);
}

.destination-section h4 {
    display: flex;
    align-items: center;
    gap: var(--space-8);
    margin-bottom: var(--space-16);
    color: var(--color-text);
}

.destination-section h4 i {
    color: var(--color-primary);
}

.destination-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-8);
}

.destination-list li {
    display: flex;
    align-items: center;
    gap: var(--space-8);
    font-size: var(--font-size-sm);
    padding: var(--space-4) 0;
}

.destination-list i {
    color: var(--color-success);
    font-size: var(--font-size-xs);
}

.destination-cta {
    display: flex;
    gap: var(--space-16);
    justify-content: center;
    padding-top: var(--space-24);
    border-top: 1px solid var(--color-border);
}

.package-categories h4 {
    margin: var(--space-20) 0 var(--space-12);
    color: var(--color-primary);
    border-bottom: 2px solid var(--color-primary);
    padding-bottom: var(--space-8);
}

.package-categories h4:first-child {
    margin-top: 0;
}

@media (max-width: 768px) {
    .package-actions {
        flex-direction: column;
    }
    
    .destination-cta {
        flex-direction: column;
    }
    
    .destination-list {
        grid-template-columns: 1fr;
    }
}
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);