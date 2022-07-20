namespace TicTacToe.Models;

public class NewGameRequest
{
    public string userId { get; set; }
    public bool isPrivate { get; set; }
}