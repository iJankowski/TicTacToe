using TicTacToe.Models.enums;

namespace TicTacToe.Models;

public class Game
{
    public Game(bool gamePrivacy)
    {
        GameCode = RandomString(5);
        isPrivate = gamePrivacy;
    }
    public List<TicTacToeStatus> TicTacToeGame { get; set; }
    public string GameCode { get; set; }
    public static readonly Random Random = new Random();
    public bool isPrivate { get; set; }

    private static string RandomString(int length)
    {
        const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return new string(Enumerable.Repeat(chars, length)
            .Select(s => s[Random.Next(s.Length)]).ToArray());
    }
}