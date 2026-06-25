import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Home as HomeIcon, Zap, Leaf, LayoutGrid, Compass } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663790216171/QQZfxF6tjQdzBATLuYaqmY/brand_logo-UkpJNHtAKyg2qYX8uRvCby.webp"
              alt="Vastu Guide Logo"
              className="w-8 h-8"
            />
            <span className="font-bold text-lg text-primary">Vastu Guide</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm text-foreground/70 hover:text-foreground transition">
              Features
            </a>
            <a href="#spaces" className="text-sm text-foreground/70 hover:text-foreground transition">
              Spaces
            </a>
            <a href="#vastu" className="text-sm text-foreground/70 hover:text-foreground transition">
              Vastu
            </a>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663790216171/QQZfxF6tjQdzBATLuYaqmY/hero_image-cBnsAFv5osg9H2wmcTv98k.webp"
            alt="Vastu-Compliant Living Space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>

        <div className="container relative z-10 py-32 flex flex-col justify-center min-h-[600px]">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Unlock Harmony: Your Vastu-Compliant Airbnb Journey Begins Here
            </h1>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Discover how ancient Vastu principles combine with modern design to create a harmonious, profitable Airbnb space. Explore our expertly designed ground floor plan that maximizes comfort, flow, and guest satisfaction.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Explore Your Design <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn About Vastu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why This Design Stands Out</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              A perfect blend of ancient wisdom and contemporary living, tailored for modern Airbnb guests.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Compass className="w-8 h-8" />,
                title: "Vastu-Compliant",
                description: "Strictly adheres to Vastu principles for optimal energy flow, balance, and harmony throughout the space.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Optimized Circulation",
                description: "Efficient room layout ensures smooth movement, natural lighting, and cross-ventilation for guest comfort.",
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Natural Elements",
                description: "Incorporates natural light, ventilation, and organic materials to create a serene, welcoming atmosphere.",
              },
              {
                icon: <HomeIcon className="w-8 h-8" />,
                title: "Guest-Centric Design",
                description: "Every space is thoughtfully designed with Airbnb guests in mind, balancing aesthetics and functionality.",
              },
              {
                icon: <LayoutGrid className="w-8 h-8" />,
                title: "Smart Space Utilization",
                description: "Maximizes usable area within irregular plot dimensions without compromising comfort or style.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "3D Visualization",
                description: "Explore immersive 3D renderings of key areas to visualize the complete design before implementation.",
              },
            ].map((feature, idx) => (
              <Card key={idx} className="p-8 border border-border hover:shadow-lg transition-shadow">
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Spaces Overview Section */}
      <section id="spaces" className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Explore the Spaces</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Each area is thoughtfully designed to serve its purpose while maintaining Vastu harmony.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Front Section",
                description: "Main entrance, entry lobby, guest bedroom, and common washroom. The welcoming zone that sets the tone for the entire space.",
                zones: ["Main Entrance", "Entry Lobby", "Guest Bedroom", "Common Washroom"],
              },
              {
                title: "Central Living Area",
                description: "Spacious hall with open kitchen, secondary washroom, and Vastu-compliant staircase. The heart of the home.",
                zones: ["Living Hall", "Open Kitchen", "Dining Area", "Secondary Washroom"],
              },
              {
                title: "Rear Section",
                description: "Master bedroom with attached storeroom. A private retreat designed for relaxation and rejuvenation.",
                zones: ["Master Bedroom", "Attached Storeroom", "Ensuite Access"],
              },
              {
                title: "Specialized Zones",
                description: "Dedicated pooja room and strategically placed utilities. Spiritual and functional elements in harmony.",
                zones: ["Pooja Room", "Staircase", "Storage", "Utilities"],
              },
            ].map((space, idx) => (
              <Card key={idx} className="p-8 border border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-3">{space.title}</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">{space.description}</p>
                <div className="space-y-2">
                  {space.zones.map((zone, zIdx) => (
                    <div key={zIdx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-foreground/80">{zone}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Vastu Principles Section */}
      <section id="vastu" className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Vastu Principles Applied</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Ancient wisdom integrated seamlessly into modern architecture and design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                principle: "Kitchen Orientation",
                details: "Cooking platform faces East, gas stove in South-East corner, sink in North-East. Water flows toward North/East for positive energy.",
              },
              {
                principle: "Staircase Placement",
                details: "Begins from North/East, ascends toward South/West with clockwise movement. Odd number of steps (11, 15, 21) for harmony.",
              },
              {
                principle: "Washroom Positioning",
                details: "Located in North-West zone. Commode faces North/South. Drainage flows toward North/East for optimal energy balance.",
              },
              {
                principle: "Pooja Room",
                details: "Positioned in North-East corner, separate from toilets. A dedicated spiritual space for meditation and prayer.",
              },
              {
                principle: "Natural Elements",
                details: "Windows on East and North walls for sunlight and ventilation. Cross-ventilation maintains fresh, positive energy.",
              },
              {
                principle: "Space Utilization",
                details: "Brahmasthan (center) remains clear and unobstructed. Staircase avoids center placement for optimal energy flow.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-6 border border-border bg-card/50">
                <h4 className="text-lg font-semibold text-primary mb-2">{item.principle}</h4>
                <p className="text-foreground/70 text-sm leading-relaxed">{item.details}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Explore Your Design?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            View detailed floor plans, 3D visualizations, and comprehensive Vastu guidelines for your Airbnb space.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View Floor Plan
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Learn About Vastu
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Vastu Guide</h4>
              <p className="text-sm text-foreground/70">Harmonious living through Vastu-compliant design.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Explore</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-foreground transition">Floor Plan</a></li>
                <li><a href="#" className="hover:text-foreground transition">3D Visualizations</a></li>
                <li><a href="#" className="hover:text-foreground transition">Vastu Details</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-foreground transition">About Vastu</a></li>
                <li><a href="#" className="hover:text-foreground transition">Design Guide</a></li>
                <li><a href="#" className="hover:text-foreground transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <p className="text-sm text-foreground/70">Get in touch for consultations and inquiries.</p>
            </div>
          </div>
          <Separator />
          <div className="mt-8 text-center text-sm text-foreground/60">
            <p>&copy; 2026 Vastu-Compliant Airbnb Guide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
