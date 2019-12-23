

export interface DayWeatherForecast {
    Date: Date;
    Icon: number;
    MinTemp: number;
    MaxTemp: number;
}

export interface HourWeatherForecast {
    Time: Date;
    Icon: number;
    Temperature: number;
}