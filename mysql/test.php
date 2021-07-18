<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="goals.css" />
    <title>Goal Tracker</title>
  </head>
  <body>
    <div id="container">
      <h1>New Goal</h1>
      <form action="insert_goal.php" method="post">
          <label for="cat">Category</label>
          <select name="cat" id="cat">
              <option value="0">Personal</option>
              <option value="1">Professional</option>
              <option value="2">Other</option>
          </select>
          <label for="text">Goal</label>
          <textarea name="text" id="text"></textarea>
          <label for="goaldate">Date</label>
          <input type="date" id="goaldate" name="goaldate" />
          <label for="complete">Goal Completed</label>
          <input type="checkbox" id="complete" name="complete" value="1" /><br/>
          <button type="submit">Submit Goal</button>
      </form>
      <?php
      require_once 'connect.php';
      $sql = "SELECT * FROM megamusi_test";
      $result = mysqli_query($link, $sql) or die(mysqli_error($link));
      print("<h2>Incomplete Goals</h2>");

      //Incomplete Goals
      while($row = mysqli_fetch_array($result)){
            echo "<div class='test'>";
            echo "<a href='complete.php?id=" . $row['id'] . "'></a><strong>";
            echo  "</strong><p>" . $row['nombre'] . "</p>";
            echo "</div>";
      }
      ?>
    </div>
  </body>
</html>