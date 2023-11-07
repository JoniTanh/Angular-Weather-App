using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities;

[Table("WeatherData")]
public class Weather
{
    public int Id { get; set; }
    public DateTime Date { get; set; }
    public float TempC { get; set; }
    public float Rainfall { get; set; }
    public float WindSpeed { get; set; }
    [ForeignKey("AppCityId")]
    public AppCity AppCity { get; set; }
    public int AppCityId { get; set; }
}
