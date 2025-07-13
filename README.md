# neo-design-patterns-hw-03

## Опис

Проєкт демонструє використання патернів Factory Method та Abstract Factory для модульної платіжної системи з підтримкою Stripe, PayPal і Apple Pay.

## Використані патерни

- **Factory Method** — для створення об'єктів провайдерів без використання `new`.
- **Abstract Factory** — для забезпечення уніфікованого підходу до створення сервісів.

## Структура

- `core/` — інтерфейси
- `providers/` — реалізації провайдерів
- `app/` — контекст
- `main.ts` — запуск системи

## ▶Запуск

```bash
npx ts-node src/main.ts stripe
npx ts-node src/main.ts paypal
npx ts-node src/main.ts apple
```
