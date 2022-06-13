using TicTacToe.Models;

namespace TicTacToe.Services;

public class UserService
{
    public UserService(MemoryService memoryService)
    {
        _memoryService = memoryService;
    }

    private readonly MemoryService _memoryService;

    public User NewUser(string nickname)
    {
        var user = new User(nickname);
        _memoryService.Users.Add(user);
        return user;
    }
}