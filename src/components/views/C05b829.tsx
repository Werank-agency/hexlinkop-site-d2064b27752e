import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface AccordionItem {
  question: string;
  answer: string;
}

interface C05b829Props {
  title?: string;
  subtitle?: string;
  items?: AccordionItem[];
}

export default function C05b829({
  title = "Frequently Asked Questions About Businesses",
  subtitle = "Discover essential information on starting, managing, and growing your business with our comprehensive resources",
  items = [
    {
      question: "What are the key steps to starting a new business?",
      answer: "Starting a business involves thorough planning, market research, legal registration, securing funding, and building a team. Our site provides detailed guides on each step to help entrepreneurs navigate the process successfully."
    },
    {
      question: "How can I create a solid business plan?",
      answer: "A strong business plan outlines your goals, target market, financial projections, and strategies. We offer templates, examples, and expert advice to help you develop a plan that attracts investors and guides your operations."
    },
    {
      question: "What are the most common business challenges and how to overcome them?",
      answer: "Common challenges include cash flow management, competition, and scaling. Our resources cover strategies for risk mitigation, financial planning, and sustainable growth to help your business thrive."
    },
    {
      question: "How do I choose the right business structure?",
      answer: "Business structures like sole proprietorship, LLC, or corporation have different implications for taxes and liability. Explore our comparisons and consult professionals to select the best fit for your needs."
    },
    {
      question: "Where can I find funding options for my business?",
      answer: "Funding can come from loans, investors, grants, or bootstrapping. We provide information on various sources, including how to pitch to venture capitalists and apply for government programs."
    }
  ]
}: C05b829Props) {
  return (
    <section className="py-16 px-6 lg:py-24">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg font-medium">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a
            href="/"
            data-astro-prefetch
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
          >
            Go to Home
          </a>
        </div>
      </div>
    </section>
  );
}
