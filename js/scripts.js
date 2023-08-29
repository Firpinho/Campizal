const header = document.getElementsByTagName("header");
const footer = document.getElementsByTagName("footer");

const headerHTML = `
<div class="navigation">
 <nav>
    <div class="logo">
        <a href="http://127.0.0.1:5500/"><img src="./img/logo.webp" alt="" width='50px' height='50px'></a> 
    </div>
    <div class="list">
    <ul>
    <li class="opt-1">
       <a href="http://127.0.0.1:5500/">Home <i class="fa-solid fa-chevron-down"></i></a>
       <ul class="menu">
           <li><a href="http://127.0.0.1:5500/pages/nosotros.min.html">Nosotros </a></li>
       </ul>
    </li>
   <li class="opt-2">
       <a href="#"><span class='economia_plateada_color'>Economia Plateada</span> <i class="fa-solid fa-chevron-down"></i></a>
       <ul class="menu">
           <li><a href="http://127.0.0.1:5500/pages/inversion_retiro.min.html"><span class='economia_plateada_color'>Inversion Retiro</span></a></li>
           <li><a href="http://127.0.0.1:5500/pages/apartamentos_silver.min.html"><span class='economia_plateada_color'>Apartamentos Silver</span></a></li>
           <li><a href="http://127.0.0.1:5500/pages/confort.min.html"><span class='economia_plateada_color'>Confort</span></a></li>
       </ul>
    </li>
    <li class="opt-3">
       <a href="#">Servicios Constructivos <i class="fa-solid fa-chevron-down"></i></a>
       <ul class="menu">
           <li><a href="http://127.0.0.1:5500/pages/nosotros.min.html">Casas Financiadas</a></li>
           <li><a href="http://127.0.0.1:5500/pages/nosotros.min.html">Llave en mano</a></li>
           <li><a href="http://127.0.0.1:5500/pages/nosotros.min.html">Presupuestos</a></li>
           <li><a href="http://127.0.0.1:5500/pages/nosotros.min.html">Oportunidades</a></li>
       </ul>
   </li>
  </ul>
 </div>
 <span class="burger"><i class="fa-solid fa-bars fa-2x"></i></span>
 </nav>
</div>
`;

const footerHTML = `
<div class="logo">
<div class="container">
<div class="image">
    <img src="http://127.0.0.1:5500/img/logo.webp" alt="" width="50px" height="50px">
</div>
<div class="footer-title">
    <h4>Campizal</h4>
    <h5>Construcciones</h5>
</div>
</div>
</div>
<div class="info">
Para construir, como inversión, para vivienda,todos los sistemas construcctivos con la mejor calidad, una excelente inversión asegurando el futuro.
</div>
<div class="media">
<a href=""><i class="fa-brands fa-instagram"></i></a>
<a href=""><i class="fa-brands fa-square-facebook"></i></a>
<a href=""><i class="fa-solid fa-envelope"></i></a>
</div>
`;

footer[0].innerHTML = footerHTML;
header[0].innerHTML = headerHTML;




/**
 *      <li class="opt-5" id="more">
         <a href="#"><p>Mas <i class="fa-solid fa-chevron-down"></i></p></a>
         <ul class="more-list">
             <li class="opt-1-v"><a href="http://127.0.0.1:5500/">Home</a></li>
             <li class="opt-2-v"><a href="http://127.0.0.1:5500/pages/nosotros.min.html">Nosotros</a></li>
             <li class="opt-3-v"><a href="http://127.0.0.1:5500/pages/apartamentos_premium.min.html" class="economia-plateada-link">Apartamentos Silver</a></li>
             <li class="opt-4-v"><a href="http://127.0.0.1:5500/pages/inversion_retiro.min.html" class="economia-plateada-link">Inversion Retiro</a></li>
             <li><a href="http://127.0.0.1:5500/pages/llave_en_mano.min.html"><p>Llave en mano</p></a></li>
             <li><a href="http://127.0.0.1:5500/pages/presupuestos.min.html"><p>Presupuestos</p></a></li>
             <li><a href="http://127.0.0.1:5500/pages/oportunidades.min.html"><p>Oportunidades</p></a></li>
             <li><a href="href="http://127.0.0.1:5500/index.html#"><p>Contacto</p></a></li>
         </ul>
     </li>
 */