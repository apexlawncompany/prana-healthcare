"use client";
import styles from "../../app/blogs/blogs.module.css";
import Image from "next/image";
import Link from "next/link";
import { Overlock, Noto_Serif } from "next/font/google";
import { blogPosts } from "@/src/data/blogsData";

const noto_serif = Noto_Serif({ subsets: ["latin"], weight: ["600"] });
const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });

export default function BlogList({ posts, title }) {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image
          src="/blogs/blogs-banner.jpg"
          alt="Blogs Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className={styles.bgImage}
        />

        <div className={styles.overlay}>
          <div className={styles.textContent}>
            <h1 className={`${styles.heroTitle} ${overlock.className}`}>
              {title}
            </h1>
          </div>
        </div>
      </section>

      <section className={styles.blogContent}>
        {/* Left Column - Blog List */}
        <div className={styles.postsList}>
          {posts.map((post) => (
            <div key={post.id} className={styles.postCard}>
              <Image
                src={post.image}
                alt={post.title}
                width={1000}
                height={500}
                className={styles.postImage}
              />

              <div className={styles.postInfo}>
                <span className={styles.category}>{post.category}</span>
                <br />
                <h1 className={`${overlock.className}`}>{post.title}</h1>
                <br />
                <p className={`${styles.meta} ${noto_serif.className}`}>
                  <em>
                    {post.date} / by {post.author} / 💬 {post.comments}
                  </em>
                </p>
                <br />
                <p className={styles.excerpt}>{post.excerpt}</p>

                <div className={styles.socialShare}>
                  <div>
                    <Link href="#" target="_blank">
                      <Image
                        src="/icons/facebook (2).png"
                        alt="fb"
                        width={30}
                        height={30}
                      />
                    </Link>
                    <Link href="#" target="_blank">
                      <Image
                        src="/icons/twitter.png"
                        alt="tw"
                        width={30}
                        height={30}
                      />
                    </Link>
                    <Link href="#" target="_blank">
                      <Image
                        src="/icons/linkedin.png"
                        alt="li"
                        width={30}
                        height={30}
                      />
                    </Link>
                    <Link href="#" target="_blank">
                      <Image
                        src="/icons/whatsapp.png"
                        alt="wa"
                        width={30}
                        height={30}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href={`/blogs/${post.id}`}
                      className={styles.readMore}
                    >
                      READ MORE →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Looking for..." />
            <Image
              src="/icons/search.png"
              alt="Search"
              width={20}
              height={20}
            />
          </div>

          <div className={styles.recentPosts}>
            <h2
              className={`${overlock.className}`}
              style={{ fontSize: "1.3em" }}
            >
              Recent Posts
            </h2>
            <br />
            <ul>
              {blogPosts.slice(0, 5).map((post) => (
                <li key={post.id}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={80}
                    height={70}
                    className={styles.smallImage}
                  />
                  <div>
                    <span>
                      <strong>{post.date}</strong>
                    </span>
                    <p
                      className={overlock.className}
                      style={{ fontSize: "1.1rem" }}
                    >
                      {post.title}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.categories}>
            <h2
              className={`${overlock.className}`}
              style={{ fontSize: "1.3em" }}
            >
              Categories
            </h2>
            <br />
            <Link href="/category/allergies" className={styles.categoryLink}>
              Allergies
            </Link>
            <Link href="/category/sleep" className={styles.categoryLink}>
              Sleep
            </Link>
            <Link href="/category/wellness" className={styles.categoryLink}>
              Wellness
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
