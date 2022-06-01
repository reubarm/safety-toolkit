import { Layout } from "../components/Layout";
import Button from "react-bootstrap/Button";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

export const HomePage = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <Layout wrapperClass="page">
      <AutoplaySlider
        bullets={false}
        play={true}
        cancelOnInteraction={true}
        interval={3000}
        style={{ height: "100vh" }}
      >
        <div style={{ height: "100vh" }}>
          <section
            class="section bg"
          ><div>
            <h1>Journalists Safety Toolkit</h1>
            <h2>Digital violence: Why it cannot be 'part of the job'</h2>
            <p>
              Danger abounds whatever our walk of life. Journalists, however,
              are exposed to particular risks, and in recent years the instances
              of abuse, harassment and attacks they face have sadly been on the
              increase.
            </p>
            <Button
              variant="secondary"
              size="lg"
              href="physical-safety"
              style={{
                height: "50px",
                minWidth: "300px",
                maxWidth: "400px",
                width: "100%",
                margin: "3rem auto 0",
                background: "#23527c",
                fontWeight: "900"
              }}
            >
              View Safety Toolkit
            </Button></div>
          </section>
        </div>
        <div>
          <section class="section"><div>
            <p>
              The National Committee for the Safety of Journalists was
              established in 2020 to investigate and address these challenges,
              and as part of its National Action Plan to stamp out these
              threats, the NUJ and Society of Editors have worked together to
              deliver a Safety Toolkit to help journalists work safely and to
              collectively combat behaviour and actions that serve to put
              journalists at risk and undermine the vital role journalism plays
              in our society.
            </p><br/>      <p>
              Managing these risks is critical if you are to deliver your story,
              be prepared for your next assignment - and get home safely.{" "}
            </p></div>
            <Button
              variant="secondary"
              size="lg"
              href="physical-safety"
              style={{
                height: "50px",
                minWidth: "300px",
                maxWidth: "400px",
                width: "100%",
                margin: "3rem auto 7rem",
                background: "#23527c",
                fontWeight: "900"
              }}
            >
              View Safety Toolkit
            </Button>
          </section>
        </div>
        <div>
          <section class="section"><div>
      
            <p>
              This resource provides clear, simple information and advice, as
              well as signposting journalists to other important resources. An
              important part of this work is to highlight the damage abuse and
              harassment plays, personally and professionally.
            </p>
            <br />
            <p>
              {" "}
              We are committed to ensuring that abuse isn't simply seen as part
              of the job - that makes empowering journalists to report
              harassment and attacks a vital priority so that action can be
              taken against perpetrators.
            </p></div>
            <Button
              variant="secondary"
              size="lg"
              href="physical-safety"
              style={{
                height: "50px",
                minWidth: "300px",
                maxWidth: "400px",
                width: "100%",
                margin: "3rem auto 7rem",
                background: "#23527c",
                fontWeight: "900"
              }}
            >
              View Safety Toolkit
            </Button>
          </section>
        </div>
      </AutoplaySlider>
    </Layout>
  );
};
