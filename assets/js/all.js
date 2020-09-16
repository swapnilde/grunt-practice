jQuery(document).ready( function($) {
	$("#acme_form_btn").click( function(e) {
		e.preventDefault();
		var formData = Object.fromEntries(new FormData(document.getElementById('acme_contact_form')));

		action = 'acme_form_save_data'
		nonce = formData['acme_form_nonce'];
		acme_name = formData['acme_name'];
		acme_cont_num = formData['acme_cont_num']

		$.ajax({
			type : "POST",
			async: true,
			dataType : "json",
			url : wpAjax.wpAjaxUrl,
			data : {action:action, nonce:nonce, acme_name:acme_name, acme_cont_num:acme_cont_num },
			success: function(result, status, xhr) {
				if(xhr.status === 200 && status === 'success') {
					$("#acme_form_msg").html(result.rType+' '+result.rMessage);
				}
				else {
					alert("Your data could not be saved");
				}
			}
		});
	});
});;jQuery(document).ready( function($) {
	$(".user_like").click( function(e) {
		e.preventDefault();
		post_id = jQuery(this).attr("data-post_id");
		nonce = jQuery(this).attr("data-nonce");
		$.ajax({
			type : "POST",
			async: true,
			dataType : "json",
			url : myAjax.ajaxurl,
			data : {action: 'my_user_like', post_id : post_id, nonce: nonce},
			success: function(result, status, xhr) {
				if(result.type == 'success') {
					$("#like_counter").html(result.like_count);
				}
				else {
					alert("Your like could not be added");
				}
			}
		});
	});
});