import { useRef, useLayoutEffect } from "react"
import { gsap } from "gsap"
import '../Styles/SeeMore.scss'

function SeeMore() {
    const seeMoreRef = useRef(null);
    const seeMoreLinkRefs = useRef([]);
    seeMoreLinkRefs.current = [];

    const addToRefs = (el) =>{
        if(el && !seeMoreLinkRefs.current.includes(el)){
            seeMoreLinkRefs.current.push(el);
        }
    }

    useLayoutEffect(()=>{
        let ctx = gsap.context(()=>{
            gsap.from(seeMoreLinkRefs.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                stagger: .2,
                scrollTrigger: {
                    trigger: seeMoreRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                }
            });

        }, seeMoreRef);

        return () => ctx.revert();

    }, [])

    return ( 
        <section ref={seeMoreRef} className="see-more">
            <div className="see-more__title red increased">
                See more of my work
            </div>
            <div className="see-more__links-container">
                <a href="https://github.com/Knopkaivy" target="_blank" rel="noreferrer" ref={addToRefs} className="see-more__link link">GitHub</a>
                <a href="https://codepen.io/knopkaivy" target="_blank" rel="noreferrer" ref={addToRefs} className="see-more__link link">CodePen</a>
            </div>
        </section>
     );
}

export default SeeMore;