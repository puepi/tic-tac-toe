import { useState } from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]
export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    function handleSelectSquare(rowIndex, colIndex) {

        setGameBoard(prevGameBoard => {
            const updatedGameBoard = [...prevGameBoard.map(innerBoard => [...innerBoard])]
            updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol
            return updatedGameBoard
        })
        onSelectSquare()

    }
    const gameBoardElt = gameBoard.map((row, rowIndex) => {
        return <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => {
                    return <li key={colIndex}><button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button></li>
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