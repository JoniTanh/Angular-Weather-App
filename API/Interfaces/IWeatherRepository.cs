using API.DTOs;
using API.Entities;

namespace API.Interfaces;

public interface IWeatherRepository
{
    Task AddWeatherAsync(Weather weather);
    void DeleteWeather(Weather weather);
    Task<CityDataDto> GetCityDataAsync(string cityName);
    void UpdateWeather(Weather weather);
}
