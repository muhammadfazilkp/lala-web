import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import storyBear from "../assets/story-bear.png";
import { Button } from "./ui/button";

const popularStories = [
  {
    id: 1,
    image: storyBear,
    title: "Fun in featherland",
    description: "Story of a baby tiger who made friends with a rabbit",
    featured: false,
  },
  {
    id: 2,
    image: storyBear,
    title: "Fun in featherland",
    description: "Story of a metro train who always disobeyed his driver",
    featured: true,
  },
  {
    id: 3,
    image: storyBear,
    title: "Fun in featherland",
    description: "A tale of adventure and discovery",
    featured: false,
  },
];

const PopularStoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % popularStories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + popularStories.length) % popularStories.length);
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Button variant="outline" size="sm" className="rounded-full mb-4">
            See All Popular Stories
          </Button>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {popularStories.map((story, index) => {
              const isCurrent = index === currentIndex;
              return (
                <div
                  key={story.id}
                  className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
                    isCurrent
                      ? "w-72 md:w-96 h-96 md:h-[500px] z-20"
                      : "w-48 md:w-64 h-72 md:h-96 opacity-60 scale-95 hidden md:block"
                  }`}
                >
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  
                  {isCurrent && (
                    <>
                      <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 rounded-full text-xs font-semibold text-primary-foreground">
                        {story.title}
                      </div>
                      <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-foreground/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-background fill-background ml-1" />
                      </button>
                    </>
                  )}
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-display font-bold text-foreground mb-1">
                      {story.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {story.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-card rounded-full flex items-center justify-center border border-border hover:border-primary transition-colors z-30"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-card rounded-full flex items-center justify-center border border-border hover:border-primary transition-colors z-30"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {popularStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularStoriesSection;
