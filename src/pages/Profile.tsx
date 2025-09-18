import { Settings, Award, Calendar, TrendingUp, Heart, Target, Crown, Bell } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
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

        {/* Preferences */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Preferences</h2>
          
          <Card className="divide-y divide-border">
            {preferences.map((pref, index) => (
              <div key={index} className="p-4 flex items-center justify-between">
                <span className="font-medium text-sm">{pref.label}</span>
                <span className="text-sm text-muted-foreground">{pref.value}</span>
              </div>
            ))}
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button variant="outline" className="w-full justify-start">
            <Bell className="h-4 w-4 mr-3" />
            Notification Settings
          </Button>
          
          <Button variant="outline" className="w-full justify-start">
            <Crown className="h-4 w-4 mr-3" />
            Upgrade to Calm Plus
          </Button>
          
          <Button variant="outline" className="w-full justify-start">
            <Settings className="h-4 w-4 mr-3" />
            Account Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;