const flags = [
    { country: "Afghanistan", image: "https://flagcdn.com/w320/af.png", capital: "Kabul", continent: "Asia" },
    { country: "Albania", image: "https://flagcdn.com/w320/al.png", capital: "Tirana", continent: "Europe" },
    { country: "Algeria", image: "https://flagcdn.com/w320/dz.png", capital: "Algiers", continent: "Africa" },
    { country: "Andorra", image: "https://flagcdn.com/w320/ad.png", capital: "Andorra la Vella", continent: "Europe" },
    { country: "Angola", image: "https://flagcdn.com/w320/ao.png", capital: "Luanda", continent: "Africa" },
    { country: "Antigua and Barbuda", image: "https://flagcdn.com/w320/ag.png", capital: "Saint John's", continent: "North America" },
    { country: "Argentina", image: "https://flagcdn.com/w320/ar.png", capital: "Buenos Aires", continent: "South America" },
    { country: "Armenia", image: "https://flagcdn.com/w320/am.png", capital: "Yerevan", continent: "Asia" },
    { country: "Australia", image: "https://flagcdn.com/w320/au.png", capital: "Canberra", continent: "Oceania" },
    { country: "Austria", image: "https://flagcdn.com/w320/at.png", capital: "Vienna", continent: "Europe" },
    { country: "Azerbaijan", image: "https://flagcdn.com/w320/az.png", capital: "Baku", continent: "Asia" },
    { country: "Bahamas", image: "https://flagcdn.com/w320/bs.png", capital: "Nassau", continent: "North America" },
    { country: "Bahrain", image: "https://flagcdn.com/w320/bh.png", capital: "Manama", continent: "Asia" },
    { country: "Bangladesh", image: "https://flagcdn.com/w320/bd.png", capital: "Dhaka", continent: "Asia" },
    { country: "Barbados", image: "https://flagcdn.com/w320/bb.png", capital: "Bridgetown", continent: "North America" },
    { country: "Belarus", image: "https://flagcdn.com/w320/by.png", capital: "Minsk", continent: "Europe" },
    { country: "Belgium", image: "https://flagcdn.com/w320/be.png", capital: "Brussels", continent: "Europe" },
    { country: "Belize", image: "https://flagcdn.com/w320/bz.png", capital: "Belmopan", continent: "North America" },
    { country: "Benin", image: "https://flagcdn.com/w320/bj.png", capital: "Porto-Novo", continent: "Africa" },
    { country: "Bhutan", image: "https://flagcdn.com/w320/bt.png", capital: "Thimphu", continent: "Asia" },
    { country: "Bolivia", image: "https://flagcdn.com/w320/bo.png", capital: "Sucre", continent: "South America" },
    { country: "Bosnia and Herzegovina", image: "https://flagcdn.com/w320/ba.png", capital: "Sarajevo", continent: "Europe" },
    { country: "Botswana", image: "https://flagcdn.com/w320/bw.png", capital: "Gaborone", continent: "Africa" },
    { country: "Brazil", image: "https://flagcdn.com/w320/br.png", capital: "Brasília", continent: "South America" },
    { country: "Brunei", image: "https://flagcdn.com/w320/bn.png", capital: "Bandar Seri Begawan", continent: "Asia" },
    { country: "Bulgaria", image: "https://flagcdn.com/w320/bg.png", capital: "Sofia", continent: "Europe" },
    { country: "Burkina Faso", image: "https://flagcdn.com/w320/bf.png", capital: "Ouagadougou", continent: "Africa" },
    { country: "Burundi", image: "https://flagcdn.com/w320/bi.png", capital: "Gitega", continent: "Africa" },
    { country: "Cabo Verde", image: "https://flagcdn.com/w320/cv.png", capital: "Praia", continent: "Africa" },
    { country: "Cambodia", image: "https://flagcdn.com/w320/kh.png", capital: "Phnom Penh", continent: "Asia" },
    { country: "Cameroon", image: "https://flagcdn.com/w320/cm.png", capital: "Yaoundé", continent: "Africa" },
    { country: "Canada", image: "https://flagcdn.com/w320/ca.png", capital: "Ottawa", continent: "North America" },
    { country: "Central African Republic", image: "https://flagcdn.com/w320/cf.png", capital: "Bangui", continent: "Africa" },
    { country: "Chad", image: "https://flagcdn.com/w320/td.png", capital: "N'Djamena", continent: "Africa" },
    { country: "Chile", image: "https://flagcdn.com/w320/cl.png", capital: "Santiago", continent: "South America" },
    { country: "China", image: "https://flagcdn.com/w320/cn.png", capital: "Beijing", continent: "Asia" },
    { country: "Colombia", image: "https://flagcdn.com/w320/co.png", capital: "Bogotá", continent: "South America" },
    { country: "Comoros", image: "https://flagcdn.com/w320/km.png", capital: "Moroni", continent: "Africa" },
    { country: "Congo (Congo-Brazzaville)", image: "https://flagcdn.com/w320/cg.png", capital: "Brazzaville", continent: "Africa" },
    { country: "Costa Rica", image: "https://flagcdn.com/w320/cr.png", capital: "San José", continent: "North America" },
    { country: "Croatia", image: "https://flagcdn.com/w320/hr.png", capital: "Zagreb", continent: "Europe" },
    { country: "Cuba", image: "https://flagcdn.com/w320/cu.png", capital: "Havana", continent: "North America" },
    { country: "Cyprus", image: "https://flagcdn.com/w320/cy.png", capital: "Nicosia", continent: "Asia" },
    { country: "Czech Republic", image: "https://flagcdn.com/w320/cz.png", capital: "Prague", continent: "Europe" },
    { country: "Denmark", image: "https://flagcdn.com/w320/dk.png", capital: "Copenhagen", continent: "Europe" },
    { country: "Djibouti", image: "https://flagcdn.com/w320/dj.png", capital: "Djibouti", continent: "Africa" },
    { country: "Dominica", image: "https://flagcdn.com/w320/dm.png", capital: "Roseau", continent: "North America" },
    { country: "Dominican Republic", image: "https://flagcdn.com/w320/do.png", capital: "Santo Domingo", continent: "North America" },
    { country: "Ecuador", image: "https://flagcdn.com/w320/ec.png", capital: "Quito", continent: "South America" },
    { country: "Egypt", image: "https://flagcdn.com/w320/eg.png", capital: "Cairo", continent: "Africa" },
    { country: "El Salvador", image: "https://flagcdn.com/w320/sv.png", capital: "San Salvador", continent: "North America" },
    { country: "Equatorial Guinea", image: "https://flagcdn.com/w320/gq.png", capital: "Malabo", continent: "Africa" },
    { country: "Eritrea", image: "https://flagcdn.com/w320/er.png", capital: "Asmara", continent: "Africa" },
    { country: "Estonia", image: "https://flagcdn.com/w320/ee.png", capital: "Tallinn", continent: "Europe" },
    { country: "Eswatini", image: "https://flagcdn.com/w320/sz.png", capital: "Mbabane", continent: "Africa" },
    { country: "Ethiopia", image: "https://flagcdn.com/w320/et.png", capital: "Addis Ababa", continent: "Africa" },
    { country: "Fiji", image: "https://flagcdn.com/w320/fj.png", capital: "Suva", continent: "Oceania" },
    { country: "Finland", image: "https://flagcdn.com/w320/fi.png", capital: "Helsinki", continent: "Europe" },
    { country: "France", image: "https://flagcdn.com/w320/fr.png", capital: "Paris", continent: "Europe" },
    { country: "Gabon", image: "https://flagcdn.com/w320/ga.png", capital: "Libreville", continent: "Africa" },
    { country: "Gambia", image: "https://flagcdn.com/w320/gm.png", capital: "Banjul", continent: "Africa" },
    { country: "Georgia", image: "https://flagcdn.com/w320/ge.png", capital: "Tbilisi", continent: "Asia" },
    { country: "Germany", image: "https://flagcdn.com/w320/de.png", capital: "Berlin", continent: "Europe" },
    { country: "Ghana", image: "https://flagcdn.com/w320/gh.png", capital: "Accra", continent: "Africa" },
    { country: "Greece", image: "https://flagcdn.com/w320/gr.png", capital: "Athens", continent: "Europe" },
    { country: "Grenada", image: "https://flagcdn.com/w320/gd.png", capital: "Saint George's", continent: "North America" },
    { country: "Guatemala", image: "https://flagcdn.com/w320/gt.png", capital: "Guatemala City", continent: "North America" },
    { country: "Guinea", image: "https://flagcdn.com/w320/gn.png", capital: "Conakry", continent: "Africa" },
    { country: "Guinea-Bissau", image: "https://flagcdn.com/w320/gw.png", capital: "Bissau", continent: "Africa" },
    { country: "Guyana", image: "https://flagcdn.com/w320/gy.png", capital: "Georgetown", continent: "South America" },
    { country: "Haiti", image: "https://flagcdn.com/w320/ht.png", capital: "Port-au-Prince", continent: "North America" },
    { country: "Honduras", image: "https://flagcdn.com/w320/hn.png", capital: "Tegucigalpa", continent: "North America" },
    { country: "Hungary", image: "https://flagcdn.com/w320/hu.png", capital: "Budapest", continent: "Europe" },
    { country: "Iceland", image: "https://flagcdn.com/w320/is.png", capital: "Reykjavik", continent: "Europe" },
    { country: "India", image: "https://flagcdn.com/w320/in.png", capital: "New Delhi", continent: "Asia" },
    { country: "Indonesia", image: "https://flagcdn.com/w320/id.png", capital: "Jakarta", continent: "Asia" },
    { country: "Iran", image: "https://flagcdn.com/w320/ir.png", capital: "Tehran", continent: "Asia" },
    { country: "Iraq", image: "https://flagcdn.com/w320/iq.png", capital: "Baghdad", continent: "Asia" },
    { country: "Ireland", image: "https://flagcdn.com/w320/ie.png", capital: "Dublin", continent: "Europe" },
    { country: "Israel", image: "https://flagcdn.com/w320/il.png", capital: "Jerusalem", continent: "Asia" },
    { country: "Italy", image: "https://flagcdn.com/w320/it.png", capital: "Rome", continent: "Europe" },
    { country: "Jamaica", image: "https://flagcdn.com/w320/jm.png", capital: "Kingston", continent: "North America" },
    { country: "Japan", image: "https://flagcdn.com/w320/jp.png", capital: "Tokyo", continent: "Asia" },
    { country: "Jordan", image: "https://flagcdn.com/w320/jo.png", capital: "Amman", continent: "Asia" },
    { country: "Kazakhstan", image: "https://flagcdn.com/w320/kz.png", capital: "Astana", continent: "Asia" },
    { country: "Kenya", image: "https://flagcdn.com/w320/ke.png", capital: "Nairobi", continent: "Africa" },
    { country: "Kiribati", image: "https://flagcdn.com/w320/ki.png", capital: "Tarawa", continent: "Oceania" },
    { country: "Kosovo", image: "https://flagcdn.com/w320/xk.png", capital: "Pristina", continent: "Europe" },
    { country: "Kuwait", image: "https://flagcdn.com/w320/kw.png", capital: "Kuwait City", continent: "Asia" },
    { country: "Kyrgyzstan", image: "https://flagcdn.com/w320/kg.png", capital: "Bishkek", continent: "Asia" },
    { country: "Laos", image: "https://flagcdn.com/w320/la.png", capital: "Vientiane", continent: "Asia" },
    { country: "Latvia", image: "https://flagcdn.com/w320/lv.png", capital: "Riga", continent: "Europe" },
    { country: "Lebanon", image: "https://flagcdn.com/w320/lb.png", capital: "Beirut", continent: "Asia" },
    { country: "Lesotho", image: "https://flagcdn.com/w320/ls.png", capital: "Maseru", continent: "Africa" },
    { country: "Liberia", image: "https://flagcdn.com/w320/lr.png", capital: "Monrovia", continent: "Africa" },
    { country: "Libya", image: "https://flagcdn.com/w320/ly.png", capital: "Tripoli", continent: "Africa" },
    { country: "Liechtenstein", image: "https://flagcdn.com/w320/li.png", capital: "Vaduz", continent: "Europe" },
    { country: "Lithuania", image: "https://flagcdn.com/w320/lt.png", capital: "Vilnius", continent: "Europe" },
    { country: "Luxembourg", image: "https://flagcdn.com/w320/lu.png", capital: "Luxembourg City", continent: "Europe" },
    { country: "Madagascar", image: "https://flagcdn.com/w320/mg.png", capital: "Antananarivo", continent: "Africa" },
    { country: "Malawi", image: "https://flagcdn.com/w320/mw.png", capital: "Lilongwe", continent: "Africa" },
    { country: "Malaysia", image: "https://flagcdn.com/w320/my.png", capital: "Kuala Lumpur", continent: "Asia" },
    { country: "Maldives", image: "https://flagcdn.com/w320/mv.png", capital: "Malé", continent: "Asia" },
    { country: "Mali", image: "https://flagcdn.com/w320/ml.png", capital: "Bamako", continent: "Africa" },
    { country: "Malta", image: "https://flagcdn.com/w320/mt.png", capital: "Valletta", continent: "Europe" },
    { country: "Marshall Islands", image: "https://flagcdn.com/w320/mh.png", capital: "Majuro", continent: "Oceania" },
    { country: "Mauritania", image: "https://flagcdn.com/w320/mr.png", capital: "Nouakchott", continent: "Africa" },
    { country: "Mauritius", image: "https://flagcdn.com/w320/mu.png", capital: "Port Louis", continent: "Africa" },
    { country: "Mexico", image: "https://flagcdn.com/w320/mx.png", capital: "Mexico City", continent: "North America" },
    { country: "Micronesia", image: "https://flagcdn.com/w320/fm.png", capital: "Palikir", continent: "Oceania" },
    { country: "Moldova", image: "https://flagcdn.com/w320/md.png", capital: "Chișinău", continent: "Europe" },
    { country: "Monaco", image: "https://flagcdn.com/w320/mc.png", capital: "Monaco", continent: "Europe" },
    { country: "Mongolia", image: "https://flagcdn.com/w320/mn.png", capital: "Ulaanbaatar", continent: "Asia" },
    { country: "Montenegro", image: "https://flagcdn.com/w320/me.png", capital: "Podgorica", continent: "Europe" },
    { country: "Morocco", image: "https://flagcdn.com/w320/ma.png", capital: "Rabat", continent: "Africa" },
    { country: "Mozambique", image: "https://flagcdn.com/w320/mz.png", capital: "Maputo", continent: "Africa" },
    { country: "Myanmar", image: "https://flagcdn.com/w320/mm.png", capital: "Naypyidaw", continent: "Asia" },
    { country: "Namibia", image: "https://flagcdn.com/w320/na.png", capital: "Windhoek", continent: "Africa" },
    { country: "Nauru", image: "https://flagcdn.com/w320/nr.png", capital: "Yaren", continent: "Oceania" },
    { country: "Nepal", image: "https://flagcdn.com/w320/np.png", capital: "Kathmandu", continent: "Asia" },
    { country: "Netherlands", image: "https://flagcdn.com/w320/nl.png", capital: "Amsterdam", continent: "Europe" },
    { country: "New Zealand", image: "https://flagcdn.com/w320/nz.png", capital: "Wellington", continent: "Oceania" },
    { country: "Nicaragua", image: "https://flagcdn.com/w320/ni.png", capital: "Managua", continent: "North America" },
    { country: "Niger", image: "https://flagcdn.com/w320/ne.png", capital: "Niamey", continent: "Africa" },
    { country: "Nigeria", image: "https://flagcdn.com/w320/ng.png", capital: "Abuja", continent: "Africa" },
    { country: "North Korea", image: "https://flagcdn.com/w320/kp.png", capital: "Pyongyang", continent: "Asia" },
    { country: "North Macedonia", image: "https://flagcdn.com/w320/mk.png", capital: "Skopje", continent: "Europe" },
    { country: "Norway", image: "https://flagcdn.com/w320/no.png", capital: "Oslo", continent: "Europe" },
    { country: "Oman", image: "https://flagcdn.com/w320/om.png", capital: "Masqat", continent: "Asia" },
    { country: "Pakistan", image: "https://flagcdn.com/w320/pk.png", capital: "Islamabad", continent: "Asia" },
    { country: "Palau", image: "https://flagcdn.com/w320/pw.png", capital: "Ngerulmud", continent: "Oceania" },
    { country: "Palestine", image: "https://flagcdn.com/w320/ps.png", capital: "East Jerusalem", continent: "Asia" },
    { country: "Panama", image: "https://flagcdn.com/w320/pa.png", capital: "Panama City", continent: "North America" },
    { country: "Papua New Guinea", image: "https://flagcdn.com/w320/pg.png", capital: "Port Moresby", continent: "Oceania" },
    { country: "Paraguay", image: "https://flagcdn.com/w320/py.png", capital: "Asunción", continent: "South America" },
    { country: "Peru", image: "https://flagcdn.com/w320/pe.png", capital: "Lima", continent: "South America" },
    { country: "Philippines", image: "https://flagcdn.com/w320/ph.png", capital: "Manila", continent: "Asia" },
    { country: "Poland", image: "https://flagcdn.com/w320/pl.png", capital: "Warsaw", continent: "Europe" },
    { country: "Portugal", image: "https://flagcdn.com/w320/pt.png", capital: "Lisbon", continent: "Europe" },
    { country: "Qatar", image: "https://flagcdn.com/w320/qa.png", capital: "Ad-Dawḩah", continent: "Asia" },
    { country: "Romania", image: "https://flagcdn.com/w320/ro.png", capital: "Bucharest", continent: "Europe" },
    { country: "Russia", image: "https://flagcdn.com/w320/ru.png", capital: "Moscow", continent: "Europe" },
    { country: "Rwanda", image: "https://flagcdn.com/w320/rw.png", capital: "Kigali", continent: "Africa" },
    { country: "Saint Kitts and Nevis", image: "https://flagcdn.com/w320/kn.png", capital: "Basseterre", continent: "North America" },
    { country: "Saint Lucia", image: "https://flagcdn.com/w320/lc.png", capital: "Castries", continent: "North America" },
    { country: "Saint Vincent and the Grenadines", image: "https://flagcdn.com/w320/vc.png", capital: "Kingstown", continent: "North America" },
    { country: "Samoa", image: "https://flagcdn.com/w320/ws.png", capital: "Apia", continent: "Oceania" },
    { country: "San Marino", image: "https://flagcdn.com/w320/sm.png", capital: "San Marino", continent: "Europe" },
    { country: "Sao Tome and Principe", image: "https://flagcdn.com/w320/st.png", capital: "São Tomé", continent: "Africa" },
    { country: "Saudi Arabia", image: "https://flagcdn.com/w320/sa.png", capital: "Ar Riyāḑ", continent: "Asia" },
    { country: "Senegal", image: "https://flagcdn.com/w320/sn.png", capital: "Dakar", continent: "Africa" },
    { country: "Serbia", image: "https://flagcdn.com/w320/rs.png", capital: "Belgrade", continent: "Europe" },
    { country: "Seychelles", image: "https://flagcdn.com/w320/sc.png", capital: "Victoria", continent: "Africa" },
    { country: "Sierra Leone", image: "https://flagcdn.com/w320/sl.png", capital: "Freetown", continent: "Africa" },
    { country: "Singapore", image: "https://flagcdn.com/w320/sg.png", capital: "Singapore", continent: "Asia" },
    { country: "Slovakia", image: "https://flagcdn.com/w320/sk.png", capital: "Bratislava", continent: "Europe" },
    { country: "Slovenia", image: "https://flagcdn.com/w320/si.png", capital: "Ljubljana", continent: "Europe" },
    { country: "Solomon Islands", image: "https://flagcdn.com/w320/sb.png", capital: "Honiara", continent: "Oceania" },
    { country: "Somalia", image: "https://flagcdn.com/w320/so.png", capital: "Mogadishu", continent: "Africa" },
    { country: "South Africa", image: "https://flagcdn.com/w320/za.png", capital: "Pretoria", continent: "Africa" },
    { country: "South Korea", image: "https://flagcdn.com/w320/kr.png", capital: "Seoul", continent: "Asia" },
    { country: "South Sudan", image: "https://flagcdn.com/w320/ss.png", capital: "Juba", continent: "Africa" },
    { country: "Spain", image: "https://flagcdn.com/w320/es.png", capital: "Madrid", continent: "Europe" },
    { country: "Sri Lanka", image: "https://flagcdn.com/w320/lk.png", capital: "Sri Jayewardenepura Kotte", continent: "Asia" },
    { country: "Sudan", image: "https://flagcdn.com/w320/sd.png", capital: "Khartum", continent: "Africa" },
    { country: "Suriname", image: "https://flagcdn.com/w320/sr.png", capital: "Paramaribo", continent: "South America" },
    { country: "Sweden", image: "https://flagcdn.com/w320/se.png", capital: "Stockholm", continent: "Europe" },
    { country: "Switzerland", image: "https://flagcdn.com/w320/ch.png", capital: "Bern", continent: "Europe" },
    { country: "Syria", image: "https://flagcdn.com/w320/sy.png", capital: "Dimashq", continent: "Asia" },
    { country: "Tajikistan", image: "https://flagcdn.com/w320/tj.png", capital: "Dušanbe", continent: "Asia" },
    { country: "Tanzania", image: "https://flagcdn.com/w320/tz.png", capital: "Dodoma", continent: "Africa" },
    { country: "Thailand", image: "https://flagcdn.com/w320/th.png", capital: "Bangkok", continent: "Asia" },
    { country: "Timor Leste", image: "https://flagcdn.com/w320/tl.png", capital: "Dili", continent: "Asia" },
    { country: "Togo", image: "https://flagcdn.com/w320/tg.png", capital: "Lomé", continent: "Africa" },
    { country: "Tonga", image: "https://flagcdn.com/w320/to.png", capital: "Nukualofa", continent: "Oceania" },
    { country: "Trinidad and Tobago", image: "https://flagcdn.com/w320/tt.png", capital: "Port-of-Spain", continent: "North America" },
    { country: "Tunisia", image: "https://flagcdn.com/w320/tn.png", capital: "Tunis", continent: "Africa" },
    { country: "Turkey", image: "https://flagcdn.com/w320/tr.png", capital: "Ankara", continent: "Asia" },
    { country: "Turkmenistan", image: "https://flagcdn.com/w320/tm.png", capital: "Aşgabat", continent: "Asia" },
    { country: "Tuvalu", image: "https://flagcdn.com/w320/tv.png", capital: "Funafuti", continent: "Oceania" },
    { country: "Uganda", image: "https://flagcdn.com/w320/ug.png", capital: "Kampala", continent: "Africa" },
    { country: "Ukraine", image: "https://flagcdn.com/w320/ua.png", capital: "Kyiv", continent: "Europe" },
    { country: "United Arab Emirates", image: "https://flagcdn.com/w320/ae.png", capital: "Abu Dhabi", continent: "Asia" },
    { country: "United Kingdom", image: "https://flagcdn.com/w320/gb.png", capital: "London", continent: "Europe" },
    { country: "United States", image: "https://flagcdn.com/w320/us.png", capital: "Washington, D.C.", continent: "North America" },
    { country: "Uruguay", image: "https://flagcdn.com/w320/uy.png", capital: "Montevideo", continent: "South America" },
    { country: "Uzbekistan", image: "https://flagcdn.com/w320/uz.png", capital: "Tashkent", continent: "Asia" },
    { country: "Vanuatu", image: "https://flagcdn.com/w320/vu.png", capital: "Port-Vila", continent: "Oceania" },
    { country: "Vatican City", image: "https://flagcdn.com/w320/va.png", capital: "Vatican City", continent: "Europe" },
    { country: "Venezuela", image: "https://flagcdn.com/w320/ve.png", capital: "Caracas", continent: "South America" },
    { country: "Vietnam", image: "https://flagcdn.com/w320/vn.png", capital: "Hanoi", continent: "Asia" },
    { country: "Yemen", image: "https://flagcdn.com/w320/ye.png", capital: "Ṣanʿāʾ", continent: "Asia" },
    { country: "Zambia", image: "https://flagcdn.com/w320/zm.png", capital: "Lusaka", continent: "Africa" },
    { country: "Zimbabwe", image: "https://flagcdn.com/w320/zw.png", capital: "Harare", continent: "Africa" }
];

let currentQuestion, remainingChances, gameMode;

function detectGameMode() {
    if (document.getElementById("flagImage")) {
        gameMode = "flag";
    } else if (document.getElementById("currentCountry")) {
        gameMode = "capital";
    }
}

function startGame() {
    if (!gameMode) {
        console.error("Error: Game mode is not set. Cannot start the game.");
        return;
    }

    if (!flags || flags.length === 0) {
        console.error("Error: Flags array is empty or undefined.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * flags.length);
    currentQuestion = flags[randomIndex];
    remainingChances = 3;

    document.getElementById("chances").textContent = remainingChances;
    document.getElementById("message").textContent = "";
    document.getElementById("guessInput").value = "";

    if (gameMode === "flag") {
        const flagImageElement = document.getElementById("flagImage");
        if (flagImageElement) {
            flagImageElement.src = currentQuestion.image;
        } else {
            console.error("Error: 'flagImage' element not found in the DOM.");
        }
    } else if (gameMode === "capital") {
        const currentCountryElement = document.getElementById("currentCountry");
        if (currentCountryElement) {
            currentCountryElement.textContent = currentQuestion.country;
        } else {
            console.error("Error: 'currentCountry' element not found in the DOM.");
        }
    }
}

function checkGuess() {
    if (!currentQuestion) {
        console.error("Error: No current question available.");
        return;
    }

    if (remainingChances === 0) return;

    const userGuess = document.getElementById("guessInput").value.trim().toLowerCase();
    if (userGuess === "") {
        document.getElementById("message").textContent = "⚠️ Please enter an answer!";
        return;
    }

    let correctAnswer = gameMode === "flag" 
        ? currentQuestion.country.toLowerCase() 
        : currentQuestion.capital.toLowerCase();

    correctAnswer = correctAnswer.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if (userGuess === correctAnswer) {
        document.getElementById("message").textContent = "🎉 Correct! Well done!";
    } else {
        remainingChances--;
        document.getElementById("chances").textContent = remainingChances;

        if (remainingChances === 0) {
            document.getElementById("message").textContent = `❌ Out of chances! The correct answer was "${correctAnswer}".`;
        } else {
            document.getElementById("message").textContent = "❌ Try again!";
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    detectGameMode();

    if (gameMode) {
        startGame();

        const guessInput = document.getElementById("guessInput");
        const submitButton = document.getElementById("submitButton");

        function handleKeyDown(event) {
            if (event.key === "Enter") {
                checkGuess();
            }
        }

        function handleClick() {
            checkGuess();
        }

        guessInput.removeEventListener("keydown", handleKeyDown);
        submitButton.removeEventListener("click", handleClick);

        guessInput.addEventListener("keydown", handleKeyDown);
        submitButton.addEventListener("click", handleClick);
    }
});
