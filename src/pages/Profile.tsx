import { useState } from "react";
import { User, Settings, Crown, Calendar, Flame, Award, ChevronRight, Moon, Sun, Target, TrendingUp, Heart, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [weeklyGoal, setWeeklyGoal] = useState(5);
  const { toast } = useToast();
  const stats = [
    {
      label: "Current Streak",
      value: "7 days",
      icon: Calendar,
      color: "text-ocean"
    },
    {
      label: "Total Sessions",
      value: "34",
      icon: Target,
      color: "text-sage-dark"
    },
    {
      label: "Minutes Meditated",
      value: "420",
      icon: TrendingUp,
      color: "text-mint-dark"
    },
    {
      label: "Mindful Days",
      value: "28",
      icon: Heart,
      color: "text-sunset"
    }
  ];

  const achievements = [
    {
      title: "First Steps",
      description: "Completed your first meditation",
      icon: "🎯",
      unlocked: true
    },
    {
      title: "Week Warrior",
      description: "7 day meditation streak",
      icon: "🔥",
      unlocked: true
    },
    {
      title: "Mindful Month",
      description: "30 day meditation streak",
      icon: "🏆",
      unlocked: false
    },
    {
      title: "Sleep Master",
      description: "Used sleep stories 10 times",
      icon: "🌙",
      unlocked: true
    }
  ];

  const preferences = [
    { label: "Daily Reminders", value: "9:00 AM, 9:00 PM" },
    { label: "Session Length", value: "10-15 minutes" },
    { label: "Preferred Voice", value: "Tamara Levitt" },
    { label: "Background Sounds", value: "Nature sounds" }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="px-6 pt-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Profile</h1>
          <Button variant="ghost" size="sm">
            <Settings className="h-5 w-5" />
          </Button>
        </div>

        {/* Profile Card */}
        <Card className="p-6 mb-8 bg-gradient-calm text-white overflow-hidden relative">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="h-16 w-16 border-2 border-white/20">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="bg-white/20 text-white text-lg">JD</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-1">John Doe</h2>
                <p className="text-white/80 text-sm mb-2">Member since March 2024</p>
                <div className="flex items-center gap-2">
                  <Crown className="h-4 w-4 text-yellow-300" />
                  <Badge variant="secondary" className="bg-white/20 text-white border-0 text-xs">
                    Calm Plus
                  </Badge>
                </div>
              </div>
            </div>
            
            <div className="text-center pt-4 border-t border-white/20">
              <p className="text-white/80 text-sm mb-1">Today's intention</p>
              <p className="font-medium">"Find peace in the present moment"</p>
            </div>
          </div>
          
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full" />
          <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-white/5 rounded-full" />
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-4 hover-lift">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${
                  stat.color === 'text-ocean' ? 'bg-ocean/10' :
                  stat.color === 'text-sage-dark' ? 'bg-sage/20' :
                  stat.color === 'text-mint-dark' ? 'bg-mint/20' :
                  'bg-sunset/20'
                } flex items-center justify-center`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Award className="h-5 w-5 text-sunset" />
            Achievements
          </h2>
          
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement, index) => (
              <Card key={index} className={`p-4 text-center hover-lift ${
                achievement.unlocked ? 'bg-card' : 'bg-muted/50 opacity-60'
              }`}>
                <div className="text-2xl mb-2">{achievement.icon}</div>
                <h3 className="font-medium text-sm mb-1">{achievement.title}</h3>
                <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                  {achievement.description}
                </p>
                {achievement.unlocked ? (
                  <Badge variant="outline" className="text-xs bg-sage/10 text-sage-dark border-sage/30">
                    Unlocked
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-xs">
                    Locked
                  </Badge>
                )}
              </Card>
            ))}
          </div>
        </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Settings</h2>
            
            <Card className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Push Notifications</span>
                <Switch 
                  className="data-[state=checked]:bg-ocean" 
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Dark Mode</span>
                <Switch 
                  className="data-[state=checked]:bg-ocean" 
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Weekly Goal</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-ocean"
                  onClick={() => {
                    const newGoal = weeklyGoal === 7 ? 3 : weeklyGoal + 1;
                    setWeeklyGoal(newGoal);
                    toast({
                      title: "Goal Updated",
                      description: `Weekly goal set to ${newGoal} sessions`,
                    });
                  }}
                >
                  {weeklyGoal} sessions
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Upgrade Card */}
          <Card className="p-6 bg-gradient-sunset text-white text-center overflow-hidden relative mb-8">
            <div className="relative z-10">
              <Crown className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
              <h3 className="text-lg font-semibold mb-2">Upgrade to Calm Plus</h3>
              <p className="text-white/80 text-sm mb-4">
                Unlock unlimited meditations, sleep stories, and masterclasses
              </p>
              <Button 
                className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border-white/20 border"
                onClick={() => toast({
                  title: "Upgrade Available",
                  description: "Calm Plus features coming soon!",
                })}
              >
                Try Free for 7 Days
              </Button>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/5 rounded-full" />
          </Card>
      </div>
    </div>
  );
};

export default Profile;