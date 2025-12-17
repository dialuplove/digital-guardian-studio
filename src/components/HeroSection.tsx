import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const heroTitle = site.hero.title;
  const emphasisTarget = "I build it.";
  const heroTitleHasEmphasis = heroTitle.includes(emphasisTarget);
  const [heroTitlePrefix, heroTitleSuffix = ""] = heroTitleHasEmphasis
    ? heroTitle.split(emphasisTarget)
    : [heroTitle, ""];

  const heroSubtitle = site.hero.subtitle;
  const subtitleSplitToken = "Whatever the problem,";
  const [heroSubtitleFirstLine, subtitleRemainder = ""] = heroSubtitle.includes(
    subtitleSplitToken,
  )
    ? heroSubtitle.split(subtitleSplitToken)
    : [heroSubtitle, ""];
  const heroSubtitleSecondLine = subtitleRemainder
    ? `${subtitleSplitToken}${subtitleRemainder}`
    : "";

  return (
    <section className="min-h-[85vh] flex items-center pt-24 pb-20">
      <div className="container-narrow">
        <div className="max-w-2xl">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.1] tracking-tight mb-8 animate-fade-in text-foreground">
            {heroTitleHasEmphasis ? (
              <>
                {heroTitlePrefix}
                <br />
                <span className="text-primary">{emphasisTarget}</span>
                {heroTitleSuffix}
              </>
            ) : (
              heroTitle
            )}
          </h1>

          {/* Subline */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-14 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            {heroSubtitleSecondLine ? (
              <>
                {heroSubtitleFirstLine}
                <br />
                {heroSubtitleSecondLine}
              </>
            ) : (
              heroSubtitle
            )}
          </p>

          {/* CTA */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="lg" asChild>
              <a href={site.hero.ctaHref}>
                {site.hero.ctaLabel}
                <ArrowRight size={18} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
