import React, { useEffect } from 'react';
import { useWeather } from '../hooks/useWeather';
import { SearchBar } from '../components/molecules/SearchBar';
import { 
    Cloud, 
    Sun, 
    CloudRain, 
    Snowflake, 
    Wind, 
    Droplets, 
    Thermometer,
    MapPin,
    AlertCircle
} from 'lucide-react';

export const Home = () => {
    const { data, loading, error, getWeather } = useWeather();

    useEffect(() => {
        getWeather('London'); 
    }, []);

    // Helper: Dynamic Background
    const getBackgroundClass = (condition?: string) => {
        if (!condition) return "from-blue-500 to-cyan-400";
        const lower = condition.toLowerCase();
        
        if (lower.includes("rain") || lower.includes("drizzle")) return "from-slate-700 to-slate-900";
        if (lower.includes("snow")) return "from-blue-100 to-blue-300";
        if (lower.includes("cloud")) return "from-gray-400 to-slate-600";
        if (lower.includes("sun") || lower.includes("clear")) return "from-orange-400 to-amber-300";
        
        return "from-blue-500 to-cyan-400";
    };

    // Helper: Dynamic Icon
    const getWeatherIcon = (condition?: string) => {
        if (!condition) return <Sun className="w-16 h-16 text-white" />;
        const lower = condition.toLowerCase();

        if (lower.includes("rain")) return <CloudRain className="w-20 h-20 text-white drop-shadow-lg" />;
        if (lower.includes("snow")) return <Snowflake className="w-20 h-20 text-white drop-shadow-lg" />;
        if (lower.includes("cloud")) return <Cloud className="w-20 h-20 text-white drop-shadow-lg" />;
        
        return <Sun className="w-20 h-20 text-yellow-300 drop-shadow-lg" />;
    };

    const bgClass = data ? getBackgroundClass(data.currentConditions.conditions) : "from-blue-500 to-cyan-400";

    return (
        // Main Container with Gradient
        <div className={`min-h-screen flex flex-col items-center py-10 px-4 bg-gradient-to-br ${bgClass} transition-all duration-700`}>

            <div className="w-full max-w-md mb-8">
                <SearchBar onSearch={getWeather} isLoading={loading} />
            </div>

            {error && (
                <div className="bg-red-500/20 backdrop-blur border border-red-500/50 text-white p-4 rounded-xl flex items-center gap-2 mb-6">
                    <AlertCircle className="w-5 h-5" />
                    <span>{error}</span>
                </div>
            )}

            {data && (
                <div className="w-full max-w-md backdrop-blur-lg rounded-3xl p-8 text-white shadow-2xl">
                    
                    {/* Header: City & Date */}
                    <div className="flex flex-col items-center mb-6">
                        <div className="flex items-center gap-2 opacity-90 mb-1">
                            <MapPin className="w-5 h-5" />
                            <span className="text-2xl font-semibold tracking-wide">{data.resolvedAddress}</span>
                        </div>
                        <div className="text-sm opacity-80">
                            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                        </div>
                    </div>

                    {/* Main Temp */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="mb-4 drop-shadow-xl">
                            {getWeatherIcon(data.currentConditions.conditions)}
                        </div>
                        <h2 className="text-8xl font-bold tracking-tighter">
                            {Math.round(data.currentConditions.temp)}°
                        </h2>
                        <p className="text-xl font-medium mt-2 opacity-90 capitalize">
                            {data.currentConditions.conditions}
                        </p>
                    </div>

                    {/* Grid Details */}
                    <div className="grid grid-cols-3 gap-4 pt-6">
                        <div className="flex flex-col items-center">
                            <Wind className="w-6 h-6 opacity-80 mb-1" />
                            <span className="font-semibold">{data.currentConditions.windspeed} km/h</span>
                            <span className="text-xs opacity-60">Wind</span>
                        </div>
                        <div className="flex flex-col items-center border-l border-r">
                            <Droplets className="w-6 h-6 opacity-80 mb-1" />
                            <span className="font-semibold">{data.currentConditions.humidity}%</span>
                            <span className="text-xs opacity-60">Humidity</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Thermometer className="w-6 h-6 opacity-80 mb-1" />
                            <span className="font-semibold">{Math.round(data.currentConditions.feelslike)}°</span>
                            <span className="text-xs opacity-60">Feels Like</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};