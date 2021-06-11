# BTTdevAMOUNT
Auto withdraw BTT

Скрипт автовывода BTTdevAMOUNT v3. 
Телеграм - https://t.me/BTTdevAMOUNT <br>
В файле ***withdraw.js*** - требуется указать порт (брать из браузера при откытом окне speed) 

![img-2021-06-11-13-41-42](https://user-images.githubusercontent.com/16225816/121674938-5e9d6300-cabb-11eb-9d8e-806e6c532918.png)

и withdraw_amount - установить требуемую сумму вывода за 1 транзакцию. 

![img-2021-06-11-13-44-33](https://user-images.githubusercontent.com/16225816/121674878-49283900-cabb-11eb-8db0-0d806ce45acd.png)

Как только он увидит баланс на кошельке более значения withdraw_amount и при наличии такой или более на
Вашем кошельке произойдет вывод. Через секунду будет производить попытки вывода снова,
при выполнении таких же условий. Скрипт пишет логи. Транзакции помечаются словами WARN

За донаты буду благодарен - *TSyUu26uvXy4Up5d8MXApTBGKCzuDcjRCR*


Для работы нужен Node.js  <br>
Если пользовались другими скриптами, то скорее всего у Вас он уже установлен.  <br>
Если нет, то скачиваем тут - https://nodejs.org/en/ Версию LTS. <br>
Далее, либо запускаем INSTALL.bat, либо в коммандной строке вводим:  <br>
npm install node-fetch  <br>
npm install log4js  <br>
<br>
Запуск производить через START.bat
<br><br>

Вопросы по скрипту Вы можете задавать в группе - https://t.me/BTTdevAMOUNTtalk <br>
Канал с оповещениями о поступлении средств на счет шлюза - https://t.me/BTTdevAMOUNT

Решения некоторых проблем:
1. Скрипт зависает при клике внутри окна с работающим скриптом - https://t.me/BTTdevAMOUNTtalk/4175
