var Regis = {
	uid: 0,
	submit: function() {
		var org = $('#OrgID').val(),
			email = $('#newUserEmailID').val(),
			address = $('#newUseraddressID').val(),
			zip = $('#newUserzipcodeID').val(),
			tel = $('#newUsertelID').val();
		$.ajax({
			type:"POST",
			data:{	
					org_name: org,
					address: address,
					phone_number: tel,
					email_id: email,
					zipcode: zip
				},
			url: 'http://students.engr.scu.edu/~schandra/hope/insert_userreg.php',
			dataType: 'json',
			async: false
		});
		this.getUserId();
	},
	
	getUserId: function() {
		var self = this;
		$.ajax({
			type: "GET",
			url: 'http://students.engr.scu.edu/~schandra/hope/maxuserid.php',
          	dataType: 'json',
			async: false,
			crossDomain : true,
			success: function(data) {
				self.uid = data[0].uid;
				alert("Your user id is: " + self.uid);
			}
		});
		localStorage.setItem("uid", self.uid);
		window.location.href = "./employee_job_list.html";
	},
	
	cancel: function(){
		window.location.href = "./employee_welcome.html";
	}
}