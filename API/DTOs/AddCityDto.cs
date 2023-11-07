
using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class AddCityDto
{
    [Required]
    public string CityName { get; set; }
}
