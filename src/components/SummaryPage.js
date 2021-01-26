import React from 'react'
import StockCard from './StockCard'

function SummaryPage() {
    return(
        <div style ={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <StockCard />
            <StockCard />
            <StockCard />
            <StockCard />
            <StockCard />
        </div>
    )
}

export default SummaryPage