import React from "react";

type ContainerPdfProps = {
	children: React.ReactNode;
};

export const ContainerPdf = ({ children }: ContainerPdfProps) => {
	return (
		<div
			style={{
				width: "595px",
				height: "842px",
				border: "solid",
			}}
		>
			{children}
		</div>
	);
};
