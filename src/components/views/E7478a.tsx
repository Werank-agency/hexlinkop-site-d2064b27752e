import { Award, Heart, Rocket, Shield, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface E7478aProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
  className?: string;
}

const iconMap = {
  zap: Zap,
  shield: Shield,
  users: Users,
  trending: TrendingUp,
  heart: Heart,
  sparkles: Sparkles,
  rocket: Rocket,
  award: Award,
};

export default function E7478a({
  title = "Business Insights Hub",
  subtitle = "Discover comprehensive information and resources to drive your business forward and stay ahead in the market",
  features = [
    {
      icon: "trending",
      title: "Market Trends",
      description: "Stay updated with the latest business trends and market analysis to make informed decisions and capitalize on opportunities."
    },
    {
      icon: "shield",
      title: "Secure Information",
      description: "Access reliable and secure business data with our protected platform ensuring your information remains confidential and accurate."
    },
    {
      icon: "users",
      title: "Networking Resources",
      description: "Connect with industry professionals and access exclusive networking tools to build partnerships and expand your business network."
    },
    {
      icon: "award",
      title: "Expert Analysis",
      description: "Benefit from in-depth expert analysis and reports on various business sectors to gain competitive insights and strategic advantages."
    },
    {
      icon: "zap",
      title: "Quick Insights",
      description: "Get instant access to key business insights and summaries that help you respond rapidly to changing market conditions."
    },
    {
      icon: "heart",
      title: "Customer-Focused",
      description: "Explore customer-centric strategies and feedback to enhance your business offerings and improve customer satisfaction."
    }
  ],
  className,
}: E7478aProps) {
  return (
    <section className={cn("py-20 px-6 lg:py-32 bg-gradient-to-b from-background to-muted/30", className)}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {subtitle}
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Zap;
              
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                      <CardContent className="flex flex-col items-center text-center p-8 h-full justify-start">
                        {/* Icon */}
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold mb-3 text-foreground">
                          {feature.title}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
