using Microsoft.AspNetCore.Identity;
using TicTacToe.Context;
using TicTacToe.Models;
using TicTacToe.Models.enums;

namespace TicTacToe.Services;

public class GameActionService
{
    private readonly GameDbContext _gameDbContext;
    private readonly IGameService _gameService;
    private readonly UserManager<User> _userManager;


    public GameActionService(GameDbContext gameDbContext, IGameService gameService, UserManager<User> userManager)
    {
        _gameDbContext = gameDbContext;
        _gameService = gameService;
        _userManager = userManager;
    }

    public GameMove? PlayerMove(string gameCode, int xCoord, int yCoord)
    {
        var game = _gameService.GetGameByGameCode(gameCode);
        if (game == null) return null;

        var checkWin = IsWon(gameCode);

        var currentPlayer = game.Queue ? game.FirstPlayer : game.SecondPlayer;
        if (currentPlayer == null) return null;

        var existingMove =
            game.GameMoves.FirstOrDefault(gameMove => gameMove.XCoord == xCoord && gameMove.YCoord == yCoord);
        if (existingMove != null) return null;

        var move = new GameMove
        {
            YCoord = yCoord,
            XCoord = xCoord,
            UserId = currentPlayer.Id,
            FieldType = game.Queue ? FieldType.Cross : FieldType.Circle,
            GameId = game.Id,
            DateOfMove = DateTime.UtcNow
        };
        game.GameMoves.Add(move);
        _gameDbContext.SaveChanges();
        return move;
    }

    public async Task<Game?> NewGame(bool isPrivate, Guid userId)
    {
        var user = await _userManager.FindByIdAsync(userId.ToString());
        if (user == null) return null;

        var game = new Game
        {
            IsPrivate = isPrivate,
            FirstPlayer = user
        };
        _gameDbContext.Games.Add(game);
        await _gameDbContext.SaveChangesAsync();
        return game;
    }

    public async Task<Game?> JoinGame(Guid userId, string gameCode)
    {
        var user = await _userManager.FindByIdAsync(userId.ToString());
        var game = _gameService.GetGameByGameCode(gameCode);

        if (game == null) return null;
        game.SecondPlayer = user;

        await _gameDbContext.SaveChangesAsync();
        return game;
    }

    public bool CloseGame(string gameCode)
    {
        var game = _gameService.GetGameByGameCode(gameCode);
        if (game == null) return false;
        game.State = GameState.GameClosed;
        _gameDbContext.SaveChanges();
        return true;
    }



    public Game? Rematch(string gameCode)
    {
        var game = _gameService.GetGameByGameCode(gameCode);
        if (game == null) return null;
        
        game.HistoryOfMoves.Add(new MovesHistory()
        {
            GameId = game.Id,
            HistoricalGameMoves = game.GameMoves.ToList()
        });

        game.GameMoves.Clear();
        game.Queue = !game.Queue;

        _gameDbContext.SaveChanges();
        return game;
    }

    public bool? IsWon(string gameCode)
    {
        var game = _gameService.GetGameByGameCode(gameCode);
        if (game == null) return null;
        var circles = CheckByFieldType(game, FieldType.Circle);
        var crosses = CheckByFieldType(game, FieldType.Cross);
        var diagonals = CheckFieldsDiagonal(game);
        return circles || crosses || diagonals;
    }

    private bool CheckByFieldType(Game game, FieldType fieldType)
    {
        var x = CheckFields(game, (move, i) => move.XCoord == i && move.FieldType == fieldType);
        var y = CheckFields(game, (move, i) => move.YCoord == i && move.FieldType == fieldType);
        return x || y;
    }

    private bool CheckFields(Game game, Func<GameMove, int, bool> checkFunc)
    {
        for (var i = 0; i < 3; i++)
        {
            var moves = game.GameMoves.Where(move => checkFunc(move, i)).ToList();
            if (moves.Count > 2) return true;
        }

        return false;
    }

    private bool CheckFieldsDiagonal(Game game)
    {
        var move = game.GameMoves.FirstOrDefault(move => move.XCoord == 1 && move.YCoord == 1);
        if (move == null) return false;
        var fieldType = move.FieldType;
        var firstDiagonalMoves = game.GameMoves
            .Where(move =>
                CheckByCoordsFieldType(move, 0, 0, fieldType) ||
                CheckByCoordsFieldType(move, 2, 2, fieldType)).ToList();
        var secondDiagonalMoves = game.GameMoves
            .Where(move => CheckByCoordsFieldType(move, 0, 2, fieldType) ||
                           CheckByCoordsFieldType(move, 2, 0, fieldType)).ToList();

        return firstDiagonalMoves.Count == 2 || secondDiagonalMoves.Count == 2;
    }

    private bool CheckByCoordsFieldType(GameMove move, int x, int y, FieldType fieldType) =>
        move.XCoord == x && move.YCoord == y && move.FieldType == fieldType;
}

