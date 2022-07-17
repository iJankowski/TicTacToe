namespace TicTacToe.Models;

public class User
{
    public User(string userNickname)
    {
        UserNickname = userNickname;
        UserId = Guid.NewGuid();
        CreatedAt = DateTime.UtcNow;
    }

    public string UserNickname { get; }
    public Guid UserId { get; }
    public DateTime CreatedAt { get; }
}