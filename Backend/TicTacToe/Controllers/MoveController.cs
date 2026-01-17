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
        if (string.IsNullOrWhiteSpace(moveRequest.GameCode) || moveRequest.XCoord == null || moveRequest.YCoord == null)
        {
            return BadRequest();
        }

        var game = _gameActionService.PlayerMove(moveRequest.GameCode, moveRequest.XCoord.Value, moveRequest.YCoord.Value);
        return Ok(game);
    }
}
