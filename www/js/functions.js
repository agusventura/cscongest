function callWSInvalidar(){
	/*service.useService(http://200.89.129.132:8913/ConGest-WS/SesionesUsuariosServicesSoapHttpPort?wsdl,"SesionesUsuariosServices" );
	service.SesionesUsuariosServices.callService("invalidarSesionesYUsuarios");*/

	var wsUrl = "http://200.89.129.132:8913/ConGest-WS/SesionesUsuariosServicesSoapHttpPort";
	
	var envelope = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body xmlns:ns1="http://coloniasuiza.congest.ws.sesionesusuarios/types/"><ns1:invalidarSesionesYUsuariosElement/></soap:Body></soap:Envelope>';
	
	 $.ajax({
		type: "POST",
		url: wsUrl,
		contentType: "text/xml",
		dataType: "xml",
		data: envelope,
		success: function(){alert("Sesiones y Usuarios invalidados!");},
		error: function(){alert("error");}
	});
}

function callWSRevalidar(){
	/*service.useService(http://200.89.129.132:8913/ConGest-WS/SesionesUsuariosServicesSoapHttpPort?wsdl,"SesionesUsuariosServices" );
	service.SesionesUsuariosServices.callService("invalidarSesionesYUsuarios");*/

	var wsUrl = "http://200.89.129.132:8913/ConGest-WS/SesionesUsuariosServicesSoapHttpPort";
	
	var envelope = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body xmlns:ns1="http://coloniasuiza.congest.ws.sesionesusuarios/types/"><ns1:revalidarUsuariosElement/></soap:Body></soap:Envelope>';
	
	 $.ajax({
		type: "POST",
		url: wsUrl,
		contentType: "text/xml",
		dataType: "xml",
		data: envelope,
		success: function(){alert("Usuarios reestablecidos!");},
		error: function(){alert("error");}
	});
}