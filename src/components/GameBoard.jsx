

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]
export default function GameBoard({ onSelectSquare, turns }) {
    let gaemeBoard = initialGameBoard
    for (const turn of turns) {
        const { square, player } = turn
        const { row, col } = square
        gaemeBoard[row][col] = player
    }
    /* const [gameBoard, setGameBoard] = useState(initialGameBoard)

    function handleSelectSquare(rowIndex, colIndex) {

        setGameBoard(prevGameBoard => {
            const updatedGameBoard = [...prevGameBoard.map(innerBoard => [...innerBoard])]
            updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol
            return updatedGameBoard
        })
        onSelectSquare()

    } */
    const gameBoardElt = gaemeBoard.map((row, rowIndex) => {
        return <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => {
                    return <li key={colIndex}><button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button></li>
                })}
            </ol>
        </li>
    })
    return (
        <ol id="game-board">
            {gameBoardElt}
        </ol>
    )
}