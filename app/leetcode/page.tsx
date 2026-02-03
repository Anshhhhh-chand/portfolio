import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Target, Calendar, TrendingUp, Code, Award } from "lucide-react"

const leetcodeStats = {
  totalSolved: 250,
  totalProblems: 3000,
  ranking: 125000,
  contestRating: 1650,
  maxRating: 1720,
  streak: 45,
  easy: { solved: 120, total: 800 },
  medium: { solved: 110, total: 1600 },
  hard: { solved: 20, total: 600 },
}

const recentSubmissions = [
  {
    title: "Two Sum",
    difficulty: "Easy",
    status: "Accepted",
    language: "Python",
    time: "2 hours ago",
    runtime: "52ms",
  },
  {
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    status: "Accepted",
    language: "JavaScript",
    time: "5 hours ago",
    runtime: "84ms",
  },
  {
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    status: "Accepted",
    language: "Python",
    time: "1 day ago",
    runtime: "96ms",
  },
  {
    title: "Valid Parentheses",
    difficulty: "Easy",
    status: "Accepted",
    language: "Java",
    time: "2 days ago",
    runtime: "1ms",
  },
  {
    title: "Binary Tree Inorder Traversal",
    difficulty: "Easy",
    status: "Accepted",
    language: "Python",
    time: "3 days ago",
    runtime: "32ms",
  },
]

const achievements = [
  {
    title: "50 Days Badge",
    description: "Solved at least one problem for 50 consecutive days",
    icon: Calendar,
    color: "text-green-400",
  },
  {
    title: "100 Problems",
    description: "Solved 100+ problems",
    icon: Target,
    color: "text-blue-400",
  },
  {
    title: "Contest Participant",
    description: "Participated in 15+ contests",
    icon: Trophy,
    color: "text-yellow-400",
  },
  {
    title: "Algorithm Expert",
    description: "Solved problems from all major categories",
    icon: Code,
    color: "text-purple-400",
  },
]

export default function LeetCode() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">LeetCode Profile</h1>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            My competitive programming journey and problem-solving statistics on LeetCode platform.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card className="card-gradient text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold gradient-text mb-2">{leetcodeStats.totalSolved}</div>
              <p className="text-foreground/70 text-sm">Problems Solved</p>
            </CardContent>
          </Card>

          <Card className="card-gradient text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold gradient-text mb-2">{leetcodeStats.contestRating}</div>
              <p className="text-foreground/70 text-sm">Contest Rating</p>
            </CardContent>
          </Card>

          <Card className="card-gradient text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold gradient-text mb-2">{leetcodeStats.ranking.toLocaleString()}</div>
              <p className="text-foreground/70 text-sm">Global Ranking</p>
            </CardContent>
          </Card>

          <Card className="card-gradient text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold gradient-text mb-2">{leetcodeStats.streak}</div>
              <p className="text-foreground/70 text-sm">Day Streak</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Problem Solving Progress */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <TrendingUp className="w-5 h-5 mr-2 text-violet-400" />
                  Problem Solving Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Easy Problems */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground font-medium">Easy</span>
                    <span className="text-foreground/70 text-sm">
                      {leetcodeStats.easy.solved} / {leetcodeStats.easy.total}
                    </span>
                  </div>
                  <Progress value={(leetcodeStats.easy.solved / leetcodeStats.easy.total) * 100} className="h-2" />
                  <div className="flex justify-between items-center mt-1">
                    <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">
                      Easy
                    </Badge>
                    <span className="text-xs text-foreground/60">
                      {Math.round((leetcodeStats.easy.solved / leetcodeStats.easy.total) * 100)}%
                    </span>
                  </div>
                </div>

                {/* Medium Problems */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground font-medium">Medium</span>
                    <span className="text-foreground/70 text-sm">
                      {leetcodeStats.medium.solved} / {leetcodeStats.medium.total}
                    </span>
                  </div>
                  <Progress value={(leetcodeStats.medium.solved / leetcodeStats.medium.total) * 100} className="h-2" />
                  <div className="flex justify-between items-center mt-1">
                    <Badge variant="outline" className="bg-yellow-500/10 text-yellow-400 border-yellow-500/20">
                      Medium
                    </Badge>
                    <span className="text-xs text-foreground/60">
                      {Math.round((leetcodeStats.medium.solved / leetcodeStats.medium.total) * 100)}%
                    </span>
                  </div>
                </div>

                {/* Hard Problems */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground font-medium">Hard</span>
                    <span className="text-foreground/70 text-sm">
                      {leetcodeStats.hard.solved} / {leetcodeStats.hard.total}
                    </span>
                  </div>
                  <Progress value={(leetcodeStats.hard.solved / leetcodeStats.hard.total) * 100} className="h-2" />
                  <div className="flex justify-between items-center mt-1">
                    <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/20">
                      Hard
                    </Badge>
                    <span className="text-xs text-foreground/60">
                      {Math.round((leetcodeStats.hard.solved / leetcodeStats.hard.total) * 100)}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Submissions */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Code className="w-5 h-5 mr-2 text-violet-400" />
                  Recent Submissions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSubmissions.map((submission, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-accent/20 border border-border/50"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{submission.title}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              submission.difficulty === "Easy"
                                ? "bg-green-500/10 text-green-400 border-green-500/20"
                                : submission.difficulty === "Medium"
                                  ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                                  : "bg-red-500/10 text-red-400 border-red-500/20"
                            }`}
                          >
                            {submission.difficulty}
                          </Badge>
                          <span className="text-xs text-foreground/60">{submission.language}</span>
                          <span className="text-xs text-foreground/60">•</span>
                          <span className="text-xs text-foreground/60">{submission.runtime}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-green-500/10 text-green-400 border-green-500/20">
                          {submission.status}
                        </Badge>
                        <p className="text-xs text-foreground/60 mt-1">{submission.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Award className="w-5 h-5 mr-2 text-violet-400" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-accent/20 border border-border/50"
                    >
                      <achievement.icon className={`w-5 h-5 mt-0.5 ${achievement.color}`} />
                      <div>
                        <h4 className="font-medium text-foreground text-sm">{achievement.title}</h4>
                        <p className="text-xs text-foreground/60 mt-1">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contest Performance */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Trophy className="w-5 h-5 mr-2 text-violet-400" />
                  Contest Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Current Rating</span>
                  <span className="font-bold gradient-text">{leetcodeStats.contestRating}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Max Rating</span>
                  <span className="font-bold text-foreground">{leetcodeStats.maxRating}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Contests Attended</span>
                  <span className="font-bold text-foreground">15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Best Rank</span>
                  <span className="font-bold text-foreground">2,456</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
