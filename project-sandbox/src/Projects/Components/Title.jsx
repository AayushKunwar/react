import React from "react";

function Title({ text }) {
	return <div className="title text-center">{!text ? "Title" : text}</div>;
}

export default Title;
