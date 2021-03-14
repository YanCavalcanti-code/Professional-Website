        
var map = L.map('map',{ center: [8.37383038282158, -27.550010005249256], zoom: 3, zoomControl: false});

    //Mini-Map
    var osmUrl='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
    var osmAttrib='Map data &copy; OpenStreetMap contributors';		
    //Plugin magic goes here! Note that you cannot use the same layer object again, as that will confuse the two map controls
    var osm2 = new L.TileLayer(osmUrl, {minZoom: 0, maxZoom: 13, attribution: osmAttrib });
    var miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true }).addTo(map);


    //COORDENADAS MOUSE - 1º Passo
    var coordDIV = document.createElement('div');
    coordDIV.id = 'mapCoordDIV';
    coordDIV.style.position = 'absolute';
    coordDIV.style.bottom = '1px';
    coordDIV.style.left = '150px';
    coordDIV.style.zIndex = '900';
    coordDIV.style.color = '#404040';
    coordDIV.style.fontFamily = 'Arial';
    coordDIV.style.fontSize = '10pt';
    coordDIV.style.backgroundColor = '#FFFFFF';
    coordDIV.style.opacity='0.6';


    document.getElementById('map').appendChild(coordDIV);

    // COORDENADAS MOUSE - 2º Passo
    map.on('mousemove', function(e){
        var lat = e.latlng.lat.toFixed(5);
        var lon = e.latlng.lng.toFixed(5);
        document.getElementById('mapCoordDIV').innerHTML = 'Coordinates: ' + lat + ' , ' + lon;
        });


    //CHAMANDO BASE MAP
    var Imaginary= L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{ attribution:'<a href="https://www.esri.com/en-us/home">©ESRI</a> Imaginary' }
    ).addTo(map);

    var OpenStreet = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution:'<a href="https://www.openstreetmap.org/#map=17/-21.00148/-44.99806">©OpenStreetMap</a> Contributors'});

    var TopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {attribution:'©OpenTopoMap Contributors'})
    
    //GRID
    L.latlngGraticule({
        showLabel: true,
        dashArray: [2, 2],
        zoomInterval: [
            {start: 2, end: 3, interval: 30},
            {start: 4, end: 4, interval: 10},
            {start: 5, end: 7, interval: 5},
            {start: 8, end: 10, interval: 1}
        ]
    }).addTo(map);
    
    //MARCADORES

    //Incorporando Imagem ao Marcador
    var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
    });

    //FLUP
    var FLUP = L.marker([41.15116827907207, -8.632580631176259] , {icon: greenIcon}).addTo(map);
    FLUP.bindTooltip("<h3>Faculdade de Letras da Universidade do Porto - FLUP</h3><img src='./Img/Flup_Logo.png'width='150'height='50'/><p><strong>Mestrado: </strong> SIG aplicado ao Ordenamento de Território</p><p>Via Panorâmica Edgar Cardoso s / n, 4150-564 - Porto, Portugal <br> 41.1512248, -8.63248407</p>");
    //PUC-Rio
    var PUC = L.marker([-22.97954278497483, -43.23287030091527] , {icon: greenIcon}).addTo(map);
    PUC.bindTooltip("<h3>Pontifícia Universidade Católica do Rio de Janeiro</h3><img src='./Img/PUC_Logo.png'width='150'height='62'/><p><strong>Graduação: </strong>Geografia<p>R. Marquês de São Vicente, 225 - Casa XV<br>Gávea, Rio de Janeiro, 22541-041, Brasil<br><br>-22.97954278, -43.23287030</p>");


    //CMM
    var myDataPoint = L.marker([41.18352209127619, -8.682948346516875]).addTo(map);
    myDataPoint.bindPopup("<h3>Estágio - Câmara Municipal de Matosinhos</h3><img src='./Img/CMM_MAT2.png'width='230'height='50' <br> <p> <i><a href='#'target='blank'><strong>Relatório</strong></a></i>&emsp;<i><a href='https://arcg.is/14zuGW'target='blank'><strong>Dashboard</strong></a></i><p>Av. Dom Afonso Henriques, 4454-510 Matosinhos - Porto, Portugal</p> 41.18350594, -8.682862515");

    //FAVELA SANTA MARTA
    var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
    });
    var redIcon = L.marker([-22.947598162563764, -43.19415454906787] , {icon: redIcon}).addTo(map);
    redIcon.bindPopup('<h2>Favela Santa Marta</h2><br><img src="./Img/FavelaSM.jpg"width="230"height="150"><p>fonte:<i>https://www.wikirio.com.br/<i></p><p>Área de estudo retratada no Trabalho de Conclusão de Curso a nível da graduação, intitulado "A Mercadificação da Favela como Produto da Cidade Vitrine; o exemplo da Favela Santa Marta, Rio de Janeiro". (2018)<br><br>Esta pesquisa trata-se de uma análise crítica a respeito das políticas urbanas desenvolvidas para algumas áreas de favelas, durante os anos em que a cidade foi sede dos megaeventos esportivos como a Copa do Mundo FIFA 2014 e os Jogos Olímpicos Rio2016.<br><br>-22.94763275, -43.19412236<br><br><a href="./Trabalhos/YanCavalcanti_Monografia.pdf" target="_blank"><strong>Abrir Monografia<strong></a><br><a href="./Trabalhos/Mapa_Favelas.pdf" target="_blank"><strong>Abrir Mapa<strong></p>');


    //MARCADORES - INSTALAÇŌES OLÍMPICAS
    //Incorporando imagem ao Marcador
    var violetIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
    });

    //PISTA BMX
    var bmx = L.marker([-22.845534374847215, -43.4011083434344] , {icon: violetIcon});
    bmx.bindPopup("<h2>Equipamentos Olímpicos Rio2016</h2><h3>Pista Olímpica de BMX do Rio de Janeiro</h3><img src='./Img/Park_BMX.jpg'width='150'height='100'/><p><strong>Dados</strong>: <i>Olympic Venues<i> - COI (2013)</p><p>fonte imagem:<i>https://pt.wikipedia.org<i></p><p> X-Park - Estr. Mal. Alencastro, 1357 - Vila Militar, Rio de Janeiro - RJ, Brasil <br><br> -22.8455343, -43.4011083 </p>");
    //PARQUE OLÍMPICO
    var parqolimp = L.marker([-22.973703853765105, -43.39344431169682] , {icon: violetIcon});
    parqolimp.bindPopup("<h2>Equipamentos Olímpicos Rio2016</h2><h3>Parque Olímpico</h3><img src='./Img/Parque_Olimpico.jpg'width='150'height='100'/><p><strong>Dados</strong>: <i>Olympic Venues<i> - COI (2013)</p><p>fonte imagem:<i>https://pt.wikipedia.org/<i></p><p>Av. Embaixador Abelardo Bueno, 3401 - Barra da Tijuca, Rio de Janeiro - RJ, 22775-039, Brasil<br><br> -22.9737038537, -43.393444311 </p>");
    //MARACANÃ
    var maraca = L.marker([-22.911881590435776, -43.2301450739291] , {icon: violetIcon});
    maraca.bindPopup("<h2>Equipamentos Olímpicos Rio2016</h2><h3>Estádio Jornalista Mário Filho - Maracanã</h3><img src='./Img/Maracana.jpg'width='150'height='100'/><p><strong>Dados</strong>: <i>Olympic Venues<i> - COI (2013)</p><p>fonte imagem:<i>https://pt.wikipedia.org<i></p><p>Av. Pres. Castelo Branco, Portão 3 - Maracanã, Rio de Janeiro - RJ, 20271-130, Brasil <br><br> -22.9737038537, -43.393444311 </p>");
    //MARACANÃZINHO
    var maracazinho = L.marker([-22.913715840205942, -43.22923684509363] , {icon: violetIcon});
    maracazinho.bindPopup("<h2>Equipamentos Olímpicos Rio2016</h2><h3>Ginásio Gilberto Cardoso - Maracanãzinho</h3><img src='./Img/Maracanazinho.jpg'width='150'height='100'/><p><strong>Dados</strong>: <i>Olympic Venues<i> - COI (2013)</p><p>fonte imagem:<i>https://www.zerozero.pt/<i></p><p>Av. Pres. Castelo Branco, Portão 3 - Maracanã, Rio de Janeiro - RJ, 20271-130, Brasil <br><br> -22.9137158402, -43.229236845 </p>");
    //EST. NILTON SANTOS
    var ns = L.marker([-22.893067326383783, -43.292312802764854] , {icon: violetIcon});
    ns.bindPopup("<h2>Equipamentos Olímpicos Rio2016</h2><h3>Estádio Olímpico Nilton Santos</h3><img src='./Img/Engenhao.jpg'width='150'height='100'/><p><strong>Dados</strong>: <i>Olympic Venues<i> - COI (2013)</p><p>fonte imagem:<i>https://pt.wikipedia.org<i></p><p> R. José dos Reis, 425 - Engenho de Dentro, Rio de Janeiro - RJ, 20770-001, Brasil<br><br> -22.8930673263, -43.2923128027</p>");
    //EST. DE REMO - LAGOA
    var remo = L.marker([-22.976391331681132, -43.21829915858618] , {icon: violetIcon});
    remo.bindPopup("<h2>Equipamentos Olímpicos Rio2016</h2><h3>Estádio de Remo - Lagoa Rodrigo de Freitas</h3><img src='./Img/Estadio_Remo.jpg'width='150'height='100'/><p><strong>Dados</strong>: <i>Olympic Venues<i> - COI (2013)</p><p>fonte imagem:<i>https://frerj.com.br/<i></p><p> Av. Borges de Medeiros, 1424 - Lagoa, Rio de Janeiro - RJ, 22430-042, Brasil<br><br> -22.9763913316, -43.218299158</p>");
    //ESTÁDIO DE DEODORO
    var estdeod = L.marker([-22.860274990292634, -43.406540305152696] , {icon: violetIcon});
    estdeod.bindPopup("<h2>Equipamentos Olímpicos Rio2016</h2><h3>Estádio de Deodoro</h3><img src='./Img/Estadio_Deodoro.jpg'width='150'height='100'/><p><strong>Dados</strong>: <i>Olympic Venues<i> - COI (2013)</p><p>fonte imagem:<i>https://pt.wikipedia.org<i></p><p> Estr. São Pedro de Alcântara, 2020 - Vila Militar, Rio de Janeiro - RJ, 21615-435, Brasil<br><br> -22.8602749902, -43.4065403051</p>");
    //ARENA DA JUVENTUDE
    var arenjuv = L.marker([-22.859043418455553, -43.403833536337565] , {icon: violetIcon});
    arenjuv.bindPopup("<h2>Equipamentos Olímpicos Rio2016</h2><h3>Arena da Juventude</h3><img src='./Img/Deodoro_Arena.jpg'width='150'height='100'/><p><strong>Dados</strong>: <i>Olympic Venues<i> - COI (2013)</p><p>fonte imagem:<i>https://pt.wikipedia.org<i></p><p> Estr. São Pedro de Alcântara, 2020 - Vila Militar, Rio de Janeiro - RJ, 21615-435, Brasil<br><br> -22.8590434184, -43.4038335363</p>");
    //ARENA COPACBANA
    var acopa = L.marker([-22.96594658368468, -43.17291927999211] , {icon: violetIcon});
    acopa.bindPopup("<h2>Equipamentos Olímpicos Rio2016</h2><h3>Arena Copacabana</h3><img src='./Img/Arena_Copacabana.jpg'width='150'height='100'/><p><strong>Dados</strong>: <i>Olympic Venues<i> - COI (2013)</p><p>fonte imagem:<i>https://pt.squarespace.com/<i></p><p> Praia de Copacabana, Avenida Atlântica, Rio de Janeiro - RJ, Brasil<br><br> -22.965946583, -43.172919279</p>");
    //RIO CENTRO
    var rc = L.marker([-22.976868346799645, -43.41140574453507] , {icon: violetIcon});
    rc.bindPopup("<h2>Equipamentos Olímpicos Rio2016</h2><h3>Rio Centro</h3><img src='./Img/Rio_Centro.jpg'width='150'height='100'/><p><strong>Dados</strong>: <i>Olympic Venues<i> - COI (2013)</p><p>fonte imagem:<i>https://pt.wikipedia.org<i></p><p> Av. Salvador Allende, 6555 - Barra da Tijuca, Rio de Janeiro - RJ, 22783-127, Brasil<br><br> -22.9768683467, -43.411405744</p>");
    //MARINA DA GLÓRIA
    var mgloria = L.marker([-22.91968216710618, -43.170062744836144] , {icon: violetIcon});
    mgloria.bindPopup("<h2>Equipamentos Olímpicos Rio2016</h2><h3>Marina da Glória</h3><img src='./Img/MarinadGloria.jpeg'width='150'height='100'/><p><strong>Dados</strong>: <i>Olympic Venues<i> - COI (2013)</p><p>fonte imagem:<i>http://rededoesporte.gov.br<i></p><p> Av. Infante Dom Henrique, S/N - Glória, Rio de Janeiro - RJ, 20021-140, Brasil<br><br> -22.919682167, -43.1700627448</p>");
    //ESTÁDIO DE HOCKEY
    var hoquei = L.marker([-22.860759747984073, -43.402583416429856] , {icon: violetIcon});
    hoquei.bindPopup("<h2>Equipamentos Olímpicos Rio2016</h2><h3>Centro Olímpico de Hóquei</h3><img src='./Img/Estadio_Hockey.jpg'width='150'height='100'/><p>fonte imagem:<i>https://pt.wikipedia.org<i></p><p>Estr. São Pedro de Alcântara, 2020 - Vila Militar, Rio de Janeiro - RJ, 21615-435, Brasil<br><br> -22.8607597479, -43.4025834164</p>");
    //ESTÁDIO CANOAGEM
    var canoagem = L.marker([-22.848352171070854, -43.40266958919081] , {icon: violetIcon});
    canoagem.bindPopup("<h2>Equipamentos Olímpicos Rio2016</h2><h3>Estádio de Canoagem Slalom</h3><img src='./Img/Park_AquaticoDeod.jpg'width='150'height='100'/><p><strong>Dados</strong>: <i>Olympic Venues<i> - COI (2013)</p><p>fonte imagem:<i>https://pt.wikipedia.org<i></p><p>Estr. Mal. Alencastro, 1357 - Ricardo de Albuquerque, Rio de Janeiro - RJ, 21625-000, Brasil<br><br> -22.8483521710, -43.402669589</p>");
    //CENTRO OLÍMPICO DE HIPISMO
    var hipismo = L.marker([-22.86934159011371, -43.40593318919044] , {icon: violetIcon});
    hipismo.bindPopup("<h2>Equipamentos Olímpicos Rio2016</h2><h3>Centro Olímpico de Hipismo</h3><img src='./Img/Hipismo.jpg'width='150'height='100'/><p><strong>Dados</strong>: <i>Olympic Venues<i> - COI (2013)</p><p>fonte imagem:<i>https://pt.wikipedia.org<i></p><p>Av. Duque de Caxias, 2660 - Magalhães Bastos, Rio de Janeiro - RJ, 21745-590, Brasil<br><br> -22.869341590, -43.405933189</p>");
    //CENTRO DE MONTAIN BIKE
    var mountainbike = L.marker([-22.850319622776507, -43.40066549348341] , {icon: violetIcon});
    mountainbike.bindPopup("<h2>Equipamentos Olímpicos Rio2016</h2><h3>Centro Mointain Bike</h3><img src='./Img/Mountainbike.jpg'width='150'height='100'/><p><strong>Dados</strong>: <i>Olympic Venues<i> - COI (2013)</p><p>fonte imagem:<i>https://pt.wikipedia.org<i></p><p>Estr. Mal. Alencastro, 1357 - Ricardo de Albuquerque, Rio de Janeiro - RJ, 21625-000, Brasil<br><br> -22.850319622, -43.400665493</p>");
    //CENTRO AQUÁTICO DE DEODORO
    var centro_aqua = L.marker([-22.861554750282956, -43.40358041802617] , {icon: violetIcon});
    centro_aqua.bindPopup("<h2>Equipamentos Olímpicos Rio2016</h2><h3>Centro Aquático de Deodoro</h3><img src='./Img/Centro_Aqua.jpg'width='150'height='100'/><p><strong>Dados</strong>: <i>Olympic Venues<i> - COI (2013)</p><p>fonte imagem:<i>https://pt.wikipedia.org<i></p><p>Estr. São Pedro de Alcântara, 2020 - Vila Militar, Rio de Janeiro - RJ, 21615-435, Brasil<br><br> -22.8615547502, -43.403580418</p>");
    //CENTRO OLÍMPICO DE TIRO
    var tiro = L.marker([-22.858300477141572, -43.41038170268424] , {icon: violetIcon});
    tiro.bindPopup("<h2>Equipamentos Olímpicos Rio2016</h2><h3>Centro Olímpico de Tiro</h3><img src='./Img/CentroTiro.jpg'width='150'height='100'/><p><strong>Dados</strong>: <i>Olympic Venues<i> - COI (2013)</p><p>fonte imagem:<i>https://pt.wikipedia.org<i></p><p>Av. Brasil, 27195 - Vila Militar, Rio de Janeiro - RJ, 21615-338, Brasil<br><br> -22.8583004771, -43.410381702</p>");
    //CENTRO OLÍMPICO DE GOLFE
    var golfe = L.marker([-23.00518015052519, -43.40756864651939] , {icon: violetIcon});
    golfe.bindPopup("<h2>Equipamentos Olímpicos Rio2016</h2><h3>Campo Olímpico de Golfe</h3><img src='./Img/CampoGolfe.jpg'width='150'height='100'/><p><strong>Dados</strong>: <i>Olympic Venues<i> - COI (2013)</p><p>fonte imagem:<i>https://pt.wikipedia.org<i></p><p>Av. Gen. Moisés Castelo Branco Filho, 700 - Barra da Tijuca, Rio de Janeiro - RJ, 22793-365, Brasil<br><br> -23.0052130812, -43.407568646</p>");
    //FORTE DE COPACABANA
    var fortec = L.marker([-22.98595684565693, -43.186532673845825] , {icon: violetIcon});
    fortec.bindPopup("<h2>Equipamentos Olímpicos Rio2016</h2><h3>Forte de Copacabana</h3><img src='./Img/Forte.jpg'width='150'height='100'/><p><strong>Dados</strong>: <i>Olympic Venues<i> - COI (2013)</p><p>fonte imagem:<i>https://pt.wikipedia.org<i></p><p>Praça Cel. Eugênio Franco, 1, Posto 6 - Copacabana, Rio de Janeiro - RJ, 22070-020, Brasil<br><br> -22.985956845, -43.1865326738</p>");


    var olimpico = L.layerGroup ([bmx,parqolimp,maraca,maracazinho,ns,remo,estdeod,arenjuv,acopa,rc,mgloria,hoquei,canoagem,hipismo,mountainbike,centro_aqua,tiro,golfe,fortec]).addTo(map);


    //GEOJSON

    //MUNICÍPIO DE MATOSINHOS
    var myDataCMM = L.geoJSON(CMM,{
        color:'#F6E3CE',
        weight: 1.5,
    onEachFeature: function (feature, layer) { 
        let freg = feature.properties.Freguesia;
        console.log(feature);
        let type = feature.geometry.type
        let coord = feature.geometry.coordinates
        layer.bindPopup('<h2>União de Freguesias: <h3>'+ freg + '</h3><h4>Município: Matosínhos</h4>')
    }})
    .addTo(map);

    //ALOJAMENTO LOCAL
    var stylePoint = {
        radius: 5,
        fillColor: "#0489B1",
        color: "#FFFFFF",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };

    var Alojamento = L.geoJSON(AlojamentoL,{
        onEachFeature: function (feature, layer) { 
            let dom = feature.properties.Denominaca;
            let mod = feature.properties.Modalidade;
            let utent = feature.properties.NrUtentes;
            let end = feature.properties.Endereco;
            let post = feature.properties.CodigoPost;
            let type = feature.geometry.type
            let coord = feature.geometry.coordinates
            layer.bindPopup('<h2><img src="./Img/AL.png"width="40"height="40"> &nbsp;ALOJAMENTO LOCAL </h2><p><strong>Denominação</strong>: ' + dom + '</p> <p><strong>Modalidade</strong>: ' + mod + '</p> <p><strong>Nº Utentes</strong>: ' + utent + '</p><p><strong>Endereço</strong>:  ' + end + ' </p> <p><strong>CTT</strong>: ' + post + '</p> <p><strong>Lat/Long</strong>: &nbsp;'+ coord +'</p> <p><strong>Fonte</strong>: Sistema de Informação Geográfica do Turismo - SIGTUR 2020</p>');
        },
        pointToLayer: function (feature, latlng){
            return L.circleMarker(latlng, stylePoint);
        },
    })
    .addTo(map);

    //MAPA DE CALOR ALOJAMENTO LOCAL

    var mcalorAL = L.esri.Heat.featureLayer({
        url: 'https://services5.arcgis.com/AMh9EzyFGgthLT1q/ArcGIS/rest/services/Estabelecimentos_de_AL_MATOSI/FeatureServer/0',
        radius: 50
    });
    mcalorAL.addTo(map);


    //AGÊNCIAS DE TURISMO E VIAGEM
    var redpoint = {
        radius: 5,
        fillColor: "red",
        color: "#FFFFFF",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };

    var Agencia = L.geoJSON(Agencias,{
        onEachFeature: function (feature, layer) { 
            let dom = feature.properties.Denominaca;
            let end = feature.properties.Endereco;
            let post = feature.properties.CodigoPost;
            let selo = feature.properties.SeloCleanS;
            let type = feature.geometry.type
            let coord = feature.geometry.coordinates
            layer.bindPopup('<h2>Agências de Turismo e Viagem</h2><p><strong>Denominação</strong>: ' + dom + '</p> <p><strong>Endereço</strong>: ' + end + '</p> <p><strong>CTT</strong>: ' + post + '</p><p><strong>Selo <i>Clean & Safe</i></strong>:  ' + selo + ' </p> <p><strong>Lat/Long</strong>: &nbsp;'+ coord +'</p> <p><strong>Fonte</strong>: Sistema de Informação Geográfica do Turismo - SIGTUR 2020</p>');
        },
        pointToLayer: function (feature, latlng){
            return L.circleMarker(latlng, redpoint);
        },
    })
    .addTo(map);

    //HOTEIS
    var yellowpoint = {
        radius: 5,
        fillColor: "#FFFF00",
        color: "#FFFFFF",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };

    var ET = L.geoJSON(hoteis,{
        onEachFeature: function (feature, layer) { 
            let tip = feature.properties.TipologiaE;
            let nome = feature.properties.Denominaca;
            let morad = feature.properties.Endereco;
            let cod = feature.properties.CodigoPost;
            let quarto = feature.properties.NrQuartos;
            let sclean = feature.properties.SeloCleanS;
            let xy = feature.properties.LatLong;
            let type = feature.geometry.type;
            let coord = feature.geometry.coordinates;
            layer.bindPopup('<h1>' + tip + ' <i class="fas fa-concierge-bell"></i></h1><p><strong>Denominação:</strong> ' + nome + '</p><p><strong>Endereço:</strong> ' + morad + '</p><p><strong>CTT</strong>: ' + cod + '</p><p><strong>Nr Quartos</strong>: ' + quarto + '</p><p><strong>Selo Clean&Safe</strong>: ' + sclean + '</p><p><strong>Lat/Long</strong>: ' + xy + '</p><p><strong>Fonte</strong>: Sistema de Informação Geográfica do Turismo - SIGTUR 2020</p>');
        },
        pointToLayer: function (feature, latlng){
            return L.circleMarker(latlng, yellowpoint);
        },
    })
    .addTo(map);

    //MUNICÍPIO RIO DE JANEIRO
    var MunicipioRJ = L.geoJSON(MunicipioRJ,{
        color:'#F6E3CE',
        weight: 1.5,
    onEachFeature: function (feature, layer) { 
        let idp = feature.properties.Id;
        let type = feature.geometry.type
        let coord = feature.geometry.coordinates
        layer.bindPopup('<h2>Município do Rio de Janeiro</h2><h3>RJ, Brasil</h3>') 
    }})
    .addTo(map);

    //LIMITE FAVELAS
    var Limite_Favelas = L.geoJSON(Limite_Favelas,{
        color:'orange',
        weight: 1.5,
    onEachFeature: function (feature, layer) { 
        let nome = feature.properties.Nome;
        let bairro = feature.properties.Bairro;
        let domicilio = feature.properties.Porte;
        let area = feature.properties.Area_Ha;
        console.log(feature);
        let type = feature.geometry.type;
        let coord = feature.geometry.coordinates;
        layer.bindPopup('<h1>Favela: ' + nome + '</h1> <h2>Bairro: ' + bairro + '</h2> <p><strong>Área</strong>: ' + area + ' ha</p><p><strong>Porte</strong>: ' + domicilio + '</p><p><strong>Fonte</strong>: IBGE - Censo Demográfico 2010<br> e Instituto Pereira Passos (IPP)</p>');  
    }})
    .addTo(map);

    //UNIDADES DE POLÍCIAS PACIFICADORA (UPP)
    var UPP = L.geoJSON(UPP,{
        color:'#2E64FE',
        weight: 1,
    onEachFeature: function (feature, layer) { 
        let nomeabrev = feature.properties.nomeabrev;
        let type = feature.geometry.type
        let coord = feature.geometry.coordinates
        layer.bindPopup('<h1>' + nomeabrev + '</h1><h3> Territórios ocupados pelas Unidades de Polícia Pacificadora (UPP) - 2017</h3><img src="./Img/UPP_Logo.png"width="150"height="65"/><p>Projeto da Secretaria Estadual de Segurança do Rio de Janeiro, iniciado em 2008 e que pretendia instituir polícias comunitárias em favelas, principalmente na capital do estado, como forma de desarticular os crimes organizados que dominam esses territórios.</p>') 
    }})
    .addTo(map);

    // ADICIONANDO LEGENDA

    /*var legend = L.control({ position: "bottomright" });

    legend.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h4>Dificuldade</h4>";
    div.innerHTML += '<i style="background: #ff0000"></i><span>Difícil</span><br>';
    div.innerHTML += '<i style="background: #e6e600"></i><span>Moderado</span><br>';
    div.innerHTML += '<i style="background: #009933"></i><span>Fácil</span><br>';

    return div;
    };

    legend.addTo(map);*/            


    //CONTROLE DE LAYERS

    //BASE MAP
    var baselayers = {
        'Imaginary': Imaginary,
        'OpenStreetMap':OpenStreet,
        'Topo Map': TopoMap,
    };
    //LAYERS RJ
    var layers = {
        '<strong>Matosinhos</strong> - Alojamento Local (AL)': Alojamento,
        '<strong>Matosinhos</strong> - Mapa de Calor (AL)': mcalorAL,
        '<strong>Matosinhos</strong> - Empreendimentos Turísticos (ET)':ET,
        '<strong>Matosinhos</strong> - Agências de Turismo e Viagem': Agencia,
        '<strong>Matosinhos</strong> - Município': myDataCMM,
        '<strong>RJ</strong> - Município do Rio de Janeiro': MunicipioRJ,
        '<strong>RJ</strong> - Áreas de Favela': Limite_Favelas,
        '<strong>RJ</strong> - Unidades de Polícia Pacificadora (UPP)': UPP,
        '<strong>RJ</strong> - Equipamentos Olímpicos RIO2016': olimpico,
    };


    L.control.layers(baselayers, layers).addTo(map);


    //SCALE
    L.control.scale().addTo(map);

    //ADD ZOOM BAR
    var zoom_bar = new L.Control.ZoomBar({position: 'topleft'}).addTo(map);

    //Draw Tools
    var drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);
   // Initialise the draw control and pass it the FeatureGroup of editable layers
    var drawControl = new L.Control.Draw({draw: {
  polygon: {
    shapeOptions: {
      color: 'yellow'
    },
  },
  polyline: {
    shapeOptions: {
      color: 'red'
    },
  },
  rect: {
    shapeOptions: {
      color: 'yellow'
    },
  },
  circle: {
    shapeOptions: {
      color: 'orange'
    },
  },
},edit: {featureGroup: drawnItems}});
map.addControl(drawControl);
map.on('draw:created', function (e) {
  var type = e.layerType,
  layer = e.layer;
  if (type === 'marker') {
  layer.bindPopup('A popup!');
  }
  drawnItems.addLayer(layer);
});

   //RULER
    var options = {
    position: 'topleft',
    circleMarker: {               // Leaflet circle marker options for points used in this plugin
        color: 'red',
        radius: 2
      },

    lineStyle: {                  // Leaflet polyline options for lines used in this plugin
        color: 'red',
        dashArray: '1,6'
      },

    lengthUnit: {
      factor: '0.539956803',     //  from km to nm
      display: 'km',
      decimal: 3,
      label: 'Distance',
    },

    angleUnit: {
        display: '&deg;',        // This is the display value will be shown on the screen. Example: 'Gradian'
        decimal: 3,              // Bearing result will be fixed to this value.
        factor: null,            // This option is required to customize angle unit. Specify solid angle value for angle unit. Example: 400 (for gradian).
        label: 'Bearing:'
      }
    };
    L.control.ruler(options).addTo(map);
