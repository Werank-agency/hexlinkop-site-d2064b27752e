import { Search } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

function Cb133({
  title = "Business Insights & Trends",
  description = "Stay ahead with expert analysis, industry trends, and actionable strategies for growing your business. Explore our comprehensive resources on entrepreneurship, finance, and market dynamics.",
  showSearch = true
}: Cb133Props) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would trigger a search
    console.log("Searching for:", searchQuery);
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          {title}
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* Search Bar */}
        {showSearch && (
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search business articles..."
                className="w-full px-6 py-4 pl-14 rounded-full bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground text-lg shadow-lg"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
          </form>
        )}

        {/* Stats or Categories */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
          <div className="px-6 py-3 bg-card rounded-full border border-border">
            <span className="text-muted-foreground">Topics:</span>{" "}
            <span className="font-semibold text-foreground">Entrepreneurship</span>
          </div>
          <div className="px-6 py-3 bg-card rounded-full border border-border">
            <span className="text-muted-foreground">Topics:</span>{" "}
            <span className="font-semibold text-foreground">Finance</span>
          </div>
          <div className="px-6 py-3 bg-card rounded-full border border-border">
            <span className="text-muted-foreground">Topics:</span>{" "}
            <span className="font-semibold text-foreground">Marketing</span>
          </div>
          <div className="px-6 py-3 bg-card rounded-full border border-border">
            <span className="text-muted-foreground">Topics:</span>{" "}
            <span className="font-semibold text-foreground">Operations</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cb133;