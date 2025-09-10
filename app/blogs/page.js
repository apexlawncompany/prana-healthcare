"use client";
import styles from "./blogs.module.css";
import Image from "next/image";
import Link from "next/link";
import { Overlock, Noto_Serif } from "next/font/google";

const noto_serif = Noto_Serif({ subsets: ["latin"], weight: ["600"] });
const overlock = Overlock({ subsets: ["latin"], weight: ["700"] });

const blogPosts = [
  {
    id: "long-covid",
    title: "Long COVID: What to Know",
    category: "Allergies",
    date: "January , 2024",
    author: "Admin",
    comments: 0,
    excerpt:
      "Although the pandemic stage of COVID-19 has ended, coronavirus is still here. While most people who get the disease recover within a few weeks, some people experience symptoms long after that due to Long COVID. What is Long COVID and what should you do if you're not feeling well? Here's what to know. What is...",
    image: "/blogs/article1.webp",
  },
  {
    id: "sleep-apnea",
    title: "Obstructive Sleep Apnea: What to Know and Do",
    category: "Sleep",
    date: "January , 2024",
    author: "Admin",
    comments: 0,
    excerpt:
      "Did you know that millions of adults in the U.S have obstructive sleep apnea[i]? It's a common condition that can have big impacts on your sleep, health, and day-to-day life. Fortunately, there are steps you can take to address your OSA, and Prana Health is here to help. What is Sleep Apnea? Sleep apnea is...",
    image: "/blogs/article2.webp",
  },
  {
    id: "obstructive",
    title: "Habits That Can Help Reduce Risk of Depression",
    category: "Sleep",
    date: "January , 2024",
    author: "Admin",
    comments: 0,
    excerpt:
      "Depression is a common mental disorder that affects hundreds of millions of people around the world. 1 In addition to impacting mental health, depression may cause physical pain, fatigue, gastrointestinal problems, changes in appetite, and more, so it's important lower your risk of developing depression. 2 Here are 10 habits to incorporate into your routine...",
    image: "/blogs/article3.webp",
  },
  {
    id: "sleep-apnea23",
    title: "How Pregnancy Affects Sleep at Each Trimester",
    category: "Sleep",
    date: "January , 2024",
    author: "Admin",
    comments: 0,
    excerpt:
      "Getting a good night's sleep is incredibly important, especially if you're pregnant. Sleep deprivation during pregnancy may lead to longer labor as well as more discomfort and pain during labor and higher rates of preterm labor and cesarean section. 1 Sleep struggles are a common occurrence during pregnancy. Fortunately, there are steps you can take...",
    image: "/blogs/article4.webp",
  },
  {
    id: "sleep-apnesfsrta",
    title: "How Sex Hormones Affect Sleep",
    category: "sleep",
    date: "January , 2024",
    author: "Admin",
    comments: 0,
    excerpt:
      "A good night's sleep is extremely important for our overall health and well-being. However, a variety of factors can impact the quality of our sleep, including hormone levels. Sex hormones, such as estrogen and testosterone, play a significant role in regulating our sleep patterns. In this blog post, we'll explore how sex hormones can affect...",
    image: "/blogs/article5.webp",
  },
  {
    id: "sleep-apneaer",
    title:
      "Mouth Breathing Can Change the Shape of Your Face. Here's What to Do About It.",
    category: "Wellness",
    date: "January , 2024",
    author: "Admin",
    comments: 0,
    excerpt:
      "How often do you breathe through your mouth instead of your nose? Chronic mouth breathers can experience a variety of side effects, including sleep disorders, health issues, and yes, even facial changes. Fortunately, there are many ways to treat mouth breathing to help you sleep well and look your best. What Is Mouth Breathing? Why...",
    image: "/blogs/article6.webp",
  },
];

export default function Blogs() {
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
              Blogs
            </h1>
          </div>
        </div>
      </section>
      <section className={styles.blogContent}>
        {/* Left Column - Blog List */}
        <div className={styles.postsList}>
          {blogPosts.map((post) => (
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
                    {post.date} / by / 💬 {post.comments}
                  </em>
                </p>
                <br />

                <p className={styles.excerpt}>{post.excerpt}</p>

                {/* Social share */}
                <div className={styles.socialShare}>
                  <div>
                    <Link href="#" target="_blank">
                      <Image
                        src="/icons/facebook (2).png"
                        alt="Facebook"
                        width={30}
                        height={30}
                      />
                    </Link>
                    <Link href="#" target="_blank">
                      <Image
                        src="/icons/twitter.png"
                        alt="Facebook"
                        width={30}
                        height={30}
                      />
                    </Link>
                    <Link href="#" target="_blank">
                      <Image
                        src="/icons/linkedin.png"
                        alt="Facebook"
                        width={30}
                        height={30}
                      />
                    </Link>
                    <Link href="#" target="_blank">
                      <Image
                        src="/icons/whatsapp.png"
                        alt="Facebook"
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
              {blogPosts.map((post) => (
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
                      className={`${overlock.className}`}
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
            <p>Allergies</p>
            <p>Health</p>
            <p>Depression</p>
          </div>
        </aside>
      </section>
    </main>
  );
}
