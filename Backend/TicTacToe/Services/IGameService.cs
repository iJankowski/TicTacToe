using TicTacToe.Models;

namespace TicTacToe.Services;

public interface IGameService
{
    Game? GetGameByGameCode(string gameCode);
    Game? GetGameById(Guid gameId);
    List<Game> GetPublicGames();
    List<Game> GetPrivateGames();
    List<Game> GetGamesForUser(Guid userId);
}