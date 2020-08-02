import React, { useState } from 'react';
import image1 from '../images/brian side sq.jpg';
import { Layout } from '../components/Layout';

export const About = () => {
  const [displayed, setDisplayed] = useState(false);

  const contactFormDisplay = () => {
    setDisplayed(!displayed);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    contactFormDisplay();
  };
  return (
    <Layout pageClass="pages about-page" pageTitle="About - BroadCaster">
      <div className="middle">
        <div className="sub-middle">
          <div className="my-info">
            <div className="user-wrapper">
              <div className="user-pic">
                <img src={image1} alt="user pic" />
              </div>
              <div className="user-info">
                <div className="my-name">Brian Gitego</div>
                <div className="my-email">
                  <a href="mailto:gitegob7@gmail.com">gitegob7@gmail.com</a>
                </div>
                <div className="my-address">Kigali, Rwanda</div>
              </div>
            </div>
          </div>
          <div className="about-me">
            <div>
              <h2 className="how-it-works">About Brian</h2>
              Brian is a 21 year old aspiring software engineer in Kigali, Rwanda. He is passionate about programming and is eager to learn and grow
              to be a world class developer.
              <br />
              <br />
              <br />
              <h2 className="how-it-works">About BroadCaster</h2>
              &quot;I developed this product as a project that is part of the application for the Andela fellowship program in Kigali, Rwanda where i
              hope to learn and collaborate with many different people to grow into a world-class developer and make a contribution to my
              community.&quot;
              <br />
              <br />
            </div>
            <div className="feedback">
              <div className="hear-from-u">I&apos;d love to hear from you!</div>
              <button className="contact-us-btn" type="button" button="true" onClick={contactFormDisplay}>
                Contact me
              </button>
              <div className="contact-us-wrapper" style={{ display: displayed ? 'block' : 'none' }}>
                <form onSubmit={handleSubmit}>
                  <input type="email" name="email" className="feedback-email" placeholder="Your email here..." />
                  <textarea name="feedback" className="feedback-text" rows="10" placeholder="How has your experience on BroadCaster been?" />
                  <button type="submit" className="feedback-submit" button="true">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
