const errorFlags={
    unameErrFlag:true,
    passwordErrFlag:true
    
}
const validate=(el,authValue)=>{
    let flagName=el+"ErrFlag";
    if($(`#${el}`).val()===authValue){
        errorFlags[flagName]=false;
        const msg='';
        $(`#${el}Error`).html(msg);
        $(`#${el}Error`).addClass('hidden');
    }
    else{
        errorFlags[flagName]=true;
        const msg=`Invalid  ${el} `;
        $(`#${el}Error`).html(msg);
        $(`#${el}Error`).removeClass('hidden');
    }

}
$('#uname').on('input',(e)=>{validate('uname','admin')});
$('#password').on('input',(e)=>{validate('password','12345')});

const redirectAndAuthenticate=()=>{
    window.localStorage.setItem('user',JSON.stringify({uname:'admin'}));
    window.location='todo.html';
}
const loginAction=(e,callback)=>{
    if(!errorFlags['unameErrFlag'] && !errorFlags['passwordErrFlag']){
        e.preventDefault();
        callback();
    }
}
$('#loginBtn').on('click',(e)=>{
    loginAction(e,redirectAndAuthenticate);
}
)