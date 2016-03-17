function header(){
    var html = "";
    
    html += '<link rel="shortcut icon" href="/archives/2016/fablabamsterdam/students/205/favicon.png" type="image/png">';
    html += '<link rel="icon" href="/archives/2016/fablabamsterdam/students/205/favicon.png" type="image/png">';

    html += '<link href="http://s3.amazonaws.com/codecademy-content/courses/ltp/css/shift.css" rel="stylesheet">';   
    html += '<link rel="stylesheet" href="http://s3.amazonaws.com/codecademy-content/courses/ltp/css/bootstrap.css">';
    html += '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">';
    html += '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">';
    html += '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>';

    html += '<link rel="stylesheet" href="/archives/2016/fablabamsterdam/students/205/css/main.css">';
    html += '<title>Fab Academy 2016 Report | SHUNICHI MIZUGAKI</title>';
    document.write(html);
}



function navigation(){
    var html = "";

    html += '<div class="nav">';
    html += '<div class="container">';
    html += '<div class="row">';
    html += '<br>';
    html += '<div class="col-md-2">';
    html += '<img src="/archives/2016/fablabamsterdam/students/205/img/logo.jpeg">';
    html += '</div>';
    html += '<div class="col-md-4">';
    html += '<div class="pull-left">';
    html += '<div class="logo">';
    html += '<b>Fab Academy 2016 Report<br> by Shunichi Mizugaki</b>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '<div class="col-md-6">';
    html += '<div class="dropdown">';
    html += '<ul class="pull-right">';
    html += '<li><a href="/archives/2016/fablabamsterdam/students/205/index.html">Home</a></li>';
    html += '<li><a href="/archives/2016/fablabamsterdam/students/205/about.html">About Me</a></li>';
    html += '<li class="menu-item-has-children">';
    html += '<a href="/archives/2016/fablabamsterdam/students/205/assignments/index.html">Weekly Assignments</a>';                 
    html += '<ul class="sub-menu">';
    html += '<li><a href="/archives/2016/fablabamsterdam/students/205/assignments/wk01.html">Wk01: PRINCIPLES AND PRACTICES, PROJECT MANAGEMENT</a></li>';
    html += '<li><a href="/archives/2016/fablabamsterdam/students/205/assignments/wk02.html">Wk02: COMPUTER-AIDED DESIGN</a></li>';
    html += '<li><a href="/archives/2016/fablabamsterdam/students/205/assignments/wk03.html">Wk03: COMPUTER-CONTROLLED CUTTING</a></li>';
    html += '<li><a href="/archives/2016/fablabamsterdam/students/205/assignments/wk04.html">Wk04: ELECTRONICS PRODUCTION</a></li>';
    html += '<li><a href="/archives/2016/fablabamsterdam/students/205/assignments/wk05.html">Wk05: 3D PRINTING AND SCANNING</a></li>';
    html += '<li><a href="/archives/2016/fablabamsterdam/students/205/assignments/wk06.html">Wk06: ELECTRONICS DESIGN (WEEK 1 OF 2)</a></li>';
    html += '<li><a href="/archives/2016/fablabamsterdam/students/205/assignments/wk07.html">Wk07: COMPUTER-CONTROLLED MACHINING</a></li>';
    html += '<li><a href="/archives/2016/fablabamsterdam/students/205/assignments/wk08.html">Wk08: EMBEDDED PROGRAMING (WEEK 2 OF 2)</a></li>';


    html += '<li><a href="#">Coming soon</a></li>';
    html += '</ul>';
    html += '</li>';
    html += '<li class="menu-item-has-children">';
    html += '<a href="/archives/2016/fablabamsterdam/students/205/projects/v01.html">Final Project</a>';
    html += '<ul class="sub-menu">';
    html += '<li><a href="/archives/2016/fablabamsterdam/students/205/projects/v01.html">01 Proposal</a></li>';
    html += '</ul>';
    html += '</li>';
    html += '</ul>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="content">';
    document.write(html);
}



function footer(){
    var html = "";
    html += '</div>';

    html += '<div class="footer">';
    html += '<div class="container">';    
    html += '<div class="row">';
    html += '<div class="col-md-6">';
    html += '<h3>Related Links</h3>';
    html += '<hr>';
    html += '<ul>';
    html += '<li><a href="http://fabacademy.org/" target="_blank">Fab Academy</a></li>';
    html += '<li><a href="http://www.fabfoundation.org/" target="_blank">Fab Foundation</a></li>';
    html += '<li><a href="http://fablab.waag.org/" target="_blank">Fablab Amsterdam</a></li>';
    html += '<li><a href="http://waag.org/en" target="_blank">Waag Society</a></li>';
    html += '<li><a href="#" target="_blank">FAB12 Shenzhen(Coming Soon)</a></li>';
    html += '</ul>';
    html += '</div>';
    html += '<div class="col-md-6">';
    html += '<h3>Writer Info</h3>';
    html += '<hr>';
    html += '<ul>';
    html += '<li>SHUNICHI MIZUGAKI (Japanese)</li>';
    html += '<br>';
    html += '<li>Email: shn.mizugaki@gmail.com</a></li>';
    html += '<li><a href="https://www.facebook.com/Shunichi.Mizugaki" target="_blank">Facebook</a>  |  <a href="https://github.com/smzgk" target="_blank">Github</a>  |  <a href="https://nl.linkedin.com/in/shunichi-mizugaki-2302b051" target="_blank">Linkedin</a></li>';
    html += '</ul>';
    html += '</div>';
    html += '<div class="col-md-12">';
    html += '<div class="text-center">';
    html += '<p>Copy Right All Open.</p>';
    html += '</div>';
    html += '</div>';  
    html += '</div>';  
    html += '</div>';  
    html += '</div>';
    document.write(html);
}














