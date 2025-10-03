import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { useLenis } from "lenis/react"
import LinkedInSvg from '../assets/Icons/linkedin.svg?react'
import GitHubSvg from '../assets/Icons/github.svg?react'
import FiverrSvg from '../assets/Icons/fiverr.svg?react'
import '../Styles/Menu.scss'
function Menu() {
    const lenis = useLenis()
    const tlRef = useRef()
    const menuRef = useRef(null)
    const hamburgerRef = useRef(null)
    const closeRef = useRef(null)
    const overlayRef = useRef(null)
    const menuNavSectionLinkRefs = useRef([])
    menuNavSectionLinkRefs.current = []

    const [isOverlayOpen, setIsOverlayOpen] = useState(false)
    useEffect(()=>{
        const bodyElement = document.body;
        if(isOverlayOpen){
            bodyElement.classList.add('no-scroll');
        } else {
            bodyElement.classList.remove('no-scroll');
        }
        return () => bodyElement.classList.remove('no-scroll');
    }, [isOverlayOpen])

    useLayoutEffect(()=>{
        const ctx = gsap.context(()=>{

            gsap.from(menuRef.current, {
                scale: 0,
                transformOrigin: 'center center',
                opacity: 0,
                scrollTrigger: {
                    trigger: 'body',
                    start: 'top -8%',
                    duration: .5,
                    toggleActions: 'play none play reverse'
                }
            })

            const tl = gsap.timeline({
                paused: true, 
                reversed: true,
                onReverseComplete: () => {
                    document.body.classList.remove('no-scroll');
                },
                onComplete: () => {
                    document.body.classList.add('no-scroll');
                }
            });

            tl.to(hamburgerRef.current, {scale: 0, duration: .5, ease: 'power3.out'})
            .from(overlayRef.current, {scale: 0, opacity:0, duration: .5, ease: 'power3.out', transformOrigin: 'top center'}, '-=.5')
            .from(closeRef.current, {scale: 0, duration: .5, ease: 'power3.out'}, '-=.25')
            tlRef.current = tl
        })

        return () => ctx.revert();

    }, [])

    const addToRefs = (el) =>{
        if(el && !menuNavSectionLinkRefs.current.includes(el)){
            menuNavSectionLinkRefs.current.push(el);
        }
    }

    const handleMenuButtonClick = () =>{
        const tl = tlRef.current;
        if(tl){
            tl.reversed() ? tl.play() : tl.reverse();
        }
    }

    const handleScrollToElement = (event, id) => {
        event.preventDefault()
        document.querySelector('.menu__button--close').click()
        lenis?.scrollTo(id) 
    }
    return (  
        <>
            <div ref={menuRef} className='menu' >
                <button className="menu__button" onClick={handleMenuButtonClick} >
                    <span ref={hamburgerRef} className="menu__hamburger">
                        <span className="menu__line">
                            <span className="menu__line-inner"></span>
                        </span>
                        <span className="menu__line">
                            <span className="menu__line-inner"></span>
                        </span>
                    </span>
                </button>
            </div>
            <div ref={overlayRef} className="menu__overlay">
                <button className="menu__button menu__button--close" onClick={handleMenuButtonClick} >
                    <span ref={closeRef} className="menu__close">
                        <span className="menu__close-line"></span>
                        <span className="menu__close-line"></span>
                    </span>
                </button>
                <div className="menu__content">
                    <div className="menu__navigation">
                        <ul className='menu__navlist' >
                            <li ref={addToRefs} className='menu__navlist-item' ><a href="#home-section" onClick={(e)=> handleScrollToElement(e, "#home-section")} >Home</a></li>
                            <li ref={addToRefs} className='menu__navlist-item'><a href="#projects-section" onClick={(e)=> handleScrollToElement(e, "#projects-section")}>Projects</a></li>
                            <li ref={addToRefs} className='menu__navlist-item'><a href="#about-section" onClick={(e)=> handleScrollToElement(e, "#about-section")}>About</a></li>
                            <li ref={addToRefs} className='menu__navlist-item'><a href="#contacts-section" onClick={(e)=> handleScrollToElement(e, "#contacts-section")}>Contact</a></li>
                        </ul>
                    </div>
                    <div className="menu__contacts">
                        <div className="menu__contacts-icons">
                            <ul className="menu__iconlist">
                                <li className="menu__icon">
                                    <a href="https://www.linkedin.com/in/tetiana-ivy-213801134/" target="_blank" rel="noreferrer" ref={addToRefs} className="menu__icon-link link"><LinkedInSvg/></a>
                                </li>
                                <li className="menu__icon">
                                    <a href="https://github.com/Knopkaivy" target="_blank" rel="noreferrer" ref={addToRefs} className="menu__icon-link link"><GitHubSvg/></a>
                                </li>
                                <li className="menu__icon">
                                    <a href="https://www.fiverr.com/s/7YBL22L" target="_blank" rel="noreferrer" ref={addToRefs} className="menu__icon-link link"><FiverrSvg/></a>
                                </li>
                            </ul>
                        </div>
                        <div className="menu__contacts-email">Inquiries - <a href="mailto:tetianaivy@gmail.com" ref={addToRefs} className="menu__link--email link">tetianaivy@gmail.com</a></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;