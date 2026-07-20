# Jonathan Verstraeten — landing de captación

Landing de un solo objetivo: **llevar el clic del anuncio al grupo de Telegram sin perder la
atribución**. Encargo de Pere (#direccion, 19-07) tomando `fred-frost.com` como referencia.

Estático puro, sin build. Patrón del funnel de Peri (`aatshadow/David-Peri-`): HTML en repo
propio + Vercel. Construida por CORE el 2026-07-20.

---

## De dónde sale cada cosa

| Capa | Origen |
|---|---|
| **Estructura** | Réplica de `fred-frost.com`: mismo orden de secciones, nav de 4 entradas, pill de CTA, franjas de prueba social, FAQ, rejilla de prensa, pie de 4 columnas |
| **Estilo** | El Framer real de Jonathan: navy profundo, azul eléctrico con glow, paneles con borde azul, Poppins |
| **Contenido** | El **real** de Jonathan (su Framer): titular de entry/target/stop y su historia completa |
| **Lo que falta** | **Placeholder marcado**. Cero cifras, caras, logos, premios o licencias inventadas |

No se copió ni el diseño, ni el copy, ni los testimonios, ni los sellos de la referencia.

---

## La pieza que importa: el forwarding de la atribución

La referencia salta a Telegram con una URL **estática y sin parámetros** — pierde la atribución
en el salto y no puede saber qué anuncio trajo a cada persona. Esta no:

```
Meta ad (macros en "URL parameters")
   ↓  ?campaign_name={{campaign.name}}&ad_id={{ad.id}}&…&fbclid=…
ESTA LANDING  ← captura toda la query, la persiste en localStorage (last-touch)
   ↓  la reenvía pegada al link de Chatterfy
tel.tradestartjv.com/2WFS9m3FRO  ← aquí nace el clickid
   ↓
grupo Telegram → registro vtMarkets → postback → afp
```

Se guarda **toda** la query, no una lista blanca: los macros se configuran en el anuncio y
cambian sin avisarnos; una lista blanca se quedaría corta en silencio.

Es el equivalente nativo del `withTracking` que Alex pasó a Daniil para el override del Framer
(13-07). Si la landing es nuestra, no dependemos de que nadie aplique un snippet.

---

## Configuración (todo junto al principio del `<script>`)

| Constante | Estado | Qué hace |
|---|---|---|
| `TS_LINK` | ✅ puesto | Destino real de Chatterfy (`tel.tradestartjv.com/2WFS9m3FRO`) |
| `TS_BEACON` | ⬜ vacío | Webhook n8n para registrar visita y clic. Vacío = **no dispara nada** |
| `TS_PIXEL` | ⬜ apagado | Píxel de Meta. Encenderlo es decisión de Alex. ID conocido: `1066707279250816` |
| `LEGAL_ENTITY` | ⬜ vacío | Razón social al pie del bloque de riesgo |

---

## Placeholders pendientes de activo real

| Sección | Qué falta | Dueño |
|---|---|---|
| Ticker de precios | Un feed real. Precios fijos serían un número falso en una página financiera | — |
| Vídeo del hero | Intro de Jonathan a cámara | Jonathan / Daniil (edición) |
| Avatares + contador | El número real de miembros del Telegram | Jonathan |
| "As seen on" (8 logos) | Prensa. La referencia la compra como contenido pagado | Alex / Pere (decisión) |
| Carrusel de reseñas | Perfil de Trustpilot con reseñas reales | — |
| 3 entrevistas | La referencia corre ~80: es el bloque más grande de su página y la razón principal de que convierta | Pere (decisión 19-07: dejar el hueco) |
| Banda de premios | No tenemos ninguno | — |
| Foto del escritorio | La de Dubái del Framer sirve | Jonathan |
| Bloque de credenciales | Diploma / licencia. No tenemos | — |

---

## Pendiente antes de publicar

1. 🔴 **Revisión legal del copy.** Mercado UK/UE, promoción financiera regulada. El aviso de
   riesgo y la declaración comercial están puestos y el copy evita promesas de rentabilidad,
   pero esto lo debe mirar alguien con criterio legal antes de meterle tráfico.
2. 🔴 **El "70% of the time" del Framer NO se trajo aquí.** Es una afirmación de rendimiento y
   es justo lo que mira el regulador. Con el IG de Jonathan restringido desde el 17-07, no
   conviene sumar señales. Si se quiere dentro, que lo respalde algo verificable.
3. 🔴 **Razón social** para `LEGAL_ENTITY`.
4. 🟡 **Dominio.** `tel.tradestartjv.com` es el subdominio del tracker de Chatterfy: la landing
   no puede pisarlo. Decidir dónde vive.
5. 🟡 **Webhook del beacon** si se quiere ver la visita en el dashboard.

---

## Correr en local

```bash
python3 -m http.server 5190
# → http://localhost:5190
```

Probar el forwarding — entrar con parámetros y mirar el `href` de cualquier CTA:

```
http://localhost:5190/?campaign_name=TEST_BE&ad_id=1234567&fbclid=abc123
```

**Verificado el 20-07:** los 3 CTA reenvían los parámetros · el last-touch sobrevive a una
recarga sin query · 0 px de desbordamiento horizontal a 320, 360, 390 y 430 px.

---

## Reglas de la casa

- **Todo push a este repo se firma como `aatshadow <alexgutierrxz@gmail.com>`** — Vercel solo
  construye commits de ese autor (aprendido a la mala el 06-07).
- **Nada de fake data.** Donde no hay dato, hay placeholder marcado, no un número inventado.

---

## SOP

Ninguno de los 56 cubre este funnel (están escritos para high-ticket: VSL → agenda → closer).
Aplican parcialmente **SOP-19** (el hook se lleva el 80-90%), **SOP-24-32** (ads Meta) y
**SOP-49** (KPIs por etapa). Propuesto **SOP-A03 · Funnel CPA de afiliación**.

Análisis de la referencia: `operator/portfolio/growthinfo/clients/jonathan/TEARDOWN-fred-frost.md`
