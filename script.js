document.addEventListener('DOMContentLoaded', () => {

    // --- Custom Cursor Logic ---
    const cursor = document.getElementById('cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const links = document.querySelectorAll('a, .timeline-item, .skill-card, .menu-btn, .modal-close');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
            cursor.style.mixBlendMode = 'difference';
        });
        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.mixBlendMode = 'difference';
        });
    });

    // --- Data for Modals ---
    const experienceData = {
        disney: {
            title: "Internship Brand Marketing",
            company: "The Walt Disney Company",
            period: "October 2020 – April 2021",
            description: `
                <p>During my time at Disney, I worked across all major franchises and supported the brand teams in bringing campaigns from idea to execution. My role combined creative thinking, consumer insight, and hands-on production work — and it gave me my first real exposure to how global entertainment brands communicate with audiences.</p>
                <p>One of my core responsibilities was brand management across the entire Disney portfolio, coordinating assets, supporting campaign rollouts, and ensuring that each franchise remained consistent in narrative, tone, and visual identity.</p>
                <p>A personal highlight of the internship was leading my own standalone project, the Disney Kindergarten Prize 2021. I handled concept development, planning, and execution, which taught me how to manage timelines, stakeholders, and creative output independently.</p>
                <p>The most defining experience, however, was the Disney Princess Campaign. I was entrusted with creating the storyboard and full script for the nationwide TV spot — a responsibility that fundamentally shaped my creative approach. The challenge in this project was unique: there was no budget to shoot new footage, meaning I had to craft an entirely new story using only existing video material. I had to reverse the typical workflow: instead of writing a script that would later be filmed, I needed to analyze the available footage, understand its emotional beats, and build a coherent narrative around what already existed. Writing the script and shaping the spot under these constraints taught me to think more resourcefully, creatively, and strategically — and it became the highlight of my internship.</p>
                <p>Working at Disney taught me how powerful well-crafted stories can be, and how much impact clear, thoughtful creative direction has — even when the constraints seem limiting. It is the place where my passion for storytelling, psychology, and brand communication first converged in a meaningful way, and it continues to influence how I approach creative work today.</p>
                <video controls style="width: 100%; margin-top: 20px; border: 1px solid rgba(0,0,0,0.1);">
                    <source src="assets/disney-princess-tv-spot.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <p style="margin-top: 12px; font-style: italic;">(p.s. I guess the essence of the spot makes more sense for German speakers :D)</p>
            `
        },
        samsung: {
            title: "Internship Retail Marketing",
            company: "Samsung Electronics",
            period: "October 2021 – March 2022",
            description: `
                <p>At Samsung, I joined the Retail Marketing team for Mobile & IT and worked on translating product innovation into compelling in-store experiences. This role gave me a hands-on understanding of how global tech brands launch flagship products at scale — from creative concepting to physical execution at retail level.</p>
                <p>I supported the creative development for the launch of a new flagship device, working closely with designers, brand teams, and retail partners to ensure that the campaign visuals translated consistently across all in-store touchpoints. This taught me how much detail, alignment, and cross-functional coordination it takes to bring a premium device to life in the retail space.</p>
                <p>A core part of my work was contributing to the Go-to-Market rollout of new retail displays across more than 300 stores in Germany. I was involved in the practical steps behind such a wide-scale rollout: preparing materials, coordinating with store partners, aligning timelines, and ensuring that each display adhered to brand, product, and UX guidelines. Through this process, I learned how operationally complex retail marketing is — and how essential it is to balance creativity with logistical precision.</p>
                <p>My internship at Samsung shaped the way I think about product storytelling in physical environments. It grounded me in the tactical side of marketing — the part that turns a strategy deck into real-world impact — and gave me an appreciation for how tightly creative, operations, and brand management must work together to deliver a seamless consumer experience.</p>
            `
        },
        aboutyou: {
            title: "Working student Performance Marketing",
            company: "About You",
            period: "September 2022 – August 2023",
            description: `
                <p>At About You, I worked in the Performance Marketing team with a focus on product and search campaigns across various European markets. This role introduced me to the analytical engine behind modern digital marketing and showed me how creative ideas become measurable, optimizable performance assets.</p>
                <p>My day-to-day work involved creating weekly campaign performance reports for both internal stakeholders and external partners. I learned how to translate raw data into actionable insights — identifying which messages resonate, which audiences convert, and where the funnel needs refinement. These insights became the basis for tactical and strategic decisions within the team.</p>
                <p>I also worked on the optimization of Google Ads funnels, adjusting keyword setups, audience structures, bidding strategies, and creative assets to improve campaign efficiency. This gave me practical experience in how seemingly small optimizations can shift performance outcomes at scale.</p>
                <p>The most valuable takeaway from my time at About You was my first real exposure to applied, data-driven marketing. It taught me how important it is to anchor creative work in quantifiable behavior, and how strong performance marketing comes from a balance of intuition, experimentation, and structured analysis. This understanding continues to influence how I think about campaigns today — not just creatively, but in terms of impact, measurability, and continuous improvement.</p>
            `
        },
        cheil: {
            title: "Account Manager",
            company: "Cheil Germany",
            period: "April 2024 – Present",
            description: `
                <p>At Cheil, I took on the role of Project Lead for Digital Operations for Samsung Austria’s D2C team — a position that combined end-to-end project ownership, client management, budget responsibility, creative coordination, and technical execution. It was the first role in which I carried full accountability for an entire market’s digital operations, and it became the most intensive learning curve of my career so far.</p>
                <p>I was the sole account manager and primary client contact, responsible for translating Samsung’s business objectives into clear briefs for creative, UX, and development teams. Alongside this, I managed the entire project budget, including offer creation, forecasting, financial tracking, and invoicing — a level of responsibility that taught me how to think strategically about resources, timelines, and output.</p>
                <p>Operationally, I oversaw every step of the delivery process: coordinating cross-functional teams, prioritizing tasks, managing deadlines, performing quality checks, and — where needed — stepping in to execute creative or web tasks myself. Because the team lost a member early on, I had to restructure workflows, automate repetitive steps, and prioritize more intelligently. Despite reduced resources, I achieved a 65% increase in project productivity with 33% fewer resources — a result that reflects both process discipline and hands-on resilience.</p>
                <p>The key challenge of this role was maintaining high output under pressure. Managing the entire project alone as a junior taught me to become extremely stress-resilient, especially in periods of tight deadlines. I learned to anticipate client needs before they surfaced, build buffers into timelines, and solve problems proactively rather than reactively. The necessity to juggle account management, project coordination, budgeting, QA, and elements of web development pushed me to broaden my skillset far beyond the boundaries of a typical account manager.</p>
                <p>Working at Cheil has been transformative. It taught me accountable ownership, sharpened my operational thinking, and showed me how deeply interconnected creative, strategic, and technical work truly are. It also strengthened my belief that great project management is ultimately about clarity, structure, and the ability to stay ahead — even when the circumstances change around you.</p>
            `
        }
    };

    // --- Accordion Skills Logic ---
    let currentlyExpanded = null;
    let workflowMounted = false;
    const skillCards = document.querySelectorAll('.skill-card');
    const skillsGrid = document.querySelector('.skills-grid');

    function mountWorkflow() {
        if (workflowMounted) return;
        setTimeout(() => {
            if (window.renderWorkflow) {
                window.renderWorkflow('n8n-modal-container');
                workflowMounted = true;
            }
        }, 250);
    }

    function expandCard(card) {
        if (currentlyExpanded === card) return;
        if (currentlyExpanded) {
            currentlyExpanded.classList.remove('expanded');
        }
        card.classList.add('expanded');
        currentlyExpanded = card;

        if (card.getAttribute('data-id') === 'n8n') {
            mountWorkflow();
        }
    }

    function collapseCards() {
        if (!currentlyExpanded) return;
        currentlyExpanded.classList.remove('expanded');
        currentlyExpanded = null;
    }

    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => expandCard(card));
    });

    if (skillsGrid) {
        skillsGrid.addEventListener('mouseleave', () => {
            collapseCards();
        });
    }

    // --- Modal Logic for Experience Cards Only ---
    const modalOverlay = document.getElementById('modal-overlay');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.querySelector('.modal-close');

    function openModal(type, id) {
        let data;
        if (type === 'experience') {
            data = experienceData[id];
        }

        if (!data) return;

        const heading = data.company || data.title || '';
        let roleLine = '';

        if (data.period && data.title) {
            roleLine = `${data.title} | ${data.period}`;
        } else if (data.period) {
            roleLine = data.period;
        }

        modalBody.innerHTML = `
            <h2>${heading}</h2>
            ${roleLine ? `<p class="role">${roleLine}</p>` : ''}
            <div class="modal-desc">${data.description}</div>
        `;

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('click', () => {
            const id = item.getAttribute('data-id');
            openModal('experience', id);
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });
    }

    // --- Timeline Horizontal Scroll ---
    // Removed horizontal scroll logic as layout is now vertical


    // --- Reveal Animations ---
    const observerOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.timeline-item, .skill-card, .footer-content');
    revealElements.forEach(el => {
        if (!el.classList.contains('timeline-item')) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease-out';
        }
        observer.observe(el);
    });

});
