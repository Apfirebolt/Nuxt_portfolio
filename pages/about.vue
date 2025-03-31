<template>
  <NuxtLayout name="default">
    <div class="about-content bg-gradient-to-r from-primary-dark to-secondary-dark text-primary-dark py-4 px-6">
      <div
        class="hero relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl"
      >
        <!-- Image Column -->
        <div class="w-full lg:w-1/2">
          <img
            class="h-400 w-full object-cover"
            src="https://softgenie.org/media/images/generic/my_pic1.jpeg"
            alt="Winding mountain road"
          />
        </div>
        <!-- Close Image Column -->

        <!-- Text Column -->
        <div
          class="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12"
        >
          <!-- Text Wrapper -->
          <div class="flex flex-col p-12 md:px-16">
            <h2
              class="text-2xl font-medium uppercase text-secondary-dark lg:text-4xl"
            >
              ABOUT
            </h2>
            <p class="mt-4">
              Hey there, thanks for visiting this website! My name is Amit
              Prafulla and I am a passionate software developer and an
              enthusiastic individual who thrives on new experiences. I belong
              to this city called Allahabad/Prayagraj in India. I have a
              Bachelor's degree in Computer Science as well as a Master's degree
              in Information Technology with specialization in Cyber Security.
            </p>
          </div>
          <!-- Close Text Wrapper -->
        </div>
        <!-- Close Text Column -->
      </div>
      <div class="card my-4 py-4 px-6 border bg-white rounded shadow" data-aos="fade-up">
        <h2 class="text-2xl font-bold my-3">"I pursue a career in..."</h2>
        <p class="mt-5">
          I have been working in the software industry for over 6 years now and
          have experience in various technologies such as Python, Django,
          FastAPI, React, Angular, Vue, Node.js, Express.js, MongoDB,
          PostgreSQL, MySQL, Docker, Kubernetes, AWS, Azure, Google Cloud, and
          more. I have worked on various projects ranging from web development
          to cloud computing and have a keen interest in learning new
          technologies and frameworks. I am always looking for new opportunities
          to learn and grow as a software developer. In my spare time I like to
          work on personal projects, do video editing, travel and play video
          games.
        </p>
      </div>

      <div class="card my-4 py-4 px-6 border bg-white rounded shadow" data-aos="zoom-in">
        <h2 class="text-2xl font-bold my-3">"Travel is the air I breathe"</h2>
        <p>
          I simply love to travel and explore new places. I have been to various
          places in India and have also traveled to Europe. I'd often take a
          break from my work and go on a trip to some new place. I believe that
          traveling is the best way to learn about different cultures, meet new
          people, and experience new things. I have a bucket list of places that
          I want to visit and I am slowly ticking them off one at a time. I aim
          to visit all the UNESCO World Heritage Sites in India and explore the
          beauty of nature and ancient architecture. I've been to 24/42 such
          destinations as of now.
        </p>
        <p class="mt-5">
          I'd often go on solo trips and explore new places on my own. I believe
          that solo travel is the best way to learn about oneself and grow as an
          individual. At the time of writing this, I've already been to 20+ solo
          trips in my life covering 60+ cities in India.
        </p>
      </div>

      <div class="card my-4 py-4 px-6 border bg-white rounded shadow" data-aos="fade-up-right">
        <h2 class="text-2xl font-bold my-3">
          "I have multiple lives – in every game I play."
        </h2>
        <p>
          I love playing video games and it is one of my favorite pastimes. I
          have been playing video games since I was a kid and have played
          various games on different platforms. I enjoy playing games on PC,
          PS4/PS5, and Mobile. I have played games from various genres such as
          Role-Playing, Action, Adventure, Strategy, and Sports. I have played
          games like Pokemon, Call of Duty, FIFA, Need for Speed, GTA, Age of
          Empires, DOTA, Counter Strike, Spider Man, Last of Us, Horizon Zero
          Dawn and many more.
        </p>
        <p class="mt-5">
          I believe gaming provides an escape from reality and lets you live
          multiple virtual lives. It is a great way to relax and unwind after a
          long day of work. I often play games with my friends and family and
          enjoy the competitive spirit that comes with it. I also enjoy watching
          gaming streams on platforms like Twitch and YouTube. I have a special
          liking for games with a good storyline and character development. I
          believe that games are a form of art and can evoke emotions and
          feelings just like any other form of art. Playing a game with a good
          story can be a truly immersive experience, it's like being part of a
          movie where you control the actions of the protagonist. Games like The
          Last of Us, God of War, Uncharted, Red Dead Redemption 2, Spider-Man,
          Batman and more have left a lasting impact on me.
        </p>
      </div>

      <div class="card my-4 py-4 px-6 border bg-white rounded shadow" data-aos="fade-up-left">
        <h2 class="text-2xl font-bold my-3">
          "Music is the essence of my spirit"
        </h2>
        <p>
          I love listening to music and it is an integral part of my life. I
          would often listen to instrumental music while I'm working or
          traveling. I believe that music has the power to heal and soothe the
          soul. I have a diverse taste in music and enjoy listening to various
          genres such as Classical, Jazz, Rock, and Pop. I also enjoy playing
          the Guitar and Piano. I've been learning to play those instruments for
          a few months now with little success. I am into Bollywood music
          especially the ones from 2003-2013. I've grown up listening to those
          songs on 9XM. They are still part of my playlist and I often listen to
          them while working or traveling. I've a special liking for slow
          romantic songs. I'd often try to sing those and create covers of them.
          My favorite singers are Arijit Singh, Mohit Chauhan, Sonu Nigam, and
          Shreya Ghoshal.
        </p>
        <p class="mt-5">
          I also enjoy Western Music and have a special liking for bands like
          Backstreet Boys, One Direction, Linkin Park, The Chainsmokers 3 Days
          Grace and Breaking Benjamin. My favorite singers are Ed Sheeran,
          Taylor Swift, Ellie Goulding, Katy Perry, Enrique Iglesias, Shakira
          and more.
        </p>
      </div>

      <div class="card my-4 py-4 px-6 border bg-white rounded shadow" data-aos="flip-up">
        <h2 class="text-2xl font-bold my-3">
          "My penchant for Photography and Video editing"
        </h2>
        <p>
          I think most people who travel have a natural inclination towards
          photography. I am no different. I love capturing moments and creating
          memories through photographs. I have a keen interest in photography
          and enjoy clicking pictures of landscapes, architecture, and people. I
          believe that photography is a form of art that allows you to express
          yourself and capture the beauty of the world around you. I have a
          collection of photographs from my travels that I cherish and look back
          on fondly. I also enjoy editing photos and creating collages and
          albums to preserve my memories.
        </p>
        <p class="mt-5">
          I am also into video editing and have created various videos for my
          personal projects and travel diaries. I enjoy the process of editing
          videos and adding effects and music to create a visually appealing
          story. I believe that video editing is a creative process that allows
          you to tell a story and evoke emotions through visuals and sound. I
          have created videos for my travel diaries, personal projects, and
          events. I enjoy experimenting with different editing styles and
          techniques to create unique and engaging videos. I've worked with
          Softwares such as Adobe Premiere Pro, After Effects, Wondershare
          Filmora and Movavi Creative Suite for video editing.
        </p>
      </div>

      <div class="card my-4 py-4 px-6 border bg-white rounded shadow" data-aos="flip-down">
        <h2 class="text-2xl font-bold my-3">"I ❤️ Cooking"</h2>
        <p>
          Cooking is one of my favorite hobbies and I enjoy experimenting with
          different cuisines and recipes. I believe that cooking is a form of
          art that allows you to express yourself and create something delicious
          from scratch.
        </p>
        <p class="mt-5">
          I like to cook mostly Indian dishes. But, I do occasionally try my
          hand at other cuisines like Chinese and Italian. I enjoy cooking for
          my friends and family and love to see the smiles on their faces when
          they taste my food. I remember it was during the lockdown that I
          started cooking and experimenting with new recipes because we were
          forced to. I started with cooking Pizza and vegetable Pulao and since
          then haven't looked back. I'd often refer Youtube cooking channels
          especializing in Indian cuisine for new recipes and try them out. I
          believe that cooking is a great way to relax and unwind after a long
          day and it is a skill that everyone should learn. I'd often close or
          open my day with a cooking session.
        </p>
      </div>

      <div class="card my-4 py-4 px-6 border bg-white rounded shadow" data-aos="zoom-in-right">
        <h2 class="text-2xl font-bold my-3">"Games and Sports I am into"</h2>
        <p>
          I'm pretty much average in sports but I do enjoy playing them. I have
          played Cricket, Badminton, Table Tennis, and Football. I enjoy
          watching Tennis and Football matches on TV and had been following the
          matches previously in the era of big 3. I have a special liking for
          Roger Federer, Rafael Nadal and Novak Djokovic, in Tennis. I don't
          think we'd ever see 3 players of their caliber in the same era again.
          I also used to regularly follow football when Real Madrid was at its
          peak with Cristiano Ronaldo, Kaka, Modric, Kroos, Benzema, Bale,
          Ramos, Marcelo, Casillas, and more. I've stopped following sports
          lately but do enjoy watching Crickt matches occasionally with my
          friends and family.
        </p>
        <p class="mt-5">
          I have also played games like Chess, Carrom, Ludo, Snakes and Ladders,
          Monopoly, and Uno. I enjoy playing board games with my friends and
          family and it is a great way to spend quality time together. I have a
          competitive spirit and enjoy the thrill of winning a game. I believe
          that games teach you important life skills such as strategy, teamwork,
          and sportsmanship.
        </p>
      </div>

      <div class="card my-4 py-4 px-6 border bg-white rounded shadow" data-aos="zoom-in-left">
        <h2 class="text-2xl font-bold my-3">
          "My screen time is reserved for real life."
        </h2>
        <p class="text-gray-500">
          Everyone around me seems to love watching movies and TV shows. I am
          not a big fan of them. I'd often watch movies with my friends and
          family but I don't have a habit of watching them alone. I'd often
          watch movies in theaters with my friends and family and there would
          often be a big gap between the movies I watch. I am a big fan of
          Marvel and DC movies and have watched most of them. My favorite movies
          are Avengers Endgame, LOTR, The Dark Knight, Harry Potter Series,
          Inception, Good Will Hunting, The Shawshank Redemption, original
          Spider-Man .
        </p>
        <p class="mt-5">
          In bollywood I'd often watch movies which have a good storyline and
          acting. I'd really think a lot before watching a movie because I
          believe that time is precious and I don't want to waste it on
          something that doesn't add value to my life.
        </p>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup>
import { onMounted } from "vue";
import { gsap } from 'gsap';

// apply slide in left on hero class using gsap
onMounted(() => {
  gsap.from('.hero', {
    x: -100,
    duration: 1,
    ease: 'power4.out',
  });
});

useSeoMeta({
  title: "Amit Prafulla - My Portfolio",
  description: "This is the homepage of my portfolio",
});
</script>
