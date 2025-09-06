import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import Contacts from './Contacts'
import DeveloperImage from '../assets/Images/TIvy.webp'
import '../Styles/About.scss'

function About() {
    const aboutRef = useRef(null);
    const aboutImgRef = useRef(null);
    const aboutImgOverlayRef = useRef(null);
    const aboutContentRef = useRef(null);

    useLayoutEffect(()=>{
        const ctx = gsap.context(()=>{
            gsap.from(aboutImgRef.current, {
                scale: 1.05,
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: 'top 0%',
                    end: 'bottom 100%',
                    scrub: true
                }
            });

            gsap.from(aboutImgOverlayRef.current, {
                opacity: .1,
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: 'top 0%',
                    end: 'bottom 100%',
                    scrub: true
                }
            });

            gsap.to(aboutContentRef.current, {
                y: -300,
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: 'top 0%',
                    end: 'bottom 100%',
                    scrub: true
                }
            });
        }, aboutRef);
        return () => ctx.revert();
    }, []);
    return ( 
        <div ref={aboutRef} className="about" >
            <div className="about__main">
                <div ref={aboutContentRef} className="about__content-container">
                    <p className="about__content-item red increased">I build with intention.</p>
                    <p className="about__content-item">Guided by minimalism and global perspective, I believe, the best design speaks quietly. Beyond the code, I bring clarity, empathy, and a sharp eye for what feels right. I navigate complexity with calm, collaborate with care, and never lose sight of the human on the other side of the screen.</p>
                </div>
                <div className="about__image-container">
                    <div ref={aboutImgOverlayRef} className="about__image-overlay"></div>
                    <img ref={aboutImgRef} src={DeveloperImage} alt="developer portrait" />
                </div>
            </div>
            <Contacts/>
        </div>
     );
}

export default About;