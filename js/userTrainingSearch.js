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
				html += [
    				'<h2 class="ui-collapsible-heading">',
						'<a href="#" class="ui-collapsible-heading-toggle ui-btn  ui-btn-a">',
						'Title : '+resource.title+'<span class="ui-collapsible-heading-status">'+ 'click to collapse contents' +'</span>',
						'</a>',
						'</h2>',
						'<ul data-role="listview" data-theme="a" data-divider-theme="b">',
						'<li>'+'Id : '+ resource.job_id + '</li>',
            '<li data-role="list-divider">'+'From : '+resource.start_date +' to ' + resource.end_date +'</li>',
           	'<li>'+'Employer : '+ resource.employer + '</li>',
						'<li>'+'Address : '+ resource.address + '</li>',
						'<li>',
						'<a>'+'Email Id : '+ resource.email_id + '</a>',
						'</li>',
						'<li>' + 'Contact : ' + resource.phone_number + '</li>',
            '<p>',
						'<strong>'+ resource.description +'</strong>',
						'</p>',
						'</ul>'].join('');					
		      }
				$("#list_trainings").html(html);
					
			}	
		
		}				
	
	
	
	}




