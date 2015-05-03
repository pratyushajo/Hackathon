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
					resource.wages,
					'<button class=\'buttonc\' id="',resource.job_id,'" onclick="List.delete(this.id)">Delete</button>',
					'</li>'].join('');						
		     
				$("#list_job").html(this.html);
					
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
