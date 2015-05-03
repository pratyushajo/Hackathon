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
				html += [
					'<li>',
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
					'</li>'].join('');						
				}
				$("#list_job").html(html);
					
			}	
		
		}				

	}
}




