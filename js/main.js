(function () {
  let can1 = document.getElementById('canvas1');
  let can2 = document.getElementById('canvas2');
  let can3 = document.getElementById('canvas3');
  let can4 = document.getElementById('canvas4');

  let spanProcent1 = document.getElementById('procent1');
  let spanProcent2 = document.getElementById('procent2');
  let spanProcent3 = document.getElementById('procent3');
  let spanProcent4 = document.getElementById('procent4');

  let ctx1 = can1.getContext('2d');
  let ctx2 = can2.getContext('2d');
  let ctx3 = can3.getContext('2d');
  let ctx4 = can4.getContext('2d');

  let posX1 = can1.width / 2,
      posY1 = can1.height / 2;
  let posX2 = can2.width / 2,
      posY2 = can2.height / 2;
  let posX3 = can3.width / 2,
      posY3 = can3.height / 2;
  let posX4 = can4.width / 2,
      posY4 = can4.height / 2,
      procent = 0,
      oneProcent = 360 / 100,
      result1 = oneProcent * 67;
      result2 = oneProcent * 46;
      result3 = oneProcent * 15;
      result4 = oneProcent * 67;


  let circle1_color = '#E2FBD7',
      circle1_str = "#34B53A";
  let circle2_color = '#DAD7FE',
      circle2_str = "#4339F2";
  let circle3_color = '#FFE5D3',
      circle3_str = "#FF3A29";
  let circle4_color = '#CCF8FE',
      circle4_str = "#02A0FC";

  ctx1.lineCap = 'round';
  ctx2.lineCap = 'round';
  ctx3.lineCap = 'round';
  ctx4.lineCap = 'round';


  arcMove(ctx1, can1, result1, posX1, posY1, spanProcent1, circle1_color, circle1_str);
  arcMove(ctx2, can2, result2, posX2, posY2, spanProcent2, circle2_color, circle2_str);
  arcMove(ctx3, can3, result3, posX3, posY3, spanProcent3, circle3_color, circle3_str);
  arcMove(ctx4, can4, result4, posX4, posY4, spanProcent4, circle4_color, circle4_str);



  function arcMove(ctx, can, result, posX, posY, spanProcent, circle_color, circle_str) {
      let deegres = 0;
      let acrInterval = setInterval(function () {
          deegres += 1;
          ctx.clearRect(00, 0, can.width, can.height);
          procent = deegres / oneProcent;

          spanProcent.innerHTML = procent.toFixed();

          ctx.beginPath();
          ctx.arc(posX, posY, 40, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + 360));
          ctx.strokeStyle = circle_color;
          ctx.fillStyle = circle_color;
          ctx.fill();
          ctx.lineWidth = '6';
          ctx.stroke();

          ctx.beginPath();
          ctx.strokeStyle = circle_str;
          ctx.fill();
          ctx.lineWidth = '6';
          ctx.arc(posX, posY, 40, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + deegres));
          ctx.stroke();
          if (deegres >= result) clearInterval(acrInterval);
      }, 5);

  }

})()