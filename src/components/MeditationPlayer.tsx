import { useState, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Heart, X, Volume2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

interface MeditationPlayerProps {
  title: string;
  instructor: string;
  duration: string;
  image: string;
  isVisible: boolean;
  onClose: () => void;
}

const MeditationPlayer = ({ 
  title, 
  instructor, 
  duration, 
  image, 
  isVisible, 
  onClose 
}: MeditationPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState([80]);
  const [isFavorite, setIsFavorite] = useState(false);

  // Convert duration string to seconds for demo
  const totalSeconds = parseInt(duration) * 60 || 600; // Default 10 minutes

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && currentTime < totalSeconds) {
      interval = setInterval(() => {
        setCurrentTime(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPlaying, currentTime, totalSeconds]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = (currentTime / totalSeconds) * 100;

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end">
      <Card className="w-full max-w-md mx-auto mb-4 mx-4 overflow-hidden bg-card/95 backdrop-blur-md">
        {/* Header */}
        <div className="relative h-48">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
          
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20 w-8 h-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="absolute bottom-4 left-4 right-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-0 mb-2">
              Meditation
            </Badge>
            <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
            <p className="text-white/80 text-sm">{instructor}</p>
          </div>
        </div>

        <div className="p-6">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(totalSeconds)}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-ocean h-2 rounded-full transition-all duration-1000"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <Button variant="ghost" size="sm" className="w-12 h-12 rounded-full p-0">
              <SkipBack className="h-5 w-5" />
            </Button>
            
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full bg-ocean hover:bg-ocean-dark text-white p-0"
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </Button>
            
            <Button variant="ghost" size="sm" className="w-12 h-12 rounded-full p-0">
              <SkipForward className="h-5 w-5" />
            </Button>
          </div>

          {/* Volume and Actions */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsFavorite(!isFavorite)}
              className={`w-10 h-10 rounded-full p-0 ${
                isFavorite ? 'text-red-500' : 'text-muted-foreground'
              }`}
            >
              <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
            </Button>
            
            <div className="flex-1 flex items-center gap-2">
              <Volume2 className="h-4 w-4 text-muted-foreground" />
              <Slider
                value={volume}
                onValueChange={setVolume}
                max={100}
                step={1}
                className="flex-1"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MeditationPlayer;