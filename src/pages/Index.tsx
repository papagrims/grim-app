import { Header } from "@/components/Header/Header";
import { MangaCard } from "@/components/MangaCard/MangaCard";
import { CollectionChart } from "@/components/CollectionChart/CollectionChart";
import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, Award, BookOpen } from "lucide-react";

const recentlyRead = [
  {
    title: "Attack on Titan",
    author: "Hajime Isayama",
    progress: 34,
    total: 34,
    rating: 9.5,
    status: "completed" as const,
    type: "manga" as const,
  },
  {
    title: "Solo Leveling",
    author: "Chugong",
    progress: 14,
    total: 15,
    rating: 9.2,
    status: "reading" as const,
    type: "manhwa" as const,
  },
  {
    title: "Demon Slayer",
    author: "Koyoharu Gotouge",
    progress: 18,
    total: 23,
    rating: 8.8,
    status: "reading" as const,
    type: "manga" as const,
  },
];

const topSeries = [
  { title: "One Piece", volumes: 107, type: "manga" },
  { title: "Naruto", volumes: 72, type: "manga" },
  { title: "Tower of God", volumes: 28, type: "manhwa" },
];

const stats = [
  {
    label: "Volumes Owned",
    value: "1,247",
    icon: BookOpen,
    color: "text-primary",
  },
  {
    label: "Current Streak",
    value: "15 days",
    icon: Zap,
    color: "text-success",
  },
  {
    label: "Rewards Earned",
    value: "8",
    icon: Award,
    color: "text-reward-gold",
  },
];

export default function Index({ user }: any) {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <div className="block md:hidden">
        <Header
          title="Home"
          subtitle="Welcome back, Reader!"
          showSearch={true}
        />
      </div>

      <main className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8">
        <div className="hidden md:block mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {user?.first_name}!
          </h1>
          <p className="text-muted-foreground text-lg">
            Ready to continue your manga journey?
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
          {stats.map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="mobile-card p-4 md:p-6 text-center">
              <Icon className={`w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 ${color}`} />
              <div className="text-lg md:text-2xl font-bold">{value}</div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {label}
              </div>
            </div>
          ))}

          <div className="mobile-card p-4 md:p-6 text-center">
            <Award className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-manga-accent" />
            <div className="text-lg md:text-2xl font-bold">Level 12</div>
            <div className="text-xs md:text-sm text-muted-foreground">
              Current Level
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="space-y-6 md:space-y-0 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Continue Reading */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg md:text-xl font-semibold">
                Currently Reading
              </h2>
              <Button variant="ghost" size="sm" className="text-primary">
                View All
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentlyRead.map((manga, index) => (
                <MangaCard key={index} {...manga} />
              ))}
              <MangaCard
                title="Chainsaw Man"
                author="Tatsuki Fujimoto"
                progress={9}
                total={12}
                rating={9.1}
                status="reading"
                type="manga"
              />
              <MangaCard
                title="Jujutsu Kaisen"
                author="Gege Akutami"
                progress={24}
                total={24}
                rating={9.0}
                status="completed"
                type="manga"
              />
            </div>
          </div>

          {/* Sidebar Content */}
          <div className="space-y-6">
            {/* Top 3 Series */}
            <section>
              <h2 className="text-lg md:text-xl font-semibold mb-4">
                Top Series in Collection
              </h2>
              <div className="space-y-3">
                {topSeries.map((series, index) => (
                  <div key={series.title} className="mobile-card p-3 md:p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium md:text-lg font-semibold">
                          {series.title}
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground">
                          {series.volumes} volumes • {series.type}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Collection Chart */}
            <CollectionChart />

            {/* Quick Actions */}
            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-semibold">
                Quick Actions
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4">
                <Button
                  variant="ios"
                  className="h-16 md:h-20 flex-col gap-1 md:gap-2"
                >
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm md:text-base">
                    Discover Trending
                  </span>
                </Button>

                <Button
                  variant="secondary"
                  className="h-16 md:h-20 flex-col gap-1 md:gap-2 rounded-xl"
                >
                  <Award className="w-5 h-5" />
                  <span className="text-sm md:text-base">View Rewards</span>
                </Button>
              </div>
            </section>

            {/* Recent Activity */}
            <section>
              <h2 className="text-lg md:text-xl font-semibold mb-4">
                Recent Activity
              </h2>

              <div className="space-y-3">
                <div className="mobile-card p-4 md:p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-16 md:w-16 md:h-20 bg-gradient-card rounded-lg flex items-center justify-center">
                      <span className="text-lg">📖</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium md:text-lg md:font-semibold">
                        Completed "Demon Slayer" Volume 18
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground">
                        2 hours ago
                      </p>
                    </div>
                    <div className="reward-badge">+10 XP</div>
                  </div>
                </div>

                <div className="mobile-card p-4 md:p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-16 md:w-16 md:h-20 bg-gradient-card rounded-lg flex items-center justify-center">
                      <span className="text-lg">⭐</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium md:text-lg md:font-semibold">
                        Rated "Solo Leveling" 5 stars
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground">
                        1 day ago
                      </p>
                    </div>
                    <div className="reward-badge">+5 XP</div>
                  </div>
                </div>

                <div className="hidden md:block mobile-card p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-20 bg-gradient-card rounded-lg flex items-center justify-center">
                      <span className="text-lg">🏆</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-semibold">
                        Unlocked "Speed Reader" achievement
                      </p>
                      <p className="text-base text-muted-foreground">
                        3 days ago
                      </p>
                    </div>
                    <div className="reward-badge">+50 XP</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
