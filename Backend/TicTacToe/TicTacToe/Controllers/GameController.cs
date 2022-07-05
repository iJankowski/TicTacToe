using Microsoft.AspNetCore.Mvc;
using TicTacToe.Models;
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
    public IActionResult NewGame(string nickname)
    {
        var game = _gameService.NewGame(false, nickname);
        return Ok(game);
    }
    [HttpPost("newPrivate")]
    public IActionResult NewGamePrivate(string nickname)
    {
        var game = _gameService.NewGame(true,nickname);
        return Ok(game);
    }

    [HttpPost("joinGame")]
    public IActionResult JoinGame(string nickname, string gameCode)
    {
        _gameService.JoinGame(nickname, gameCode);
        return Ok($"Hello {nickname}, welcome in game {gameCode}");
    }

    [HttpPost("deleteGame/{gameCode}")]
    public IActionResult DeleteGame([FromRoute] string gameCode)
    {
        _gameService.ExterminateGame(gameCode);
        return Ok("Game deleted");
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
