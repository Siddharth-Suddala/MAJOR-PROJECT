import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ASANAS } from "@/lib/asanas";

const Asanas = () => {
  const navigate = useNavigate();
  const asanas = ASANAS;

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />

      <div className="px-4 pb-16 pt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 space-y-4 animate-fade-in">
            <h1 className="text-4xl font-bold text-foreground lg:text-5xl">Yoga Asanas Library</h1>
            <p className="max-w-3xl text-xl text-muted-foreground">
              Explore the full set of poses available in PosePerfect. Select any asana to start a guided session.
            </p>
          </div>

          <div className="space-y-6">
            {asanas.map((asana) => (
              <Card
                key={asana.id}
                className="cursor-pointer border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-medium lg:p-8"
                onClick={() => navigate(`/session?asana=${encodeURIComponent(asana.id)}`)}
              >
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="mb-1 text-2xl font-bold text-foreground">{asana.name}</h3>
                      <p className="italic text-muted-foreground">{asana.sanskrit}</p>
                    </div>

                    <p className="text-foreground">{asana.benefits}</p>

                    <div className="flex items-center text-sm text-muted-foreground">
                      <Target className="mr-2 h-4 w-4" />
                      {asana.targetArea}
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="bg-gradient-wellness transition-opacity hover:opacity-90 lg:self-center"
                    onClick={(event) => {
                      event.stopPropagation();
                      navigate(`/session?asana=${encodeURIComponent(asana.id)}`);
                    }}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Start Practice
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

export default Asanas;
