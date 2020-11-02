window.addEventListener('load',()=>{
    let rnd = (max)=>{
			max = Number(max);
			return Math.floor(Math.random() * (max+1));
		}
    class Point{
        constructor(){
            this.x = rnd(500);
            this.y = rnd(500);
            this.red = rnd(255);
            this.green = rnd(255);
            this.blue = rnd(255);
        }
    }
    let time = 0;
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let interval = setInterval(()=>{
        render();
        update();
       
    }, 1);
    let cells = [];
    cells.push(new Point());
    cells.push(new Point());
    cells.push(new Point());
    cells.push(new Point());
    cells.push(new Point());
    cells.push(new Point());
    cells.push(new Point());
    cells.push(new Point());
    cells.push(new Point());
    cells.push(new Point());
    cells.push(new Point());
    cells.push(new Point());
    let update = ()=>{
        cells.forEach(point=>{
            point.x += (Math.round(Math.random()) * -2) + (Math.round(Math.random()) * 2);
            point.y += (Math.round(Math.random()) * -2) + (Math.round(Math.random()) * 2);
            point.red += (Math.round(Math.random()) * -2) + (Math.round(Math.random()) * 2);
            point.green += (Math.round(Math.random()) * -2) + (Math.round(Math.random()) * 2);
            point.blue += (Math.round(Math.random()) * -2) + (Math.round(Math.random()) * 2);
        });
        time++;
    }
    let render = ()=>{
       // ctx.globalAlpha = 0.05;
        ctx.fillStyle = 'black';
        if(!time)ctx.fillRect(0,0,canvas.width,canvas.height);
        cells.forEach(point=>{
            ctx.fillStyle = `rgb(${point.red},${point.green},${point.blue})`
            //ctx.fillRect(point.x,point.y,10,10);
            ctx.beginPath();
            ctx.arc(point.x, point.y, 10, 0, 2 * Math.PI);
            ctx.fill();
        });
    }
    });
