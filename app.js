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
            key: "menu.about",
            link: "#about"
        },
        {
            key: "menu.projects",
            link: "#projects"
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

    aboutOpened: false,
    openAbout()
    {
        document.getElementById("about-modal").scrollTop = 0;
        
        this.aboutOpened = true;
        this.preventScroll();
    },
    closeAbout()
    {
        this.aboutOpened = false;
        this.allowScroll();
    },
    
    projectOpened: false,
    selectedProject: null,

    projects: [
        {
            key: "saveUp",
            color: "#08877e",
            mobile: true,
            year: "2024",
            tags: ["mobile", "designUIX"],
            techs: ["Figma"],
            images: [
                {src: `mockup-fr.jpg`, alt: "Mockup"},
                {src: "logo.jpg", alt: "Logo"}
            ],
            link: "https://www.figma.com/proto/VZUOdx8wfN1NdFOGYB6SJK/SaveUp",
            prototypeLink: "https://www.figma.com/design/VZUOdx8wfN1NdFOGYB6SJK/SaveUp"
        },
        {
           key: "saveUpWebsite",
           color: "#333333",
           year: "2024",
           tags: ["website", "mobile", "designUIX"],
           techs: ["Figma"],
           images: [
               {src: `mockup-fr.jpg`, alt: "Mockup"}
           ],
           link: "https://www.figma.com/proto/R8usq9CPmiUgy1QaaqLKRU/SaveUp-Website",
           prototypeLink: "https://www.figma.com/design/R8usq9CPmiUgy1QaaqLKRU/SaveUp-Website"
        },
        {
            key: "traceApp",
            color: "#012141",
            year: "2022 - 2024",
            tags: ["app", "designUIX", "web"],
            techs: ["Vue.js", "PHP"],
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
            techs: ["Wordpress"],
            images: [
                {src: `website-${$locale}.jpg`, alt: "Website"}
            ],
            link: "https://traceapp.ca"
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

    getProjectAnimationDelay(index)
    {
        if(screen.mobile || index >= 2) {
            return index % 2 === 0 ? 0 : 100;
        }

        return index === 1 ? 500 : 400;
    }
}).mount();

AOS.init({
    duration: 600,
    easing: "ease-out"
});
