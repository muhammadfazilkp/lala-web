
import { ArrowRight } from "lucide-react";
import storyBunny  from "../assets/story-bunny.png";
import storyStar from "../assets/story-star.png";
import storyBear from "../assets/story-bear.png";
import { Button } from "./ui/button";

const stories = [
  {
    image: storyBunny,
    title: "Who Stole the Moon?",
    subtitle: "A magical adventure",
  },
  {
    image: storyStar,
    title: "The Friendly Star",
    subtitle: "A tale of friendship",
  },
  {
    image: storyBear,
    title: "Bear's Night Journey",
    subtitle: "An enchanting story",
  },
];

const StoriesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-glow-gradient opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-4">
          <Button variant="outline" size="sm" className="rounded-full">
            Try App Now
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl overflow-hidden card-glow border border-border/30 hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-display font-bold text-foreground mb-1">
                  {story.title}
                </h3>
                <p className="text-sm text-muted-foreground">{story.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="link" className="text-primary">
            Learn More <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
