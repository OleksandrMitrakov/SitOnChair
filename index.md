
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>SitOnChair</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/main.css">
    <script src="https://code.jquery.com/jquery-3.3.1.js"
            integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
            crossorigin="anonymous"></script>
</head>
<body>
<header>
    <nav class="container clearfix">
        <h1>SIT <a href="#">ON</a> CHAIR</h1>
        <ul class="menu">
            <li><a href="#">O FIRMIE</a>
                <ul class="drop-menu">
                    <li><a href="#">Aktualności</a></li>
                    <li><a href="#">Nasz team</a></li>
                    <li><a href="#">Historia</a></li>
                </ul>
            </li>
            <li><a href="#">GALERIA</a>
                <ul class="drop-menu">
                    <li><a href="#">Kuchenne</a></li>
                    <li><a href="#">Nowoczesne</a></li>
                    <li><a href="#">Drewniane</a></li>
                </ul>
            </li>
            <li><a href="#">KONTAKT</a>
            </li>
        </ul>
    </nav>
</header>
<!--Header -------------------------------- -->
<!--Slider -------------------------------- -->
<section class="top_gradient">
    <section class="top_gradient">
        <div class="container">
            <a href="#" id="btn_prev"><</a>
            <div id="gallery">
                <div class="photos">
                    <img src="images/black_chair.png">
                    <img src="images/red_chair.png">
                </div>
            </div>
            <div class="slider_text">
                <h1>SIT <span>ON</span> OUR <span>CHAIR</span></h1>
                <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis.
                    Maecenas
                    malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a,ultricies porta
                    urna.</p>
                <a href="#">ZOBACZ WIĘCEJ</a>
            </div>
            <a href="#" id="btn_next">></a>
        </div>
    </section>
    <!--Catalog -------------------------------- -->
    <div class="container clearfix">
        <div class="first_box" id="divbox1">
            <p id="pbox1">Chair CLAIR</p>
        </div>
        <div class="second_box" id="divbox2">
            <p id="pbox2">Chair MARGARITA</p>
        </div>
        <div class="third_box">
            <h2>Finds all inputs</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aspernatur debitis delectus
                dicta,
                dolorem eaque, eligendi harum, hic iste labore nesciunt nisi officia praesentium provident ut vero
                voluptates. Sequi!</p>
        </div>
    </div>
    <!--Cennik -------------------------------- -->
    <article>
        <div class="container clearfix">
            <p class="price">CENNIK</p>
            <div class="box" id="pricebox1">
                <div id="box_circle1"></div>
                <div class="circle1"></div>
                <p class="type_plan" id="type_plan1">BASIC PLAN</p>
                <p class="circle_price" id="price_basic">85<sup>99 PLN/MSC</sup></p>
                <div class="plan_options">
                    <p>Zakup towaru + dowóz</p>
                    <p>Serwis</p>
                </div>
                <a href="#" id="add_btn1">DOŁĄCZ</a>
            </div>
            <div class="box" id="pricebox2">
                <div id="box_circle2"></div>
                <div class="circle2"></div>
                <p class="type_plan" id="type_plan2">STANDARD PLAN</p>
                <p class="circle_price" id="price_standard">95<sup>99 PLN/MSC</sup></p>
                <div class="plan_options">
                    <p>Zakup towaru + dowóz</p>
                    <p>Serwis</p>
                    <p>Gwarancja 5 lat</p>
                </div>
                <a href="#" id="add_btn2">DOŁĄCZ</a>
            </div>
            <div class="box" id="pricebox3">
                <div id="box_circle3"></div>
                <div class="circle3"></div>
                <p class="type_plan" id="type_plan3">ADVANCE PLAN</p>
                <p class="circle_price" id="price_advance">211<sup>00 PLN/MSC</sup></p>
                <div class="plan_options">
                    <p>Zakup towaru + dowóz</p>
                    <p>Serwis</p>
                    <p>Gwarancja 6 lat</p>
                    <p>Porady projektanta</p>
                </div>
                <a href="#" id="add_btn3">DOŁĄCZ</a>
            </div>
        </div>
    </article>
    <!--KALKULATOR ----------------------------------->
    <section class="application clearfix container">
        <div class="main_width">
            <section class="choice_part inline">
                <p class="kalkulator">SKOMPONUJ SWOJE KRZESŁO</p>
                <div class="form">
                    <div class="drop_down_list">
                        <span class="list_label">Wybierz rodzaj</span>
                        <span class="list_arrow" id="arrow_chair_type"></span>
                        <ul class="list_panel chair_name">
                            <li data-price="250">Clair</li>
                            <li data-price="320">Margarita</li>
                            <li data-price="400">Selena</li>
                        </ul>
                    </div>
                    <div class="drop_down_list">
                        <span class="list_label">Wybierz kolor</span>
                        <span class="list_arrow" id="arrow_chair_color"></span>
                        <ul class="list_panel chair_colors">
                            <li data-price="20">Czerwony</li>
                            <li data-price="50">Czarny</li>
                            <li data-price="0">Pomarańczowy</li>
                        </ul>
                    </div>
                    <div class="drop_down_list">
                        <span class="list_label">Wybierz materiał</span>
                        <span class="list_arrow" id="arrow_chair_material"></span>
                        <ul class="list_panel chair_fabric">
                            <li data-price="100">Tkanina</li>
                            <li data-price="200">Skóra</li>
                        </ul>
                    </div>
                    <div class="checkbox_block">
                        <input type="checkbox" id="check2" data-transport-price="80">
                        <label for="check2" class="check2">Transport</label>
                    </div>
                </div>
            </section>
            <section class="image_part inline">
                <img src="images/red_chair.png">
            </section>
            <section class="summary_part inline">
                <p class="summary">PODSUMOWANIE</p>
                <div class="summary_panel">
                    <div class="panel_left">
                        <h4 class="title">Twój fotel</h4>
                        <span class="color"></span>
                        <span class="pattern"></span>
                        <span class="transport"></span>
                    </div>
                    <div class="panel_right">
                        <h4 class="title_value"></h4>
                        <span class="color value"></span>
                        <span class="pattern value"></span>
                        <span class="transport value"></span>
                    </div>
                    <div class="sum_label">SUMA</div>
                    <div class="sum"><strong></strong></div>
                </div>
                <a href="" class="green_button">Zamawiam</a>
            </section>
        </div>
    </section>
    <!--FORM ----------------------------------->
    <div id="contact_form" class="container clearfix">
        <p class="contact">KONTAKT</p>
        <form>
            <input type="text" name="name" placeholder="Imię"><br>
            <input type="email" name="e_mail" placeholder="email"><br>
            <textarea name="comments" rows="7" cols="36" placeholder="Wiadomość"></textarea><br>
        </form>
        <div class="send_section clearfix">
            <img src="images/red_chair.png">
            <div class="checkbox_block">
                <input id="check1" type="checkbox">
                <label for="check1">Zgadzam sie na przetwarzanie danych osobowych</label>
            </div>
            <input type="submit" name="submit" value="WYŚLIJ">
        </div>
    </div>
    <!--FOOTER ----------------------------------->
    <footer>
        <div class="container">
            <div class="copyright">
                <p>Copyright 2014 | All Rights Reserved. -Sit On Chair</p>
            </div>
            <div class="logos clearfix">
                <a href="#"><img src="images/flickr.png"></a>
                <a href="#"><img src="images/vimeo.png"></a>
                <a href="#"><img src="images/pinterest.png"></a>
                <a href="#"><img src="images/twitter.png"></a>
            </div>
            <div class="slogan">
                <p>SIT <span>ON</span> CHAIR</p>
            </div>
        </div>
    </footer>
</body>
<script src="js/js.js" type="text/javascript"></script>
</html>
