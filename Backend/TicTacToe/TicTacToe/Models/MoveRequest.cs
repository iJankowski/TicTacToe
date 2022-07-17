namespace TicTacToe.Models;

public class MoveRequest
{
    public string GameCode { get; set; }
    public int BoardPlaceX { get; set; }
    public int BoardPlaceY { get; set; }
}