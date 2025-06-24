```
# Metric-Imperial Converter 🌍➡️🛢️

**A full-stack JavaScript application that seamlessly converts between Metric and Imperial units — because life’s too short to do manual conversions!**

---

## 🚀 Overview

Imagine a world where you can effortlessly switch between gallons and liters, miles and kilometers, pounds and kilograms — all with a simple input. That’s exactly what this app does! Built with love using Node.js, Express, and pure JavaScript, it’s your trusty companion for all measurement conversions, whether you're baking a cake, planning a trip, or just curious.

---

## 🔧 Features

- **Intuitive Input Parsing:** Accepts whole numbers, decimals, fractions, and defaults to 1 if no number is provided.
- **Robust Validation:** Handles invalid units and malformed numbers gracefully.
- **Accurate Conversions:** Gallons to liters, miles to kilometers, pounds to kilograms, and vice versa.
- **Clear Output:** Returns a human-readable string with the conversion result.
- **Full Stack Setup:** API route ready to integrate with any frontend or testing suite.

---

## 🛠️ How It Works

### Core Components

- **`convertHandler.js`**: The brain behind parsing, validating, and converting inputs.
- **`api.js` Route**: Handles API requests, processes inputs, and returns conversion data.
- **`server.js`**: Launchpad setting up the Express server.
- **`tests/`**: Automated tests ensuring every feature performs flawlessly.

---

## 🎯 To Get Started

### Clone the repo

```bash
git clone https://github.com/your-github-username/metric-imperial-converter.git
cd metric-imperial-converter
``

### Install dependencies

```bash
npm install
``

### Set up environment variables

Copy the sample environment file and configure as needed:

```bash
cp sample.env .env
# Edit .env if necessary
``

### Run the server

```bash
npm start
# or with nodemon
npm run dev
``

### Run tests

To validate the implementation:

```bash
npm run test
``

---

## 🌟 Sample API Usage

Get the conversion for `10L`:

```bash
GET /api/convert?input=10L
``

Expected response:

```json
{
  "initNum": 10,
  "initUnit": "L",
  "returnNum": 2.64172,
  "returnUnit": "gal",
  "string": "10 liters converts to 2.64172 gallons"
}
``

---

## 📝 Features in Progress / Future

- Support for more units (ounces, grams, feet, etc.)
- Frontend interface for user-friendly conversions
- Enhanced error messages and input suggestions

---

## 💡 Contributing

Got ideas or bug reports? Fork the repo, make your changes, and submit a pull request! Contributions are always welcome.

---

## 📜 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

Thanks to freeCodeCamp for the inspiring challenge and the open-source community for continuous support!

---

**Happy converting!** 🚀🌍

---
