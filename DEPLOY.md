# Инструкция по деплою на Vercel

## Быстрый старт

### Вариант 1: Через Vercel CLI (рекомендуется)

1. Установите Vercel CLI глобально:
```bash
npm install -g vercel
```

2. В корне проекта запустите:
```bash
vercel
```

3. Следуйте инструкциям CLI:
   - Войдите в аккаунт Vercel (или создайте новый)
   - Подтвердите настройки проекта
   - Дождитесь завершения деплоя

4. После успешного деплоя вы получите URL вашего сайта!

### Вариант 2: Через GitHub и Vercel Dashboard

1. Создайте репозиторий на GitHub и загрузите туда проект:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ваш-юзернейм/tiktok-agent-landing.git
git push -u origin main
```

2. Зайдите на [vercel.com](https://vercel.com) и войдите в аккаунт

3. Нажмите "New Project"

4. Импортируйте ваш GitHub репозиторий

5. Vercel автоматически определит что это Vite проект

6. Нажмите "Deploy"

7. Через 1-2 минуты ваш сайт будет доступен!

## Настройки перед деплоем

### 1. Обновите контакты

В файле `src/sections/Footer.jsx`:
- GitHub: замените `https://github.com` на ссылку вашего репозитория
- Telegram: замените `https://t.me/` на вашу ссылку
- Email: замените `support@tiktokagent.com` на ваш email

### 2. Добавьте скриншоты

Поместите изображения в `public/screenshots/`:
- screenshot-1.png
- screenshot-2.png
- screenshot-3.png
- screenshot-4.png

Размер: 1920x1080px или 1280x720px

### 3. Создайте og-image для соцсетей

Создайте `public/og-image.jpg`:
- Размер: 1200x630px
- Содержание: логотип + название + краткое описание
- Используйте градиент (#EF4444 → #A855F7 → #3B82F6)

### 4. Обновите ссылки на скачивание

В файле `src/sections/Download.jsx` замените `#download` на реальные ссылки на релизы:
- GitHub Releases
- Прямые ссылки на файлы
- Ссылки на установщики

### 5. Обновите robots.txt

В файле `public/robots.txt` замените `yourdomain.com` на ваш домен.

## Проверка перед деплоем

Запустите локально:
```bash
npm run build
npm run preview
```

Проверьте:
- ✅ Все анимации работают
- ✅ Карусели крутятся
- ✅ Ссылки ведут куда нужно
- ✅ Сайт адаптивен на мобильных
- ✅ Нет ошибок в консоли

## Автоматический деплой

После первого деплоя через GitHub, каждый `git push` в main ветку будет автоматически деплоить новую версию!

```bash
git add .
git commit -m "Update content"
git push
```

Vercel автоматически:
1. Обнаружит изменения
2. Соберет проект
3. Задеплоит новую версию
4. Отправит уведомление

## Кастомный домен

После деплоя вы можете подключить свой домен:

1. В Vercel Dashboard откройте ваш проект
2. Перейдите в Settings → Domains
3. Добавьте ваш домен
4. Следуйте инструкциям по настройке DNS

## Оптимизация

Vercel автоматически:
- Минифицирует код
- Оптимизирует изображения
- Настраивает кэширование
- Предоставляет CDN
- Генерирует превью для pull requests

## Мониторинг

В Vercel Dashboard доступны:
- Аналитика посещений
- Логи деплоев
- Метрики производительности
- Web Vitals

## Стоимость

Vercel Hobby (бесплатный план) включает:
- Безлимитные деплои
- 100GB bandwidth/месяц
- Автоматический HTTPS
- Кастомные домены
- Preview deployments

Этого более чем достаточно для лендинга!

## Поддержка

При проблемах с деплоем:
1. Проверьте логи в Vercel Dashboard
2. Убедитесь что `npm run build` работает локально
3. Проверьте что все зависимости установлены

## Полезные ссылки

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
