using Microsoft.AspNetCore.Mvc;

namespace TicTacToe.Controllers;


[ApiController]
[Route("[Controller]")]

public class UserChoiceController : ControllerBase
{
    [HttpPost("move")]
    public IActionResult PlayerMove()
    {
        return Ok();
    }
}