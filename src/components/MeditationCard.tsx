import { Play, Clock, Headphones } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface MeditationCardProps {
  title: string;
  duration: string;
  category: string;
  image: string;
  description?: string;
  isLocked?: boolean;
  onPlay?: () => void;
}

const MeditationCard = ({ 
  title, 
  duration, 
  category, 
  image, 
  description,
  isLocked = false,
  onPlay
}: MeditationCardProps) => {
  return (
    <Card className="session-card group cursor-pointer overflow-hidden">
      <div className="relative h-32 mb-4 rounded-xl overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-calm group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-center justify-between">
            <span className="text-white text-xs font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
              {category}
            </span>
            <div className="flex items-center gap-1 text-white text-xs">
              <Clock className="h-3 w-3" />
              {duration}
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-foreground mb-1">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Headphones className="h-3 w-3" />
            <span>Guided</span>
          </div>
          
          <Button 
            size="sm" 
            className="bg-ocean hover:bg-ocean-dark text-white shadow-none h-8 px-3"
            disabled={isLocked}
            onClick={onPlay}
          >
            <Play className="h-3 w-3 mr-1" />
            {isLocked ? "Locked" : "Play"}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default MeditationCard;