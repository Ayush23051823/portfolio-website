import { words } from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroExperiences from "../components/HeroModels/HeroExperience.jsx";
import { useEffect } from 'react';
import gsap from 'gsap';
import AnimatedCounter from "../components/HeroModels/AnimatedCounter.jsx";
const Hero = () => {
    useEffect(() => {
        gsap.fromTo(
            '.hero-text h1',
            { y: 50,
              opacity: 0  },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 2,
                ease: 'power2.inOut'
            }
        );
    }, []);

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="Abstract decorative hero background with layered gradients and geometric shapes; primary subjects are overlapping soft-edged shapes and a subtle light flare at top left; environment is a site header spanning the top of the page; no readable text present; mood is calm and modern" />
            </div>        
            <div className="hero-layout">
                {/*LEFT: HERO CONTENT */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>
                            Shaping
                            <span className="slide">
                            <span className="wrapper">
                                {words.map((word)=>(
                                    <span key={word.text} className="flex items-center md:gap-3 gap-1 pd-2">
                                        <img
                                        src={word.imgPath}
                                        alt={word.text}
                                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"/>
                                        <span>{word.text}</span>
                                    </span>
                                ))}
                                </span>
                            </span>
                            </h1>                            
                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>
                        <p className="text-white-30 md:text-xl relative z-10 pointer-events-none">Hi, I’m Ayush — a self-motivated Computer Science student and Full Stack Developer passionate about AI, Machine Learning, and Data Science, focused on clean code and continuous learning.</p>
                        <Button
                        className="md:w-30 md:h-16 w-20 h-12"
                        id="button"
                        text="See my Work"/>
                    </div>
                </header>
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperiences/>
                    </div>
                </figure>
            </div>
            <AnimatedCounter/>
        </section>
    )
}

export default Hero;