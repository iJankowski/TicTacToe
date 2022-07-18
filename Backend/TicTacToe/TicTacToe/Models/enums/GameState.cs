namespace TicTacToe.Models.enums;

public enum GameState
{
    WaitingForSecondPlayer = 0,
    GameWonByFirstPlayer = 1,
    GameWonBySecondPlayer = 2,
    GameDraw = 3,
    WaitingForMove = 4
}