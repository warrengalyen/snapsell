## SnapSell

An eCommerce store builder, allowing users to a online store, manage products, customize their storefront and accept payments for orders.

![Dashboard](/screenshots/dashboard.jpg)

## Features
**[Admin]**
- User authentication
- Theme customizer
- Product editor

**[Storefront]**
- Customized online store
- Secure checkout (Stripe)

## Installation
`npm i` in root folder

## Running locally
- App : `npm run dev`
- Prisma Studio: `npx prisma studio` (in /packages/database)
- Seed data : `npm run seed`(in /packages/database)

## Set up .env files - (env-examples provided in relevant folders)
- /packages/database
- /apps/admin
- /apps/storefront

## Tech stack

- Typescript, React, NextJS, Turborepo, Tanstack Query
- Shadcn/ui, React Hot Toast, Zod, AuthJS, Cloudinary, Stripe
- Database: PostgreSQL, Prisma
- Testing/CI: Cypress, GitHub Actions
