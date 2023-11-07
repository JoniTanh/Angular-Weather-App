using System.Text.Json;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class Seed
{
    public static async Task SeedCities(DataContext context)
    {
        if (await context.Cities.AnyAsync()) return;

        var cityData = await System.IO.File.ReadAllTextAsync("Data/CitySeedData.json");

        var cities = JsonSerializer.Deserialize<List<AppCity>>(cityData);

        if (cities == null) return;

        foreach (var city in cities)
        {
            city.CityName = city.CityName.ToLower();
        }

        await context.Cities.AddRangeAsync(cities);
        await context.SaveChangesAsync();
    }
}
