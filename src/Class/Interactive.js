//处理交互
function Change(){

    var tmp = document.getElementById("depthv");
    points=[];
    renderDepth=document.getElementById("depth").value;
    tmp.innerText=renderDepth;



    deal(vertices[0],vertices[1],vertices[2],vertices[3],1);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW );
    render();

    tmp = document.getElementById("Xdegreev");
    tmp.innerText = document.getElementById("Xdegree").value;
    document.getElementById("Ydegreev").innerText = document.getElementById("Ydegree").value;
    document.getElementById("Zdegreev").innerText = document.getElementById("Zdegree").value;
}
