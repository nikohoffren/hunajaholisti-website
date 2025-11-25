<div align="center">

# Hunajaholistin Hunaja - Honey products e-commerce website

[![LICENSE](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version 1.1.3](https://img.shields.io/badge/Version-1.1.3-brightgreen.svg)](https://github.com/nikohoffren/hunajaholisti/pulls)
[![PR:s Welcome](https://img.shields.io/badge/PR:s-Welcome-purple.svg)](https://github.com/nikohoffren/hunajaholisti/pulls)
[![Contributors Welcome](https://img.shields.io/badge/Contributors-Welcome-purple.svg)](https://github.com/nikohoffren/hunajaholisti/pulls)
![GitHub repo size](https://img.shields.io/github/repo-size/nikohoffren/hunajaholisti-homepage)

![Honey](https://cdn.holvi.com/media/poolimage.image/2021/11/05/c67b308348bc60405360366fb336af60d9fb2ea1.png)

This repository contains the code for our Hunajaholistin Hunaja E-commerce website. The website offers a pleasant interface to view and purchase the assortment of honey products. It also supports language selection, allowing users to switch between Finnish and English languages seamlessly.

</div>

## Table of Contents

- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Questions](#questions)
- [List of Contributors](#list-of-contributors)
- [License](#license)
- [Shop Availability Flag](#shop-availability-flag)

## Technologies Used

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
- [Netlify Functions](https://netlify.com/)
- [Stripe](https://stripe.com/)

## Payment Integration Setup

This website supports multiple payment methods through Stripe:

### Supported Payment Methods

- **Credit/Debit Cards**: Payment with Visa and Mastercard
- **Google Pay**: Quick payment on Android devices
- **Apple Pay**: Quick payment on iOS devices

All payment methods feature official payment service logos for a clean interface. Payment methods are automatically detected based on device capabilities. Debug logging is only enabled in development mode for clean production logs.

### Environment Variables Required

Create a `.env` file in the root directory with the following variables:

```env
# Stripe Configuration
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
VITE_STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
```

### Stripe Dashboard Setup

1. Enable the following payment methods in your Stripe Dashboard:

   - Credit/Debit Cards
   - Google Pay
   - Apple Pay

2. Configure your payment methods in the Stripe Dashboard under **Settings > Payment methods**

### Development Workflow

This project supports two development modes:

#### Frontend Development Only (Recommended for most work)

```bash
npm run dev
```

- Fast development server
- No backend functions
- Good for UI/UX development
- Runs on `http://localhost:5173`
- **Use this for most development work**

#### Full-Stack Development (For Payment Testing Only)

```bash
npm run dev:full
```

- Includes Netlify Functions (backend)
- Payment processing works
- Complete checkout flow testing
- Runs on `http://localhost:8888`
- **Use this only when testing payments**

**Note:** For testing payment integrations (Stripe, Google Pay, Mobile Pay, PayPal), use `npm run dev:full`. For all other development work, use `npm run dev`.

**Current Status:** The payment function is working correctly. You may see Edge Functions errors in the terminal, but these are harmless and don't affect your payment processing.

**Troubleshooting:** If you encounter MIME type errors with `npm run dev:full`, switch to `npm run dev` for frontend development and test payments separately.

### Netlify Functions

The payment processing is handled by Netlify Functions located in the `functions/` directory. Make sure to:

1. Set up your Stripe secret key in Netlify environment variables
2. Deploy the functions to Netlify
3. Test the payment flow in development using `npm run dev:full`

### Troubleshooting

#### Common Issues

**Edge Functions errors in terminal:**

- These are harmless warnings and don't affect your payment function
- Your `create-payment-intent` function is working correctly
- You can safely ignore Edge Functions errors

**Netlify Functions not loading:**

- Make sure you're using `npm run dev:full` instead of `npm run dev`
- Check that your environment variables are set correctly
- Restart the development server if functions don't load

**Payment methods not showing:**

- Ensure payment methods are enabled in your Stripe Dashboard
- Check browser console for any JavaScript errors
- Verify Stripe publishable key is correct

**Payment processing fails:**

- Check Netlify Functions logs in the terminal
- Verify Stripe secret key is set correctly
- Test with Stripe test cards first

**Stripe payment method errors:**

- Make sure to enable payment methods in your Stripe Dashboard first
- Start with basic card payments before enabling Google Pay, Apple Pay, etc.
- Test in Stripe test mode before going live

## Shop Availability Flag

The storefront can be toggled on or off via the `SHOP` boolean exported from `src/config.ts`.

- `SHOP = true`: full e-commerce experience is available (cart, checkout, payments, local add-to-cart buttons).
- `SHOP = false`: all cart/checkout/payment routes redirect home, the navbar hides the cart icon, and the Pieni/Iso Kummipesä cards link directly to Holvi for purchases.

## Contributing

Contributions are what make the open-source community such an amazing place. Any contributions you make are greatly appreciated.

### Quick Start

1. Fork the repository
2. Clone the repository to your local machine `git clone https://github.com/nikohoffren/hunajaholisti-homepage.git`
3. Change directory to the project directory `cd hunajaholisti-homepage`
4. Install necessary dependencies `npm i`
5. Create your Feature Branch `git switch -c feature` (Replace the feature placeholder with your new feature)

### Development

Choose the appropriate development mode based on what you're working on:

#### For UI/UX Development

```bash
npm run dev
```

- Fast development server
- No backend required
- Good for styling, components, layout changes

#### For Payment/Backend Development

```bash
npm run dev:full
```

- Full-stack development
- Includes Netlify Functions
- Required for testing payment integrations

### Submitting Changes

6. Make your changes in code
7. Add your changes `git add name-of-the-changed-file`
8. Commit your Changes `git commit -m 'Add new feature'`
9. Push to the Branch `git push origin feature`
10. Open a Pull Request

Please note that global installation may require administrator permissions on your system. If you face any permission issues, you can use a package manager like yarn or use a version manager like nvm for node.js. Also remember to replace `name-of-the-changed-file` and `feature` with your specific file names and feature names.

We kindly request that you express your interest in working on a particular issue by leaving a message on the respective issue thread. This will allow us to assign the issue to you directly, thereby preventing multiple individuals from simultaneously working on the same problem.

If you have some small bug, feature or fix to make, that is not currently on Issues, feel free to submit a pull request.

For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

Also, please read our [Contributing Guidelines](CONTRIBUTING.md) for more information.

## Questions

If you have any questions about the repo, open an issue or contact me directly at niko.hoffren@gmail.com.

## List of Contributors

Massive thanks to all of the these fine individuals who contributed to this project!

[vktr-r2](https://github.com/vktr-r2)

[DarshanDixit05](https://github.com/DarshanDixit05)

[kabszac](https://github.com/kabszac)

[felixmaathz](https://github.com/felixmaathz)

[DuiNotDoy](https://github.com/DuiNotDoy)

[anubhav1206](https://github.com/anubhav1206)

[ducksblock](https://github.com/ducksblock)

[versacodes](https://github.com/versacodes)

[matteobandoni](https://github.com/matteobandoni)

## License

This project is licensed under the MIT license.
