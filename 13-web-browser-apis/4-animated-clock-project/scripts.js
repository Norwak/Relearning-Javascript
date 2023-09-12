const faceColor = document.getElementById('face-color');
const borderColor = document.getElementById('border-color');
const lineColor = document.getElementById('line-color');
const largeHandColor = document.getElementById('large-hand-color');
const secondHandColor = document.getElementById('second-hand-color');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function clock() {
  const now = new Date();

  // Setup canvas
  ctx.save(); // save the default state
  ctx.clearRect(0, 0, 500, 500);
  ctx.translate(250, 250); // Put 0,0 in the middle
  ctx.rotate(-Math.PI / 2); // Rotate clock -90 degrees

  // Set default style
  ctx.strokeStyle = '#000000';
  ctx.fillStyle = '#f4f4f4';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';

  // Draw clock face/border
  ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = borderColor.value;
    ctx.fillStyle = faceColor.value;
    ctx.arc(0, 0, 142, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
  ctx.restore();

  // Draw hour lines
  ctx.save();
    ctx.strokeStyle = lineColor.value;
    for (let i = 1; i <= 12; i++) {
      ctx.beginPath();
      ctx.rotate(Math.PI / 6);
      ctx.moveTo(100, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
  ctx.restore();

  // Draw minute lines
  ctx.save();
    ctx.lineWidth = 4;
    ctx.strokeStyle = lineColor.value;
    for (let i = 1; i <= 60; i++) {
      ctx.rotate(Math.PI / 30);
      if (i % 5 === 0) continue;
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
  ctx.restore();

  // Get current time
  const hr = now.getHours() % 12;
  const min = now.getMinutes();
  const sec = now.getSeconds();
  console.log(`${hr}:${min}:${sec}`);

  // Draw hour hard
  ctx.save();
    ctx.rotate((Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
    ctx.strokeStyle = largeHandColor.value;
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
  ctx.restore();

  // Draw minute hard
  ctx.save();
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    ctx.strokeStyle = largeHandColor.value;
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(112, 0);
    ctx.stroke();
  ctx.restore();

  // Draw second hard
  ctx.save();
    ctx.rotate((Math.PI / 30) * sec);
    ctx.strokeStyle = secondHandColor.value;
    ctx.fillStyle = secondHandColor.value;
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(100, 0);
    ctx.stroke();

    ctx.beginPath(0);
    ctx.arc(0, 0, 10, 0, Math.PI * 2);
    ctx.fill();
  ctx.restore();

  ctx.restore(); // restore default state

  requestAnimationFrame(clock);
}

requestAnimationFrame(clock);

document.getElementById('save-btn').addEventListener('click', function() {
  const dataURL = canvas.toDataURL('image/png');
  const link = document.createElement('A');
  link.setAttribute('download', 'clock.png');
  link.setAttribute('href', dataURL);
  link.setAttribute('target', '_blank');
  link.click();
});