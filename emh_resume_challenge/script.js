// JavaScript to handle dynamic content display
document.addEventListener("DOMContentLoaded", () => {
    const paragraphList = document.querySelectorAll(".paragraph-list li");
    const contentDisplay = document.getElementById("content-display");

    // Content for each paragraph
    const contentData = {
        summary: `
            <h2>Summary</h2>
            <p>Experienced Technology Architect with a proven track record in designing and implementing scalable, high-performance systems. Passionate about leveraging cutting-edge technologies to solve complex problems and drive business growth.</p>
        `,
        skills: `
            <h2>Skills</h2>
            <ul>
                <li>Cloud Architecture (AWS, Azure)</li>
                <li>Microservices & API Design</li>
                <li>DevOps & CI/CD Pipelines</li>
                <li>Data Modeling & Database Design</li>
                <li>Agile Methodologies</li>
            </ul>
        `,
        experience: `
            <h2>Experience</h2>
            <div class="job">
                <h3>Senior Technology Architect</h3>
                <p>Tech Solutions Inc. - Casablanca, Morocco</p>
                <p>Jan 2018 - Present</p>
                <ul>
                    <li>Designed and implemented cloud-based solutions for enterprise clients.</li>
                    <li>Led a team of developers to deliver scalable microservices architecture.</li>
                </ul>
            </div>
        `,
        education: `
            <h2>Education</h2>
            <div class="school">
                <h3>Master's in Computer Science</h3>
                <p>University of Casablanca - Casablanca, Morocco</p>
                <p>Graduated: 2017</p>
            </div>
        `,
        projects: `
            <h2>Projects</h2>
            <div class="project">
                <h3>E-Commerce Platform</h3>
                <p>Developed a scalable e-commerce platform using microservices architecture.</p>
                <p>Technologies: Node.js, React, Docker, Kubernetes</p>
                <p><a href="#">View Project</a></p>
            </div>
        `,
    };

    // Add click event listeners to paragraph names
    paragraphList.forEach((paragraph) => {
        paragraph.addEventListener("click", () => {
            const target = paragraph.getAttribute("data-target");
            contentDisplay.innerHTML = contentData[target];
        });
    });
});


// JavaScript Code Counter

// JavaScript Code Counter
const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch("https://idgmbzgoijsepvyejfg46auidq0nxrwv.lambda-url.ca-central-1.on.aws/");
        if (!response.ok) throw new Error("Network response was not ok");
        
        let data = await response.json();
        
        // Animate the counter
        let current = 0;
        const target = data;
        const increment = target / 50;
        
        const update = () => {
            current = Math.min(current + increment, target);
            counter.innerHTML = `Views: ${Math.floor(current)}`;
            if (current < target) {
                requestAnimationFrame(update);
            }
        };
        
        update();
        
    } catch (error) {
        console.error("Error updating counter:", error);
        counter.innerHTML = "Views: Many";
    }
}

// Call when page loads
document.addEventListener("DOMContentLoaded", updateCounter);