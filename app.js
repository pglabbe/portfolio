const screen = PetiteVue.reactive({
    width: window.innerWidth,
    mobile: window.innerWidth <= 900
});

window.addEventListener("resize", () => {
    screen.width = window.innerWidth;
    screen.mobile = window.innerWidth <= 900;
});

PetiteVue.createApp({
    $screen: screen,

    allowScroll()
    {
        document.querySelector("body").classList.remove("no-scroll");
    },
    preventScroll()
    {
        if(!document.querySelector("body").classList.contains("no-scroll")) {
            document.querySelector("body").classList.add("no-scroll");
        }
    },

    menu: false,
    menuItems: [
        {
            key: "menu.home",
            link: "#"
        },
        {
            key: "menu.projects",
            link: "#projects"
        },
        {
            key: "menu.about",
            link: "#about"
        },
        {
            key: "menu.contact",
            link: "#contact"
        }
    ],

    toggleMenu()
    {
        this.menu = !this.menu;
        
        if(this.menu) {
            this.preventScroll();
        } else {
            this.allowScroll();
        }
    },
    closeMenu()
    {
        this.menu = false;
        this.allowScroll();
    },

    contactLink: "mailto:piergabriel.labbe@gmail.com",
    
    projectOpened: false,
    selectedProject: null,

    projects: [
        {
            key: "saveUp",
            color: "#08877e",
            mobile: true,
            year: "2024",
            tags: ["mobile", "designUIX"],
            techs: ["figma"],
            images: [
                {src: `mockup-${$locale}.jpg`, alt: "Mockup"},
                {src: "logo.jpg", alt: "Logo"}
            ],
            link: "https://www.figma.com/proto/F8Ua3ObJj2iX7tHXL1Ilht/SaveUp?page-id=0%3A1&node-id=115-52&node-type=canvas&viewport=21%2C223%2C0.24&t=jhXtdvaFzGm8n9fY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=72%3A27",
            prototypeLink: "https://www.figma.com/design/F8Ua3ObJj2iX7tHXL1Ilht/SaveUp?node-id=0-1&t=VoENwTURbLognBNR-1"
        },
        {
            key: "traceApp",
            color: "#012141",
            year: "2022 - 2024",
            tags: ["app", "designUIX", "web"],
            techs: ["vuejs", "php"],
            images: [
                {src: `login-${$locale}.jpg`, alt: "Login"},
                {src: `dashboard-${$locale}.jpg`, alt: "Dashboard"},
                {src: `reported-events-${$locale}.jpg`, alt: "Reported Events"},
                {src: `reports-and-actions-${$locale}.jpg`, alt: "Reports and Actions"}
            ],
            link: "https://playground.trace.iczones.app"
        },
        {
            key: "traceWebsite",
            color: "#f2430a",
            year: "2022 - 2024",
            tags: ["website", "designUIX", "web"],
            techs: ["wp"],
            images: [
                {src: `website-${$locale}.jpg`, alt: "Website"}
            ],
            link: "https://trace.iczones.com"
        },
    ],

    openProject(project)
    {
        this.selectedProject = project;
        document.getElementById("project-modal").scrollTop = 0;
        
        this.projectOpened = true;
        this.preventScroll();
    },
    closeProject()
    {
        this.projectOpened = false;
        this.allowScroll();
    },
}).mount();

AOS.init({
    duration: 600,
    easing: "ease-out"
});