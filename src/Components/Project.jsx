import { useRef, forwardRef,useImperativeHandle,  useLayoutEffect } from "react"
import gsap from "gsap"
import '../Styles/Project.scss'

const Project = forwardRef(({imgSrcDesktop, imgSrcTablet, imgSrcLaptop, imgSrcMobile, imgSrcMobileXS, name, url, ind}, ref) => {
    const projectRef = useRef(null);
    const projectImageOverlayRef = useRef(null);
    const projectLinkRef = useRef(null);

    useImperativeHandle(ref, () =>{
        return {
        root: projectRef.current,
        imageOverlay: projectImageOverlayRef.current,
        link: projectLinkRef.current,
        }
    },[]);

    useLayoutEffect(()=>{
        if(ind === 0){
            let ctx = gsap.context(()=>{
                gsap.from(projectLinkRef.current,{
                    y: 200,
                    ease: "power4.in",
                    scrollTrigger: {
                        trigger: projectRef.current,
                        start: 'top 50%',
                        end: 'top 0%',
                        scrub: 1
                    }
                });

                gsap.to(projectImageOverlayRef.current,{
                    opacity: .3,
                    ease: "sine.in",
                    scrollTrigger: {
                        trigger: projectRef.current,
                        start: 'top 100%',
                        end: 'top 0%',
                        scrub: 1
                    }
                });
            }, projectRef);
            return () => ctx.revert();
        }
    }, [])

    return (  
        <div ref={projectRef} className="project" style={{zIndex: ind}} >
            <div className="project__image-container">
                <div ref={projectImageOverlayRef} className="project__image-overlay"></div>
                <picture>
                    <source media="(max-width: 450px)" srcSet={imgSrcMobileXS} />
                    <source media="(max-width: 767px)" srcSet={imgSrcMobile} />
                    <source media="(max-width: 1023px)" srcSet={imgSrcTablet} />
                    <source media="(max-width: 1439px)" srcSet={imgSrcLaptop} />
                    <img src={imgSrcDesktop} aria-hidden='true' className="project__image" />
                </picture>
            </div>
            <div className="project__content-container">
                <div ref={projectLinkRef} className="project__link-container">
                    <svg height="60" width="800" xmlns="http://www.w3.org/2000/svg">
                        <rect className="project__svg" height="60" width="800" />
                    </svg>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="project__link">{name}</a>
                </div>
            </div>
        </div>
    );
})

export default Project;