1. Посмотреть где я
   pwd
2. Создать папку
   mkdir HW1
3. Зайти в папку
   cd HW1
4. Создать 3 папки
   mkdir folder1 folder2 folder3
5. Зайти в любоую папку
   cd folder1
6. Создать 5 файлов (3 txt, 2 json)
   touch t1.txt t2.txt t3.txt json1.json json2.json
7. Создать 3 папки
   mkdir folder1_1 folder1_2 folder1_3
8. Вывести список содержимого папки
   ls -la
9. - Открыть любой txt файл
     vim t1.txt
10. - написать туда что-нибудь, любой текст.
      i  
      test1
      test2
      test3
11. - сохранить и выйти.
      ESC :wq
12. Выйти из папки на уровень выше
    cd ..
13. переместить любые 2 файла, которые вы создали, в любую другую папку.
    mv folder1/t1.txt folder2/t1.txt
    mv folder1/t2.txt folder2/t2.txt или
    mv {t1.txt t2.txt} folder2
14. скопировать любые 2 файла, которые вы создали, в любую другую папку.
    cp folder1/t3.txt folder2/t3.txt
    cp folder1/json1.json folder2/json1.json
15. Найти файл по имени
    find folder2/t2.txt
16. просмотреть содержимое в реальном времени (команда grep) изучите как она работает.
    grep t2.txt tail
17. вывести несколько первых строк из текстового файла
    head +3 t2.txt
18. вывести несколько последних строк из текстового файла
    tail +3 t2.txt
19. просмотреть содержимое длинного файла (команда less) изучите как она работает.
    less t2.txt
20. вывести дату и время
    date

Задание \*

1. Отправить http запрос на сервер
   http://162.55.220.72:5005/terminal-hw-request

1)  curl http://162.55.220.72:5005/terminal-hw-request

2)  2.1 отдает мои данные:
    curl "http://162.55.220.72:5005/get_method?age=39&name=Iryna"
    Responce:
    [
    "Iryna",
    "39"
    ]

    2.2 отдает "Natalia MOLODEC":
    curl -X POST http://162.55.220.72:5005/get_method --data "name=Iryna&age39"
    Responce: "Natalia MOLODEC"

2. Написать скрипт который выполнит автоматически пункты 3, 4, 5, 6, 7, 8, 13

script:
mkdir HW1_script

    #!/bin/bash

    cd HW1  (cd /d/WorkQA_RB/group_29_free/HW1_script)

    mkdir folder1 folder2 folder3

    cd folder1

    touch t1.txt t2.txt t3.txt json1.json json2.json

mkdir folder1_1 folder1_2 folder1_3

    ls -la

    mv folder1/t1.txt folder2/t1.txt
    mv folder1/t2.txt folder2/t2.txt

запуск скрипта
/bin/bash 'd:/WorkQA_RB/group_29_free/HW1/HW1_script/myscrypt.txt'
