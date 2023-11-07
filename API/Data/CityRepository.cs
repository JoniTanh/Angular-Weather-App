using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class CityRepository : ICityRepository
{
    private readonly DataContext _context;
    private readonly IMapper _mapper;
    public CityRepository(DataContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async Task<IEnumerable<AppCity>> GetAppCitiesAsync()
    {
        return await _context.Cities
            .AsNoTracking()
            .Include(w => w.WeatherData)
            .ToListAsync();
    }

    public async Task<AppCity> GetCityByIdAsync(int id)
    {
        return await _context.Cities
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.Id == id);
    }

    public async Task<AppCity> GetCityByCityNameAsync(string cityName)
    {
        return await _context.Cities
            .AsNoTracking()
            .Include(w => w.WeatherData)
            .FirstOrDefaultAsync(x => x.CityName == cityName);
    }

    public async Task<bool> SaveAllAsync()
    {
        return await _context.SaveChangesAsync() > 0;
    }

    public void Update(AppCity city)
    {
        _context.Cities.Update(city);
    }

    public async Task<IEnumerable<CityDataDto>> GetCityDatasAsync()
    {
        return await _context.Cities
            .AsNoTracking()
            .ProjectTo<CityDataDto>(_mapper.ConfigurationProvider)
            .ToListAsync();
    }

    public async Task<CityDataDto> GetCityDataAsync(string cityName)
    {
        return await _context.Cities
            .AsNoTracking()
            .Where(x => x.CityName == cityName)
            .ProjectTo<CityDataDto>(_mapper.ConfigurationProvider)
            .FirstOrDefaultAsync();
    }

    public void DeleteCity(AppCity city)
    {
        _context.Cities.Remove(city);
    }
}
