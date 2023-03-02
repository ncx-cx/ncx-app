import { React, useState} from "react";
import '../../../pages/support/support.css';
import MyHeader from '../../../components/header/header';
import MyFooter from '../../../components/footer/footer';
import SearchModal from '../../../components/support/autosearch';
import ArticleSlider from '../article_slide';
import NCXLogo from '../../../images/ncx-black-logo.svg';
import Telegram from '../../../components/footer/telegram.svg';
import Twitter from '../../../components/footer/twitter.svg';
import Instagram from '../../../images/instagram.svg';
import { ReactComponent as CardArrow } from '../../../images/ncx-cardarrow.svg';
import SpotTrading1 from '../../../images/spot-trading-1.png';
import SpotTrading2 from '../../../images/spot-trading-2.png';
import SpotTrading3 from '../../../images/spot-trading-3.png';



function SupportPageSet()
{
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return(
        <div id="support_faqdetails">

            <MyHeader />

            <SearchModal />

            <div id="insight_page" className="details_faqs">
                <div className="container">
                    <div className="row">
                        <div className="col fest">
                            <div className="support_leftbar">
                                <div className="ncx-trends">
                                    <img className="ncx-blacklogo" src={NCXLogo} alt="ncx-blacklogo"/>
                                    <p>FAQs</p>
                                </div>

                                <div className="faq_nav">
                                    <a href="/faq">FAQs</a>
                                    <div className="arr_sv">
                                        <CardArrow />
                                    </div>
                                    <p>Spot Trading</p>
                                </div>

                                <ul className="details_faqul">
                                    <li>
                                        <button
                                            className={toggleState === 1 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(1)}
                                        >
                                        Order Types
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={toggleState === 2 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(2)}
                                        >
                                        How to Trade Spot on Web
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={toggleState === 3 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(3)}
                                        >
                                        How to Trade Spot on App
                                        </button>
                                    </li>
                                </ul>

                                <h1 className="support_ticket">Open Support Ticket</h1>
                                <p className="support_txt">Open Support Ticket via Support Chat section in your NCX Dashboard or reach us at <a href="mailto:support@ncx.cx">support@ncx.cx</a></p>
                                <a className="support_signin" href="#">Sign In</a>

                                <div className="social-icons">
                                    <div class="icons"><a href="#"><img src={Telegram} alt="NCX" title="Telegram"/></a></div>
                                    <div class="icons"><a href="https://twitter.com/NCX_CX" target="_blank"><img src={Twitter} alt="NCX" title="Twitter" /></a></div>
                                    <div class="icons"><a href="https://www.instagram.com/ncx.cx/" target="_blank"><img src={Instagram} alt="NCX" title="Instagram" /></a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col sect">
                            <div className={toggleState === 1 ? "sprt-content active" : "sprt-content"}>
                                <h1>Different Order Types in Spot Trading</h1>
                                <p>NCX offers different order types for you to use in Spot Trading. You can use them to set your trading strategies and trade efficiently. Let’s look at the common order types in NCX Spot Trading.</p>
                                <p><strong>What is a market order</strong></p>
                                <p>A market order is executed at the current market price as quickly as possible when you place the order. You can use it to place both buy and sell orders.</p>
                                <p>You can select [Amount] or [Total] to place a buy or sell market order. For example, if you want to buy a certain quantity of BTC, you can enter the amount directly. But if you want to buy BTC with a certain amount of funds, such as 10,000 USDT, you can use [Total] to place the buy order.</p>
                                <img src={SpotTrading1} alt="ncx-spot-trading" />
                                <p><strong>What is a limit order?</strong></p>
                                <p>A limit order is an order that you place on the order book with a specific limit price. It will not be executed immediately like a market order. Instead, the limit order will only be executed if the market price reaches your limit price (or better). Therefore, you may use limit orders to buy at a lower price or sell at a higher price than the current market price.</p>
                                <p>For example, you place a buy limit order for 1 BTC at $60,000, and the current BTC price is 50,000. Your limit order will be filled immediately at $50,000, as it is a better price than the one you set ($60,000).</p>
                                <p>Similarly, if you place a sell limit order for 1 BTC at $40,000 and the current BTC price is $50,000. The order will be filled immediately at $50,000 because it is a better price than $40,000.</p>
                                <img src={SpotTrading2} alt="ncx-spot-trading" />
                                <p><strong>What is a stop-limit order?</strong></p>
                                <p>A stop-limit order has a stop price and a limit price. You can set the minimum amount of profit you’re happy to take or the maximum you’re willing to spend or lose on a trade. When the trigger price is reached, a limit order will be placed automatically.</p>
                                <p>Stop-limit orders are good tools for limiting the losses that may incur in a trade. For example, BTC is trading at $40,000, and you set up a stop-limit order at a stop price of $39,500 and a limit price of $39,000. A limit order at $39,000 will be placed when the price drops from $40,000 to $39,500.</p>
                                <img src={SpotTrading3} alt="ncx-spot-trading" />
                                <p><strong>What is an OCO (One Cancels the Other) order?</strong></p>
                                <p>A One Cancels the Other (OCO) order, is a combination of a limit order with a stop-limit order. You place two orders at the same time, but as soon as one is triggered, the other order is canceled. Therefore, only one of the orders can be executed.</p>
                                <p>For example, BTC is at $40,000. You can use an OCO order to buy 1 BTC when the price reaches $39,000 or sell it when the price rises to $41,000. One of the orders will be executed first, meaning that the second one is automatically canceled.</p>
                                <p><strong>What is a trailing stop order?</strong></p>
                                <p>A trailing stop order lets you place a pre-set order at a specific percentage away from the market price. It is especially useful when the market swings, which can help you limit the loss and protect gains when a trade does not move in a favorable direction.</p>
                                <p>Please note that the trailing stop order does not move back in the other direction. When the price moves in the opposite direction by a specified percentage, it will close or exit the trade at market price.</p>
                            </div>
                            <div className={toggleState === 2 ? "sprt-content active" : "sprt-content"}>
                                <h2>How to Trade Spot on NCX web</h2>
                            </div>
                            <div className={toggleState === 3 ? "sprt-content active" : "sprt-content"}>
                                <h2>How to Trade Spot on NCX App</h2>
                            </div>
                        </div>
                        <div className="col thest">
                            <ArticleSlider />
                        </div>
                    </div>
                </div>
            </div>

            <MyFooter />

        </div>
    )
}

export default SupportPageSet;