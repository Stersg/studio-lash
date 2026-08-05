/* ===== Robô semanal (sem IA, sem custo) =====
   Sorteia 3 posts e 3 tendências do banco (pool.mjs) e reescreve
   posts.js e radar.js na raiz do projeto. A combinação muda a cada
   semana (sorteio determinístico pela semana do ano).
   Rodado pelo GitHub Actions toda segunda.
*/
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { POSTS_POOL, RADAR_POOL } from './pool.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const QTD_POSTS = 3;
const QTD_RADAR = 3;

/* semana atual (muda o sorteio toda semana) */
const semana = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));

/* data de hoje no fuso do Brasil, formato DD/MM/AAAA */
const hoje = new Intl.DateTimeFormat('pt-BR', {
  timeZone: 'America/Sao_Paulo', day: '2-digit', month: '2-digit', year: 'numeric'
}).format(new Date());

/* PRNG determinístico (mulberry32) a partir de uma semente */
function rng(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* embaralha uma cópia do array de forma determinística e pega os N primeiros */
function sortear(pool, n, seed) {
  const arr = pool.slice();
  const rand = rng(seed);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, Math.min(n, arr.length));
}

const posts = { data: hoje, itens: sortear(POSTS_POOL, QTD_POSTS, semana) };
const radar = { atualizadoEm: hoje, itens: sortear(RADAR_POOL, QTD_RADAR, semana + 999) };

const aviso = '/* Gerado automaticamente pelo robô semanal. Não edite à mão. */\n';
fs.writeFileSync(path.join(ROOT, 'posts.js'), aviso + 'window.POSTS = ' + JSON.stringify(posts, null, 2) + ';\n');
fs.writeFileSync(path.join(ROOT, 'radar.js'), aviso + 'window.RADAR = ' + JSON.stringify(radar, null, 2) + ';\n');

console.log('Semana', semana, '· data', hoje);
console.log('posts.js:', posts.itens.map(i => i.artTitulo).join(' | '));
console.log('radar.js:', radar.itens.map(i => i.titulo).join(' | '));
