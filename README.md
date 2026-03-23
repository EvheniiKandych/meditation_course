# Meditation Course

## Інструкція по запуску для мене

1. Відкрий термінал у папці `C:\work\meditation_course`.
2. Встанови залежності:
   ```bash
   npm install
   ```
3. Запусти dev-сервер:
   ```bash
   npm run dev
   ```
4. Відкрий у браузері `http://localhost:3000`.
5. Для production-збірки:
   ```bash
   npm run build
   npm run start
   ```

## Вказівки для іншого ШІ
Це лендинг-сторінка курсу медитації, реалізована на `Next.js (App Router) + TypeScript + Tailwind CSS`. Основний UI знаходиться у `app/page.tsx`, глобальні стилі у `app/globals.css`, SEO-метадані у `app/layout.tsx`, дизайн-токени у `tailwind.config.ts`. Працюй у стилі clean code, зберігай TypeScript strict, не ламай існуючу структуру секцій (`Hero`, `Method`, `Program`, `Benefits`, `FAQ`, `Access`). Для нових змін пріоритет: accessibility (WCAG), SEO-семантика, Core Web Vitals, адаптивність mobile-first.
