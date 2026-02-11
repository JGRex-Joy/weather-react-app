import React, { useState, useEffect } from 'react';
import { Search, Wind, Droplets } from 'lucide-react';
import { styles, globalStyles } from './WeatherApp.styles';

const WeatherApp = () => {
    const [city, setCity] = useState('Bishkek');
    const [searchInput, setSearchInput] = useState('Bishkek');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_KEY = 'a41b28947c318944b1ded0c00713c883';

    const fetchWeather = async (cityName) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
            );

            if (!response.ok) {
                throw new Error('City not found');
            }

            const data = await response.json();
            setWeatherData(data);
            setCity(cityName);
        } catch (err) {
            setError(err.message);
            setWeatherData(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeather(city);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchInput.trim()) {
            fetchWeather(searchInput);
        }
    };

    const getCurrentDate = () => {
        const date = new Date();
        const options = { day: 'numeric', month: 'long' };
        return `Today, ${date.toLocaleDateString('en-US', options)}`;
    };

    const getWeatherIcon = (condition) => {
        const iconMap = {
            'clear': '☀️',
            'clouds': '☁️',
            'rain': '🌧️',
            'drizzle': '🌦️',
            'thunderstorm': '⛈️',
            'snow': '❄️',
            'mist': '🌫️',
            'fog': '🌫️',
            'haze': '🌫️'
        };

        const main = condition?.toLowerCase() || 'clouds';
        return iconMap[main] || '☁️';
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <div style={styles.header}>
                    <h1 style={styles.title}>Weather App</h1>
                    <p style={styles.date}>{getCurrentDate()}</p>
                </div>

                <form onSubmit={handleSearch} style={styles.searchContainer}>
                    <input
                        type="text"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder="Enter city name"
                        style={styles.searchInput}
                    />
                    <button type="submit" style={styles.searchButton}>
                        <Search size={20} color="#fff" />
                    </button>
                </form>

                {loading && (
                    <div style={styles.loading}>Loading...</div>
                )}

                {error && (
                    <div style={styles.error}>{error}</div>
                )}

                {weatherData && !loading && (
                    <div style={styles.weatherContent}>
                        <h2 style={styles.cityName}>{weatherData.name}</h2>

                        <div style={styles.tempContainer}>
              <span style={styles.temperature}>
                {Math.round(weatherData.main.temp)}°C
              </span>
                            <span style={styles.weatherIcon}>
                {getWeatherIcon(weatherData.weather[0].main)}
              </span>
                        </div>

                        <div style={styles.detailsContainer}>
                            <div style={styles.detailItem}>
                                <Wind size={24} color="#fff" style={styles.detailIcon} />
                                <div style={styles.detailText}>
                                    <span style={styles.detailLabel}>Wind</span>
                                    <span style={styles.detailValue}>
                    {Math.round(weatherData.wind.speed)} m/s
                  </span>
                                </div>
                            </div>

                            <div style={styles.detailItem}>
                                <Droplets size={24} color="#fff" style={styles.detailIcon} />
                                <div style={styles.detailText}>
                                    <span style={styles.detailLabel}>Hum</span>
                                    <span style={styles.detailValue}>
                    {weatherData.main.humidity}%
                  </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = globalStyles;
    document.head.appendChild(styleSheet);
}

export default WeatherApp;