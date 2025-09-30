import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import Project from './Project'
import ProjectImagesArray from './ProjectImages'
import '../Styles/Projects.scss'

function Projects() {
    const projectListArray = [
        {imgSrc: ProjectImagesArray[0].image, name: 'Beauty Salon Landing Page', url: 'https://beauty-salon-landing-demo.web.app/'},
        {imgSrc: ProjectImagesArray[1].image, name: 'Hotel Landing Page', url: 'https://borgo-santandrea-home-demo.web.app/'},
        {imgSrc: ProjectImagesArray[2].image, name: 'Photographer Portfolio', url: 'https://photographer-portfolio-demo.web.app/'},
        {imgSrc: ProjectImagesArray[3].image, name: 'Real Estate Listing', url: 'https://real-estate-landing-demo.web.app/'},
    ]

    const projectsContainerRef = useRef(null);
    const projectsRef = useRef([]);
    projectsRef.current = [];

    useLayoutEffect(()=>{
        if(!projectsRef.current.length) return;

        const ctx = gsap.context(()=>{
            const tl = gsap.timeline({
                scrollTrigger:{
                    trigger: projectsContainerRef.current,
                    ease: "power4.in",
                    start: 'top 0%',
                    end: () => '+=' + window.innerHeight * projectsRef.current.length,
                    scrub: 1,
                    pin: true,
                }
            });

            projectsRef.current.forEach((project, i) => {
                if(i !== 0 ){
                    tl.from(project.root, {yPercent: 100 }, '+=0')
                    .from(project.link,{
                        y: 200,
                        duration: .5
                    }, '<')
                    .to(project.imageOverlay,{
                        opacity: .5,
                        duration: .5
                    }, '<');
                }
            })
        }, projectsContainerRef);
        return () => ctx.revert();
    }, [projectListArray]);

    const projectList = projectListArray.map((project, i) =>{
        return <Project key={i} imgSrc={project.imgSrc} name={project.name} url={project.url} ind={i} ref={(el) => (projectsRef.current[i] = el)} />
    })

    return (


        <section ref={projectsContainerRef} id="projects-section" className="projects" >
            {projectList}
        </section>
      );
}

export default Projects;