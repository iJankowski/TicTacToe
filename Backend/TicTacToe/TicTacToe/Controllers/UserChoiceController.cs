using Microsoft.AspNetCore.Mvc;
using TicTacToe.Models;
using TicTacToe.Services;

namespace TicTacToe.Controllers;

[ApiController]
[Route("[Controller]")]
public class UserChoiceController : ControllerBase
{
    private readonly GameService _gameService;

    public UserChoiceController(GameService gameService)
    {
        _gameService = gameService;
    }

    [HttpPost("move")]
    public IActionResult PlayerMove([FromBody] MoveRequest moveRequest)
    {
        var game = _gameService.PlayerMove(moveRequest.GameCode, moveRequest.BoardPlaceX, moveRequest.BoardPlaceY);
        return Ok(game);
    }
}