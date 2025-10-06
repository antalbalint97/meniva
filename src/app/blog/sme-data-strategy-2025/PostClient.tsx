"use client";

import Head from "next/head";
// import Post, { frontmatter as fm } from "./content.mdx";
import Post from "./content.mdx";
const fm = (Post as any).frontmatter || {};
import BlogArticleLayout from "@/components/BlogArticleLayout";

export default function PostClient() {
  const slug = "sme-data-strategy-2025"; // could also be dynamic
  const url = `https://meniva.net/blog/${slug}`;

  return (
    <>
      {/* SEO + AI metadata */}
      <Head>
        <title>{fm.title} | Meniva</title>
        <meta name="description" content={fm.excerpt} />

        {/* Open Graph */}
        <meta property="og:title" content={fm.title} />
        <meta property="og:description" content={fm.excerpt} />
        <meta
          property="og:image"
          content={fm.coverImage || "/tree-abstract-mind.png"}
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={fm.date} />
        <meta property="article:author" content={fm.author} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fm.title} />
        <meta name="twitter:description" content={fm.excerpt} />
        <meta
          name="twitter:image"
          content={fm.coverImage || "/tree-abstract-mind.png"}
        />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: fm.title,
              description: fm.excerpt,
              author: {
                "@type": "Organization",
                name: fm.author,
              },
              datePublished: fm.date,
              image: fm.coverImage || "/tree-abstract-mind.png",
              publisher: {
                "@type": "Organization",
                name: "Meniva",
                logo: {
                  "@type": "ImageObject",
                  url: "https://meniva.net/logo-meniva.png",
                },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": url,
              },
            }),
          }}
        />
      </Head>

      {/* Blog layout */}
      <BlogArticleLayout
        meta={{
          title: fm.title,
          author: fm.author,
          date: fm.date,
          readTime: fm.readTime,
        }}
      >
        {/* Social share icons */}
        <div className="flex justify-center gap-6 mb-6 text-gray-600">
          {/* LinkedIn */}
          <a
            href={`https://linkedin.com/shareArticle?mini=true&url=${url}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
            className="hover:text-black"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.7-1.2 2.3-2.4 4.7-2.4 5 0 5.9 3.3 5.9 7.7V24h-5v-7.3c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 1.9-2.9 4V24h-5V8z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
            className="hover:text-black"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.676 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24h11.495v-9.294H9.69v-3.622h3.131V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.676 0z" />
            </svg>
          </a>

          {/* Twitter/X */}
          <a
            href={`https://twitter.com/intent/tweet?url=${url}&text=${fm.title}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Twitter"
            className="hover:text-black"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.93 4.93 0 002.165-2.724c-.951.555-2.005.959-3.127 1.184A4.92 4.92 0 0016.616 3c-2.717 0-4.924 2.206-4.924 4.924 0 .386.043.762.127 1.124C7.728 8.87 4.1 6.918 1.671 3.897c-.423.725-.666 1.562-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.93 4.93 0 01-2.229-.616v.06c0 2.385 1.693 4.374 3.946 4.827a4.996 4.996 0 01-2.224.084c.63 1.965 2.445 3.396 4.6 3.436A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.513 14.01-14.01 0-.213-.004-.425-.014-.636A10.02 10.02 0 0024 4.557z" />
            </svg>
          </a>
        </div>

        <Post />
      </BlogArticleLayout>
    </>
  );
}
