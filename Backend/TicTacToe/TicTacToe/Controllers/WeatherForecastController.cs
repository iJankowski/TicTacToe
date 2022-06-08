using Microsoft.AspNetCore.Mvc;

namespace TicTacToe.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetWeatherForecast")]
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
    }   
    
    [HttpGet("getTest/{id?}")]
    public IActionResult GetTest(string id)
    {
        return Ok("Ok");
    }    
    
    [HttpPost("postTest")]
    public IActionResult PostTest([FromBody]TestClass test)
    {
        return Ok(test);
    }
}

public class TestClass
{
    public int cos { get; set; }
    public string sin { get; set; }
}