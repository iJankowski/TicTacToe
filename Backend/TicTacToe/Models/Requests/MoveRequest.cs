namespace TicTacToe.Models;

public class MoveRequest
{
    public string gameCode { get; set; }
    public int xCoord { get; set; }
    public int yCoord { get; set; }
}