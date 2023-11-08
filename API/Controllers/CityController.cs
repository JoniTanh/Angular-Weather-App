using API.Data;
using API.DTOs;
using API.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class CityController : BaseApiController
{
    private readonly DataContext _context;
    private readonly IMapper _mapper;

    public CityController(DataContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpPost("add-city")]
    public async Task<ActionResult<CityDto>> AddCity(AddCityDto newCity)
    {
        if (await CityExists(newCity.CityName)) return BadRequest("City is already added");

        var city = new AppCity
        {
            CityName = newCity.CityName.ToLower(),
            CityInfo = newCity.CityInfo
        };

        _context.Cities.Add(city);
        await _context.SaveChangesAsync();

        return new CityDto
        {
            CityName = city.CityName,
            CityInfo = city.CityInfo
        };
    }

    private async Task<bool> CityExists(string cityName)
    {
        return await _context.Cities.AnyAsync(x => x.CityName == cityName.ToLower());
    }

    [HttpDelete("delete-city/{id}")]
    public async Task<ActionResult<CityDto>> DeleteCity(int id)
    {
        var city = await _context.Cities.FindAsync(id);

        if (city == null) return NotFound();

        var cityToReturn = _mapper.Map<CityDto>(city);

        _context.Cities.Remove(city);
        await _context.SaveChangesAsync();

        return Ok(cityToReturn);
    }

    [HttpPut("update-city-info/{id}")]
    public async Task<IActionResult> UpdateCityInfo(int id, UpdateCityDto updateCityDto)
    {
        var city = await _context.Cities.FindAsync(id);

        if (city == null) return NotFound("City not found");

        city.CityInfo = updateCityDto.CityInfo;

        _context.Cities.Update(city);
        await _context.SaveChangesAsync();

        return NoContent();
    }

}
