var List = {
	html: '',
	addJob: function(){
		window.location.href = "./jobPost.html";
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
	setResource_training: function(dataPassedT) {
		for(var j=0; j< dataPassedT.length; j++)
		{
			var resource = dataPassedT[j];
			{
				this.html += [
					'<li data-role="list-divider" class="ui-li-divider ui-bar-inherit ui-li-has-count ui-first-child" role="heading">',
					'Title : '+resource.title,
					'<span class="ui-li-count ui-body-inherit">'+ 'Ref No : T'+resource.training_id+'</span>',
					'</li>',
					    			'<li>',
					'<h2>'+'Employer : '+resource.employer+'</h2>',
					'<p>','<strong>'+resource.description+'</strong>','</p>',
					'<p style="color:blue">','<strong>'+'From: '+resource.start_date+'  To: '+resource.end_date+'</strong>','</p>',
					    			'<a>'+resource.email_id+'</a>',
					        	'<p class="ui-li-aside">',
					'<strong>'+'Wages : '+resource.cost+'</strong>', 
					'<p id = "T',resource.training_id,'" class="ui-icon-delete ui-btn-icon-right" onclick="List.delete(this.id)"> </p>',
					'</li>'].join('');
			}
			$("#employee_cart_jobs").html(this.html);
		}		
	},
	setResource_job: function(dataPassedJ) {
		for(var j=0; j< dataPassedJ.length; j++)
		{
			var resource = dataPassedJ[j];
			{
				this.html += [
					'<li data-role="list-divider" class="ui-li-divider ui-bar-inherit ui-li-has-count ui-first-child" role="heading">',
					'Title : '+resource.title,
					'<span class="ui-li-count ui-body-inherit">'+ 'Ref No : J'+resource.job_id+'</span>',
					'</li>',
					    			'<li>',
					'<h2>'+'Employer : '+resource.employer+'</h2>',
					'<p>','<strong>'+resource.description+'</strong>','</p>',
					'<p style="color:blue">','<strong>'+'From: '+resource.start_date+'  To: '+resource.end_date+'</strong>','</p>',
					    			'<a>'+resource.email_id+'</a>',
					        	'<p class="ui-li-aside">',
					'<strong>'+'Wages : '+resource.wages+'</strong>', 
					'<p id = "J',resource.job_id,'" class="ui-icon-delete ui-btn-icon-right" onclick="List.delete(this.id)"> </p>',
					'</li>'].join('');
			}
		$("#employee_cart_jobs").html(this.html);
		}
	},
		
	delete: function(id){
		//alert($(this).id);
		var JT = id.substr(0,1);
		var id = id.substr(1);
		var self = this;
		if(JT == "J"){
			$.ajax({
				type:"POST",
				data:{job_id:id},
				url: 'http://students.engr.scu.edu/~schandra/hope/delete_jobpost.php',
				dataType: 'json',
				async: false,
				success: function(data) {
					alert("Job deleted");
				}
			});
			alert("Job deleted!");
			location.reload();
		} else {
			$.ajax({
				type:"POST",
				data:{training_id:id},
				url: 'http://students.engr.scu.edu/~schandra/hope/delete_trainingpost.php',
				dataType: 'json',
				async: false,
				success: function(data) {
					alert("Training deleted");
				}
			});
			alert("Training deleted!");
			location.reload();
		}
	},

	logout: function(){
		localStorage.setItem("uid", 0);
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



