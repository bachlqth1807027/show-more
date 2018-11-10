var btnsubmit = document.forms["register-form"]["btn-submit"];
btnsubmit.onclick = function (){
var txtfullname = document.forms["register-form"]["fullName"];
	var	fullname = txtfullname.nextElementSibling;
	if(txtfullname == null || txtfullname.value.length == 0){
		fullname.innerHTML = "* Không dược bỏ trông tên đầy đủ.";
		fullname.classList.remove("hidden-text");
	}else if(txtfullname.value.length > 30){
		fullname.innerHTML = "* Tên của bạn quá dài vui lòng nhập lại.";
		fullname.classList.remove("hidden-text");
	}else if (txtfullname.value.length < 10){
		fullname.innerHTML = "* Tên của bạn quá ngắn vui lòng nhập lại.";
		fullname.classList.remove("hidden-text");
	}
	var txtemail = document.forms["register-form"]["email"];
	var	mail = txtemail.nextElementSibling;
	if (txtemail == null || txtemail.value.length==0) {
		mail.innerHTML = "* Không được để trông email.";
		mail.classList.remove("hidden-text");
	}
	var	txtphone = document.forms["register-form"]["phone"];
	var phone = txtphone.nextElementSibling;
	if (txtphone == null || txtphone.value.length == 0) {
		phone.innerHTML = "*Không được để trống số điện thoại";
		phone.classList.remove("hidden-text");
	}
}