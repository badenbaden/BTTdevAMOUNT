# BTTdevAMOUNT
Auto withdraw BTT

Скрипт автовывода BTTdevAMOUNT v3
Телеграм - https://t.me/BTTdevAMOUNT <br>
Настройка - требуется указать порт (брать из браузера при откытом окне speed) и
withdraw_amount - установить требуемую сумму вывода за 1 транзакцию. Как только он 
увидит баланс на кошельке более значения withdraw_amount и при наличии такой или более на
Вашем кошельке произойдет вывод. Через секунду будет производить попытки вывода снова,
при выполнении таких же условий. Скрипт пишет логи. Транзакции помечаются словами WARN

За донаты буду благодарен - TSyUu26uvXy4Up5d8MXApTBGKCzuDcjRCR


Для работы нужен Node.js
Если пользовались другими скриптами, то скорее всего у Вас он уже установлен. Если нет, то в коммандной строке - npm install node-fetch.
Дополнительно нужно установить только log4js (в коммандной строке выполнить - npm install log4js). Достаточно запустить для этого INSTALL.bat
Запуск производить через START.bat
