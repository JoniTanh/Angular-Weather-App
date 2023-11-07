namespace API.DTOs;

public class WeatherUpdateDto
{
    public int Id { get; set; }
    public DateTime Date { get; set; }
    public float TempC { get; set; }
    public float Rainfall { get; set; }
    public float WindSpeed { get; set; }
    public int AppCityId { get; set; }
}