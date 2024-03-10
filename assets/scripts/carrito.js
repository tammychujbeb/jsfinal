let app = window.app || {},
business_paypal = ''; 

(function($){
	'use strict';

	

	app.init = function(){
		
		let total = 0,
		items = 0
		
		let cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {items : []} ;
		
		if(undefined != cart.items && cart.items != null && cart.items != '' && cart.items.length > 0){
			_.forEach(cart.items, function(n, key) {
			   items = (items + n.cant)
			   total = total  + (n.cant * n.price)
			});

		}

		$('#totalItems').text(items)
		$('.totalAmount').text('$ '+total)
		
	}

	app.masVendidos = function(){
		let productos = [
			{
				id : 1,
				img : 'assets/img/iphone.jpg',
				name : 'Iphone X',
				price : 299.00,
				desc : 'Diseño de aluminio con parte posterior de vidrio .Pagos únicamente vía Paypal',
				stock : 4
			},
			{
				id : 2,
				name : 'Xbox One X',
				img : 'assets/img/xbox.jpg',
				price : 199.00,
				desc : ' Cada generación ha introducido avances en términos de potencia de procesamiento, gráficos, almacenamiento y funcionalidades multimedia.Pagos únicamente vía Paypal',
				stock : 2
			},
			{
				id : 3,
				name : 'PlayStation 4',
				img : 'assets/img/ps4.jpeg',
				price : 699.00,
				desc : 'la PS4 ha sido una de las consolas más populares y exitosas del mercado, ofreciendo una amplia gama de juegos, funcionalidades multimedia y servicios en línea. Aquí tienes una descripción general de la PlayStation 4:Pagos únicamente vía Paypal',
				stock : 1
			},
			{
				id : 4,
				name : 'Parlante Bose',
				img : 'assets/img/bocina.jpg',
				price : 20.00,
				desc : ' En cápsula La misma moneda que ves en esta foto. Solo enviamos a los EE. UU. y el envío es GRATIS. Tiempo de envío de 5 a 7 días hábiles a través de UPS Express con seguimiento y seguro. Pagos únicamente vía Paypal.',
				stock : 6
			},
			{
				id : 5,
				name : 'Pantalla Sony Bravia',
				img : 'assets/img/bravia.jpg',
				price : 99.00,
				desc : 'Sony es una marca líder en la fabricación de pantallas y televisores. A lo largo de los años, Sony ha producido una amplia variedad de pantallas con tecnologías avanzadas.Pagos únicamente vía Paypal.',
				stock : 12
			},
			{
				id : 6,
				name : 'Colchon Spring Air',
				img : 'assets/img/colchon.jpg',
				price : 50.00,
				desc : 'Spring Air es una reconocida marca de colchones que ofrece una amplia gama de productos diseñados para brindar comodidad y soporte durante el sueño.Pagos únicamente vía Paypal.',
				stock : 10
			},
			 {
			 	id : 7,
				name : 'The Dark Knight Trilogy',
			 	img : 'assets/img/TDK.jpg',
				price : 80.00,
			 	desc : '"The Dark Knight Trilogy" es una serie de tres películas de superhéroes basadas en el personaje de DC Comics, Batman.Pagos únicamente vía Paypal ',
			 	stock : 4
			 },
			 {
			 	id : 8,
			 	name : 'Mueble rustico',
			 	img : 'assets/img/mueble.jpg',
			 	price : 60.00,
			 	desc : 'Las mesas rústicas suelen estar hechas de materiales naturales como madera maciza, piedra o metal envejecido.Pagos únicamente vía Paypal ',
			 	stock : 4
			 },
			 {
			 	id : 9,
			 	name : 'MacBook Pro',
			 	img : 'assets/img/mac.jpg',
			 	price : 380.00,
			 	desc : 'La MacBook Pro es una línea de computadoras portátiles de alta gama fabricadas por Apple Inc. y está dirigida principalmente a profesionales y usuarios avanzados. Aquí tienes información general sobre la MacBook Pro. Pagos únicamente vía Paypal ',
			 	stock : 4
			 }
		],
		wrapper = $('.productosWrapper'),
		contenido = ''

		for(let i = 0; i < productos.length; i++){

			if(productos[i].stock > 0){

				contenido+= '<div class="coin-wrapper">'
				contenido+= '		<img src="'+productos[i].img+'" alt="'+productos[i].name+'">'
				contenido+= '		<span class="large-12 columns product-details">'
				contenido+= '			<h3>'+productos[i].name+' <span class="price">$ '+productos[i].price+' </span></h3>'
				contenido+= '			<h3>Tenemos: <span class="stock">'+productos[i].stock+'</span></h3>'
				contenido+= '		</span>'
				contenido+= '		<a class="large-12 columns btn submit ladda-button prod-'+productos[i].id+'" data-style="slide-right" onclick="app.addtoCart('+productos[i].id+');">Añadir a la canasta</a>'
				contenido+= '		<div class="clearfix"></div>'
				contenido+= '</div>'

			}

		}

		wrapper.html(contenido)

		localStorage.setItem('productos',JSON.stringify(productos))
	}


	app.createProducts = function(){
		let productos = [
			{
				id : 1,
				img : 'assets/img/iphone.jpg',
				name : 'Iphone X',
				price : 299.00,
				desc : 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
				stock : 4
			},
			{
				id : 2,
				name : 'Xbox One X',
				img : 'assets/img/xbox.jpg',
				price : 199.00,
				desc : 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
				stock : 2
			},
			{
				id : 3,
				name : 'PlayStation 4',
				img : 'assets/img/ps4.jpeg',
				price : 99.00,
				desc : 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
				stock : 1
			}
		],
		wrapper = $('.masVendidos'),
		contenido = ''

		for(let i = 0; i < productos.length; i++){

			if(productos[i].stock > 0){

				contenido+= '<div class="coin-wrapper">'
				contenido+= '		<img src="'+productos[i].img+'" alt="'+productos[i].name+'">'
				contenido+= '		<span class="large-12 columns product-details">'
				contenido+= '			<h3>'+productos[i].name+' <span class="price">$ '+productos[i].price+' </span></h3>'
				contenido+= '			<h3>Tenemos: <span class="stock">'+productos[i].stock+'</span></h3>'
				contenido+= '		</span>'
				contenido+= '		<div class="clearfix"></div>'
				contenido+= '</div>'

			}

		}

		wrapper.html(contenido)

		localStorage.setItem('productos',JSON.stringify(productos))
	}

	app.addtoCart = function(id){
		let l = Ladda.create( document.querySelector( '.prod-'+id ) );

		l.start();
		let productos = JSON.parse(localStorage.getItem('productos')),
		producto = _.find(productos,{ 'id' : id }),
		cant = 1
		if(cant <= producto.stock){
			if(undefined != producto){
				if(cant > 0){
					setTimeout(function(){
						let cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {items : []} ;
						app.searchProd(cart,producto.id,parseInt(cant),producto.name,producto.price,producto.img,producto.stock)
						l.stop();
					},2000)
				}else{
					alert('Solo se permiten cantidades mayores a cero')
				}
			}else{
				alert('Oops! algo malo ocurrió, inténtalo de nuevo más tarde')
			}
		}else{
			alert('No se pueden añadir más de este producto')
		}
	}

	app.searchProd = function(cart,id,cant,name,price,img,available){
		
		let curProd = _.find(cart.items, { 'id': id })

		if(undefined != curProd && curProd != null){
			
			if(curProd.cant < available){
				curProd.cant = parseInt(curProd.cant + cant)
			}else{
				alert('No se pueden añadir más de este producto')
			}
			
		}else{
			
			let prod = {
				id : id,
				cant : cant,
				name : name,
				price : price,
				img : img,
				available : available
			}
			cart.items.push(prod)
			
		}
		localStorage.setItem('cart',JSON.stringify(cart))
		app.init()
		app.getProducts()
		app.updatePayForm()
	}

	app.getProducts = function(){
		let cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {items : []},
		msg = '',
		wrapper = $('.cart'),
		total = 0
		wrapper.html('')

		if(undefined == cart || null == cart || cart == '' || cart.items.length == 0){
			wrapper.html('<li>Tu carrito está vacía</li>');
			$('.cart').css('left','-400%')
		}else{
			let items = '';
			_.forEach(cart.items, function(n, key) {
	
			   total = total  + (n.cant * n.price)
			   items += '<li>'
			   items += '<img src="'+n.img+'" />'
			   items += '<h3 class="title">'+n.name+'<br><span class="price">'+n.cant+' x $ '+n.price+'</span> <button onclick="app.deleteProd('+n.id+')" ><i class="icon ion-close-circled"></i></button><div class="clearfix"></div></h3>'
			   items += '</li>'
			});

			
			items += '<li id="total">Total : $ '+total+' <div id="submitForm"></div></li>'
			wrapper.html(items)
			$('.cart').css('left','-500%')
		}
	}

	app.updateItem = function(id,available){
		
		let cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {items : []} ,
		curProd = _.find(cart.items, { 'id': id })
			
			curProd.cant = curProd.cant - 1;
			//verifica que la cantidad no sea menor a 0
			if(curProd.cant > 0){
				localStorage.setItem('cart',JSON.stringify(cart))
				app.init()
				app.getProducts()
				app.updatePayForm()
			}else{
				app.deleteProd(id,true)
			}
	}

	app.delete = function(id){
		let cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {items : []} ;
		let curProd = _.find(cart.items, { 'id': id })
		_.remove(cart.items, curProd);
		localStorage.setItem('cart',JSON.stringify(cart))
		app.init()
		app.getProducts()
		app.updatePayForm()
	}

	app.deleteProd = function(id,remove){
		if(undefined != id && id > 0){
			
			if(remove == true){
				app.delete(id)
			}else{
				let conf = confirm('¿Deseas eliminar este producto, seguro seguro seguro?')
				if(conf){
					app.delete(id)
				}
			}
			
		}
	}

	app.updatePayForm = function(){
		
		let cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {items : []} ;
		let statics = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post"><input type="hidden" name="cmd" value="_cart"><input type="hidden" name="upload" value="1"><input type="hidden" name="currency_code" value="USD" /><input type="hidden" name="business" value="'+business_paypal+'">',
		dinamic = '',
		wrapper = $('#submitForm')

		wrapper.html('')
		
		if(undefined != cart && null != cart && cart != ''){
			let i = 1;
			_.forEach(cart.items, function(prod, key) {
					dinamic += '<input type="hidden" name="item_name_'+i+'" value="'+prod.name+'">'
					dinamic += '<input type="hidden" name="amount_'+i+'" value="'+prod.price+'">'
					dinamic += '<input type="hidden" name="item_number_'+i+'" value="'+prod.id+'" />'
					dinamic += '<input type="hidden" name="quantity_'+i+'" value="'+prod.cant+'" />'
				i++;
			})

			statics += dinamic + '<button type="submit" class="pay">Pagar &nbsp;<i class="ion-chevron-right"></i></button></form>'

			wrapper.html(statics)
		}
	}

	$(document).ready(function(){
		app.init()
		app.getProducts()
		app.updatePayForm()
		app.createProducts()
		app.masVendidos()
	})

})(jQuery)