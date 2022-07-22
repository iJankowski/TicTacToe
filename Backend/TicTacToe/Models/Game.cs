using System.ComponentModel.DataAnnotations.Schema;
using TicTacToe.Models.enums;

namespace TicTacToe.Models;

public class Game : BaseEntity
{
    private static readonly Random Random = new();

    public Game()
    {
        GameCode = RandomString(6);
        State = GameState.WaitingForSecondPlayer;
        DateCreated = DateTime.UtcNow;
        HistoryOfMoves = new List<MovesHistory>();
        GameMoves = new List<GameMove>();

    }

    public List<GameMove> GameMoves { get; set; }
    public List<MovesHistory> HistoryOfMoves { get; set; }
    public string GameCode { get; set; }
    public bool IsPrivate { get; set; }
    [NotMapped]
    public bool IsClosed => State != GameState.GameClosed;
    public bool Queue { get; set; }
    public GameState State { get; set; }
    public User? FirstPlayer { get; set; }
    public User? SecondPlayer { get; set; }
    public int GamesWonByOwner { get; set; }
    public int GamesWonByJoiner { get; set; }
    public DateTime DateCreated { get; set; }

    private static string RandomString(int length)
    {
        const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return new string(Enumerable.Repeat(chars, length)
            .Select(s => s[Random.Next(s.Length)]).ToArray());
    }
}