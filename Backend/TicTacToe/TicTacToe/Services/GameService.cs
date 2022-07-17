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

    public Game NewGame(bool isPrivate, string nickname)
    {
        var user = _memoryService.Users.FirstOrDefault(x => x.UserNickname == nickname);
        var game = new Game(isPrivate, user);
        game.FirstPlayer = user;
        _memoryService.Games.Add(game);
        return game;
    }

    public Game JoinGame(string nickname, string gameCode)
    {
        var user = _memoryService.Users.FirstOrDefault(x => x.UserNickname == nickname);
        var game = _memoryService.Games.FirstOrDefault(x => x.GameCode == gameCode);
        game.SecondPlayer = user;
        return game;
    }

    public Game NextGame(string gameCode)
    {
        var game = _memoryService.Games.FirstOrDefault(x => x.GameCode == gameCode);
        game.TicTacToeGame = Enumerable.Range(0, 3).Select(x => Enumerable.Range(0,3).Select(y => TicTacToeStatus.Blank).ToList()).ToList();
        (game.FirstPlayer, game.SecondPlayer) = (game.SecondPlayer, game.FirstPlayer);
        return game;
    }
    public void ExterminateGame(string gameCode)
    {
        var game = _memoryService.Games.FirstOrDefault(x => x.GameCode == gameCode);
            _memoryService.Games.Remove(game);
    }

    public List<Game> ListOfGames()
    {
        return _memoryService.Games.Where(x => x.IsPrivate == false).ToList();
    }

    public Game StatusOfGame(string gameCode)
    {
        return _memoryService.Games.Where(x => x.GameCode == gameCode).ToList().FirstOrDefault();
    }
    
    public bool PlayerMove(string gameCode, int boardPlaceX, int boardPlaceY)
    {
        var game = _memoryService.Games.Where(x => x.GameCode == gameCode).ToList().FirstOrDefault();
        if (game == null) return false;
        if (game.TicTacToeGame[boardPlaceX][boardPlaceY] == TicTacToeStatus.Blank && boardPlaceX is >= 0 and < 3)
        {
            if (game.Queue)
            {
                game.TicTacToeGame[boardPlaceX][boardPlaceY] = TicTacToeStatus.Cross;
            }
            else
            {
                game.TicTacToeGame[boardPlaceX][boardPlaceY] = TicTacToeStatus.Circle;
            }
        }
        else
        {
            return false;
        }
        game.Queue = !game.Queue;
        return true;
    }

    public List<Game> ListOfUserGames(Guid userId)
    {
        return _memoryService.Games.Where(user => user.Creator.UserId == userId).ToList();
    }
}