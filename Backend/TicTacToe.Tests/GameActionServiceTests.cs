using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Moq;
using TicTacToe.Context;
using TicTacToe.Models;
using TicTacToe.Services;
using Xunit;
using FluentAssertions;

namespace TicTacToe.Tests;

public class GameActionServiceTests
{
    public GameActionService GameActionService { get; set; } = null!;
    public Mock<IGameService> GameServiceMock { get; set; } = null!;
    
    public GameActionServiceTests()
    {
        var gameDbSetMock = new Mock<DbSet<Game>>();
        var dbContextMock = new Mock<GameDbContext>();
        dbContextMock.Setup(m => m.Games).Returns(gameDbSetMock.Object);
        var gameServiceMock = new Mock<IGameService>();
        gameServiceMock.Setup(x => x.GetGameByGameCode(It.IsAny<string>())).Returns(new Game()
        {
            GameCode = "TESTX1",
            IsPrivate = true
        });

        GameServiceMock = gameServiceMock;

        var store = new Mock<IUserStore<User>>();
        var mgr = new Mock<UserManager<User>>(store.Object, null, null, null, null, null, null, null, null);

        GameActionService = new GameActionService
            (dbContextMock.Object, gameServiceMock.Object, mgr.Object);
    }
    
    [Fact]
    public void Rematch_GameExists_ReturnsGame()
    {
        // arrange
        var game = GameActionService.Rematch("test1");
        
        // act

        // assert
        game.Should().NotBeNull();
    }
}
