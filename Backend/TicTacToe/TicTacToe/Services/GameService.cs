using TicTacToe.Models;

namespace TicTacToe.Services;

public class GameService
{
    public GameService(MemoryService memoryService)
    {
        _memoryService = memoryService;
    }

    private readonly MemoryService _memoryService;

    public Game NewGame(bool isPrivate)
    {
        var game = new Game(isPrivate);
        _memoryService.Games.Add(game);
        return game;
    }

    public List<Game> ListOfGames()
    {
        return _memoryService.Games.Where(x => x.isPrivate == false).ToList();
    }
    
}