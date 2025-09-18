import { Moon, Star, Volume2, Timer, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import mountainImage from "@/assets/mountain-sleep.jpg";
import forestImage from "@/assets/forest-meditation.jpg";

const Sleep = () => {
  const sleepStories = [
    {
      title: "The Enchanted Forest",
      narrator: "Matthew McConaughey",
      duration: "45 min",
      category: "Sleep Story",
      image: forestImage,
      description: "Journey through a magical woodland where time slows down"
    },
    {
      title: "Ocean Waves",
      narrator: "Nature Sounds",
      duration: "8 hours", 
      category: "Soundscape",
      image: mountainImage,
      description: "Gentle waves lapping against the shore all night long"
    },
    {
      title: "Train Journey",
      narrator: "Jerome Flynn",
      duration: "37 min",
      category: "Sleep Story", 
      image: forestImage,
      description: "A peaceful ride through the countryside at twilight"
    }
  ];

  const soundscapes = [
    { name: "Rain on Leaves", duration: "∞", icon: "🌧️" },
    { name: "Crackling Fire", duration: "∞", icon: "🔥" },
    { name: "Forest Sounds", duration: "∞", icon: "🌲" },
    { name: "Ocean Waves", duration: "∞", icon: "🌊" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-background pb-20">
      <div className="px-6 pt-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Moon className="h-6 w-6 text-indigo-600" />
            <h1 className="text-2xl font-bold">Sleep</h1>
          </div>
          <p className="text-muted-foreground">Wind down and drift into peaceful rest</p>
        </div>

        {/* Sleep Timer Card */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white overflow-hidden relative">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Timer className="h-5 w-5" />
              <Badge variant="secondary" className="bg-white/20 text-white border-0">
                Sleep Timer
              </Badge>
            </div>
            <h3 className="text-xl font-semibold mb-2">Set Your Sleep Timer</h3>
            <p className="text-white/80 mb-4">Choose how long you'd like to listen</p>
            
            <div className="flex gap-2 mb-4">
              {["15m", "30m", "45m", "∞"].map((time) => (
                <Button 
                  key={time}
                  variant="outline" 
                  size="sm"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/5 rounded-full" />
        </Card>

        {/* Featured Sleep Story */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Tonight's Featured Story</h2>
          
          <Card className="p-0 overflow-hidden hover-lift cursor-pointer shadow-medium">
            <div className="relative h-40">
              <img 
                src={mountainImage}
                alt="Featured sleep story"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-lavender/90 text-lavender-dark border-0">
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                  <div className="flex items-center gap-1 text-white text-sm">
                    <Volume2 className="h-3 w-3" />
                    <span>35 min</span>
                  </div>
                </div>
                <h3 className="text-white font-semibold text-lg">Midnight in the Garden</h3>
                <p className="text-white/80 text-sm">Narrated by Stephen Fry</p>
              </div>
            </div>
            
            <div className="p-4">
              <p className="text-muted-foreground text-sm mb-3">
                Wander through a secret garden under the moonlight, where every step brings deeper tranquility.
              </p>
              <Button className="w-full bg-lavender hover:bg-lavender/80 text-lavender-dark">
                <Play className="h-4 w-4 mr-2" />
                Play Story
              </Button>
            </div>
          </Card>
        </div>

        {/* Sleep Stories */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Sleep Stories</h2>
          
          <div className="space-y-4">
            {sleepStories.map((story, index) => (
              <Card key={index} className="p-4 hover-lift cursor-pointer">
                <div className="flex gap-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                    <img 
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold truncate">{story.title}</h3>
                      <Button size="sm" variant="ghost" className="shrink-0 h-8 w-8 p-0 text-ocean">
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{story.narrator}</p>
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-1">{story.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {story.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{story.duration}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Nature Sounds */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Nature Sounds</h2>
          
          <div className="grid grid-cols-2 gap-3">
            {soundscapes.map((sound, index) => (
              <Card key={index} className="p-4 text-center hover-lift cursor-pointer">
                <div className="text-2xl mb-2">{sound.icon}</div>
                <h3 className="font-medium text-sm mb-1">{sound.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{sound.duration}</p>
                <Button size="sm" variant="outline" className="w-full text-xs">
                  <Play className="h-3 w-3 mr-1" />
                  Play
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sleep;