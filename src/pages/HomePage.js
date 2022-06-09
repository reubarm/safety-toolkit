import { Layout } from "../components/Layout";
import Button from "react-bootstrap/Button";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { AddToHomeScreen } from 'react-pwa-add-to-homescreen';

export const HomePage = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <Layout wrapperClass="page">
      <AddToHomeScreen
      skipFirstVisit={false}
      
       />
      <div className="desktop">
        {/* <div className="fullpage"></div> */}
        <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
          <div
            style={{ "backgroundColor": "#00a7a6", margin: "0", padding: "5rem 0 0" }}
            className="intro center"
          >
            <h6 className="sub-title mb-6" data-aos="fade-up">
              National Union of Journalists &amp; Society of Editors
            </h6>
            <h1 className="title mb-26" data-aos="fade-up">
              Journalists Safety Toolkit
            </h1>
            <h2 className="desc mb-53" data-aos="fade-up">
              Digital violence: Why it cannot be 'part of the job'
            </h2>
            <a
                    href="/physical-safety"
                    className="btn-action style-2 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{
                      color: "#000",
                      textTransform: "none",
                      textDecoration: "none",
                      fontSize: "18px",
                      zIndex: "1",
                      position: "relative",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    View Safety Toolkit
                  </a>
          </div>
          <img src="/images/bg.png" style={{ width: "100%", margin: "0" }} />
        </div>


        <section className="content-section" style={{textAlign: "left", margin: "5rem auto", fontSize: "1.5rem"}} >
          <p>
            <strong>The National Committee for the Safety of Journalists</strong> was established
            in 2020 to investigate and address these challenges, and as part of
            its National Action Plan to stamp out these threats, the NUJ and
            Society of Editors have worked together to deliver a Safety Toolkit
            to help journalists work safely and to collectively combat behaviour
            and actions that serve to put journalists at risk and undermine the
            vital role journalism plays in our society.
          </p>
          <p>
            Managing these risks is critical if you are to deliver your story,
            be prepared for your next assignment - and get home safely.
          </p>
          <p>
            This resource provides clear, simple information and advice, as well
            as signposting journalists to other important resources. An
            important part of this work is to highlight the damage abuse and
            harassment plays, personally and professionally.
          </p>
          <p>
            We are committed to ensuring that abuse isn't simply seen as part of
            the job - that makes empowering journalists to report harassment and
            attacks a vital priority so that action can be taken against
            perpetrators.
          </p>
        </section>
      </div>
      <div className="mobile">
        <AutoplaySlider
          bullets={false}
          play={true}
          cancelOnInteraction={true}
          interval={3000}
          style={{ height: "100vh" }}
        >
          <div style={{ height: "100vh" }}>
          <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
          <div
            style={{ "backgroundColor": "#00a7a6", margin: "0", padding: "5rem 0 0", height: "100vh" }}
            className="intro center"
          >
            <h6 className="sub-title mb-6" data-aos="fade-up">
              National Union of Journalists &amp; Society of Editors
            </h6>
            <h1 className="title mb-26" data-aos="fade-up">
              Journalists Safety Toolkit
            </h1>
            <h2 className="desc mb-53" data-aos="fade-up" >
              Digital violence: Why it cannot be 'part of the job'
            </h2>
            <a
                    href="/physical-safety"
                    className="btn-action style-2 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{
                      color: "#000",
                      textTransform: "none",
                      textDecoration: "none",
                      fontSize: "18px",
                      margin: "0 auto",
                      zIndex: "1",
                      position: "relative",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    View Safety Toolkit
                  </a>
          </div>
          <img src="/images/bg.png" style={{ width: "100%", margin: "0" }} />
        </div>
          </div>
          <div>
            <section className="section" style={{background: "#964E96"}}>
              <div>
                <p>
                  The National Committee for the Safety of Journalists was
                  established in 2020 to investigate and address these
                  challenges, and as part of its National Action Plan to stamp
                  out these threats, the NUJ and Society of Editors have worked
                  together to deliver a Safety Toolkit to help journalists work
                  safely and to collectively combat behaviour and actions that
                  serve to put journalists at risk and undermine the vital role
                  journalism plays in our society.
                </p><br/>
                <p>
                  Managing these risks is critical if you are to deliver your
                  story, be prepared for your next assignment - and get home
                  safely.{" "}
                </p>
              </div>
              <a
                    href="/physical-safety"
                    className="btn-action style-2 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{
                      color: "#000",
                      margin: "3rem auto",
                      textTransform: "none",
                      textDecoration: "none",
                      fontSize: "18px",
                      zIndex: "1",
                      position: "relative",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    View Safety Toolkit
                  </a>
            </section>
          </div>
          <div>
            <section className="section" style={{background: "#686DBB"}}>
              <div>
                <p>
                  This resource provides clear, simple information and advice,
                  as well as signposting journalists to other important
                  resources. An important part of this work is to highlight the
                  damage abuse and harassment plays, personally and
                  professionally.
                </p><br/>
                <p>
                  We are committed to ensuring that abuse isn't simply seen as
                  part of the job - that makes empowering journalists to report
                  harassment and attacks a vital priority so that action can be
                  taken against perpetrators.
                </p>
              </div>        <a
                    href="/physical-safety"
                    className="btn-action style-2 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    style={{
                      color: "#000",
                      textTransform: "none",
                      textDecoration: "none",
                      margin: "3rem auto",
                      fontSize: "18px",
                      zIndex: "1",
                      position: "relative",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    View Safety Toolkit
                  </a>
            </section>
          </div>
        </AutoplaySlider>
      </div>
    </Layout>
  );
};
