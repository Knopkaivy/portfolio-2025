import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import '../Styles/Project.scss'

function Project({imgSrc, name}) {
    const projectRef = useRef(null);
    const projectImageOverlayRef = useRef(null);
    const projectImageRef = useRef(null);
    const projectLinkRef = useRef(null);

    useLayoutEffect(()=>{
        let ctx = gsap.context(()=>{
            gsap.from(projectLinkRef.current,{
                y: 50,
                scrollTrigger: {
                    trigger: projectRef.current,
                    start: 'top 30%',
                    end: 'top 0%',
                    scrub: 1
                }
            });

            gsap.from(projectImageOverlayRef.current,{
                opacity: .1,
                scrollTrigger: {
                    trigger: projectRef.current,
                    start: 'top 50%',
                    end: 'top 0%',
                    scrub: 1
                }
            });

            gsap.to(projectImageRef.current,{
                scale: 1.025,
                scrollTrigger: {
                    trigger: projectRef.current,
                    start: 'top 90%',
                    end: 'top 0%',
                    scrub: true
                }
            });
        }, projectRef);

        return () => ctx.revert();
    }, [])

    return (  
        <div ref={projectRef} className="project">
            <div className="project__image-container">
                <div ref={projectImageOverlayRef} className="project__image-overlay"></div>
                <img ref={projectImageRef} src={imgSrc} aria-hidden='true' className="project__image" />
            </div>
            <div className="project__content-container">
                <div ref={projectLinkRef} className="project__link-container">
                    <svg height="60" width="800" xmlns="http://www.w3.org/2000/svg">
                        <rect className="project__svg" height="60" width="800" />
                    </svg>
                    <a href="/" className="project__link">{name}</a>
                </div>
            </div>
        </div>
    );
}

export default Project;