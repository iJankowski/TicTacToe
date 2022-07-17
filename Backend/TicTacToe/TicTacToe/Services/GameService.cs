using TicTacToe.Models;
using TicTacToe.Models.enums;

namespace TicTacToe.Services;

public class GameService
{
    private readonly MemoryService _memoryService;

    public GameService(MemoryService memoryService)
    {
        _memoryService = memoryService;
    }

    public Game? NewGame(bool isPrivate, string nickname)
    {
        var user = _memoryService.Users.FirstOrDefault(x => x.UserNickname == nickname);
        if (user == null) return null;
        var game = new Game(isPrivate, user)
        {
            FirstPlayer = user
        };
        _memoryService.Games.Add(game);
        return game;
    }

    public Game? JoinGame(string nickname, string gameCode)
    {
        var user = _memoryService.Users.FirstOrDefault(x => x.UserNickname == nickname);
        var game = _memoryService.Games.FirstOrDefault(x => x.GameCode == gameCode);
        if (game == null) return null;
        if (game.Creator == user) return game;
        if (game.FirstPlayer == game.Creator)
        {
            game.SecondPlayer = user;
        }
        if (game.SecondPlayer == game.Creator)
        {
            game.FirstPlayer = user;
        }
        return game;

    }

    public Game NextGame(string gameCode)
    {
        var game = _memoryService.Games.FirstOrDefault(x => x.GameCode == gameCode);
        game.TicTacToeGame = Enumerable.Range(0, 3)
            .Select(x => Enumerable.Range(0, 3).Select(y => TicTacToeStatus.Blank).ToList()).ToList();
        (game.FirstPlayer, game.SecondPlayer) = (game.SecondPlayer, game.FirstPlayer);
        (game.GamesWonByFirstPlayer, game.GamesWonBySecondPlayer) =
            (game.GamesWonBySecondPlayer, game.GamesWonByFirstPlayer);
        return game;
    }

    public void ExterminateGame(string gameCode)
    {
        var game = _memoryService.Games.FirstOrDefault(x => x.GameCode == gameCode);
        if (game != null) _memoryService.Games.Remove(game);
    }

    public List<Game> ListOfGames()
    {
        return _memoryService.Games.Where(x => x.IsPrivate == false).ToList();
    }

    public List<Game> ListOfUserGames(Guid userId)
    {
        return _memoryService.Games.Where(user => user.Creator.UserId == userId).ToList();
    }

    public Game? StatusOfGame(string gameCode)
    {
        return _memoryService.Games.Where(x => x.GameCode == gameCode).ToList().FirstOrDefault();
    }

    public bool PlayerMove(string gameCode, int boardPlaceX, int boardPlaceY)
    {
        var game = _memoryService.Games.Where(x => x.GameCode == gameCode).ToList().FirstOrDefault();
        var checkWin = CheckWin(gameCode);
        if (game == null) return false;
        if (game.TicTacToeGame[boardPlaceX][boardPlaceY] == TicTacToeStatus.Blank && boardPlaceX is >= 0 and < 3)
        {
            if (game.Queue)
                game.TicTacToeGame[boardPlaceX][boardPlaceY] = TicTacToeStatus.Cross;
            else
                game.TicTacToeGame[boardPlaceX][boardPlaceY] = TicTacToeStatus.Circle;
        }
        else
        {
            return false;
        }
        if (checkWin == GameState.GameWonByFirstPlayer)
        {
                game.GamesWonByFirstPlayer += 1;
        }

        if (checkWin == GameState.GameWonBySecondPlayer) 
        {
                game.GamesWonBySecondPlayer += 1; 
        }
        game.Queue = !game.Queue;
        return true;
    }

    private GameState CheckWin(string gameCode)
    {
        var game = _memoryService.Games.Where(x => x.GameCode == gameCode).ToList().FirstOrDefault();
        //horizontal check
        var checkHorizontal = 4;
        var checkVertical = 4;
        for (var x = 0; x < 3; x++)
        {
             checkHorizontal = ThreeSquareChecker(game.TicTacToeGame[x][0], game.TicTacToeGame[x][1], game.TicTacToeGame[x][2]);
        }
        //vertical check
        for (var y = 0; y < 3; y++)
        {
            checkVertical = ThreeSquareChecker(game.TicTacToeGame[0][y], game.TicTacToeGame[1][y], game.TicTacToeGame[2][0]);
        }
        var checkLeftDown = ThreeSquareChecker(game.TicTacToeGame[2][0], game.TicTacToeGame[1][1], game.TicTacToeGame[0][2]);
        var checkRightDown = ThreeSquareChecker(game.TicTacToeGame[0][2], game.TicTacToeGame[1][1], game.TicTacToeGame[2][0]);
        if (checkHorizontal == 1 || checkVertical == 1 || checkLeftDown == 1 || checkRightDown == 1)
        {
            return GameState.GameWonByFirstPlayer;
        }
        if
         (checkHorizontal == 2 || checkVertical == 2 || checkLeftDown == 2 || checkRightDown == 2)
        {
            return GameState.GameWonBySecondPlayer;
        }

        return GameState.WaitingForMove;
    }

    private static int ThreeSquareChecker(TicTacToeStatus square, TicTacToeStatus squareTwo, TicTacToeStatus squareThree)
    {
        if (square == squareTwo && squareTwo == squareThree)
        {
            switch (square)
            {
                case TicTacToeStatus.Circle:
                    return 1;
                case TicTacToeStatus.Cross:
                    return 2;
            }
        }
        return 4;
    }
    
}