using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TicTacToe.Models;
using TicTacToe.Models.enums;

namespace TicTacToe.Context;

public class GameDbContext : IdentityDbContext<User, IdentityRole<Guid>, Guid>
{
    public GameDbContext()
    {
        var path = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData);
        DbPath = Path.Join(path, "game.db");
    }

    public DbSet<UserSettings> UserSetting { get; set; }
    public DbSet<Game> Games { get; set; }
    public DbSet<GameMove> Moves { get; set; }
    public DbSet<MovesHistory> MovesHistory { get; set; }
    public string DbPath { get; }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        options.UseSqlite($"Data Source={DbPath}");
        options.EnableSensitiveDataLogging();
        options.LogTo(Console.WriteLine);
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        builder.Entity<GameMove>()
            .Property(move => move.FieldType)
            .HasConversion(
                m => m.ToString(),
                m => (FieldType)Enum.Parse(typeof(FieldType), m));
        builder.Entity<GameMove>()
            .HasOne(x => x.Game)
            .WithMany(x => x.GameMoves);
        builder.Entity<GameMove>()
            .HasOne(x => x.History)
            .WithMany(x => x.HistoricalGameMoves);

        builder.Entity<Game>()
            .HasMany(game => game.GameMoves)
            .WithOne(x => x.Game);

        builder.Entity<MovesHistory>()
            .HasMany(gameMove => gameMove.HistoricalGameMoves)
            .WithOne(x => x.History);
    }
}