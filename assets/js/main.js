// tabs
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContent = document.querySelectorAll('[data-tab-content]');

console.log(tabs);
console.log(tabContent);

tabs.forEach(tab => {

    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);

        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tabContent.forEach(tabContent => {
            tabContent.classList.remove('active');
        });
        tab.classList.add('active');
        target.classList.add('active');
    });
})


// arrays

let iconDisArray = [
    // {
    //     "img": "./images/icons/home-04.png",
    //     "name": "Dashboard"
    // }, {
    //     "img": "./images/icons/Icon.png",
    //     "name": "Log"
    // }, {
    //     "img": "./images/icons/wallet-02.png",
    //     "name": "Wallet ID"
    // }, {
    //     "img": "./images/icons/settings.png",
    //     "name": "Settings"
    // }, {
    //     "img": "./images/icons/info-square-01-contained.png",
    //     "name": "Info"
    // }, {
    //     "img": "./images/icons/game.png",
    //     "name": "EPIC"
    // }
]

let iconTopArray = [
    {
        "ico": "./images/icons/language-square.png"
    }, {
        "ico": "./images/icons/off_solid.png"
    }, {
        "ico": "./images/icons/login.png"
    }
]

let categoryArray = [
    {
        'text': "Completed",
        'bigText': "30 %"
    }, {
        'text': "Hashrate RT",
        'bigText': " 20 mgh"
    }, {
        'text': "Timer",
        'bigText': "24 : 12 : 33"
    }
]

let cardInfo = [
    {
        "img":
            "temperature-02.png",
        "minitext": "Temperature",
        "bigtext": "58 ˙C"
    },
    {
        "img":
            "cpu-charge.png",
        "minitext": "Chip",
        "bigtext": "18"
    },
    {
        "img":
            "electricity.png",
        "minitext": "Error",
        "bigtext": "<span>P</span> <span>N</span> B 10"
    },
    {
        "img":
            "slack.png",
        "minitext": "Fan",
        "bigtext": "L 2000 R 2000"
    }
]

// end arrays


// array ForEach
iconDisArray.forEach((icon) => {
    document.getElementById("icon-dispatcher").innerHTML += `
    <a href="#">    
        <img src="${icon.img}">
        <p>${icon.name}</p>
    </a>
    `
})

iconTopArray.forEach((icon) => {
    document.querySelector(".menu-icons").innerHTML += `
    <a href="#">    
        <img src="${icon.ico}">
    </a>
    `
})



categoryArray.forEach((icon) => {
    document.querySelector(".category").innerHTML += `
   <div>
    <p>${icon.text}</p>
    <h3>${icon.bigText}</h3>
   </div>
    `
})

cardInfo.forEach((icon) => {
    document.querySelector(".pose2").innerHTML += `
   <div>
   <img src="./images/icons/${icon.img}">
   <div class="texts">
       <p>${icon.minitext}</p>
       <h3>${icon.bigtext}</h3>
   </div>
   </div>
    `
})

// end array ForEach

// extra


if (document.querySelector(".inp").checked === true) {
    document.querySelector('.span').innerHTML = `<button class="success">ON</button>`
}
else {
    document.querySelector('.span').innerHTML = `<button class="disable">OFF</button>`
}

// end extra

// charts

var options = {
    colors: ['#E34957', '#58D299'],
    series: [{
        name: 'Temperature 65 ˙C',
        data: [75, 88, 94, 77, 58, 78, 94]
    }, {
        name: 'Hashing 41 MH',

        data: [35, 55, 21, 10, 21, 37, 64]
    }],
    chart: {
        height: 300, type: 'area',
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    yaxis: {
        show: false,
        categories: [
            "0", " ", "30m", "1H", "1H", "1D", "7D", "", "", "", ""
        ],
        labels: {
            show: false
        }
    },
    xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"], labels: {
            show: false
        },
        lines: { show: false }, axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();



var options2 = {
    colors: ['#A038AA'],
    series: [{
        name: 'Temperature 65 ˙C',
        data: [75, 88, 94, 77, 58, 78, 94]
    }],
    chart: {
        height: 300, type: 'area',
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    yaxis: {
        show: false,
        categories: [
            "0", " ", "30m", "1H", "1H", "1D", "7D", "", "", "", ""
        ],
        labels: {
            show: false
        }
    },
    xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"], labels: {
            show: false
        },
        lines: { show: false }, axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
};

var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.render();

// end charts