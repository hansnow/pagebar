<?php 
function GetList($count){
    $articles = array();
    for ($i=1; $i <=$count ; $i++) { 
        array_push($articles,array('url'=>'http://test'.(string)$i.'.com','title'=>'this is a test title ['.(string)$i.']'));
    }
    return $articles;
}

$articles = GetList(100);

$dividCount = 15;
$pagebarContent = '';
$pageContent = '';
$articleCount = count($articles);
$pageCount = ceil($articleCount / $dividCount);
if($pageCount != 1)
    $pagebarContent .= '<li id="first"><a href="#">&laquo;</a></li>';


for ($i=1; $i <=$pageCount ; $i++) {
    $pageContent .= '<div id="page'.(string)$i.'">';
    $pageContent .= '<ul class="list-group">';
    for ($j=($i-1)*$dividCount; $j <$i*$dividCount ; $j++) { 
        if($articles[$j])
            $pageContent .= '<li class="list-group-item">'.$articles[$j]['title'].'</li>';
    }
    $pageContent .= '</ul></div>';
    
    $pagebarContent .= '<li page="'.(string)$i.'"><a href="#">'.(string)$i.'</a></li>';

}
if($pageCount != 1)
    $pagebarContent .= '<li id="last"><a href="#">&raquo;</a></li>';

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Pagebar</title>
  <link rel="stylesheet" href="http://apps.bdimg.com/libs/bootstrap/3.2.0/css/bootstrap.min.css">
  <script src="http://apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js"></script>
  <script src="common.js"></script>
  <script src="http://apps.bdimg.com/libs/bootstrap/3.2.0/js/bootstrap.min.js"></script>
</head>
<body>
  <div class="container">
    <div class="row">
      <?php echo $pageContent; ?>
    </div>
    <div class="row">
      <nav>
        <ul class="pagination">
          <?php echo $pagebarContent; ?>
        </ul>
      </nav>

    </div>
  </div>
</body>
</html>