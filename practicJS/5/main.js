$form.find("input.required:checkbox").each(function(){
    if(!this.checked){
        formData[Object.keys(formData).length] = {
          "name":this.name,"value": ""
        }
    }
});
