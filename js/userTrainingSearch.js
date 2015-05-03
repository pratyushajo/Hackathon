var Search = {
	zipcode: 0,
	
	go_buttonclick: function() {
		var self = this;
		this.zipcode = $('#searchJob').val();
		
		$.ajax({
			type: "GET",
			url: 'http://students.engr.scu.edu/~schandra/hope/gettrgpost_all.php',
			dataType: 'json',
			async: false,
			crossDomain : true,
			success: function(data) {
				
				self.setResource(data);
			}
		});
		
	},
	setResource: function(dataPassed) {
		
		
		var html = '';
		for(var j=0; j< dataPassed.length; j++)
		{
			var resource = dataPassed[j];
			resourcezip=resource.zipcode;
			alert(resourcezip);
			alert(this.zipcode);
			if(resourcezip==this.zipcode)
			{
				debugger;
				html += [
    				'<h2>'+'Formatted text'+'</h2>',
						'<ul data-role="listview" data-theme="a" data-divider-theme="b">',
            '<li data-role="list-divider">'+'Friday, October 8, 2010 '+'<span class="ui-li-count">'+2+'</span>',
						'</li>',
           	'<li>',
						'<a href="index.html">',
            '<h3>'+'Stephen Weber'+'</h3>',
            '<p>',
						'<strong>'+'You have been invited to a meeting at Filament Group in Boston, MA'+'</strong>',
						'</p>',
            '<p>'+'Hey Stephen, if you are available at 10am tomorrow, we have got a meeting with the jQuery team.'+'</p>',
            '<p class="ui-li-aside">',
						'<strong>'+'6:24'+'</strong>',
						'PM'+'</p>',
            '</a>',
						'</li>',
						'<li>',
						'<a href="index.html">',
            '<h3>'+'jQuery Team'+'</h3>',
            '<p>',
						'<strong>'+'Boston Conference Planning'+'</strong>',
						'</p>',
            '<p>'+'In preparation for the upcoming conference in Boston, we need to start gathering a list of sponsors and speakers.'+'</p>',
            '<p class="ui-li-aside">',
						'<strong>'+'9:18'+'</strong>',
						'AM'+'</p>',
            '</a>',
						'</li>',
					'</ul>'].join('');
					
					/*'<li>',
					'<p>' , 
					resource.address,
					'</br>',
					resource.description,
					'</br>',
					resource.email_id,
					'</br>',
					resource.employer,
					'</br>',
					resource.end_date,
					'</br>',
					resource.job_id,
					'</br>',
					resource.phone_number,
					'</br>',
					resource.start_date,
					'</br>',
					resource.title,
					'</br>',
					resource.cost,
					'</li>'].join('');*/						
		      }
				$("#list_trainings").html(html);
					
			}	
		
		}				
	
	
	
	}




