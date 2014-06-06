// Ruta:  /Usuarios/Mi-Cuenta/perfil-anunciante


$(document).ready(function(){
    
	validador_perfil_creado();
	eresUnaEmpresa();
    desabilitarSubmit();
    AnuncianteOID();
});

    

/* Validar si el perfil de anunciante fue creado.
****************************************************************/
function validador_perfil_creado(){
    
	var perfilCreadoAnunci = "<button class='boton_amarillo'><a href='/Usuarios/Publicaciones/nueva-publicacion.htm'>Publicar un nuevo anuncio</a></button>";
        
	if ($('#cont_ind_anun_pro').is(':empty')){
		console.log("Mostrar");
        $("#creacion_perfil_anunciante_nuevo").show();
		$("#creacion_perfil_anunciante_nuevo_titulo").show();
        
	}else{
        
		console.log("Ocultar");
		$(".contenedor_boton_publicar").append(perfilCreadoAnunci);
	}
    
}
    


/* Formulario mostrar campos si es una empresa.
****************************************************************/
function eresUnaEmpresa(){

    $("#CAT_Custom_30").click(function(){
    	$("#eresUnaEmpresa").slideToggle();
    });
    
}



/* Deshabilita envio de creación de perfil si no aceptan terminos.
****************************************************************/
function desabilitarSubmit(){
    
    /* Cuando se seleccione acepto condiciones */
    $("#CAT_Custom_28").click(function(){
        $(this).attr("disabled", "disabled");
		$("#boton_deshabilitado_container").hide();
        $("#boton_habilitado_container").show();
        $("#mensaje_aceptar_condiciones").hide();
        
    });
    
    /* Cuando hagan clic en el boton deshabilitado */
    $("#boton_deshabilitado_container").one( "click", function() {
        var msjClickInhabilitado = "<p id='mensaje_aceptar_condiciones' style='color: red;'>Debes aceptar las políticas de privacidad y los términos y condiciones</p>";
        $("#politicasCondiciones_txt").append(msjClickInhabilitado);
		
    });
}


/* Validar si existe OID y si existe copia el valor al CRM input.
****************************************************************/

function AnuncianteOID(){
    var inputCRMOIDAnunciante = $("#CAT_Custom_507078_327").val().length;
    
	if (inputCRMOIDAnunciante <= 0){
        var valorAnunciantOID = $("#Value_OID_Anunciante").html();
    	console.log("No hay ningun anunciante OID - " + valorAnunciantOID);
        $("#CAT_Custom_507078_327").val(valorAnunciantOID);
        
    }else{
    	console.log("Si hay ningun anunciante OID");
    }
}
