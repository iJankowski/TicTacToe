namespace TicTacToe.Models.Requests;

public class NewGameRequest
{
    public Guid? UserId { get; set; }
    public bool? IsPrivate { get; set; }
}
