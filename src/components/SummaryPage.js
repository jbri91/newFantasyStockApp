import React from 'react'
import StockCard from './StockCard'

function SummaryPage() {
    return(
        <div>
            <input placeholder='Search' />
        <div style ={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <StockCard 
            symbol= 'TSLA'
            stockName= 'Tesla Inc. - Common Stock'
            price='$880.80'
            dayChange='34.16 (4.03%)'
            time='04:00:00pm ET 01/25/21'/>
            <StockCard 
            symbol= 'TSLA'
            stockName= 'Tesla Inc. - Common Stock'
            price='$880.80'
            dayChange='34.16 (4.03%)'
            time='04:00:00pm ET 01/25/21'/>
            <StockCard 
            symbol= 'TSLA'
            stockName= 'Tesla Inc. - Common Stock'
            price='$880.80'
            dayChange='34.16 (4.03%)'
            time='04:00:00pm ET 01/25/21'/>
            <StockCard 
            symbol= 'TSLA'
            stockName= 'Tesla Inc. - Common Stock'
            price='$880.80'
            dayChange='34.16 (4.03%)'
            time='04:00:00pm ET 01/25/21'/>
            <StockCard 
            symbol= 'TSLA'
            stockName= 'Tesla Inc. - Common Stock'
            price='$880.80'
            dayChange='34.16 (4.03%)'
            time='04:00:00pm ET 01/25/21'/>
        </div>
        </div>
    )
}

export default SummaryPage