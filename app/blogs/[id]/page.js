"use client";
import { useParams } from "next/navigation";
import { blogPosts } from "@/src/data/blogsData";
import styles from "../blogs.module.css";
import Image from "next/image";
import Link from "next/link";
import { Overlock, Noto_Serif } from "next/font/google";

const noto_serif = Noto_Serif({ subsets: ["latin"], weight: ["600"] });
const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });

export default function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <main className={styles.main}>
      <section className={styles.postDetail}>
        <span className={styles.category}>{post.category}</span>
        <br />
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

        {/* Inject HTML content safely */}
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
    </main>
  );
}
