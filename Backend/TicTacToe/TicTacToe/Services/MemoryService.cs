using TicTacToe.Models;

namespace TicTacToe.Services;

public class MemoryService
{
    public MemoryService()
    {
        Games = new List<Game>();
    }
    public List<Game> Games { get; set; }
}