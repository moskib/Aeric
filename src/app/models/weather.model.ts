

export interface DayWeatherForecast {
    date: Date;
    icon: number;
    minTemp: number;
    maxTemp: number;
}

export interface HourWeatherForecast {
    time: Date;
    icon: number;
    temperature: number;
}