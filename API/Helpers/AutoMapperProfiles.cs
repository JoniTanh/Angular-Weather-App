using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Helpers;

public class AutoMapperProfiles : Profile
{
    public AutoMapperProfiles()
    {
        CreateMap<AppCity, CityDataDto>();
        CreateMap<AppCity, CityDto>();
        CreateMap<AddCityDto, AppCity>();
        CreateMap<Weather, WeatherDto>();
        CreateMap<WeatherUpdateDto, Weather>();
        CreateMap<AddWeatherDto, Weather>();
    }
}