using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Data;
public class WeatherRepository : IWeatherRepository
{
    private readonly DataContext _context;
    private readonly IMapper _mapper;
    public WeatherRepository(DataContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async Task AddWeatherAsync(Weather weather)
    {
        await _context.WeatherData.AddAsync(weather);
    }

    public void DeleteWeather(Weather weather)
    {
        _context.WeatherData.Remove(weather);
    }

    public async Task<CityDataDto> GetCityDataAsync(string cityName)
    {
        return await _context.Cities
            .AsNoTracking()
            .Where(x => x.CityName.ToLower() == cityName.ToLower())
            .ProjectTo<CityDataDto>(_mapper.ConfigurationProvider)
            .FirstOrDefaultAsync();
    }

    public void UpdateWeather(Weather weather)
    {
        _context.WeatherData.Update(weather);
    }
}