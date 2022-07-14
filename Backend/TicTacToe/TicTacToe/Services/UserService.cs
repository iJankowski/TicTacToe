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

    public List<User> AllUsers()
    {
        return _memoryService.Users;
    }

    public User? GetUser(Guid guid)
    {
        return _memoryService.Users
            .Where(user => user.UserId == guid)
            .ToList()
            .FirstOrDefault();
    }
}