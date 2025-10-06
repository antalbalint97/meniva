// export default function BlogLayout({
//   children,
//   meta,
// }: {
//   children: React.ReactNode;
//   meta: {
//     title: string;
//     author: string;
//     date: string;
//     readTime: string;
//   };
// }) {
//   return (
//     <article
//       className="max-w-3xl mx-auto px-6 py-16"
//       itemScope
//       itemType="https://schema.org/Article"
//     >
//       {/* Title + Meta info */}
//       <header>
//         <h1
//           className="text-4xl font-extrabold tracking-tight mb-4 text-center"
//           itemProp="headline"
//         >
//           {meta.title}
//         </h1>

//         <div className="flex justify-center items-center text-gray-600 text-sm mb-8">
//           <span className="font-medium" itemProp="author">
//             {meta.author}
//           </span>
//           <span className="mx-2">·</span>
//           <time dateTime={meta.date} itemProp="datePublished">
//             {new Date(meta.date).toLocaleDateString("en-US", {
//               year: "numeric",
//               month: "long",
//               day: "numeric",
//             })}
//           </time>
//           <span className="mx-2" itemProp="timeRequired">
//             · {meta.readTime}
//           </span>
//         </div>
//       </header>

//       {/* CTA (top, under title) */}
//       <aside
//         className="mt-6 mb-12 p-8 bg-gray-50 rounded-xl text-center shadow-sm"
//         aria-label="Call to action"
//       >
//         <h3 className="text-xl font-semibold mb-2">
//           Ready to take the next step in your data journey?
//         </h3>
//         <p className="text-gray-600 mb-4">
//           Contact Meniva today for a tailored data strategy consultation.
//         </p>
//         <a
//           href="/#contact"
//           className="inline-block bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition"
//           itemProp="url"
//         >
//           Book a Free Consultation
//         </a>
//       </aside>

//       {/* Post content */}
//       <div
//         className="
//           prose prose-lg max-w-none
//           prose-headings:font-semibold prose-h1:mt-0
//           prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
//           prose-p:leading-7
//           prose-ul:list-disc prose-ul:pl-6
//           prose-ol:list-decimal prose-ol:pl-6
//           prose-li:my-1
//           prose-a:underline hover:prose-a:no-underline
//         "
//         itemProp="articleBody"
//       >
//         {children}
//       </div>

//       {/* CTA (bottom, only button) */}
//       <footer className="mt-12 text-center">
//         <a
//           href="/#contact"
//           className="inline-block bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition"
//           aria-label="Book a consultation after reading"
//         >
//           Let’s Talk Strategy
//         </a>
//       </footer>
//     </article>
//   );
// }

export default function BlogArticleLayout({
  children,
  meta,
}: {
  children: React.ReactNode;
  meta: {
    title: string;
    author: string;
    date: string;
    readTime: string;
  };
}) {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      {/* Title + Meta info */}
      <header>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-center">
          {meta.title}
        </h1>

        <div className="flex justify-center items-center text-gray-600 text-sm mb-8">
          <span className="font-medium">{meta.author}</span>
          <span className="mx-2">·</span>
          <time dateTime={meta.date}>
            {new Date(meta.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="mx-2">· {meta.readTime}</span>
        </div>
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
