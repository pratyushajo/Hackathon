var Emp = {
	
	submit: function() {
		var uid = $('#userID').val();
		var self = this;
		$.ajax({
			type: "POST",
			data:{user_id:uid},
          	dataType: 'json',
			async: false,
			crossDomain : true,
			url: 'http://students.engr.scu.edu/~schandra/hope/getuserid.php',
			success: function(data) {
				localStorage.setItem("uid", uid);
				self.routePath();
			},
			error: function(data, status){
				alert("Record does not exist");
			}
		});
		
	},
	
	routePath: function(){
		window.location.href = "./employee_job_list.html";
	}
}