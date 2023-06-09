import {React} from "react";
import './style.css';
import Button from "@mui/material/Button";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import CryptoCard1 from '../../../images/crypto_card_1.png';
import CryptoCard2 from '../../../images/crypto_card_2.png';
import { useTranslation } from "react-i18next";
import { ReactComponent as AboutLogo } from '../../../images/about_logo.svg';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { ReactComponent as OTC1 } from '../../../images/about-1.svg';
import { ReactComponent as OTC2 } from '../../../images/about-2.svg';
import { ReactComponent as OTC3 } from '../../../images/about-3.svg';
import { ReactComponent as OTC4 } from '../../../images/about-4.svg';
import { ReactComponent as OTC5 } from '../../../images/about-5.svg';
import { ReactComponent as OTC6 } from '../../../images/about-6.svg';
import {ReactComponent as SafeArrow} from '../../../images/safe-arrow.svg';
import NCXAppvideo from '../../../images/ncx_app_vi.mp4';
import OTCMobileVideo from '../../../images/qwqwqw.mp4';
import VideSection from '../../../images/home__newvideo.mp4';


function FirstVideo()
{
    const { t } = useTranslation();

    return(
        <div id="ncx_cryptoCard" className="crypto_card">
            {/* <div className="ambassador_card row">
                <div className="col card_txt">
                    <div className="inns-div">
                        <h1>Large trades</h1>
                        <h1 className="border-bv">with NCX</h1>
                        <h1>OTC Desk</h1>
                        <div className="bbttn">
                            <Button href="#" className="card_apply">{t("contact_us")}</Button>
                            <Button href="#" className="card_learn">{t("learn_more")}</Button>
                        </div>
                    </div>
                </div>
                <div className="col card_imga">
                    <img src={CryptoCard2} alt="ncx_crypto_card" />
                </div>
                <div className="col card_imgb">
                    <video
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        >
                        <source src={NCXAppvideo} type="video/mp4" />
                    </video>
                </div>
            </div> */}

            <div className="new__ambass">
                <div className="desktop">
                    <video 
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        preload="auto"
                        // poster="https://ncx.cx/images/ncx_redrok_poster.png"
                        >
                        <source src={VideSection} type="video/mp4" />
                    </video>
                </div>
                <div className="container">
                    <div className="insse">
                        <h1>{t("ncx_over_the_counter_otc_trade_in_large_blocks_with_competitive_rates")}</h1>
                        <Button href="mailto: support@ncx.cx">{t("apply")}</Button>
                    </div>
                </div>
            </div>


            <div id="mobileSlider">
                <video
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    >
                    <source src={OTCMobileVideo} type="video/mp4" />
                </video>
                {/* <CarouselProvider
                        visibleSlides={1}
                        totalSlides={2}
                        step={1}
                        naturalSlideWidth={300}
                        naturalSlideHeight={400}
                        // hasMasterSpinner
                        isPlaying={true}
                        interval={3000}
                        orientation="horizontal"
                        infinite
                        playDirection="forward"
                    >
                    <Slider className="slider">
                        <Slide index={0}>
                            <img src={CryptoCard2} alt="ncx_crypto_card" />
                        </Slide>
                        <Slide index={1}>
                            <img src={CryptoCard1} alt="ncx_crypto_card" />
                        </Slide>
                    </Slider>
                    <ButtonBack className="age"><div className="circle"></div></ButtonBack>
                    <ButtonNext className="pich"><div className="circle"></div></ButtonNext>
                </CarouselProvider> */}
                <div className="col card_txt">
                    <div className="inns-div">
                        <h1>Large trades with NCX OTC Desk</h1>
                        {/* <h1 className="border-bv">with NCX</h1>
                        <h1></h1> */}
                        {/* <div className="bbttn">
                            <Button href="#" className="card_apply">{t("contact_us")}</Button>
                            <Button href="#" className="card_learn">{t("learn_more")}</Button>
                        </div> */}
                    </div>
                </div>
            </div>


            <div className="otc__tx">
                <div className="container">
                    <div className="trading_col">
                        <div className="about_logo">
                            <AboutLogo />
                            <h1>{t("otc")}</h1>
                        </div>
                    </div>

                    <div className="tx__ff">
                        <div className="col">
                            <p>{t("why_choose_otc_text_1")}</p>
                            <p>{t("why_choose_otc_text_2")}</p>
                            <p>{t("why_choose_otc_text_3")}</p>
                        </div>
                        <div className="col">
                            <div className="txx_grad">
                                <div className="arrow__sff">
                                    <h3>Trade in large blocks with competitive rates</h3>
                                    <SafeArrow />
                                </div>
                                <h1>NCX Over-the-Counter (OTC)</h1>
                                <p>OTC or over-the-counter trading is a method of trading crypto typically reserved for institutions and high-volume traders.  NCX OTC Desk executes large trades for big buyers who need significant liquidity.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="institutional_about">
                <div className="container">
                    <div className="OTCsect one row">
                        <div className="col">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otc-linediv">
                                    <div className="otc-line"></div>
                                </div>
                                <div className="txtimgsect">
                                    <div className="otctxt">
                                        <h2>{t("security")}</h2>
                                        <p>{t("security_text")}</p>
                                    </div>
                                    <div className="otc-image">
                                        <OTC4 />
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                        <div className="col">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otc-linediv">
                                    <div className="otc-line"></div>
                                </div>
                                <div className="txtimgsect">
                                    <div className="otctxt">
                                        <h2>{t("regulatory_compliance")}</h2>
                                        <p>{t("trading_advantages_text1")}</p>
                                    </div>
                                    <div className="otc-image">
                                        <OTC5 />
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                        <div className="col">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otc-linediv">
                                    <div className="otc-line"></div>
                                </div>
                                <div className="txtimgsect">
                                    <div className="otctxt">
                                        <h2>{t("zero_fees")}</h2>
                                        <p>{t("zero_fees_text")}</p>
                                    </div>
                                    <div className="otc-image">
                                        <OTC6 />
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                
                    <div className="OTCsect second row">
                        <div className="col">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otc-linediv">
                                    <div className="otc-line"></div>
                                </div>
                                <div className="txtimgsect">
                                    <div className="otctxt">
                                        <h2>{t("fast_settlement")}</h2>
                                        <p>{t("fast_settlement_text")}</p>
                                    </div>
                                    <div className="otc-image">
                                        <OTC1 />
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                        <div className="col">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otc-linediv">
                                    <div className="otc-line"></div>
                                </div>
                                <div className="txtimgsect">
                                    <div className="otctxt">
                                        <h2>{t("wide_coverage")}</h2>
                                        <p>{t("wide_coverage_text")}</p>
                                    </div>
                                    <div className="otc-image">
                                        <OTC2 />
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                        <div className="col">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otc-linediv">
                                    <div className="otc-line"></div>
                                </div>
                                <div className="txtimgsect">
                                    <div className="otctxt">
                                        <h2>{t("professional_service")}</h2>
                                        <p>{t("professional_service_text")}</p>
                                    </div>
                                    <div className="otc-image">
                                        <OTC3 />
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>

                    <div className="OTCsect one mobile row re__ddsss">
                        <div className="col">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otc-linediv">
                                    <div className="otc-line"></div>
                                </div>
                                <div className="txtimgsect">
                                    <div className="otctxt">
                                        <h2>{t("security")}</h2>
                                        <p>{t("security_text")}</p>
                                    </div>
                                    <div className="otc-image">
                                        <OTC4 />
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                        <div className="col">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otc-linediv">
                                    <div className="otc-line"></div>
                                </div>
                                <div className="txtimgsect">
                                    <div className="otctxt">
                                        <h2>{t("zero_fees")}</h2>
                                        <p>{t("zero_fees_text")}</p>
                                    </div>
                                    <div className="otc-image">
                                        <OTC6 />
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>

                    <div className="OTCsect one mobile row ew__desss">
                        <div className="col">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otc-linediv">
                                    <div className="otc-line"></div>
                                </div>
                                <div className="txtimgsect">
                                    <div className="otctxt">
                                        <h2>{t("regulatory_compliance")}</h2>
                                        <p>{t("trading_advantages_text1")}</p>
                                    </div>
                                    <div className="otc-image">
                                        <OTC5 />
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                        <div className="col">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otc-linediv">
                                    <div className="otc-line"></div>
                                </div>
                                <div className="txtimgsect">
                                    <div className="otctxt">
                                        <h2>{t("fast_settlement")}</h2>
                                        <p>{t("fast_settlement_text")}</p>
                                    </div>
                                    <div className="otc-image">
                                        <OTC1 />
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>

                    <div className="OTCsect one mobile row qw_dssc">
                        <div className="col">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otc-linediv">
                                    <div className="otc-line"></div>
                                </div>
                                <div className="txtimgsect">
                                    <div className="otctxt">
                                        <h2>{t("wide_coverage")}</h2>
                                        <p>{t("wide_coverage_text")}</p>
                                    </div>
                                    <div className="otc-image">
                                        <OTC2 />
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                        <div className="col">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otc-linediv">
                                    <div className="otc-line"></div>
                                </div>
                                <div className="txtimgsect">
                                    <div className="otctxt">
                                        <h2>{t("professional_service")}</h2>
                                        <p>{t("professional_service_text")}</p>
                                    </div>
                                    <div className="otc-image">
                                        <OTC3 />
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </div>


            <div className="why__choose__Otc">
                <div className="container">
                    <h1 className="why__otc">{t("why_choose_otc")}</h1>
                    {/* <h3 className="mbl__why_otc">Why Choose</h3>
                    <h3 className="mbl__why_otc line">NCX OTC</h3> */}
                    {/* <h1 className="why__otc">Why choose NCX OTC</h1> */}
                    <div className="row">
                        <div className="col first">
                            <div className="cho__log">
                                <p>{t("block_trades")}</p>
                                <SafeArrow />
                            </div>
                            <h1>{t("block_trades_text")}</h1>
                        </div>
                        <div className="col second">
                            <div className="cho__log">
                                <p>{t("competitive_rates")}</p>
                                <SafeArrow />
                            </div>
                            <h1>{t("competitive_rates_text")}</h1>
                        </div>
                        <div className="col">
                            <div className="cho__log">
                                <p>{t("fast_settlement")}</p>
                                <SafeArrow />
                            </div>
                            <h1>{t("otc_fast_settlement_text")}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FirstVideo;