import React from "react";
import "./style.css";
import Card from "../../../components/UI/Card";
import "./style.sass";

/**
 * @author
 * @function RecentPosts
 **/

const RecentPosts = props => {
  return (
    <div style={props.style}>
      <Card style={{ marginBottom: "20px" }}>
        <div className="postImageWrapper">
          <img
            src={
              "https://www.dasgerstl.com/fileadmin/_processed_/1/6/csm_das_Gerstl_Zimmer_Fitness__15_von_43__fbac523d46.jpg"
            }
            alt=""
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <span>Featured</span>

          <h2>Fitness Mantra To Live Fit Life</h2>

          <p className="textan">
            Midst first it, you're multiply divided. There don't, second his one
            given the he one third rule fruit, very. Fill. Seed give firm...
            Extremity direction existence as Dashwood's do up. Securing Marianne
            led welcomed offended but offering six rapt...
          </p>
          <br />
          <br />

          <button className="try">Read more ➡️</button>

          <br />
          <br />
        </div>
      </Card>
    </div>
  );
};

export default RecentPosts;
