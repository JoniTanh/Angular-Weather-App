using API.Data;
using API.DTOs;
using API.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class WeatherController : BaseApiController
{
    private readonly DataContext _context;
    private readonly IMapper _mapper;

    public WeatherController(DataContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpPost("add-weather/{cityName}")]
    public async Task<ActionResult<WeatherDto>> AddWeather(string cityName, AddWeatherDto newWeather)
    {
        var city = await _context.Cities.SingleOrDefaultAsync(c => c.CityName.ToLower() == cityName.ToLower());
        if (city == null) return NotFound($"City with name {cityName} not found.");

        var weather = _mapper.Map<Weather>(newWeather);
        weather.AppCityId = city.Id;

        if (weather.Rainfall < 0 || weather.WindSpeed < 0)
            return BadRequest("Values for Rainfall and WindSpeed cannot be negative.");

        _context.WeatherData.Add(weather);
        await _context.SaveChangesAsync();

        var weatherDto = _mapper.Map<WeatherDto>(weather);
        return CreatedAtAction(nameof(GetWeather), new { id = weather.Id }, weatherDto);
    }

    [HttpDelete("delete-weather/{id}")]
    public async Task<ActionResult> DeleteWeather(int id)
    {
        var weather = await _context.WeatherData.FindAsync(id);
        if (weather == null) return NotFound();

        var weatherToReturn = _mapper.Map<WeatherDto>(weather);

        _context.WeatherData.Remove(weather);
        await _context.SaveChangesAsync();

        return Ok(weatherToReturn);
    }

    [HttpPut("update/{id}")]
    public async Task<ActionResult> UpdateWeather(int id, WeatherUpdateDto weatherUpdateDto)
    {
        var weather = await _context.WeatherData.FindAsync(id);
        if (weather == null) return NotFound($"Weather data with id {id} not found.");

        _mapper.Map(weatherUpdateDto, weather);

        weather.Id = id;

        _context.WeatherData.Update(weather);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<WeatherDto>> GetWeather(int id)
    {
        var weather = await _context.WeatherData.FindAsync(id);
        if (weather == null) return NotFound($"Weather data with id {id} not found.");

        return Ok(_mapper.Map<WeatherDto>(weather));
    }

}
