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

    const skillsData = {
        n8n: {
            title: "n8n Automation",
            subtitle: "AI Agents & Workflows",
            description: `
                <p>One of the most impactful skill sets I developed is building automated workflows and AI-powered tools using n8n, Python, and LLM-based agents. What started as a personal interest quickly turned into practical systems that solve real marketing problems.</p>
                <p>A core project was the creation of an automated research and outreach engine. Using n8n and an LLM-based agent, I built a workflow that could analyze any lead, gather relevant public data, extract key context, and generate a fully personalized outreach message tailored to that individual. Instead of sending generic cold emails, the system produced outreach that felt human, informed, and specific — dramatically increasing the quality of lead interactions.</p>
                <p>I first built this system for my own use, but later adapted a version for a friend in the insurance industry, where highly personalized outreach is essential. The workflow automatically researched each insurance lead, identified their needs and background, and drafted a compelling, natural-sounding email that my friend could send with minimal editing. Seeing how much time this saved — and how much more thoughtful and effective the communication became — showed me how powerful AI-assisted marketing operations can be in practice.</p>
                <p>This project taught me how to structure complex automation chains, design reliable workflows, and combine creativity with technical precision. More importantly, it sparked my interest in building AI tools that make marketing more efficient, more personal, and more human at scale.</p>
                <div id="n8n-modal-container" style="height: 400px; width: 100%; border: 1px solid #333; border-radius: 8px; margin-top: 20px; overflow: hidden; background: #f0f0f0; display: flex; align-items: center; justify-content: center; color: #333;">
                    Loading workflow...
                </div>
            `
        },
        langchain: {
            title: "Cursor / LangChain",
            subtitle: "LLM Applications",
            description: `
                <p>Alongside my operational work, I’ve increasingly focused on building AI-powered tools that give brands deeper insight into how they appear across modern digital ecosystems. One of my key projects was the development of a first-version AEO Audit Tool — a system designed to track brand mentions, visibility, and sentiment across major LLM platforms. As large language models become a primary interface for information retrieval, understanding how a brand is represented inside them is becoming just as important as traditional SEO.</p>
                <p>The tool aggregates responses from different LLMs, analyzes tone and sentiment, identifies inconsistencies, and highlights opportunities to improve brand presence in AI-driven environments. This project helped me understand how rapidly the information landscape is shifting — and how brands need new forms of monitoring to stay visible and consistent.</p>
                <p>Building on this, I started developing a Customer Simulation Engine: an AI system that predicts how different user segments might react to specific ad concepts, messages, or creative directions. The goal is to allow marketers to test ideas before they go live — using simulated “customer agents” that behave according to psychological, demographic, and contextual cues. While early in development, it has already shown that AI can provide meaningful directional insights long before media spend is involved.</p>
                <p>Both tools reflect my interest in designing systems that sit at the intersection of marketing strategy, data, and AI. They’ve allowed me to think beyond execution and explore how new technologies can give brands a more accurate, dynamic understanding of how they are perceived — and how they can communicate more effectively.</p>
                <div style="margin-top: 20px;">
                    <img src="../refs/langchain.png" alt="LangChain persona insights" style="width: 100%; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.15);">
                </div>
            `
        },
        webdesign: {
            title: "Web Design",
            subtitle: "UX & Frontend",
            description: `
                <p>In addition to my marketing and automation work, I’ve developed practical skills in web design, UX thinking, and the creation of domain-specific chatbots using Retrieval-Augmented Generation (RAG). These projects grew out of real needs from people around me and showed me how powerful technical tools become when they solve concrete problems.</p>
                <p>For a friend working in the insurance industry, I designed and built an entire company website, including structure, content, and front-end implementation. The goal was to create a clean, trustworthy online presence that communicated complex insurance offerings in a simple and customer-friendly way. This project taught me how to translate business goals into design decisions — from layout and hierarchy to tone and visual identity.</p>
                <p>Alongside the website, I built a custom RAG-based chatbot that could answer domain-specific insurance questions. The chatbot uses curated documents, internal guidelines, and product information as its knowledge base, allowing it to respond with accurate, context-relevant answers instead of generic AI responses. It serves as both a customer-facing assistant and an internal tool for quick information access.</p>
                <p>Working on these projects helped me understand the full stack of digital product creation — from designing the surface to building the intelligence behind it. More importantly, they showed me how web and AI technology can make complex services more accessible, responsive, and user-centered.</p>
                <div style="margin-top: 20px;">
                    <img src="assets/langchain_screenshot.png" alt="Web Design Project Screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #333;">
                </div>
            `
        }
    };

    // --- Modal Logic ---
    const modalOverlay = document.getElementById('modal-overlay');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.querySelector('.modal-close');

    function openModal(type, id) {
        let data;
        if (type === 'experience') {
            data = experienceData[id];
        } else if (type === 'skill') {
            data = skillsData[id];
        }

        if (!data) return;

        const heading = data.company || data.title || '';
        let roleLine = '';

        if (data.period && data.title) {
            roleLine = `${data.title} | ${data.period}`;
        } else if (data.period) {
            roleLine = data.period;
        } else if (data.subtitle) {
            roleLine = data.subtitle;
        }

        modalBody.innerHTML = `
            <h2>${heading}</h2>
            ${roleLine ? `<p class="role">${roleLine}</p>` : ''}
            <div class="modal-desc">${data.description}</div>
        `;

        // Special handling for N8n to show React Flow
        if (id === 'n8n') {
            // Poll for renderWorkflow function
            let attempts = 0;
            const maxAttempts = 50; // 5 seconds
            const interval = setInterval(() => {
                if (window.renderWorkflow) {
                    clearInterval(interval);
                    window.renderWorkflow('n8n-modal-container');
                } else {
                    attempts++;
                    if (attempts >= maxAttempts) {
                        clearInterval(interval);
                        const container = document.getElementById('n8n-modal-container');
                        if (container) {
                            container.innerHTML = '<div style="color: red; padding: 20px;">Failed to load workflow script. Please check your connection.</div>';
                        }
                        console.error("renderWorkflow function timed out");
                    }
                }
            }, 100);
        }

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Removed renderStaticWorkflow function as we are using React Flow again



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

    document.querySelectorAll('.skill-card').forEach(item => {
        item.addEventListener('click', () => {
            const id = item.getAttribute('data-id');
            openModal('skill', id);
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
