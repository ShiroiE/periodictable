/* global THREE:false, TWEEN:false, Promise:false, HMDVRDevice:false, PositionSensorVRDevice:false, self:false */

var table = [{
    symbol: "H",
    details: "Hydrogen",
    mol: "1.00794",
    x: 1,
    y: 1
}, {
    symbol: "He",
    details: "Helium",
    mol: "4.002602",
    x: 18,
    y: 1
}, {
    symbol: "Li",
    details: "Lithium",
    mol: "6.941",
    x: 1,
    y: 2
}, {
    symbol: "Be",
    details: "Beryllium",
    mol: "9.012182",
    x: 2,
    y: 2
}, {
    symbol: "B",
    details: "Boron",
    mol: "10.811",
    x: 13,
    y: 2
}, {
    symbol: "C",
    details: "Carbon",
    mol: "12.0107",
    x: 14,
    y: 2
}, {
    symbol: "N",
    details: "Nitrogen",
    mol: "14.0067",
    x: 15,
    y: 2
}, {
    symbol: "O",
    details: "Oxygen",
    mol: "15.9994",
    x: 16,
    y: 2
}, {
    symbol: "F",
    details: "Fluorine",
    mol: "18.9984032",
    x: 17,
    y: 2
}, {
    symbol: "Ne",
    details: "Neon",
    mol: "20.1797",
    x: 18,
    y: 2
}, {
    symbol: "Na",
    details: "Sodium",
    mol: "22.98976...",
    x: 1,
    y: 3
}, {
    symbol: "Mg",
    details: "Magnesium",
    mol: "24.305",
    x: 2,
    y: 3
}, {
    symbol: "Al",
    details: "Aluminium",
    mol: "26.9815386",
    x: 13,
    y: 3
}, {
    symbol: "Si",
    details: "Silicon",
    mol: "28.0855",
    x: 14,
    y: 3
}, {
    symbol: "P",
    details: "Phosphorus",
    mol: "30.973762",
    x: 15,
    y: 3
}, {
    symbol: "S",
    details: "Sulfur",
    mol: "32.065",
    x: 16,
    y: 3
}, {
    symbol: "Cl",
    details: "Chlorine",
    mol: "35.453",
    x: 17,
    y: 3
}, {
    symbol: "Ar",
    details: "Argon",
    mol: "39.948",
    x: 18,
    y: 3
}, {
    symbol: "K",
    details: "Potassium",
    mol: "39.948",
    x: 1,
    y: 4
}, {
    symbol: "Ca",
    details: "Calcium",
    mol: "40.078",
    x: 2,
    y: 4
}, {
    symbol: "Sc",
    details: "Scandium",
    mol: "44.955912",
    x: 3,
    y: 4
}, {
    symbol: "Ti",
    details: "Titanium",
    mol: "47.867",
    x: 4,
    y: 4
}, {
    symbol: "V",
    details: "Vanadium",
    mol: "50.9415",
    x: 5,
    y: 4
}, {
    symbol: "Cr",
    details: "Chromium",
    mol: "51.9961",
    x: 6,
    y: 4
}, {
    symbol: "Mn",
    details: "Manganese",
    mol: "54.938045",
    x: 7,
    y: 4
}, {
    symbol: "Fe",
    details: "Iron",
    mol: "55.845",
    x: 8,
    y: 4
}, {
    symbol: "Co",
    details: "Cobalt",
    mol: "58.933195",
    x: 9,
    y: 4
}, {
    symbol: "Ni",
    details: "Nickel",
    mol: "58.6934",
    x: 10,
    y: 4
}, {
    symbol: "Cu",
    details: "Copper",
    mol: "63.546",
    x: 11,
    y: 4
}, {
    symbol: "Zn",
    details: "Zinc",
    mol: "65.38",
    x: 12,
    y: 4
}, {
    symbol: "Ga",
    details: "Gallium",
    mol: "69.723",
    x: 13,
    y: 4
}, {
    symbol: "Ge",
    details: "Germanium",
    mol: "72.63",
    x: 14,
    y: 4
}, {
    symbol: "As",
    details: "Arsenic",
    mol: "74.9216",
    x: 15,
    y: 4
}, {
    symbol: "Se",
    details: "Selenium",
    mol: "78.96",
    x: 16,
    y: 4
}, {
    symbol: "Br",
    details: "Bromine",
    mol: "79.904",
    x: 17,
    y: 4
}, {
    symbol: "Kr",
    details: "Krypton",
    mol: "83.798",
    x: 18,
    y: 4
}, {
    symbol: "Rb",
    details: "Rubidium",
    mol: "85.4678",
    x: 1,
    y: 5
}, {
    symbol: "Sr",
    details: "Strontium",
    mol: "87.62",
    x: 2,
    y: 5
}, {
    symbol: "Y",
    details: "Yttrium",
    mol: "88.90585",
    x: 3,
    y: 5
}, {
    symbol: "Zr",
    details: "Zirconium",
    mol: "91.224",
    x: 4,
    y: 5
}, {
    symbol: "Nb",
    details: "Niobium",
    mol: "92.90628",
    x: 5,
    y: 5
}, {
    symbol: "Mo",
    details: "Molybdenum",
    mol: "95.96",
    x: 6,
    y: 5
}, {
    symbol: "Tc",
    details: "Technetium",
    mol: "(98)",
    x: 7,
    y: 5
}, {
    symbol: "Ru",
    details: "Ruthenium",
    mol: "101.07",
    x: 8,
    y: 5
}, {
    symbol: "Rh",
    details: "Rhodium",
    mol: "102.9055",
    x: 9,
    y: 5
}, {
    symbol: "Pd",
    details: "Palladium",
    mol: "106.42",
    x: 10,
    y: 5
}, {
    symbol: "Ag",
    details: "Silver",
    mol: "107.8682",
    x: 11,
    y: 5
}, {
    symbol: "Cd",
    details: "Cadmium",
    mol: "112.411",
    x: 12,
    y: 5
}, {
    symbol: "In",
    details: "Indium",
    mol: "114.818",
    x: 13,
    y: 5
}, {
    symbol: "Sn",
    details: "Tin",
    mol: "118.71",
    x: 14,
    y: 5
}, {
    symbol: "Sb",
    details: "Antimony",
    mol: "121.76",
    x: 15,
    y: 5
}, {
    symbol: "Te",
    details: "Tellurium",
    mol: "127.6",
    x: 16,
    y: 5
}, {
    symbol: "I",
    details: "Iodine",
    mol: "126.90447",
    x: 17,
    y: 5
}, {
    symbol: "Xe",
    details: "Xenon",
    mol: "131.293",
    x: 18,
    y: 5
}, {
    symbol: "Cs",
    details: "Caesium",
    mol: "132.9054",
    x: 1,
    y: 6
}, {
    symbol: "Ba",
    details: "Barium",
    mol: "132.9054",
    x: 2,
    y: 6
}, {
    symbol: "La",
    details: "Lanthanum",
    mol: "138.90547",
    x: 4,
    y: 9
}, {
    symbol: "Ce",
    details: "Cerium",
    mol: "140.116",
    x: 5,
    y: 9
}, {
    symbol: "Pr",
    details: "Praseodymium",
    mol: "140.90765",
    x: 6,
    y: 9
}, {
    symbol: "Nd",
    details: "Neodymium",
    mol: "144.242",
    x: 7,
    y: 9
}, {
    symbol: "Pm",
    details: "Promethium",
    mol: "(145)",
    x: 8,
    y: 9
}, {
    symbol: "Sm",
    details: "Samarium",
    mol: "150.36",
    x: 9,
    y: 9
}, {
    symbol: "Eu",
    details: "Europium",
    mol: "151.964",
    x: 10,
    y: 9
}, {
    symbol: "Gd",
    details: "Gadolinium",
    mol: "157.25",
    x: 11,
    y: 9
}, {
    symbol: "Tb",
    details: "Terbium",
    mol: "158.92535",
    x: 12,
    y: 9
}, {
    symbol: "Dy",
    details: "Dysprosium",
    mol: "162.5",
    x: 13,
    y: 9
}, {
    symbol: "Ho",
    details: "Holmium",
    mol: "164.93032",
    x: 14,
    y: 9
}, {
    symbol: "Er",
    details: "Erbium",
    mol: "167.259",
    x: 15,
    y: 9
}, {
    symbol: "Tm",
    details: "Thulium",
    mol: "168.93421",
    x: 16,
    y: 9
}, {
    symbol: "Yb",
    details: "Ytterbium",
    mol: "173.054",
    x: 17,
    y: 9
}, {
    symbol: "Lu",
    details: "Lutetium",
    mol: "174.9668",
    x: 18,
    y: 9
}, {
    symbol: "Hf",
    details: "Hafnium",
    mol: "178.49",
    x: 4,
    y: 6
}, {
    symbol: "Ta",
    details: "Tantalum",
    mol: "180.94788",
    x: 5,
    y: 6
}, {
    symbol: "W",
    details: "Tungsten",
    mol: "183.84",
    x: 6,
    y: 6
}, {
    symbol: "Re",
    details: "Rhenium",
    mol: "186.207",
    x: 7,
    y: 6
}, {
    symbol: "Os",
    details: "Osmium",
    mol: "190.23",
    x: 8,
    y: 6
}, {
    symbol: "Ir",
    details: "Iridium",
    mol: "192.217",
    x: 9,
    y: 6
}, {
    symbol: "Pt",
    details: "Platinum",
    mol: "195.084",
    x: 10,
    y: 6
}, {
    symbol: "Au",
    details: "Gold",
    mol: "196.966569",
    x: 11,
    y: 6
}, {
    symbol: "Hg",
    details: "Mercury",
    mol: "200.59",
    x: 12,
    y: 6
}, {
    symbol: "Tl",
    details: "Thallium",
    mol: "204.3833",
    x: 13,
    y: 6
}, {
    symbol: "Pb",
    details: "Lead",
    mol: "207.2",
    x: 14,
    y: 6
}, {
    symbol: "Bi",
    details: "Bismuth",
    mol: "208.9804",
    x: 15,
    y: 6
}, {
    symbol: "Po",
    details: "Polonium",
    mol: "(209)",
    x: 16,
    y: 6
}, {
    symbol: "At",
    details: "Astatine",
    mol: "(210)",
    x: 17,
    y: 6
}, {
    symbol: "Rn",
    details: "Radon",
    mol: "(222)",
    x: 18,
    y: 6
}, {
    symbol: "Fr",
    details: "Francium",
    mol: "(223)",
    x: 1,
    y: 7
}, {
    symbol: "Ra",
    details: "Radium",
    mol: "(226)",
    x: 2,
    y: 7
}, {
    symbol: "Ac",
    details: "Actinium",
    mol: "(227)",
    x: 4,
    y: 10
}, {
    symbol: "Th",
    details: "Thorium",
    mol: "232.03806",
    x: 5,
    y: 10
}, {
    symbol: "Pa",
    details: "Protactinium",
    mol: "231.0588",
    x: 6,
    y: 10
}, {
    symbol: "U",
    details: "Uranium",
    mol: "238.02891",
    x: 7,
    y: 10
}, {
    symbol: "Np",
    details: "Neptunium",
    mol: "(237)",
    x: 8,
    y: 10
}, {
    symbol: "Pu",
    details: "Plutonium",
    mol: "(244)",
    x: 9,
    y: 10
}, {
    symbol: "Am",
    details: "Americium",
    mol: "(243)",
    x: 10,
    y: 10
}, {
    symbol: "Cm",
    details: "Curium",
    mol: "(247)",
    x: 11,
    y: 10
}, {
    symbol: "Bk",
    details: "Berkelium",
    mol: "(247)",
    x: 12,
    y: 10
}, {
    symbol: "Cf",
    details: "Californium",
    mol: "(251)",
    x: 13,
    y: 10
}, {
    symbol: "Es",
    details: "Einstenium",
    mol: "(252)",
    x: 14,
    y: 10
}, {
    symbol: "Fm",
    details: "Fermium",
    mol: "(257)",
    x: 15,
    y: 10
}, {
    symbol: "Md",
    details: "Mendelevium",
    mol: "(258)",
    x: 16,
    y: 10
}, {
    symbol: "No",
    details: "Nobelium",
    mol: "(259)",
    x: 17,
    y: 10
}, {
    symbol: "Lr",
    details: "Lawrencium",
    mol: "(262)",
    x: 18,
    y: 10
}, {
    symbol: "Rf",
    details: "Rutherfordium",
    mol: "(267)",
    x: 4,
    y: 7
}, {
    symbol: "Db",
    details: "Dubnium",
    mol: "(268)",
    x: 5,
    y: 7
}, {
    symbol: "Sg",
    details: "Seaborgium",
    mol: "(271)",
    x: 6,
    y: 7
}, {
    symbol: "Bh",
    details: "Bohrium",
    mol: "(272)",
    x: 7,
    y: 7
}, {
    symbol: "Hs",
    details: "Hassium",
    mol: "(270)",
    x: 8,
    y: 7
}, {
    symbol: "Mt",
    details: "Meitnerium",
    mol: "(276)",
    x: 9,
    y: 7
}, {
    symbol: "Ds",
    details: "Darmstadium",
    mol: "(281)",
    x: 10,
    y: 7
}, {
    symbol: "Rg",
    details: "Roentgenium",
    mol: "(280)",
    x: 11,
    y: 7
}, {
    symbol: "Cn",
    details: "Copernicium",
    mol: "(285)",
    x: 12,
    y: 7
}, {
    symbol: "Uut",
    details: "Unutrium",
    mol: "(284)",
    x: 13,
    y: 7
}, {
    symbol: "Fl",
    details: "Flerovium",
    mol: "(289)",
    x: 14,
    y: 7
}, {
    symbol: "Uup",
    details: "Ununpentium",
    mol: "(288)",
    x: 15,
    y: 7
}, {
    symbol: "Lv",
    details: "Livermorium",
    mol: "(293)",
    x: 16,
    y: 7
}, {
    symbol: "Uus",
    details: "Ununseptium",
    mol: "(294)",
    x: 17,
    y: 7
}, {
    symbol: "Uuo",
    details: "Ununoctium",
    mol: "(294)",
    x: 18,
    y: 7
}];

var container;

var camera, scene;
var vrEffect, renderer;
var vrControl, monoControl;

var helper, axis, grid;

var state = 0;
var drawnCounter = 0;

var objects = [];
var targets = {
    table: [],
    sphere: [],
    helix: [],
    grid: []
};

init();
animate();

function init() {
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

    scene = new THREE.Scene();

    // table
    for (var i = 0; i < table.length; i++) {
        var canvas = document.createElement('canvas');
        canvas.width = 120;
        canvas.height = 160;
        var context = canvas.getContext("2d");

        // DOMオブジェクトをCanvasに描画する
        var DOMURL = self.URL || self.webkitURL || self;
        // DOMオブジェクト
        var element = document.createElement('div');
        element.className = 'element';
        element.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')';

        var number = document.createElement('div');
        number.className = 'number';
        number.textContent = i + 1;
        element.appendChild(number);

        var symbol = document.createElement('div');
        symbol.className = 'symbol';
        symbol.textContent = table[i].symbol;
        element.appendChild(symbol);

        var details = document.createElement('div');
        details.className = 'details';
        details.textContent = table[i].details;
        element.appendChild(details);

        var mol = document.createElement('div');
        mol.className = 'mol';
        mol.textContent = table[i].mol;
        element.appendChild(mol);

        var DOMSVG =
            "<svg xmlns='http://www.w3.org/2000/svg' width='120' height='160'>" +
            "<foreignObject width='100%' height='100%'>" +
            "<style>" +
            ".element {" +
            "    width: 120px;" +
            "    height: 160px;" +
            "    box-shadow: 0px 0px 12px rgba(0, 255, 255, 0.5);" +
            "    border: 1px solid rgba(127, 255, 255, 0.25);" +
            "    text-align: center;" +
            "    cursor: default;" +
            "}" +
            ".element .number {" +
            "    position: absolute;" +
            "    top: 20px;" +
            "    right: 20px;" +
            "    font-size: 12px;" +
            "    color: rgba(127, 255, 255, 0.75);" +
            "}" +
            ".element .symbol {" +
            "    position: absolute;" +
            "    top: 40px;" +
            "    left: 0px;" +
            "    right: 0px;" +
            "    font-size: 60px;" +
            "    font-weight: bold;" +
            "    color: rgba(255, 255, 255, 0.75);" +
            "    text-shadow: 0 0 10px rgba(0, 255, 255, 0.95);" +
            "}" +
            ".element .details {" +
            "    position: absolute;" +
            "    top: 110px;" +
            "    left: 0px;" +
            "    right: 0px;" +
            "    font-size: 12px;" +
            "    color: rgba(127, 255, 255, 0.75);" +
            "}" +
            ".element .mol {" +
            "    position: absolute;" +
            "    bottom: 15px;" +
            "    left: 0px;" +
            "    right: 0px;" +
            "    font-size: 12px;" +
            "    color: rgba(127, 255, 255, 0.75);" +
            "}" +
            "</style>" +
            "<div xmlns='http://www.w3.org/1999/xhtml'>" +
            element.outerHTML +
            "</div>" +
            "</foreignObject>" +
            "</svg>";

        var svg = new Blob([DOMSVG], {
            type: 'image/svg+xml;charset=utf-8'
        });
        var url = DOMURL.createObjectURL(svg);
        var image = new Image();
        // ループ内でのクロージャー定義
        image.onload = (function(url, img, ctx) {
            return function() {
                ctx.drawImage(this, 0, 0, 120, 160);

                // オブジェクト破棄
                DOMURL.revokeObjectURL(url);
                drawnCounter++;
            };
        })(url, image, context);
        image.src = url;

        var geometry = new THREE.PlaneBufferGeometry(120, 160);

        // 生成したcanvasをtextureとしてTHREE.Textureオブジェクトを生成
        var texture = new THREE.Texture(canvas);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.needsUpdate = true;

        var material = new THREE.MeshBasicMaterial({
            side: THREE.DoubleSide,
            map: texture
        });
        material.transparent = true;

        // 初期位置はランダムで配置
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = Math.random() * 4000 - 2000;
        mesh.position.y = Math.random() * 4000 - 2000;
        mesh.position.z = Math.random() * 4000 - 2000;

        scene.add(mesh);

        objects.push(mesh);
    }

    targets.table = createTableObjects(objects.length);
    targets.sphere = createSphereObjects(objects.length);
    targets.helix = createHelixObjects(objects.length);
    targets.grid = createGridObjects(objects.length);

    addAxisGrid();
    helper = true;

    // レンダーのセットアップ
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });

    // VR stereo rendering
    vrEffect = new THREE.VREffect(renderer);
    vrEffect.setSize(window.innerWidth, window.innerHeight);

    // renderer.autoClear = false;
    renderer.setClearColor(0x222222);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'absolute';

    // container that fullscreen will be called on.
    container = document.getElementById('vrPeriodictable');
    container.appendChild(renderer.domElement);

    // for VR
    vrControl = new THREE.VRFlyControls(camera);

    // for not VR
    monoControl = new THREE.OrbitControls(camera, renderer.domElement);
    monoControl.rotateSpeed = 0.5;
    monoControl.minDistance = 500;
    monoControl.maxDistance = 6000;

    var buttonTable = document.getElementById('table');
    buttonTable.addEventListener('click', function() {
        transform(targets.table, 2000);
        console.log('table');
    }, false);

    var buttonSphere = document.getElementById('sphere');
    buttonSphere.addEventListener('click', function() {
        transform(targets.sphere, 2000);
        console.log('sphere');
    }, false);

    var buttonHelix = document.getElementById('helix');
    buttonHelix.addEventListener('click', function() {
        transform(targets.helix, 2000);
        console.log('helix');
    }, false);

    var buttonGrid = document.getElementById('grid');
    buttonGrid.addEventListener('click', function() {
        transform(targets.grid, 2000);
        console.log('grid');
    }, false);

    // ダブルクリックでfull-screen VR mode
    window.addEventListener('dblclick', function() {
        changeMode('vr');

        vrEffect.setFullScreen(true);
    }, false);

    // full-screen VR modeからの復帰
    document.addEventListener('mozfullscreenchange', handleFullScreenChange);

    window.addEventListener('resize', onWindowResize, false);

    window.addEventListener('keydown', onkey, true);

    // enterVR button
    var enterVr = document.getElementById('enterVR');
    // when VR is not detected
    var getVr = document.getElementById('getVR');
    vrDetect().then(function() {
        // vr detected
        hide(getVr);
    }, function() {
        // displays when VR is not detected
        hide(enterVr);
        show(getVr);
    });

    enterVr.addEventListener('click', function() {
        changeMode('vr');

        vrEffect.setFullScreen(true);
    }, false);

    transform(targets.table, 5000);
}

function createSphereObjects(objectsLength) {
    var spheres = [];
    var phi, theta, object;
    var vector = new THREE.Vector3();
    for (var i = 0; i < objectsLength; i++) {
        phi = Math.acos(-1 + (2 * i) / objectsLength);
        theta = Math.sqrt(objectsLength * Math.PI) * phi;

        object = new THREE.Object3D();
        object.position.x = 800 * Math.cos(theta) * Math.sin(phi);
        object.position.y = 800 * Math.sin(theta) * Math.sin(phi);
        object.position.z = 800 * Math.cos(phi);

        vector.copy(object.position).multiplyScalar(2);

        object.lookAt(vector);

        spheres.push(object);
    }
    return spheres;
}

function createHelixObjects(objectsLength) {
    var helixes = [];
    var phi, object;
    var vector = new THREE.Vector3();
    for (var i = 0; i < objectsLength; i++) {
        phi = i * 0.175 + Math.PI;

        object = new THREE.Object3D();
        object.position.x = 900 * Math.sin(phi);
        object.position.y = -(i * 8) + 450;
        object.position.z = 900 * Math.cos(phi);

        vector.x = object.position.x * 2;
        vector.y = object.position.y;
        vector.z = object.position.z * 2;

        object.lookAt(vector);

        helixes.push(object);
    }
    return helixes;
}

function createGridObjects(objectsLength) {
    var grids = [];
    var object;
    for (var i = 0; i < objectsLength; i++) {
        object = new THREE.Object3D();
        object.position.x = ((i % 5) * 400) - 800;
        object.position.y = (-(Math.floor(i / 5) % 5) * 400) + 800;
        object.position.z = (Math.floor(i / 25)) * 1000 - 2000;

        grids.push(object);
    }
    return grids;
}

function createTableObjects(objectsLength) {
    var tables = [];
    var object;
    for (var i = 0; i < objectsLength; i++) {
        object = new THREE.Object3D();
        object.position.x = (table[i].x * 140) - 1330;
        object.position.y = -(table[i].y * 180) + 990;

        tables.push(object);
    }
    return tables;
}

function addAxisGrid() {
    // xyz-axis
    axis = new THREE.AxisHelper(2000);
    scene.add(axis);

    // GridHelper
    grid = new THREE.GridHelper(2000, 100);
    scene.add(grid);

    helper = true;
}

function removeAxisGrid() {
    scene.remove(axis);
    scene.remove(grid);

    helper = false;
}

function transform(positions, duration) {
    TWEEN.removeAll();

    for (var i = 0; i < objects.length; i++) {
        var object = objects[i];
        var target = positions[i];

        new TWEEN.Tween(object.position)
            .to({
                x: target.position.x,
                y: target.position.y,
                z: target.position.z
            }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

        new TWEEN.Tween(object.rotation)
            .to({
                x: target.rotation.x,
                y: target.rotation.y,
                z: target.rotation.z
            }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();
    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .onComplete(function() {

            switch (state) {
                case 0:
                    transform(targets.sphere, 2000);
                    break;
                case 1:
                    transform(targets.helix, 2000);
                    break;
                case 2:
                    transform(targets.grid, 2000);
                    break;
                case 3:
                    transform(targets.table, 2000);
                    break;
            }

            state = state + 1;

            if (state > 3) state = 0;
        })
        .start();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    if (monoControl.enabled) {
        renderer.setSize(window.innerWidth, window.innerHeight);
    } else {
        vrEffect.setSize(window.innerWidth, window.innerHeight);
    }

    render();
}

function animate() {
    requestAnimationFrame(animate);

    TWEEN.update();

    if (monoControl.enabled) {
        monoControl.update();
    } else {
        vrControl.update(10);
    }
}

function render() {
    // 全ての画像の描画が終わってから
    if (drawnCounter >= 118) {
        if (monoControl.enabled) {
            renderer.render(scene, camera);
        } else {
            vrEffect.render(scene, camera);
        }
    }
}

function changeMode(mode) {
    console.log('changing mode: ' + mode);
    switch (mode) {
        case 'mono':
            monoControl.enabled = true;
            renderer.setSize(window.innerWidth, window.innerHeight);
            break;
        case 'vr':
            monoControl.enabled = false;
            vrEffect.setSize(window.innerWidth, window.innerHeight);
            break;
    }
}

function handleFullScreenChange() {
    if (document.mozFullScreenElement === null) {
        changeMode('mono');
    }
}

function show(element) {
    element.classList.remove('display-none');
}

function hide(element) {
    element.classList.add('display-none');
}

function onkey(event) {
    event.preventDefault();

    if (event.keyCode === 90) { // z
        vrControl.zeroSensor();
    } else if (event.keyCode === 70 || event.keyCode === 13) { //f or enter
        vrEffect.setFullScreen(true); //fullscreen
    } else if (event.keyCode === 72) { //h
        rotest();
        if (helper) {
            removeAxisGrid();
        } else {
            addAxisGrid();
        }
    }
}

function vrDetect() {
    var hmdDevice, positionDevice;
    return new Promise(function(resolve, reject) {
        if (navigator.getVRDevices) {
            navigator.getVRDevices().then(function(devices) {

                console.log('found ' + devices.length + ' devices');

                for (var i = 0; i < devices.length; ++i) {
                    if (devices[i] instanceof HMDVRDevice && !hmdDevice) {
                        hmdDevice = devices[i];
                        //console.log('found head mounted display device');
                    }

                    if (devices[i] instanceof PositionSensorVRDevice &&
                        devices[i].hardwareUnitId === hmdDevice.hardwareUnitId && !positionDevice) {
                        positionDevice = devices[i];
                        //console.log('found motion tracking devices');
                        break;
                    }
                }

                if (hmdDevice && positionDevice) {
                    resolve();
                    return;
                }
                reject('no VR devices found!');
            });
        } else {
            reject('no VR implementation found!');
        }
    });
}

//logs camera pos when h is pressed
function rotest() {
    console.log(camera.rotation.x, camera.rotation.y, camera.rotation.z);
}
