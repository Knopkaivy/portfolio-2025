import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import Contacts from './Contacts'
import DeveloperImage from '../assets/Images/TIvy.webp'
import '../Styles/About.scss'

function About() {
    const aboutRef = useRef(null);
    const aboutImgRef = useRef(null);
    const aboutContentRef = useRef(null);

    useLayoutEffect(()=>{
        const ctx = gsap.context(()=>{
            const mm = gsap.matchMedia();

            mm.add("(min-width: 1024px)", () =>{
                gsap.to(aboutContentRef.current, {
                    yPercent: -10,
                    scrollTrigger: {
                        trigger: aboutRef.current,
                        start: 'top 0%',
                        end: 'bottom 100%',
                        scrub: 1
                    }
                });
                
                gsap.to(aboutImgRef.current,{
                    scale: .7,
                    transformOrigin: '0% 100%',
                    scrollTrigger: {
                        trigger: aboutRef.current,
                        start: 'top 0%',
                        end: 'bottom 100%',
                        scrub: 1
                    }
                });
            })

            mm.add("(max-width: 1023px)", () =>{
                gsap.from(aboutContentRef.current, {
                    y: 150,
                    scrollTrigger: {
                        trigger: aboutRef.current,
                        start: 'top 100%',
                        end: 'bottom 75%',
                        scrub: 1
                    }
                });
            })


        }, aboutRef);
        return () => ctx.revert();
    }, []);
    return ( 
        <section ref={aboutRef} id="about-section" className="about" >
            <div className="about__main">
                <div ref={aboutContentRef} className="about__content-container">
                    <p className="about__content-item red increased">I build with intention.</p>
                    <p className="about__content-item">Guided by minimalism and global perspective, I believe, the best design speaks quietly. Beyond the code, I bring clarity, empathy, and a sharp eye for what feels right. I navigate complexity with calm, collaborate with care, and never lose sight of the human on the other side of the screen.</p>
                </div>
                <div ref={aboutImgRef} className="about__image-container">
                    <div className="about__image-overlay"></div>
                    <img src={DeveloperImage} alt="developer portrait" />
                </div>
            </div>
            <Contacts/>
        </section>
     );
}

export default About;