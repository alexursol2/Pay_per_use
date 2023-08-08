import React from "react";
import { Background } from "../../components/Background";
import { Eth } from "../../components/Eth";
import { Users } from "../../components/Users";
import { Wallet } from "../../components/Wallet";
import { Plus } from "../../icons/Plus";
import "./style.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="overlap">
        <img className="vector-stroke" alt="Vector stroke" src="/img/vector-36-stroke.svg" />
        <div className="frame">
          <div className="div" />
          <div className="frame-2">
            <div className="frame-3">
              <div className="text-wrapper">Transparent Licensing &amp; Authenticity</div>
              <p className="p">
                Rest assured with our secure smart contracts on the Ethereum blockchain. Every media NFT is verifiably
                licensed, granting you genuine access to the content and ensuring creators receive fair compensation.
              </p>
            </div>
            <div className="frame-3">
              <div className="text-wrapper">One-Time Payments, Endless Entertainment.</div>
              <p className="p">
                Say goodbye to expensive subscriptions. With Pay per use, you only pay for what you watch, unlocking a
                world of affordable and personalized media consumption.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="overlap-group">
        <Background className="background-instance" type="radial" variant="two" variantType="/img/background.svg" />
        <div className="frame-4">
          <div className="frame-5">
            <div className="frame-6">
              <h1 className="unlocking-media-one">
                {" "}
                Unlocking Media,
                <br />
                One Play at a Time!
              </h1>
              <p className="experience-the">
                Experience the Future of Pay-Per-Use Media on the Ethereum Blockchain.
                <br />
                Enjoy Your Favorite Content without Subscriptions - Buy and Watch on Demand!
              </p>
            </div>
            <div className="frame-7">
              <div className="btn">
                <div className="text-wrapper-2">Create</div>
                <Plus className="check-verified" />
              </div>
              <div className="btn-2">
                <div className="text-wrapper-3">Browse Media NFTs</div>
              </div>
            </div>
          </div>
          <div className="media">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="div-2" />
                <img className="polygon" alt="Polygon" src="/img/polygon-1-5.svg" />
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-2">
                <div className="rectangle-wrapper">
                  <div className="rectangle" />
                </div>
                <div className="div-2">
                  <img className="img" alt="Polygon" src="/img/polygon-1-5.svg" />
                </div>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="overlap-group-2">
                <div className="div-2" />
                <img className="polygon" alt="Polygon" src="/img/polygon-1-5.svg" />
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-2">
                <div className="frame-8">
                  <div className="rectangle" />
                </div>
                <div className="div-2">
                  <img className="img" alt="Polygon" src="/img/polygon-1-5.svg" />
                </div>
              </div>
            </div>
            <div className="media-2">
              <div className="overlap-group-2">
                <div className="div-2" />
                <img className="polygon" alt="Polygon" src="/img/polygon-1-5.svg" />
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-2">
                <div className="frame-9">
                  <div className="rectangle" />
                </div>
                <div className="div-2">
                  <img className="img" alt="Polygon" src="/img/polygon-1-5.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-10">
        <div className="frame-11">
          <div className="frame-12">
            <div className="overlap-group-3">
              <div className="frame-13" />
              <div className="frame-14" />
            </div>
            <div className="frame-15">
              <div className="frame-16">
                <div className="text-wrapper-4">Netflix official</div>
                <img className="check-verified" alt="Check verified" src="/img/check-verified-01-9.svg" />
              </div>
              <p className="personalized">
                {" "}
                Personalized streaming like never before - Handpick your favorite Netflix shows as NFTs.
              </p>
              <div className="frame-17">
                <Users className="users-03" users="/img/users-03-1.svg" />
                <div className="text-wrapper-5">3.2 million subscribers</div>
              </div>
            </div>
          </div>
          <div className="frame-12">
            <div className="overlap-group-3">
              <div className="frame-18" />
              <div className="frame-19" />
            </div>
            <div className="frame-15">
              <div className="frame-16">
                <div className="text-wrapper-4">Amazon prime</div>
                <img className="check-verified" alt="Check verified" src="/img/check-verified-01-9.svg" />
              </div>
              <p className="text-wrapper-6">
                Unleash the power of Prime Video with NFT tokens - Instant access to an extensive library of movies and
                TV shows on demand
              </p>
              <div className="frame-17">
                <Users className="users-03" users="/img/users-03-4.svg" />
                <div className="text-wrapper-5">1 million subscribers</div>
              </div>
            </div>
          </div>
          <div className="frame-12">
            <div className="overlap-group-3">
              <div className="frame-20" />
              <div className="frame-21" />
            </div>
            <div className="frame-15">
              <div className="frame-16">
                <div className="text-wrapper-4">Hulu</div>
                <img className="check-verified" alt="Check verified" src="/img/check-verified-01-9.svg" />
              </div>
              <p className="text-wrapper-6">
                Ditch the subscription, embrace NFTs - Watch your desired content on Hulu, one NFT at a time
              </p>
              <div className="frame-17">
                <Users className="users-03" users="/img/users-03-4.svg" />
                <div className="text-wrapper-5">1 million subscribers</div>
              </div>
            </div>
          </div>
          <div className="frame-12">
            <div className="overlap-group-3">
              <div className="frame-22" />
              <div className="frame-23" />
            </div>
            <div className="frame-15">
              <div className="frame-16">
                <div className="frame-24">
                  <div className="text-wrapper-4">Apple tv+</div>
                </div>
                <img className="check-verified" alt="Check verified" src="/img/check-verified-01-9.svg" />
              </div>
              <p className="text-wrapper-6">
                An innovative viewing experience - Discover exclusive Apple originals through NFT access.
              </p>
              <div className="frame-17">
                <Users className="users-03" users="/img/users-03-4.svg" />
                <div className="text-wrapper-5">1 million subscribers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-25">
        <div className="frame-6">
          <div className="frame-26">
            <p className="text-wrapper-7" id="nft">Discover Your Favorite Media NFTs</p>
            <p className="text-wrapper-8">
              Browse an exclusive collection of NFTs representing captivating media content, including sports events,
              live concerts, blockbuster movies, and more.
            </p>
          </div>
        </div>
        <div className="frame-27">
          <div className="frame-28">
            <div className="frame-29">
              <div className="video-player">
                <div className="overlap-group-4">
                  <div className="shadow-overlay" />
                  <div className="overlay" />
                  <div className="video-progress">
                    <div className="overlap-group-5">
                      <div className="background-2" />
                      <div className="buffering">
                        <div className="buffering-progress" />
                      </div>
                      <div className="progress-line" />
                    </div>
                    <img className="play" alt="Play" src="/img/play.svg" />
                  </div>
                  <div className="play-button" />
                </div>
              </div>
              <div className="frame-30">
                <div className="frame-31">
                  <div className="frame-32">
                    <div className="frame-33" />
                    <div className="text-wrapper-9">Haman Territory</div>
                  </div>
                  <div className="frame-wrapper">
                    <div className="frame-34">
                      <Eth className="eth-instance" />
                      <div className="text-wrapper-10">1.2</div>
                    </div>
                  </div>
                </div>
                <div className="frame-32">
                  <div className="text-wrapper-11">3.2M Views</div>
                  <div className="ellipse" />
                  <div className="frame-34">
                    <div className="text-wrapper-11">10 days ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-29">
              <div className="video-player-2">
                <div className="overlap-group-4">
                  <div className="shadow-overlay" />
                  <div className="overlay" />
                  <div className="play-button" />
                </div>
              </div>
              <div className="frame-30">
                <div className="frame-31">
                  <div className="frame-32">
                    <div className="frame-33" />
                    <div className="text-wrapper-9">Haman Territory</div>
                  </div>
                  <div className="frame-wrapper">
                    <div className="frame-34">
                      <Eth className="eth-instance" />
                      <div className="text-wrapper-10">1.2</div>
                    </div>
                  </div>
                </div>
                <div className="frame-32">
                  <div className="text-wrapper-11">3.2M Views</div>
                  <div className="ellipse" />
                  <div className="frame-34">
                    <div className="text-wrapper-11">10 days ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-29">
              <div className="video-player-3">
                <div className="overlap-group-4">
                  <div className="shadow-overlay" />
                  <div className="overlay" />
                  <div className="play-button" />
                </div>
              </div>
              <div className="frame-30">
                <div className="frame-31">
                  <div className="frame-32">
                    <div className="frame-33" />
                    <div className="text-wrapper-9">Haman Territory</div>
                  </div>
                  <div className="frame-wrapper">
                    <div className="frame-34">
                      <Eth className="eth-instance" />
                      <div className="text-wrapper-10">1.2</div>
                    </div>
                  </div>
                </div>
                <div className="frame-32">
                  <div className="text-wrapper-11">3.2M Views</div>
                  <div className="ellipse" />
                  <div className="frame-34">
                    <div className="text-wrapper-11">10 days ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-29">
              <div className="video-player-4">
                <div className="overlap-group-4">
                  <div className="shadow-overlay" />
                  <div className="overlay" />
                  <div className="play-button" />
                </div>
              </div>
              <div className="frame-30">
                <div className="frame-31">
                  <div className="frame-32">
                    <div className="frame-33" />
                    <div className="text-wrapper-9">Haman Territory</div>
                  </div>
                  <div className="frame-wrapper">
                    <div className="frame-34">
                      <Eth className="eth-instance" />
                      <div className="text-wrapper-10">1.2</div>
                    </div>
                  </div>
                </div>
                <div className="frame-32">
                  <div className="text-wrapper-11">3.2M Views</div>
                  <div className="ellipse" />
                  <div className="frame-34">
                    <div className="text-wrapper-11">10 days ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-29">
              <div className="video-player-5">
                <div className="overlap-group-4">
                  <div className="shadow-overlay" />
                  <div className="overlay" />
                  <div className="play-button" />
                </div>
              </div>
              <div className="frame-30">
                <div className="frame-31">
                  <div className="frame-32">
                    <div className="frame-33" />
                    <div className="text-wrapper-9">Haman Territory</div>
                  </div>
                  <div className="frame-wrapper">
                    <div className="frame-34">
                      <Eth className="eth-instance" />
                      <div className="text-wrapper-10">1.2</div>
                    </div>
                  </div>
                </div>
                <div className="frame-32">
                  <div className="text-wrapper-11">3.2M Views</div>
                  <div className="ellipse" />
                  <div className="frame-34">
                    <div className="text-wrapper-11">10 days ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-29">
              <div className="video-player-6">
                <div className="overlap-group-4">
                  <div className="shadow-overlay" />
                  <div className="overlay" />
                  <div className="play-button" />
                </div>
              </div>
              <div className="frame-30">
                <div className="frame-31">
                  <div className="frame-32">
                    <div className="frame-33" />
                    <div className="text-wrapper-9">Haman Territory</div>
                  </div>
                  <div className="frame-wrapper">
                    <div className="frame-34">
                      <Eth className="eth-instance" />
                      <div className="text-wrapper-10">1.2</div>
                    </div>
                  </div>
                </div>
                <div className="frame-32">
                  <div className="text-wrapper-11">3.2M Views</div>
                  <div className="ellipse" />
                  <div className="frame-34">
                    <div className="text-wrapper-11">10 days ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-3">
            <div className="text-wrapper-2">Browse More</div>
          </div>
        </div>
      </div>
      <div className="frame-35">
        <div className="frame-36">
          <div className="text-wrapper-12">Top creators over</div>
          <div className="text-wrapper-13">last 7 days</div>
        </div>
        <div className="frame-37">
          <div className="frame-38">
            <img className="line" alt="Line" src="/img/line-8.svg" />
            <div className="frame-39">
              <div className="frame-40">
                <div className="frame-41" />
                <div className="frame-42">
                  <div className="frame-43">
                    <div className="text-wrapper-14">Netflix official</div>
                    <img className="check-verified" alt="Check verified" src="/img/check-verified-01-9.svg" />
                  </div>
                  <div className="frame-32">
                    <div className="frame-34">
                      <Eth className="eth-instance" />
                      <div className="text-wrapper-11">6 438.16</div>
                    </div>
                    <div className="ellipse" />
                    <div className="frame-34">
                      <div className="text-wrapper-11">$146,986,365.04</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-44">
                <Users className="users-03" users="/img/users-03-10.svg" />
                <div className="text-wrapper-15">3.2M</div>
              </div>
            </div>
            <img className="line-2" alt="Line" src="/img/line-8.svg" />
            <div className="frame-39">
              <div className="frame-40">
                <div className="frame-45" />
                <div className="frame-42">
                  <div className="frame-43">
                    <div className="text-wrapper-14">Amazon Prime</div>
                    <img className="check-verified" alt="Check verified" src="/img/check-verified-01-9.svg" />
                  </div>
                  <div className="frame-32">
                    <div className="frame-34">
                      <Eth className="eth-instance" />
                      <div className="text-wrapper-11">6 438.16</div>
                    </div>
                    <div className="ellipse" />
                    <div className="frame-34">
                      <div className="text-wrapper-11">$146,986,365.04</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-44">
                <Users className="users-03" users="/img/users-03-10.svg" />
                <div className="text-wrapper-15">3.2M</div>
              </div>
            </div>
            <img className="line-2" alt="Line" src="/img/line-8.svg" />
            <div className="frame-39">
              <div className="frame-40">
                <div className="frame-46" />
                <div className="frame-42">
                  <div className="frame-43">
                    <div className="text-wrapper-14">Hulu official</div>
                    <img className="check-verified" alt="Check verified" src="/img/check-verified-01-9.svg" />
                  </div>
                  <div className="frame-32">
                    <div className="frame-34">
                      <Eth className="eth-instance" />
                      <div className="text-wrapper-11">6 438.16</div>
                    </div>
                    <div className="ellipse" />
                    <div className="frame-34">
                      <div className="text-wrapper-11">$146,986,365.04</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-44">
                <Users className="users-03" users="/img/users-03-10.svg" />
                <div className="text-wrapper-15">3.2M</div>
              </div>
            </div>
            <img className="line-2" alt="Line" src="/img/line-8.svg" />
          </div>
          <div className="frame-38">
            <img className="line" alt="Line" src="/img/line-8.svg" />
            <div className="frame-39">
              <div className="frame-40">
                <div className="frame-47" />
                <div className="frame-42">
                  <div className="frame-43">
                    <div className="text-wrapper-14">Naruto TV</div>
                    <img className="check-verified" alt="Check verified" src="/img/check-verified-01-9.svg" />
                  </div>
                  <div className="frame-32">
                    <div className="frame-34">
                      <Eth className="eth-instance" />
                      <div className="text-wrapper-11">6 438.16</div>
                    </div>
                    <div className="ellipse" />
                    <div className="frame-34">
                      <div className="text-wrapper-11">$146,986,365.04</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-44">
                <Users className="users-03" users="/img/users-03-10.svg" />
                <div className="text-wrapper-15">3.2M</div>
              </div>
            </div>
            <img className="line-2" alt="Line" src="/img/line-8.svg" />
            <div className="frame-39">
              <div className="frame-40">
                <div className="frame-48" />
                <div className="frame-42">
                  <div className="frame-43">
                    <div className="text-wrapper-14">DC Comics</div>
                    <img className="check-verified" alt="Check verified" src="/img/check-verified-01-9.svg" />
                  </div>
                  <div className="frame-32">
                    <div className="frame-34">
                      <Eth className="eth-instance" />
                      <div className="text-wrapper-11">6 438.16</div>
                    </div>
                    <div className="ellipse" />
                    <div className="frame-34">
                      <div className="text-wrapper-11">$146,986,365.04</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-44">
                <Users className="users-03" users="/img/users-03-10.svg" />
                <div className="text-wrapper-15">3.2M</div>
              </div>
            </div>
            <img className="line-2" alt="Line" src="/img/line-8.svg" />
            <div className="frame-39">
              <div className="frame-40">
                <div className="frame-49" />
                <div className="frame-42">
                  <div className="frame-43">
                    <div className="text-wrapper-14">Mr Beast</div>
                    <img className="check-verified" alt="Check verified" src="/img/check-verified-01-9.svg" />
                  </div>
                  <div className="frame-32">
                    <div className="frame-34">
                      <Eth className="eth-instance" />
                      <div className="text-wrapper-11">6 438.16</div>
                    </div>
                    <div className="ellipse" />
                    <div className="frame-34">
                      <div className="text-wrapper-11">$146,986,365.04</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-44">
                <Users className="users-03" users="/img/users-03-10.svg" />
                <div className="text-wrapper-15">3.2M</div>
              </div>
            </div>
            <img className="line-2" alt="Line" src="/img/line-8.svg" />
          </div>
        </div>
      </div>
      <div className="frame-50">
        <div className="frame-51">
          <div className="text-wrapper-16">Discord</div>
          <div className="text-wrapper-17">Twitter</div>
          <div className="text-wrapper-18">About</div>
          <div className="text-wrapper-19">Blog</div>
          <div className="text-wrapper-19">Brand assets</div>
        </div>
        <div className="frame-52">
          <img className="logo" alt="Logo" src="/img/logo.svg" />
          <p className="text-wrapper-20">Connecting competent tech and web3 talents to the best recruiters.</p>
        </div>
        <div className="frame-53">
          <div className="join-our-newsletter">
            <span className="span">
              Join our
              <br />
            </span>
            <span className="text-wrapper-21">Newsletter</span>
          </div>
          <div className="frame-54">
            <div className="frame-55">
              <div className="text-wrapper-22">Email</div>
            </div>
            <div className="frame-56">
              <div className="text-wrapper-23">Submit</div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-page-navbar">
        <div className="nav-bar">
          <img className="logo" alt="Logo" src="/img/logo-1.svg" />
          <div className="nav">
            <div className="nav-options">
              <div className="text-wrapper-24">Home</div>
              <div className="text-wrapper-25">Create</div>
              <div className="text-wrapper-25">My Profile</div>
            </div>
            <div className="btn-4">
              <div className="text-wrapper-26">Connect wallet</div>
              <Wallet className="wallet-01" wallet="/img/wallet-01-1.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
