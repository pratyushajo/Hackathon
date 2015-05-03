var Job = {
	
	changeLabel: function(){
		//debugger;
		document.getElementById("wID").innerHTML = "Cost";
	},
	
	submitJob: function(){
		var title = $('#titleID').val(),
			employer = $('#employerID').val(),
			desc = $('#descriptionID').val(),
			address = $('#addressID').val(),
			zip = $('#zipcodeID').val(),
			sdate = $('#sdateID').val(),
			edate = $('#edateID').val(),
			wages = $('#wagesID').val(),
			tel = $('#telID').val(),
			email = $('#emailID').val(),
			job = $('input[name="radio-choice"]:checked').val(),
			uid = localStorage.getItem("uid");
		
		if(job === "job") {
			//alert("in ajax call 1");
			$.ajax({
				type:"POST",
				data:{	title:title,
						employer:employer,
						description:desc,
						address:address,
						zipcode:zip,
						start_date:sdate,
						end_date:edate,
						wages: wages,
						email_id: email,
						phone_number: tel,
						user_id: uid
					},
				url: 'http://students.engr.scu.edu/~schandra/hope/insert_jobpost.php',
				dataType: 'json',
				async: false,
			});
		} else {
			$.ajax({
				type:"POST",
				data:{	title:title,
						employer:employer,
						description:desc,
						address:address,
						zipcode:zip,
						start_date:sdate,
						end_date:edate,
						cost: wages,
						email_id: email,
						phone_number: tel,
						user_id: uid
					},
				url: 'http://students.engr.scu.edu/~schandra/hope/insert_trainingpost.php',
				dataType: 'json',
				async: false,
			});
		}
		alert("Your posting has been created successfully!");
		window.location.href = "./employee_job_list.html";
	},
	
	cancel: function(){
		window.location.href = "./employee_job_list.html";
	}
}