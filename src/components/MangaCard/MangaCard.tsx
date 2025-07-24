import { Star, BookOpen, Clock } from "lucide-react";

interface MangaCardProps {
  title: string;
  author?: string;
  rating?: number;
  progress?: number;
  total?: number;
  coverUrl?: string;
  status?: "reading" | "completed" | "plan-to-read" | "dropped";
  type?: "manga" | "manhwa" | "manhua" | "hentai";
}

export const MangaCard = ({
  title,
  author,
  rating,
  progress = 0,
  total,
  coverUrl,
  status = "plan-to-read",
  type = "manga",
}: MangaCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "reading":
        return "text-primary";
      case "completed":
        return "text-success";
      case "plan-to-read":
        return "text-muted-foreground";
      case "dropped":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case "manga":
        return "bg-primary/20 text-primary";
      case "manhwa":
        return "bg-manga-accent/20 text-manga-accent";
      case "manhua":
        return "bg-accent/20 text-accent";
      case "hentai":
        return "bg-destructive/20 text-destructive";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="mobile-card group cursor-pointer">
      <div className="manga-cover">
        {coverUrl ? (
          <img
            src={coverUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-card flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-muted-foreground" />
          </div>
        )}

        {/* Type badge */}
        <div
          className={`absolute top-2 left-2 px-2 py-1 rounded-md text-xs font-medium ${getTypeColor()}`}
        >
          {type.toUpperCase()}
        </div>

        {/* Rating */}
        {rating && (
          <div className="absolute top-2 right-2 flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-md px-2 py-1">
            <Star className="w-3 h-3 fill-current text-yellow-500" />
            <span className="text-xs font-medium">{rating}</span>
          </div>
        )}

        {/* Progress overlay */}
        {progress > 0 && total && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-2">
            <div className="flex items-center gap-2 text-xs">
              <Clock className="w-3 h-3" />
              <span>
                Vol {progress}/{total}
              </span>
            </div>
            <div className="w-full bg-muted/30 rounded-full h-1 mt-1">
              <div
                className="bg-primary rounded-full h-1 transition-all duration-300"
                style={{ width: `${(progress / total) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="p-3">
        <h3 className="font-semibold text-sm line-clamp-2 mb-1">{title}</h3>
        {author && (
          <p className="text-xs text-muted-foreground mb-2">{author}</p>
        )}
        <div className={`text-xs font-medium capitalize ${getStatusColor()}`}>
          {status.replace("-", " ")}
        </div>
      </div>
    </div>
  );
};
