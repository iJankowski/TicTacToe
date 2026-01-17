using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using TicTacToe.Models;
using TicTacToe.Models.Requests;

namespace TicTacToe.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private readonly UserManager<User> _userManager;
    private readonly SignInManager<User> _signInManager;

    public UserController(UserManager<User> userManager, SignInManager<User> signInManager)
    {
        _userManager = userManager;
        _signInManager = signInManager;
    }

    [Authorize("Admin")]
    [HttpGet("all")]
    public IActionResult AllUsers()
    {
        return Ok(_userManager.Users.ToList());
    }

    [HttpGet]
    public IActionResult GetUser(Guid userId)
    {
        return Ok(_userManager.FindByIdAsync(userId.ToString()));
    }

    [HttpPost]
    public async Task<IActionResult> NewUser([FromBody] NewUserRequest newUserRequest)
    {
        var identityResult = await _userManager.CreateAsync(new User()
        {
            UserName = newUserRequest.Username,
            UserNickname = newUserRequest.Username
        });
        if (identityResult == null) return BadRequest();
        return Ok(identityResult);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginUserRequest loginUserRequest)
    {
        var signInResult = await _signInManager.PasswordSignInAsync(loginUserRequest.Username, loginUserRequest.Password, true, false);
        if (signInResult.Succeeded == false) return BadRequest();

        return Ok();
    }
}