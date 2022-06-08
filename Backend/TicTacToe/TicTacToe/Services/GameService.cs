using TicTacToe.Models;
using TicTacToe.Models.enums;

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
        return _memoryService.Games.Where(x => x.IsPrivate == false).ToList();
    }

    public Game StatusOfGame(string gameCode)
    {
        return _memoryService.Games.Where(x => x.GameCode == gameCode).ToList().FirstOrDefault();
    }
    
    public bool PlayerMove(string gameCode, int boardPlace)
    {
        var game = _memoryService.Games.Where(x => x.GameCode == gameCode).ToList().FirstOrDefault();
        if (game == null) return false;
        if (game.TicTacToeGame[boardPlace] == TicTacToeStatus.Blank && boardPlace is >= 0 and < 9)
        {
            if (game.Queue)
            {
                game.TicTacToeGame[boardPlace] = TicTacToeStatus.Cross;
            }
            else
            {
                game.TicTacToeGame[boardPlace] = TicTacToeStatus.Circle;
            }
        }
        else
        {
            return false;
        }
        game.Queue = !game.Queue;
        return true;
    }
}