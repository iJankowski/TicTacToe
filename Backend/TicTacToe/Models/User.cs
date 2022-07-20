using Microsoft.AspNetCore.Identity;

namespace TicTacToe.Models;

public class User : IdentityUser<Guid>
{
    public User()
    {
        Id = Guid.NewGuid();
        CreatedAt = DateTime.UtcNow;
    }

    public string? UserNickname { get; set; }
    public DateTime CreatedAt { get; set; }
    public override string? UserName { get; set; }
}