jQuery(function($)
		{
			//zresetuj scrolla
			$.scrollTo(0);
			
			$('#link1').click(function() { $.scrollTo($('#aboutme'), 500); });
			$('#link2').click(function() { $.scrollTo($('#offer'), 500); });
			$('#link3').click(function() { $.scrollTo($('#contact'), 500); });
		
		}
		);