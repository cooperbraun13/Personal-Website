<script lang="ts">
  import { Button } from '@repo/design/primitives/button';

  import BraunImg from '$lib/assets/coopkirb.jpg';

  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
  } from '@repo/design/primitives/card';

  import LucideGithub from '~icons/lucide/github';
  import LucideLinkedin from '~icons/lucide/linkedin';
  import LucideMail from '~icons/lucide/mail';

  import { cubicOut } from 'svelte/easing';
  import { Tween } from 'svelte/motion';

  import { animate, stagger } from 'animejs';

  import createGlobe from 'cobe';

  import { onMount } from 'svelte';

  import LucideArrowRight from '~icons/lucide/arrow-right';

  import AuroraBackground from '$lib/components/aurora-background.svelte';
  import { mode, toggleMode } from 'mode-watcher';

  const tween = new Tween(0.001, {
    duration: 3000,
    easing: cubicOut
  });

  function cobe(node: HTMLCanvasElement) {
    let cobePhi = 1.7;
    let cobeTheta = -1.35;
    let cobeWidth = node.clientWidth;
    let cobeHeight = node.clientHeight;
    let cobeMode = mode.current;
    let pastTime = 0;
    let dt = 0;

    tween.set(0);

    const globe = createGlobe(node, {
      devicePixelRatio: 2,
      width: cobeWidth * 2,
      height: cobeWidth * 2,
      phi: 0,
      theta: 0.1,
      dark: cobeMode === 'dark' ? 1 : -2.7,
      diffuse: 1,
      mapSamples: 32000,
      mapBrightness: 10,
      baseColor: [0.305, 0.3, 0.31],
      markerColor: [0.1, 0.8, 1],
      glowColor: cobeMode === 'dark' ? [0.3, 0.3, 0.3] : [1, 1, 1],
      markers: [],
      offset: [0, cobeWidth * 3.3],
      scale: 0.8,
      onRender: (state) => {
        dt = performance.now() - pastTime;
        pastTime = performance.now();

        state.width = cobeWidth * 2;
        state.height = cobeWidth * 2;
        state.offset = [0, cobeWidth * 3.3];
        state.phi = cobePhi;
        state.theta = cobeTheta;
        state.dark = cobeMode === 'dark' ? 1 : -2.7;
        state.glowColor = cobeMode === 'dark' ? [0.3, 0.3, 0.3] : [1, 1, 1];
        cobePhi -= (0.00002 + tween.current) * dt;
        cobeTheta += (0.00003 + tween.current) * dt;
      }
    });

    function resize() {
      cobeWidth = node.clientWidth;
      cobeHeight = node.clientHeight;
    }

    $effect(() => {
      window.addEventListener('resize', resize);

      return () => {
        globe.destroy();
        window.removeEventListener('resize', resize);
      };
    });

    $effect(() => {
      cobeMode = mode.current;
    });
  }

  onMount(() => {
    animate('.hero-navbar', {
      opacity: {
        from: 0,
        to: 1
      },
      duration: 1000,
      ease: 'inOutSine'
    });

    animate('.hero-left > *', {
      opacity: {
        from: 0,
        to: 1
      },
      y: {
        from: 100,
        to: 0
      },
      delay: stagger(200),
      duration: 1200,
      ease: 'out(2)'
    });

    animate('.cobe', {
      y: {
        from: 100,
        to: 0
      },
      duration: 1200,
      ease: 'out(2)'
    });

    animate('.art-grid > * > *', {
      opacity: {
        from: 0,
        to: 1
      },
      y: {
        from: 50,
        to: 0
      },
      delay: stagger(100, { start: 400 }),
      duration: 1200,
      ease: 'out(2)'
    });
  });

  const languages = ['Python', 'Java', 'Go', 'JavaScript', 'HTML/CSS', 'SQL'];

  const tools = ['React', 'Flask', 'Spring Boot', 'Git', 'AWS', 'GCP', 'Docker', 'Kubernetes'];
</script>

<div class="w-full flex justify-center">
  <div class="flex flex-col items-center w-full gap-16">
    <div class="fixed top-0 p-4 w-full flex justify-center bg-background/50 backdrop-blur-2xl z-20">
      <div
        class="grid grid-cols-[8rem_1fr_8rem] w-full max-w-6xl items-center opacity-0 hero-navbar"
      >
        <Button variant="ghost" size="sm" class="w-fit" onclick={toggleMode}>Braun</Button>
        <div class="flex gap-2 justify-center z-10 flex-1">
          <Button size="sm" variant="ghost">About</Button>
          <Button size="sm" variant="ghost">Case studies</Button>
        </div>
        <div class="flex gap-2 justify-end z-10">
          <Button size="sm" variant="outline">
            <LucideLinkedin />
          </Button>
          <Button size="sm" variant="outline">
            <LucideMail />
          </Button>
          <Button size="sm" variant="outline">
            <LucideGithub />
          </Button>
          <a href="/contact"><Button size="sm" variant="default">Let's chat</Button></a>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center w-full self-center h-screen pt-16">
      <div class="flex flex-col w-full relative flex-1 p-4 pt-0">
        <AuroraBackground
          showRadialGradient={true}
          class="rounded-4xl overflow-clip flex-1 relative"
        >
          <div
            class="flex flex-col items-center justify-center gap-16 flex-1 z-10 px-8 hero-grid w-full pb-32"
          >
            <div class="h-full w-fit flex justify-self-center self-center">
              <div class="flex flex-col gap-8 max-w-3xl hero-left self-center items-center">
                <div class="flex flex-col gap-2 items-center">
                  <div class="w-48 h-48 rounded-full overflow-clip mb-8 border-4 border-white/50">
                    <img src={BraunImg} alt="braun" class="object-cover w-full h-full" />
                  </div>
                  <span
                    class="text-center text-6xl font-extralight ripple w-full bg-linear-to-r/increasing from-indigo-500 to-teal-400 backdrop-blur-md"
                  >
                    Cooper Braun
                  </span>
                  <span class="text-3xl text-center w-full backdrop-blur-md pt-4"
                    >Software engineer</span
                  >
                </div>
                <p
                  class="max-w-sm w-fit self-start text-center text-lg text-muted-foreground backdrop-blur-md"
                >
                  Passionate about turning data into insights and building innovative solutions
                </p>
                <div class="flex gap-2 justify-center w-fit backdrop-blur-md">
                  <a href="/contact"><Button variant="default">Let's chat</Button></a>
                  <Button variant="outline" class="flex items-center gap-1">
                    View my work
                    <LucideArrowRight class="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <canvas use:cobe class="w-full h-full absolute bottom-0 cobe"></canvas>
        </AuroraBackground>
      </div>
    </div>

    <h2 class="text-5xl w-full max-w-6xl text-center">About me</h2>
    <div
      class="w-full max-w-2xl flex flex-col items-center
     gap-8 pb-8"
    >
      <p class="text-center">
        Computer Science student with Data Science concentration at Gonzaga University, passionate
        about data analysis, machine learning, and cloud computing.
      </p>
      <Card class="h-full w-full">
        <CardHeader>
          <CardTitle class="text-2xl">Gonzago University</CardTitle>
          <CardDescription>Education</CardDescription>
        </CardHeader>
        <CardContent class="flex-1 flex flex-col gap-2">
          <span> BS in Computer Science, Concentration in Data Science </span>
          <span> GPA: 3.5 / 4.0 </span>
          <span> Expected Graduation: May 2027 </span>
        </CardContent>
      </Card>
    </div>

    <h2 class="text-5xl w-full max-w-6xl text-center">Projects</h2>
    <div class="w-full max-w-6xl grid grid-cols-3 gap-4 pb-8">
      <Card class="h-full w-full">
        <CardHeader>
          <CardTitle class="text-2xl">Quantified Self Project</CardTitle>
        </CardHeader>
        <CardContent class="flex-1">
          <p>
            Analyzes personal financial transactions alongside academic schedules to identify and
            model relationships between student life events and spending patterns using data
            cleaning, statistical testing, and machine learning classification.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Explore<LucideArrowRight class="size-4" /></Button>
        </CardFooter>
      </Card>
      <Card class="h-full w-full">
        <CardHeader>
          <CardTitle class="text-2xl">Brawl Snake</CardTitle>
        </CardHeader>
        <CardContent class="flex-1">
          <p>
            A Java-based mgitultiplayer game built with Swing GUI, featuring real-time collision
            detection, power-ups, and differing level difficulty. Implements a custom game engine
            with synchronized game states and dynamic difficulty scaling.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Explore<LucideArrowRight class="size-4" /></Button>
        </CardFooter>
      </Card>
      <Card class="h-full w-full">
        <CardHeader>
          <CardTitle class="text-2xl">Compound Interest Calculator</CardTitle>
        </CardHeader>
        <CardContent class="flex-1">
          <p>
            A Flask-based web application for calculating compound interest with full DevOps
            implementation including CI/CD, Docker containerization, automated testing, and code
            quality checks.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Explore<LucideArrowRight class="size-4" /></Button>
        </CardFooter>
      </Card>
    </div>
    <h2 class="text-5xl w-full max-w-6xl text-center">Skills</h2>
    <div class="w-full max-w-6xl grid grid-cols-2 gap-4 pb-8">
      <Card class="h-full w-full">
        <CardHeader>
          <CardTitle class="text-2xl">Languages</CardTitle>
        </CardHeader>
        <CardContent class="flex-1 gap-2 flex flex-wrap">
          {#each languages as lang, i}
            <Button>
              {lang}
            </Button>
          {/each}
        </CardContent>
      </Card>
      <Card class="h-full w-full">
        <CardHeader>
          <CardTitle class="text-2xl">Frameworks and Tools</CardTitle>
        </CardHeader>
        <CardContent class="flex-1 flex gap-2 flex-wrap">
          {#each tools as tool, i}
            <Button>
              {tool}
            </Button>
          {/each}
        </CardContent>
      </Card>
    </div>
  </div>
</div>
<div
  class="bg-foreground h-fit w-full flex flex-col items-center pb-72 mt-32 gap-16 p-8 pt-16 relative"
>
  <div class="grid grid-cols-5 w-full max-w-6xl z-10">
    <div class="flex gap-4">
      <Button variant="default">
        <LucideLinkedin />
        LinkedIn
      </Button>
      <Button>
        <LucideMail />
        Email
      </Button>
      <Button>
        <LucideGithub />
        GitHub
      </Button>
    </div>
  </div>
  <div class="max-w-6xl h-fit flex flex-col w-full">
    <div class="text-muted-foreground flex justify-between w-full text-sm">
      <span> @ 2025 Cooper Braun. All rights reserved. </span>
    </div>
  </div>
  <div class="absolute top-0 left-0 w-full h-full overflow-clip">
    <div class="relative w-full h-full stack">
      <span class="footer-text text-background translate-y-[6rem]">BRAUN</span>
    </div>
  </div>
</div>

<style>
  .footer-text {
    font-size: 16rem;
    font-weight: 900;
  }
</style>
