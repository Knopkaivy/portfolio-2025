import { useRef, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { useLenis } from "lenis/react"
import '../Styles/NavSection.scss'

function NavSection() {
    const lenis = useLenis()
    const navSectionRef = useRef(null)
    const navSectionLinkRefs = useRef([]);
    navSectionLinkRefs.current = [];

    const addToRefs = (el) =>{
        if(el && !navSectionLinkRefs.current.includes(el)){
            navSectionLinkRefs.current.push(el);
        }
    }

    useLayoutEffect(()=>{
        let ctx = gsap.context(()=>{
            gsap.from(navSectionLinkRefs.current,{
                opacity: 0,
                y: -50,
                duration: 1,
                stagger: .2,
                scrollTrigger: {
                    trigger: navSectionRef.current,
                    start: 'top 20%',
                    toggleActions: 'play none none none'
                }
            })
        }, navSectionRef)

        return () => ctx.revert()

    }, [])

    const handleScrollToElement = (event, id) => {
        event.preventDefault()
        lenis?.scrollTo(id) 
    }
    return (  
        <nav ref={navSectionRef} className='navsection' >
            <ul className='navsection__list' >
                <li ref={addToRefs} className='navsection__list-item' ><a href="#home-section" onClick={(e)=> handleScrollToElement(e, "#home-section")} >Home</a></li>
                <li ref={addToRefs} className='navsection__list-item'><a href="#projects-section" onClick={(e)=> handleScrollToElement(e, "#projects-section")}>Projects</a></li>
                <li ref={addToRefs} className='navsection__list-item'><a href="#about-section" onClick={(e)=> handleScrollToElement(e, "#about-section")}>About</a></li>
                <li ref={addToRefs} className='navsection__list-item'><a href="#contacts-section" onClick={(e)=> handleScrollToElement(e, "#contacts-section")}>Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavSection;