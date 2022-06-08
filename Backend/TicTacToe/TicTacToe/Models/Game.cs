using TicTacToe.Models.enums;

namespace TicTacToe.Models;

public class Game
{
    public Game(bool gamePrivacy)
    {
        GameCode = RandomString(5);
        IsPrivate = gamePrivacy;
        TicTacToeGame = Enumerable.Range(0, 9).Select(x => TicTacToeStatus.Blank).ToList();
    }

    public List<TicTacToeStatus> TicTacToeGame { get; set; }
    public string GameCode { get; set; }
    public static readonly Random Random = new Random();
    public bool IsPrivate { get; set; }
    public bool Queue { get; set; }

    private static string RandomString(int length)
    {
        const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return new string(Enumerable.Repeat(chars, length)
            .Select(s => s[Random.Next(s.Length)]).ToArray());
    }
}