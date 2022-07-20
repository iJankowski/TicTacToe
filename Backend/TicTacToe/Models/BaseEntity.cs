using System.ComponentModel.DataAnnotations;

namespace TicTacToe.Models;

public abstract class BaseEntity
{
    [Key]
    public Guid Id { get; set; }
}