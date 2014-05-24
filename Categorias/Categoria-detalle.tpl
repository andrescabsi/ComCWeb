<html>
    <head>
        <style>
            .categorias-columna-A {
                width: 837px;
                margin-right: 39px;
                display: inline-block;
                vertical-align: top;
            }
            .categorias-columna-1 {
                width:203px;
                margin-top:40px;
                margin-right:33px;
                display:inline-block;
                vertical-align:top;
                /*background-color:#F0F0F0;
                he*/
            }
            .categorias-nombre-subcategorias {
                color: #113689;
                font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
                text-align: left;
                font-size: 20px;
                line-height: 22px;
                border-bottom-width: 1px;
                border-bottom-color: #ccc;
                border-bottom-style: solid;
            }
            .categorias-nombre-subcategorias h1 {
                padding-bottom:4px;
            }
            .categorias-subcategorias {
                margin-top: 10px;
            }
            .categorias-columna-2 {
                width: 597px;
                margin-top: 40px;
                display: inline-block;
                vertical-align: top;
                /*background-color: #F0F0F0;
                hei*/
            }
            .categorias-slider {
                margin:0;
            }
            .categorias-columna-B {
                width:300px;
                margin:0px;
                display:inline-block;
                vertical-align:top;
                /*background-color:#F0F0F0;
                hei*/
            }
            .categorias-boton-publicar-ahora {
                margin:0;
            }
            .categorias-cuadro-facebook {
                margin-top:12px;
                background-color:#fff;
            }
            .categorias-pauta {
                margin-top:12px;
            }
            .categorias-recomendados {
                margin-top: 12px;
                margin-bottom: 12px;
                display: inline-block;
                width: 837px;
                vertical-align: top;
            }
            .categorias-recomendados-titulo {
                margin:0;
                color: #113689;
                font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
                line-height: 35px;
                text-align: left;
                font-size: 25px;
                border-bottom-width: 1px;
                border-bottom-color: #ccc;
                border-bottom-style: solid;
            }
            .categorias-publicaciones {
                margin-top: 12px;
                margin-bottom: 12px;
                display: inline-block;
                width: 100%;
                vertical-align: top;
            }
            .categorias-publicaciones-titulo {
                margin:0;
                color: #113689;
                font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
                line-height: 35px;
                text-align: left;
                font-size: 25px;
                border-bottom-width: 1px;
                border-bottom-color: #ccc;
                border-bottom-style: solid;
            }
            .categorias-recomendados-codigo {
            margin-top: 12px;
            }
            .categorias-publicaciones-codigo {
                margin-top: 12px;
            }
        </style>
        <title></title>
    </head>
    <body>
        <section class="categorias-columna-A">
            <section class="categorias-columna-1">
                <div class="categorias-nombre-subcategorias"><h1>{tag_name}</h1></div>
                <div class="categorias-subcategorias">{tag_subcategor&iacute;a}</div>
            </section>

            <section class="categorias-columna-2">
                <div class="categorias-slider">
                {module_webapps,Categoria Sliders,i,{tag_slider_id} template="/ModuleTemplates/CategoriaSlider/slider-estandar-{tag_visible}.tpl"}
                </div>
            </section>

            <section class="categorias-recomendados">
                <div class="categorias-recomendados-titulo"><h2>Recomendados</h2></div>
                <div class="categorias-recomendados-codigo">
                    <!-- CODIGO RECOMENDADOS 1 -->
                    <div class="jcarousel-wrapper">
                    <div class="jcarousel">
                    <ul>
                        {module_webapps,Publicaciones,c,{tag_recomendados 1},,,,100,,1}
                    </ul>
                    </div>
                    <a href="#" class="jcarousel-control-prev">&lsaquo;</a>
                    <a href="#" class="jcarousel-control-next">&rsaquo;</a>
                    </div>
                    <!-- /CODIGO RECOMENDADOS 1 -->
                    <!-- CODIGO RECOMENDADOS 2 -->
                    <div class="jcarousel-wrapper">
                    <div class="jcarousel">
                    <ul>
                        {module_webapps,Publicaciones,c,{tag_recomendados 2},,,,100,,1}
                    </ul>
                    </div>
                    <a href="#" class="jcarousel-control-prev">&lsaquo;</a>
                    <a href="#" class="jcarousel-control-next">&rsaquo;</a>
                    </div>
                    <!-- /CODIGO RECOMENDADOS 2 -->
                </div>
            </section>

            <section class="categorias-publicaciones">
                <div class="categorias-publicaciones-titulo">
                    <h2>Publicaciones</h2>
                </div>
                <div class="categorias-publicaciones-codigo">
                    <!-- CODIGO PUBLICACIONES -->
                    {module_webapps,Publicaciones,c,{tag_publicaciones},,,,1000,,1}
                    <!-- /CODIGO PUBLICACIONES -->
                </div>
            </section>
        </section>

        <section class="categorias-columna-B">
            <div class="categorias-boton-publicar-ahora">{module_contentholder, name="_Boton-Publicar-Ahora"}</div>
            <div class="categorias-cuadro-facebook">{module_contentholder, name="_Facebook-Comercio-Cristiano"}</div>
            <div class="categorias-pauta">
                {module_webapps,Pauta - Banners,i,{tag_pauta 1_id} template="/ModuleTemplates/PautaBanners/banner-estandar-{tag_visible 1}.tpl"}
                {module_webapps,Pauta - Banners,i,{tag_pauta 2_id} template="/ModuleTemplates/PautaBanners/banner-estandar-{tag_visible 2}.tpl"}
                {module_webapps,Pauta - Banners,i,{tag_pauta 3_id} template="/ModuleTemplates/PautaBanners/banner-estandar-{tag_visible 3}.tpl"}
                {module_webapps,Pauta - Banners,i,{tag_pauta 4_id} template="/ModuleTemplates/PautaBanners/banner-estandar-{tag_visible 4}.tpl"}
                {module_webapps,Pauta - Banners,i,{tag_pauta 5_id} template="/ModuleTemplates/PautaBanners/banner-estandar-{tag_visible 5}.tpl"}
            </div>
        {module_webapps,Testimonios,i,{tag_testimonio_id}}
        </section>

    </body>
    </html>