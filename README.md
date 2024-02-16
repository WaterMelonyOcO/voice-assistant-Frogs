# Site with voice-assistant from the Frogs team
**ONLY FOR IAHD Web Accessibility Hackathon**
---------------
Видео с ютуба - https://youtu.be/Om387pdzwRY

Другие видео - https://disk.yandex.ru/d/1yJnZUd3o6rzIw

--------------

Используемые технологии: React, CSS, react-router-dom, react-helmet, i18next, python, node.js, whisper, sqlite

--------------
Сайт с голосовым помощником от команды Frogs.

Функционал голосового помощника реализован, но мы не успели его связать с фронтендом. Всю информацию можно посмотреть в ветке "backend"

Преимущества сайта: 
1. Упрощенная навигация – все ссылки на разделы сайта находятся на главной, ориентироваться можно как при помощи поиска в шапке и каталога слева, так и при помощи голосового помощника, который поможет перейти на страницы товаров. Также для упрощения понятия о местонахождении на странице, все главные ссылки имеют эффекты, по которым просто понять, где именно находится посетитель.

![image](https://github.com/WaterMelonyOcO/voice-assistant-Frogs/assets/111881249/90795555-e46c-45cc-88f7-9453b60bf058)
![image](https://github.com/WaterMelonyOcO/voice-assistant-Frogs/assets/111881249/7678376d-b8b9-4114-8c98-87c2818b9051)


2. Специальный режим, предназначенный для настройки сайта под каждого пользователя – содержит увеличение текста, изменение расстояния между буквами, изменения контрастности сайта и отключение изображений на всем сайте. Также по окну можно перемещаться при помощи клавиатуры (клавиши TAB и Enter).

![image](https://github.com/WaterMelonyOcO/voice-assistant-Frogs/assets/111881249/7498a974-9562-4533-874b-6d3b3f032385)

3. Адаптация под все устройства, от десктопа до телефона включительно.

![image](https://github.com/WaterMelonyOcO/voice-assistant-Frogs/assets/111881249/3f2f7685-29f6-46cc-8411-7eaa5a9e6fa2)
![image](https://github.com/WaterMelonyOcO/voice-assistant-Frogs/assets/111881249/51cc108a-fadd-4def-8aea-5a0813283d4d)
![image](https://github.com/WaterMelonyOcO/voice-assistant-Frogs/assets/111881249/03304a35-870c-493f-bb69-96687b2ba4e1)


4. Перемещение при помощи клавиатуры – на сайте можно перемещаться при помощи клавиатуры
и выбирать товары клавишой Enter.


5. Идеальная работа скринридера – при подключении на сайте скринридера он все точно и ясно озвучивает, от ссылок и содержимого навигации, до текстовых значений в кнопках и названиях товара.

6. Смена языка – на сайте реализована смена языка с русского на английский и обратно. 

![image](https://github.com/WaterMelonyOcO/voice-assistant-Frogs/assets/111881249/ebdaf953-dfa9-42dc-b7d3-13c7da1b7d3b)
![image](https://github.com/WaterMelonyOcO/voice-assistant-Frogs/assets/111881249/3b39ab7d-4068-4b69-9c30-2571d48de5fc)

7. Карта сайта – в футере находится отдельная карта сайта, на которой показаны все пункты навигации и страницы, что помогает быстрее ориентироваться и лучше понимать структуру. 

![image](https://github.com/WaterMelonyOcO/voice-assistant-Frogs/assets/111881249/7e40dea7-15e3-43a6-afd8-7dafe1f678cc)

8. Специальная подпись под картинками в карточке товара – эта подпись нужна для тех, кто отключил картинки и все равно хочет узнать, что на них находится, или же для людей с пониженным зрением. На сайте представлена тестовая информация, то есть пример, какой может быть данная надпись.

![image](https://github.com/WaterMelonyOcO/voice-assistant-Frogs/assets/111881249/14779db1-21b3-480b-bd28-6b4f03bc7d45)

9. Упрощенная текстовая информация в карточке товара – описание товара сразу представлено с расстоянием между слов и ограничением в 80 слов в строке, для того, чтобы текст было легче читать.

![image](https://github.com/WaterMelonyOcO/voice-assistant-Frogs/assets/111881249/7664c025-1b84-444e-84f6-528c581fe98c)

10. Кнопка поднятия вверх – нужна для того, чтобы пользователю не приходилось долго листать информацию. На нее также можно нажать, используя клавиатуру – клавиши TAB и Enter.

![image](https://github.com/WaterMelonyOcO/voice-assistant-Frogs/assets/111881249/123dd4aa-ae6e-4a89-b52c-d585f289d411)

11. Все кнопки имеют иконки рядом с названием – это нужно для упрощения понимания, что делает данная кнопка; во время просмотра и страницы можно легко заметить эти иконки и при помощи метода ассоциаций сразу понять, какое действие произойдет при нажатии на кнопку или куда она будет вести.

![image](https://github.com/WaterMelonyOcO/voice-assistant-Frogs/assets/111881249/594bf273-eb36-4ff5-ae84-d27f788826c5)


12. Иное отображения акционной информации на сайте – при отключении картинок на сайте предусмотрена также иное отображение для баннера, а именно – графика исчезает, а текстовая информация остается, что удовлетворяет сразу две стороны: и покупателя, который может заинтересоваться данным предложением, и продавца, который не остается в минусе из-за отключения графической информации.

![image](https://github.com/WaterMelonyOcO/voice-assistant-Frogs/assets/111881249/c2a67ef9-a9a7-4e54-b602-1be5047133b4)


13. Все формы имеют label и placeholder, благодаря чему при их заполнении скринридером озвучивается полная информация.

![image](https://github.com/WaterMelonyOcO/voice-assistant-Frogs/assets/111881249/8294a327-9e3d-43cb-bf1a-8c002149f035)


14.Заголовки на всех страницах – также относятся к упрощению понимания навигации на сайте

![image](https://github.com/WaterMelonyOcO/voice-assistant-Frogs/assets/111881249/b557704d-f0a9-41c1-a159-7fad1248aab6)
![image](https://github.com/WaterMelonyOcO/voice-assistant-Frogs/assets/111881249/5d13b64f-e966-4719-9275-63cd99854d7a)
![image](https://github.com/WaterMelonyOcO/voice-assistant-Frogs/assets/111881249/9cbc8764-17cc-4798-a73b-68edd41dde11)




  
