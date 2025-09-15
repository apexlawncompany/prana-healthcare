// app/blogs/[id]/page.js
import { blogPosts } from "@/src/data/blogsData";
import styles from "../blogs.module.css";
import Image from "next/image";
import Link from "next/link";
import { Overlock, Noto_Serif } from "next/font/google";

const noto_serif = Noto_Serif({ subsets: ["latin"], weight: ["600"] });
const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });

// 👇 This makes Next.js pre-generate one static page per blog ID
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default function BlogDetail({ params }) {
  const { id } = params;
  const postIndex = blogPosts.findIndex((p) => p.id === id);
  const post = blogPosts[postIndex];

  if (!post) {
    return <p>Post not found.</p>;
  }

  // Previous and Next posts
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost =
    postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  return (
    <main className={styles.main}>
      <section className={styles.postDetail}>
        <span className={styles.category}>{post.category}</span>
        <h1 className={`${overlock.className} ${styles.postTitle}`}>
          {post.title}
        </h1>
        <br />
        <p className={`${styles.meta} ${noto_serif.className}`}>
          <em>
            {post.date} / by {post.author} / 💬 {post.comments}
          </em>
        </p>

        <Image
          src={post.image}
          alt={post.title}
          width={1000}
          height={500}
          className={styles.postImageBig}
        />

        <div
          className={styles.postContent}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className={styles.socialMedia}>
          <Link href="#" target="_blank">
            <Image
              src="/icons/facebook (2).png"
              alt="fb"
              width={30}
              height={30}
            />
          </Link>
          <Link href="#" target="_blank">
            <Image src="/icons/twitter.png" alt="tw" width={30} height={30} />
          </Link>
          <Link href="#" target="_blank">
            <Image src="/icons/linkedin.png" alt="li" width={30} height={30} />
          </Link>
          <Link href="#" target="_blank">
            <Image src="/icons/whatsapp.png" alt="wa" width={30} height={30} />
          </Link>
        </div>
      </section>

      <section className={styles.leaveComment}>
        <h2 className={overlock.className}>Leave a Reply</h2>
        <br />
        <p>
          Your email address will not be published. Required fields are marked *
        </p>

        <form className={styles.commentForm}>
          <div className={styles.formGroup}>
            <label htmlFor="comment">Comment *</label>
            <textarea id="comment" name="comment" required rows="4" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="website">Website</label>
            <input type="url" id="website" name="website" />
          </div>

          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="saveInfo" name="saveInfo" />
            <label htmlFor="saveInfo">
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Post Comment
          </button>
        </form>
      </section>

      {/* Previous / Next Navigation */}
      <section className={styles.postNavigation}>
        {prevPost && (
          <div className={styles.prevPost}>
            <Link href={`/blogs/${prevPost.id}`}>
              <Image
                src={prevPost.image}
                alt={prevPost.title}
                width={100}
                height={100}
                className={styles.prevImg}
              />
              <div>
                <span className={styles.navLabel}>Previous</span>
                <br />
                <h2 className={`${overlock.className}`}>
                  {prevPost.title}
                </h2>
                <br />
              </div>
            </Link>
          </div>
        )}
        {nextPost && (
          <div className={styles.nextPost}>
            <Link href={`/blogs/${nextPost.id}`}>
              <div>
                <span className={styles.navLabel}>Next</span>
                <br />
                <h2 className={`${overlock.className}`}>
                  {nextPost.title}
                </h2>
                <br />
              </div>
              <Image
                src={nextPost.image}
                alt={nextPost.title}
                width={100}
                height={100}
                className={styles.nextImg}
              />
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
