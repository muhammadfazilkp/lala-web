import { Play, Star } from "lucide-react";
import storyOwl from "../assets/story-owl.png";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with stars */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card">
        {/* Animated stars */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full star-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              <span className="text-gradient">SAY GOODBYE</span>
              <br />
              <span className="text-foreground">TO SCREEN ADDICTION</span>
              <br />
              <span className="text-gradient">THROUGH ENGAGING TALES...</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              India's first bedtime audio storytelling app for kids!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl">
                <Play className="w-5 h-5 fill-current" />
                Try App Now
              </Button>
              <Button variant="outline" size="xl">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-[60px] scale-90" />
              {/* <img
                src={storyOwl}
                alt="Friendly owl storyteller"
                className="relative z-10 w-80 h-80 md:w-96 md:h-96 object-contain float-animation"
              /> */}
              {/* Floating stars around the character */}
              <Star className="absolute top-10 right-0 w-8 h-8 text-accent fill-accent star-twinkle" />
              <Star className="absolute bottom-20 left-0 w-6 h-6 text-accent fill-accent star-twinkle" style={{ animationDelay: "0.5s" }} />
              <Star className="absolute top-1/2 right-[-20px] w-5 h-5 text-accent fill-accent star-twinkle" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
