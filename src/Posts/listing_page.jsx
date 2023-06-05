import React from "react";
import './style.css';
import Button from "@mui/material/Button";

function PostListingSection()
{
    return(
        <div className="pst__lstng">
            <div className="container">
                <div className="nsghts row">
                    <div className="col lft_br">
                        <div className="category_se">
                            <h1 className="tile_hed">Latest Insights</h1>
                            <div className="art_grf row">
                                <a href="/post-crypto/547" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-600.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 3, 2023</p>
                                    <h1>Ripple locks 700M tokens as XRP turns 11</h1>
                                    <p>XPR has now existed for eleven years, bringing its all-time performance to an impressive number.</p>
                                </a>
                                <a href="/post-markets/530" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-597.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 3, 2023 - 8:09 AM</p>
                                    <h1>Biden signs debt ceiling bill that pulls US back from brink of unprecedented default</h1>
                                    <p>WASHINGTON (AP) — With just two days to spare, President Joe Biden signed legislation on Saturday that lifts the nation’s debt ceiling, averting an unprecedented default on the federal government’s debt.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row">
                            <a href="/post-crypto/546" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-599.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 3, 2023</p>
                                    <h1>These Bitcoin metrics signal potential bull run as…</h1>
                                    <p>Amidst the wild price swings, Bitcoin’s Realized Cap finds stability, hinting at a potential bull run. Miners profit as price falters in recent trades.</p>
                                </a>
                            <a href="/post-crypto/545" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-598.jpg" alt="art_pic"/></div>
                                    <p className="dat">  June 3, 2023</p>
                                    <h1>Shiba Inu in liquidity squeeze – End of the road for SHIB?</h1>
                                    <p>As a tier-1 memecoin, Shiba Inu has struggled with attracting the kind of liquidity it had in 2021. The path ahead is limited for SHIB, so where can it head next?</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/529" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-584.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 2, 2023 - 2:21 PM</p>
                                    <h1>Sharp Rally in Chinese Stocks Falls Short of Dispelling Gloom</h1>
                                    <p>(Bloomberg) -- The sharpest rally for Chinese stocks in three months is doing little to convince money managers that the market is set for a sustained turnaround.</p>
                                </a>
                            <a href="/post-markets/528" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-587.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 2, 2023 - 1:30 PM</p>
                                    <h1>Nvidia Is Still a ‘Buy’ on Wall Street as Analysts Race to Boost Price Targets</h1>
                                    <p>An investor craze for artificial intelligence has powered Nvidia’s dizzying rise and pushed the stock to lofty valuations. Wall Street analysts are predicting it has more room to run.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-commodities/519" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-602.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 5, 2023 - 2:33 AM</p>
                                <h1>Oil rises on Saudi plan to deepen output cuts from July</h1>
                                <p>LONDON (Reuters) -Oil prices rose by more than $1 a barrel on Monday after top crude exporter Saudi Arabia pledged to cut production by a further 1 million barrels per day (bpd) from July</p>
                            </a>
                            <a href="/post-crypto/548" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-603.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 5, 2023 - 4:28 AM</p>
                                <h1>Bitcoin little-changed around US$27,000, Ether treads water; Solana, XRP gain</h1>
                                <p>Bitcoin traded little changed on Monday morning in Asia to hold above the US$27,000 threshold. Ether also traded flat, along with most other top 10 non-stablecoin cryptocurrencies.</p>
                            </a>
                            <a href="/post-markets/531" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-601.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 5, 2023 - 12:31 PM</p>
                                <h1>Teslas China-made EV sales rose 2.4% in May from April - CPCA</h1>
                                <p>BEIJING (Reuters) - U.S. automaker Tesla Inc delivered 77,695 China-made electric vehicles (EVs) in May, a 2.4% jump from April, data from the China Passenger Car Association (CPCA) showed on Monday.</p>
                            </a>
                            <a href="/post-markets/526" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-586.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 2, 2023 - 12:27 AM</p>
                                <h1>Tech stocks are booming in 2023 - but there are 3 specific names that investors should be paying attention to, analyst says</h1>
                                <p>It's been a great year for the technology sector, with the Nasdaq Composite up nearly 25% since the start of 2023.</p>
                            </a>
                            {/* <a href="/post-crypto/441" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-456.jpg" alt="art_pic"/></div>
                                <p className="dat">Apr 24, 2023 - 9:43 PM</p>
                                <h1>Bitcoin could soar 268% to $100,000 as crypto winter is finally over, Standard Chartered says</h1>
                                <p>The crypto winter has melted away, and bitcoin is set to flourish, a Standard Chartered note forecasted on Monday.</p>
                            </a> */}
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Forex</h1>
                            <div className="art_grf row">
                            <a href="/post-forex/526" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-580.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 1, 2023 - 4:53 PM</p>
                                    <h1>USD/JPY Forecast – US Dollar Continues to Find Support</h1>
                                    <p>The US dollar has gone back and forth during the course of the trading session on Thursday, as we continue to see a lot of noisy behavior.</p>
                                </a>
                            <a href="/post-forex/525" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-581.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 1, 2023 - 4:48 PM</p>
                                    <h1>GBP to USD Forecast – British Pound Continues to Show Strength</h1>
                                    <p>The British pound has pulled back initially during the trading session on Thursday, to test the 50-Day EMA.</p>
                                </a>
                            <a href="/post-forex/524" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-582.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 1, 2023 - 4:38 PM</p>
                                    <h1>GBP/JPY Forecast – British Pound Continues to Pressure the Upside Against the Japanese Yen</h1>
                                    <p>The British pound has initially pulled back just a bit during the trading session on Thursday but has turned around to show signs of life again.</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                                <a href="/post-commodities/518" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-572.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 2, 2023 - 1:47 PM</p>
                                    <h1>Exxon, Chevron Near Deals to Drill in Gas-Rich Algeria</h1>
                                    <p>ALGIERS, Algeria—Exxon XOM 1.15%increase; green up pointing triangle Mobil and Chevron CVX 1.02%increase; green up pointing triangle are in advanced negotiations with Algeria</p>
                                </a>
                                <a href="/post-commodities/517" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-573.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 2, 2023 - 7:16 AM</p>
                                    <h1>Gold heads for best week since April on Fed pause bets</h1>
                                    <p>(Reuters) - Gold prices were on track on Friday for their biggest weekly rise since early April, buoyed by hopes the U.S. Federal Reserve would not raise interest rates at its policy meeting this month</p>
                                </a>
                            <a href="/post-commodities/516" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-571.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 2, 2023 - 1:48 AM</p>
                                    <h1>India snaps up record amount Russian oil while flows from Saudi Arabia plunge to 28-month low</h1>
                                    <p>India snapped up a record volume of Russian oil last month, while flows from Saudi Arabia have fallen to their lowest level since 2021.</p>
                                </a>
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                                <a href="/post-indices/518" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-593.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 2, 2023 - 4:10 PM</p>
                                    <h1>Dow Jones Futures Rise: Jobs Report Looms As Tesla Breaks Out</h1>
                                    <p>Dow Jones futures rose modestly early Friday, along with S&P 500 futures and Nasdaq futures. Broadcom (AVGO) and Lululemon Athletica (LULU) headlined earnings late Thursday with the jobs report on tap before the open.</p>
                                </a>
                            <a href="/post-indices/517" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-592.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 1, 2023 - 6:20 PM</p>
                                    <h1>Dow Jones Falls After Strong Jobs Data; Hot AI Stock C3.ai Crashes 24% On Earnings</h1>
                                    <p>The Dow Jones Industrial Average fell Thursday after key economic data, with the release of ADP's employment report and the Labor Department's weekly jobless claims.</p>
                                </a> 
                            <a href="/post-indices/516" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-591.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 1, 2023 - 6:38 AM</p>
                                    <h1>Mega-cap tech dominance in the S&P 500 is obscuring investor bets that the US may already be in a recession</h1>
                                    <p>Nvidia stock is crushing it this year along with other mega-cap tech shares in the S&P 500, but BlackRock says stripping out those big movers reveals that investors may believe that the US economy is already contracting.</p>
                                </a>   
                            </div>
                            <Button href="/post-indices" className="red__mor">View All</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostListingSection;