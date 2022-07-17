using Microsoft.AspNetCore.Mvc;
using TicTacToe.Services;

namespace TicTacToe.Controllers;

[ApiController]
[Route("[controller]")]
public class GameController : ControllerBase
{
    private readonly GameService _gameService;

    public GameController(GameService gameService)
    {
        _gameService = gameService;
    }

    [HttpPost("new")]
    public IActionResult NewGame(string nickname)
    {
        var game = _gameService.NewGame(false, nickname);
        if (game != null)
        {
            return Ok(game);
        }

        return BadRequest("User with that nickname does not exist");
    }

    [HttpPost("newPrivate")]
    public IActionResult NewGamePrivate(string nickname)
    {
        var game = _gameService.NewGame(true, nickname);
        if (game != null)
        {
            return Ok(game);
        }

        return BadRequest("User with that nickname does not exist");
    }

    [HttpPost("join")]
    public IActionResult JoinGame(string nickname, string gameCode)
    {
        var game = _gameService.JoinGame(nickname, gameCode);
        return Ok(game);
    }

    [HttpPost("next")]
    public IActionResult NextGame(string gameCode)
    {
        var game = _gameService.NextGame(gameCode);
        return Ok(game);
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

    [HttpGet("yourGames")]
    public IActionResult YourGames(Guid playerId)
    {
        var games = _gameService.ListOfUserGames(playerId);
        return Ok(games);
    }

    [HttpGet("status/{gameCode}")]
    public IActionResult GameStatus([FromRoute] string gameCode)
    {
        var game = _gameService.StatusOfGame(gameCode);
        return Ok(game);
    }
}