import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './BFS.css';

var DUMMY_OBSTACLES = ['{"q":6,"r":9,"s":-15}','{"q":7,"r":8,"s":-15}','{"q":7,"r":7,"s":-14}','{"q":8,"r":6,"s":-14}','{"q":8,"r":5,"s":-13}','{"q":9,"r":4,"s":-13}','{"q":5,"r":9,"s":-14}','{"q":4,"r":9,"s":-13}','{"q":3,"r":9,"s":-12}','{"q":2,"r":9,"s":-11}','{"q":1,"r":9,"s":-10}','{"q":0,"r":9,"s":-9}','{"q":-1,"r":9,"s":-8}','{"q":-2,"r":9,"s":-7}','{"q":-3,"r":9,"s":-6}','{"q":-4,"r":9,"s":-5}','{"q":-5,"r":9,"s":-4}','{"q":-6,"r":9,"s":-3}','{"q":-7,"r":9,"s":-2}','{"q":-8,"r":9,"s":-1}','{"q":-9,"r":9,"s":0}','{"q":-11,"r":9,"s":2}','{"q":-10,"r":9,"s":1}','{"q":-12,"r":9,"s":3}','{"q":-13,"r":9,"s":4}','{"q":-14,"r":9,"s":5}','{"q":-15,"r":9,"s":6}','{"q":-15,"r":8,"s":7}','{"q":-14,"r":7,"s":7}','{"q":-14,"r":6,"s":8}','{"q":-13,"r":5,"s":8}',
    '{"q":-13,"r":4,"s":9}','{"q":-12,"r":3,"s":9}','{"q":-12,"r":2,"s":10}','{"q":-11,"r":1,"s":10}','{"q":-11,"r":0,"s":11}','{"q":-10,"r":-1,"s":11}','{"q":-10,"r":-2,"s":12}','{"q":-9,"r":-3,"s":12}','{"q":-9,"r":-4,"s":13}','{"q":-8,"r":-5,"s":13}','{"q":-8,"r":-6,"s":14}','{"q":-7,"r":-7,"s":14}','{"q":-7,"r":-8,"s":15}','{"q":-6,"r":-9,"s":15}','{"q":-5,"r":-9,"s":14}','{"q":-4,"r":-9,"s":13}','{"q":-3,"r":-9,"s":12}','{"q":-2,"r":-9,"s":11}','{"q":-1,"r":-9,"s":10}','{"q":0,"r":-9,"s":9}','{"q":1,"r":-9,"s":8}','{"q":2,"r":-9,"s":7}','{"q":3,"r":-9,"s":6}','{"q":4,"r":-9,"s":5}','{"q":5,"r":-9,"s":4}','{"q":6,"r":-9,"s":3}','{"q":7,"r":-9,"s":2}','{"q":8,"r":-9,"s":1}','{"q":9,"r":-9,"s":0}','{"q":10,"r":-9,"s":-1}','{"q":11,"r":-9,"s":-2}',
    '{"q":12,"r":-9,"s":-3}','{"q":13,"r":-9,"s":-4}','{"q":14,"r":-9,"s":-5}','{"q":15,"r":-9,"s":-6}','{"q":15,"r":-8,"s":-7}','{"q":14,"r":-7,"s":-7}','{"q":14,"r":-6,"s":-8}','{"q":13,"r":-5,"s":-8}','{"q":13,"r":-4,"s":-9}','{"q":12,"r":-3,"s":-9}','{"q":12,"r":-2,"s":-10}','{"q":11,"r":-1,"s":-10}','{"q":11,"r":0,"s":-11}','{"q":10,"r":1,"s":-11}','{"q":10,"r":2,"s":-12}','{"q":9,"r":3,"s":-12}','{"q":-2,"r":-8,"s":10}','{"q":-3,"r":-7,"s":10}','{"q":-4,"r":-6,"s":10}','{"q":-5,"r":-5,"s":10}','{"q":-6,"r":-4,"s":10}','{"q":-7,"r":-4,"s":11}','{"q":4,"r":-7,"s":3}','{"q":3,"r":-6,"s":3}','{"q":2,"r":-5,"s":3}','{"q":1,"r":-4,"s":3}','{"q":2,"r":-4,"s":2}','{"q":3,"":-4,"s":1}',
    '{"q":4,"r":-4,"s":0}','{"q":9,"r":-3,"s":-6}','{"q":10,"r":-3,"s":-7}','{"q":8,"r":-2,"s":-6}','{"q":7,"r":-2,"s":-5}','{"q":4,"r":-2,"s":-2}','{"q":4,"r":-1,"s":-3}','{"q":4,"r":0,"s":-4}','{"q":4,"r":1,"s":-5}','{"q":3,"r":2,"s":-5}','{"q":2,"r":3,"s":-5}','{"q":1,"r":4,"s":-5}','{"q":0,"r":5,"s":-5}','{"q":-1,"r":6,"s":-5}','{"q":-2,"r":7,"s":-5}','{"q":4,"r":5,"s":-9}','{"q":4,"r":6,"s":-10}','{"q":5,"r":6,"s":-11}','{"q":5,"r":7,"s":-12}','{"q":-5,"r":7,"s":-2}','{"q":-5,"r":8,"s":-3}','{"q":-5,"r":6,"s":-1}','{"q":-5,"r":5,"s":0}','{"q":-4,"r":4,"s":0}','{"q":-3,"r":3,"s":0}','{"q":-5,"r":3,"s":2}','{"q":-6,"r":4,"s":2}',
    '{"q":-4,"r":2,"s":2}','{"q":-4,"r":1,"s":3}','{"q":-7,"r":4,"s":3}','{"q":-8,"r":4,"s":4}','{"q":-9,"r":4,"s":5}','{"q":-10,"r":4,"s":6}','{"q":-11,"r":4,"s":7}','{"q":-12,"r":4,"s":8}','{"q":-6,"r":1,"s":5}','{"q":-6,"r":0,"s":6}','{"q":-6,"r":-1,"s":7}','{"q":-6,"r":-2,"s":8}','{"q":-2,"r":-1,"s":3}','{"q":-2,"r":-2,"s":4}']

export default class BFS extends React.Component{
    constructor(props){
        super(props);

        this.handleMouseMove = this.handleMouseMove.bind(this); // bind the handleMouseMove method
        this.handleClick = this.handleClick.bind(this); // bind the handleClick method
        this.state = {  // initalize components state
            hexSize: 20,
            hexOrigin: {x: 400, y: 300},
            currentHex: {q: 0, r: 0, s: 0, x: 0, y: 0},
            obstacles: DUMMY_OBSTACLES,
            playerPosition: {q: 0, r: 0, s: 0},
            cameFrom: {},
            hexPath: [],
            path: []
        };
    }

    componentWillMount(){
        let HexParameters = this.getHexParameters();    // calculate HexParamters
        this.setState({ // set canvasSize and HexParamters in the state
            canvasSize: {canvasWidth: 800, canvasHeight: 600},
            HexParameters: HexParameters
        })
    }

    componentDidMount() {
        // set canvas sizes and draw initial state of the canvas on mount
        const {canvasWidth, canvasHeight} = this.state.canvasSize;
        this.canvasHex.width = canvasWidth;
        this.canvasHex.height = canvasHeight;
        this.canvasInteraction.width = canvasWidth;
        this.canvasInteraction.height = canvasHeight;
        this.canvasView.width = canvasWidth;
        this.canvasView.height = canvasHeight;
        this.getCanvasPosition(this.canvasInteraction);
        this.drawHex(this.canvasInteraction, this.Point(this.state.playerPosition.x, this.state.playerPosition.y), 1, "black", "grey", 0.2);
        this.drawHexes();
        this.drawPath();
        this.drawObstacles();

    }


    shouldComponentUpdate(nextProps, nextState){    // updates canvas bases on changes in state as well as controls update flow
        if(nextState.currentHex !== this.state.currentHex){
            const{q, r, s, x, y} = nextState.currentHex;
            const{canvasWidth, canvasHeight} = this.state.canvasSize;
            const ctx = this.canvasInteraction.getContext("2d");    // get 2d for canvasinteraction element
            ctx.clearRect(0, 0, canvasWidth, canvasHeight); // clears canvas to allow for redrawing
            this.drawPath();
            return true;
        }
        if(nextState.cameFrom !== this.state.cameFrom){ // if came from value in nextstate is different from current state, redraw canvas view to show updated arrows
            const{canvasWidth, canvasHeight} = this.state.canvasSize;
            const ctx = this.canvasView.getContext("2d");
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            for (let l in nextState.cameFrom){  // loops throgh each item in came from to draw arrows between hexes
                const{q,r,s} = JSON.parse(l);   // parses string rep of the hex coords into q,r,s
                const{x,y} = this.hexToPixel(this.Hex(q, r));
                this.drawHex(this.canvasView, this.Point(x, y), 1, "black", "grey", 0.1);
                var from = JSON.parse(nextState.cameFrom[l]);   // parse string rep of the from hex coords into q,r,s
                var fromCoord = this.hexToPixel(this.Hex(from.q, from.r));
                this.drawArrow(fromCoord.x, fromCoord.y, x, y);
            }
            return true;    // component should update
        }
        return false;   // only if no updates are required
    }


    getHexCornerCoord(center, i){   // gets coords of hexagons corners, returns as a point, draws a line between them
        let angle_deg = 60 * i + 30;    // calculates angles in degrees
        let angle_rad = Math.PI / 180 * angle_deg;  // converts angles from degrees to rads
        let x = center.x + this.state.hexSize * Math.cos(angle_rad);    // calculates relative to center
        let y = center.y + this.state.hexSize * Math.sin(angle_rad);
        return this.Point(x,y);
    }

    Point(x, y){
        return {x: x, y: y}
    }

    drawHex(canvasID, center, lineWidth, lineColor, fillColor) {    // draws a hex on the canvas with provided parameters
        for(let i = 0; i <=5; i++){ // loops through all 6 corners of hex
            let start = this.getHexCornerCoord(center, i);    // get coords of the start and end points of current edge of hex
            let end = this.getHexCornerCoord(center, i + 1);
            this.fillHex(canvasID, center, fillColor);
            this.drawLine(canvasID, start, end, lineWidth, lineColor);
        }
    }

    drawLine(canvasID, start, end, lineWidth, lineColor){   // draws a line on the canvas between the start and end points
        const ctx = canvasID.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);   // move starting point of line to specified coords
        ctx.strokeStyle = lineColor;
        ctx.lineWidth= lineWidth;
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
        ctx.closePath();
    }

    drawHexes(){    // draws hexagonal grid on canvas based on the provided canvas size and hexParameters
        const {canvasWidth, canvasHeight} = this.state.canvasSize;
        const {hexWidth, hexHeight, vertDist, horizDist} = this.state.HexParameters;
        const hexOrigin = this.state.hexOrigin;
        let qLeftSide = Math.round(hexOrigin.x/horizDist);  // calculates number of hexes that will be displayed on left, right, top and bottom side
        let qRightSide = Math.round((canvasWidth - hexOrigin.x)/horizDist);
        let rTopSide = Math.round(hexOrigin.y/vertDist);
        let rBottomSide = Math.round((canvasHeight - hexOrigin.y)/vertDist);
        var hexPathMap =[]; // this array will store the hexes path map for bfs
        var p = 0;
        for(let r = 0; r <= rBottomSide; r++) {
            if(r%2 === 0 && r !== 0) {    // adjusts horizontal position based on row value
                p++;
            }
            for(let q = -qLeftSide; q <= qRightSide; q++) {
                const {x, y} = this.hexToPixel(this.Hex(q-p, r));
                if((x > hexWidth/2 && x < canvasWidth - hexWidth/2) && (y > hexHeight/2 && y < canvasHeight - hexHeight/2)) { // check if hexes center lies within a visible area of canvas
                    this.drawHex(this.canvasHex, this.Point(x,y), 1, "black", "grey");
                    var bottomH = JSON.stringify(this.Hex(q-p, r, -(q-p) - r)); // creates string representation of hex for path map
                    if(!this.state.obstacles.includes(bottomH)){    // if hex is not marked by obstacle adds to hex path map arr
                        hexPathMap.push(bottomH);
                    }
                }
            }
        }
        var n = 0;
        for(let r = -1; r >= -rTopSide; r--){   // loops through hexes in visible top size
            if(r%2 !== 0){
                n++;
            }
            for(let q = -qLeftSide; q <= qRightSide; q++){
                //adding integers to hexToPixel arguments shifts hexagons right
                const { x, y } = this.hexToPixel(this.Hex(q+n, r));
                if((x > hexWidth/2 && x < canvasWidth - hexWidth/2) && (y > hexHeight/2 && y < canvasHeight - hexHeight/2)){
                    this.drawHex(this.canvasHex, this.Point(x,y), 1, "black", "grey");
                    var topH = JSON.stringify(this.Hex(q+n, r, -(q+n) - r));
                    if(!this.state.obstacles.includes(topH)){
                        hexPathMap.push(topH);
                    }
                }
            }
        }
        hexPathMap = [].concat(hexPathMap); // concats the arr and sets it in component state
        this.setState(
            {hexPathMap: hexPathMap},
            this.breadthFirstSearchCallback = () => this.breadthFirstSearch(this.state.playerPosition)
        )
    }


    hexToPixel(h){  // converts hex coords to pixel coords, returns an x,y point
        let hexOrigin = this.state.hexOrigin;
        let x = this.state.hexSize * Math.sqrt(3) * (h.q + h.r/2) + hexOrigin.x;
        let y = this.state.hexSize * 3/2 * h.r + hexOrigin.y;
        return this.Point(x, y)
    }

    Hex(q, r, s){
        return{q: q, r: r, s: s}
    }

    drawHexCoordinates(canvasID, center, h){    // for each hex draws col and row from center value
        const ctx = canvasID.getContext("2d");
        ctx.fillText(h.q, center.x+6, center.y);
        ctx.fillText(h.r, center.x-3, center.y+15);
        ctx.fillText(h.s, center.x-12, center.y);
    }

    getHexParameters(){ // calculates hex parameters based on the hexSize and return as an object
        let hexHeight = this.state.hexSize * 2;
        let hexWidth = Math.sqrt(3)/2 * hexHeight;
        let vertDist = hexHeight * 3/4;
        let horizDist = hexWidth;
        return {hexWidth, hexHeight, vertDist, horizDist}
    }

    handleMouseMove(e){ // handle mouse move event to update the current hex and its details
        const {left, right, top, bottom} = this.state.canvasPosition;
        const {canvasWidth, canvasHeight} = this.state.canvasSize;
        const {hexWidth, hexHeight} = this.state.HexParameters;
        const offsetX = e.nativeEvent.offsetX;  // calculates off set of mouse pointer relative to canvas
        const offsetY = e.nativeEvent.offsetY;
        const {q, r, s} = this.cubeRound(this.pixelToHex(this.Point(offsetX, offsetY)));    // calculates cube coords of hex under mouse cursor
        const {x, y} = this.hexToPixel(this.Hex(q, r, s));
        let playerPosition = this.state.playerPosition;
        this.getDistanceLine(this.Hex(0,0,0), this.Hex(q, r, s));
        this.getPath(this.Hex(playerPosition.q, playerPosition.r, playerPosition.s), this.Hex(q,r,s));
        if ((x > hexWidth / 2 && x < canvasWidth - hexWidth / 2) && (y > hexHeight / 2 && y < canvasHeight - hexHeight / 2)){   // checls if hexes center lies within visible area or not
            this.setState({ // updates current hex state to store cube and pixel coords under mouse cursor
                currentHex: { q, r, s, x, y }
            });
        }
    }


    getCanvasPosition(canvasID){
        let rect = canvasID.getBoundingClientRect();
        this.setState({
            canvasPosition: {left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom}    // setting current state to where the canvas is, always get correct canvas position
        })
    }

    pixelToHex(p){  // pixel coords to hex
        let size = this.state.hexSize;
        let origin = this.state.hexOrigin;
        let q = ((p.x - origin.x) * Math.sqrt(3)/3 - (p.y - origin.y) / 3) / size
        let r = (p.y - origin.y) * 2/3 / size
        return this.Hex(q, r, - q - r); // returns col, rol, s variable which indicates where hex is on screen
    }

    cubeRound(cube){    // rounds cube coords to integral hex coordinates returns hex
        var rx = Math.round(cube.q)
        var ry = Math.round(cube.r)
        var rz = Math.round(cube.s)

        var x_diff = Math.abs(rx - cube.q)  // calculates difference between rounded and original cube coords
        var y_diff = Math.abs(ry - cube.r)
        var z_diff = Math.abs(rz - cube.s)

        if(x_diff > y_diff && x_diff > z_diff){ // determines axis and adjust coord to maintain sum of q,r,s as 0
            rx = -ry-rz
        }
        else if(y_diff > z_diff){
            ry = -rx-rz
        }
        else{
            rz = -rx-ry
        }
        return this.Hex(rx, ry, rz);    // returns a new hex object with rounded cube coords q,r,s
    }

    cubeDirections(direction){  // gets cube coords for the hex's neighboring directions
        const cubeDirections = [this.Hex(1, 0, -1), this.Hex(1, -1, 0), this.Hex(0, -1, 1), this.Hex(-1, 0, 1), this.Hex(-1, 1, 0), this.Hex(0, 1, -1)];
        return cubeDirections[direction];
    }

    cubeAdd(a, b){  // returns addition of all hexagons up until mouse cursor
        return this.Hex(a.q + b.q, a.r + b.r, a.s + b.s);
    }

    cubeSubtract(hexA, hexB){   // returns as a new hex after subtracting one cube coord from another
        return this.Hex(hexA.q - hexB.q, hexA.r - hexB.r, hexA.s - hexB.s);
    }

    getCubeNeighbor(h, direction){  // gets neigboring cube coord in the specified direction from any given hex
        return this.cubeAdd(h, this.cubeDirections(direction));
    }

    drawNeighbors(h){
        for(let i = 0; i <= 5; i++){
            const {q, r, s} = this.getCubeNeighbor(this.Hex(h.q, h.r, h.s), i);
            const {x, y} = this.hexToPixel(this.Hex(q, r, s));
            this.drawHex(this.canvasInteraction, this.Point(x, y), "black", 2);
        }
    }

    cubeDistance(hexA, hexB){
        const{q, r, s} = this.cubeSubtract(hexA, hexB); // returns the calculated distances between two hexes in cube coords
        return(Math.abs(q) + Math.abs(r) + Math.abs(s)) / 2;
    }

    linearInt(a, b, t){ // linear interpolation between two hexes in cuve coords
        return (a + (b-a) * t)  // returns new hex
    }

    cubeLinearInt(hexA, hexB, t){   // linear interpolation between two hexes in cube coords and return as a new hex
        return this.Hex(this.linearInt(hexA.q, hexB.q, t), this.linearInt(hexA.r, hexB.r, t), this.linearInt(hexA.s, hexB.s, t));
    }

    getDistanceLine(hexA, hexB){    // gets distance line between two hexes
        let dist = this.cubeDistance(hexA, hexB);
        var arr = [];
        for(let i = 0; i <= dist; i++){
            let center = this.hexToPixel(this.cubeRound(this.cubeLinearInt(hexA, hexB, 1.0 / dist * i)));
            arr = [].concat(arr, center);
        }
        this.setState({
            currentDistanceLine: arr
        })
    }

    fillHex(canvasID, center, fillColor){
        let c0 = this.getHexCornerCoord(center, 0); // get corner coords of hex
        let c1 = this.getHexCornerCoord(center, 1);
        let c2 = this.getHexCornerCoord(center, 2);
        let c3 = this.getHexCornerCoord(center, 3);
        let c4 = this.getHexCornerCoord(center, 4);
        let c5 = this.getHexCornerCoord(center, 5);
        const ctx = canvasID.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = fillColor;
        ctx.globalAlpha = 0.1;
        ctx.moveTo(c0.x, c0.y);
        ctx.lineTo(c1.x, c1.y);
        ctx.lineTo(c2.x, c2.y);
        ctx.lineTo(c3.x, c3.y);
        ctx.lineTo(c4.x, c4.y);
        ctx.lineTo(c5.x, c5.y);
        ctx.closePath();
        ctx.fill();
    }

    handleClick(){  // handle click event on canvas, updates users position
        const{ currentHex, cameFrom } = this.state;
        const{ q, r, s} = currentHex;
        console.log(q,r,s);
        if(cameFrom[JSON.stringify(this.Hex(q,r,s))]){  // check if clicked hex is reachable from users current position
            this.setState(  // update users current position, triggers bfs method call
                {playerPosition: this.Hex(q,r,s)},
                this.breadthFirstSearchCallback = () => this.breadthFirstSearch(this.state.playerPosition)
            )
        }
    }

    drawObstacles() {
        this.state.obstacles.map((l)=>{
            const{q,r,s} = JSON.parse(l);
            const{x, y} = this.hexToPixel(this.Hex(q,r,s));
            this.drawHex(this.canvasHex, this.Point(x,y), 1, "black", "black")
        })
    }

    getNeighbors(h){    // gets neighboring hexagons for a given hexagon and return as arr
        var arr = [];
        for(let i = 0; i <= 5; i++){
            const{q,r,s} = this.getCubeNeighbor(this.Hex(h.q, h.r, h.s), i);

            var str = JSON.stringify(this.Hex(q, r, s));
            if(!this.state.obstacles.includes(str)){
                arr.push(this.Hex(q,r,s));
            }
        }
        return arr;
    }

    breadthFirstSearch(playerPosition){ // performs bfs on hex grid
        var frontier = [playerPosition];
        var cameFrom = {};
        cameFrom[JSON.stringify(playerPosition)] = JSON.stringify(playerPosition);
        while(frontier.length != 0){    // explore neigbors of each hex in the frontier to find the path
            var current = frontier.shift();
            let arr = this.getNeighbors(current);
            arr.map((l)=>{
                if(!cameFrom.hasOwnProperty(JSON.stringify(l)) && this.state.hexPathMap.includes(JSON.stringify(l))) {  // checks if the current neighbor is not in the came from object and is included in hex path map arr
                    frontier.push(l);
                    cameFrom[JSON.stringify(l)] = JSON.stringify(current);
                }
            })
        }
        cameFrom = Object.assign({}, cameFrom); // sets camefrom object in the component state
        this.setState({
            cameFrom: cameFrom
        })
    }

    getPath(start, current){    // get path from the start hex to current hex
        const{ cameFrom } = this.state;
        start = JSON.stringify(start);
        current = JSON.stringify(current);
        if(cameFrom[current] != undefined){
            var path = [current];
            while(current != start){
                current = cameFrom[current];
                path.push(current);
            }
            path.push(start);
            path = [].concat(path);
            this.setState({ // stores in state
                path:path
            })
        }

    }

    drawPath(){ // draw the path on the canvas based on calculated path
        let path = this.state.path;
        for (let i = 0; i < path.length - 1; i++) {
            const { q, r } = JSON.parse(path[i]);
            const { x, y } = this.hexToPixel(this.Hex(q, r));
            this.drawHex(this.canvasInteraction, this.Point(x, y), 1, "black", "lime");
        }
    }

    drawArrow(fromx, fromy, tox, toy){  // draws an arrow from point to another
        var ctx = this.canvasView.getContext("2d"); // gets 2d context of canvas
        var headlen = 5;
        var angle = Math.atan2(toy - fromy, tox - fromx); // calculates angle between two points with arctan
        ctx.beginPath();  // draw line from starting point to ending point
        ctx.moveTo(fromx, fromy);
        ctx.lineTo(tox, toy);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.beginPath();  // draws arrow head
        ctx.moveTo(tox, toy);
        ctx.globalAlpha = 0.3;
        ctx.lineTo(tox - headlen * Math.cos(angle - Math.PI / 7), toy - headlen * Math.sin(angle - Math.PI / 7));
        ctx.lineTo(tox - headlen * Math.cos(angle + Math.PI / 7), toy - headlen * Math.sin(angle + Math.PI / 7));
        ctx.lineTo(tox, toy);
        ctx.lineTo(tox - headlen * Math.cos(angle - Math.PI / 7), toy - headlen * Math.sin(angle - Math.PI / 7));
        ctx.strokeStyle = "lime";
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.fillStyle = "lime";
        ctx.fill();
    }


    render(){
        return(
            <div className="BFS">
                <canvas
                    ref={ref => this.canvasRef = ref}
                    width={800}
                    height={600}
                    onMouseMove={this.handleMouseMove}
                ></canvas>
                <canvas ref={canvasHex => this.canvasHex = canvasHex}></canvas>
                <canvas ref={canvasCoordinates => this.canvasCoordinates = canvasCoordinates}></canvas>
                <canvas ref={canvasView => this.canvasView = canvasView}></canvas>
                <canvas ref={canvasInteraction => this.canvasInteraction = canvasInteraction} onMouseMove = {this.handleMouseMove}
                        onClick={this.handleClick}></canvas>
            </div>
        );
    }
}