import { Header } from "@/components/Header/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Trophy,
  Flame,
  BookOpen,
  Star,
  Settings,
  Share,
  Calendar,
  TrendingUp,
  Award,
} from "lucide-react";

const achievements = [
  {
    name: "Speed Reader",
    description: "Read 100 chapters in a week",
    earned: true,
    rarity: "gold",
  },
  {
    name: "Completionist",
    description: "Finished 10 series",
    earned: true,
    rarity: "silver",
  },
  {
    name: "Explorer",
    description: "Try 5 different genres",
    earned: false,
    rarity: "bronze",
  },
  {
    name: "Reviewer",
    description: "Write 50 reviews",
    earned: false,
    rarity: "gold",
  },
];

const recentBadges = [
  "New Reader",
  "Manga Enthusiast",
  "Daily Streak",
  "Genre Explorer",
];

export default function Profile() {
  const isMobile = useIsMobile();

  return (
    <div className={`min-h-screen bg-background ${isMobile ? "pb-20" : ""}`}>
      {isMobile && (
        <Header
          title="Profile"
          subtitle="Track your reading journey"
          showNotifications={false}
        />
      )}

      <main
        className={`${isMobile ? "p-4" : "p-6 lg:p-8"} space-y-6 md:space-y-8`}
      >
        {/* Profile Header */}
        <div className={`mobile-card ${isMobile ? "p-6" : "p-8"} text-center`}>
          <div
            className={`${
              isMobile ? "w-20 h-20" : "w-24 h-24"
            } mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center ${
              isMobile ? "text-2xl" : "text-3xl"
            } font-bold`}
          >
            R
          </div>
          <h2 className={`${isMobile ? "text-xl" : "text-2xl"} font-bold mb-1`}>
            Reader_Pro
          </h2>
          <p
            className={`text-muted-foreground mb-4 ${
              isMobile ? "text-base" : "text-lg"
            }`}
          >
            Manga Enthusiast • Level 15
          </p>

          <div className="flex items-center justify-center gap-4 mb-4">
            <Button
              variant="secondary"
              size={`${isMobile ? "sm" : "default"}`}
              className="rounded-xl"
            >
              <Settings className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
            <Button
              variant="outline"
              size={`${isMobile ? "sm" : "default"}`}
              className="rounded-xl"
            >
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div
              className={`flex justify-between ${
                isMobile ? "text-sm" : "text-base"
              }`}
            >
              <span>Level 15</span>
              <span>2,450 / 3,000 XP</span>
            </div>
            <div
              className={`w-full bg-muted/30 rounded-full ${
                isMobile ? "h-2" : "h-3"
              }`}
            >
              <div
                className={`bg-gradient-primary rounded-full ${
                  isMobile ? "h-2" : "h-3"
                }`}
                style={{ width: "82%" }}
              />
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div
          className={`${
            isMobile ? "space-y-6" : "grid grid-cols-1 lg:grid-cols-3 gap-8"
          }`}
        >
          {/* Left Column - Stats and Activity */}
          <div className={`${!isMobile ? "lg:col-span-2" : ""} space-y-6`}>
            {/* Stats */}
            <div
              className={`grid ${
                isMobile ? "grid-cols-2 gap-3" : "grid-cols-4 gap-6"
              }`}
            >
              <div
                className={`mobile-card ${
                  isMobile ? "p-4" : "p-6"
                } text-center`}
              >
                <div className="flex items-center justify-center mb-2">
                  <BookOpen
                    className={`${
                      isMobile ? "w-5 h-5" : "w-6 h-6"
                    } text-primary mr-2`}
                  />
                </div>
                <div
                  className={`${isMobile ? "text-2xl" : "text-3xl"} font-bold`}
                >
                  247
                </div>
                <div
                  className={`${
                    isMobile ? "text-sm" : "text-base"
                  } text-muted-foreground`}
                >
                  Titles Read
                </div>
              </div>

              <div
                className={`mobile-card ${
                  isMobile ? "p-4" : "p-6"
                } text-center`}
              >
                <div className="flex items-center justify-center mb-2">
                  <Flame
                    className={`${
                      isMobile ? "w-5 h-5" : "w-6 h-6"
                    } text-success mr-2`}
                  />
                </div>
                <div
                  className={`${isMobile ? "text-2xl" : "text-3xl"} font-bold`}
                >
                  15
                </div>
                <div
                  className={`${
                    isMobile ? "text-sm" : "text-base"
                  } text-muted-foreground`}
                >
                  Day Streak
                </div>
              </div>

              <div
                className={`mobile-card ${
                  isMobile ? "p-4" : "p-6"
                } text-center`}
              >
                <div className="flex items-center justify-center mb-2">
                  <Star
                    className={`${
                      isMobile ? "w-5 h-5" : "w-6 h-6"
                    } text-reward-gold mr-2`}
                  />
                </div>
                <div
                  className={`${isMobile ? "text-2xl" : "text-3xl"} font-bold`}
                >
                  4.8
                </div>
                <div
                  className={`${
                    isMobile ? "text-sm" : "text-base"
                  } text-muted-foreground`}
                >
                  Avg Rating
                </div>
              </div>

              <div
                className={`mobile-card ${
                  isMobile ? "p-4" : "p-6"
                } text-center`}
              >
                <div className="flex items-center justify-center mb-2">
                  <Trophy
                    className={`${
                      isMobile ? "w-5 h-5" : "w-6 h-6"
                    } text-manga-accent mr-2`}
                  />
                </div>
                <div
                  className={`${isMobile ? "text-2xl" : "text-3xl"} font-bold`}
                >
                  12
                </div>
                <div
                  className={`${
                    isMobile ? "text-sm" : "text-base"
                  } text-muted-foreground`}
                >
                  Achievements
                </div>
              </div>
            </div>

            {/* Reading Goals */}
            <section>
              <h3
                className={`${
                  isMobile ? "text-lg" : "text-xl"
                } font-semibold mb-4`}
              >
                2024 Reading Goals
              </h3>

              <div
                className={`mobile-card ${isMobile ? "p-4" : "p-6"} space-y-4`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span
                      className={`${
                        isMobile ? "font-medium" : "text-lg font-semibold"
                      }`}
                    >
                      Annual Goal
                    </span>
                  </div>
                  <span
                    className={`${
                      isMobile ? "text-sm" : "text-base"
                    } text-muted-foreground`}
                  >
                    247 / 300 titles
                  </span>
                </div>

                <div
                  className={`w-full bg-muted/30 rounded-full ${
                    isMobile ? "h-2" : "h-3"
                  }`}
                >
                  <div
                    className={`bg-gradient-primary rounded-full ${
                      isMobile ? "h-2" : "h-3"
                    }`}
                    style={{ width: "82%" }}
                  />
                </div>

                <div
                  className={`grid grid-cols-2 ${
                    isMobile ? "gap-4" : "gap-8"
                  } text-center`}
                >
                  <div>
                    <div
                      className={`${
                        isMobile ? "text-lg" : "text-xl"
                      } font-bold text-primary`}
                    >
                      53
                    </div>
                    <div
                      className={`${
                        isMobile ? "text-xs" : "text-sm"
                      } text-muted-foreground`}
                    >
                      Remaining
                    </div>
                  </div>
                  <div>
                    <div
                      className={`${
                        isMobile ? "text-lg" : "text-xl"
                      } font-bold text-success`}
                    >
                      82%
                    </div>
                    <div
                      className={`${
                        isMobile ? "text-xs" : "text-sm"
                      } text-muted-foreground`}
                    >
                      Complete
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Reading Activity */}
            <section>
              <h3
                className={`${
                  isMobile ? "text-lg" : "text-xl"
                } font-semibold mb-4`}
              >
                Reading Activity
              </h3>

              <div className={`mobile-card ${isMobile ? "p-4" : "p-6"}`}>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span
                    className={`${
                      isMobile ? "font-medium" : "text-lg font-semibold"
                    }`}
                  >
                    This Week
                  </span>
                </div>

                <div className={`grid grid-cols-7 gap-2 mb-4`}>
                  {Array.from({ length: 7 }, (_, i) => (
                    <div
                      key={i}
                      className={`${
                        isMobile ? "aspect-square" : "h-12"
                      } rounded-sm ${i < 5 ? "bg-primary/20" : "bg-muted/30"}`}
                    />
                  ))}
                </div>

                <div
                  className={`text-center ${
                    isMobile ? "text-sm" : "text-base"
                  } text-muted-foreground`}
                >
                  5 active days this week
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Badges and Achievements */}
          <div className="space-y-6">
            {/* Recent Badges */}
            <section>
              <h3
                className={`${
                  isMobile ? "text-lg" : "text-xl"
                } font-semibold mb-4`}
              >
                Recent Badges
              </h3>
              <div className="flex flex-wrap gap-2">
                {recentBadges.map((badge) => (
                  <Badge key={badge} variant="secondary" className="rounded-xl">
                    {badge}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Achievements */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h3
                  className={`${
                    isMobile ? "text-lg" : "text-xl"
                  } font-semibold`}
                >
                  Achievements
                </h3>
                <Button variant="ghost" size="sm" className="text-primary">
                  View All
                </Button>
              </div>

              <div className="space-y-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.name}
                    className={`mobile-card ${isMobile ? "p-4" : "p-6"} ${
                      !achievement.earned ? "opacity-60" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`${
                          isMobile ? "w-12 h-12" : "w-14 h-14"
                        } rounded-xl flex items-center justify-center ${
                          achievement.rarity === "gold"
                            ? "bg-reward-gold/20"
                            : achievement.rarity === "silver"
                            ? "bg-muted"
                            : "bg-manga-accent/20"
                        }`}
                      >
                        <Award
                          className={`${isMobile ? "w-6 h-6" : "w-7 h-7"} ${
                            achievement.rarity === "gold"
                              ? "text-reward-gold"
                              : achievement.rarity === "silver"
                              ? "text-muted-foreground"
                              : "text-manga-accent"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h4
                          className={`${
                            isMobile ? "font-medium" : "text-lg font-semibold"
                          }`}
                        >
                          {achievement.name}
                        </h4>
                        <p
                          className={`${
                            isMobile ? "text-sm" : "text-base"
                          } text-muted-foreground`}
                        >
                          {achievement.description}
                        </p>
                      </div>
                      {achievement.earned && (
                        <div className="reward-badge">Earned</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
