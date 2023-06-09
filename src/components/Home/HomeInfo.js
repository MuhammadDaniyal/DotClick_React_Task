import React from 'react'

const HomeInfo = () => {
    return (
        <>
            <div className='home-first--card-fdiv'>
                <div>
                    <h3>St Judes Hospital</h3>
                    <p>Sarasota,FL.33178</p>
                </div>
                <hr />
                <div className='home-first--card-fdiv-inner'>
                    <div>
                        <h3>10</h3>
                        <p>October</p>
                    </div>
                    <h3>
                        -
                    </h3>
                    <div style={{ marginLeft: "15px" }}>
                        <h3>17</h3>
                        <p>december</p>
                    </div>
                </div>
                <hr />
                <div>
                    <h3>20 Rooms</h3>
                    <p>10 Singles, 10 doubles</p>
                </div>
            </div>
        </>
    )
}

export default HomeInfo