using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class AddWeatherDto
{
    [Required]
    public DateTime Date { get; set; }
    [Required]
    public float TempC { get; set; }
    [Required]
    public float Rainfall { get; set; }
    [Required]
    public float WindSpeed { get; set; }
    [Required]
    public int AppCityId { get; set; }
}
