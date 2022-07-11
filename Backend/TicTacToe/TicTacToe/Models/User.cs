namespace TicTacToe.Models;

public class User
{
    public User(string userNickname, bool isRegistered, string email, string password)
    {
        UserNickname = userNickname;
        UserId = Guid.NewGuid();
        IsRegistered = isRegistered;
        Password = password;
        Email = email;
    }

    public User(string userNickname, bool isRegistered)
    {
        UserNickname = userNickname;
        UserId = Guid.NewGuid();
        IsRegistered = isRegistered;
    }
    public string UserNickname { get; set; }
    public Guid UserId { get; set; }
    
    private bool IsRegistered { get; set; }
    private string Password { get; set; }
    private string Email { get; set; }
}