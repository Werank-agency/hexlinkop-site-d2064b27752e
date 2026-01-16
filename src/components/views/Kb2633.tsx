import { ArrowRight, Calendar, Clock } from "lucide-react";
import React from 'react';

function Kb2633({
  articles = [
    {
      slug: '/blog/entrepreneurship-fundamentals',
      title: 'Fundamentals of Entrepreneurship: Building a Successful Business from Scratch',
      excerpt: 'Discover the essential steps to launch and grow a thriving business. From idea validation to scaling operations, this guide covers the core principles every entrepreneur needs to know.',
      coverImage: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/645000e4-7307-4ed6-104d-b82653c56100/public',
      category: 'Entrepreneurship',
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/ae961cbe-9d4b-494a-9091-2ba2d5b43400/public'
      },
      date: 'October 15, 2023',
      readTime: '5 min read'
    },
    {
      slug: '/blog/digital-marketing-strategies',
      title: 'Digital Marketing Strategies for Modern Businesses',
      excerpt: 'Learn how to leverage SEO, social media, and content marketing to reach your target audience effectively. Stay ahead in the competitive digital landscape with proven tactics.',
      coverImage: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/e491ae46-118b-4c9a-1eea-25ad96a5e600/public',
      category: 'Marketing',
      author: {
        name: 'Michael Chen',
        avatar: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/a2e063c5-11c0-4a06-5627-67da0f9b1600/public'
      },
      date: 'September 28, 2023',
      readTime: '7 min read'
    },
    {
      slug: '/blog/financial-planning-business',
      title: 'Financial Planning Essentials for Small Business Owners',
      excerpt: 'Master budgeting, cash flow management, and investment strategies to ensure your business stays financially healthy and sustainable in the long term.',
      coverImage: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/f783fa30-c9d0-4fe9-34e4-2ca56133a800/public',
      category: 'Finance',
      author: {
        name: 'Emily Davis',
        avatar: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/67d0d6d9-706f-4a0f-af7e-6c8303245200/public'
      },
      date: 'August 12, 2023',
      readTime: '6 min read'
    },
    {
      slug: '/blog/leadership-skills-business',
      title: 'Developing Leadership Skills in Business Environments',
      excerpt: 'Explore key leadership qualities, team management techniques, and motivational strategies that drive business success and foster a positive company culture.',
      coverImage: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/99c83fd4-dd4b-4aae-c4c2-2b89fd599800/public',
      category: 'Leadership',
      author: {
        name: 'David Rodriguez',
        avatar: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/0aefc47a-3a56-4af4-4b44-e63506688800/public'
      },
      date: 'July 20, 2023',
      readTime: '8 min read'
    },
    {
      slug: '/blog/sustainable-business-practices',
      title: 'Implementing Sustainable Business Practices',
      excerpt: 'Understand how to integrate eco-friendly operations, ethical sourcing, and corporate social responsibility into your business model for long-term viability.',
      coverImage: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/56b205d9-d778-4539-9069-4e6278862100/public',
      category: 'Sustainability',
      author: {
        name: 'Lisa Wong',
        avatar: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/2759a46f-ceef-427a-7e75-802abfeae300/public'
      },
      date: 'June 10, 2023',
      readTime: '6 min read'
    },
    {
      slug: '/blog/technology-innovation-business',
      title: 'Harnessing Technology and Innovation for Business Growth',
      excerpt: 'Discover cutting-edge tools, automation solutions, and innovative approaches to streamline operations and enhance productivity in your business.',
      coverImage: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/a7e712fd-1f8e-4824-eae9-9aeecb6f1b00/public',
      category: 'Technology',
      author: {
        name: 'Robert Taylor',
        avatar: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/2afcfb85-c100-467d-255d-118ae99fc200/public'
      },
      date: 'May 5, 2023',
      readTime: '7 min read'
    }
  ],
  columns = 3
}: Kb2633Props) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Grid */}
      <div 
        className={`grid grid-cols-1 ${
          columns === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'
        } gap-8`}
      >
        {articles.map((article, index) => (
          <article
            key={index}
            className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/50 flex flex-col"
          >
            {/* Cover Image */}
            <a href={article.slug} data-astro-prefetch className="block aspect-[16/9] overflow-hidden bg-muted">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </a>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              {/* Category */}
              <span className="inline-block w-fit px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
                {article.category}
              </span>

              {/* Title */}
              <a href={article.slug} data-astro-prefetch>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </a>

              {/* Excerpt */}
              <p className="text-muted-foreground mb-4 line-clamp-3 text-sm flex-1">
                {article.excerpt}
              </p>

              {/* Author & Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                {/* Author */}
                <div className="flex items-center gap-2">
                  {article.author.avatar ? (
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xs font-semibold text-primary">
                        {article.author.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <span className="text-sm text-muted-foreground">{article.author.name}</span>
                </div>
              </div>

              {/* Date & Read Time */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground mt-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Read More */}
              <a
                href={article.slug}
                data-astro-prefetch
                className="mt-4 inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
              >
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Kb2633;