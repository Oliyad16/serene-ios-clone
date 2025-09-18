import { useState } from "react";
import { Search, Filter, Star, Play } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MeditationCard from "@/components/MeditationCard";
import MeditationPlayer from "@/components/MeditationPlayer";
import forestImage from "@/assets/forest-meditation.jpg";
import mountainImage from "@/assets/mountain-sleep.jpg";
import breathingImage from "@/assets/breathing-zen.jpg";

const Meditate = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [playerData, setPlayerData] = useState<{
    title: string;
    instructor: string;
    duration: string;
    image: string;
    isVisible: boolean;
  }>({
    title: "",
    instructor: "",
    duration: "",
    image: "",
    isVisible: false
  });

  const categories = ["All", "Anxiety", "Focus", "Sleep", "Breathe", "Mindfulness", "Body"];
  
  const featured = [
    {
      title: "Daily Calm",
      subtitle: "10 min meditation",
      description: "Today: Finding Peace in Uncertainty",
      gradient: "gradient-ocean"
    },
    {
      title: "Sleep Stories",
      subtitle: "30+ stories",
      description: "Drift into peaceful slumber",
      gradient: "gradient-sunset"
    }
  ];

  const meditations = [
    {
      title: "Anxiety Release",
      duration: "12 min",
      category: "Anxiety",
      image: forestImage,
      description: "Let go of worry and embrace calm",
      instructor: "Sarah Chen"
    },
    {
      title: "Deep Breathing",
      duration: "8 min", 
      category: "Breathe",
      image: breathingImage,
      description: "Find your natural rhythm",
      instructor: "Mark Williams"
    },
    {
      title: "Mountain Meditation",
      duration: "20 min",
      category: "Focus",
      image: mountainImage,
      description: "Build unshakeable inner strength",
      instructor: "David Kim"
    },
    {
      title: "Body Scan",
      duration: "15 min",
      category: "Body",
      image: forestImage,
      description: "Release physical tension mindfully",
      instructor: "Emma Johnson"
    },
    {
      title: "Loving Kindness",
      duration: "18 min",
      category: "Mindfulness", 
      image: mountainImage,
      description: "Cultivate compassion for all beings",
      instructor: "Lisa Anderson"
    },
    {
      title: "Quick Focus",
      duration: "5 min",
      category: "Focus",
      image: breathingImage,
      description: "Sharpen your concentration instantly",
      instructor: "Tom Parker"
    }
  ];

  const handlePlayMeditation = (meditation: any) => {
    setPlayerData({
      title: meditation.title,
      instructor: meditation.instructor,
      duration: meditation.duration,
      image: meditation.image,
      isVisible: true
    });
  };

  const handleClosePlayer = () => {
    setPlayerData(prev => ({ ...prev, isVisible: false }));
  };

  const filteredMeditations = meditations.filter(meditation => {
    const matchesSearch = meditation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         meditation.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || meditation.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="px-6 pt-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-6">Meditate</h1>
          
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search meditations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-muted/50 border-0 focus-visible:ring-ocean/30"
            />
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-ocean hover:bg-ocean-dark text-white shrink-0" 
                  : "bg-muted/50 hover:bg-muted text-foreground shrink-0"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Featured</h2>
          <div className="grid grid-cols-1 gap-4">
            {featured.map((item, index) => (
              <Card key={index} className={`p-6 text-white overflow-hidden relative ${item.gradient} hover-lift cursor-pointer`}>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-white/20 text-white border-0">
                      Featured
                    </Badge>
                    <Star className="h-5 w-5 text-yellow-300 fill-current" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-white/80 text-sm mb-2">{item.subtitle}</p>
                  <p className="text-white/90 mb-4">{item.description}</p>
                  <Button 
                    className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border-white/20 border"
                    onClick={() => handlePlayMeditation({
                      title: item.title,
                      instructor: "Calm Team",
                      duration: item.subtitle,
                      image: item.title === "Daily Calm" ? forestImage : mountainImage
                    })}
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Start
                  </Button>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
              </Card>
            ))}
          </div>
        </div>

        {/* All Meditations */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">
              {selectedCategory === "All" ? "All Meditations" : selectedCategory}
            </h2>
            <Button variant="ghost" size="sm">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {filteredMeditations.map((meditation, index) => (
              <MeditationCard
                key={index}
                title={meditation.title}
                duration={meditation.duration}
                category={meditation.category}
                image={meditation.image}
                description={meditation.description}
                onPlay={() => handlePlayMeditation(meditation)}
              />
            ))}
          </div>
          
          {filteredMeditations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No meditations found matching your search.</p>
            </div>
          )}
        </div>
      </div>
      
      <MeditationPlayer
        title={playerData.title}
        instructor={playerData.instructor}
        duration={playerData.duration}
        image={playerData.image}
        isVisible={playerData.isVisible}
        onClose={handleClosePlayer}
      />
    </div>
  );
};

export default Meditate;