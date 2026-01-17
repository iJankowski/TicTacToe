namespace TicTacToe.Models;

public class MovesHistory : BaseEntity
{
    public List<GameMove> HistoricalGameMoves { get; set; } = new();
    public Guid GameId { get; set; }
}
