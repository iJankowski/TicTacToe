using Microsoft.AspNetCore.Mvc;
using TicTacToe.Services;

namespace TicTacToe.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private readonly UserService _userService;

    public UserController(UserService userService)
    {
        _userService = userService;
    }

    [HttpPost("new")]
    public IActionResult NewUser(string nickname)
    {
        var user = _userService.NewUser(nickname);
        return Ok(user);
    }

    [HttpPost("all")]
    public IActionResult AllUsers()
    {
        return Ok(_userService.AllUsers());
    }

    [HttpGet("userGet")]
    public IActionResult GetUserById(Guid userId)
    {
        return Ok(_userService.GetUser(userId));
    }
}