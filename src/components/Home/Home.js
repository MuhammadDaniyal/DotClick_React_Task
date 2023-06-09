import React from 'react'
import Layout from '../Layout'
import HomeInfo from './HomeInfo'
import Card from '../Card/Card'
import { CardInfo } from '../Card/CardInfo'

import './Home.css'

const Home = () => {
    return (
        <Layout>
            <div className='home'>
                <h2 className='home-heading'>You Currently have three request</h2>
                <div className='home--card'>
                    <HomeInfo />
                    <div className='home-first--card-sdiv'>
                        <p style={{
                            width: "35%",
                            borderTopLeftRadius: "24px",
                            borderBottomLeftRadius: "24px"
                        }}>
                            recieved
                        </p>
                        <hr />
                        <p style={{ width: "30%" }}>
                            negotiated
                        </p>
                        <hr />
                        <p style={{
                            width: "35%",
                            borderTopRightRadius: "24px",
                            borderBottomRightRadius: "24px"
                        }}>
                            completed
                        </p>
                    </div>
                </div>
                <div className='home--card' style={{
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
                    borderRadius: "40px"
                }}>
                    <HomeInfo />
                    <div className='home-second--card-sdiv'>
                        <p>
                            Completed
                        </p>
                    </div>
                    <div className='home-second--card-tdiv'>
                        {
                            CardInfo.map((elem, i) => {
                                return <Card key={i} {...elem} />
                            })
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home