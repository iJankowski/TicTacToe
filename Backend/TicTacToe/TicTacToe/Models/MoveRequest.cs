namespace TicTacToe.Models;

public class MoveRequest
{
    public string GameCode { get; set; }
    public int BoardPlace { get; set; }
}