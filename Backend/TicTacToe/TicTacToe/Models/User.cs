namespace TicTacToe.Models;

public class User
{
    public User(string userNickname)
    {
        UserNickname = userNickname;
        Player = Guid.NewGuid();
    }
    public string UserNickname { get; set; }
    public Guid Player { get; set; }
}