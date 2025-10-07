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
  };
}) {
  // Safely format the date
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
    <article className="max-w-3xl mx-auto px-6 py-16">
      {/* Title + Meta info */}
      <header>
        {meta.title && (
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-center">
            {meta.title}
          </h1>
        )}

        {(meta.author || formattedDate || meta.readTime) && (
          <div className="flex justify-center items-center flex-wrap gap-2 text-gray-600 text-sm mb-8">
            {meta.author && <span className="font-medium">{meta.author}</span>}

            {meta.author && formattedDate && <span className="mx-1">·</span>}

            {formattedDate && (
              <time dateTime={meta.date}>{formattedDate}</time>
            )}

            {(formattedDate || meta.author) && meta.readTime && (
              <span className="mx-1">·</span>
            )}

            {meta.readTime && <span>{meta.readTime}</span>}
          </div>
        )}
      </header>

      {/* CTA (top, under title) */}
      <aside
        className="mt-6 mb-12 p-8 bg-gray-50 rounded-xl text-center shadow-sm"
        aria-label="Call to action"
      >
        <h3 className="text-xl font-semibold mb-2">
          Ready to take the next step in your data journey?
        </h3>
        <p className="text-gray-600 mb-4">
          Contact Meniva today for a tailored data strategy consultation.
        </p>
        <a
          href="/#contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition"
        >
          Book a Free Consultation
        </a>
      </aside>

      {/* Post content */}
      <div
        className="
          prose prose-lg max-w-none
          prose-headings:font-semibold prose-h1:mt-0
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
          prose-p:leading-7
          prose-ul:list-disc prose-ul:pl-6
          prose-ol:list-decimal prose-ol:pl-6
          prose-li:my-1
          prose-a:underline hover:prose-a:no-underline
        "
      >
        {children}
      </div>

      {/* CTA (bottom, only button) */}
      <footer className="mt-12 text-center">
        <a
          href="/#contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition"
        >
          Let’s Talk Strategy
        </a>
      </footer>
    </article>
  );
}
