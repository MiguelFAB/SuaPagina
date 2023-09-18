let video;

function setup() {
    createCanvas(800, 600);

    // Inicializando a webcam
    video = createCapture(VIDEO);
    video.size(800, 600);
    video.hide();
}

function draw() {
    background(220);

    // Mostrar a webcam
    image(video, 0, 0, width, height);

    // Desenhar algumas formas
    fill(0, 255, 0); 
    rect(0, 0, 800, 50);

    fill(0, 255, 0); 
    rect(0, 550, 800, 50);

    fill(0, 0, 255);
    circle(800, 575, 60);
}

function capturePhoto() {
    // Salva o frame atual da animação como uma imagem
    saveCanvas(canvas, 'myPhoto', 'jpg');

    // Alternativamente, se você quiser adicionar a imagem diretamente na página:
    let photo = canvas.toDataURL(); // Captura a imagem como um Base64 PNG
    let img = document.createElement('img');
    img.src = photo;
    document.getElementById('photos').appendChild(img);
}
