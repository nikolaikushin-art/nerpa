interface QuoteSectionProps {
  quote: string;
  author?: string;
}

const QuoteSection = ({ quote, author }: QuoteSectionProps) => {
  return (
    <div className="w-full bg-background px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 text-6xl text-primary/30">"</div>
        <blockquote className="font-display text-2xl font-light italic leading-relaxed text-foreground md:text-3xl lg:text-4xl">
          {quote}
        </blockquote>
        {author && (
          <cite className="mt-8 block text-sm uppercase tracking-wider text-muted-foreground not-italic">
            — {author}
          </cite>
        )}
      </div>
    </div>
  );
};

export default QuoteSection;