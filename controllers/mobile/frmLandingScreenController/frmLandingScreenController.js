define({ 

  preshow : function(){
    //for restricting other characters in the text box
    this.view.tbxCommandInput.restrictCharactersSet ="~#^|$%&*!1234567890";
    this.view.btnSubmitString.setEnabled(false);
  },

  buttonSubmitClick : function(){
    //getting value from the text box
    var enteredString = this.view.tbxCommandInput.text.trim();
    var status = validateString(enteredString);

    //function to check if the string only contains characters P M L
    function validateString(txtStr){
      let stat = true;
      var regEx = /^[PMPL]+$/;
      if(!regEx.test(txtStr)){
        stat = false;
      }
      return stat;
    }

    if(status){
      var param ={
        "cmdStr":enteredString
      };
     
      var ntf = new kony.mvc.Navigation("frmResultScreen");
      ntf.navigate(param);

    }
    else{
      alert("Please enter a valid string which consists only \"P\" \"M\" \"L\" ");
      this.view.tbxCommandInput.text="";
      this.view.btnSubmitString.setEnabled(false);
    }
  },
//function to enable and disable the submit button
  enableSubmitButton: function(){        
    const scopeObj = this;
    if(scopeObj.view.tbxCommandInput !=='' && scopeObj.view.tbxCommandInput!==null && scopeObj.view.tbxCommandInput!==undefined ){
      scopeObj.view.btnSubmitString.setEnabled(true);
    } else {
      scopeObj.view.btnSubmitString.setEnabled(false);
    }
  },
  onNavigate : function(){
    this.view.tbxCommandInput.text="";
    this.view.btnSubmitString.setEnabled(false);
  },

});