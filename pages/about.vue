<template>
  <NuxtLayout name="default">
    <div
      class="min-h-screen bg-[var(--color-primary)] text-[var(--color-primary-dark)] antialiased transition-colors duration-300"
    >
      <section
        class="relative overflow-hidden border-b border-[var(--color-primary-dark)]/15 bg-[var(--color-primary)] py-16 sm:py-24"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            class="hero grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10"
          >
            <div class="flex flex-col justify-center lg:col-span-6">
              <div
                class="inline-flex items-center gap-2 self-start rounded-full border border-[var(--color-primary-dark)]/20 bg-[var(--color-primary-dark)]/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-primary-dark)]"
              >
                <span class="h-2 w-2 rounded-full bg-[var(--color-secondary-dark)]"></span>
                Software Engineer &amp; Explorer
              </div>

              <h1
                class="mt-6 text-4xl font-black tracking-tight text-[var(--color-primary-dark)] sm:text-5xl lg:text-6xl"
              >
                Hi, I'm <span class="text-[var(--color-secondary-dark)]">Amit Prafulla</span>.
              </h1>

              <p class="mt-6 text-lg leading-relaxed opacity-85">
                A passionate software developer based in Prayagraj, India. I
                specialize in building resilient, distributed systems,
                high-performance web applications, and intuitive digital
                experiences.
              </p>

              <div
                class="mt-8 flex flex-wrap gap-3 text-xs font-semibold opacity-85"
              >
                <span
                  class="rounded-lg border border-[var(--color-primary-dark)]/15 bg-[var(--color-primary-dark)]/5 px-3 py-1.5"
                  >🎓 M.Tech (Cyber Security)</span
                >
                <span
                  class="rounded-lg border border-[var(--color-primary-dark)]/15 bg-[var(--color-primary-dark)]/5 px-3 py-1.5"
                  >💼 7+ Years Industry Experience</span
                >
                <span
                  class="rounded-lg border border-[var(--color-primary-dark)]/15 bg-[var(--color-primary-dark)]/5 px-3 py-1.5"
                  >📍 Prayagraj / Allahabad, India</span
                >
              </div>
            </div>

            <div class="relative flex justify-center lg:col-span-6">
              <div
                class="relative aspect-3/4 w-full max-w-md overflow-hidden rounded-2xl border border-[var(--color-primary-dark)]/20 bg-[var(--color-primary-dark)]/5 shadow-2xl lg:max-w-lg"
              >
                <img
                  class="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  src="https://softgenie.org/media/images/generic/my_pic1.jpeg"
                  alt="Amit Prafulla"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section
          class="mb-16 rounded-2xl border border-[var(--color-primary-dark)]/15 bg-[var(--color-primary)] p-8 shadow-sm transition-all hover:shadow-md sm:p-10"
        >
          <div class="flex items-center gap-3">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary-dark)]/10 text-[var(--color-secondary-dark)]"
            >
              <svg
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h2 class="text-2xl font-bold tracking-tight text-[var(--color-primary-dark)]">
              Engineering &amp; Technical Expertise
            </h2>
          </div>
          <p class="mt-4 leading-relaxed opacity-85">
            With over 7+ years of experience across the software engineering
            lifecycle, I specialize in designing scalable backend architectures,
            crafting modern interfaces, and managing cloud deployments.
          </p>
          <div class="mt-6">
            <h3
              class="text-xs font-bold uppercase tracking-wider opacity-60"
            >
              Core Technologies
            </h3>
            <div class="mt-3 flex flex-wrap gap-2">
              <span
                v-for="tech in techStack"
                :key="tech"
                class="rounded-md border border-[var(--color-primary-dark)]/15 bg-[var(--color-primary-dark)]/5 px-3 py-1 text-xs font-semibold"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </section>

        <!-- Dynamically Iterated Interests / Hobbies Cards -->
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <article
            v-for="(item, index) in interests"
            :key="index"
            class="flex flex-col justify-between rounded-2xl border border-[var(--color-primary-dark)]/15 bg-[var(--color-primary)] p-8 shadow-sm transition-all hover:shadow-md"
          >
            <div>
              <div class="flex items-center gap-3">
                <span
                  class="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary-dark)]/10 text-lg"
                  >{{ item.icon }}</span
                >
                <h2 class="text-xl font-bold text-[var(--color-primary-dark)]">
                  {{ item.title }}
                </h2>
              </div>
              
              <p
                v-for="(para, pIdx) in item.paragraphs"
                :key="pIdx"
                :class="pIdx === 0 ? 'mt-4' : 'mt-3'"
                class="text-sm leading-relaxed opacity-85"
              >
                {{ para }}
              </p>
            </div>

            <div
              class="mt-6 border-t border-[var(--color-primary-dark)]/10 pt-4 text-xs font-medium text-[var(--color-secondary-dark)]"
            >
              {{ item.footerText }}
            </div>
          </article>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";

const techStack = [
  "Python",
  "Django",
  "FastAPI",
  "Node.js",
  "Express.js",
  "Vue.js",
  "Nuxt",
  "React",
  "Next.js",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "GCP",
];

const interests = [
  {
    icon: "🧭",
    title: "Travel & Exploration",
    paragraphs: [
      "Travel is essential to my perspective. I am on an active quest to visit all UNESCO World Heritage Sites across India (currently 28/45 completed).",
      "I'd often go on solo trips and explore new places on my own. I believe that solo travel is the best way to learn about oneself and grow as an individual. At the time of writing this, I've already been to 20+ solo trips in my life covering 60+ cities in India."
    ],
    footerText: "20+ Solo Expeditions • 28 UNESCO Heritage Sites (India)"
  },
  {
    icon: "🎮",
    title: "Gaming & Narrative Art",
    paragraphs: [
      "I love playing video games and it is one of my favorite pastimes. I have been playing video games since I was a kid and have played various games on different platforms. I enjoy playing games on PC, PS4/PS5, and Mobile. I have played games from various genres such as Role-Playing, Action, Adventure, Strategy, and Sports. I have played games like Pokemon, Call of Duty, FIFA, Need for Speed, GTA, Age of Empires, DOTA, Counter Strike, Spider Man, Last of Us, Horizon Zero Dawn and many more.",
      "I believe gaming provides an escape from reality and lets you live multiple virtual lives. It is a great way to relax and unwind after a long day of work. I often play games with my friends and family and enjoy the competitive spirit that comes with it. I also enjoy watching gaming streams on platforms like Twitch and YouTube. I have a special liking for games with a good storyline and character development. I believe that games are a form of art and can evoke emotions and feelings just like any other form of art. Playing a game with a good story can be a truly immersive experience, it's like being part of a movie where you control the actions of the protagonist. Games like The Last of Us, God of War, Uncharted, Red Dead Redemption 2, Spider-Man, Batman and more have left a lasting impact on me."
    ],
    footerText: "Action • RPGs • Strategy • Narrative Experiences"
  },
  {
    icon: "🎵",
    title: "Music & Acoustic Soul",
    paragraphs: [
      "I love listening to music and it is an integral part of my life. I would often listen to instrumental music while I'm working or traveling. I believe that music has the power to heal and soothe the soul. I have a diverse taste in music and enjoy listening to various genres such as Classical, Jazz, Rock, and Pop. I also enjoy playing the Guitar and Piano. I've been learning to play those instruments for a few months now with little success. I am into Bollywood music especially the ones from 2003-2013. I've grown up listening to those songs on 9XM. They are still part of my playlist and I often listen to them while working or traveling. I've a special liking for slow romantic songs. I'd often try to sing those and create covers of them. My favorite singers are Arijit Singh, Mohit Chauhan, Sonu Nigam, and Shreya Ghoshal.",
      "I also enjoy Western Music and have a special liking for bands like Backstreet Boys, One Direction, Linkin Park, The Chainsmokers 3 Days Grace and Breaking Benjamin. My favorite singers are Ed Sheeran, Taylor Swift, Ellie Goulding, Katy Perry, Enrique Iglesias, Shakira and more."
    ],
    footerText: "Guitar • Piano • Indian Classical • Alt-Rock"
  },
  {
    icon: "📸",
    title: "Visual Media & Video Production",
    paragraphs: [
      "I think most people who travel have a natural inclination towards photography. I am no different. I love capturing moments and creating memories through photographs. I have a keen interest in photography and enjoy clicking pictures of landscapes, architecture, and people. I believe that photography is a form of art that allows you to express yourself and capture the beauty of the world around you. I have a collection of photographs from my travels that I cherish and look back on fondly. I also enjoy editing photos and creating collages and albums to preserve my memories.",
      "I am also into video editing and have created various videos for my personal projects and travel diaries. I enjoy the process of editing videos and adding effects and music to create a visually appealing story. I believe that video editing is a creative process that allows you to tell a story and evoke emotions through visuals and sound. I have created videos for my travel diaries, personal projects, and events. I enjoy experimenting with different editing styles and techniques to create unique and engaging videos. I've worked with Softwares such as Adobe Premiere Pro, After Effects, Wondershare Filmora and Movavi Creative Suite for video editing."
    ],
    footerText: "Landscape Photography • Premiere Pro • Motion Graphics"
  },
  {
    icon: "🍳",
    title: "Culinary Craft",
    paragraphs: [
      "Cooking is one of my favorite hobbies and I enjoy experimenting with different cuisines and recipes. I believe that cooking is a form of art that allows you to express yourself and create something delicious from scratch.",
      "I like to cook mostly Indian dishes. But, I do occasionally try my hand at other cuisines like Chinese and Italian. I enjoy cooking for my friends and family and love to see the smiles on their faces when they taste my food. I remember it was during the lockdown that I started cooking and experimenting with new recipes because we were forced to. I started with cooking Pizza and vegetable Pulao and since then haven't looked back. I'd often refer Youtube cooking channels especializing in Indian cuisine for new recipes and try them out. I believe that cooking is a great way to relax and unwind after a long day and it is a skill that everyone should learn. I'd often close or open my day with a cooking session."
    ],
    footerText: "Traditional Indian Cooking • Recipe Experimentation"
  },
  {
    icon: "♟️",
    title: "Sports & Strategic Play",
    paragraphs: [
      "I'm pretty much average in sports but I do enjoy playing them. I have played Cricket, Badminton, Table Tennis, and Football. I enjoy watching Tennis and Football matches on TV and had been following the matches previously in the era of big 3. I have a special liking for Roger Federer, Rafael Nadal and Novak Djokovic, in Tennis. I don't think we'd ever see 3 players of their caliber in the same era again. I also used to regularly follow football when Real Madrid was at its peak with Cristiano Ronaldo, Kaka, Modric, Kroos, Benzema, Bale, Ramos, Marcelo, Casillas, and more. I've stopped following sports lately but do enjoy watching Crickt matches occasionally with my friends and family.",
      "I have also played games like Chess, Carrom, Ludo, Snakes and Ladders, Monopoly, and Uno. I enjoy playing board games with my friends and family and it is a great way to spend quality time together. I have a competitive spirit and enjoy the thrill of winning a game. I believe that games teach you important life skills such as strategy, teamwork, and sportsmanship."
    ],
    footerText: "Chess • Table Tennis • Badminton • Cricket"
  },
  {
    icon: "🎬",
    title: "Movies & TV Shows",
    paragraphs: [
      "Everyone around me seems to love watching movies and TV shows. I am not a big fan of them. I'd often watch movies with my friends and family but I don't have a habit of watching them alone. I'd often watch movies in theaters with my friends and family and there would often be a big gap between the movies I watch. I am a big fan of Marvel and DC movies and have watched most of them. My favorite movies are Avengers Endgame, LOTR, The Dark Knight, Harry Potter Series, Inception, Good Will Hunting, The Shawshank Redemption, original Spider-Man .",
      "In bollywood I'd often watch movies which have a good storyline and acting. I'd really think a lot before watching a movie because I believe that time is precious and I don't want to waste it on something that doesn't add value to my life."
    ],
    footerText: "Marvel & DC Movies • Bollywood • Netflix • Disney+"
  }
];

onMounted(() => {
  gsap.from(".hero", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out",
  });
});

useSeoMeta({
  title: "About | Amit Prafulla - Software Engineer & Explorer",
  description:
    "Learn more about Amit Prafulla, a professional software engineer with 7+ years of experience in distributed systems, full-stack development, and cloud computing.",
});
</script>