import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Brain, Camera, FileText, Activity, Heart, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-yoga.jpg";
import featureAi from "@/assets/feature-ai.jpg";
import featureTracking from "@/assets/feature-tracking.jpg";
import featureReports from "@/assets/feature-reports.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />

      <section className="px-4 pb-20 pt-32">
        <div className="container mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block rounded-full bg-accent/50 px-4 py-2 text-sm font-medium text-accent-foreground">
                <Sparkles className="mr-2 inline h-4 w-4" />
                AI-Powered Yoga Training
              </div>
              <h1 className="text-5xl font-bold leading-tight text-foreground lg:text-6xl">
                Perfect Your Poses with{" "}
                <span className="bg-gradient-wellness bg-clip-text text-transparent">AI Precision</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Get personalized yoga recommendations for your health concerns and receive real-time feedback on your
                form with computer vision technology.
              </p>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-wellness opacity-20 blur-3xl"></div>
              <img src={heroImage} alt="Person practicing yoga" className="relative w-full rounded-2xl shadow-medium" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-4xl font-bold text-foreground">How PosePerfect Works</h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              From diagnosis to mastery, our AI guides you through every step of your wellness journey
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-none bg-gradient-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-medium">
              <div className="mb-6">
                <img src={featureAi} alt="AI Analysis" className="h-20 w-20 rounded-lg" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-foreground">AI Recommendations</h3>
              <p className="mb-4 text-muted-foreground">
                Tell us your health concern and PosePerfect recommends yoga asanas tailored for targeted relief.
              </p>
              <div className="flex items-center font-medium text-primary">
                <Brain className="mr-2 h-5 w-5" />
                Smart Analysis
              </div>
            </Card>

            <Card className="border-none bg-gradient-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-medium">
              <div className="mb-6">
                <img src={featureTracking} alt="Real-time Tracking" className="h-20 w-20 rounded-lg" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-foreground">Real-Time Tracking</h3>
              <p className="mb-4 text-muted-foreground">
                Watch expert demonstrations while the pose engine compares your posture and alignment with the trainer.
              </p>
              <div className="flex items-center font-medium text-primary">
                <Camera className="mr-2 h-5 w-5" />
                Live Feedback
              </div>
            </Card>

            <Card className="border-none bg-gradient-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-medium">
              <div className="mb-6">
                <img src={featureReports} alt="Performance Reports" className="h-20 w-20 rounded-lg" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-foreground">Progress Reports</h3>
              <p className="mb-4 text-muted-foreground">
                Save detailed performance reports after each session and track improvements over time.
              </p>
              <div className="flex items-center font-medium text-primary">
                <FileText className="mr-2 h-5 w-5" />
                Track Progress
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6 text-center">
            <h2 className="text-4xl font-bold text-foreground">Your Personal Yoga Practice Companion</h2>
            <p className="text-lg text-muted-foreground">
              PosePerfect bridges the gap between self-practice and professional guidance, bringing expert-level
              feedback into your regular routine.
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            <Card className="border-none bg-gradient-card p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-success/10">
                  <Heart className="h-5 w-5 text-success" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-foreground">Targeted Health Relief</h4>
                  <p className="text-muted-foreground">
                    Address specific health concerns with yoga poses selected from research-informed recommendations.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-none bg-gradient-card p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-success/10">
                  <Activity className="h-5 w-5 text-success" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-foreground">Safe and Accurate Practice</h4>
                  <p className="text-muted-foreground">
                    Avoid injuries with real-time corrections and alignment guidance during guided sessions.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-none bg-gradient-card p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-success/10">
                  <Sparkles className="h-5 w-5 text-success" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-foreground">Track Your Wellness Journey</h4>
                  <p className="text-muted-foreground">
                    Review session history, monitor scores, and keep a clear record of your practice progress.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-4 py-8">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2026 PosePerfect. AI-powered yoga guidance for everyone.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
