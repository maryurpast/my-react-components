import React from "react";
import ReactDOM from "react-dom/client";
import Badge from "./components/Badges/Badge";
import Banner from "./components/Banners/index.jsx";
import Card from "./components/Cards/index.jsx";
import Testimonials from "./components/Testimonials/index.jsx";
import Tooltip from "./components/Tooltip/Tooltip";
import Toast from "./components/Toast/Toast";
import { variants } from "./components/Toast/variants";
import { FaCarSide, FaSmileBeam } from "react-icons/fa";

import "./index.css";

function App() {
  const badgeColors = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];
  return (
    <>
      <h1>My components:</h1>
      {/* Badges */}
      <div className="component badges">
        {badgeColors.map((color) => {
          return (
            <Badge color={color} shape="square" key={color}>
              Badge
            </Badge>
          );
        })}

        {badgeColors.map((color) => {
          return (
            <Badge color={color} shape="pill" key={color}>
              Badge
            </Badge>
          );
        })}
      </div>
      {/* Banners */}
      <div className="component banners">
        {["success", "info", "warning", "error"].map((statusItem) => {
          return (
            <Banner status={statusItem} key={statusItem}>
              <Banner.Title>
                {statusItem.charAt(0).toUpperCase() + statusItem.slice(1)}
              </Banner.Title>
              <Banner.Text />
            </Banner>
          );
        })}
      </div>
      {/* Cards */}
      <div className="component">
        <Card>
          <Card.Icon />
          <Card.Title>Easy Deployment</Card.Title>
          <Card.Text>
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
            magna sit morbi lobortis.
          </Card.Text>
        </Card>
      </div>
      {/* Testimonials */}
      <div className="component">
        <Testimonials>
          <Testimonials.Photo />
          <Testimonials.Text
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. "
            name="May Andersons"
            workplace="Workcation, CTO"
          />
        </Testimonials>
      </div>
      {/* Tooltips */}
      <div className="component">
        <Tooltip
          style="boldPink"
          titleText="Archive notes"
          messageText="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
        >
          <button className="tooltip-btn">Hover Over Me</button>
        </Tooltip>
      </div>
      {/* Toasts */}
      <div className="component toasts">
        {variants.map((variant) => (
          <Toast variant={variant} key={variant.title} />
        ))}
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
