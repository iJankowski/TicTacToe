using Microsoft.EntityFrameworkCore;
using TicTacToe.Context;
using TicTacToe.Models;
using TicTacToe.Models.enums;

namespace TicTacToe.Services;

public class GameService : IGameService
{
    private readonly GameDbContext _gameDbContext;

    public GameService(GameDbContext gameDbContext)
    {
        _gameDbContext = gameDbContext;
    }

    public Game? GetGameByGameCode(string gameCode)
    {
        return _gameDbContext.Games.Include(x => x.FirstPlayer)
            .Include(x => x.SecondPlayer)
            .FirstOrDefault(game => game.GameCode == gameCode && game.State != GameState.GameClosed);
    }

    public Game? GetGameById(Guid gameId)
    {
        return _gameDbContext.Games.FirstOrDefault(game => game.Id == gameId && game.State != GameState.GameClosed) ;
    }

    public List<Game> GetPublicGames()
    {
        return _gameDbContext.Games.Where(game => game.IsPrivate == false && game.State != GameState.GameClosed).ToList();
    }

    public List<Game> GetPrivateGames()
    {
        return _gameDbContext.Games.Where(game => game.IsPrivate && game.State != GameState.GameClosed).ToList();
    }

    public List<Game> GetGamesForUser(Guid userId)
    {
        return _gameDbContext.Games
            .Where(game => game.FirstPlayer != null && game.FirstPlayer.Id == userId && game.State != GameState.GameClosed)
            .ToList();
    }
}
