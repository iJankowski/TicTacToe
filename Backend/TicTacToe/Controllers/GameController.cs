using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TicTacToe.Models;
using TicTacToe.Services;

namespace TicTacToe.Controllers;

[ApiController]
[Route("[controller]")]
public class GameController : ControllerBase
{
    private readonly GameService _gameService;
    private readonly GameActionService _gameActionService;

    public GameController(GameService gameService, GameActionService gameActionService)
    {
        _gameService = gameService;
        _gameActionService = gameActionService;
    }

    [HttpGet]
    public IActionResult Games()
    {
        var games = _gameService.GetPublicGames();
        return Ok(games);
    }

    [HttpGet("{gameCode}")]
    public IActionResult GameStatus(string gameCode)
    {
        var game = _gameService.GetGameByGameCode(gameCode);
        return Ok(game);
    }

    [HttpPost]
    public async Task<IActionResult> NewGame([FromBody] NewGameRequest newGame)
    {
        var game = await _gameActionService.NewGame(newGame.isPrivate, Guid.Parse((newGame.userId)));
        if (game != null) return Ok(game);

        return BadRequest();
    }

    [HttpPatch("{gameCode}")]
    public IActionResult JoinGame(string gameCode, [FromBody] JoinGameRequest joinGame)
    {
        var game = _gameActionService.JoinGame(Guid.Parse(joinGame.userId), gameCode);
        return Ok(game);
    }

    [Authorize("admin")]
    [HttpDelete("{gameCode}")]
    public IActionResult DeleteGame([FromRoute] string gameCode)
    {
        var isClosed = _gameActionService.CloseGame(gameCode);
        return Ok(isClosed);
    }
    
    [HttpPatch("next")]
    public IActionResult NextGame(string gameCode)
    {
        var game = _gameActionService.Rematch(gameCode);
        return Ok(game);
    }
}