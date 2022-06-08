using Microsoft.AspNetCore.Mvc;
using TicTacToe.Services;

namespace TicTacToe.Controllers;

[ApiController]
[Route("[controller]")]
public class GameController : ControllerBase
{
    public GameController(GameService gameService)
    {
        _gameService = gameService;
    }

    private readonly GameService _gameService;
    
    [HttpPost("new")]
    public IActionResult NewGame()
    {
        var game = _gameService.NewGame(false);
        return Ok(game);
    }
    [HttpPost("newPrivate")]
    public IActionResult NewGamePrivate()
    {
        var game = _gameService.NewGame(true);
        return Ok(game);
    }

    [HttpGet("games")]
    public IActionResult Games()
    {
        var games = _gameService.ListOfGames();
        return Ok(games);
    }

    [HttpGet("status/{gameCode}")]
    public IActionResult GameStatus([FromRoute]string gameCode)
    {
        var game = _gameService.StatusOfGame(gameCode);
        return Ok(game);
    }
}
