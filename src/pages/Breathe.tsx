import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Settings, Wind } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import breathingImage from "@/assets/breathing-zen.jpg";

const Breathe = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<'inhale' | 'hold' | 'exhale' | 'rest'>('inhale');
  const [seconds, setSeconds] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);

  // 4-7-8 breathing pattern timing
  const phaseTimings = {
    inhale: 4,
    hold: 7,
    exhale: 8,
    rest: 1
  };

  const breathingTechniques = [
    {
      name: "4-7-8 Breathing",
      description: "Inhale for 4, hold for 7, exhale for 8",
      duration: "5 min",
      benefits: "Reduces anxiety, promotes sleep",
      color: "ocean"
    },
    {
      name: "Box Breathing",
      description: "Equal counts of 4 for each phase",
      duration: "3 min", 
      benefits: "Improves focus and calm",
      color: "sage"
    },
    {
      name: "Triangle Breathing",
      description: "Inhale 4, hold 4, exhale 4",
      duration: "4 min",
      benefits: "Quick stress relief",
      color: "mint"
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => {
          const newSeconds = prevSeconds + 1;
          const currentTiming = phaseTimings[currentPhase];
          
          if (newSeconds >= currentTiming) {
            // Move to next phase
            if (currentPhase === 'inhale') {
              setCurrentPhase('hold');
            } else if (currentPhase === 'hold') {
              setCurrentPhase('exhale');
            } else if (currentPhase === 'exhale') {
              setCurrentPhase('rest');
            } else {
              setCurrentPhase('inhale');
              setCycleCount(prev => prev + 1);
            }
            return 0;
          }
          return newSeconds;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, currentPhase]);

  const [selectedTechnique, setSelectedTechnique] = useState("4-7-8");

  const resetSession = () => {
    setIsActive(false);
    setCurrentPhase('inhale');
    setSeconds(0);
    setCycleCount(0);
  };

  const handleStart = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setCurrentPhase('inhale');
      setSeconds(0);
    }
  };

  const getPhaseInstruction = () => {
    switch (currentPhase) {
      case 'inhale': return 'Breathe In';
      case 'hold': return 'Hold';
      case 'exhale': return 'Breathe Out';
      case 'rest': return 'Rest';
    }
  };

  const getPhaseColor = () => {
    switch (currentPhase) {
      case 'inhale': return 'text-ocean';
      case 'hold': return 'text-sage-dark';
      case 'exhale': return 'text-mint-dark';
      case 'rest': return 'text-muted-foreground';
    }
  };

  const getCurrentTiming = () => phaseTimings[currentPhase];
  const getRemainingTime = () => getCurrentTiming() - seconds;

  return (
    <div className="min-h-screen bg-gradient-peaceful pb-20">
      <div className="px-6 pt-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Wind className="h-6 w-6 text-ocean" />
            <h1 className="text-2xl font-bold">Breathe</h1>
          </div>
          <p className="text-muted-foreground">Find your center through mindful breathing</p>
        </div>

        {/* Active Breathing Session */}
        <Card className="p-8 mb-8 text-center bg-gradient-calm text-white overflow-hidden relative">
          <div className="relative z-10">
            {/* Breathing Circle */}
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div 
                className={`absolute inset-0 rounded-full border-4 border-white/30 ${
                  isActive ? 'breathe' : ''
                }`}
              />
              <div 
                className={`absolute inset-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-calm ${
                  currentPhase === 'inhale' ? 'scale-110' : 
                  currentPhase === 'exhale' ? 'scale-90' : 'scale-100'
                }`}
              >
                <div className="text-center">
                  <div className={`text-3xl font-light mb-2 ${getPhaseColor()}`}>
                    {getRemainingTime()}
                  </div>
                  <div className="text-sm font-medium">
                    {getPhaseInstruction()}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-8 mb-6">
              <div>
                <div className="text-2xl font-semibold">{cycleCount}</div>
                <div className="text-white/80 text-sm">Cycles</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">4-7-8</div>
                <div className="text-white/80 text-sm">Pattern</div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-4">
              <Button
                onClick={handleStart}
                className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border-white/20 border w-16 h-16 rounded-full p-0"
              >
                {isActive ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
              </Button>
              
              <Button
                onClick={resetSession}
                variant="outline"
                className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border-white/20 w-16 h-16 rounded-full p-0"
              >
                <RotateCcw className="h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border-white/20 w-16 h-16 rounded-full p-0"
              >
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full float" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/5 rounded-full float" style={{animationDelay: '2s'}} />
        </Card>

        {/* Breathing Techniques */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Breathing Techniques</h2>
          
          <div className="space-y-4">
            {breathingTechniques.map((technique, index) => (
              <Card key={index} className="p-5 hover-lift cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">{technique.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {technique.duration}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {technique.description}
                    </p>
                    <p className="text-xs text-ocean font-medium">
                      {technique.benefits}
                    </p>
                  </div>
                  
                  <Button 
                    size="sm" 
                    className={`shrink-0 ml-4 ${
                      technique.color === 'ocean' ? 'bg-ocean hover:bg-ocean-dark' :
                      technique.color === 'sage' ? 'bg-sage hover:bg-sage-dark text-sage-dark' :
                      'bg-mint hover:bg-mint/80 text-mint-dark'
                    } text-white`}
                    onClick={() => {
                      setSelectedTechnique(technique.name.split(' ')[0]);
                      handleStart();
                    }}
                  >
                    <Play className="h-3 w-3 mr-1" />
                    Start
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breathe;