// 大學資訊
const universities = {
    // 國立綜合大學
    ntu: {
        name: '國立臺灣大學',
        location: { lat: 25.0174, lng: 121.5405 },
        info: '創立於1928年，為臺灣最頂尖的綜合型大學。在多個領域都有傑出表現，QS世界大學排名中名列前茅。',
        address: '台北市大安區羅斯福路四段1號'
    },
    nthu: {
        name: '國立清華大學',
        location: { lat: 24.7961, lng: 120.9967 },
        info: '創立於1956年，以理工科系聞名，近年在生醫、人文等領域也有卓越成就。為兩岸三地清華之一。',
        address: '新竹市東區光復路二段101號'
    },
    nctu: {
        name: '國立陽明交通大學',
        location: { lat: 24.7861, lng: 120.9968 },
        info: '由陽明大學與交通大學合併而成，在電機資訊、生醫科技等領域居領導地位。',
        address: '新竹市東區大學路1001號'
    },
    nccu: {
        name: '國立政治大學',
        location: { lat: 24.9870, lng: 121.5767 },
        info: '創立於1927年，在人文社會科學、法商領域享有盛名，為臺灣最著名的文法商學院。',
        address: '台北市文山區指南路二段64號'
    },
    ncu: {
        name: '國立中央大學',
        location: { lat: 24.9682, lng: 121.1932 },
        info: '創立於1962年，以理工科系聞名，在太空科學、地球科學等領域居於領先地位。',
        address: '桃園市中壢區中大路300號'
    },
    ncku: {
        name: '國立成功大學',
        location: { lat: 22.9997, lng: 120.2169 },
        info: '創立於1931年，為臺灣南部最優秀的綜合型大學，在工程、醫學等領域表現傑出。',
        address: '台南市東區大學路1號'
    },
    nsysu: {
        name: '國立中山大學',
        location: { lat: 22.6273, lng: 120.2655 },
        info: '創立於1980年，為南臺灣重要學府，以海洋科學、管理學院著名，校園依山面海，景色優美。',
        address: '高雄市鼓山區蓮海路70號'
    },
    ntnu: {
        name: '國立臺灣師範大學',
        location: { lat: 25.0259, lng: 121.5283 },
        info: '創立於1946年，為臺灣培育中學師資的重要學府，近年來在教育、人文、運動等領域都有優異表現。',
        address: '台北市大安區和平東路一段162號'
    },
    nknu: {
        name: '國立高雄師範大學',
        location: { lat: 22.6477, lng: 120.2968 },
        info: '創立於1954年，為南臺灣重要的師資培育機構，在教育、藝術等領域表現優異。',
        address: '高雄市苓雅區和平一路116號'
    },
    ntpu: {
        name: '國立臺北大學',
        location: { lat: 25.1369, lng: 121.4751 },
        info: '創立於1949年，在法律、商學等領域享有盛名，三峽校區擁有遼闊的校地與現代化建設。',
        address: '新北市三峽區大學路151號'
    },
    nkust: {
        name: '國立高雄科技大學',
        location: { lat: 22.7528, lng: 120.3265 },
        info: '由三校合併而成的科技大學，在海事、工程、商管等領域都有傑出表現。',
        address: '高雄市三民區建工路415號'
    },
    ntust: {
        name: '國立臺灣科技大學',
        location: { lat: 25.0131, lng: 121.5433 },
        info: '創立於1974年，為臺灣第一所技職體系大學，在工程、設計等領域享有盛名。',
        address: '台北市大安區基隆路四段43號'
    },
    nycu: {
        name: '國立雲林科技大學',
        location: { lat: 23.6951, lng: 120.5339 },
        info: '創立於1991年，為雲林地區的重點科技大學，在工程、設計、管理等領域表現優異。',
        address: '雲林縣斗六市大學路三段123號'
    },
    nchu: {
        name: '國立中興大學',
        location: { lat: 24.1238, lng: 120.6747 },
        info: '創立於1919年，為中台灣歷史最悠久的綜合型大學，在農業、生命科學等領域居領導地位。',
        address: '台中市南區國光路250號'
    },
    ncue: {
        name: '國立彰化師範大學',
        location: { lat: 24.0679, lng: 120.5584 },
        info: '創立於1971年，為中台灣重要的師資培育機構，在教育、工業教育等領域表現優異。',
        address: '彰化市進德路1號'
    },
    
    // 私立大學
    fcu: {
        name: '逢甲大學',
        location: { lat: 24.1799, lng: 120.6466 },
        info: '創立於1961年，為中台灣著名私立大學，以工程、商管著名，創新創業教育表現傑出。',
        address: '台中市西屯區文華路100號'
    },
    thu: {
        name: '東海大學',
        location: { lat: 24.1812, lng: 120.6040 },
        info: '創立於1955年，為台灣最早的私立大學之一，以人文藝術、建築系聞名，校園綠地廣闊優美。',
        address: '台中市西屯區台灣大道四段1727號'
    },
    tku: {
        name: '淡江大學',
        location: { lat: 25.1742, lng: 121.4480 },
        info: '創立於1950年，為台灣歷史最悠久的私立大學之一，以國際化、資訊化、未來化為辦學理念。',
        address: '新北市淡水區英專路151號'
    },
    shu: {
        name: '世新大學',
        location: { lat: 24.9891, lng: 121.5456 },
        info: '創立於1956年，以新聞傳播領域享譽盛名，在媒體傳播、影視製作等領域居領導地位。',
        address: '台北市文山區木柵路一段17巷1號'
    },
    mcu: {
        name: '銘傳大學',
        location: { lat: 25.0849, lng: 121.5226 },
        info: '創立於1957年，為台灣第一所獲得美國認證的大學，以國際化、實用專業課程著稱。',
        address: '台北市士林區中山北路五段250號'
    },
    fju: {
        name: '輔仁大學',
        location: { lat: 25.0374, lng: 121.4319 },
        info: '創立於1925年，為台灣歷史最悠久的天主教大學，以醫學、外語等領域著名。',
        address: '新北市新莊區中正路510號'
    },
    cycu: {
        name: '中原大學',
        location: { lat: 24.9570, lng: 121.2405 },
        info: '創立於1955年，為基督教大學，以理工科系著名，重視產學合作與實務教育。',
        address: '桃園市中壢區中北路200號'
    },
    pccu: {
        name: '中國文化大學',
        location: { lat: 25.1371, lng: 121.5433 },
        info: '創立於1962年，位於陽明山，以人文藝術、觀光、體育等領域著名，校園環境優美。',
        address: '台北市士林區華岡路55號'
    },    // ... 更多國立綜合大學 ...
    ncnu: {
        name: '國立暨南國際大學',
        location: { lat: 23.9512, lng: 120.9276 },
        info: '創立於1995年，位於南投縣埔里鎮，為中部地區重要學府，致力發展國際化教育。',
        address: '南投縣埔里鎮大學路1號'
    },
    ndhu: {
        name: '國立東華大學',
        location: { lat: 23.9020, lng: 121.5412 },
        info: '創立於1994年，為花蓮地區最大的綜合型大學，以多元文化教育著稱。',
        address: '花蓮縣壽豐鄉大學路二段1號'
    },
    nuk: {
        name: '國立高雄大學',
        location: { lat: 22.7328, lng: 120.2842 },
        info: '創立於2000年，為高雄地區重要學府，發展特色為法學、管理及理工領域。',
        address: '高雄市楠梓區高雄大學路700號'
    },

    // 國立師範及教育大學
    ntue: {
        name: '國立臺北教育大學',
        location: { lat: 25.0278, lng: 121.5381 },
        info: '創立於1895年，為台灣最古老的師範教育機構之一，在教育領域具有重要地位。',
        address: '台北市大安區和平東路二段134號'
    },
    nptu: {
        name: '國立屏東大學',
        location: { lat: 22.6698, lng: 120.4873 },
        info: '由原屏東教育大學及屏東商業技術學院合併而成，為屏東地區重要高等教育機構。',
        address: '屏東市民生路4-18號'
    },
    nttu: {
        name: '國立臺東大學',
        location: { lat: 22.7544, lng: 121.1425 },
        info: '創立於1948年，為台東地區唯一的綜合型大學，著重在地特色發展。',
        address: '台東市大學路二段369號'
    },

    // 國立科技大學
    ntut: {
        name: '國立臺北科技大學',
        location: { lat: 25.0424, lng: 121.5354 },
        info: '創立於1912年，為臺灣歷史最悠久的科技大學，在工程領域享有盛名。',
        address: '台北市大安區忠孝東路三段1號'
    },
    ncut: {
        name: '國立勤益科技大學',
        location: { lat: 24.1492, lng: 120.6985 },
        info: '創立於1971年，位於台中市，以精密機械與工程技術領域見長。',
        address: '台中市太平區坪林里中山路二段57號'
    },
    npu: {
        name: '國立澎湖科技大學',
        location: { lat: 23.6645, lng: 119.5329 },
        info: '創立於1991年，為離島地區唯一的科技大學，發展海洋特色課程。',
        address: '澎湖縣馬公市六合路300號'
    },

    // 私立綜合大學
    pu: {
        name: '靜宜大學',
        location: { lat: 24.2262, lng: 120.5779 },
        info: '創立於1920年，為天主教大學，以外語教學及人文素養見長。',
        address: '台中市沙鹿區臺灣大道七段200號'
    },
    cgu: {
        name: '長庚大學',
        location: { lat: 25.0336, lng: 121.3897 },
        info: '創立於1987年，為醫學專業大學，在醫學及生物科技領域表現優異。',
        address: '桃園市龜山區文化一路259號'
    },
    yzu: {
        name: '元智大學',
        location: { lat: 24.9703, lng: 121.2608 },
        info: '創立於1989年，以工程與管理領域著名，重視產學合作。',
        address: '桃園市中壢區遠東路135號'
    },
    kmu: {
        name: '高雄醫學大學',
        location: { lat: 22.6478, lng: 120.3271 },
        info: '創立於1954年，為南台灣第一所私立醫學院校，在醫學教育領域居領導地位。',
        address: '高雄市三民區十全一路100號'
    },
    tmu: {
        name: '臺北醫學大學',
        location: { lat: 25.0261, lng: 121.5605 },
        info: '創立於1960年，為台北地區重要的醫學大學，在醫學教育及研究方面表現優異。',
        address: '台北市信義區吳興街250號'
    },

    // 私立科技大學
    ctu: {
        name: '建國科技大學',
        location: { lat: 23.8628, lng: 120.5740 },
        info: '創立於1965年，位於彰化市，以工程技術及商管領域為主要發展方向。',
        address: '彰化市介壽北路1號'
    },
    must: {
        name: '明新科技大學',
        location: { lat: 24.8636, lng: 121.0190 },
        info: '創立於1970年，位於新竹縣，在工程、管理等領域具有特色。',
        address: '新竹縣新豐鄉新興路1號'
    },
    cyut: {
        name: '朝陽科技大學',
        location: { lat: 24.1813, lng: 120.6474 },
        info: '創立於1994年，為台中地區著名科技大學，以設計及資訊科技見長。',
        address: '台中市霧峰區吉峰東路168號'
    },
    ksu: {
        name: '崑山科技大學',
        location: { lat: 22.9999, lng: 120.2276 },
        info: '創立於1964年，為台南地區重要科技大學，在工程及商管領域表現優異。',
        address: '台南市永康區崑大路195號'
    },
    hku: {
        name: '弘光科技大學',
        location: { lat: 24.2247, lng: 120.5906 },
        info: '創立於1967年，以醫護、生技領域著名，培育許多醫療照護人才。',
        address: '台中市沙鹿區台灣大道六段1018號'
    },
    stu: {
        name: '樹德科技大學',
        location: { lat: 22.7534, lng: 120.4162 },
        info: '創立於1997年，位於高雄市，以設計及資訊科技領域表現優異。',
        address: '高雄市燕巢區橫山路59號'
    }
};

let map;
let marker;

// 初始化 Google Maps
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 23.97565, lng: 120.97388 },
        zoom: 7
    });
    marker = new google.maps.Marker({
        map: map
    });
}

// 更新大學資訊
function updateUniversityInfo(universityId) {
    const university = universities[universityId];
    if (!university) return;

    document.getElementById('universityInfo').innerHTML = `
        <h6>${university.name}</h6>
        <p>${university.info}</p>
        <p><i class="bi bi-geo-alt-fill"></i> ${university.address}</p>
    `;

    // 更新地圖位置
    map.setCenter(university.location);
    map.setZoom(15);
    marker.setPosition(university.location);
}

// 載入儲存的簽到記錄
function loadCheckinRecords() {
    const records = JSON.parse(localStorage.getItem('checkinRecords') || '[]');
    const tbody = document.getElementById('checkinRecords');
    tbody.innerHTML = records
        .sort((a, b) => moment(b.time).valueOf() - moment(a.time).valueOf())
        .map(record => `
            <tr>
                <td>${moment(record.time).format('YYYY/MM/DD HH:mm:ss')}</td>
                <td>${record.name}</td>
                <td>${universities[record.university].name}</td>
            </tr>
        `)
        .join('');
}

// 新增簽到記錄
function addCheckinRecord(name, university) {
    const records = JSON.parse(localStorage.getItem('checkinRecords') || '[]');
    records.push({
        time: new Date().toISOString(),
        name,
        university
    });
    localStorage.setItem('checkinRecords', JSON.stringify(records));
    loadCheckinRecords();
}

// 事件監聽器
document.addEventListener('DOMContentLoaded', function() {
    // 設定 moment.js 語系
    moment.locale('zh-tw');
    
    // 載入儲存的簽到記錄
    loadCheckinRecords();

    // 監聽大學選擇變更
    document.getElementById('university').addEventListener('change', function(e) {
        if (e.target.value) {
            updateUniversityInfo(e.target.value);
        }
    });

    // 監聽表單提交
    document.getElementById('checkinForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const university = document.getElementById('university').value;

        if (name && university) {
            addCheckinRecord(name, university);
            this.reset();
            alert('簽到成功！');
        }
    });
});
