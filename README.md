# 🌤️ Weather React App

A beautiful and modern weather application built with React and OpenWeather API. Get real-time weather information for any city in the world with an elegant, monotonic user interface.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://jgrex-joy.github.io/weather-react-app/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.3.9-646CFF)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## ✨ Features

- 🌍 **Global Weather Data** - Search for weather in any city worldwide
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- 🌡️ **Real-time Information** - Current temperature, wind speed, and humidity
- 🔍 **Smart Search** - Easy-to-use search functionality with instant results
- 🎭 **Weather Icons** - Visual emoji representation of weather conditions
- ⚡ **Lightning Fast** - Built with Vite for optimal performance

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeather API key ([Get it free here](https://openweathermap.org/api))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JGRex-Joy/weather-react-app.git
   cd weather-react-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Update the component to use environment variable**

   Open `src/WeatherApp.jsx` and change:
   ```javascript
   const API_KEY = YOUR_API_KEY;
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**

   Navigate to `http://localhost:5173`

## 🎯 Getting Your API Key

1. Visit [OpenWeather API](https://openweathermap.org/api)
2. Sign up for a free account
3. Verify your email address
4. Go to the "API keys" section in your account
5. Copy your API key
6. Wait 10-15 minutes for the key to activate

**Note:** The free tier includes 60 calls/minute and 1,000,000 calls/month, which is more than enough for personal use.

## 🏗️ Project Structure

```
weather-react-app/
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions deployment
├── src/
│   ├── WeatherApp.jsx         # Main weather component
│   ├── WeatherApp.styles.js   # Separated styles
│   ├── App.jsx                # Root component
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles
├── public/
├── .env.example               # Environment variables template
├── .gitignore
├── index.html
├── package.json
├── vite.config.js             # Vite configuration
└── README.md
```

### Changing Temperature Units

In `src/WeatherApp.jsx`, modify the API call:

```javascript
// For Celsius (default)
`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`

// For Fahrenheit
`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${API_KEY}`
```

## 📦 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
## 🛠️ Built With

- **[React 18](https://reactjs.org/)** - UI library
- **[Vite](https://vitejs.dev/)** - Build tool and dev server
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[OpenWeather API](https://openweathermap.org/)** - Weather data provider

## 📱 Responsive Design

The app is fully responsive and works seamlessly on:
- 💻 Desktop (1920px and above)
- 💻 Laptop (1024px - 1919px)
- 📱 Tablet (768px - 1023px)
- 📱 Mobile (320px - 767px)

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 🐛 Known Issues

- API key must be kept secure (never commit to version control)
- Free tier API has rate limits (60 calls/minute, 1,000,000 calls/month)
- API key takes 10-15 minutes to activate after registration

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Weather data provided by [OpenWeather](https://openweathermap.org/)
- Icons by [Lucide](https://lucide.dev/)
- Font family: [Poppins](https://fonts.google.com/specimen/Poppins) by Google Fonts

## 📧 Contact

**Project Repository:** [https://github.com/JGRex-Joy/weather-react-app](https://github.com/JGRex-Joy/weather-react-app)

**Live Demo:** [https://jgrex-joy.github.io/weather-react-app/](https://jgrex-joy.github.io/weather-react-app/)

For questions or suggestions, please open an issue on GitHub.

## 💡 Tips

- **First time using React?** Check out [React documentation](https://react.dev/)
- **Need help with Vite?** See [Vite guide](https://vitejs.dev/guide/)
- **Want to learn more about APIs?** Visit [OpenWeather API docs](https://openweathermap.org/api)

## 🔒 Security

- ⚠️ Never commit your `.env` file or API keys to version control
- 🔐 Use GitHub Secrets for production deployments
- 🛡️ Keep your dependencies up to date: `npm update`

## ⭐ Show Your Support

If you like this project, please give it a ⭐ on GitHub!

---

<div align="center">
  Made with ❤️ and React
  <br>
  <sub>Built with Vite ⚡ Styled with passion 🎨</sub>
</div>