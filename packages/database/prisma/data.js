const imageData = require('./images');

const users = [
  {
    user_id: 'user-with-1-store',
    user_first_name: 'Bruce',
    user_last_name: 'Willis',
    user_email: 'bruce@diehard.me',
    password_hash:
      '$2a$10$RUGuvXpVT7iX5QSiqm.hzOXH8fN71hadiXj6gg.HrTDsLb1ZZGomi',
  },
  {
    user_id: 'user-with-2-stores',
    user_first_name: 'John',
    user_last_name: 'Mullins',
    user_email: 'johnmullins@jourrapide.com',
    password_hash:
      '$2a$10$yI8wx62xmUs0F0xTxzuvhOUDNI1GJna0y4iWM03z.ZNoHbQJ82AcC',
  },
  {
    user_id: 'user-with-3-stores',
    user_first_name: 'Tony',
    user_last_name: 'Stark',
    user_email: 'whatsupdoc@prisma.com',
    password_hash:
      '$2a$10$y.FHYh9TpYy6XOsasS./cej.8W1tG3BKg2D6nA7bVnwrRN095wBcW',
  },
];

const stores = [
  {
    store_id: 'store-3-toothbrush',
    store_owner_id: 'user-with-1-store',
    store_name: 'Toothbrush Central',
    store_url: 'yippie-kay-yay',
  },
  {
    store_id: 'store-1-teapots',
    store_owner_id: 'user-with-3-stores',
    store_name: 'Teapots Galore',
    store_url: 'teapots-galore',
  },
  {
    store_id: 'store-4-fruit',
    store_owner_id: 'user-with-2-stores',
    store_name: 'Fruit & Veg Goodies',
    store_url: 'gotta-stay-healthy',
  },
  {
    store_id: 'store-5-toys',
    store_owner_id: 'user-with-2-stores',
    store_name: "Tony's Toys",
    store_url: 'toys-n-socks-bit-weird',
  },
  {
    store_id: 'store-6-keyboards',
    store_owner_id: 'user-with-3-stores',
    store_name: 'Keyboards on Tap',
    store_url: 'elec-emp',
  },
  {
    store_id: 'store-2-techstack',
    store_owner_id: 'user-with-3-stores',
    store_name: 'Tech Stack',
    store_url: 'toothbrushes-etc',
  },
];

const storeFronts = [
  {
    storefront_id: 'storefront-with-logo-with-hero-long-desc',
    store_id: 'store-1-teapots',
    support_email: 'support@mystore.com',
    store_description:
      'At teapots-galore we have always loved making tea and we want to share that with the world by providing a wonderful selection of teapots. We hope you love our products as much as we do!',
    store_logo: imageData.teapotLogo,
    store_hero_image: imageData.teapotHero,
    global_styles: JSON.stringify([
      { type: 'saleActive', selected: 'false' },
      { type: 'primaryColor', selected: '#ffffff' },
      { type: 'secondaryColor', selected: '#111836' },
    ]),
  },
  {
    storefront_id: 'storefront1-with-logo-with-hero-normal desc',
    store_id: 'store-2-techstack',
    support_email: 'no-emails-please@go-away.co.uk',
    store_description:
      'Roll up, roll up, get your Tech Stack here....bargain prices for quality goods!',
    store_logo: imageData.toothbrushLogo,
    store_hero_image: imageData.toothbrushHero,
    global_styles: JSON.stringify([
      { type: 'saleActive', selected: 'false' },
      { type: 'primaryColor', selected: '#ffffff' },
      { type: 'secondaryColor', selected: '#111836' },
    ]),
  },
  {
    storefront_id: 'storefront-with-no-logo-no-hero-no-desc-no-email',
    store_id: 'store-3-toothbrush',
    global_styles: JSON.stringify([
      { type: 'saleActive', selected: 'false' },
      { type: 'primaryColor', selected: '#ffffff' },
      { type: 'secondaryColor', selected: '#111836' },
    ]),
  },
  {
    storefront_id: 'storefront-with-logo-no-hero-normal desc',
    store_id: 'store-5-toys',
    support_email: 'i-am@iron.man',
    store_description:
      'Lots of quality toys for sale! New stock items weekly!',
    store_logo: imageData.toysNsocksLogo,
    global_styles: JSON.stringify([
      { type: 'saleActive', selected: 'false' },
      { type: 'primaryColor', selected: '#ffffff' },
      { type: 'secondaryColor', selected: '#111836' },
    ]),
  },
  {
    storefront_id: 'storefront2-with-logo-with-hero-normal-desc',
    store_id: 'store-6-keyboards',
    support_email: 'nothingElectronic@everBreaks.com',
    store_description:
      'Quality keyboards for all your ninja programmer coding needs! We also sell other electronic goods at bargain prices!',
    store_hero_image: imageData.elecEmpHero,
    store_logo: imageData.elecEmpLogo,
    global_styles: JSON.stringify([
      { type: 'saleActive', selected: 'false' },
      [
        { type: 'saleActive', selected: 'false' },
        { type: 'secondaryColor', selected: '#00ccb4' },
        { type: 'primaryColor', selected: '#ededed' },
      ],
    ]),
  },
  {
    storefront_id: 'storefront-no-logo-with-hero-normal-desc',
    store_id: 'store-4-fruit',
    support_email: 'straight-to-trash@outlook.com',
    store_description:
      'Join the plant revolution and order your fruit and veg from us! We have a wide range of organic and non-organic produce available for you to order. We also have a range of other products available for you to order.',
    store_hero_image: imageData.fruitNvegHero,
    global_styles: JSON.stringify([
      { type: 'saleActive', selected: 'false' },
      { type: 'primaryColor', selected: '#ffffff' },
      { type: 'secondaryColor', selected: '#111836' },
    ]),
  },
];

const products = [
  {
    product_id: 'prd-w-lng-dtls-and-big-nums',
    store_id: 'store-1-teapots',
    SKU: 'SKU-1793',
    product_name:
      'Tall Teapot',
    inventory_qty: 123456,
    description:
      "A really tall teapot to make lots of tea when you are standing up",
    product_price: 635.56,
    product_name_slug:
      'product-name-slug-which-is-also-rather-long-is-it-too-long-do-not-know-yet',
    product_images: imageData.longTeapotImages,
  },
  {
    product_id: 'prd-w-sml-dtls-and-0s-no-img',
    store_id: 'store-1-teapots',
    SKU: '5435',
    product_name: 'old product',
    inventory_qty: 0,
    description: 'discontinued',
    product_price: 0,
    product_name_slug: 'slug',
    is_active: false
  },
  {
    product_id: 'prd-w-neg-inv-and-price',
    store_id: 'store-1-teapots',
    SKU: '456-997',
    product_name: 'Very Black Teapot',
    inventory_qty: 0,
    description:
      "This teapot is very black, and is mainly only for making tea during the day",
    product_price: 10,
    product_name_slug: 'negative-teapot',
    product_images: imageData.negativeTeapotImages,
  },
  {
    product_id: 'prd1-w-nrml-dtls-1-img',
    store_id: 'store-1-teapots',
    SKU: '868434',
    product_name: 'Tiny Teapot',
    inventory_qty: 10,
    description: 'When you only need a little bit of tea to drink - soloists only',
    product_price: 17.99,
    product_name_slug: 'lowercase-teapot',
    product_images: imageData.tinyTeapotImages,
  },
  {
    product_id: 'prd2-w-nrml-dtls-1-img',
    store_id: 'store-1-teapots',
    SKU: '4837',
    product_name: 'Quirky Teapot',
    inventory_qty: 5,
    description:
      'This is a lovely teapot with lots of character. Designed to be a talking point and will fit in well to most kitchens but especially if you already have an Aga oven it can sit alongside! Check out all the lovely details, there are so many to find...',
    product_price: 33.27,
    product_name_slug: 'quirky-teapot',
    product_images: imageData.quirkyTeapotImages,
  },
  {
    product_id: 'prd1-w-nrml-dtls-2-imgs',
    store_id: 'store-1-teapots',
    SKU: '4H56K-7',
    product_name: 'See-through Teapot',
    inventory_qty: 300,
    description:
      'Does what it says on the tin, you can see through it. Marvel at the tea you have brewing, it is not quite watching the kettle boil, it is better. Guaranteed to make your tea-making experience at least 4.5% better',
    product_price: 5,
    product_name_slug: 'see-through-teapot',
    product_images: imageData.seeThroughTeapotImages,
  },
  {
    product_id: 'prd2-w-nrml-dtls-2-imgs',
    store_id: 'store-1-teapots',
    SKU: '5454-BGH',
    product_name: 'Blue Teapot',
    inventory_qty: 1753,
    description:
      'Blue is nice, blue is calming, blue is the color of the sky and the sea. A stone-cold classic color paired with a brilliant design, this is a teapot for the ages. Never let anyone tell you otherwise',
    product_price: 199.9,
    product_name_slug: 'blue-teapot',
    product_images: imageData.blueTeapotImages,
  },
  {
    product_id: 'prd-w-nrml-dtls-3-imgs',
    store_id: 'store-1-teapots',
    SKU: '43324',
    product_name: 'Green Teapot',
    inventory_qty: 487,
    description:
      "When a blue teapot just won't cut it, here we present our incredible new green teapot. Enjoy, and if you don't then your money back* (*no refunds)",
    product_price: 850.25,
    product_name_slug: 'green-teapot',
    product_images: imageData.greenTeapotImages,
  },
  {
    product_id: 'prd-w-nrml-dtls-4-imgs',
    store_id: 'store-1-teapots',
    SKU: '098789',
    product_name: 'Black Teapot',
    inventory_qty: 62,
    description:
      "The OG, this is basically the physical manifestation of the main character from the phrase where the 'pot calls the kettle black'",
    product_price: 1200,
    product_name_slug: 'dark-teapot',
    product_images: imageData.blackTeapotImages,
  },
  {
    product_id: 'prd-w-nrml-dtls-5-imgs',
    store_id: 'store-1-teapots',
    SKU: '5398789',
    product_name: 'Mega-pot',
    inventory_qty: 1,
    description:
      'So you like teapots? Well prove it by getting the Mega-pot. This is the mother of all teapots and you will be the envy of all your friends and family when this gets delivered. Can brew approximately all the tea in the world.',
    product_price: 1200,
    product_name_slug: 'xxxl-teapot',
    product_images: imageData.megaTeapotImages,
  },
  {
    product_id: 'prd3-w-nrml-dtls-2-imgs',
    store_id: 'store-3-toothbrush',
    SKU: '786241',
    product_name: 'Beach Ball',
    inventory_qty: 34,
    description:
      'Yeah, so I decided to sell a random really expensive beach ball because it can be enjoyed anywhere, including the beach. So pair this bad boy with your next holiday and have some fun in the sun!',
    product_price: 4000.75,
    product_name_slug: 'beach-ball',
    product_images: imageData.beachballImages,
  },
  {
    product_id: 'prd4-w-nrml-dtls-2-imgs',
    store_id: 'store-5-toys',
    SKU: '7241',
    product_name: 'Instant Sock Collection',
    inventory_qty: 399,
    description:
      'Did you ever want more socks than you know what to deal with? Well select our XL lucky dip sock collection and get a ton of random socks',
    product_price: 345.99,
    product_name_slug: 'bunch-o-socks',
    product_images: imageData.socksImages,
  },
  {
    product_id: 'prd5-w-nrml-dtls-2-imgs',
    store_id: 'store-5-toys',
    SKU: '6f241',
    product_name: 'Bulk buy of toys',
    inventory_qty: 76,
    description:
      'This is a big batch of toys, you get a random selection which may or may not include some of the items in the images. Take your chances and you might get something awesome, but most likely not',
    product_price: 652.43,
    product_name_slug: 'bunch-o-toys',
    product_images: imageData.toysImages,
  },
  {
    product_id: 'prd6-w-nrml-dtls-2-imgs',
    store_id: 'store-2-techstack',
    SKU: '89767',
    product_name: 'Toothbrush',
    inventory_qty: 76,
    description:
      'Some toothbrushes. Perfect for cleaning your teeth. But also useful, once they have got a bit worn out, for household cleaning. Basically a 2 in 1 functionality. What a bargain.',
    product_price: 6.67,
    product_name_slug: 'toothbrush',
    product_images: imageData.toothbrushImages,
    is_active: false
  },
  {
    product_id: 'prd7-w-nrml-dtls-2-imgs',
    store_id: 'store-2-techstack',
    SKU: '574',
    product_name: 'Cool Dog',
    inventory_qty: 1,
    description:
      'A dog to silently judge you whilst you brush your teeth. Includes sunglasses to protect its eyes from the gleam after you have done a great job brushing.',
    product_price: 545.29,
    product_name_slug: 'woof-woof',
    product_images: imageData.dogImages,
    is_active: false
  },
  {
    product_id: 'prd3-w-nrml-dtls-1-img',
    store_id: 'store-6-keyboards',
    SKU: '95674',
    product_name: 'Black Keyboard',
    inventory_qty: 18,
    description: 'A classic black keyboard - for all your typing needs',
    product_price: 27.99,
    product_name_slug: 'black-keyboard',
    product_images: imageData.keyboard1Image,
  },
  {
    product_id: 'prd4-w-nrml-dtls-1-img',
    store_id: 'store-6-keyboards',
    SKU: '4738',
    product_name: 'White Keyboard',
    inventory_qty: 14,
    description: 'A white keyboard - matches a modern white decor aesthetic. Typing optional;',
    product_price: 32.5,
    product_name_slug: 'white-keyboard',
    product_images: imageData.keyboard2Image,
  },
  {
    product_id: 'prd5-w-nrml-dtls-1-img',
    store_id: 'store-6-keyboards',
    SKU: '875674',
    product_name: 'Grey Keyboard',
    inventory_qty: 22,
    description: 'Grey keyboard - perfect mix of black and white so you can have a middle ground on those ambivalent days',
    product_price: 67,
    product_name_slug: 'grey-keyboard',
    product_images: imageData.keyboard3Image,
  },
  {
    product_id: 'prd6-w-nrml-dtls-1-img',
    store_id: 'store-6-keyboards',
    SKU: 'AM-624-X',
    product_name: 'Curvy Keyboard',
    inventory_qty: 6,
    description: 'Designed for ergonomics and looking much nice than the traditional sharp edges of a more standard keyboard',
    product_price: 44,
    product_name_slug: 'curvy-keyboard',
    product_images: imageData.keyboard4Image,
  },
  {
    product_id: 'prd8-w-nrml-dtls-1-img',
    store_id: 'store-4-fruit',
    SKU: '44646',
    product_name: 'Apple',
    inventory_qty: 10,
    description: 'Fresh and full of vitamins, mmm tasty',
    product_price: 0.99,
    product_name_slug: 'fresh-apple',
    product_images: imageData.appleImage,
  },
  {
    product_id: 'prd7-w-nrml-dtls-1-img',
    store_id: 'store-6-keyboards',
    SKU: '75463',
    product_name: 'Xbox',
    inventory_qty: 40,
    description: 'This is an amazing console for playing lots of games on',
    product_price: 450,
    product_name_slug: 'xbox-one',
    product_images: imageData.xboxImage,
  },
  {
    product_id: 'tailwind',
    store_id: 'store-2-techstack',
    SKU: '1234',
    product_name: 'Tailwind CSS',
    inventory_qty: 1,
    description: 'Tailwind',
    product_price: 0,
    product_name_slug: 'tailwind',
    product_images: imageData.tailwindImage,
  },
  {
    product_id: 'turborepo',
    store_id: 'store-2-techstack',
    SKU: '123',
    product_name: 'Turborepo',
    inventory_qty: 1,
    description: 'Turborepo',
    product_price: 0,
    product_name_slug: 'turborepo',
    product_images: imageData.turboRepoImage,
  },
  {
    product_id: 'tanstack',
    store_id: 'store-2-techstack',
    SKU: '312',
    product_name: 'TanStack Query',
    inventory_qty: 1,
    description: '',
    product_price: 0,
    product_name_slug: 'tanstack',
    product_images: imageData.tanstackImage,
  },
  {
    product_id: 'nextJS',
    store_id: 'store-2-techstack',
    SKU: '123',
    product_name: 'NextJS',
    inventory_qty: 1,
    description: 'NextJS',
    product_price: 0,
    product_name_slug: 'nextJS',
    product_images: imageData.nextJSImage,
  },
  {
    product_id: 'authjs',
    store_id: 'store-2-techstack',
    SKU: '865',
    product_name: 'Auth.js',
    inventory_qty: 1,
    description: 'Auth.js',
    product_price: 0,
    product_name_slug: 'authjs',
    product_images: imageData.authjsImage,
  },
  {
    product_id: 'stripe',
    store_id: 'store-2-techstack',
    SKU: '123',
    product_name: 'Stripe',
    inventory_qty: 1,
    description: 'Stripe',
    product_price: 0,
    product_name_slug: 'stripe',
    product_images: imageData.stripeImage,
  },
  {
    product_id: 'typescript',
    store_id: 'store-2-techstack',
    SKU: '7634',
    product_name: 'TypeScript',
    inventory_qty: 1,
    description: 'TypeScript',
    product_price: 0,
    product_name_slug: 'typescript',
    product_images: imageData.typescriptImage,
  },
  {
    product_id: 'cloudinary',
    store_id: 'store-2-techstack',
    SKU: '123',
    product_name: 'Cloudinary',
    inventory_qty: 1,
    description: 'Cloudinary',
    product_price: 0,
    product_name_slug: 'cloudinary',
    product_images: imageData.cloudinaryImage,
  },
  {
    product_id: 'postgreSQL',
    store_id: 'store-2-techstack',
    SKU: '53424',
    product_name: 'PostgreSQL',
    inventory_qty: 1,
    description: 'PostgreSQL',
    product_price: 0,
    product_name_slug: 'postgreSQL',
    product_images: imageData.postgreSQLImage,
  },
  {
    product_id: 'prisma',
    store_id: 'store-2-techstack',
    SKU: '1687',
    product_name: 'Prisma',
    inventory_qty: 1,
    description: 'Prisma',
    product_price: 0,
    product_name_slug: 'prisma',
    product_images: imageData.prismaImage,
  },
  {
    product_id: 'reactHotToast',
    store_id: 'store-2-techstack',
    SKU: '7635758',
    product_name: 'React Hot Toast',
    inventory_qty: 1,
    description: 'React Hot Toast',
    product_price: 0,
    product_name_slug: 'reactHotToast',
    product_images: imageData.reactHotToastImage,
  },
  {
    product_id: 'cypress',
    store_id: 'store-2-techstack',
    SKU: '156873',
    product_name: 'Cypress',
    inventory_qty: 1,
    description: 'Cypress',
    product_price: 0,
    product_name_slug: 'cypress',
    product_images: imageData.cypressImage,
  },
];

const customers = [
  {
    store_id: 'store-1-teapots',
    customer_id: 'cust-1-with-normal-name-bill-and-ship-same',
    customer_first_name: 'Timothy',
    customer_last_name: 'Allen',
    customer_email: 'tallen@live.com',
    phone_number: '970-001-0912',
  },
  {
    store_id: 'store-2-techstack',
    customer_id: 'cust-with-long-name-bill-and-ship-different',
    customer_first_name: 'Alexander',
    customer_last_name: 'Turner',
    customer_email: 'alexanderfturner@gmail.com',
    phone_number: '563-592-5097',
  },
  {
    store_id: 'store-3-toothbrush',
    customer_id: 'cust-2-with-normal-name-bill-and-ship-same',
    customer_first_name: 'Joshua',
    customer_last_name: 'Cook',
    customer_email: 'joshua.a.cook@live.com',
    phone_number: '513-311-5174',
  },
  {
    store_id: 'store-5-toys',
    customer_id:
      'cust-with-double-barrelled-name-bill-and-ship-different-no-phonenumber',
    customer_first_name: 'Rose-Marie',
    customer_last_name: 'Jones-Smith',
    customer_email: 'r.j@rocketmail.com',
  },
];

const addresses = [
  {
    address_id: 'addr-bill-and-ship-(ship)',
    customer_id: 'cust-1-with-normal-name-bill-and-ship-same',
    address_first_name: 'Jasmine',
    address_last_name: 'White',
    address_line_1: '628 Cedar Lane',
    address_line_2: '',
    city: 'Chefornak',
    state: 'Alaska',
    country: 'United States',
    postcode: '99561',
  },
  {
    address_id: 'addr-bill-and-ship-(bill)',
    customer_id: 'cust-1-with-normal-name-bill-and-ship-same',
    address_first_name: 'Danielle',
    address_last_name: 'Young',
    address_line_1: '55 Franklin Avenue',
    address_line_2: 'Apt 718',
    city: 'Charlotte',
    state: 'North Carolina',
    country: 'United States',
    postcode: '28237',
  },
  {
    address_id: 'addr-as-shipping-only',
    customer_id: 'cust-with-long-name-bill-and-ship-different',
    address_first_name: 'Alexis',
    address_last_name: 'Rogers',
    address_line_1: '70428 Court Street',
    address_line_2: 'Unit 151',
    city: 'Wilmington',
    state: 'Delaware',
    country: 'United States',
    postcode: '19891',
  },
  {
    address_id: 'addr-as-billing-only',
    customer_id: 'cust-with-long-name-bill-and-ship-different',
    address_first_name: 'Alexis',
    address_last_name: 'Rogers',
    address_line_1: '70428 Court Street',
    address_line_2: 'Unit 151',
    city: 'Wilmington',
    state: 'Delaware',
    country: 'United States',
    postcode: '19891',
  },
  {
    address_id: 'addr1-normal-(ship)',
    customer_id: 'cust-2-with-normal-name-bill-and-ship-same',
    address_first_name: 'Kyle',
    address_last_name: 'Carter',
    address_line_1: '85 Mulberry Street',
    address_line_2: '',
    city: 'Glen',
    state: 'Montana',
    country: 'United States',
    postcode: '59732',
  },
  {
    address_id: 'addr1-normal-(bill)',
    customer_id: 'cust-2-with-normal-name-bill-and-ship-same',
    address_first_name: 'John',
    address_last_name: 'Ross',
    address_line_1: '878 Oak Street',
    address_line_2: '',
    city: 'Tacoma',
    state: 'Washington',
    country: 'United States',
    postcode: '98418',
  },
  {
    address_id: 'addr-with-long-fields-bill-and-ship-(ship)',
    customer_id:
      'cust-with-double-barrelled-name-bill-and-ship-different-no-phonenumber',
    address_first_name: 'Addr First Name Longer Than Normal',
    address_last_name: 'Addr Last Name Longer Than Normal',
    address_line_1: 'Addr Line 1 making this long, longer, longest',
    address_line_2: 'Addr Line 2 also long sometimes, but how long',
    city: 'City Name Here Long',
    state: 'County Name Long',
    country: 'United States',
    postcode: 'Postcode',
  },
  {
    address_id: 'addr-with-empty-optional-fields-(bill)',
    customer_id:
      'cust-with-double-barrelled-name-bill-and-ship-different-no-phonenumber',
    address_first_name: 'Magnus',
    address_last_name: 'Magnusson',
    address_line_1: '12 Prospect Street',
    address_line_2: '',
    city: 'Boston',
    state: 'Massachusetts',
    country: 'United States',
    postcode: '02103',
  },
  {
    address_id: 'addr2-normal-(ship)',
    customer_id: 'cust-1-with-normal-name-bill-and-ship-same',
    address_first_name: 'Amanda',
    address_last_name: 'Ross',
    address_line_1: '1062 Primrose Lane',
    address_line_2: '',
    city: 'Hainesport',
    state: 'New Jersey',
    country: 'United States',
    postcode: '08036',
  },
  {
    address_id: 'addr2-normal-(bill)',
    customer_id: 'cust-1-with-normal-name-bill-and-ship-same',
    address_first_name: 'Amanda',
    address_last_name: 'Ross',
    address_line_1: '1062 Primrose Lane',
    address_line_2: '',
    city: 'Hainesport',
    state: 'New Jersey',
    country: 'United States',
    postcode: '08036',
  },
];

const orders = [
  {
    order_id: 'order-with-1-item-some-cost',
    store_id: 'store-3-toothbrush',
    customer_id: 'cust-2-with-normal-name-bill-and-ship-same',
    friendly_order_number: 23,
    bill_address_id: 'addr1-normal-(ship)',
    ship_address_id: 'addr1-normal-(bill)',
    products: {
      connect: [{ product_id: 'prd3-w-nrml-dtls-2-imgs' }],
    },
    order_details: [
      {
        productId: 'prd3-w-nrml-dtls-2-imgs',
        quantity: 2,
        price: 4000.75,
        name: 'Beach Ball',
        sku: '786241',
      },
    ],
    total_order_cost: 8001.5,
  },
  {
    order_id: 'order-with-many-items-high-cost',
    store_id: 'store-1-teapots',
    customer_id: 'cust-1-with-normal-name-bill-and-ship-same',
    friendly_order_number: 4617644,
    bill_address_id: 'addr-bill-and-ship-(bill)',
    ship_address_id: 'addr-bill-and-ship-(ship)',
    products: {
      connect: [
        { product_id: 'prd-w-nrml-dtls-4-imgs' },
        { product_id: 'prd-w-lng-dtls-and-big-nums' },
        { product_id: 'prd2-w-nrml-dtls-1-img' },
        { product_id: 'prd1-w-nrml-dtls-2-imgs' },
        { product_id: 'prd-w-nrml-dtls-3-imgs' },
      ],
    },
    order_details: [
      {
        productId: 'prd-w-nrml-dtls-4-imgs',
        quantity: 1,
        price: 1200,
        name: 'Black Teapot',
        sku: '098789',
      },
      {
        productId: 'prd-w-lng-dtls-and-big-nums',
        quantity: 4,
        price: 1234567,
        name: 'product1 - with a rather long name  just to see how this looks when displayed',
        sku: 'SKU-17937494797934',
      },
      {
        productId: 'prd2-w-nrml-dtls-1-img',
        quantity: 3,
        price: 33.27,
        name: 'Quirky Teapot',
        sku: '4837',
      },
      {
        productId: 'prd1-w-nrml-dtls-2-imgs',
        quantity: 2,
        price: 5,
        name: 'See-through Teapot',
        sku: '4H56K-7',
      },
      {
        productId: 'prd-w-nrml-dtls-3-imgs',
        quantity: 5,
        price: 850.25,
        name: 'Green Teapot',
        sku: '43324',
      },
    ],
    total_order_cost: 4943829.06,
  },
  {
    order_id: 'order-with-different-addresses',
    store_id: 'store-1-teapots',
    customer_id: 'cust-with-long-name-bill-and-ship-different',
    friendly_order_number: 32432,
    bill_address_id: 'addr-with-empty-optional-fields-(bill)',
    ship_address_id: 'addr-with-long-fields-bill-and-ship-(ship)',
    products: {
      connect: [{ product_id: 'prd-w-nrml-dtls-4-imgs' }],
    },
    order_details: [
      {
        productId: 'prd-w-nrml-dtls-4-imgs',
        quantity: 3,
        price: 1200,
        name: 'Black Teapot',
        sku: '098789',
      },
    ],
    total_order_cost: 1200,
  },
  {
    order_id: 'order-with-4-items-normal-cost',
    store_id: 'store-1-teapots',
    customer_id:
      'cust-with-double-barrelled-name-bill-and-ship-different-no-phonenumber',
    friendly_order_number: 543,
    bill_address_id: 'addr-as-billing-only',
    ship_address_id: 'addr-as-shipping-only',
    products: {
      connect: [
        { product_id: 'prd1-w-nrml-dtls-1-img' },
        { product_id: 'prd2-w-nrml-dtls-2-imgs' },
        { product_id: 'prd-w-nrml-dtls-5-imgs' },
        { product_id: 'prd-w-neg-inv-and-price' },
      ],
    },
    order_details: [
      {
        productId: 'prd1-w-nrml-dtls-1-img',
        quantity: 2,
        price: 17.99,
        name: 'should we correct lowercase first letter?',
        sku: '868434',
      },
      {
        productId: 'prd2-w-nrml-dtls-2-imgs',
        quantity: 3,
        price: 199.9,
        name: 'Blue Teapot',
        sku: '5454-BGH',
      },
      {
        productId: 'prd-w-nrml-dtls-5-imgs',
        quantity: 1,
        price: 1200,
        name: 'Mega-pot',
        sku: '5398789',
      },
      {
        productId: 'prd-w-neg-inv-and-price',
        quantity: -1,
        price: -1,
        name: 'Negative Teapot',
        sku: '456-997',
      },
    ],
    total_order_cost: 1834.68,
  },
  {
    order_id: 'order-with-1-item-zero-cost',
    store_id: 'store-1-teapots',
    customer_id: 'cust-1-with-normal-name-bill-and-ship-same',
    friendly_order_number: 7,
    bill_address_id: 'addr2-normal-(bill)',
    ship_address_id: 'addr2-normal-(ship)',
    products: {
      connect: [{ product_id: 'prd-w-sml-dtls-and-0s-no-img' }],
    },
    order_details: [
      {
        productId: 'prd-w-sml-dtls-and-0s-no-img',
        quantity: 0,
        price: 0,
        name: 'potato',
        sku: '',
      },
    ],
    total_order_cost: 0,
  },
];

module.exports = {
  users,
  stores,
  storeFronts,
  products,
  customers,
  addresses,
  orders,
};
