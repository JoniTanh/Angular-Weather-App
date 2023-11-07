namespace API.DTOs;

public class CityDataDto
{
    public int Id { get; set; }
    public string Cityname { get; set; }
    public ICollection<WeatherDto> WeatherData { get; set; }
}
