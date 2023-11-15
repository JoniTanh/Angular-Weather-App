using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class OpenWeatherController : BaseApiController
{
    private readonly IConfiguration _configuration;
    private readonly HttpClient _httpClient;

    public OpenWeatherController(IConfiguration configuration, IHttpClientFactory httpClientFactory)
    {
        _configuration = configuration;
        _httpClient = httpClientFactory.CreateClient();
    }

    [HttpGet("{city}/{countryCode?}")]
    public async Task<IActionResult> GetWeather(string city, string countryCode = "")
    {
        var apiKey = _configuration["OpenWeatherSettings:ApiKey"];
        var url = String.IsNullOrEmpty(countryCode)
            ? $"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}"
            : $"https://api.openweathermap.org/data/2.5/weather?q={city},{countryCode}&appid={apiKey}";

        var response = await _httpClient.GetAsync(url);
        if (response.IsSuccessStatusCode)
        {
            var content = await response.Content.ReadAsStringAsync();
            return Ok(content);
        }

        return NotFound();
    }
}
