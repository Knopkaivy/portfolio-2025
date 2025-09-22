import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import '../Styles/Hero.scss'

function Hero() {
    const heroRef = useRef(null);
    const heroImgRef = useRef(null);
    const heroHeadingRef = useRef(null);
    const heroNameRef = useRef(null);
    const heroDescriptionRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() =>{

            gsap.to(heroHeadingRef.current, {
                y: -100,
                scrollTrigger:{
                    trigger: heroRef.current,
                    start: 'top 0%',
                    end: 'bottom 0%',
                    scrub: true,
                }
            });

            const tl = gsap.timeline({     
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top 10%",
                    toggleActions: 'play none none none'
                },
            },);

            tl.from(heroNameRef.current, {opacity: 0, y: -50, duration: 2})
                .from(heroDescriptionRef.current, {opacity: 0, y: 50, duration: 2}, '-=1')
                .from(heroHeadingRef.current, {y: 250, duration: 2}, '-=1');

        }, heroRef);
        return () => ctx.revert();

    }, []);
    return (  
        <>
        <section ref={heroRef} className='hero'>
            <div className="hero__bg-container">
            </div>
            <div className="hero__overlay">
                <h1 ref={heroHeadingRef}>Front-End Developer</h1>
            </div>
            <div className="hero__overlay--transparent">
                <div ref={heroNameRef} className='hero__name'>Tetiana Ivy</div>
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