namespace TicTacToe.Models.Requests;

public class NewGameRequest
{
    public string UserId { get; set; }
    public bool IsPrivate { get; set; }
}