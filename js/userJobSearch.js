var Search = {
	zipcode: 0,
	
	go_buttonclick: function() {
		var self = this;
		this.zipcode = $('#searchJob').val();
		
		$.ajax({
			type: "GET",
			url: 'http://students.engr.scu.edu/~schandra/hope/getjobpost_all.php',
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
					'<li data-role="list-divider" class="ui-li-divider ui-bar-inherit ui-li-has-count ui-first-child" role="heading">',
					'Title : '+resource.title,
					'<span class="ui-li-count ui-body-inherit">'+ 'Ref No : '+resource.job_id+'</span>',
					'</li>',
    			'<li>',
					'<h2>'+'Employer : '+resource.employer+'</h2>',
					'<p>',
					'<strong>'+resource.description+'</strong>',
					'</p>',
					'<p>',
					'<strong>'+'Starts on : '+resource.start_date+'		Ends on : '+resource.end_date+'</strong>',
					'</p>',
    			'<a>'+resource.email_id+'</a>',
        	'<p class="ui-li-aside">',
					'<strong>'+'Wages : '+resource.wages+'</strong>',
					'</li>'].join('');
					
					
					
					/*'<li>',
					'<div class="ui-grid-a">',
					'<div class="ui-block-a">',
					resource.address,
					'</div>',
					'<div class="ui-block-b">',
					resource.description,
					'</div>',
					'</div>',
					'</li>'].join('');*/
					
					
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
					resource.wages,
					'</li>'].join('');		*/				
		      }
				$("#list_job").html(html);
					
			}	
		
		}				
	
	
	
	}




