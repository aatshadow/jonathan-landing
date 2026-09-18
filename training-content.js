/* ═══════════════════════════════════════════════════════════════════════════
   TRADESTART · /training · EL CONTENIDO (18-09-2026)

   Este fichero es lo ÚNICO que hay que tocar para meter un vídeo o un documento.
   La página (training.html) lo lee y se pinta sola.

   Un módulo = una de las 4 partes del BONUS de /welcome (Alex, 17-09). Cada
   lección lleva:
     id        → clave estable; es lo que va en la URL (#id). No la cambies una
                 vez publicada o los enlaces compartidos dejan de abrir.
     minutes   → duración en minutos; null = todavía no se sabe ("pending").
     video     → id del vídeo en Bunny Stream (librería 746352, la misma del VSL
                 de la landing). null = placeholder marcado, no un vídeo falso.
     docs      → los entregables de la lección: [{ title, url, kind }]. `kind` es
                 la etiqueta que se enseña (PDF · Sheet · Checklist · Link).
                 Los PDF se suben a assets/docs/ y se enlazan como
                 "assets/docs/nombre.pdf"; un Drive/Notion va con su URL entera.
                 [] = placeholder "documents pending" con el dueño debajo.
     summary   → 1-2 frases debajo del vídeo. Texto real; nada de promesas de
                 rentabilidad (promoción financiera regulada, UK/UE).

   Regla de la casa: donde no hay activo, hay placeholder marcado con dueño.
   Cero vídeos, cifras o documentos inventados.
   ═══════════════════════════════════════════════════════════════════════════ */
window.TRAINING = {
  title: 'Complete training on my methodology',
  intro: 'How I trade, module by module. Included free with the group.',
  owner: 'Jonathan',            /* quien debe entregar cada vídeo/documento pendiente */
  bunnyLibrary: '746352',       /* librería de Bunny Stream (la del VSL) */

  modules: [
    {
      id: 'start-here',
      title: 'Start here',
      blurb: 'How the group works and what you get. Watch this first.',
      lessons: [
        {
          id: 'welcome',
          title: 'Welcome to TradeStart',
          minutes: null,
          /* el único vídeo real que existe hoy: el VSL de la landing (Bunny). Si no
             debe estar aquí, se pone a null y sale el placeholder. */
          video: '031ff6dc-4f3c-4272-9f48-c66f19575fed',
          docs: [],
          summary: 'What the group is, how every trade gets posted (entry, target, stop and the reasoning) and how to use this training alongside it.',
        },
      ],
    },
    {
      id: 'getting-set-up',
      title: 'Getting set up',
      blurb: 'Account, platform and your first position, from zero. The same onboarding every member goes through.',
      lessons: [
        { id: 'account', title: 'Opening your account', minutes: null, video: null, docs: [], summary: 'The account you need, step by step, so you can follow the trades from day one.' },
        { id: 'platform', title: 'Setting up the platform', minutes: null, video: null, docs: [], summary: 'Installing and configuring the platform on desktop and phone, the way I have it set up.' },
        { id: 'first-position', title: 'Your first position', minutes: null, video: null, docs: [], summary: 'Placing your first position from zero: size, entry, target and stop, exactly as they appear in the group.' },
      ],
    },
    {
      id: 'reading-the-market',
      title: 'How I read the market',
      blurb: 'What I look at before a trade, and why. The reasoning behind every setup I post.',
      lessons: [
        { id: 'what-i-look-at', title: 'What I look at before a trade', minutes: null, video: null, docs: [], summary: 'The few things I check before every position, in the order I check them.' },
        { id: 'the-reasoning', title: 'The reasoning behind a setup', minutes: null, video: null, docs: [], summary: 'Why a setup makes the cut and why most do not. The same reasoning you read next to every trade in the group.' },
      ],
    },
    {
      id: 'entry-target-stop',
      title: 'Entry, target and stop',
      blurb: 'My rules for every position: where I get in, where I take profit, and where I\'m wrong.',
      lessons: [
        { id: 'entry', title: 'Where I get in', minutes: null, video: null, docs: [], summary: 'How the entry is decided and why it is never chased.' },
        { id: 'target', title: 'Where I take profit', minutes: null, video: null, docs: [], summary: 'How the target is set before the trade, not during it.' },
        { id: 'stop', title: 'Where I\'m wrong', minutes: null, video: null, docs: [], summary: 'The stop: the price that says the idea was wrong, and why it is fixed before entering.' },
      ],
    },
    {
      id: 'copying-from-your-phone',
      title: 'Copying a trade from your phone',
      blurb: 'The 15–20 minutes a day, step by step: from the message in the group to the position on your account.',
      lessons: [
        { id: 'from-message-to-position', title: 'From the message to the position', minutes: null, video: null, docs: [], summary: 'Reading a trade message in the group and placing it on your account from your phone, in the time it takes to read it.' },
      ],
    },
  ],
};
