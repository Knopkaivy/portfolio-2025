import { useRef, useLayoutEffect } from "react"
import { gsap } from "gsap"
import '../Styles/Contacts.scss'

function Contacts() {
    const contactsRef = useRef(null);
    const contactsLinkRefs = useRef([]);
    contactsLinkRefs.current = [];

    const addToRefs = (el) =>{
        if(el && !contactsLinkRefs.current.includes(el)){
            contactsLinkRefs.current.push(el);
        }
    }

    useLayoutEffect(()=>{

        let ctx = gsap.context(()=>{
            gsap.from(contactsLinkRefs.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                stagger: .2,
                scrollTrigger: {
                    trigger: contactsRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                }
            });

        }, contactsRef);

        return () => ctx.revert();

    }, [])

    return ( 
        <section ref={contactsRef} id="contacts-section" className="contacts">
            <div className="contacts__title red increased">Reach out at</div>
            <div className="contacts__links-container">
                <a href="mailto:tetianaivy@gmail.com" ref={addToRefs} className="contacts__link link">Email</a>
                <a href="https://www.linkedin.com/in/tetiana-ivy-213801134/" target="_blank" rel="noreferrer" ref={addToRefs} className="contacts__link link">LinkedIn</a>
                <a href="https://www.fiverr.com/s/7YBL22L" target="_blank" rel="noreferrer" ref={addToRefs} className="contacts__link link">fiverr.</a>
            </div>
        </section>
     );
}

export default Contacts;