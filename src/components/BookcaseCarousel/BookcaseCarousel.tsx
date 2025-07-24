import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Bookcase } from "@/components/Bookcase/Bookcase";
import { useIsMobile } from "@/hooks/use-mobile";

interface BookcaseData {
  id: string;
  name: string;
  shelves: Array<{
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
  }>;
  maxItemsPerShelf: number;
}

interface BookcaseCarouselProps {
  bookcases: BookcaseData[];
  onAddBookcase?: () => void;
  onEditBookcase?: (bookcaseId: string) => void;
}

export const BookcaseCarousel = ({
  bookcases,
  onAddBookcase,
  onEditBookcase,
}: BookcaseCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isMobile = useIsMobile();
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleSlide = (direction: "prev" | "next") => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    if (direction === "next" && currentIndex < bookcases.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (direction === "prev" && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }

    setTimeout(() => setIsTransitioning(false), 300);
  };

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < bookcases.length - 1;

  return (
    <div className="relative">
      {/* Carousel Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h2 className={`${isMobile ? "text-xl" : "text-2xl"} font-bold`}>
            My Bookcases
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {currentIndex + 1} of {bookcases.length}
            </span>
            <div className="flex gap-1">
              {bookcases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => !isTransitioning && setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onAddBookcase}
            className="rounded-xl"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add Bookcase
          </Button>
        </div>
      </div>

      {/* Navigation Buttons */}
      {!isMobile && (
        <>
          <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleSlide("prev")}
              disabled={!canGoPrev || isTransitioning}
              className="rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg hover:bg-background/90 disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>

          <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleSlide("next")}
              disabled={!canGoNext || isTransitioning}
              className="rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg hover:bg-background/90 disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </>
      )}

      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-xl">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (isMobile ? 100 : 50)}%)`,
            width: isMobile
              ? `${bookcases.length * 100}%`
              : `${bookcases.length * 50}%`,
          }}
        >
          {bookcases.map((bookcase, index) => (
            <div
              key={bookcase.id}
              className={`min-w-0 ${isMobile ? "px-1" : "px-4"}`}
              style={{ width: isMobile ? "100%" : "50%" }}
            >
              <Bookcase
                bookcase={bookcase}
                isActive={index === currentIndex}
                onEdit={onEditBookcase}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Touch/Swipe Instructions */}
      {isMobile && (
        <div className="text-center mt-4">
          <p className="text-sm text-muted-foreground">
            Swipe left or right to navigate between bookcases
          </p>
        </div>
      )}
    </div>
  );
};
