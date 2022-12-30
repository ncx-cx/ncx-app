import {React, useState} from "react";
import './trade.css';

function TradePage(){
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const [toggleStatecontent, setToggleStatecontent] = useState(1);
    const toggleTabcontent = (index) => {
        setToggleStatecontent(index);
    };

    return(
        <div id="trade-tabs-sect">
            <div className="buttons-tab">
                <button
                    className={toggleState === 1 ? "trade-tabs active" : "trade-tabs"}
                    onClick={() => toggleTab(1)}
                >
                Crypto
                </button>
                {/* <button
                    className={toggleState === 2 ? "trade-tabs active" : "trade-tabs"}
                    onClick={() => toggleTab(2)}
                >
                Equities
                </button> */}
                <button
                    className={toggleState === 3 ? "trade-tabs active" : "trade-tabs"}
                    onClick={() => toggleTab(3)}
                >
                Forex
                </button>
                <button
                    className={toggleState === 4 ? "trade-tabs active" : "trade-tabs"}
                    onClick={() => toggleTab(4)}
                >
                Metals
                </button>
                <button
                    className={toggleState === 5 ? "trade-tabs active" : "trade-tabs"}
                    onClick={() => toggleTab(5)}
                >
                Indices
                </button>
                <button
                    className={toggleState === 6 ? "trade-tabs active" : "trade-tabs"}
                    onClick={() => toggleTab(6)}
                >
                Energy
                </button>
                <button
                    className={toggleState === 7 ? "trade-tabs active" : "trade-tabs"}
                    onClick={() => toggleTab(7)}
                >
                EFTs
                </button>
            </div>
            <div className="content-tabs">
                <div className={toggleState === 1 ? "trade-content  active" : "trade-content"}>
                    <div className="inner-btntabs">
                        <button
                            className={toggleStatecontent === 1 ? "conttrade-tabs active" : "conttrade-tabs"}
                            onClick={() => toggleTabcontent(1)}
                        >
                        Bitcoin
                        </button>
                        <button
                            className={toggleStatecontent === 2 ? "conttrade-tabs active" : "conttrade-tabs"}
                            onClick={() => toggleTabcontent(2)}
                        >
                        Bitcoin Cash
                        </button>
                        <button
                            className={toggleStatecontent === 3 ? "conttrade-tabs active" : "conttrade-tabs"}
                            onClick={() => toggleTabcontent(3)}
                        >
                        Ethereum
                        </button>
                        <button
                            className={toggleStatecontent === 4 ? "conttrade-tabs active" : "conttrade-tabs"}
                            onClick={() => toggleTabcontent(4)}
                        >
                        Litecoin
                        </button>
                        <button
                            className={toggleStatecontent === 5 ? "conttrade-tabs active" : "conttrade-tabs"}
                            onClick={() => toggleTabcontent(5)}
                        >
                        Ripple
                        </button>
                        <button
                            className={toggleStatecontent === 6 ? "conttrade-tabs active" : "conttrade-tabs"}
                            onClick={() => toggleTabcontent(6)}
                        >
                        Binance Coin
                        </button>
                        <button
                            className={toggleStatecontent === 7 ? "conttrade-tabs active" : "conttrade-tabs"}
                            onClick={() => toggleTabcontent(7)}
                        >
                        Others
                        </button>
                    </div>
                    <div className="innercontent-tabs">
                            <div className={toggleStatecontent === 1 ? "conttrade-content  active" : "conttrade-content"}>
                                <div className="currecny-row">
                                    <div className="currecnycol">
                                        <div className="currecnycol-txt">
                                            <h1>BTC/USD</h1>
                                            <p>Bitcoin/US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BTC/EUR</h1>
                                            <p>Bitcoin/Euro</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BTC/JPY</h1>
                                            <p>Bitcoin/Japanese Yen</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BTC/GBP</h1>
                                            <p>Bitcoin/Great Britain Pound</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BTC/CHF</h1>
                                            <p>Bitcoin/Swiss Franc</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BTC/AUD</h1>
                                            <p>Bitcoin/Australian Dollar</p>
                                        </div>
                                    </div>
                                    <div className="currecnycol">
                                    <div className="currecnycol-txt">
                                            <h1>BTC/NZD</h1>
                                            <p>Bitcoin/New Zealand Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BTC/CAD</h1>
                                            <p>Bitcoin/Canadian Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BTC/ETH</h1>
                                            <p>Bitcoin/Ethereum</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BTC/LTC</h1>
                                            <p>Bitcoin/Litecoin</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BTC/XRP</h1>
                                            <p>Bitcoin/Ripple</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={toggleStatecontent === 2 ? "conttrade-content  active" : "conttrade-content"}>
                                <div className="currecny-row">
                                    <div className="currecnycol">
                                        <div className="currecnycol-txt">
                                            <h1>BCH/USD</h1>
                                            <p>Bitcoin Cash/US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BCH/EUR</h1>
                                            <p>Bitcoin Cash/Euro</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BCH/JPY</h1>
                                            <p>Bitcoin Cash/Japanese Yen</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BCH/GBP</h1>
                                            <p>Bitcoin Cash/Great Britain Pound</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BCH/AUD</h1>
                                            <p>Bitcoin Cash/Australian Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BCH/CAD</h1>
                                            <p>Bitcoin Cash/Canadian Dollar</p>
                                        </div>
                                    </div>
                                    <div className="currecnycol">
                                    <div className="currecnycol-txt">
                                            <h1>BCH/NZD</h1>
                                            <p>Bitcoin Cash/New Zealand Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BCH/BTC</h1>
                                            <p>Bitcoin Cash/Bitcoin</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BCH/ETH</h1>
                                            <p>Bitcoin Cash/Ethereum</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BCH/LTC</h1>
                                            <p>Bitcoin Cash/Litecoin</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BTC/XRP</h1>
                                            <p>Bitcoin Cash/Ripple</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={toggleStatecontent === 3 ? "conttrade-content  active" : "conttrade-content"}>
                                <div className="currecny-row">
                                    <div className="currecnycol">
                                        <div className="currecnycol-txt">
                                            <h1>ETH/USD</h1>
                                            <p>Ethereum/US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>ETH/EUR</h1>
                                            <p>Ethereum/Euro</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>ETH/JPY</h1>
                                            <p>Ethereum/Japanese Yen</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>ETH/GBP</h1>
                                            <p>Ethereum/Great Britain Pound</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>ETH/AUD</h1>
                                            <p>Ethereum/Australian Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>ETH/CAD</h1>
                                            <p>Ethereum/Canadian Dollar</p>
                                        </div>
                                    </div>
                                    <div className="currecnycol">
                                    <div className="currecnycol-txt">
                                            <h1>ETH/NZD</h1>
                                            <p>Ethereum/New Zealand Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>ETH/BTC</h1>
                                            <p>Ethereum/Bitcoin</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>ETH/BCH</h1>
                                            <p>Ethereum/Bitcoin Cash</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>ETH/LTC</h1>
                                            <p>Ethereum/Litecoin</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>ETH/XRP</h1>
                                            <p>Ethereum/Ripple</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={toggleStatecontent === 4 ? "conttrade-content  active" : "conttrade-content"}>
                                <div className="currecny-row">
                                    <div className="currecnycol">
                                        <div className="currecnycol-txt">
                                            <h1>LTC/USD</h1>
                                            <p>Litecoin/US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>LTC/EUR</h1>
                                            <p>Litecoin/Euro</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>LTC/JPY</h1>
                                            <p>Litecoin/Japanese Yen</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>LTC/GBP</h1>
                                            <p>Litecoin/Great Britain Pound</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>LTC/AUD</h1>
                                            <p>Litecoin/Australian Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>LTC/CAD</h1>
                                            <p>Litecoin/Canadian Dollar</p>
                                        </div>
                                    </div>
                                    <div className="currecnycol">
                                    <div className="currecnycol-txt">
                                            <h1>LTC/NZD</h1>
                                            <p>Litecoin/New Zealand Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>LTC/BTC</h1>
                                            <p>Litecoin/Bitcoin</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>LTC/BCH</h1>
                                            <p>Litecoin/Bitcoin Cash</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>LTC/ETH</h1>
                                            <p>Litecoin/Ethereum</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>LTC/XRP</h1>
                                            <p>Litecoin/Ripple</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={toggleStatecontent === 5 ? "conttrade-content  active" : "conttrade-content"}>
                                <div className="currecny-row">
                                    <div className="currecnycol">
                                        <div className="currecnycol-txt">
                                            <h1>XRP/USD</h1>
                                            <p>Ripple/US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>XRP/EUR</h1>
                                            <p>Ripple/Euro</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>XRP/JPY</h1>
                                            <p>Ripple/Japanese Yen</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>XRP/GBP</h1>
                                            <p>Ripple/Great Britain Pound</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>XRP/AUD</h1>
                                            <p>Ripple/Australian Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>XRP/CAD</h1>
                                            <p>Ripple/Canadian Dollar</p>
                                        </div>
                                    </div>
                                    <div className="currecnycol">
                                    <div className="currecnycol-txt">
                                            <h1>XRP/NZD</h1>
                                            <p>Ripple/New Zealand Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>XRP/BTC</h1>
                                            <p>Ripple/Bitcoin</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>XRP/BCH</h1>
                                            <p>Ripple/Bitcoin Cash</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>XRP/ETH</h1>
                                            <p>Ripple/Ethereum</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>XRP/LTC</h1>
                                            <p>Ripple/Litecoin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={toggleStatecontent === 6 ? "conttrade-content  active" : "conttrade-content"}>
                                <div className="currecny-row">
                                    <div className="currecnycol">
                                        <div className="currecnycol-txt">
                                            <h1>BNB/USD</h1>
                                            <p>Binance Coin/US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BNB/EUR</h1>
                                            <p>Binance Coin/Euro</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BNB/JPY</h1>
                                            <p>Binance Coin/Japanese Yen</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BNB/GBP</h1>
                                            <p>Binance Coin/Great Britain Pound</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BNB/AUD</h1>
                                            <p>Binance Coin/Australian Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BNB/CAD</h1>
                                            <p>Binance Coin/Canadian Dollar</p>
                                        </div>
                                    </div>
                                    <div className="currecnycol">
                                    <div className="currecnycol-txt">
                                            <h1>BNB/NZD</h1>
                                            <p>Binance Coin/New Zealand Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BNB/BTC</h1>
                                            <p>Binance Coin/Bitcoin</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BNB/BCH</h1>
                                            <p>Binance Coin/Bitcoin Cash</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BNB/ETH</h1>
                                            <p>Binance Coin/Ethereum</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BNB/LTC</h1>
                                            <p>Binance Coin/Litecoin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={toggleStatecontent === 7 ? "conttrade-content  active" : "conttrade-content"}>
                                <div id="other-col" className="currecny-row">
                                    <div className="currecnycol">
                                        <div className="currecnycol-txt">
                                            <h1>BAT/USD</h1>
                                            <p>Basic Attention Token vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>DSH/USD</h1>
                                            <p>DASH vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>EOS/USD</h1>
                                            <p>EOS vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>ETC/USD</h1>
                                            <p>Ethereum Classic vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>IOT/USD</h1>
                                            <p>IOTA vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>NEO/USD</h1>
                                            <p>Neo vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>OMG/USD</h1>
                                            <p>OmiseGo vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>TRX/USD</h1>
                                            <p>TRON vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>XLM/USD</h1>
                                            <p>Stellar Lumens vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>XMR/USD</h1>
                                            <p>Monero vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>ZEC/USD</h1>
                                            <p>ZCash vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>ADA</h1>
                                            <p>Cardano vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>DOG/USD</h1>
                                            <p>Dogecoin vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>SOL/USD</h1>
                                            <p>Solana vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>DOT/USD</h1>
                                            <p>Polkadot vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>LNK/USD</h1>
                                            <p>Chainlink vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>MTC/USD</h1>
                                            <p>Polygon vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>UNI/USD</h1>
                                            <p>Uniswap vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>ALG/USD</h1>
                                            <p>Algorand vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>FIL/USD</h1>
                                            <p>Filecoin vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>MKR/USD</h1>
                                            <p>Maker vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>SHB/USD</h1>
                                            <p>SHIBA vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>AVA/USD</h1>
                                            <p>Avalanche vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>VEC/USD</h1>
                                            <p>VeChain vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>NER/USD</h1>
                                            <p>NEAR protocol VS US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>ATM/USD</h1>
                                            <p>Cosmos vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>SAN/USD</h1>
                                            <p>The Sandbox vs US Dollar</p>
                                        </div>
                                    </div>
                                    <div className="currecnycol">
                                        <div className="currecnycol-txt">
                                            <h1>SUS/USD</h1>
                                            <p>Sushi vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>AXS/USD</h1>
                                            <p>Axie Infinity vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>CRV/USD</h1>
                                            <p>Curve vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>ONE/USD</h1>
                                            <p>Harmony vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>LRC/USD</h1>
                                            <p>Loopring vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>INC/USD</h1>
                                            <p>1inch vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>XTZ/USD</h1>
                                            <p>Tezos vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>APE/USD</h1>
                                            <p>ApeCoin vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>BAR/USD</h1>
                                            <p>Hedera vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>MAN/USD</h1>
                                            <p>Decentraland vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>TET/USD</h1>
                                            <p>Theta vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>FTM/USD</h1>
                                            <p>Fantom vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>AAV/USD</h1>
                                            <p>AAVE vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>FLW/USD</h1>
                                            <p>FLOW vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>GRT/USD</h1>
                                            <p>The Graph vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>KSM/USD</h1>
                                            <p>Kusama vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>ZIL/USD</h1>
                                            <p>Zilliqa vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>GAL/USD</h1>
                                            <p>GALA vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>CEO/USD</h1>
                                            <p>Celo vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>CHZ/USD</h1>
                                            <p>Chiliz vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>ENJ/USD</h1>
                                            <p>Enjin Coin vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>KAV/USD</h1>
                                            <p>Kava vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>ARW/USD</h1>
                                            <p>Arweave vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>KNC/USD</h1>
                                            <p>Kyber vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>COMP/USD</h1>
                                            <p>Compound vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>XEM/USD</h1>
                                            <p>NEM vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>YFI/USD</h1>
                                            <p>Yearn Finance vs US Dollar</p>
                                        </div>
                                    </div>
                                    <div className="currecnycol">
                                        <div className="currecnycol-txt">
                                            <h1>QTM/USD</h1>
                                            <p>Qtum vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>SNX/USD</h1>
                                            <p>Synthetix vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>EGL/USD</h1>
                                            <p>Elrond vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>SKL/USD</h1>
                                            <p>Skale network vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>ANK/USD</h1>
                                            <p>Ankr vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>SXP/USD</h1>
                                            <p>SXP vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>LPT/USD</h1>
                                            <p>Livepeer vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>IOS/USD</h1>
                                            <p>IOST vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>RVN/USD</h1>
                                            <p>Ravencoin vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>WOO/USD</h1>
                                            <p>WOO Network vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>ONT/USD</h1>
                                            <p>Ontology vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>ZEN/USD</h1>
                                            <p>Horizen vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>IMX/USD</h1>
                                            <p>Immutable X vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>STO/USD</h1>
                                            <p>Storj vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>REN/USD</h1>
                                            <p>Ren vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>CEL/USD</h1>
                                            <p>Celer Network vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>DYD/USD</h1>
                                            <p>DYDX vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>CNE/USD</h1>
                                            <p>C98 vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>PEP/USD</h1>
                                            <p>ConstitutionDAO vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>CHR/USD</h1>
                                            <p>Chromia vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>COT/USD</h1>
                                            <p>COTI vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>ALI/USD</h1>
                                            <p>MyNeighborAlice vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>CTS/USD</h1>
                                            <p>Cartesi vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>RSR/USD</h1>
                                            <p>Reserve Rights vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>ZRX/USD</h1>
                                            <p>0x vs US Dollar</p>
                                        </div>
                                        <div className="currecnycol-txt">
                                            <h1>GMT/USD</h1>
                                            <p>STEPN vs US Dollar</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                {/* <div className={toggleState === 2 ? "trade-content  active" : "trade-content"}>
                    <h2>Two</h2>
                </div> */}
                <div className={toggleState === 3 ? "trade-content  active" : "trade-content"}>
                    <div id="forex-tradecol" className="currecny-row">
                        <div className="currecnycol">
                            <div className="currecnycol-txt">
                                <h1>AUD/CAD</h1>
                                <p>Australian Dollar vs Canadian Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>AUD/CHF</h1>
                                <p>Australian Dollar vs Swiss Franc</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>AUD/DKK</h1>
                                <p>Australian Dollar vs Danish Krone</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>AUD/HUF</h1>
                                <p>Australian Dollar vs Hungarian Forint</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>AUD/JPY</h1>
                                <p>Australian Dollar vs Japanese Yen</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>AUD/NOK</h1>
                                <p>Australian Dollar vs Norwegian Krone</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>AUD/NZD</h1>
                                <p>Australian Dollar vs New Zealand Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>AUD/SEK</h1>
                                <p>Australian Dollar to Swedish Krona</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>AUD/SGD</h1>
                                <p>Australian Dollar vs Singapore Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>AUD/USD</h1>
                                <p>Australian Dollar vs US Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>AUD/ZAR</h1>
                                <p>Australian Dollar vs South African Rand</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>CAD/CHF</h1>
                                <p>Canadian Dollar vs Swiss Franc</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>CAD/DKK</h1>
                                <p>Canadian Dollar vs Danish Krone</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>CAD/JPY</h1>
                                <p>Canadian Dollar vs Japanese Yen</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>CAD/MXN</h1>
                                <p>Canadian Dollar vs Mexican Peso</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>CAD/NOK</h1>
                                <p>Canadian Dollar vs Norwegian Krone</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>CAD/SEK</h1>
                                <p>Canadian Dollar vs Swedish Krona</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>CAD/SGD</h1>
                                <p>Canadian Dollar vs Singapore Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>CHF/DKK</h1>
                                <p>Swiss Frank vs Danish Krone</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>CHF/HUF</h1>
                                <p>Swiss Franc vs Hungarian Forint</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>CHF/JPY</h1>
                                <p>Swiss Frank vs Japanese Yen</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>CHF/NOK</h1>
                                <p>Swiss Franc vs Norwegian Krone</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>CHF/PLN</h1>
                                <p>Swiss Franc vs Polish Zloty</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>CHF/SEK</h1>
                                <p>Swiss Franc to Swedish Krona</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>CHF/SGD</h1>
                                <p>Swiss Frank vs Singapore Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>CHF/ZAR</h1>
                                <p>Swiss Frank vs South African Rand</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>CNH/JPY</h1>
                                <p>Chinese Yuan vs Japanese Yen</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>DKK/NOK</h1>
                                <p>Danish Krone vs Norwegian Krone</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>DKK/SEK</h1>
                                <p>Danish Krone vs Swedish Krona</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>EUR/AUD</h1>
                                <p>Euro vs Australian Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>EUR/CAD</h1>
                                <p>Euro vs Canadian Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>EUR/CHF</h1>
                                <p>Euro vs Swiss Franc</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>EUR/CNH</h1>
                                <p>Euro vs Chinese Yuan Renminbi</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>EUR/CZK</h1>
                                <p>Euro vs Czech koruna</p>
                            </div>
                        </div>
                        <div className="currecnycol">
                            <div className="currecnycol-txt">
                                <h1>EUR/DKK</h1>
                                <p>Euro vs Danish Krone</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>EUR/GBP</h1>
                                <p>Euro vs Great Britain Pound</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>EUR/HKD</h1>
                                <p>Euro vs Hong Kong Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>EUR/HUF</h1>
                                <p>Euro vs Hungarian Forint</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>EUR/ILS</h1>
                                <p>Euro vs Israeli Shekel</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>EUR/JPY</h1>
                                <p>Euro vs Japanese Yen</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>EUR/MXN</h1>
                                <p>Euro vs Mexican Peso</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>EUR/NOK</h1>
                                <p>Euro vs Norway Krone</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>EUR/NZD</h1>
                                <p>Euro vs New Zealand Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>EUR/PLN</h1>
                                <p>Euro vs Polish Zloty</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>EUR/RUB</h1>
                                <p>Euro vs Russian Rouble</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>EUR/SEK</h1>
                                <p>Euro vs Swedish Krona</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>EUR/SGD</h1>
                                <p>Euro vs Singapore Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>EUR/TRY</h1>
                                <p>Euro vs Turkish Lira</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>EUR/USD</h1>
                                <p>Euro vs US Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>EUR/ZAR</h1>
                                <p>Euro vs South Africa Rand</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>USD/ZAR</h1>
                                <p>US Dollar vs South Africa Rand</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>GBP/AUD</h1>
                                <p>Great Britain Pound vs Australian Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>GBP/CAD</h1>
                                <p>Great Britain Pound vs Canadian Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>GBP/CHF</h1>
                                <p>Great Britain Pound vs Swiss Franc</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>GBP/CZK</h1>
                                <p>Great Britain Pound vs Czech Koruna</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>GBP/DKK</h1>
                                <p>Great Britain Pound vs Danish Krone</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>GBP/HKD</h1>
                                <p>Great Britain Pound vs Hong Kong Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>GBP/HUF</h1>
                                <p>Great Britain Pound vs Hungarian Forint</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>GBP/JPY</h1>
                                <p>Great Britain Pound vs Japanese Yen</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>GBP/MXN</h1>
                                <p>Great Britain Pound vs Mexican Peso</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>GBP/NOK</h1>
                                <p>Great Britain Pound vs Norway Krone</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>GBP/NZD</h1>
                                <p>Great Britain Pound vs New Zealand Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>GBP/PLN</h1>
                                <p>Great Britain Pound vs Polish Zloty</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>GBP/SEK</h1>
                                <p>Great Britan Pound vs Swedish Krona</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>GBP/SGD</h1>
                                <p>Great Britain Pound vs Singapore Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>GBP/TRY</h1>
                                <p>Great Britain Pound vs Turkish Lira</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>GBP/USD</h1>
                                <p>Great Britain Pound vs US Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>GBP/ZAR</h1>
                                <p>Great Britain Pound vs South African Rand</p>
                            </div>
                        </div>
                        <div className="currecnycol">
                            <div className="currecnycol-txt">
                                <h1>HKD/JPY</h1>
                                <p>Hong Kong Dollar vs Japanese Yen</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>MXN/JPY</h1>
                                <p>Mexican Peso vs Japanese Yen</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>NOK/JPY</h1>
                                <p>Norwegian Krone vs Japanese Yen</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>NOK/SEK</h1>
                                <p>Norway Krone vs Swedish Krona</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>NZD/CAD</h1>
                                <p>New Zealand Dollar vs Canadian Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>NZD/CHF</h1>
                                <p>New Zealand Dollar vs Swiss Franc</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>NZD/DKK</h1>
                                <p>New Zealand Dollar vs Danish Krone</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>NZD/HUF</h1>
                                <p>New Zealand Dollar vs Hungarian Forint</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>NZD/JPY</h1>
                                <p>New Zealand Dollar vs Japanese Yen</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>NZD/NOK</h1>
                                <p>New Zealand Dollar vs Norway Krone</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>NZD/SEK</h1>
                                <p>New Zealand Dollars vs Swedish Krona</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>NZD/SGD</h1>
                                <p>New Zealand Dollar vs Singapore Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>NZD/USD</h1>
                                <p>New Zealand Dollar vs US Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>SEK/JPY</h1>
                                <p>Swedish Krona vs Japanese Yen</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>SGD/HKD</h1>
                                <p>Singapore Dollar vs Hong Kong Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>SGD/JPY</h1>
                                <p>Singapore Dollar vs Japanese Yen</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>TRY/JPY</h1>
                                <p>New Turkish Lira vs Japanese Yen</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>USD/CAD</h1>
                                <p>US Dollar vs Canadian Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>USD/CHF</h1>
                                <p>US Dollar vs Swiss Franc</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>USD/CNH</h1>
                                <p>US Dollar vs Chinese Yuan Renminbi</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>USD/CZK</h1>
                                <p>US Dollar vs Czech koruna</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>USD/DKK</h1>
                                <p>US Dollar vs Danish Krone</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>USD/HKD</h1>
                                <p>US Dollar vs Hong Kong Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>USD/HUF</h1>
                                <p>US Dollar vs Hungarian Forint</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>USD/ILS</h1>
                                <p>US Dollar vs Israeli Shekel</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>USD/JPY</h1>
                                <p>US Dollar vs Japanese Yen</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>USD/MXN</h1>
                                <p>US Dollar vs Mexican Peso</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>USD/NOK</h1>
                                <p>US Dollar vs Norway Krone</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>USD/PLN</h1>
                                <p>US Dollar vs Polish Zloty</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>USD/RUB</h1>
                                <p>US Dollar vs Russian Rouble</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>USD/SEK</h1>
                                <p>US Dollar vs Swedish Krona</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>USD/SGD</h1>
                                <p>US Dollar vs Singapore Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>USD/THB</h1>
                                <p>US Dollar vs Thai Baht</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>USD/TRY</h1>
                                <p>US Dollar vs Turkish Lira</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 4 ? "trade-content  active" : "trade-content"}>
                    <div className="currecny-row">
                        <div className="currecnycol">
                            <div className="currecnycol-txt">
                                <h1>XAG/AUD</h1>
                                <p>Silver vs Australian Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>XAG/CHF</h1>
                                <p>Silver vs Swiss Franc</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>XAG/EUR</h1>
                                <p>Silver vs Euro</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>XAG/GBP</h1>
                                <p>Silver vs Great Britain Pound</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>XAG/USD</h1>
                                <p>Silver vs US Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>XAU/AUD</h1>
                                <p>Gold vs Australian Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>XAU/CHF</h1>
                                <p>Gold vs Swiss Franc</p>
                            </div>
                        </div>
                        <div className="currecnycol">
                            <div className="currecnycol-txt">
                                <h1>XAU/EUR</h1>
                                <p>Gold vs Euro</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>XAU/GBP</h1>
                                <p>Gold vs Great Britain Pound</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>XAU/USD</h1>
                                <p>Gold vs US Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>XPD/USD</h1>
                                <p>Palladium vs US Dollar </p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>XPT/USD</h1>
                                <p>Platinum vs US Dollar</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>CUC/USD</h1>
                                <p>Copper vs US Dollar</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 5 ? "trade-content  active" : "trade-content"}>
                    <div className="currecny-row">
                        <div className="currecnycol">
                            <div className="currecnycol-txt">
                                <h1>DAXEUR / FDAX</h1>
                                <p>Germany 40 Index</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>F40EUR / CAC</h1>
                                <p>France 40 Index</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>FTSGBP / FTSE</h1>
                                <p>UK 100 Index</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>SMICHF</h1>
                                <p>Switzerland 20 Index</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>ESXEUR</h1>
                                <p>EURO 50 Index</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>IBXEUR</h1>
                                <p>Spain 35 Index</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>DJIUSD</h1>
                                <p>US 30 Index</p>
                            </div>
                        </div>
                        <div className="currecnycol">
                            <div className="currecnycol-txt">
                                <h1>SPXUSD</h1>
                                <p>US 500 Index</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>NDXUSD</h1>
                                <p>US 100 Index</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>NIKJPY / NIK</h1>
                                <p>Japan 225 Index</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>HSIHKD</h1>
                                <p>Hong Kong 50 Index</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>ASXAUD</h1>
                                <p>Australia 200 Index</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>XINUSD</h1>
                                <p>China 50 Index (USD)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 6 ? "trade-content  active" : "trade-content"}>
                    <div className="currecny-row">
                        <div className="currecnycol">
                            <div className="currecnycol-txt">
                                <h1>WTI/USD</h1>
                                <p>Oil - US Crude</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>BRN/USD</h1>
                                <p>Oil - Brent Crude</p>
                            </div>
                        </div>
                        <div className="currecnycol">
                            <div className="currecnycol-txt">
                                <h1>NGC/USD</h1>
                                <p>Natural Gas</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 7 ? "trade-content  active" : "trade-content"}>
                    <div className="currecny-row">
                        <div className="currecnycol">
                            <div className="currecnycol-txt">
                                <h1>GLD</h1>
                                <p>SPDR Gold Trust</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>VOO</h1>
                                <p>Vanguard S&P500</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>IWM</h1>
                                <p>iShares Russell 2000</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>QQQ</h1>
                                <p>Invesco QQQ (Power Shares Trust, Series)</p>
                            </div>
                        </div>
                        <div className="currecnycol">
                            <div className="currecnycol-txt">
                                <h1>VEA</h1>
                                <p>Vanguard FTSE DM</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>SCHD</h1>
                                <p>Schwab US Dividend equity</p>
                            </div>
                            <div className="currecnycol-txt">
                                <h1>USD</h1>
                                <p>United States Oil Fund</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TradePage;