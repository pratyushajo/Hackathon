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
	setResource_training: function(dataPassedT) {
		var html = '';
		for(var j=0; j< dataPassedT.length; j++)
		{
			debugger;
			var resource = dataPassedT[j];
			{
				html += [
					'<li data-role="list-divider" class="ui-li-divider ui-bar-inherit ui-li-has-count ui-first-child" role="heading">',
					'Title : '+resource.title,
					'<span class="ui-li-count ui-body-inherit">'+ 'Ref No : '+resource.job_id+'</span>',
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

	setResource_job: function(dataPassedJ) {
		var html = '';
		for(var j=0; j< dataPassedJ.length; j++)
		{
			var resource = dataPassedJ[j];
			{
				html += [
					'<li data-role="list-divider" class="ui-li-divider ui-bar-inherit ui-li-has-count ui-first-child" role="heading">',
					'Title : '+resource.title,
					'<span class="ui-li-count ui-body-inherit">'+ 'Ref No : '+resource.job_id+'</span>',
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

		//<span class="ui-icon ui-icon-delete ui-icon-shadow">&nbsp;</span>
		
			//<span class="ui-btn-text">Cancel</span>
		
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



