var Regis = {
	uid: 0,
	submit: function() {
		var org = $('#OrgID').val(),
			email = $('#newUserEmailID').val(),
			address = $('#newUseraddressID').val(),
			zip = $('#newUserzipcodeID').val(),
			tel = $('#newUsertelID').val();
		var isValid = this.validateForm(org, email, address, zip, tel);
		if(isValid) {	
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
		}
	},
	
	validateForm: function(o, e, a, z, t){
	   isValid = true;
	   if ( o === "" || e === "" || a === "" || z === "" || t === "") {
	       alert("All fields must be filled out");
	       return false;
	   }
	   return isValid;
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
	
	clear: function(){
		$("#jobPosting")[0].reset();
	}
}