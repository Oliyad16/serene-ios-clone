import { useEffect, useState } from "react";
import { Sparkles, Calendar, Award, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MeditationCard from "@/components/MeditationCard";
import heroImage from "@/assets/hero-meditation.jpg";
import forestImage from "@/assets/forest-meditation.jpg";
import mountainImage from "@/assets/mountain-sleep.jpg";
import breathingImage from "@/assets/breathing-zen.jpg";

const Home = () => {
  const [currentStreak, setCurrentStreak] = useState(7);
  const [totalMinutes, setTotalMinutes] = useState(142);

  const dailyRecommendations = [
    {
      title: "Morning Mindfulness",
      duration: "10 min",
      category: "Focus",
      image: forestImage,
      description: "Start your day with peaceful awareness and intention"
    },
    {
      title: "Stress Relief",
      duration: "15 min",
      category: "Anxiety",
      image: mountainImage,  
      description: "Release tension and find your center"
    },
    {
      title: "Quick Breathing",
      duration: "5 min",
      category: "Breathe",
      image: breathingImage,
      description: "Simple breathing exercise for instant calm"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-peaceful pb-20">
      {/* Hero Section */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Peaceful meditation scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        
        <div className="absolute inset-0 flex items-end p-6">
          <div className="text-white fade-in-peaceful">
            <p className="text-sm mb-2 text-white/80">Welcome back</p>
            <h1 className="text-2xl font-semibold mb-4">How are you feeling today?</h1>
            
            <Button className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border-white/20 border transition-calm">
              <Sparkles className="h-4 w-4 mr-2" />
              Daily Check-in
            </Button>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-6 relative z-10">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Card className="p-4 bg-card/80 backdrop-blur-sm shadow-soft hover-lift">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-ocean/10 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-ocean" />
              </div>
              <div>
                <p className="text-2xl font-bold text-ocean">{currentStreak}</p>
                <p className="text-xs text-muted-foreground">Day Streak</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-4 bg-card/80 backdrop-blur-sm shadow-soft hover-lift">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-sage-dark" />
              </div>
              <div>
                <p className="text-2xl font-bold text-sage-dark">{totalMinutes}</p>
                <p className="text-xs text-muted-foreground">Total Minutes</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Daily Recommendation */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Today's Recommendation</h2>
            <Award className="h-5 w-5 text-sunset" />
          </div>
          
          <Card className="session-card bg-gradient-calm text-white overflow-hidden">
            <div className="relative">
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Sparkles className="h-6 w-6" />
                </div>
              </div>
              
              <div className="pr-16">
                <h3 className="text-lg font-semibold mb-2">7 Days of Calm</h3>
                <p className="text-white/80 text-sm mb-4">
                  Build a foundation of peace with our beginner-friendly series
                </p>
                
                <Button className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border-white/20 border">
                  Start Series
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Sessions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Quick Sessions</h2>
          
          <div className="space-y-4">
            {dailyRecommendations.map((session, index) => (
              <MeditationCard
                key={index}
                title={session.title}
                duration={session.duration}
                category={session.category}
                image={session.image}
                description={session.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;