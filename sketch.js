const canvasSketch = require("canvas-sketch");

/*
  EXPORT:
  > canvas-sketch sketch.js --output=output/01
*/
const settings = {
	dimensions: [600, 600],
	pixelsPerInch: 300,
	orientation: "landscape",
};

const sketch = () => {
	return ({ context, width, height }) => {
		context.fillStyle = "black";
		context.fillRect(0, 0, width, height);

		// Gradient foreground
		const fill = context.createLinearGradient(0, 0, width, height);
		fill.addColorStop(0, "cyan");
		fill.addColorStop("0.3", "magenta");
		fill.addColorStop(1, "yellow");

		// Fill rectangle
		context.strokeStyle = fill;
		// context.strokeStyle = "white";

		context.lineWidth = width * 0.005;

		const w = width * 0.1;
		const h = height * 0.1;
		const gap = width * 0.05;

		const ix = width * 0.17;
		const iy = height * 0.17;

		const off = width * 0.05;

		let x, y;

		for (let i = 0; i < 5; i++) {
			for (let j = 0; j < 5; j++) {
				x = ix + (w + gap) * i;
				y = iy + (h + gap) * j;

				console.log(w / 2, h / 2);
				context.translate((w / 2) * 0.001, (h / 2) * 0.001);
				// context.rotate((Math.PI / 180) * 45);

				context.beginPath();

				context.rect(x, y, w, h);
				context.stroke();
				// context.closePath();

				if (Math.random() > 0.5) {
					context.beginPath();
					context.rect(x + off / 2, y + off / 2, w - off, h - off);
					context.stroke();
					// context.closePath();
				}
			}
		}
	};
};

canvasSketch(sketch, settings);
