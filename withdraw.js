// Скрипт автовывода BTTdevAMOUNT v3
// Телеграм - https://t.me/BTTdevAMOUNT
// Настройка - требуется указать порт (брать из браузера при откытом окне speed) и
// withdraw_amount - установить требуемую сумму вывода за 1 транзакцию. Как только он 
// увидит баланс на кошельке более значения withdraw_amount и при наличии такой или более на
// Вашем кошельке произойдет вывод. Через секунду будет производить попытки вывода снова,
// при выполнении таких же условий. Скрипт пишет логи. Транзакции помечаются словами WARN
// За донаты буду благодарен - TSyUu26uvXy4Up5d8MXApTBGKCzuDcjRCR

const fetch = require("node-fetch");
const log4js = require("log4js");

//НАСТРОЙКИ-НАЧАЛО-------------------------------------------------------------------
var port = 58941;
var withdraw_amount = 1000;
//НАСТРОЙКИ-КОНЕЦ--------------------------------------------------------------------

//ВСЕ-ЧТО-НИЖЕ-НЕ-МЕНЯТЬ-------------------------------------------------------------
var logger = log4js.getLogger();
logger.level = "debug";
log4js.configure(
    {
        appenders: {
            file: {
                type: 'file',
                filename: 'debug.log',
                maxLogSize: 10 * 1024 * 1024, // = 10Mb
                backups: 5, // keep five backup files
                compress: true, // compress the backups
                encoding: 'utf-8',
                mode: 0o0640,
                flags: 'w+'
            },
            dateFile: {
                type: 'dateFile',
                filename: 'more-debug.log',
                pattern: 'yyyy-MM-dd-hh',
                compress: true
            },
            out: {
                type: 'stdout'
            }
        },
        categories: {
            default: {appenders: ['file', 'dateFile', 'out'], level: 'trace'}
        }
    }
);

var a;
var b;
var token;
withdraw_amount_send = withdraw_amount * 1000000;

function start() {
    fetch("http://127.0.0.1:" + port + "/api/token", {
        "headers": {
            "accept": "*/*",
            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site"
        },
        "referrer": "https://speed.btt.network/",
        "referrerPolicy": "origin",
        "body": null,
        "method": "GET",
        "mode": "cors"
    })
        .then(response => response.text())
        .then((response) => {
            token = (response);
            logger.debug("Версия - beta 3");
            logger.debug("token - " + token);
            logger.debug("Порт - " + port);
            logger.debug("Вывод по - " + withdraw_amount + " ВТТ");
            logger.info("Поехали!!!");
        })
        .then((response) => {
            setInterval(function () {
                try {
                    withdrawal();
                } catch (e) {
                    logger.error(e);
                }
            }, 1000);
        })
}

function withdrawal() {

    fetch("http://127.0.0.1:" + port + "/api/status")
        .then(response => response.json())
        .then(mydata => {
            b = (mydata.balance) / 1000000;
            logger.debug("На in-app балансе: " + b + " ВТТ");
        })

    fetch("https://api.trongrid.io/v1/accounts/41C109C53D081D1BAF2AA792C7EEF5B3A76DF4F711")
        .then(response => response.json())
        .then(data => {
            a = (data.data[0].assetV2[1].value) / 1000000;
            logger.debug("Баланс шлюза: " + a + " ВТТ");
            if (a >= withdraw_amount && b >= withdraw_amount) {
                fetch("http://127.0.0.1:" + port + "/api/exchange/withdrawal?t=" + token + "&amount=" + withdraw_amount_send, {
                    "headers": {
                        "accept": "*/*",
                        "accept-language": "en-US,en;q=0.9",
                        "content-type": "text/plain",
                        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "cross-site"
                    },
                    "referrer": "https://speed.btt.network/",
                    "body": null,
                    "method": "POST",
                    "mode": "cors"
                })
                    .then(response => response.text())
                    .then((response) => {
                        tr_id = (response);
                        logger.fatal("Отправляем на вывод" + withdraw_amount + "BTT");
                        logger.warn("ID транзакции - " + tr_id);
                    })
            }
        })
}

start();
