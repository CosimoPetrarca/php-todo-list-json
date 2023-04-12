<?php 

$todoList = file_get_contents(__DIR__.'/todo.json');

$todoList = json_decode($todoList, true);


header('content-Type: application/json');
echo json_encode($todoList);