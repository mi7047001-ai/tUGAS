        // Mobile menu functionality
        const hamburger = document.getElementById('hamburger');
        const closeMenuBtn = document.getElementById('closeMenu');
        const mobileMenu = document.getElementById('mobileMenu');
        
        // Open mobile menu
        function openMobileMenu() {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        // Close mobile menu
        function closeMobileMenu() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        // Event listeners
        hamburger.addEventListener('click', openMobileMenu);
        closeMenuBtn.addEventListener('click', closeMobileMenu);
        
        // Close menu when clicking on a link
        const mobileMenuLinks = document.querySelectorAll('.mobile-menu-content a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
        
        // Close menu with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
        
        // Active navigation based on scroll position
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const desktopLinks = document.querySelectorAll('.nav-desktop a');
            const mobileLinks = document.querySelectorAll('.mobile-menu-content a');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            // Update desktop menu
            desktopLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
            
            // Update mobile menu
            mobileLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });
        
        // Smooth scrolling for desktop menu
        document.querySelectorAll('.nav-desktop a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Smooth scrolling for mobile menu
        document.querySelectorAll('.mobile-menu-content a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Page button click handlers
        document.querySelector('.page-btn').addEventListener('click', () => {
            alert('Page 01 Button Clicked!');
        });
        
        document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
            alert('Page 01 Button Clicked!');
            closeMobileMenu();
        });