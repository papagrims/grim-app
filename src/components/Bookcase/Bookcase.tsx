import { useState } from "react";
import { ChevronLeft, ChevronRight, Settings, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MangaCard } from "@/components/MangaCard";
import { useIsMobile } from "@/hooks/use-mobile";

interface BookcaseShelf {
  id: string;
  manga: Array<{
    title: string;
    author: string;
    progress?: number;
    total?: number;
    rating?: number;
    status: "reading" | "completed" | "plan-to-read" | "on-hold" | "dropped";
    type: "manga" | "manhwa" | "manhua" | "hentai";
  }>;
}

interface BookcaseData {
  id: string;
  name: string;
  shelves: BookcaseShelf[];
  maxItemsPerShelf: number;
}

interface BookcaseProps {
  bookcase: BookcaseData;
  isActive: boolean;
  onEdit?: (bookcaseId: string) => void;
}

const SHELF_HEIGHT = "h-32";
const MANGA_SLOTS_PER_SHELF_MOBILE = 6;
const MANGA_SLOTS_PER_SHELF_DESKTOP = 8;

export const Bookcase = ({ bookcase, isActive, onEdit }: BookcaseProps) => {
  const isMobile = useIsMobile();
  const maxShelves = isMobile ? 4 : 5;
  const slotsPerShelf = isMobile
    ? MANGA_SLOTS_PER_SHELF_MOBILE
    : MANGA_SLOTS_PER_SHELF_DESKTOP;

  return (
    <div
      className={`w-full max-w-full transition-all duration-500 ${
        isActive ? "opacity-100 scale-100" : "opacity-50 scale-95"
      }`}
    >
      {/* Bookcase Header */}
      <div className="flex items-center justify-between mb-4">
        <h3
          className={`${
            isMobile ? "text-lg" : "text-xl"
          } font-semibold gradient-text`}
        >
          {bookcase.name}
        </h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onEdit?.(bookcase.id)}
          className="rounded-xl"
        >
          <Settings className="w-4 h-4" />
        </Button>
      </div>

      {/* Bookcase Frame */}
      <div className="mobile-card p-4 bg-gradient-to-b from-surface-elevated to-card overflow-hidden max-w-full">
        <div className="space-y-3 max-w-full">
          {Array.from({ length: maxShelves }, (_, shelfIndex) => {
            const shelf = bookcase.shelves[shelfIndex];

            return (
              <div key={shelfIndex} className="relative">
                {/* Shelf Wood Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-amber-800/30 to-amber-900/20 rounded-lg" />
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-900/40 via-amber-700/50 to-amber-900/40 rounded-b-lg" />

                {/* Shelf Content */}
                <div
                  className={`relative ${SHELF_HEIGHT} border border-border/50 rounded-lg overflow-hidden max-w-full`}
                >
                  <div className="flex items-end h-full px-2 py-2 gap-1 w-full max-w-full">
                    {/* Display existing manga - each takes equal width */}
                    {shelf?.manga.map((manga, slotIndex) => (
                      <div
                        key={`manga-${slotIndex}`}
                        className="h-full min-w-0"
                        style={{ flex: 1 }}
                      >
                        <div className="h-full bg-gradient-card rounded-sm border border-border/30 flex flex-col justify-between p-1 cursor-pointer hover:scale-105 transition-transform">
                          <div className="text-xs font-medium text-center line-clamp-2 px-1">
                            {manga.title}
                          </div>
                          <div className="text-xs text-muted-foreground text-center">
                            {manga.type}
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Add one plus button for adding new manga */}
                    <div className="h-full min-w-0" style={{ flex: 1 }}>
                      <div className="h-full border-2 border-dashed border-border/30 rounded-sm flex items-center justify-center group cursor-pointer hover:border-primary/50 transition-colors">
                        <Plus className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shelf Label */}
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
                  <span className="text-xs text-muted-foreground font-medium bg-background/80 px-2 rounded">
                    Shelf {shelfIndex + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bookcase Base */}
        <div className="mt-2 h-3 bg-gradient-to-r from-amber-900/40 via-amber-700/50 to-amber-900/40 rounded-lg" />
      </div>
    </div>
  );
};
