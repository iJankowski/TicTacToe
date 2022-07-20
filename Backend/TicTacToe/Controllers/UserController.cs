using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using TicTacToe.Models;
using TicTacToe.Services;

namespace TicTacToe.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private readonly UserManager<User> _userManager;
    private readonly SignInManager<User> _signInManager;

    public UserController(UserManager<User> userManager,SignInManager<User> signInManager)
    {
        _userManager = userManager;
        _signInManager = signInManager;
    }

    [HttpPost("createAdmin")]
    public async Task<IActionResult> CreateAdmin()
    {
        var identityResult = await _userManager.CreateAsync(new User()
            {
                UserName = "Admin",
                UserNickname = "Admin"
            }, "Password1!");
        if (identityResult == null) return BadRequest();
        return Ok(identityResult);
    }
    
    [Authorize("admin")]
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
            UserName = newUserRequest.username,
            UserNickname = newUserRequest.username
        });
        if (identityResult == null) return BadRequest();
        return Ok(identityResult);
    }

    [HttpPost("login")]
    public async Task<IActionResult> NewUser([FromBody] LoginUserRequest loginUserRequest)
    {
        var signInResult = await _signInManager.PasswordSignInAsync(loginUserRequest.username, loginUserRequest.password, true, false);
        if (signInResult.Succeeded == false) return BadRequest();
        
        
        var claims = new List<Claim>
        {
            new Claim("Username", loginUserRequest.username),
            new Claim(ClaimTypes.Role, "admin")
        };

        var claimsIdentity = new ClaimsIdentity(
            claims, CookieAuthenticationDefaults.AuthenticationScheme);
        
        await HttpContext.SignInAsync(
            CookieAuthenticationDefaults.AuthenticationScheme,
            new ClaimsPrincipal(claimsIdentity),
            new AuthenticationProperties());
        
        return Ok(loginUserRequest);
    }
}