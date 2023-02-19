import React from "react";
import '../sect_poweredby/powered.css';
import NCXBarCode from '../../../images/ncx-barcode.png';
import { ReactComponent as NCXGoogle } from '../../../images/ncxgoogleplay.svg';
import { ReactComponent as NCXApple } from '../../../images/ncxappstore.svg';
import BuyCryptoVideo from '../../../images/ncx-redrock.mp4';

function NCXAPPSection()
{
    return(
        <div id="powered_by" className="ncxapp-section">
            <div id="ncx_buycrypto_video">
                <div className="desktop">
                    <video 
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        >
                        <source src={BuyCryptoVideo} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div id="buycrypto_container" className="container">
                <div className="row">
                    <div className="col">
                        <div className="apps_barcod">
                            <h1>NCX App The power of Crypto x FinTech in your hands.</h1>
                            <div className="barcodd">
                                <img src={NCXBarCode} alt="NCX Bard Code to Download app" />
                                <p>Scan to Download NCX App</p>
                            </div>
                            <div className="apps-divi">
                                <NCXApple />
                                <NCXGoogle />
                            </div>
                        </div>
                    </div>
                    <div className="col hidden_col">
                        <div className="app-texts-src">
                            <div className="apptexts">
                                <h1>GLOBAL REACH</h1>
                                <p>Powered by MasterCard, Pay at 44 Million Merchant locations Worldwide.</p>
                            </div>
                            <div className="apptexts">
                                <h1>ATM WITHDRAWALS</h1>
                                <p>Turn your Crypto into Cash instantly, use NCX Card across 3.2m ATMs Worldwide.</p>
                            </div>
                            <div className="apptexts">
                                <h1>ONLINE PAYMENTS</h1>
                                <p>Use you card for Online Payments as well as Apple Pay, Google Pay, Samsung Pay, Paypal, and many more.</p>
                            </div>
                            <div className="apptexts">
                                <h1>TOP UP BY CRYPTO</h1>
                                <p>Top Up on the go with one of 80 available Cryptocurrencies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NCXAPPSection;