interface MineralQuoteSectionProps {
  quote: string;
  author?: string;
  backgroundImage?: string;
}

const MineralQuoteSection = ({ quote, author, backgroundImage }: MineralQuoteSectionProps) => {
  return (
    <section className="relative min-h-[60vh] w-full overflow-hidden">
      {/* Background */}
      {backgroundImage ? (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
      )}
      
      {/* Content */}
      <div className="relative z-10 flex min-h-[60vh] flex-col items-center justify-center px-8 py-24 text-center md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <div className="mb-8 font-body text-6xl text-primary/30">"</div>
          
          <blockquote className="font-body text-2xl font-extralight italic leading-relaxed text-foreground md:text-3xl lg:text-4xl">
            {quote}
          </blockquote>
          
          {author && (
            <cite className="mt-8 block font-body text-lg font-medium not-italic text-foreground/60">
              — {author}
            </cite>
          )}
        </div>
      </div>
    </section>
  );
};

export default MineralQuoteSection;
