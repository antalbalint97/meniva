export default function BlogArticleLayout({
  children,
  meta,
}: {
  children: React.ReactNode;
  meta: {
    title?: string;
    author?: string;
    date?: string;
    readTime?: string;
    excerpt?: string;
    coverImage?: string;
  };
}) {
  const formatDate = (date?: string) => {
    if (!date) return null;
    const parsed = Date.parse(date);
    if (isNaN(parsed)) return null;
    return new Date(parsed).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formattedDate = formatDate(meta.date);

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      {/* Title + optional excerpt */}
      <header className="mb-8 text-center">
        {meta.title && (
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground">
            {meta.title}
          </h1>
        )}
        {meta.excerpt && (
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {meta.excerpt}
          </p>
        )}
      </header>

      {/* CTA card (top) */}
      <aside
        className="mb-8 mt-6 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm"
        aria-label="Call to action"
      >
        <h3 className="mb-2 text-xl font-semibold text-foreground">
          Ready to take the next step in your data journey?
        </h3>
        <p className="mb-4 text-muted-foreground">
          Contact Meniva today for a tailored data strategy consultation.
        </p>
        <a
          href="/#contact"
          className="inline-block rounded-lg bg-foreground px-6 py-3 font-semibold text-white transition hover:bg-foreground/90"
        >
          Book a Free Consultation
        </a>
      </aside>

      {/* Author / Date / Read time */}
      {(meta.author || formattedDate || meta.readTime) && (
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
          {meta.author && <span className="font-medium text-foreground">{meta.author}</span>}
          {meta.author && formattedDate && <span className="mx-1">&middot;</span>}
          {formattedDate && (
            <time dateTime={meta.date}>{formattedDate}</time>
          )}
          {(formattedDate || meta.author) && meta.readTime && (
            <span className="mx-1">&middot;</span>
          )}
          {meta.readTime && <span>{meta.readTime}</span>}
        </div>
      )}

      {/* Post content with prose styling */}
      <div
        className={[
          "prose prose-lg max-w-none",
          /* Headings */
          "prose-headings:font-semibold prose-headings:text-foreground prose-h1:mt-0",
          "prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-2xl",
          "prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-xl",
          /* Paragraphs */
          "prose-p:leading-relaxed prose-p:text-slate-700",
          /* Lists */
          "prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6",
          "prose-li:my-1 prose-li:text-slate-700",
          /* Links */
          "prose-a:text-brand prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-brand/80",
          /* Strong / emphasis */
          "prose-strong:font-bold prose-strong:text-foreground",
          "prose-em:italic",
          /* Blockquotes — styled as white quote card */
          "prose-blockquote:not-italic prose-blockquote:border-none prose-blockquote:bg-white",
          "prose-blockquote:rounded-2xl prose-blockquote:border prose-blockquote:border-slate-200",
          "prose-blockquote:px-8 prose-blockquote:py-6 prose-blockquote:shadow-sm",
          "prose-blockquote:text-center prose-blockquote:text-lg prose-blockquote:font-medium prose-blockquote:text-foreground",
          "prose-blockquote:my-10 prose-blockquote:mx-0",
          /* Images — responsive, rounded, spaced */
          "prose-img:mx-auto prose-img:max-w-full prose-img:rounded-xl prose-img:shadow-sm",
          "prose-img:my-8",
          /* Figures + captions */
          "prose-figure:my-8",
          "prose-figcaption:mt-3 prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-muted-foreground",
          /* Code */
          "prose-code:rounded prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:text-foreground",
          "prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:text-slate-100",
        ].join(" ")}
      >
        {children}
      </div>

      {/* Bottom CTA */}
      <footer className="mt-12 text-center">
        <a
          href="/#contact"
          className="inline-block rounded-lg bg-foreground px-6 py-3 font-semibold text-white transition hover:bg-foreground/90"
        >
          {"Let's Talk Strategy"}
        </a>
      </footer>
    </article>
  );
}
