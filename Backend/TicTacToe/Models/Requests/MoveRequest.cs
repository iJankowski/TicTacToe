namespace TicTacToe.Models.Requests;

public class MoveRequest
{
    public string GameCode { get; set; }
    public int XCoord { get; set; }
    public int YCoord { get; set; }
}