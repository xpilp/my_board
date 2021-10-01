import React from 'react'

const Board = () => {
    const data = [
        { No: 1, Title: "Title1", Like: false, View: 0 },
        { No: 2, Title: "Title2", Like: false, View: 0 },
        { No: 3, Title: "Title3", Like: false, View: 0 },
        { No: 4, Title: "Title4", Like: false, View: 0 },
        { No: 5, Title: "Title5", Like: false, View: 0 },
        { No: 6, Title: "Title6", Like: false, View: 0 },
        { No: 7, Title: "Title7", Like: false, View: 0 },
        { No: 8, Title: "Title8", Like: false, View: 0 },
    ]
    return (
        <div className='board'>
            <BoardTable 
                data={data}
            />
        </div>
    )
}

export default Board;