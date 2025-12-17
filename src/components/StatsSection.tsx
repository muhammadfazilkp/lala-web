import { Headphones, Star, BookOpen, Users } from "lucide-react";

const stats = [
  { icon: Headphones, value: "2,00,000+", label: "Active users" },
  { icon: Star, value: "4.5+", label: "App rating" },
  { icon: BookOpen, value: "2,000+", label: "stories" },
  { icon: Users, value: "Available on", label: "6 Languages" },
  { icon: Headphones, value: "Listed in 10", label: "Apple Indie/niche" },
];

const StatsSection = () => {
  return (
    <section className="relative py-12 bg-card border-y border-border/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl md:text-2xl font-display font-bold text-foreground">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
