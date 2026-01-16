import { Mail, MessageCircle, Phone } from "lucide-react";
import React from 'react';

function Zad0dde({
  heading = "Contact Us",
  description = "Reach out to our team for expert advice on business information, partnerships, and support. We're here to help your business thrive with reliable insights and guidance.",
  backgroundImage = "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/1a0730aa-1fec-4a76-311c-98be09182400/public",
  cards = [
    {
      icon: "Phone",
      title: "Phone Support",
      description: "Call us directly for personalized assistance on business-related inquiries and consultations."
    },
    {
      icon: "Mail",
      title: "Email Us",
      description: "Send detailed messages about your business needs, and we'll respond promptly with tailored information."
    },
    {
      icon: "MessageCircle",
      title: "Live Chat",
      description: "Engage with our experts through live chat for quick answers to your business questions."
    }
  ]
}: Zad0ddeProps) {
  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      Phone,
      Mail,
      MessageCircle
    };
    const IconComponent = icons[iconName] || Phone;
    return <IconComponent className="h-7 w-5 flex-none text-primary" />;
  };

  return (
    <div className="relative isolate overflow-hidden bg-muted dark:bg-background py-24 sm:py-32">
      {/* Background Image */}
      <img 
        src={backgroundImage} 
        alt="" 
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center opacity-20 dark:opacity-10"
      />
      
      {/* Gradient Blur Decorations */}
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div 
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-primary to-accent opacity-20"
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        ></div>
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div 
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-primary to-accent opacity-20"
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
            {heading}
          </h2>
          <p className="mt-8 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
            {description}
          </p>
        </div>
        
        {/* Info Cards */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="flex gap-x-4 rounded-xl bg-card/50 dark:bg-card/30 backdrop-blur-sm p-6 ring-1 ring-border"
            >
              {getIcon(card.icon)}
              <div className="text-base/7">
                <h3 className="font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-muted-foreground">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Zad0dde;