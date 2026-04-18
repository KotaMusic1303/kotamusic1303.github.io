(function () {

  const translations = {
    en: {
      // Hero
      subtitle: "Audio Engineer • Composer",
      tagline: "Creating the sound you are looking for",
      // Navbar
      nav_portfolio: "Portfolio",
      nav_pulse: "Meet Pulse",
      nav_work: "Work With Me",
      // Index — VG
      vg_title: "Videogame Music",
      vg_text: "Videogame focused compositions, combining narrative context and immersion. These samples are trying to emulate the 8bit era, with a touch of modern processing. This project is MegaManX: Innocen Impulse, a megaman Fangame of which I am one of the composers",
      // Index — Mood
      mood_title: "Pick Your Mood",
      mood_desc: "As we already know, context is everything! Give it a try and choose the tone for your project",
      mood_scary: "Scary",
      mood_soothing: "Soothing",
      mood_joyful: "Joyful",
      // Index — Variety
      variety_title: "Variety",
      variety_text: "Every adventure is a different one! And for each one we better have the perfect soundtrack! From the depths of space to a party on a pirate ship, from medieval fantasy to a haunted mansion! Your imagination is your limit.",
      // Index — Audiovisual
      av_title: "Audiovisual",
      av_desc1: "Opening teaser for an animation called \"PatoPuño\". Project made by a group of animation students from Concepción, Chile. My task here was to compose a theme song for this clip, inspired by other cartoons like \"Powerpuff Girls\" or \"Kick Buttowski\"",
      av_desc2: "For this project, \"Umbra\", I was tasked to compose the background music. Using the animatic as reference the composition should be in sync with the movement and flow of the animation but at the same time, not lose it's natural feel.",
      av_desc3: "One day, with my good old friend @Soyelska we had the great idea of creating a \"demake\" concept for the game \"The Legend Of Zelda: Breath Of The Wild\", using the \"The Legend Of Zelda: The Minish Cap\" visual style. He was in charge of the art and animation, and I was in charge of the music and sound effects.",
      av_desc4: "\"Tierra De Artistas\" is a teaser trailer of a documentary series centered on artists radicated in Concepción, Chile. For this project, I composed the main song played as background music. The idea was to create something organic, cozy and nostalgic.",
      av_desc5: "Descripción del video 5.",
      av_desc6: "Descripción del video 6.",
      av_desc7: "Descripción del video 7.",
      av_desc8: "Descripción del video 8.",
      // Index — MM
      mm_tagline: "Bringing your music to its full potential",
      mm_caption: "HUILLAC",
      mm_track: "Oriflama",
      mm_text: "Currently I'm working with the death metal band Huillac as their mixing/mastering enginer for their soon to be released first album. Here you can listen to a sample of one of their songs, Oriflama. You can switch to compare the raw mix with the untreated audios and the final version. Give it a try! ",
      // Work
      work_services_title: "Services",
      work_services_sub: "Every project is different. Here's what I can bring to yours.",
      svc1_title: "Videogame Music",
      svc1_text: "Original compositions for games of any genre and scale. From 8-bit retro to cinematic orchestral, tailored to your world.",
      svc2_title: "Audiovisual",
      svc2_text: "Music and sound design for animations, short films, trailers, and any video content. Sync-locked to your visuals.",
      svc3_title: "Mixing & Mastering",
      svc3_text: "Professional mix and master for your tracks. Clean, balanced, and ready for any platform or release format.",
      svc4_title: "Custom Composition",
      svc4_text: "Need something that doesn't fit the categories above? Let's talk. Original music for any context or purpose.",
      svc_price: "Contact for quote",
      work_process_title: "How It Works",
      work_process_sub: "A simple process so we can focus on the music.",
      step1_title: "Tell me about your project",
      step1_text: "Use the form below to describe what you need — genre, mood, references, deadlines, and any other details that matter to you.",
      step2_title: "We align on the vision",
      step2_text: "I'll get back to you to discuss the project, clarify the scope, and make sure we're on the same page before starting.",
      step3_title: "I create and deliver",
      step3_text: "You receive the files, review them, and we refine until the result is exactly what your project needs.",
      contact_title: "Get In Touch",
      contact_sub: "Ready to start? Fill in the form and I'll get back to you as soon as possible.",
      form_name: "Name",
      form_name_ph: "Your name",
      form_email: "Email",
      form_email_ph: "your@email.com",
      form_service: "Service",
      form_service_ph: "Select a service...",
      form_svc1: "Videogame Music",
      form_svc2: "Audiovisual",
      form_svc3: "Mixing & Mastering",
      form_svc4: "Custom Composition",
      form_svc5: "Other",
      form_message: "Tell me about your project",
      form_message_ph: "Describe your project, mood, references, deadlines, budget...",
      form_send: "Send Message",
      form_ok: "Thanks! I'll get back to you soon."
    },

    es: {
      // Hero
      subtitle: "Técnico en sonido • Compositor",
      tagline: "Creando el sonido que estás buscando",
      // Navbar
      nav_portfolio: "Portafolio",
      nav_pulse: "Conoce a Pulse",
      nav_work: "Trabaja Conmigo",
      // Index — VG
      vg_title: "Música para Videojuegos",
      vg_text: "Composiciones orientadas a videojuegos, combinando contexto, narrativa e inmersión. Estos ejemplos buscan recrear la era 8bit, con un toque de procesamiento moderno. Este proyecto es MegaManX: Innocent Impulse, un fangame de Megaman del cual soy uno de los compositores.",
      // Index — Mood
      mood_title: "Elige tu estilo",
      mood_desc: "Como ya sabemos, ¡el contexto lo es todo! Elige el estilo adecuado para tu proyecto.",
      mood_scary: "Terror",
      mood_soothing: "Calma",
      mood_joyful: "Alegría",
      // Index — Variety
      variety_title: "Variedad",
      variety_text: "¡Cada aventura es diferente! Y para cada una es mejor tener la abnda sonora perfecta. Desde los confines del espacio hasta una fiesta en un barco pirata, ¡Desde un mundo de fantasía medieval a una mansión encantada! Tu imaginación es el límite.",
      // Index — Audiovisual
      av_title: "Audiovisual",
      av_desc1: "Teaser de introducción para la animación \"PatoPuño\". El proyecto fue creado por un grupo de estudiantes de animación de Concepción, Chile. Mi tarea aqui era componer la canción tema para este video, tomando de inspiración otras caricaturas como \"Las Chicas Super Poderosas\" o \"Kick Buttowski\"",
      av_desc2: "Para este proyecto, \"Umbra\", se me pidió componer la musica de fondo. Usando el animatic como referencia, la composición debía estar en sincronía con el movimiento y fluidez de la animación, pero al mismo tempo, no perder su naturalidad.",
      av_desc3: "Un día, con mi buen amigo @Soyelska tuvimos la gran idea de crear un concepto de \"demake\" par el juego \"The Legend Of Zelda: Breath Of The Wild\", usando el estilo grafico e \"The Legend Of Zelda: The Minish Cap\". El estuvo a cargo del arte y la animación, y yo a cargo de la musica y efectos de sonido.",
      av_desc4: "\"Tierra De Artistas\" es el teaser de una serie documental centrada en artistas pertenecientes a Concepción, Chile. Para este proyecto compuse la canción principal, la cual puede escucharse como musica de fondo. La idea era crear algo organico, acojedor y nostalgico.",
      av_desc5: "Descripción del video 5.",
      av_desc6: "Descripción del video 6.",
      av_desc7: "Descripción del video 7.",
      av_desc8: "Descripción del video 8.",
      // Index — MM
      mm_tagline: "Logremos obtener lo mejor de tu música",
      mm_caption: "Huillac",
      mm_track: "Oriflama",
      mm_text: "Actualmente me encuentro trabajando con la banda de death metal Huillac como su ingeniero en mezcla y mastering, para su primer disco el cual está proximo a lanzarse. Aqui puedes escuchar una muestra de una de sus canciones, Oriflama. Puedes alternar para comparar la mezcla en crudo con audios sin procesar y la versión final. ¡Intentalo!",
      // Work
      work_services_title: "Servicios",
      work_services_sub: "Cada proyecto es diferente. Esto es lo que puedo aportar al tuyo.",
      svc1_title: "Música para Videojuegos",
      svc1_text: "Composiciones originales para juegos de cualquier género y escala. Del retro 8-bit a lo orquestal cinematográfico, adaptado a tu mundo.",
      svc2_title: "Audiovisual",
      svc2_text: "Música y diseño de sonido para animaciones, cortometrajes, trailers y cualquier contenido en video. Sincronizado a tus visuales.",
      svc3_title: "Mixing & Mastering",
      svc3_text: "Mix y master profesional para tus tracks. Limpio, balanceado y listo para cualquier plataforma o formato de lanzamiento.",
      svc4_title: "Composición a Medida",
      svc4_text: "¿Necesitás algo que no encaja en las categorías anteriores? Hablemos. Música original para cualquier contexto o propósito.",
      svc_price: "Consultar precio",
      work_process_title: "Cómo Funciona",
      work_process_sub: "Un proceso simple para que nos concentremos en la música.",
      step1_title: "Tell me about your project",
      step1_text: "Use the form below to describe what you need — genre, mood, references, deadlines, and any other details that matter to you.",
      step2_title: "We align on the vision",
      step2_text: "I'll get back to you to discuss the project, clarify the scope, and make sure we're on the same page before starting.",
      step3_title: "I create and deliver",
      step3_text: "You receive the files, review them, and we refine until the result is exactly what your project needs.",
      contact_title: "Contacto",
      contact_sub: "¿Listo para empezar? Completá el formulario y te respondo a la brevedad.",
      form_name: "Nombre",
      form_name_ph: "Tu nombre",
      form_email: "Correo",
      form_email_ph: "tu@correo.com",
      form_service: "Servicio",
      form_service_ph: "Selecciona un servicio...",
      form_svc1: "Música para Videojuegos",
      form_svc2: "Audiovisual",
      form_svc3: "Mixing & Mastering",
      form_svc4: "Composición a Medida",
      form_svc5: "Otro",
      form_message: "Cuéntame sobre tu proyecto",
      form_message_ph: "Describe tu proyecto, mood, referencias, plazos, presupuesto...",
      form_send: "Enviar Mensaje",
      form_ok: "¡Gracias! Te respondo a la brevedad."
    }
  };

  function applyLang(lang) {
    const t = translations[lang];
    if (!t) return;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (!(key in t)) return;
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = t[key];
      } else if (el.tagName === "OPTION") {
        el.textContent = t[key];
      } else {
        el.textContent = t[key];
      }
    });
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
    localStorage.setItem("kota_lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.addEventListener("click", function () {
        applyLang(this.getAttribute("data-lang"));
      });
    });
    const saved = localStorage.getItem("kota_lang") || "en";
    applyLang(saved);
  });

})();
