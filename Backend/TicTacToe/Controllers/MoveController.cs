using Microsoft.AspNetCore.Mvc;
using TicTacToe.Models.Requests;
using TicTacToe.Services;

namespace TicTacToe.Controllers;

[ApiController]
[Route("[controller]")]
public class MoveController : ControllerBase
{
    private readonly GameActionService _gameActionService;

    public MoveController(GameActionService gameActionService)
    {
        _gameActionService = gameActionService;
    }

    [HttpPost]
    public IActionResult PlayerMove([FromBody] MoveRequest moveRequest)
    {
        var game = _gameActionService.PlayerMove(moveRequest.GameCode, moveRequest.XCoord, moveRequest.YCoord);
        return Ok(game);
    }
}