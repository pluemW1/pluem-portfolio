<script lang="ts">
  import { fade, fly, scale } from 'svelte/transition';
  import { onMount } from 'svelte';

  // --- ข้อมูลเกียรติบัตร ---
  const certificates = [
    { name: "POSN Comp Olympiad Winner (Python)", file: "posn.png", category: "Olympiad" },
    { name: "Top 5 National Robot Challenge", file: "robot.png", category: "Robot & Coding" },
    { name: "FutureSkill Computer Vision Cert.", file: "futureskill.png", category: "AI/ML Cert" },
    { name: "Top 71 National Cyber Top Talent", file: "cyber.png", category: "Cybersecurity" },
    { name: "AI Fundamentals Certification", file: "ai.png", category: "AI Cert" },
    { name: "Creative STEM Innovation Award", file: "creative_STEM.png", category: "STEM Award" },
    { name: "GenWit Leadership Program Cert.", file: "genwit.png", category: "Leadership" },
    { name: "Professional Competence (Level 1)", file: "center1.png", category: "Certification" },
    { name: "Python Programming Excellence", file: "python.jpg", category: "Programming" },
  ];

  // --- ข้อมูลอื่นๆ ---
  const skillCategories = [
    { name: "Languages", skills: ["C/C++", "Python", "Java", "JavaScript", "Dart"] },
    { name: "Web/Backend", skills: ["Svelte", "Tailwind CSS", "Node.js", "Express", "REST APIs", "Postman"] },
    { name: "Database", skills: ["SQL (PostgreSQL)", "MongoDB"] },
    { name: "Concepts/Tools", skills: ["OOP", "Data Structures", "Algorithms", "Git/GitHub"] },
    { name: "Specialized", skills: ["Computer Vision (OpenCV)", "Machine Learning", "Cybersecurity (Kali, Wireshark)"] }
  ];

  const projects = [
    { 
      title: "CU Get Reg v2", 
      tech: "Svelte, Frontend", 
      desc: "Developing the Frontend for Chula's course registration assistant.",
      link: "" // ไม่มีลิงก์
    },
    { 
      title: "Backend RESTful API", 
      tech: "Node.js, Express, Postman", 
      desc: "Developed a backend API tested endpoints.",
      link: "" // ไม่มีลิงก์
    },
    { 
      title: "TodMenAdventure Game", 
      tech: "Java, JavaFX, OOP", 
      desc: "Game application with OOP principles and unit testing.",
      link: "https://github.com/2110215-ProgMeth/cedt-project-2025-2-todmen" 
    },
    { 
      title: "Watermelon Ripeness ML", 
      tech: "Python, Streamlit, ML", 
      desc: "AI-powered web app to classify watermelon ripeness.",
      link: "https://github.com/pluemW1/app2" 
    }
  ];

  const activities = [
    { role: "Finance Team", event: "CEDT Innovation Summit" },
    { role: "Sponsorship Team", event: "CEDT Sandbox Hackathon" },
    { role: "Stage Organizer", event: "CP x CEDT Open House" },
    { role: "Registration Staff", event: "Law-Eng Basketball Match" },
    { role: "Activity Operations", event: "CP Link Event" }
  ];

  let visible = false;
  onMount(() => { visible = true; });
</script>

<svelte:head>
  <title>Wan-ek Phothavorn | Full Stack Dev Portfolio</title>
  <style>
    /* ปรับสีพื้นหลังหลักของ HTML ให้เป็นสีมืดเพื่อป้องกันจอกระพริบขาวตอนโหลด */
    html { scroll-behavior: smooth; background-color: #020617; color: #f8fafc; }
  </style>
</svelte:head>

<main class="min-h-screen bg-slate-950 text-slate-300 font-sans antialiased overflow-x-hidden">

  <header class="h-screen flex flex-col items-center justify-center px-6 relative bg-slate-950 text-white">
    <div class="max-w-5xl mx-auto text-center z-10" in:fly={{ y: 50, duration: 1000, delay: 200 }}>
      <p class="text-sky-400 font-bold tracking-widest uppercase mb-2" in:fade={{ delay: 500 }}>
        Hi there, I'm
      </p>
      <h1 class="text-5xl sm:text-7xl font-extrabold text-white tracking-tight mb-4">
        Wan-ek Phothavorn
        <span class="block text-slate-400 mt-2 text-3xl sm:text-5xl">(Pluem)</span>
      </h1>
      <p class="mt-8 text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed" in:fade={{ delay: 800 }}>
        Eager First-year Computer Engineering student at Chulalongkorn University. Passionate about <span class="text-white font-semibold">Full Stack Development</span>, problem-solving, and building scalable software solutions. Active in tech events and olympiads.
      </p>
      <div class="mt-12 flex flex-col sm:flex-row justify-center gap-4" in:fade={{ delay: 1100 }}>
        <a href="#projects" class="px-8 py-3.5 rounded-xl text-white bg-sky-600 hover:bg-sky-500 font-medium shadow-lg shadow-sky-900/20 transition-all duration-300 transform hover:-translate-y-1">
          View Projects
        </a>
        <a href="https://github.com/pluemW1" target="_blank" class="px-8 py-3.5 rounded-xl text-slate-200 bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:text-white font-medium transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
          GitHub Profile
        </a>
      </div>
    </div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_rgba(56,_189,_248,_0.15),_transparent_70%)] pointer-events-none"></div>
  </header>

  <section class="py-24 bg-slate-900 px-6 border-t border-slate-800">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-16 text-white tracking-tight">Technical Skills</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {#each skillCategories as category, i}
          {#if visible}
            <div class="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-sm transition hover:shadow-lg hover:shadow-sky-900/10 hover:-translate-y-1 hover:border-sky-500/50 duration-300"
                 in:fly={{ y: 30, delay: 100 * i, duration: 600 }}>
              <h3 class="text-lg font-bold text-sky-400 mb-4">{category.name}</h3>
              <div class="flex flex-wrap gap-2">
                {#each category.skills as skill}
                  <span class="px-3 py-1 bg-slate-950 border border-slate-700 text-xs rounded-full text-slate-300 font-medium">{skill}</span>
                {/each}
              </div>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </section>

  <section id="projects" class="py-24 bg-slate-950 px-6 border-t border-slate-800">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-16 text-white tracking-tight">Featured Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each projects as project, i}
          {#if visible}
            <div class="bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-800 group transition hover:shadow-xl hover:shadow-sky-900/20 hover:-translate-y-2 hover:border-sky-500/50 duration-300 flex flex-col h-full"
                 in:fly={{ y: 50, delay: 150 * i, duration: 800 }}>
              
              <div class="flex-grow">
                <h3 class="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition">{project.title}</h3>
                <p class="text-sky-500 text-sm font-medium mb-4">{project.tech}</p>
                <p class="text-slate-400 mb-6 leading-relaxed line-clamp-3">{project.desc}</p>
              </div>

              {#if project.link}
                <a href={project.link} target="_blank" class="text-slate-300 font-medium text-sm flex items-center gap-1.5 hover:text-sky-400 transition mt-auto">
                  View on GitHub
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              {/if}

            </div>
          {/if}
        {/each}
      </div>
    </div>
  </section>

  <section id="certificates" class="py-24 bg-slate-900 px-6 border-y border-slate-800">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-16 text-white tracking-tight">Certificates & Awards</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each certificates as cert, i}
          {#if visible}
            <div class="bg-slate-800 rounded-2xl border border-slate-700 shadow-sm overflow-hidden group transition-all hover:shadow-xl hover:shadow-sky-900/20 hover:border-sky-500/50 duration-300"
                 in:scale={{ delay: 200 * i, duration: 800, start: 0.9 }}>
              <div class="aspect-[4/3] overflow-hidden bg-slate-950 relative">
                <img src="/images/{cert.file}" alt={cert.name} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100" loading="lazy"/>
                <span class="absolute top-3 right-3 px-3 py-1 bg-slate-900/80 backdrop-blur-md border border-slate-700 text-xs rounded-full font-semibold text-sky-400 shadow-inner">{cert.category}</span>
                <a href="/images/{cert.file}" target="_blank" class="absolute inset-0 bg-slate-950/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span class="text-white text-sm font-medium border border-slate-500 px-4 py-2 rounded-full hover:bg-white hover:text-slate-900 transition-colors">View Full Image</span>
                </a>
              </div>
              <div class="p-6">
                <h3 class="text-base font-bold text-white leading-snug group-hover:text-sky-400 transition">{cert.name}</h3>
                <p class="text-xs text-sky-500 font-medium mt-1">{cert.issuer}</p>
                <p class="text-slate-400 text-sm mt-3 leading-relaxed">{cert.description}</p>
              </div>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </section>

  <section class="py-24 bg-slate-950 px-6 border-b border-slate-800">
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
            <h2 class="text-3xl font-bold mb-6 text-white tracking-tight">Leadership & Extracurricular Activities</h2>
            <p class="text-slate-400 mb-10 leading-relaxed max-w-lg">Actively contributed to various dynamic student events at Chulalongkorn University, taking on diverse roles such as Finance, Sponsorship, Stage Organizing, Registration, and Activity Operations.</p>
        </div>
        <div class="space-y-6">
          {#each activities as act, i}
            {#if visible}
              <div class="bg-slate-900 p-6 rounded-xl border border-slate-800 flex items-center gap-4 shadow-sm transition hover:border-sky-500/30 hover:bg-slate-800/80 duration-300"
                   in:fade={{ delay: 150 * i, duration: 600 }}>
                <div class="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.8)]"></div>
                <div>
                    <h4 class="text-lg font-bold text-white">{act.role}</h4>
                    <p class="text-sky-400 text-sm font-medium">{act.event}</p>
                </div>
              </div>
            {/if}
          {/each}
        </div>
    </div>
  </section>

  <footer class="py-16 bg-slate-900 text-slate-400 px-6">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-2xl font-bold text-white mb-8 tracking-tight">Let's Connect</h2>
      <div class="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12 text-sm sm:text-base">
        <a href="mailto:pluem.pluem.pluem111@gmail.com" class="px-5 py-2.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 hover:border-slate-600 transition">pluem.pluem.pluem111@gmail.com</a>
        <a href="tel:092-268-1081" class="px-5 py-2.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 hover:border-slate-600 transition">Tel: 092-268-1081</a>
        <span class="text-slate-500 font-medium">Nonthaburi, Thailand</span>
      </div>
      <p class="text-xs text-slate-600 pt-8 border-t border-slate-800">&copy; 2026 Wan-ek Phothavorn. First-year Computer Engineering, Chulalongkorn University.</p>
    </div>
  </footer>

</main>