import React from 'react'

const BoardTable = () => {
    return (
        <table>
            <BoardHeader />
            <BoardBody data={this.props.data}/>
        </table>
    )
}

export default BoardTable;