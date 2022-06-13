using TicTacToe.Models;

namespace TicTacToe.Services;

public class MemoryService
{
    public MemoryService()
    {
        Games = new List<Game>();
        Users = new List<User>();
    }
    public List<Game> Games { get; set; }
    public List<User> Users { get; set; }
}