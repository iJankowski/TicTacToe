using TicTacToe.Models.enums;

namespace TicTacToe.Models;

public class GameMove : BaseEntity
{
    public Guid GameId { get; set; }
    public virtual Game Game { get; set; } = null!;
    public Guid UserId { get; set; }
    public Guid HistoryId { get; set; }
    public virtual MovesHistory History { get; set; } = null!;
    public FieldType FieldType { get; set; }
    public int XCoord { get; set; }
    public int YCoord { get; set; }
    public DateTime DateOfMove { get; set; }
}
