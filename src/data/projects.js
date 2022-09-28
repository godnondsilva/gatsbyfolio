const projects = [
    {
        id: 1,
        title: "CRWN Clothing Ltd.",
        description: "An e-commerce website built with front-end tools like React, Redux and styled-components. The back-end is built with Firebase. It also includes payment integration with Stripe API.",
        skills: ["React", "Redux", "Firebase", "Stripe", "Styled-components"],
        delay: 100,
        inverse: true,
        image: "crwn-clth",
        source: "https://github.com/godnondsilva/crwn-clothing-project",
        projectUrl: "https://crwn-clothing-project.now.sh",
        readSource: true,
        isFeatured: true,
    },
    {
        id: 2,
        title: "Portfolio",
        description: "A portfolio website built with Gatsby.js and GraphQL. It also uses styled-components for styling.",
        skills: ["React", "Gatsby.js", "GraphQL", "Styled-components"],
        delay: 100,
        inverse: false,
        image: "portfolio",
        source: null,
        projectUrl: "https://godnondsilva.com",
        readSource: false,
    },
]

export default projects;