using API.DTOs;
using API.Entities;

namespace API.Interfaces;

public interface ICityRepository
{
    void Update(AppCity city);
    Task<bool> SaveAllAsync();
    Task<IEnumerable<AppCity>> GetAppCitiesAsync();
    Task<AppCity> GetCityByIdAsync(int id);
    Task<AppCity> GetCityByCityNameAsync(string cityName);
    Task<IEnumerable<CityDataDto>> GetCityDatasAsync();
    Task<CityDataDto> GetCityDataAsync(string cityName);
    void DeleteCity(AppCity city);
}
