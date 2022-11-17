/************************************************* Home Page View ******************************************************/

/* Adding for main page, in the event that users want to go back to the main page */

/* Use $homePageMainDiv to add back to body of page */

let $homePageOuterDiv = $('<div/>', {
    class: 'centered-vertically banner-color',
    id: 'home-page-div',
});

let $homePageMainDiv = $('<div/>', {
    class: 'centered-horizontally',
});

let $homePageBanner = $('<h1/>', {
    class: 'centered-hero',
    html: 'Classroom Note Repository',
});

let $homePageBtnDiv = $('<div/>', {
    class: 'centered-btn-container',
});

let $registerBtn = $('<button/>', {
    type: 'button',
    class: 'btn btn-light mb-1',
});

let $registerLink = $('<a/>', {
    href: '#',
    html: 'Register'
});

let $loginBtn = $('<button/>', {
    type: 'button',
    class: 'btn btn-light mb-1',
});

let $loginLink = $('<a/>', {
    href: '#',
    html: 'Login'
});

$registerBtn.append($registerLink);
$loginBtn.append($loginLink);
$homePageBtnDiv.append($registerBtn, $loginBtn);
$homePageMainDiv.append($homePageBanner, $homePageBtnDiv);
$homePageOuterDiv.append($homePageMainDiv);

$('body').append($homePageOuterDiv);

/********************************** Login and Regstration views ********************************************/
/* Persistent in both registration and login views (begin) */
let $logoDiv = $('<div/>', {
    class: 'banner',
    id: 'logo-banner'
});

let $logoHeader = $('<h3/>', {
    html: 'Classroom Note Repository',
});

$logoDiv.append($logoHeader);

let $outerDiv = $('<div/>', {
    class: 'centered-vertically registration-div',
    id: 'outer-div',
});

let $mainDiv = $('<div/>', {
    class: 'centered-horizontally bg-white m-auto rounded',
    id: 'main-div',
});

let $form = $('<form/>', {
    action: '#',
    id: 'register-login-form',
});

let $registerLoginHeader = $('<h2/>', {
    class: 'text-center pt-3',
    id: 'register-login-header',
});

let $actionBtnDiv = $('<div/>', {
    class: 'd-grid',
    id: 'action-button-div',
});

let $actionBtn = $('<button/>', {
    type: 'button',
    id: 'action-button',
    class: 'btn btn-success banner-color',
});

$actionBtnDiv.append($actionBtn);

let $suggestiveText = $('<p/>', {
    class: 'text-center mt-2',
    id: 'suggestive-text',
});

let $changeViewBtn = $('<a/>', {
    href: '#',
    id: 'change-view',
});

/* Persistent in both registration and login views (end) */

// $emailDiv begin
let $emailDiv = $('<div/>', {
    class: 'input-group mb-3',
    id: 'email-div',
});

let $emailSpan = $('<span/>', {
    class: 'input-group-text',
    id: 'email-span',
});

let $emailIcon = $('<i/>', {
    class: 'fa fa-envelope',
});

let $emailInput = $('<input/>', {
    class: 'form-control',
    id: 'email-input',
    type: 'text',
    placeholder: 'Email',
});

$emailSpan.append($emailIcon);
$emailDiv.append($emailSpan, $emailInput);
// $emailDiv end

// $passwordDiv begin
let $passwordDiv = $('<div/>', {
    class: 'input-group mb-3',
    id: 'password-div',
});

let $passwordSpan = $('<span/>', {
    class: 'input-group-text',
    id: 'password-span',
});

let $passwordIcon = $('<i/>', {
    class: 'fa fa-lock',
});

let $passwordInput = $('<input/>', {
    class: 'form-control',
    id: 'password-input',
    type: 'text',
    placeholder: 'Password',
});

$passwordSpan.append($passwordIcon);
$passwordDiv.append($passwordSpan, $passwordInput);
// $passwordDiv end

/****************** Registration view **********************/
/* First Name start */
let $firstNameDiv = $('<div/>', {
    class: 'input-group mb-3',
    id: 'first-name-div'
});

let $firstNameSpan = $('<span/>', {
    class: 'input-group-text',
    id: 'first-name-span',
});

let $firstNameIcon = $('<i/>', { class: 'fa fa-user'}); 

let $firstNameInput = $('<input/>', {
    type: 'text', 
    class: 'form-control', 
    placeholder: 'First Name',
    id: 'first-name-input'
});

$firstNameSpan.append($firstNameIcon);
$firstNameDiv.append($firstNameSpan, $firstNameInput);
/* First Name end */

/* Last Name start */
let $lastNameDiv = $('<div/>', {
    class: 'input-group mb-3',
    id: 'last-name-div',
});

let $lastNameSpan = $('<span/>', {
    class: 'input-group-text',
    id: 'last-name-span',
});

let $lastNameIcon = $('<i/>', { class: 'fa fa-user'}); 

let $lastNameInput = $('<input/>', {
    type: 'text', 
    class: 'form-control', 
    placeholder: 'Last Name',
    id: 'last-name-input',
});

$lastNameSpan.append($lastNameIcon);
$lastNameDiv.append($lastNameSpan, $lastNameInput);
/* Last Name end */

/* $accountTypeDiv begin */
let $accountTypeDiv = $('<div/>', {
    class: 'input-group mb-3',
    style: 'border-style: groove; border-radius: 7px; border-color: rgba(221,220,220,0.932);',
    id: 'account-type-div',
});

let $accountTypeSpan = $('<span/>', {
    class: 'input-group-text',
    style: 'margin-right: 6px;'
});

let $accountTypeIcon = $('<i/>', {class: 'fa fa-user'});

let $accountTypeOutput = $('<output/>', {
    style: 'margin-right: 12.5px; color:grey',
    html: 'Account Type',
    id: 'account-type-output'
});

let $accountTypeSelect = $('<select/>', {
    name: 'Account Type',
    id: 'account-type',
});

let $accountTypeDefault = $('<option/>', {
    value: '',
    id:'invalid',
});

let $accountTypeStudent = $('<option/>', {
    value: 'Student Account',
    id: 'student-account',
    html: 'Student Account',
});

let $accountTypeInstructor = $('<option/>', {
    value: 'Instructor Account',
    id: 'instructor-account',
    html: 'Instructor Account',
});

$accountTypeSpan.append($accountTypeIcon);
$accountTypeSelect.append($accountTypeDefault, $accountTypeStudent, $accountTypeInstructor);
$accountTypeDiv.append($accountTypeSpan, $accountTypeOutput, $accountTypeSelect);
/* $accountTypeDiv end */

// Recursive function
function changeView(){
    if( $changeViewBtn.text() =="Login Here"){
        // User was on register view
        $lastNameDiv.remove();
        $firstNameDiv.remove();
        $accountTypeDiv.remove();
        $registerLoginHeader.text('Login'); 
        $actionBtn.text('Login Now');
        $changeViewBtn.text('Register Here');
        $changeViewBtn.attr('href', '#');
        $suggestiveText.text('Don\'t Have an Account?');
        $suggestiveText.append($changeViewBtn);
        $changeViewBtn.on('click', ()=>{changeView()});
    }
    else if($changeViewBtn.text() == "Register Here"){
        // User was on login view 
        $form.prepend($lastNameDiv);
        $form.prepend($firstNameDiv);
        $actionBtnDiv.remove();
        $suggestiveText.remove();
        $form.append($accountTypeDiv, $actionBtnDiv, $suggestiveText);
        $registerLoginHeader.text('Register'); 
        $actionBtn.text('Create My Account');
        $changeViewBtn.text('Login Here');
        $changeViewBtn.attr('href', '#');
        $suggestiveText.text('Already Have an Account?');
        $suggestiveText.append($changeViewBtn);
        $changeViewBtn.on('click', ()=>{changeView()});
    }
}

function getRegisterView()
{
    /* Construct registration view, remove body, and append */
    $actionBtn.text('Create My Account');
    $registerLoginHeader.text('Register');
    $suggestiveText.text('Already Have an Account?');
    $changeViewBtn.attr('href', '#');
    $changeViewBtn.text('Login Here');
    $suggestiveText.append($changeViewBtn);
    $form.append($firstNameDiv, $lastNameDiv, $emailDiv, $passwordDiv, $accountTypeDiv, $actionBtnDiv,$suggestiveText);
    $mainDiv.append($registerLoginHeader, $form);
    $outerDiv.append($mainDiv);
    $logoDiv.append($outerDiv);
    $homePageOuterDiv.remove();
    $('body').append($logoDiv); 
}

function getLoginView()
{
    /* Construct registration view, remove body, and append */
    $actionBtn.text('Login Now');
    $registerLoginHeader.text('Login');
    $suggestiveText.text('Don\t Have an Account?');
    $changeViewBtn.attr('href', '#');
    $changeViewBtn.text('Register Here');
    $suggestiveText.append($changeViewBtn);
    $form.append($emailDiv, $passwordDiv,$actionBtnDiv,$suggestiveText);
    $mainDiv.append($registerLoginHeader, $form);
    $outerDiv.append($mainDiv);
    $logoDiv.append($outerDiv);
    $homePageOuterDiv.remove();
    $('body').append($logoDiv);  
}


$changeViewBtn.on('click', ()=>{changeView()});
$registerLink.on('click', ()=>{getRegisterView()});
$loginLink.on('click', ()=>{getLoginView()});



