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
        var user = new User(nickname, false);
        _memoryService.Users.Add(user);
        return user;
    }

    public User RegisterUser(string nickname, string email, string password)
    {
        var user = new User(nickname, true, email ,password);
        _memoryService.Users.Add(user);
        return user;
    }
}