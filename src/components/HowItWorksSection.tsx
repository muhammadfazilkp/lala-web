import { Headphones, Baby, Sparkles } from "lucide-react";
import storyOwl from "../assets/story-owl.png";

const features = [
  {
    icon: Headphones,
    title: "Listen to them Listen with them",
    description: "Whether you want to screen their kids' screen time, pause or even remove screen time, our audio stories help you do just that without the tantrums. Choose from over 2000+ stories created just for kids.",
  },
  {
    icon: Baby,
    title: "Boost the baby babbles!",
    description: "The early sounds a baby makes, their adorable vocabulary explosion, it's all related to what they hear around them. It's so important to choose their listening journey wisely, choose from 6+ languages.",
  },
  {
    icon: Sparkles,
    title: "Nurture Their Imagination",
    description: "Every story we create lets your child enter a world of imagination and fun. Let their minds freely run from character to character, scene to scene, nurturing their brain while they are listening.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto w-fit">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px] scale-75" />
              <img
                src={storyOwl}
                alt="Storytelling illustration"
                className="relative z-10 w-80 h-80 object-contain"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground mb-10 max-w-lg">
              Bedtime stories and Lala Stories puts you in magical worlds, teaching morals, ethics, values, and building vocabulary while having fun! Stories they will love that make life easier! Let's bring back storytelling the way it's meant to be. Listen to Lala.
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
