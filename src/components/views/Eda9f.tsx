import { ArrowRight, Briefcase, Clock, Star } from "lucide-react";
import React from 'react';
import { Button } from '@/components/ui/button';

interface Eda9fProps {
  articles: Array<{
    slug: string;
    title: string;
    excerpt: string;
    coverImage: string;
    category: string;
    readTime: string;
    featured?: boolean;
  }>;
  title?: string;
}

function Eda9f({
  articles = [],
  title = "Featured Business Insights"
}: Eda9fProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-muted/30 to-background">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {title}
          </h2>
        </div>
      </div>

      {/* Featured Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.slice(0, 6).map((article, index) => (
          <article
            key={index}
            className="group relative bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 hover:border-primary/50"
          >
            {/* Featured Badge */}
            <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-primary rounded-full text-white text-xs font-bold shadow-lg flex items-center gap-1">
              <Star className="w-3 h-3" />
              <span>Featured</span>
            </div>

            {/* Cover Image */}
            <a href={article.slug} data-astro-prefetch className="block relative aspect-[16/9] overflow-hidden bg-muted">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </a>

            {/* Content */}
            <div className="p-6">
              {/* Category & Read Time */}
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  {article.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <a href={article.slug} data-astro-prefetch>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </a>

              {/* Excerpt */}
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {article.excerpt}
              </p>

              {/* Read More Button */}
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                asChild
              >
                <a href={article.slug} data-astro-prefetch className="flex items-center justify-center gap-2">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </article>
        ))}
      </div>

      {/* View All Link */}
      <div className="mt-12 text-center">
        <Button size="lg" variant="outline" asChild>
          <a href="/content" data-astro-prefetch className="inline-flex items-center gap-2">
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}

export default Eda9f;