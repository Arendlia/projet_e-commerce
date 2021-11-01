
import logo from "./../assets/logo.png";

const Footer = () => (
  <footer className="footer">
    <div class="footer__firstcol"> 
    
<img src={logo} alt="logo UniCut"/>
<h1> UniCut</h1>
<p>
Nous vous proposons plus d’une centaine de couteaux de poches, de couteaux fixes, de couteaux pliants et de pinces multifonctions testés et sélectionnés pour vous. Et un grand nombre de ces articles en stock. Du couteau de poche suisse au Laguiole, vous trouverez toujours le couteau adapté à vos besoins.
</p>
</div>
<ul class="footer__seccol">
<li>
  <h2>Boutique</h2>
<ul class="footer__seccol__box">
<li><a href="#">Accueil</a></li>
<li><a href="#">Nos couteaux</a></li>
</ul>
</li>
<li class="footer__thirdcol">
  <h2>Information</h2>
<ul class="footer__thirdcol__box">
<li><a href="#">A propos</a></li>
<li>Lame en acier inoxidable</li>
<li>mache en bois macif</li>
</ul>
</li>
<li>
  <h2>Contact</h2>
<ul class="footer__box">
<li>unicut@gmail.com</li>
<li>06.05.08.07.04</li>
</ul>
</li>
</ul>
<div class="footer__rigths">
<p>
All rights reserved by ©UniCut 2021 </p>
</div>
  </footer>
);

export default Footer;
