"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Ghost, Eye, Lock, Skull, Moon, AlertTriangle, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"

interface Game {
  id: number
  title: string
  description: string
  category: "investigation" | "horror" | "both"
  difficulty: "Easy" | "Medium" | "Hard" | "Extreme"
  duration: string
  image: string
  tags: string[]
}

const games: Game[] = [
  {
    id: 1,
    title: "The Abandoned Asylum",
    description: "Investigate the dark halls of Blackwood Asylum. Uncover patient records, solve cryptic puzzles, and discover what truly happened during the facility's final night.",
    category: "both",
    difficulty: "Hard",
    duration: "45-60 min",
    image: "https://placehold.co/400x250?text=Dark+abandoned+asylum+hallway+with+flickering+lights+and+scattered+medical+equipment",
    tags: ["Psychological", "Puzzle", "Mystery"]
  },
  {
    id: 2,
    title: "Midnight Detective",
    description: "A murder has occurred in the Victorian manor. Interview suspects, examine evidence, and piece together the clues before dawn breaks.",
    category: "investigation",
    difficulty: "Medium",
    duration: "30-45 min",
    image: "https://placehold.co/400x250?text=Victorian+manor+study+with+detective+desk+magnifying+glass+and+crime+scene+evidence",
    tags: ["Detective", "Logic", "Deduction"]
  },
  {
    id: 3,
    title: "The Whispering Woods",
    description: "Something lurks in the forest. Navigate through the darkness using only your flashlight. Every sound could be your last warning.",
    category: "horror",
    difficulty: "Extreme",
    duration: "20-30 min",
    image: "https://placehold.co/400x250?text=Dark+foggy+forest+at+night+with+menacing+shadows+and+single+beam+of+flashlight",
    tags: ["Survival", "Atmospheric", "Stealth"]
  },
  {
    id: 4,
    title: "Cold Case Files",
    description: "Dive into unsolved mysteries from the past. Use forensic tools, analyze witness statements, and bring justice to forgotten victims.",
    category: "investigation",
    difficulty: "Medium",
    duration: "40-50 min",
    image: "https://placehold.co/400x250?text=Detective+office+with+case+files+evidence+board+red+string+connections+and+photographs",
    tags: ["Forensics", "Mystery", "Investigation"]
  },
  {
    id: 5,
    title: "The Cursed Painting",
    description: "An antique painting holds a terrible secret. Investigate the artist's twisted past while the painting seems to watch your every move.",
    category: "both",
    difficulty: "Hard",
    duration: "35-45 min",
    image: "https://placehold.co/400x250?text=Eerie+vintage+portrait+painting+in+ornate+frame+with+eyes+that+follow+viewer",
    tags: ["Supernatural", "Art Mystery", "Puzzle"]
  },
  {
    id: 6,
    title: "Basement Terror",
    description: "You wake up in a dark basement with no memory. Find clues, solve puzzles, and escape before the captor returns.",
    category: "horror",
    difficulty: "Extreme",
    duration: "25-35 min",
    image: "https://placehold.co/400x250?text=Creepy+basement+with+rusty+chains+concrete+walls+dim+light+and+ominous+shadows",
    tags: ["Escape Room", "Survival", "Puzzle"]
  }
]

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredGames = games.filter(game => {
    const matchesCategory = selectedCategory === "all" || game.category === selectedCategory || (selectedCategory === "both" && game.category === "both")
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         game.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-900/50 text-green-300 border-green-700"
      case "Medium": return "bg-yellow-900/50 text-yellow-300 border-yellow-700"
      case "Hard": return "bg-orange-900/50 text-orange-300 border-orange-700"
      case "Extreme": return "bg-red-900/50 text-red-300 border-red-700"
      default: return ""
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9InJnYmEoMTM5LCAwLCAwLCAwLjA1KSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Skull className="w-12 h-12 text-primary" />
              <h1 className="font-display text-6xl md:text-7xl text-primary glow-text">
                Dark Archives
              </h1>
              <Ghost className="w-12 h-12 text-primary" />
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              {'Dare to explore our collection of spine-chilling investigation and horror games. '} 
              {'Solve mysteries, uncover dark secrets, and test your courage in the face of terror.'}
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Badge variant="outline" className="text-base px-4 py-2 border-primary/50">
                <Eye className="w-4 h-4 mr-2" />
                {'6 Terrifying Cases'}
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2 border-secondary/50">
                <Lock className="w-4 h-4 mr-2" />
                {'Mind-Bending Puzzles'}
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2 border-accent/50">
                <AlertTriangle className="w-4 h-4 mr-2" />
                {'No Escape'}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for a terrifying experience..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border"
              />
            </div>
            
            <div className="flex gap-2">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
                className="flex-1 md:flex-none"
              >
                All Games
              </Button>
              <Button
                variant={selectedCategory === "investigation" ? "default" : "outline"}
                onClick={() => setSelectedCategory("investigation")}
                className="flex-1 md:flex-none"
              >
                <Eye className="w-4 h-4 mr-2" />
                Investigation
              </Button>
              <Button
                variant={selectedCategory === "horror" ? "default" : "outline"}
                onClick={() => setSelectedCategory("horror")}
                className="flex-1 md:flex-none"
              >
                <Ghost className="w-4 h-4 mr-2" />
                Horror
              </Button>
              <Button
                variant={selectedCategory === "both" ? "default" : "outline"}
                onClick={() => setSelectedCategory("both")}
                className="flex-1 md:flex-none"
              >
                <Skull className="w-4 h-4 mr-2" />
                Both
              </Button>
            </div>
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game) => (
              <Card 
                key={game.id} 
                className="overflow-hidden border-border bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    <Badge className={getDifficultyColor(game.difficulty)}>
                      {game.difficulty}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {game.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {game.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Clock className="w-4 h-4" />
                    {game.duration}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {game.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full pulse-glow" variant="default">
                    <Moon className="w-4 h-4 mr-2" />
                    {'Enter If You Dare'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredGames.length === 0 && (
            <div className="text-center py-16">
              <Ghost className="w-16 h-16 mx-auto text-muted-foreground mb-4 opacity-50" />
              <p className="text-xl text-muted-foreground">
                {'No games found matching your criteria...'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="mb-2">
            {'⚠️ Warning: These games contain scary and disturbing content ⚠️'}
          </p>
          <p className="text-sm">
            {'© 2024 Dark Archives. Enter at your own risk.'}
          </p>
        </div>
      </footer>
    </div>
  )
}
