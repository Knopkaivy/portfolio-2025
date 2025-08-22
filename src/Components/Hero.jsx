import RedBGImage from '../assets/Images/red.webp';
import '../Styles/Hero.scss';
function Hero() {
    return (  
        <>
        <section className='hero'>
            <div className="hero__bg-image-container">
                <img src={RedBGImage} aria-hidden='true' />
            </div>
            <div className="hero__overlay">
                <h1>Front-End Developer</h1>
            </div>
            <div className="hero__overlay--transparent">
                <div className='hero__name'>Tanya Ivy</div>
                <div>
                    <p>I speak <span className='bold' >CSS</span>, dream in <span className="bold">JavaScript</span>, and build magic with <span className="bold">ReactJS</span>.</p>
                    <p>Clean code. Sharp edges. Effortless vibes.</p>
                </div>
            </div>
        </section>
        </>
    );
}

export default Hero;