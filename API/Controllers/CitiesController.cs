using API.DTOs;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class CitiesController : BaseApiController
{
    private readonly ICityRepository _cityRepository;
    private readonly IMapper _mapper;

    public CitiesController(ICityRepository cityRepository, IMapper mapper)
    {
        _mapper = mapper;
        _cityRepository = cityRepository;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<CityDataDto>>> GetCities()
    {
        var cities = await _cityRepository.GetCityDatasAsync();
        return Ok(_mapper.Map<IEnumerable<CityDataDto>>(cities));
    }

    [HttpGet("{cityName}", Name = "GetCity")]
    public async Task<ActionResult<CityDataDto>> GetCity(string cityName)
    {
        var city = await _cityRepository.GetCityDataAsync(cityName);

        if (city == null)
        {
            return NotFound($"City with name '{cityName}' not found.");
        }

        return Ok(_mapper.Map<CityDataDto>(city));
    }
}
