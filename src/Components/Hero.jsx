import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import RedBGImage from '../assets/Images/red.webp'
import '../Styles/Hero.scss'

function Hero() {
    const heroRef = useRef(null);
    const heroImgRef = useRef(null);
    const heroHeadingRef = useRef(null);
    const heroNameRef = useRef(null);
    const heroDescriptionRef = useRef(null);
    useLayoutEffect(() => {

        let ctx = gsap.context(() =>{
            gsap.from(heroNameRef.current, {
                opacity: 0,
                y: -50,
                duration: 1,
                scrollTrigger:{
                    trigger: heroNameRef.current,
                    start: 'top 50%',
                    toggleActions: 'play none none none'
                }
            });

            gsap.from(heroHeadingRef.current, {
                opacity: 0,
                y: -30,
                duration: 1.5,
                delay: .5,
                scrollTrigger:{
                    trigger: heroHeadingRef.current,
                    start: 'top 50%',
                    toggleActions: 'play none none none'
                }
            });

            gsap.from(heroDescriptionRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                delay: 1,
                scrollTrigger:{
                    trigger: heroDescriptionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            });

            const tl = gsap.timeline({     
                scrollTrigger: {
                    trigger: heroHeadingRef.current,
                    start: "top 40%",
                    end: 'bottom 10%',
                    scrub: true
                },
            },);

            tl.to(heroImgRef.current, {scale: 1.2})
                .to(heroHeadingRef.current, {y: -60}, '<')
                .to(heroNameRef.current, {y: -30}, '<');

        }, heroRef);
        return () => ctx.revert();

    }, []);
    return (  
        <>
        <section ref={heroRef} className='hero'>
            <div className="hero__bg-image-container">
                <img src={RedBGImage} ref={heroImgRef} aria-hidden='true' />
            </div>
            <div className="hero__overlay">
                <h1 ref={heroHeadingRef}>Front-End Developer</h1>
            </div>
            <div className="hero__overlay--transparent">
                <div ref={heroNameRef} className='hero__name'>Tanya Ivy</div>
                <div ref={heroDescriptionRef} >
                    <p>I speak <span className='increased' >CSS</span>, dream in <span className='increased'>JavaScript</span>, and build magic with <span className='increased'>ReactJS</span>.</p>
                    <p>Clean code. Sharp edges. Effortless vibes.</p>
                </div>
            </div>
        </section>
        </>
    );
}

export default Hero;