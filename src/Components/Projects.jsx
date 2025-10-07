import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import Project from './Project'
import ProjectImagesArray from './ProjectImages'
import '../Styles/Projects.scss'

function Projects() {
    const projectListArray = [
        {
            imgSrcMobileXS: ProjectImagesArray[0].imageMobileXS, 
            imgSrcMobile: ProjectImagesArray[0].imageMobile, 
            imgSrcTablet: ProjectImagesArray[0].imageTablet, 
            imgSrcLaptop: ProjectImagesArray[0].imageLaptop, 
            imgSrcDesktop: ProjectImagesArray[0].imageDesktop, 
            name: 'Beauty Salon Landing Page', 
            url: 'https://beauty-salon-landing-demo.web.app/'
        },
        {
            imgSrcMobileXS: ProjectImagesArray[1].imageMobileXS, 
            imgSrcMobile: ProjectImagesArray[1].imageMobile, 
            imgSrcTablet: ProjectImagesArray[1].imageTablet, 
            imgSrcLaptop: ProjectImagesArray[1].imageLaptop, 
            imgSrcDesktop: ProjectImagesArray[1].imageDesktop, 
            name: 'Hotel Landing Page', 
            url: 'https://borgo-santandrea-home-demo.web.app/'
        },
        {
            imgSrcMobileXS: ProjectImagesArray[2].imageMobileXS, 
            imgSrcMobile: ProjectImagesArray[2].imageMobile, 
            imgSrcTablet: ProjectImagesArray[2].imageTablet, 
            imgSrcLaptop: ProjectImagesArray[2].imageLaptop, 
            imgSrcDesktop: ProjectImagesArray[2].imageDesktop, 
            name: 'Photographer Portfolio', 
            url: 'https://photographer-portfolio-demo.web.app/'
        },
        {
            imgSrcMobileXS: ProjectImagesArray[3].imageMobileXS, 
            imgSrcMobile: ProjectImagesArray[3].imageMobile, 
            imgSrcTablet: ProjectImagesArray[3].imageTablet, 
            imgSrcLaptop: ProjectImagesArray[3].imageLaptop, 
            imgSrcDesktop: ProjectImagesArray[3].imageDesktop, 
            name: 'Real Estate Listing', 
            url: 'https://real-estate-landing-demo.web.app/'

        },
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
                        duration: .5,
                        ease: "sine.in"
                    }, '<');
                }
            })
        }, projectsContainerRef);
        return () => ctx.revert();
    }, [projectListArray]);

    const projectList = projectListArray.map((project, i) =>{
        return <Project 
        key={i} 
        imgSrcMobileXS={project.imgSrcMobileXS} 
        imgSrcMobile={project.imgSrcMobile} 
        imgSrcTablet={project.imgSrcTablet} 
        imgSrcLaptop={project.imgSrcLaptop} 
        imgSrcDesktop={project.imgSrcDesktop} 
        name={project.name} 
        url={project.url} 
        ind={i} 
        ref={(el) => (projectsRef.current[i] = el)

        } />
    })

    return (


        <section ref={projectsContainerRef} id="projects-section" className="projects" >
            {projectList}
        </section>
      );
}

export default Projects;