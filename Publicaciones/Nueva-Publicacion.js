// Ruta: /js/Formularios-publicacion/Nueva-Publicacion.js

    $(document).ready(function() {
        
        eliminarCampos();
    	eliminarSubcategorias();
    });
    
function eliminarSubcategorias(){
// SELECCION DE CATEGORIAS Y SUBCATEGORIAS PADRE

    $(".$hijo_data_pub").click(function(){
    $('.$padre_data_pub').attr("selected","selected"); 

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

