import { useState } from "react";
import { Header } from "@/components/Header/Header";
import { BookcaseCarousel } from "@/components/BookcaseCarousel/BookcaseCarousel";
import { Button } from "@/components/ui/button";
import { Plus, Settings, BookOpen, Grid3X3 } from "lucide-react";

// Sample bookcase data
const sampleBookcases = [
  {
    id: "bookcase-1",
    name: "Main Collection",
    maxItemsPerShelf: 8,
    shelves: [
      {
        id: "shelf-1-1",
        manga: [
          {
            title: "One Piece",
            author: "Eiichiro Oda",
            progress: 105,
            total: 107,
            status: "reading" as const,
            type: "manga" as const,
          },
          {
            title: "Attack on Titan",
            author: "Hajime Isayama",
            progress: 34,
            total: 34,
            status: "completed" as const,
            type: "manga" as const,
          },
          {
            title: "Demon Slayer",
            author: "Koyoharu Gotouge",
            progress: 18,
            total: 23,
            status: "reading" as const,
            type: "manga" as const,
          },
        ],
      },
      {
        id: "shelf-1-2",
        manga: [
          {
            title: "Solo Leveling",
            author: "Chugong",
            progress: 14,
            total: 15,
            status: "reading" as const,
            type: "manhwa" as const,
          },
          {
            title: "Tower of God",
            author: "SIU",
            progress: 26,
            total: 28,
            status: "reading" as const,
            type: "manhwa" as const,
          },
        ],
      },
      {
        id: "shelf-1-3",
        manga: [
          {
            title: "Death Note",
            author: "Tsugumi Ohba",
            progress: 12,
            total: 12,
            status: "completed" as const,
            type: "manga" as const,
          },
        ],
      },
      { id: "shelf-1-4", manga: [] },
      { id: "shelf-1-5", manga: [] },
    ],
  },
  {
    id: "bookcase-2",
    name: "Romance & Drama",
    maxItemsPerShelf: 8,
    shelves: [
      {
        id: "shelf-2-1",
        manga: [
          {
            title: "Kaguya-sama",
            author: "Aka Akasaka",
            progress: 28,
            total: 28,
            status: "completed" as const,
            type: "manga" as const,
          },
          {
            title: "Your Name",
            author: "Makoto Shinkai",
            progress: 3,
            total: 3,
            status: "completed" as const,
            type: "manga" as const,
          },
        ],
      },
      { id: "shelf-2-2", manga: [] },
      { id: "shelf-2-3", manga: [] },
      { id: "shelf-2-4", manga: [] },
      { id: "shelf-2-5", manga: [] },
    ],
  },
  {
    id: "bookcase-3",
    name: "Action & Adventure",
    maxItemsPerShelf: 8,
    shelves: [
      {
        id: "shelf-3-1",
        manga: [
          {
            title: "Chainsaw Man",
            author: "Tatsuki Fujimoto",
            progress: 9,
            total: 12,
            status: "reading" as const,
            type: "manga" as const,
          },
          {
            title: "Jujutsu Kaisen",
            author: "Gege Akutami",
            progress: 24,
            total: 24,
            status: "completed" as const,
            type: "manga" as const,
          },
        ],
      },
      { id: "shelf-3-2", manga: [] },
      { id: "shelf-3-3", manga: [] },
      { id: "shelf-3-4", manga: [] },
      { id: "shelf-3-5", manga: [] },
    ],
  },
];

export default function BookShelf() {
  const [bookcases, setBookcases] = useState(sampleBookcases);

  const handleAddBookcase = () => {
    const newBookcase = {
      id: `bookcase-${Date.now()}`,
      name: `Bookcase ${bookcases.length + 1}`,
      maxItemsPerShelf: 8,
      shelves: Array.from({ length: 5 }, (_, index) => ({
        id: `shelf-${Date.now()}-${index}`,
        manga: [],
      })),
    };
    setBookcases((prev) => [...prev, newBookcase]);
  };

  const handleEditBookcase = (bookcaseId: string) => {
    console.log("Edit bookcase:", bookcaseId);
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <div className="md:hidden">
        <Header title="My Library" subtitle="Organize your collection" />
      </div>

      <main className="p-4 space-y-6 md:space-y-8 md:p-6 lg:p-8">
        <div className="hidden md:block mb-8">
          <h1 className="text-3xl font-bold mb-2">My Library</h1>
          <p className="text-muted-foreground text-lg">
            Organize your manga collection across multiple bookcases
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6 mb-8">
          {/* Total Volumes */}
          <div className="mobile-card p-4 md:p-6 text-center">
            <BookOpen className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-primary" />
            <div className="text-lg md:text-2xl font-bold">
              {bookcases.reduce(
                (total, bookcase) =>
                  total +
                  bookcase.shelves.reduce(
                    (shelfTotal, shelf) => shelfTotal + shelf.manga.length,
                    0
                  ),
                0
              )}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">
              Total Volumes
            </div>
          </div>

          {/* Bookcases */}
          <div className="mobile-card p-4 md:p-6 text-center">
            <Grid3X3 className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-manga-accent" />
            <div className="text-lg md:text-2xl font-bold">
              {bookcases.length}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">
              Bookcases
            </div>
          </div>

          {/* Total Shelves */}
          <div className="mobile-card p-4 md:p-6 text-center">
            <Settings className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-success" />
            <div className="text-lg md:text-2xl font-bold">
              {bookcases.reduce(
                (total, bookcase) => total + bookcase.shelves.length,
                0
              )}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">
              Total Shelves
            </div>
          </div>

          {/* Empty Slots */}
          <div className="mobile-card p-4 md:p-6 text-center">
            <Plus className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-reward-gold" />
            <div className="text-lg md:text-2xl font-bold">
              {bookcases.reduce(
                (total, bookcase) =>
                  total +
                  bookcase.shelves.reduce(
                    (shelfTotal, shelf) =>
                      shelfTotal +
                      (bookcase.maxItemsPerShelf - shelf.manga.length),
                    0
                  ),
                0
              )}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">
              Empty Slots
            </div>
          </div>
        </div>

        {/* Bookcase Carousel */}
        <BookcaseCarousel
          bookcases={bookcases}
          onAddBookcase={handleAddBookcase}
          onEditBookcase={handleEditBookcase}
        />

        {/* Quick Actions */}
        <div className="mt-12">
          <h3 className="text-lg md:text-xl font-semibold mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
            <Button
              variant="ios"
              className="h-16 md:h-20 flex-col gap-1 md:gap-2"
            >
              <Plus className="w-5 h-5" />
              <span className="text-sm md:text-base">Add Manga</span>
            </Button>
            <Button
              variant="secondary"
              className="h-16 md:h-20 flex-col gap-1 md:gap-2 rounded-xl"
            >
              <Settings className="w-5 h-5" />
              <span className="text-sm md:text-base">Organize</span>
            </Button>
            <Button
              variant="secondary"
              className="h-16 md:h-20 flex-col gap-1 md:gap-2 rounded-xl"
            >
              <BookOpen className="w-5 h-5" />
              <span className="text-sm md:text-base">Browse</span>
            </Button>
            <Button
              variant="secondary"
              className="h-16 md:h-20 flex-col gap-1 md:gap-2 rounded-xl"
            >
              <Grid3X3 className="w-5 h-5" />
              <span className="text-sm md:text-base">View All</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
