// Ruta: /js/Formularios-publicacion/Nueva-Publicacion.js

$(document).ready(function() {
    /* Funciones */
    eliminarCampos();
    eliminarSubcategorias();
    SeleccionarSubcategorias();
    
});
    
function eliminarSubcategorias(){

    //Ver index en la consola: console.log( "Index: " + $( "#BienesRaices" ).index() );
    
    /* Eliminar subcategorias extra ********************************************************
    ****************************************************************************************/
    var indicador = categoria_publicacion_actual;
    var indicador_subcategoria = subcategoriaPublicacion;

    if (indicador == "BR"){


        
    } else if (indicador == "VH"){

        
    }else if (indicador == "CV"){

        
    }else if (indicador == "EM"){

        
    }else if (indicador == "APP"){

        $("#CAT_Category").find("option").slice( 61, 477 ).remove();

        if (indicador_subcategoria == "Devocionales"){
            $("#CAT_Category").find("option").slice( 1, 7 ).remove();
            $("#CAT_Category").find("option").slice( 7, 60 ).remove();
        }

    }else if (indicador == "VT"){

        
    }else if (indicador == "SV"){

        
    }else if (indicador == "ES"){

        
    }else if (indicador == "ON"){

        
    }else if (indicador == "PR"){

        
    }else if (indicador == "CC"){

        
    }else{
        $("#CAT_Category").remove();
        $(".contenedor_formularios_publicacion").append("<br /><br /> <br /><h2 class='h2' style='color:red;'>MMMM ESTO ES VERGONZOSO, OCURRIO UN ERROR, POR FAVOR RECARGA LA PÁGINA</h2>");
    }
    
}

function SeleccionarSubcategorias(){

    /* Colocar Valor Subcategoria */
    $("#CAT_Custom_98").val(subcategoriaPublicacion);
    
    // SELECCION DE CATEGORIAS Y SUBCATEGORIAS PADRE
    $(".padre_data_pub").attr("selected","selected");
    
    $(".hijo_data_pub").click(function(){
        $(".padre_data_pub").attr("selected","selected"); 
    });
    
}



function eliminarCampos(){
        
        var indicador = categoria_publicacion_actual;
        
        if (indicador == "BR"){
        // ELIMINAR OTROS CAMPOS
            //$(".data_BienesRaices").remove();
            console.log("BienesRaices");
            $(".data_Vehiculos").remove();
            $(".data_CompraVenta").remove();
            $(".data_Empleo").remove();
            $(".data_Aplicaciones").remove();
        // SELECCIONAR CATEGORÍA
            $("#CAT_Custom_103 option:eq(1)").attr('selected', 'selected');
            
        } else if (indicador == "VH"){
            console.log("Vehiculos");
            $(".data_BienesRaices").remove();
            //$(".data_Vehiculos").remove();
            $(".data_CompraVenta").remove();
            $(".data_Empleo").remove();
            $(".data_Aplicaciones").remove();
        // SELECCIONAR CATEGORÍA
            $("#CAT_Custom_103 option:eq(2)").attr('selected', 'selected');
            
        }else if (indicador == "CV"){
            console.log("Compra-Venta");
            $(".data_BienesRaices").remove();
            $(".data_Vehiculos").remove();
            //$(".data_CompraVenta").remove();
            $(".data_Empleo").remove();
            $(".data_Aplicaciones").remove();
        // SELECCIONAR CATEGORÍA
            $("#CAT_Custom_103 option:eq(3)").attr('selected', 'selected');
            
        }else if (indicador == "EM"){
            console.log("Empleo");
            $(".data_BienesRaices").remove();
            $(".data_Vehiculos").remove();
            $(".data_CompraVenta").remove();
            //$(".data_Empleo").remove();
            $(".data_Aplicaciones").remove();
        // SELECCIONAR CATEGORÍA
            $("#CAT_Custom_103 option:eq(4)").attr('selected', 'selected');
            
        }else if (indicador == "APP"){
            console.log("Aplicaciones");
            $(".data_BienesRaices").remove();
            $(".data_Vehiculos").remove();
            $(".data_CompraVenta").remove();
            $(".data_Empleo").remove();
            //$(".data_Aplicaciones").remove();
        // SELECCIONAR CATEGORÍA
            $("#CAT_Custom_103 option:eq(5)").attr('selected', 'selected');
            
        }else if (indicador == "VT"){
            //console.log("ViajesTurismo");
            $(".data_BienesRaices").remove();
            $(".data_Vehiculos").remove();
            $(".data_CompraVenta").remove();
            $(".data_Empleo").remove();
            $(".data_Aplicaciones").remove();
        // SELECCIONAR CATEGORÍA
            $("#CAT_Custom_103 option:eq(6)").attr('selected', 'selected');
            
        }else if (indicador == "SV"){
            //console.log("Servicios");
            $(".data_BienesRaices").remove();
            $(".data_Vehiculos").remove();
            $(".data_CompraVenta").remove();
            $(".data_Empleo").remove();
            $(".data_Aplicaciones").remove();
        // SELECCIONAR CATEGORÍA
            $("#CAT_Custom_103 option:eq(7)").attr('selected', 'selected');
            
        }else if (indicador == "ES"){
            //console.log("Emisoras");
            $(".data_BienesRaices").remove();
            $(".data_Vehiculos").remove();
            $(".data_CompraVenta").remove();
            $(".data_Empleo").remove();
            $(".data_Aplicaciones").remove();
        // SELECCIONAR CATEGORÍA
            $("#CAT_Custom_103 option:eq(8)").attr('selected', 'selected');
            
        }else if (indicador == "ON"){
            //console.log("Oportunidades de Negocio");
            $(".data_BienesRaices").remove();
            $(".data_Vehiculos").remove();
            $(".data_CompraVenta").remove();
            $(".data_Empleo").remove();
            $(".data_Aplicaciones").remove();
        // SELECCIONAR CATEGORÍA
            $("#CAT_Custom_103 option:eq(9)").attr('selected', 'selected');
            
        }else if (indicador == "PR"){
            //console.log("Periódicos y Revistas");
            $(".data_BienesRaices").remove();
            $(".data_Vehiculos").remove();
            $(".data_CompraVenta").remove();
            $(".data_Empleo").remove();
            $(".data_Aplicaciones").remove();
        // SELECCIONAR CATEGORÍA
            $("#CAT_Custom_103 option:eq(10)").attr('selected', 'selected');
            
        }else if (indicador == "CC"){
            //console.log("Clases y Cursos");
            $(".data_BienesRaices").remove();
            $(".data_Vehiculos").remove();
            $(".data_CompraVenta").remove();
            $(".data_Empleo").remove();
            $(".data_Aplicaciones").remove();
        // SELECCIONAR CATEGORÍA
            $("#CAT_Custom_103 option:eq(11)").attr('selected', 'selected');
            
        }else{
            $(".contenedor_formularios_publicacion form").remove();
            $(".contenedor_formularios_publicacion").append("<br /><br /> <br /><h2 class='h2' style='color:red;'>Por favor primero completa tu información antes de poder publicar</h2>");
        }
}

