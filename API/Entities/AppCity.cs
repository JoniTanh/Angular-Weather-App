namespace API.Entities;

public class AppCity
{
    public int Id { get; set; }
    public string CityName { get; set; }
    public virtual ICollection<Weather> WeatherData { get; set; }
}