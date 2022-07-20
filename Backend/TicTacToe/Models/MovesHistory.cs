namespace TicTacToe.Models;

public class MovesHistory : BaseEntity
{
    public List<GameMove> HistoricalGameMoves { get; set; }
    public Guid GameId { get; set; }
}