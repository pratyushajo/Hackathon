var List = {
	html : '',
	addJob: function(){
		window.location.href = "./Job Post.html";
	},
	
	getjoblist: function(user_id){
		var self = this;
		$.ajax({
			type:"POST",
			data:{user_id:user_id},
			url: 'http://students.engr.scu.edu/~schandra/hope/getjobpost_userid.php',
			dataType: 'json',
			async: false,
			success: function(data) {
				self.setResource_job(data);
			}
		});
		
	},
	gettraininglist: function(user_id){
		var self = this;
		$.ajax({
			type:"POST",
			data:{user_id:user_id},
			url: 'http://students.engr.scu.edu/~schandra/hope/gettrgpost_userid.php',
			dataType: 'json',
			async: false,
			success: function(data) {
				
				self.setResource_training(data);
			}
		});
		
	},
	setResource_training: function(dataPassed) {

		for(var j=0; j< dataPassed.length; j++)
		{
			var resource = dataPassed[j];
				this.html += [
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
					resource.cost,
					'<button class=\'buttonc\' value="',resource.jod_id,'"onclick="List.delete()">Delete</button>',
					'</li>'].join('');						
		     
				$("#list_job").html(this.html);
					
			}	
	},
	setResource_job: function(dataPassed) {
		var html = '';
		for(var j=0; j< dataPassed.length; j++)
		{
			var resource = dataPassed[j];
			{
				html += [
					'<li data-role="list-divider" class="ui-li-divider ui-bar-inherit ui-li-has-count ui-first-child" role="heading">',
					'Title : '+resource.title,
					'<span class="ui-li-count ui-body-inherit">'+ 'Ref Id : '+resource.job_id+'</span>',
					'</li>',
    			'<li>',
				'<h2>'+'Employer : '+resource.employer+'</h2>',
				'<p>','<strong>'+resource.description+'</strong>','</p>',
				'<p style="color:blue">','<strong>'+'From: '+resource.start_date+'  To: '+resource.end_date+'</strong>','</p>',
    			'<a>'+resource.email_id+'</a>',
        	'<p class="ui-li-aside">',
					'<strong>'+'Wages : '+resource.wages+'</strong>', 
					'<p id = "DeleteButtonID" class="ui-icon-delete ui-btn-icon-right" </p>',
					
					'</li>'].join('');
			}
				$("#employee_cart_jobs").html(html);
			}
		},
		
	delete: function(id){
		alert('delete');
		//alert($(this).id);
		alert(id);
	},


	
	init: function() {
		var self = this;
		var user_id = localStorage.getItem("uid");
		this.getjoblist(user_id);
		this.gettraininglist(user_id);
	}
};
	
	$(window).ready(function() {
		List.init();
	});


