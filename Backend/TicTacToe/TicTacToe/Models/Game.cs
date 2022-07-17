using TicTacToe.Models.enums;

namespace TicTacToe.Models;

public class Game
{
    private static readonly Random Random = new();

    public Game(bool gamePrivacy, User creator)
    {
        GameCode = RandomString(6);
        IsPrivate = gamePrivacy;
        TicTacToeGame = Enumerable.Range(0, 3)
            .Select(x => Enumerable.Range(0, 3).Select(y => TicTacToeStatus.Blank).ToList()).ToList();
        State = GameState.WaitingForSecondPlayer;
        DateCreated = DateTime.UtcNow;
        Creator = creator;
        GamesWonByFirstPlayer = 0;
        GamesWonBySecondPlayer = 0;
    }

    public List<List<TicTacToeStatus>> TicTacToeGame { get; set; }
    public string GameCode { get; set; }
    public bool IsPrivate { get; set; }
    public bool Queue { get; set; }
    public GameState State { get; set; }
    public User Creator { get; set; }
    public User? FirstPlayer { get; set; }
    public User? SecondPlayer { get; set; }
    public int GamesWonByFirstPlayer { get; set; }
    public int GamesWonBySecondPlayer { get; set; }
    public DateTime DateCreated { get; set; }

    private static string RandomString(int length)
    {
        const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return new string(Enumerable.Repeat(chars, length)
            .Select(s => s[Random.Next(s.Length)]).ToArray());
    }
    
    

}