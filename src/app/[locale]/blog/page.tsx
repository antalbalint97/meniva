// src/app/blog/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

type FrontMatter = {
  title?: string;
  excerpt?: string;
  date?: string;
  readTime?: string;
  author?: string;
  coverImage?: string;
};

type PostMeta = FrontMatter & { slug: string };

const BLOG_DIR = path.join(process.cwd(), "src", "app", "[locale]", "blog");

function titleCaseSlug(slug: string) {
  return slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

/**
 * Try to extract: export const frontmatter = { ... };
 * Then convert it to JSON and parse.
 * This is intentionally simple to keep it dependency-free and works
 * with flat, string-only fields like your current frontmatter.
 */
function extractExportedFrontmatter(raw: string): FrontMatter | null {
  const match = raw.match(
    /export\s+const\s+frontmatter\s*=\s*{([\s\S]*?)}\s*;?/m
  );
  if (!match) return null;

  let obj = `{${match[1]}}`;

  // Remove JS comments
  obj = obj.replace(/\/\/.*$/gm, "").replace(/\/\*[\s\S]*?\*\//g, "");

  // Remove trailing commas before }
  obj = obj.replace(/,\s*}/g, "}").replace(/,\s*]/g, "]");

  // Quote unquoted keys:  key: "value"  ->  "key": "value"
  // (works for simple, flat objects like ours)
  obj = obj.replace(/(\s*)([A-Za-z0-9_]+)\s*:/g, '$1"$2":');

  try {
    return JSON.parse(obj) as FrontMatter;
  } catch (e) {
    console.warn("Failed to parse exported frontmatter:", e);
    return null;
  }
}

function getPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const slugs = fs
    .readdirSync(BLOG_DIR)
    .filter((d) => fs.statSync(path.join(BLOG_DIR, d)).isDirectory());

  const posts = slugs
    .map<PostMeta | null>((slug) => {
      const mdxPath = (["page.mdx", "content.mdx"] as const)
        .map((f) => path.join(BLOG_DIR, slug, f))
        .find((p) => fs.existsSync(p));
      if (!mdxPath) return null;

      const raw = fs.readFileSync(mdxPath, "utf8");
      const { data } = matter(raw); // YAML front-matter, if present
      let fm = data as FrontMatter;

      if (!fm || !fm.title) {
        // Fallback to exported frontmatter
        const exported = extractExportedFrontmatter(raw);
        if (exported) fm = exported;
      }

      return {
        slug,
        title: fm?.title ?? titleCaseSlug(slug),
        excerpt: fm?.excerpt ?? "",
        date: fm?.date ?? "",
        readTime: fm?.readTime ?? "",
        author: fm?.author ?? "",
        coverImage: fm?.coverImage,
      };
    })
    .filter(Boolean) as PostMeta[];

  // Newest first
  posts.sort((a, b) => {
    const ta = a.date ? Date.parse(a.date) : 0;
    const tb = b.date ? Date.parse(b.date) : 0;
    return tb - ta;
  });

  return posts;
}

export default function BlogIndex() {
  const posts = getPosts();

  return (
    <main className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-10">Blog</h1>

        {posts.length === 0 ? (
          <p className="text-gray-600">No posts yet. Check back soon!</p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border rounded-lg p-6 hover:shadow-lg transition bg-white"
              >
                <h2 className="text-2xl font-semibold mb-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:underline underline-offset-4 text-gray-900
                               hover:text-[#177E95] rounded-sm
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E9EB8]/40"
                  >
                    {post.title}
                  </Link>
                </h2>

                {(post.date || post.readTime) && (
                <p className="text-gray-600 text-sm mb-2">
                  {post.date && !isNaN(Date.parse(post.date))
                    ? new Date(post.date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                    : ""}
                  {post.date && post.readTime ? " · " : ""}
                  {post.readTime}
                </p>
              )}

                {post.excerpt && (
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                )}

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#1E9EB8] hover:text-[#177E95] font-medium
                             underline-offset-4 hover:underline rounded-sm
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E9EB8]/40"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
